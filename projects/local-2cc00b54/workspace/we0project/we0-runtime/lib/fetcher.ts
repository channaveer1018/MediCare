import { onAuthDialogClose, openAuthDialog } from './auth-dialog.store';
import { DEFAULT_LOCALE, getMessages, parseLocaleFromCookieHeader } from '../i18n';
import { readCmsAuthToken } from './cms-auth';
import { getClientAuthService } from './auth';

let isAuthDialogOpen = false;

// 对话框关闭时重置防重入标志
onAuthDialogClose(() => {
  isAuthDialogOpen = false;
});

const getLoginRequiredMessage = () => {
  const locale =
    typeof document === 'undefined'
      ? DEFAULT_LOCALE
      : parseLocaleFromCookieHeader(document.cookie) ?? DEFAULT_LOCALE;
  return getMessages(locale)['auth.loginRequired'];
};

const getUnauthorizedMessage = async (res: Response) => {
  try {
    const cloned = res.clone();
    const payload = await cloned.json();
    return payload?.error?.message || payload?.message || getLoginRequiredMessage();
  } catch {
    return getLoginRequiredMessage();
  }
};

const isSameOriginRequestUrl = (url: string) => {
  if (url.startsWith('/')) {
    return true;
  }
  try {
    return new URL(url, window.location.origin).origin === window.location.origin;
  } catch {
    return false;
  }
};

const isCmsRequestUrl = (url: string) => {
  if (url.startsWith('/api/cms')) {
    return true;
  }
  return new URL(url, window.location.origin).pathname.startsWith('/api/cms');
};

const isRequestInput = (input: RequestInfo | URL): input is Request => {
  return typeof Request !== 'undefined' && input instanceof Request;
};

/** 为同源请求统一补齐 credentials（供全局 fetch 使用） */
export const applyAuthToFetchArgs = async (
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<[RequestInfo | URL, RequestInit | undefined]> => {
  if (typeof window === 'undefined') {
    return [input, init];
  }

  const url =
    typeof input === 'string'
      ? input
      : input instanceof URL
        ? input.href
        : input.url;

  if (!isSameOriginRequestUrl(url)) {
    return [input, init];
  }

  const headers = new Headers();

  if (isRequestInput(input)) {
    input.headers.forEach((value, key) => headers.set(key, value));
  }
  if (init?.headers) {
    new Headers(init.headers).forEach((value, key) => headers.set(key, value));
  }
  const cmsToken = isCmsRequestUrl(url) ? readCmsAuthToken() : '';
  if (cmsToken && !headers.has('Authorization')) {
    headers.set('Authorization', `Bearer ${cmsToken}`);
  }
  const credentials =
    init?.credentials ??
    (isRequestInput(input) ? input.credentials : undefined) ??
    'include';

  const nextInit: RequestInit = {
    ...init,
    headers,
    credentials,
  };

  return [input, nextInit];
};

const isAuthApiUrl = (url: string) => {
  try {
    return new URL(url, window.location.origin).pathname.startsWith('/api/auth');
  } catch {
    return false;
  }
};

export const handleUnauthorizedResponse = async (res: Response) => {
  if (typeof window === 'undefined' || res.status !== 401) {
    return;
  }

  // getSession 会打 /api/auth/me，未登录本来就是 401，不能当成强制弹登录
  if (res.url && isAuthApiUrl(res.url)) {
    return;
  }

  if (isAuthDialogOpen) {
    return;
  }

  isAuthDialogOpen = true;
  const message = await getUnauthorizedMessage(res);
  const clientAuth = getClientAuthService();
  await clientAuth.signOutLocal();
  clientAuth.clearStorage();

  openAuthDialog({
    message,
    onSuccess: () => {
      isAuthDialogOpen = false;
      window.location.reload();
    },
  });
};

const throwForResponse = async (res: Response) => {
  if (res.ok) {
    return;
  }

  if (res.status === 401) {
    await handleUnauthorizedResponse(res);
  }

  throw new Error(await getUnauthorizedMessage(res));
};

export const createAuthFetcher = () => {
  return async (url: string, options?: RequestInit) => {
    const headers: HeadersInit = {
      ...options?.headers,
    };

    const res = await fetch(url, {
      ...options,
      headers,
      credentials: 'include',
    });

    await throwForResponse(res);

    return res.json();
  };
};

export const authFetcher = async (url: string) => {
  const res = await fetch(url, {
    credentials: 'include',
  });

  await throwForResponse(res);

  return res.json();
};

export const authFetch = async (url: string, options?: RequestInit) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options?.headers,
  };

  const res = await fetch(url, {
    ...options,
    headers,
    credentials: 'include',
  });

  if (res.status === 401) {
    await handleUnauthorizedResponse(res);
  }

  return res;
};
