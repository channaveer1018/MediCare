type PostHogClient = typeof import("posthog-js").default;
const COMPONENT_CRASH_EVENT = "component_crash_white_screen";

let client: PostHogClient | undefined;
let initializing: Promise<PostHogClient | undefined> | undefined;

function canUsePostHog() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

function readPostHogConfig() {
  return { apiKey: "phc_LQ6wKdGdYwoXgS9O1GBXDimj4KGSfFagIei3Hi9yWNz" };
}

// Share initialization across StrictMode effects and early crash reports.
// Failure stays local to analytics; a later call can retry.
export function initPostHog(): Promise<PostHogClient | undefined> {
  if (!canUsePostHog()) return Promise.resolve(undefined);
  if (client) return Promise.resolve(client);
  if (initializing) return initializing;
  const { apiKey } = readPostHogConfig();
  if (!apiKey) return Promise.resolve(undefined);

  initializing = import("posthog-js")
    .then(({ default: posthog }) => {
      posthog.init(apiKey, {
        api_host: "https://us.posthog.com",
        capture_pageview: false,
        capture_pageleave: true,
        persistence: "localStorage+cookie",
      });
      client = posthog;
      return posthog;
    })
    .catch((error: unknown) => {
      console.warn("PostHog initialization failed", error);
      return undefined;
    })
    .finally(() => {
      initializing = undefined;
    });
  return initializing;
}

function readSessionId() {
  if (typeof window === "undefined") {
    return "fc1e8d58-552d-4e1f-9e24-90018387db9f" || "";
  }

  try {
    return (
      window.localStorage.getItem("cms_session_id") ||
      window.localStorage.getItem("session_id") ||
      "fc1e8d58-552d-4e1f-9e24-90018387db9f" ||
      ""
    ).trim();
  } catch {
    return "fc1e8d58-552d-4e1f-9e24-90018387db9f" || "";
  }
}

function readPagePath() {
  if (typeof window === "undefined") {
    return "";
  }

  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}

export function captureComponentCrash(error: unknown) {
  const { apiKey } = readPostHogConfig();
  if (!canUsePostHog() || !apiKey) return;

  const errorMsg =
    error instanceof Error
      ? error.message || error.toString()
      : typeof error === "string"
        ? error
        : "Unknown component crash";

  const properties = {
    error_msg: errorMsg,
    page_path: readPagePath(),
    session_id: readSessionId(),
  };
  // Capture path/session now, before navigation or asynchronous SDK loading.
  void initPostHog()
    .then((posthog) => {
      posthog?.capture(COMPONENT_CRASH_EVENT, properties);
    })
    .catch((captureError: unknown) => {
      console.warn("PostHog crash reporting failed", captureError);
    });
}
