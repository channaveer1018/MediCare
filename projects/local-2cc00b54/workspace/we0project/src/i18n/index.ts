import appEn from "./messages/en.json";
import appDe from "./messages/de.json";
import appEs from "./messages/es.json";
import appFr from "./messages/fr.json";
import appJa from "./messages/ja.json";
import appKo from "./messages/ko.json";
import appPt from "./messages/pt.json";
import appRu from "./messages/ru.json";
import appZh from "./messages/zh.json";
import appZhHK from "./messages/zh-HK.json";
import appZhTW from "./messages/zh-TW.json";
import {
	DEFAULT_LOCALE,
	I18nProvider,
	LOCALE_COOKIE_MAX_AGE,
	LOCALE_COOKIE_NAME,
	LocaleBootstrap,
	SUPPORTED_LOCALES,
	formatLocaleCookieValue,
	getMessages as getRuntimeMessages,
	interpolate,
	normalizeBrowserLocale,
	parseLocaleFromCookieHeader,
	resolveLocaleForSsr,
	setDocumentLocaleCookie,
	tryParseLocale,
	useI18n,
	type Locale,
	type Messages,
} from "../../we0-runtime/i18n";

export {
	DEFAULT_LOCALE,
	I18nProvider,
	LOCALE_COOKIE_MAX_AGE,
	LOCALE_COOKIE_NAME,
	LocaleBootstrap,
	SUPPORTED_LOCALES,
	formatLocaleCookieValue,
	interpolate,
	normalizeBrowserLocale,
	parseLocaleFromCookieHeader,
	resolveLocaleForSsr,
	setDocumentLocaleCookie,
	tryParseLocale,
	useI18n,
};
export type { Locale, MessageKey, Messages } from "../../we0-runtime/i18n";

const appMessagesByLocale = {
	en: appEn,
	zh: appZh,
	de: appDe,
	es: appEs,
	fr: appFr,
	ja: appJa,
	ko: appKo,
	pt: appPt,
	ru: appRu,
	"zh-HK": appZhHK,
	"zh-TW": appZhTW,
} satisfies Record<Locale, Messages>;

export function getMessages(locale: Locale): Messages {
	return {
		...getRuntimeMessages(locale),
		...(appMessagesByLocale[locale] ?? appMessagesByLocale[DEFAULT_LOCALE]),
	};
}

export const appI18n = {
	getMessages,
	resolveLocaleForSsr,
	getHtmlLang: (locale: Locale) => (locale === "zh" ? "zh-CN" : locale),
};
