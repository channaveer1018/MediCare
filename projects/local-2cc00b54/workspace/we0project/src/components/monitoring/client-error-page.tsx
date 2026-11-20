import React, { useEffect, useId, useRef, useState } from 'react';
import { DEFAULT_LOCALE, getMessages, type Locale } from '@/i18n';

type ClientErrorPageProps = {
  message: string;
  name?: string;
  stack?: string | null;
  path?: string;
};

type ViewMode = 'processing' | 'error' | null;

const STREAM_STATUS_QUERY = 'SANDBOX_STREAM_STATUS_QUERY';
const STREAM_STATUS = 'SANDBOX_STREAM_STATUS';
const STREAM_QUERY_TIMEOUT_MS = 800;
const COUNTDOWN_SECONDS = 5;

function readLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;
  return window.__INITIAL_LOCALE__ === 'zh' ? 'zh' : 'en';
}

function readPath(): string {
  if (typeof window === 'undefined') return '/';
  return `${window.location.pathname}${window.location.search}`;
}

function hasHostWindow(): boolean {
  try {
    return Boolean(
      (window.parent && window.parent !== window) ||
        (window.top && window.top !== window) ||
        (window.opener && window.opener !== window),
    );
  } catch {
    return true;
  }
}

function postToHost(payload: Record<string, unknown>): boolean {
  const targets: Window[] = [];

  try {
    if (window.parent && window.parent !== window) {
      targets.push(window.parent);
    }
    if (window.top && window.top !== window && !targets.includes(window.top)) {
      targets.push(window.top);
    }
    if (
      window.opener &&
      window.opener !== window &&
      !targets.includes(window.opener as Window)
    ) {
      targets.push(window.opener as Window);
    }
  } catch {
    // cross-origin access may throw
  }

  for (const target of targets) {
    try {
      target.postMessage(payload, '*');
    } catch {
      // ignore
    }
  }

  return targets.length > 0;
}

function createReportId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export function ClientErrorPage({
  message,
  name = 'Error',
  stack = null,
  path,
}: ClientErrorPageProps) {
  const requestIdRef = useRef(createReportId());
  const settledRef = useRef(false);
  const [view, setView] = useState<ViewMode>(null);
  const [countdown, setCountdown] = useState(COUNTDOWN_SECONDS);
  const [fixRequested, setFixRequested] = useState(false);
  const styleId = useId().replace(/:/g, '');

  const locale = readLocale();
  const messages = getMessages(locale);
  const t = (key: string) => messages[key] ?? key;
  const resolvedPath = path ?? readPath();

  useEffect(() => {
    const settle = (mode: Exclude<ViewMode, null>) => {
      if (settledRef.current) return;
      settledRef.current = true;
      setView(mode);
    };

    const onStreamStatusMessage = (event: MessageEvent) => {
      const data = event?.data;
      if (!data || data.event !== STREAM_STATUS) return;
      if (data.requestId && data.requestId !== requestIdRef.current) return;
      settle(data.streaming ? 'processing' : 'error');
    };

    window.addEventListener('message', onStreamStatusMessage);

    if (!hasHostWindow()) {
      settle('error');
      return () => {
        window.removeEventListener('message', onStreamStatusMessage);
      };
    }

    setView('processing');
    postToHost({
      event: STREAM_STATUS_QUERY,
      requestId: requestIdRef.current,
      href: window.location.href,
      ts: Date.now(),
    });

    const timeoutId = window.setTimeout(() => {
      settle('error');
    }, STREAM_QUERY_TIMEOUT_MS);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener('message', onStreamStatusMessage);
    };
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCountdown((prev) => {
        const next = prev - 1;
        if (next <= 0) {
          window.location.reload();
          return 0;
        }
        return next;
      });
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const handleFix = () => {
    postToHost({
      event: 'SANDBOX_APP_ERROR',
      reportId: createReportId(),
      kind: 'client.render',
      manual: true,
      message,
      stack,
      href: window.location.href,
      ts: Date.now(),
      path: resolvedPath,
      name,
    });
    setFixRequested(true);
  };

  return (
    <div className={`we0-client-error we0-client-error-${styleId}`}>
      <style>{`
        .we0-client-error-${styleId} {
          box-sizing: border-box;
          margin: 0;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          background: #fff;
          color: #18181b;
        }
        .we0-client-error-${styleId} *,
        .we0-client-error-${styleId} *::before,
        .we0-client-error-${styleId} *::after {
          box-sizing: border-box;
        }
        .we0-client-error-${styleId} .card {
          width: 100%;
          max-width: 680px;
        }
        .we0-client-error-${styleId} .banner {
          margin-bottom: 24px;
          font-size: 18px;
          font-weight: 600;
        }
        .we0-client-error-${styleId} .label {
          margin: 0 0 8px;
          font-size: 12px;
          color: #71717a;
        }
        .we0-client-error-${styleId} .path {
          margin: 0 0 20px;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 13px;
          word-break: break-all;
        }
        .we0-client-error-${styleId} .message {
          margin: 0 0 20px;
          font-size: 14px;
          line-height: 1.6;
          white-space: pre-wrap;
          word-break: break-word;
        }
        .we0-client-error-${styleId} .error-stack {
          margin: 0 0 20px;
          padding: 14px;
          max-height: 260px;
          overflow: auto;
          border: 1px solid #e4e4e7;
          border-radius: 6px;
          background: #fafafa;
          color: #3f3f46;
          font-size: 12px;
          line-height: 1.5;
          white-space: pre-wrap;
          word-break: break-word;
        }
        .we0-client-error-${styleId} .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }
        .we0-client-error-${styleId} .btn {
          appearance: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 6px;
          padding: 9px 16px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: opacity 0.2s;
          text-decoration: none;
          background: #18181b;
          color: #fff;
        }
        .we0-client-error-${styleId} .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .we0-client-error-${styleId} .btn:hover:not(:disabled) {
          opacity: 0.85;
        }
        .we0-client-error-${styleId} .btn-secondary {
          background: #fff;
          color: #18181b;
          border: 1px solid #e4e4e7;
        }
        .we0-client-error-${styleId} .btn-secondary:hover {
          opacity: 1;
          background: #fafafa;
        }
        .we0-client-error-${styleId} .processing-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .we0-client-error-${styleId} .refresh-tip {
          font-size: 13px;
          color: #71717a;
        }
        .we0-client-error-${styleId} .countdown {
          font-weight: 600;
          color: #18181b;
        }
        .we0-client-error-${styleId} .processing {
          text-align: center;
          max-width: 420px;
          margin: 0 auto;
        }
        .we0-client-error-${styleId} .processing-spinner {
          width: 36px;
          height: 36px;
          margin: 0 auto 20px;
          border: 3px solid #e4e4e7;
          border-top-color: #18181b;
          border-radius: 9999px;
          animation: we0-client-error-spin-${styleId} 0.9s linear infinite;
        }
        .we0-client-error-${styleId} .processing-title {
          margin: 0 0 10px;
          font-size: 18px;
          font-weight: 600;
        }
        .we0-client-error-${styleId} .processing-desc {
          margin: 0 0 24px;
          font-size: 14px;
          line-height: 1.6;
          color: #71717a;
        }
        @keyframes we0-client-error-spin-${styleId} {
          to { transform: rotate(360deg); }
        }
      `}</style>

      {view === 'processing' ? (
        <div className="processing">
          <div className="processing-spinner" aria-hidden="true" />
          <p className="processing-title">{t('serverError.processingTitle')}</p>
          <p className="processing-desc">{t('serverError.processingDesc')}</p>
          <div className="processing-actions">
            <p className="refresh-tip">
              <span className="countdown">{countdown}</span> {t('serverError.refreshTip')}
            </p>
            <a className="btn btn-secondary" href="/">
              {t('serverError.backHome')}
            </a>
          </div>
        </div>
      ) : null}

      {view === 'error' ? (
        <div className="card">
          <div className="banner">{t('serverError.banner')}</div>
          <div>
            <p className="label">{t('serverError.requestPath')}</p>
            <div className="path">{resolvedPath}</div>
            <p className="label">{t('serverError.errorMessage')}</p>
            <div className="message">{message}</div>
            {stack ? <pre className="error-stack">{stack}</pre> : null}
            <div className="actions">
              <button
                className="btn"
                type="button"
                disabled={fixRequested}
                onClick={handleFix}
              >
                {fixRequested
                  ? t('serverError.fixRequested')
                  : t('serverError.fixButton')}
              </button>
              <a className="btn btn-secondary" href="/">
                {t('serverError.backHome')}
              </a>
              <span className="refresh-tip">
                <span className="countdown">{countdown}</span>{' '}
                {t('serverError.refreshTip')}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
