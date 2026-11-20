import { init, type We0Client } from "we0-analyze-sdk";

let client: We0Client | undefined;

// 初始化埋点
export function initWe0Analyze(): We0Client | undefined {
	if (client || typeof window === "undefined" || typeof document === "undefined") {
		return client;
	}

	const projectId = "fc1e8d58-552d-4e1f-9e24-90018387db9f";
	if (!projectId) {
		throw new Error("PROJECT_ID is required for we0 analyze");
	}

	client = init({
		projectId,
		autoTrackPageview: true,
		endpoint: "/api/we0-analyze/events",
	});
	return client;
}
