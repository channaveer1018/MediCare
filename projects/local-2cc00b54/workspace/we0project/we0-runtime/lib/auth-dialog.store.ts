export interface AuthDialogOptions {
  message?: string;
  onSuccess?: () => void;
  mode?: 'login' | 'register';
}

type OpenerFn = (opts?: AuthDialogOptions) => void;
type CloseFn = () => void;

let _opener: OpenerFn | null = null;
const _closeListeners: Set<CloseFn> = new Set();

export const registerAuthDialogOpener = (fn: OpenerFn) => {
  _opener = fn;
};

export const unregisterAuthDialogOpener = () => {
  _opener = null;
};

export const openAuthDialog = (opts?: AuthDialogOptions) => {
  _opener?.(opts);
};

/** 对话框关闭时通知外部（如 fetcher 重置防重入标志） */
export const onAuthDialogClose = (fn: CloseFn): (() => void) => {
  _closeListeners.add(fn);
  return () => _closeListeners.delete(fn);
};

export const notifyAuthDialogClose = () => {
  _closeListeners.forEach((fn) => fn());
};
