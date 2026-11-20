import type React from "react";
import type { Hono } from "hono";
import type { RouteObject } from "react-router-dom";
import {
	getMessages,
	LocaleBootstrap,
	resolveLocaleForSsr,
	type Locale,
	type Messages,
} from "./i18n";
import { AuthProvider } from "./contexts/auth.context";
import { applyAuthToFetchArgs, handleUnauthorizedResponse } from "./lib/fetcher";
import { initPostHog } from "./lib/posthog";
import { initWe0Analyze } from "./lib/we0-analyze";
import type { SsrPage } from "./ssr/create-ssr-page";
import type { SitemapModel } from "./sitemap";

export type ClientEffect = () => void | (() => void);

export type We0Provider = React.ComponentType<{
	children: React.ReactNode;
}>;

export type AuthDialogSlot = React.ComponentType<{
	open: boolean;
	onOpenChange: (open: boolean) => void;
}>;

export type ErrorBoundarySlot = React.ComponentType<{
	children: React.ReactNode;
}>;

export type We0SsrPageEntry = {
	path: string;
	page?: SsrPage;
};

export type We0I18nConfig = {
	getMessages: (locale: Locale) => Messages;
	resolveLocaleForSsr: (cookieHeader: string | undefined | null) => Locale;
	getHtmlLang?: (locale: Locale) => string;
};

export type We0SsrConfig = {
	documentTitle?: string;
	metaDescription?: string;
	favicon?: string;
	pages?: We0SsrPageEntry[];
};

export type We0Slots = {
	AuthDialog?: AuthDialogSlot;
	ErrorBoundary?: ErrorBoundarySlot;
	Toaster?: React.ComponentType;
	providers?: We0Provider[];
	bootstrap?: React.ComponentType[];
};

export type We0ServerIntegration = () => void;

export type We0AppConfig = {
	routes: RouteObject[];
	apiRoutes?: Hono;
	sitemapModels?: readonly SitemapModel[];
	i18n?: We0I18nConfig;
	ssr?: We0SsrConfig;
	slots?: We0Slots;
	clientEffects?: ClientEffect[];
	serverIntegrations?: We0ServerIntegration[];
};

export type ResolvedWe0AppConfig = Omit<We0AppConfig, "i18n"> & {
	i18n: We0I18nConfig;
};

const installAuthFetch: ClientEffect = () => {
	if (typeof window === "undefined") {
		return;
	}

	const originalFetch = window.fetch.bind(window);
	window.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
		const [nextInput, nextInit] = await applyAuthToFetchArgs(input, init);
		const response = await originalFetch(nextInput, nextInit);
		if (response.status === 401) {
			await handleUnauthorizedResponse(response);
		}
		return response;
	}) as typeof fetch;

	return () => {
		window.fetch = originalFetch;
	};
};

const defaultClientEffects: ClientEffect[] = [
	() => {
		initPostHog();
	},
	() => {
		initWe0Analyze();
	},
	installAuthFetch,
];

export function defineWe0App<const TConfig extends We0AppConfig>(
	config: TConfig,
): TConfig {
	return config;
}

export function resolveWe0AppConfig(config: We0AppConfig): ResolvedWe0AppConfig {
	return {
		...config,
		i18n: config.i18n ?? {
			getMessages,
			resolveLocaleForSsr,
			getHtmlLang: (locale) => (locale.startsWith("zh") ? "zh-CN" : locale),
		},
		slots: {
			...config.slots,
			providers: [AuthProvider, ...(config.slots?.providers ?? [])],
			bootstrap: [LocaleBootstrap, ...(config.slots?.bootstrap ?? [])],
		},
		clientEffects: [...defaultClientEffects, ...(config.clientEffects ?? [])],
	};
}
