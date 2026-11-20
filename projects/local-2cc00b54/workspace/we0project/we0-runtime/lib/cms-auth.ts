const CMS_TOKEN_KEY = 'cms_token';
const CMS_USER_KEY = 'cms_user';

const isBrowser = () => typeof window !== 'undefined';

/** 读取 CMS token */
export const readCmsAuthToken = () => {
  if (!isBrowser()) return '';
  return window.localStorage.getItem(CMS_TOKEN_KEY) || '';
};

/** 同步 CMS token */
export const syncCmsAuthToken = (accessToken?: string | null) => {
  if (!isBrowser()) return;

  if (accessToken) {
    window.localStorage.setItem(CMS_TOKEN_KEY, accessToken);
    return;
  }

  window.localStorage.removeItem(CMS_TOKEN_KEY);
  window.localStorage.removeItem(CMS_USER_KEY);
};

/** 清理 CMS 登录 */
export const clearCmsAuthStorage = () => {
  syncCmsAuthToken(null);
};

