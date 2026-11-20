/**
 * Auth 客户端入口（浏览器安全，不引入 node-only 实现）
 *
 * 浏览器端不选择数据 Provider，只通过 HTTP-only cookie + /api/auth/me
 * 管理 session。AUTH_PROVIDER 仅由服务端用于选择 public_auth_0 的连接方式。
 *
 * 服务端 factory 见 ./server.ts
 */

import type { IClientAuthService } from "./types";
import { PgClientAuthService } from "./pg-auth";

// ---- 懒加载单例 ----

let _clientInstance: IClientAuthService | null = null;

// ============================================================
// 客户端 factory
// ============================================================

export function getClientAuthService(): IClientAuthService {
  if (_clientInstance) return _clientInstance;

  // Provider selection is server-only. Both backends expose the same cookie API.
  _clientInstance = new PgClientAuthService();
  return _clientInstance;
}

// ---- 类型重导出 ----
export type {
  IClientAuthService,
  AuthUser,
  AuthSession,
  AuthResult,
  AuthStateSubscription,
} from "./types";
