import React from 'react';
import { captureComponentCrash } from '@/lib/posthog';
import { ClientErrorPage } from './client-error-page';

type AppErrorBoundaryProps = {
  children: React.ReactNode;
};

type CaughtError = {
  message: string;
  name: string;
  stack: string | null;
};

type AppErrorBoundaryState = {
  hasError: boolean;
  error: CaughtError | null;
  reloading: boolean;
};

// 页面代码加载失败（chunk / 懒加载模块失效）的错误特征。
// 场景：预览 dev server 重启或重新构建后，旧页面里还没加载过的模块地址
// （如 /@vite/lazy?...&clientId=xxx）已失效，点击跳转或进入 /cms 时 import() 失败。
const CHUNK_LOAD_ERROR =
  /Failed to fetch dynamically imported module|Importing a module script failed|error loading dynamically imported module|Loading chunk .* failed/i;
const CHUNK_RELOAD_KEY = 'we0:chunk-reload-at';
const CHUNK_RELOAD_INTERVAL = 10_000;

// 判断这次错误能否用「刷新一次页面」解决：
// 必须是 chunk 加载失败，且 10 秒内没自动刷新过（刷新后仍失败就交给错误页，避免死循环）。
function shouldReloadForChunkError(error: unknown): boolean {
  const message = error instanceof Error ? error.message : String(error ?? '');
  if (!CHUNK_LOAD_ERROR.test(message)) {
    return false;
  }

  try {
    const last = Number(window.sessionStorage.getItem(CHUNK_RELOAD_KEY) || 0);
    return Date.now() - last > CHUNK_RELOAD_INTERVAL;
  } catch {
    return false;
  }
}

function toCaughtError(error: unknown): CaughtError {
  if (error instanceof Error) {
    return {
      message: error.message || 'Unknown error',
      name: error.name || 'Error',
      stack: error.stack || null,
    };
  }

  return {
    message: String(error ?? 'Unknown error'),
    name: 'Error',
    stack: null,
  };
}

export class AppErrorBoundary extends React.Component<
  AppErrorBoundaryProps,
  AppErrorBoundaryState
> {
  private hasReported = false;

  state: AppErrorBoundaryState = {
    hasError: false,
    error: null,
    reloading: false,
  };

  static getDerivedStateFromError(error: unknown): AppErrorBoundaryState {
    return {
      hasError: true,
      error: toCaughtError(error),
      reloading: shouldReloadForChunkError(error),
    };
  }

  componentDidCatch(error: Error) {
    // chunk 失效：记下刷新时间后直接刷新拿新地址，不渲染错误页、不上报
    if (this.state.reloading) {
      window.sessionStorage.setItem(CHUNK_RELOAD_KEY, String(Date.now()));
      window.location.reload();
      return;
    }

    if (this.hasReported) {
      return;
    }

    this.hasReported = true;
    captureComponentCrash(error);
  }

  render() {
    if (this.state.reloading) {
      return null;
    }

    if (this.state.hasError && this.state.error) {
      return (
        <ClientErrorPage
          message={this.state.error.message}
          name={this.state.error.name}
          stack={this.state.error.stack}
        />
      );
    }

    return this.props.children;
  }
}
