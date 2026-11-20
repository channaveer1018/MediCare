import React from "react";
import { BrowserRouter } from "react-router-dom";
import { hydrateRoot } from "react-dom/client";
import { I18nProvider, type Locale } from "./i18n";
import { getBrowserSsrData, SsrDataProvider } from "./ssr/data-context";
import { We0AppShell, withErrorBoundary } from "./app-shell";
import { resolveWe0AppConfig, type We0AppConfig } from "./define-app";

const CMS_BOOTSTRAP_LOADER_ID = "cms-bootstrap-loader";

function readBootstrapLocale(): Locale {
	const value = typeof window !== "undefined" ? window.__INITIAL_LOCALE__ : undefined;
	return value === "zh" ? "zh" : "en";
}

const dismissBootstrapLoader = () => {
	const loader = document.getElementById(CMS_BOOTSTRAP_LOADER_ID);
	if (!loader) {
		return;
	}

	loader.setAttribute("data-state", "exit");
	window.setTimeout(() => {
		loader.remove();
	}, 220);
};

export function hydrateWe0App(config: We0AppConfig) {
	const resolvedConfig = resolveWe0AppConfig(config);
	const rootElement = document.getElementById("root");
	if (!rootElement) {
		return;
	}

	const locale = readBootstrapLocale();
	const messages = resolvedConfig.i18n.getMessages(locale);
	const ssrData = getBrowserSsrData();

	hydrateRoot(
		rootElement,
		<React.StrictMode>
			{withErrorBoundary(
				resolvedConfig,
				<BrowserRouter>
					<I18nProvider locale={locale} messages={messages}>
						<SsrDataProvider data={ssrData}>
							<We0AppShell config={resolvedConfig} />
						</SsrDataProvider>
					</I18nProvider>
				</BrowserRouter>,
			)}
		</React.StrictMode>,
	);

	window.requestAnimationFrame(() => {
		dismissBootstrapLoader();
	});
}
