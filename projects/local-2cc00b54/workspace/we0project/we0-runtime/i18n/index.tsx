import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
} from "react";
import en from "./messages/en.json";
import de from "./messages/de.json";
import es from "./messages/es.json";
import fr from "./messages/fr.json";
import ja from "./messages/ja.json";
import ko from "./messages/ko.json";
import pt from "./messages/pt.json";
import ru from "./messages/ru.json";
import zh from "./messages/zh.json";
import zhHK from "./messages/zh-HK.json";
import zhTW from "./messages/zh-TW.json";

// ─── Constants ───────────────────────────────────────────────────────────────

export const LOCALE_COOKIE_NAME = "i18n_locale";
/** Seconds — 1 year */
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
export const SUPPORTED_LOCALES = [
	"de",
	"en",
	"es",
	"fr",
	"ja",
	"ko",
	"pt",
	"ru",
	"zh",
	"zh-HK",
	"zh-TW",
] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

// ─── Messages ─────────────────────────────────────────────────────────────────

export type MessageKey = string;
export type Messages = Record<MessageKey, string>;

const messagesByLocale: Record<Locale, Messages> = {
	de,
	en,
	es,
	fr,
	ja,
	ko,
	pt,
	ru,
	zh,
	"zh-HK": zhHK,
	"zh-TW": zhTW,
};

export function getMessages(locale: Locale): Messages {
	return messagesByLocale[locale] ?? messagesByLocale.en;
}

export function interpolate(
	template: string,
	vars: Record<string, string | number>,
): string {
	return template.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, name: string) => {
		const v = vars[name];
		return v !== undefined && v !== null ? String(v) : "";
	});
}

// ─── Resolve ──────────────────────────────────────────────────────────────────

export function tryParseLocale(raw: string | null | undefined): Locale | null {
	if (raw == null || raw === "") return null;
	const lower = raw.trim().toLowerCase();
	if (["zh-hk", "zh-hant-hk", "zh-mo"].includes(lower)) return "zh-HK";
	if (["zh-tw", "zh-hant", "zh-hant-tw"].includes(lower)) return "zh-TW";
	if (["zh", "cn", "zh-cn", "zh-hans", "zh-hans-cn"].includes(lower)) return "zh";
	const base = lower.split("-")[0];
	if ((SUPPORTED_LOCALES as readonly string[]).includes(base)) return base as Locale;
	return null;
}

export function normalizeBrowserLocale(raw: string | null | undefined): Locale {
	return tryParseLocale(raw) ?? DEFAULT_LOCALE;
}

export function parseLocaleFromCookieHeader(
	cookieHeader: string | undefined | null,
): Locale | null {
	if (!cookieHeader) return null;
	for (const part of cookieHeader.split(";")) {
		const idx = part.indexOf("=");
		const key = (idx === -1 ? part : part.slice(0, idx)).trim();
		if (key !== LOCALE_COOKIE_NAME) continue;
		const value = idx === -1 ? "" : part.slice(idx + 1).trim();
		try {
			const parsed = tryParseLocale(decodeURIComponent(value));
			if (parsed) return parsed;
		} catch {
			const parsed = tryParseLocale(value);
			if (parsed) return parsed;
		}
	}
	return null;
}

export function resolveLocaleForSsr(
	cookieHeader: string | undefined | null,
): Locale {
	return parseLocaleFromCookieHeader(cookieHeader) ?? DEFAULT_LOCALE;
}

// ─── Cookie ───────────────────────────────────────────────────────────────────

export function formatLocaleCookieValue(locale: Locale): string {
	return `${LOCALE_COOKIE_NAME}=${encodeURIComponent(locale)}; Path=/; Max-Age=${LOCALE_COOKIE_MAX_AGE}; SameSite=Lax`;
}

export function setDocumentLocaleCookie(locale: Locale): void {
	if (typeof document === "undefined") return;
	document.cookie = formatLocaleCookieValue(locale);
}

// ─── Context / Provider ───────────────────────────────────────────────────────

type TFunction = (
	key: MessageKey,
	vars?: Record<string, string | number>,
) => string;

const I18nContext = createContext<{ locale: Locale; t: TFunction } | null>(
	null,
);

export function I18nProvider({
	locale,
	messages,
	children,
}: {
	locale: Locale;
	messages: Messages;
	children: React.ReactNode;
}) {
	const t = useCallback<TFunction>(
		(key, vars) => {
			const raw = messages[key] ?? String(key);
			return vars ? interpolate(raw, vars) : raw;
		},
		[messages],
	);
	const value = useMemo(() => ({ locale, t }), [locale, t]);
	return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
	const ctx = useContext(I18nContext);
	if (!ctx) throw new Error("useI18n must be used within I18nProvider");
	return ctx;
}

// ─── LocaleBootstrap ──────────────────────────────────────────────────────────

/**
 * locale-bridge.js 已在 <head> 注入并同步运行，负责：
 *   - 监听宿主 postMessage → 写 Cookie → 触发 we0-locale-received 事件 → 必要时刷新
 *
 * LocaleBootstrap 只处理「未收到任何 postMessage」的 fallback：
 *   Cookie 有值 → 沿用；无值 → 用浏览器语言写入 Cookie；
 *   与 SSR 语言不符 → 刷新对齐。
 */
export function LocaleBootstrap() {
	useEffect(() => {
		if (typeof window === "undefined") return;

		// locale-bridge.js 已经处理过了，无需重复操作
		if ((window as Window & { __LOCALE_FROM_BRIDGE__?: string }).__LOCALE_FROM_BRIDGE__) {
			return;
		}

		const initial = tryParseLocale(window.__INITIAL_LOCALE__) ?? DEFAULT_LOCALE;

		const cookieLoc = parseLocaleFromCookieHeader(document.cookie);
		const resolved = cookieLoc ?? normalizeBrowserLocale(navigator.language);
		if (!cookieLoc) setDocumentLocaleCookie(resolved);
		if (resolved !== initial) window.location.reload();
	}, []);

	return null;
}
