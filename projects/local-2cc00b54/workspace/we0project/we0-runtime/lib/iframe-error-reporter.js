const ERROR_EVENT_NAME = "SANDBOX_APP_ERROR";
const ERROR_ACK_EVENT_NAME = "SANDBOX_APP_ERROR_ACK";
const REPORT_TARGET_ORIGIN = "*";
const WHITE_SCREEN_CHECK_DELAY_MS = 40000;
const WHITE_TIP_MESSAGE_TYPE = "white-tip";
const INSTALL_FLAG = "__WE0_IFRAME_ERROR_REPORTER_INSTALLED__";
const RECENT_REPORT_TTL = 1000;
const ENABLE_ERROR_DEDUP = false;
const CMS_PRELOAD_MESSAGE_TYPE = "we0-preload-cms";
const CMS_PRELOAD_LINK_ID = "__we0_cms_preload__";
const CMS_SCRIPT_SRC = "https://we0.ai/assets/we0-cms/we0-cms.js";
// 把需要过滤的错误放入到这里，做正则匹配
const NON_FATAL_WARNING_PATTERNS = [
    /\[WDS\] Disconnected!/i,
    /\[WDS\] App updated\. Recompiling\.\.\./i,
    /\[WDS\] App hot update\.\.\./i,
    /\[WDS\] Nothing changed\./i,
    /^Warning:/i,
    /\bdeprecated\b/i,
    /sourceMappingURL/i,
    /unreachable code after return statement/i,
    /ResizeObserver loop limit exceeded/i,
    /ResizeObserver loop completed with undelivered notifications\./i,
    /Download the React DevTools/i,
    /An update to .* inside a test was not wrapped in act/i,
    /Can't perform a React state update on an unmounted component/i,
    /Each child in a list should have a unique ["']key["'] prop/i,
    /React does not recognize the .* prop on a DOM element/i,
    /Received (?:`|')true(?:`|') for a non-boolean attribute/i,
    /Hydration failed because the initial UI does not match what was rendered on the server/i,
    /There was an error while hydrating/i,
    /Text content does not match server-rendered HTML/i,
    /The server did not finish this Suspense boundary/i,
    /This Suspense boundary received an update before it finished hydrating/i,
    /renderToString.*does not support Suspense/i,
    /Cannot read properties of undefined \(reading ['"`]call['"`]\).*webpack_require/i,
    /The above error occurred in one of your React components:/i,
    /w\.extend is not a function stack: Error: w\.extend is not a function at/i,
    /\bw\.extend is not a function\b/i,
    /^Script error\.?$/i,
    /\bScript error\b/i,
];
const SUPABASE_SCHEMA_CACHE_ERROR = "Could not query the database for the schema cache";
const isNonFatalMessage = (message) => {
    const normalizedMessage = typeof message === "string" ? message.trim() : "";
    if (!normalizedMessage) {
        return false;
    }

    return NON_FATAL_WARNING_PATTERNS.some((pattern) => pattern.test(normalizedMessage));
};
const CMS_PACKAGE_PATTERNS = [
    /@wecode-team[\\/](?:we0-cms|cms-supabase-api)(?:[\\/]|$)/i,
    /[\\/]vendor-cms(?:[.-][a-z0-9_-]+)?\.js(?:[?#:]|$)/i,
];
const isCmsApiRequest = (url) => {
    if (typeof url !== "string" || !url) {
        return false;
    }

    try {
        const pathname = new URL(url, window.location.href).pathname;
        return pathname === "/api/cms" || pathname.startsWith("/api/cms/");
    } catch {
        return false;
    }
};
const getSearchablePayloadText = (value, seen = new WeakSet()) => {
    if (value == null) {
        return "";
    }
    if (typeof value === "string") {
        return value;
    }
    if (typeof value !== "object") {
        return String(value);
    }
    if (seen.has(value)) {
        return "";
    }

    seen.add(value);
    return Object.values(value)
        .map((item) => getSearchablePayloadText(item, seen))
        .join("\n");
};
const WEBPACK_HOT_UPDATE_NOISE_PATTERNS = [
    /webpackHotUpdate/i,
    /\.hot-update\.js(?:[?#:]|$)/i,
    /jsonp chunk loading/i,
];
const isWebpackHotUpdateNoisePayload = (payload) => {
    const searchableText = [
            payload.message,
            payload.source,
            payload.stack,
            payload.href,
        ]
        .filter((value) => typeof value === "string")
        .join("\n");

    return WEBPACK_HOT_UPDATE_NOISE_PATTERNS.some((pattern) =>
        pattern.test(searchableText),
    );
};
const isCmsPackagePayload = (payload) => {
    if (payload.kind === "api.request" && isCmsApiRequest(payload.url)) {
        return true;
    }

    const sourceText = [payload.source, payload.stack]
        .filter((value) => typeof value === "string")
        .join("\n");
    if (CMS_PACKAGE_PATTERNS.some((pattern) => pattern.test(sourceText))) {
        return true;
    }

    const searchableText = getSearchablePayloadText(payload);
    return CMS_PACKAGE_PATTERNS.some((pattern) => pattern.test(searchableText));
};
// 集中维护错误忽略规则：kind 限定错误类型，matches 返回 true 时不向父页面上报。
const IGNORED_ERROR_RULES = [{
        matches: (payload) => isCmsPackagePayload(payload),
    },
    {
        matches: (payload) => isWebpackHotUpdateNoisePayload(payload),
    },
    {
        kind: "api.request",
        matches: () => false,
    },
    {
        kind: "window.error",
        matches: (payload) => isNonFatalMessage(payload.message),
    },
    {
        kind: "window.unhandledrejection",
        matches: (payload) => isNonFatalMessage(payload.message),
    },
    {
        kind: "console.error",
        matches: (payload) => isNonFatalMessage(payload.message),
    },
];

const globalScope = window;

if (!globalScope[INSTALL_FLAG]) {
    globalScope[INSTALL_FLAG] = true;

    const recentReports = new Map();
    const pendingAcks = new Map();
    const originalConsoleError = console.error.bind(console);

    const preloadCmsScript = () => {
        if (document.getElementById(CMS_PRELOAD_LINK_ID)) {
            return;
        }

        const link = document.createElement("link");
        link.id = CMS_PRELOAD_LINK_ID;
        link.rel = "preload";
        link.as = "script";
        link.href = CMS_SCRIPT_SRC;
        (document.head || document.documentElement).appendChild(link);
    };

    const cleanupRecentReports = () => {
        const now = Date.now();
        for (const [key, timestamp] of recentReports.entries()) {
            if (now - timestamp > RECENT_REPORT_TTL) {
                recentReports.delete(key);
            }
        }
    };

    // 生成每次错误上报的唯一标识，用于父子页面 ACK 对应。
    const createReportId = () =>
        `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

    // 记录已发送的 reportId，用于匹配父页面 ACK。
    const registerPendingAck = (reportId) => {
        if (!reportId) {
            return;
        }
        pendingAcks.set(reportId, true);
    };

    // 收到父页面 ACK 后移除等待中的 reportId。
    const clearPendingAck = (reportId) => {
        if (!reportId) {
            return;
        }
        if (pendingAcks.has(reportId)) {
            pendingAcks.delete(reportId);
        }
    };

    const toSerializable = (value, depth = 0) => {
        if (value instanceof Error) {
            return {
                name: value.name,
                message: value.message,
                stack: value.stack || null,
            };
        }

        if (value == null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
            return value;
        }

        if (depth >= 2) {
            return String(value);
        }

        if (Array.isArray(value)) {
            return value.map((item) => toSerializable(item, depth + 1));
        }

        if (typeof value === "object") {
            try {
                return Object.fromEntries(
                    Object.entries(value).map(([key, item]) => [key, toSerializable(item, depth + 1)])
                );
            } catch {
                return String(value);
            }
        }

        return String(value);
    };

    // 构建错误payload
    const buildErrorPayload = (kind, details) => ({
        event: ERROR_EVENT_NAME,
        reportId: createReportId(),
        kind,
        href: window.location.href,
        ts: Date.now(),
        ...details,
    });

    const shouldIgnorePayload = (payload) =>
        IGNORED_ERROR_RULES.some((rule) => {
            if (rule.kind && rule.kind !== payload.kind) {
                return false;
            }

            if (typeof rule.matches === "function") {
                return rule.matches(payload);
            }

            if (rule.messageIncludes ? .length) {
                const message = payload.message || "";
                return rule.messageIncludes.some((keyword) => message.includes(keyword));
            }

            return false;
        });

    // 构建指纹
    const getFingerprint = (payload) =>
        JSON.stringify([
            payload.kind,
            payload.message || "",
            payload.stack || "",
            payload.source || "",
            payload.lineno || "",
            payload.colno || "",
        ]);

    // 发送错误到父级
    const postToParent = (kind, details) => {
        if (!window.parent || window.parent === window) {
            console.log("[iframe-error-reporter] iframe网址 父级不存在");
            return;
        }

        const payload = buildErrorPayload(kind, details);
        console.log("[iframe-error-reporter] iframe网址 构建错误payload成功", payload);

        if (shouldIgnorePayload(payload)) {
            console.log("[iframe-error-reporter] iframe网址 命中忽略白名单");
            return;
        }

        if (ENABLE_ERROR_DEDUP) {
            cleanupRecentReports();
            console.log("[iframe-error-reporter] iframe网址 清理最近报告成功");

            const fingerprint = getFingerprint(payload);
            console.log("[iframe-error-reporter] iframe网址 构建指纹成功");
            if (recentReports.has(fingerprint)) {
                console.log("[iframe-error-reporter] iframe网址 指纹已存在");
                return;
            }
            console.log("[iframe-error-reporter] iframe网址 指纹不存在");
            recentReports.set(fingerprint, payload.ts);
            console.log("[iframe-error-reporter] iframe网址 设置指纹成功");
        }

        try {
            registerPendingAck(payload.reportId);
            window.parent.postMessage(payload, REPORT_TARGET_ORIGIN);
            console.log("[iframe-error-reporter] iframe网址 错误已发送，等待父级ACK", payload.reportId);
        } catch {
            if (payload.reportId) {
                clearPendingAck(payload.reportId);
            }
            console.log("iframe网址 发送错误到父级失败");
            // Ignore cross-context delivery failures.
        }
    };

    // 监听父页面回复
    window.addEventListener("message", (event) => {
        const data = event.data;
        if (
            data ? .type === CMS_PRELOAD_MESSAGE_TYPE &&
            event.source === window.parent
        ) {
            preloadCmsScript();
            return;
        }

        if (data ? .event !== ERROR_ACK_EVENT_NAME || !data.reportId) {
            return;
        }

        if (!pendingAcks.has(data.reportId)) {
            return;
        }

        clearPendingAck(data.reportId);
        console.log("[iframe-error-reporter] iframe网址 收到父级ACK，错误发送成功", data.reportId);
    });

    window.addEventListener("error", (event) => {
        const error = event.error instanceof Error ? event.error : null;
        console.log("[iframe-error-reporter] iframe网址 监听window.error成功", event);
        postToParent("window.error", {
            message: event.message || error ? .message || "Unknown runtime error",
            stack: error ? .stack || null,
            source: event.filename || null,
            lineno: event.lineno || null,
            colno: event.colno || null,
        });
    });

    window.addEventListener("unhandledrejection", (event) => {
        const reason = event.reason;
        const error = reason instanceof Error ? reason : null;
        console.log("[iframe-error-reporter] iframe网址 监听window.unhandledrejection成功", event);
        postToParent("window.unhandledrejection", {
            message: error ? .message || String(reason),
            stack: error ? .stack || null,
            reason: toSerializable(reason),
        });
    });

    console.error = (...args) => {
        console.log("[iframe-error-reporter] iframe网址 监听console.error成功", args);
        postToParent("console.error", {
            message: args.map((arg) => (arg instanceof Error ? arg.message : String(arg))).join(" "),
            args: args.map((arg) => toSerializable(arg)),
        });

        originalConsoleError(...args);
    };

    // 拦截 /api/* 请求：网络失败或 HTTP 非成功时向父页面告警（与 SANDBOX_APP_ERROR 同通道）
    const originalFetch = globalScope.fetch ? .bind(globalScope);
    if (typeof originalFetch === "function") {
        const getRequestUrl = (input) => {
            if (typeof input === "string") {
                return input;
            }
            if (typeof Request !== "undefined" && input instanceof Request) {
                return input.url;
            }
            return String(input);
        };

        const isProjectApiRequest = (input) => {
            try {
                const raw = getRequestUrl(input);
                if (raw.startsWith("/api/")) {
                    return true;
                }
                if (raw.startsWith("http://") || raw.startsWith("https://")) {
                    const u = new URL(raw);
                    return u.origin === window.location.origin && u.pathname.startsWith("/api/");
                }
                const resolved = new URL(raw, window.location.href);
                return resolved.origin === window.location.origin && resolved.pathname.startsWith("/api/");
            } catch {
                return false;
            }
        };

        const getSearchableResponseText = (bodyText) => {
            const trimmed = typeof bodyText === "string" ? bodyText.trim() : "";
            if (!trimmed) {
                return "";
            }

            try {
                return JSON.stringify(JSON.parse(trimmed));
            } catch {
                return trimmed;
            }
        };

        // 页面卸载或切换查询时会主动取消旧请求；只忽略这类取消，超时和真正的网络失败仍要上报。
        const isRequestCancelled = (error, input, init) => {
            const signal = init ? .signal !== undefined ?
                init.signal :
                typeof Request !== "undefined" && input instanceof Request ?
                input.signal :
                null;

            return error ? .name === "AbortError" || (
                signal ? .aborted && error === signal.reason && error ? .name !== "TimeoutError"
            );
        };

        const reportApiError = async (response, urlForLog) => {
            let bodyText = "";
            try {
                bodyText = await response.clone().text();
            } catch {
                // continue with empty body
            }

            const bodyString = getSearchableResponseText(bodyText);
            if (bodyString.includes(SUPABASE_SCHEMA_CACHE_ERROR)) {
                return;
            }

            postToParent("api.request", {
                message: `API ${response.status} ${response.statusText || ""}: ${urlForLog} ${bodyString}`.trim(),
                url: urlForLog,
                status: response.status,
                statusText: response.statusText || "",
            });
        };

        globalScope.fetch = function we0PatchedFetch(input, init) {
            const urlForLog = getRequestUrl(input);
            return originalFetch(input, init).then(
                (response) => {
                    if (isProjectApiRequest(input) && !response.ok) {
                        void reportApiError(response, urlForLog);
                    }
                    return response;
                },
                (err) => {
                    if (isProjectApiRequest(input) && !isRequestCancelled(err, input, init)) {
                        const error = err instanceof Error ? err : null;
                        postToParent("api.request", {
                            message: error ? .message || String(err),
                            stack: error ? .stack || null,
                            url: urlForLog,
                            reason: "network",
                        });
                    }
                    throw err;
                }
            );
        };
    }

    /** 40s 后做一次轻量白屏判断（无 #root、无子节点或几乎无可见区域与文案时视为疑似白屏） */
    const isLikelyWhiteScreen = () => {
        const root = document.getElementById("root");
        if (!root) {
            return true;
        }
        if (root.childElementCount > 0) {
            const {
                width,
                height
            } = root.getBoundingClientRect();
            if (width >= 4 && height >= 4) {
                return false;
            }
        }
        const text = (document.body ? .innerText || "").trim();
        return text.length < 12;
    };

    const postWhiteTip = () => {
        const payload = {
            type: WHITE_TIP_MESSAGE_TYPE,
            href: window.location.href,
            ts: Date.now(),
        };
        try {
            window.postMessage(payload, REPORT_TARGET_ORIGIN);
        } catch {
            // ignore
        }
        if (!window.parent || window.parent === window) {
            return;
        }
        try {
            window.parent.postMessage(payload, REPORT_TARGET_ORIGIN);
        } catch {
            // ignore
        }
    };

    const runWhiteScreenCheckAfterDelay = () => {
        window.setTimeout(() => {
            if (isLikelyWhiteScreen()) {
                postWhiteTip();
            }
        }, WHITE_SCREEN_CHECK_DELAY_MS);
    };

    if (document.readyState === "complete") {
        runWhiteScreenCheckAfterDelay();
    } else {
        window.addEventListener("load", runWhiteScreenCheckAfterDelay, {
            once: true
        });
    }

    // const triggerReporterTestErrors = () => {
    //   setTimeout(() => {
    //     console.error("[debug][iframe-error-reporter] test console.error", new Error("iframe reporter test console error"));
    //   }, 0);

    //   setTimeout(() => {
    //     Promise.reject(new Error("[debug]iframe reporter test unhandled rejection"));
    //   }, 50);

    //   setTimeout(() => {
    //     throw new Error("[debug]iframe reporter test runtime error");
    //   }, 100);
    // };

    // triggerReporterTestErrors();
}