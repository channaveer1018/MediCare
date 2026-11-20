import type {
  IClientAuthService,
  AuthSession,
  AuthUser,
  AuthStateSubscription,
} from "./types";

/**
 * IClientAuthService 的 PG 实现
 *
 * 不依赖任何 SDK，所有 session 管理通过 HTTP cookie + 内存事件 emitter。
 * AuthContext 通过此接口与 auth provider 解耦。
 */
export class PgClientAuthService implements IClientAuthService {
  private listeners = new Set<(session: AuthSession | null) => void>();

  private session: AuthSession | null = null;

  private pendingSession: Promise<{ session: AuthSession | null }> | null =
    null;
  private sessionRevision = 0;

  getSession(): Promise<{ session: AuthSession | null }> {
    if (this.session) return Promise.resolve({ session: this.session });
    if (!this.pendingSession) {
      const pending = this.restoreSession().finally(() => {
        if (this.pendingSession === pending) this.pendingSession = null;
      });
      this.pendingSession = pending;
    }
    return this.pendingSession;
  }

  private async restoreSession(): Promise<{ session: AuthSession | null }> {
    const revision = this.sessionRevision;
    // 首次调用时尝试从 /api/auth/me 恢复 session
    if (!this.session) {
      try {
        const res = await fetch("/api/auth/me", { credentials: "include" });
        if (res.ok) {
          const body = await res.json();
          if (body.success && body.data && revision === this.sessionRevision) {
            const user: AuthUser = body.data;
            this.session = {
              accessToken: "", // HTTP-only cookie，客户端不可读
              refreshToken: "",
              user,
            };
          }
        }
      } catch {
        // 网络错误，返回 null
      }
    }

    return { session: this.session };
  }

  onAuthStateChange(
    callback: (session: AuthSession | null) => void,
  ): AuthStateSubscription {
    this.listeners.add(callback);

    // 立即触发一次当前状态
    callback(this.session);

    return {
      unsubscribe: () => {
        this.listeners.delete(callback);
      },
    };
  }

  async setSession(session: {
    accessToken: string;
    refreshToken: string;
  }): Promise<{ error: Error | null }> {
    const revision = ++this.sessionRevision;
    this.pendingSession = null;
    // 通过 /api/auth/me 获取 user 信息
    try {
      const res = await fetch("/api/auth/me", { credentials: "include" });
      if (res.ok) {
        const body = await res.json();
        if (revision !== this.sessionRevision) {
          return {
            error: new Error("Auth state changed during session restore"),
          };
        }
        if (body.success && body.data) {
          this.sessionRevision++;
          this.pendingSession = null;
          this.session = {
            accessToken: session.accessToken,
            refreshToken: session.refreshToken,
            user: body.data,
          };
          this.emit(this.session);
          return { error: null };
        }
      }
      return { error: new Error("Failed to get user info") };
    } catch (err) {
      return { error: err as Error };
    }
  }

  async signOutLocal(): Promise<void> {
    this.sessionRevision++;
    this.pendingSession = null;
    this.session = null;
    this.emit(null);
  }

  clearStorage(): void {
    // PG auth 不使用 localStorage，nothing to clear
  }

  // ---- private ----

  private emit(session: AuthSession | null): void {
    for (const listener of this.listeners) {
      try {
        listener(session);
      } catch {
        // 忽略单个 listener 的错误
      }
    }
  }
}
