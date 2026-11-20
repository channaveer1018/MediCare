import React, { createContext, useContext, useEffect, useState } from 'react';
import { getClientAuthService } from '../lib/auth';
import type { AuthUser, AuthSession } from '../lib/auth';

interface AuthContextType {
  user: AuthUser | null;
  session: AuthSession | null;
  loading: boolean;
  signUp: (email: string, password: string, username?: string) => Promise<{ error: Error | null }>;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [session, setSession] = useState<AuthSession | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const clientAuth = getClientAuthService();
    let restoring = true;

    clientAuth.getSession().then(({ session }) => {
      restoring = false;
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const { unsubscribe } = clientAuth.onAuthStateChange((session) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (!restoring || session) setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const getSessionId = () => {
    if (typeof window === 'undefined') return '';
    return (
      window.localStorage.getItem('cms_session_id') ||
      window.localStorage.getItem('session_id') ||
      "fc1e8d58-552d-4e1f-9e24-90018387db9f" ||
      ''
    ).trim();
  };

  const signUp = async (email: string, password: string, username?: string) => {
    try {
      const sessionId = getSessionId();
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          ...(sessionId ? { 'X-Session-Id': sessionId } : {}),
        },
        body: JSON.stringify({ email, password, username }),
      });
      const result = await res.json();
      if (!result.success) {
        return { error: new Error(result.error?.message || 'Registration failed') };
      }

      // Cookie 已由服务端写入，同步本地 session 保持客户端 SDK 兼容
      const authSession = result?.data?.session;
      if (authSession?.accessToken && authSession?.refreshToken) {
        const clientAuth = getClientAuthService();
        await clientAuth.setSession({
          accessToken: authSession.accessToken,
          refreshToken: authSession.refreshToken,
        });
      }

      return { error: null };
    } catch (error) {
      return { error: error as Error };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const sessionId = getSessionId();
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          ...(sessionId ? { 'X-Session-Id': sessionId } : {}),
        },
        body: JSON.stringify({ email, password }),
      });
      const result = await res.json();
      if (!result.success) {
        return { error: new Error(result.error?.message || 'Login failed') };
      }

      // Cookie 已由服务端写入，同步本地 session 保持客户端 SDK 兼容
      const authSession = result?.data?.session;
      if (authSession?.accessToken && authSession?.refreshToken) {
        const clientAuth = getClientAuthService();
        const { error } = await clientAuth.setSession({
          accessToken: authSession.accessToken,
          refreshToken: authSession.refreshToken,
        });
        return { error };
      }

      return { error: null };
    } catch (error) {
      return { error: error as Error };
    }
  };

  const signOut = async () => {
    // 先通知服务端清 Cookie；失败也不应阻止前端立即退出
    await fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    }).catch(() => {});

    const clientAuth = getClientAuthService();
    // 只做本地退出，避免网络问题导致”点了没反应”
    await clientAuth.signOutLocal();
    clientAuth.clearStorage();
    setSession(null);
    setUser(null);
  };

  const value = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
