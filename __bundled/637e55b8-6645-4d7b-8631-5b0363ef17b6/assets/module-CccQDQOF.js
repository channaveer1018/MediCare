import {
    r as __exportAll
} from "./rolldown-runtime-BArtza26.js";

__rolldown_runtime__.registerGraph({
    ids: [".deps/07eae310e828/node_modules/.pnpm/posthog-js@1.446.0_@types+react@18.3.31_react@18.3.1/node_modules/posthog-js/dist/module.mjs"],
    localCount: 1,
    edges: [
        []
    ]
});
// .deps/07eae310e828/node_modules/.pnpm/posthog-js@1.446.0_@types+react@18.3.31_react@18.3.1/node_modules/posthog-js/dist/module.mjs
var module_exports = /* @__PURE__ */ __exportAll({
    Compression: () => aa,
    DEFAULT_PRODUCT_TOUR_APPEARANCE: () => wa,
    DisplaySurveyType: () => ya,
    PostHog: () => Wh,
    ProductTourEventName: () => $a,
    ProductTourEventProperties: () => Sa,
    SurveyEventName: () => _a,
    SurveyEventProperties: () => ma,
    SurveyEventType: () => ua,
    SurveyPosition: () => ca,
    SurveyQuestionBranchingType: () => pa,
    SurveyQuestionType: () => fa,
    SurveySchedule: () => ga,
    SurveyTabPosition: () => da,
    SurveyType: () => va,
    SurveyWidgetType: () => ha,
    default: () => ef,
    posthog: () => tf,
    severityLevels: () => Pa
});
const module_hot = __rolldown_runtime__.createModuleHotContext(".deps/07eae310e828/node_modules/.pnpm/posthog-js@1.446.0_@types+react@18.3.31_react@18.3.1/node_modules/posthog-js/dist/module.mjs");
__rolldown_runtime__.registerModule(".deps/07eae310e828/node_modules/.pnpm/posthog-js@1.446.0_@types+react@18.3.31_react@18.3.1/node_modules/posthog-js/dist/module.mjs", {
    exports: module_exports
});
var t = "u" > typeof window ? window : void 0;
var i = "u" > typeof globalThis ? globalThis : t;
var e = null == i ? void 0 : i.navigator;
var s = null == i ? void 0 : i.document;
var n = null == i ? void 0 : i.location;
var r = null == i ? void 0 : i.fetch;
var o = (null == i ? void 0 : i.XMLHttpRequest) && "withCredentials" in new i.XMLHttpRequest() ? i.XMLHttpRequest : void 0;
var l = null == i ? void 0 : i.AbortController;
var a = null == i ? void 0 : i.CompressionStream;
var u = null == e ? void 0 : e.userAgent;
var h = "undefined" != typeof globalThis ? globalThis : t;
h && "undefined" == typeof self && (h.self = h), h && "undefined" == typeof File && (h.File = function() {});
var c = null != t ? t : {};
var d = "0.10.6";
var v = {
    DEBUG: !1,
    LIB_VERSION: d,
    LIB_NAME: "browser-common",
    JS_SDK_VERSION: d
};
var f = function(t) {
    return t.AnonymousId = "anonymous_id", t.DistinctId = "distinct_id", t.Props = "props", t.EnablePersonProcessing = "enable_person_processing", t.PersonMode = "person_mode", t.FeatureFlagDetails = "feature_flag_details", t.FeatureFlags = "feature_flags", t.FeatureFlagPayloads = "feature_flag_payloads", t.BootstrapFeatureFlagDetails = "bootstrap_feature_flag_details", t.BootstrapFeatureFlags = "bootstrap_feature_flags", t.BootstrapFeatureFlagPayloads = "bootstrap_feature_flag_payloads", t.OverrideFeatureFlags = "override_feature_flags", t.Queue = "queue", t.AiQueue = "ai_queue", t.AiCaptureQueue = "ai_capture_queue", t.LogsQueue = "logs_queue", t.OptedOut = "opted_out", t.SessionId = "session_id", t.SessionStartTimestamp = "session_start_timestamp", t.SessionLastTimestamp = "session_timestamp", t.PersonProperties = "person_properties", t.GroupProperties = "group_properties", t.InstalledAppBuild = "installed_app_build", t.InstalledAppVersion = "installed_app_version", t.SessionReplay = "session_replay", t.PushRegistered = "push_registered", t.SessionReplayEventTriggerActivatedSession = "session_replay_event_trigger_activated_session", t.SurveyLastSeenDate = "survey_last_seen_date", t.SurveysInProgress = "surveys_in_progress", t.SurveysSeen = "surveys_seen", t.Surveys = "surveys", t.RemoteConfig = "remote_config", t.FlagsEndpointWasHit = "flags_endpoint_was_hit", t.DeviceId = "device_id", t;
}({});
var p = function(t) {
    return t.GZipJS = "gzip-js", t.Base64 = "base64", t;
}({});
var g = [
    "$snapshot",
    "$pageview",
    "$pageleave",
    "$set",
    "survey dismissed",
    "survey sent",
    "survey shown",
    "$identify",
    "$groupidentify",
    "$create_alias",
    "$$client_ingestion_warning",
    "$web_experiment_applied",
    "$feature_enrollment_update",
    "$feature_flag_called"
];
var _ = ["token"];

function m(t, i) {
    return -1 !== t.indexOf(i);
}
var y = function(t) {
    return t.trim();
};
var b = function(t) {
    return t.replace(/^\$/, "");
};

function w(t) {
    var i;
    const e = [];
    return null !== (i = JSON.stringify(t, function(t, i) {
        if ("bigint" == typeof i) return i.toString();
        if ("function" != typeof i && "symbol" != typeof i) {
            if (i instanceof Error) return {
                name: i.name,
                message: i.message,
                stack: i.stack
            };
            if (i && "object" == typeof i) {
                for (; e.length > 0 && e[e.length - 1] !== this;) e.pop();
                if (e.includes(i)) return "[Circular]";
                e.push(i);
            }
            return i;
        }
    })) && void 0 !== i ? i : "null";
}
var S = Object.prototype;
var x = S.hasOwnProperty;
var E = S.toString;
var k = Array.isArray || function(t) {
    return "[object Array]" === E.call(t);
};
var T = (t) => "function" == typeof t;
var P = (t) => t === Object(t) && !k(t);
var O = (t) => {
    if (P(t)) {
        for (const i in t)
            if (x.call(t, i)) return !1;
        return !0;
    }
    return !1;
};
var R = (t) => void 0 === t;
var C = (t) => "[object String]" == E.call(t);
var A = (t) => C(t) && 0 === t.trim().length;
var I = (t) => null === t;
var F = (t) => R(t) || I(t);
var M = (t) => "[object Number]" == E.call(t) && t == t;
var D = (t) => M(t) && t > 0;
var N = (t) => "[object Boolean]" === E.call(t);
var L = (t) => m(g, t);
var j = (t) => m(_, t);

function U(t) {
    return null === t || "object" != typeof t;
}

function B(t, i) {
    return {}.toString.call(t) === `[object ${i}]`;
}

function z(t) {
    switch ({}.toString.call(t)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
        case "[object DOMError]":
        case "[object WebAssembly.Exception]":
            return !0;
        default:
            return q(t, Error);
    }
}

function H(t) {
    return "u" > typeof Event && q(t, Event);
}

function q(t, i) {
    try {
        return t instanceof i;
    } catch (t) {
        return !1;
    }
}
var W = [!0,
    "true",
    1,
    "1",
    "yes"
];
var V = (t) => m(W, t);
var G = [!1,
    "false",
    0,
    "0",
    "no"
];

function K(t, i, e, s, n, r, o) {
    try {
        var l = t[r](o),
            a = l.value;
    } catch (t) {
        return void e(t);
    }
    l.done ? i(a) : Promise.resolve(a).then(s, n);
}

function Y(t) {
    return function() {
        var i = this,
            e = arguments;
        return new Promise(function(s, n) {
            var r = t.apply(i, e);

            function o(t) {
                K(r, s, n, o, l, "next", t);
            }

            function l(t) {
                K(r, s, n, o, l, "throw", t);
            }
            o(void 0);
        });
    };
}
var J = [
    "amazonbot",
    "amazonproductbot",
    "app.hypefactors.com",
    "applebot",
    "archive.org_bot",
    "awariobot",
    "backlinksextendedbot",
    "baiduspider",
    "bingbot",
    "bingpreview",
    "chrome-lighthouse",
    "dataforseobot",
    "deepscan",
    "duckduckbot",
    "facebookexternal",
    "facebookcatalog",
    "http://yandex.com/bots",
    "hubspot",
    "ia_archiver",
    "leikibot",
    "linkedinbot",
    "meta-externalagent",
    "mj12bot",
    "msnbot",
    "nessus",
    "petalbot",
    "pinterestbot",
    "prerender",
    "rogerbot",
    "screaming frog",
    "sebot-wa",
    "sitebulb",
    "slackbot",
    "slurp",
    "trendictionbot",
    "turnitin",
    "twitterbot",
    "vercel-screenshot",
    "vercelbot",
    "yahoo! slurp",
    "yandexbot",
    "zoombot",
    "bot.htm",
    "bot.php",
    "(bot;",
    "bot/",
    "crawler",
    "ahrefsbot",
    "ahrefssiteaudit",
    "semrushbot",
    "siteauditbot",
    "splitsignalbot",
    "gptbot",
    "oai-searchbot",
    "chatgpt-user",
    "perplexitybot",
    "better uptime bot",
    "sentryuptimebot",
    "uptimerobot",
    "headlesschrome",
    "lightpanda",
    "cypress",
    "google-hoteladsverifier",
    "adsbot-google",
    "apis-google",
    "duplexweb-google",
    "feedfetcher-google",
    "google favicon",
    "google web preview",
    "google-read-aloud",
    "googlebot",
    "googleother",
    "google-cloudvertexbot",
    "googleweblight",
    "mediapartners-google",
    "storebot-google",
    "google-inspectiontool",
    "bytespider"
];
var X = new Map();
var Z = function(t, i = []) {
    if (!t) return !1;
    const e = function(t, i) {
            let e = "";
            for (let t = 0; i.length > t; t++) {
                const s = i[t];
                e += s.length + ":" + s;
            }
            return t.length + ":" + t + "|" + i.length + ":" + e;
        }(t, i),
        s = X.get(e);
    if (void 0 !== s) return s;
    const n = t.toLowerCase(),
        r = J.concat(i).some((t) => -1 !== n.indexOf(t.toLowerCase()));
    return 256 > X.size || X.clear(), X.set(e, r), r;
};

function Q(t, i, e, s, n) {
    return i > e && (s.warn("min cannot be greater than max."), i = e), M(t) ? t > e ? (s.warn(" cannot be  greater than max: " + e + ". Using max value instead."), e) : i > t ? (s.warn(" cannot be less than min: " + i + ". Using min value instead."), i) : t : (s.warn(" must be a number. using max or fallback. max: " + e + ", fallback: " + n), Q(null != n ? n : e, i, e, s));
}
var tt = class {
    constructor(t) {
        this.C = {}, this.I = t.I, this.R = Q(t.bucketSize, 0, 100, t.A), this.O = Q(t.refillRate, 0, this.R, t.A), this.$ = Q(t.refillInterval, 0, 864e5, t.A);
    }
    F(t, i) {
        const e = Math.floor((i - t.lastAccess) / this.$);
        e > 0 && (t.tokens = Math.min(t.tokens + e * this.O, this.R), t.lastAccess = t.lastAccess + e * this.$);
    }
    consumeRateLimit(t) {
        var i;
        const e = Date.now(),
            s = String(t);
        let n = this.C[s];
        return n ? this.F(n, e) : (n = {
            tokens: this.R,
            lastAccess: e
        }, this.C[s] = n), 0 === n.tokens || (n.tokens--, 0 === n.tokens && (null === (i = this.I) || void 0 === i || i.call(this, t)), 0 === n.tokens);
    }
    stop() {
        this.C = {};
    }
};
var it = "Mobile";
var et = "Android";
var st = "Tablet";
var nt = "Android Tablet";
var rt = "iPad";
var ot = "Apple Watch";
var lt = "Safari";
var at = "BlackBerry";
var ut = "Samsung Internet";
var ht = "Chrome";
var ct = "Chrome iOS";
var dt = "Internet Explorer";
var vt = "Internet Explorer Mobile";
var ft = "Opera";
var pt = "Microsoft Edge";
var gt = "Firefox";
var _t = "Firefox iOS";
var mt = "Nintendo";
var yt = "PlayStation";
var bt = "Xbox";
var wt = "Android Mobile";
var $t = "Mobile Safari";
var St = "Windows";
var xt = "Windows Phone";
var Et = "Nokia";
var kt = "Ouya";
var Tt = "Generic " + it.toLowerCase();
var Pt = "Generic " + st.toLowerCase();
var Ot = "Konqueror";
var Rt = "Oculus Browser";
var Ct = "Vivaldi";
var At = "Yandex";
var It = "Whale";
var Ft = "DuckDuckGo";
var Mt = "Pale Moon";
var Dt = "Waterfox";
var Nt = "Brave";
var Lt = "Claude";
var jt = "Codex";
var Ut = "ChatGPT";
var Bt = "Google Search App";
var zt = new RegExp("Version/(\\d+(\\.\\d+)?)");
var Ht = new RegExp("(Claude|Codex|ChatGPT)\\/(\\d+(\\.\\d+)?)");
var qt = new RegExp(bt, "i");
var Wt = new RegExp("PlayStation \\w+", "i");
var Vt = new RegExp("Nintendo \\w+", "i");
var Gt = new RegExp("BlackBerry|PlayBook|BB10", "i");
var Kt = {
    "NT3.51": "NT 3.11",
    "NT4.0": "NT 4.0",
    "5.0": "2000",
    5.1: "XP",
    5.2: "XP",
    "6.0": "Vista",
    6.1: "7",
    6.2: "8",
    6.3: "8.1",
    6.4: "10",
    "10.0": "10"
};
var Yt = function(t, i, e, s) {
    i = i || "";
    const n = function(t) {
        return (null == t ? void 0 : t.brave) ? Nt : null;
    }(e);
    return n || ((null == s ? void 0 : s.detectGoogleSearchApp) && m(t, "GSA/") ? Bt : m(t, " OPR/") && m(t, "Mini") ? "Opera Mini" : m(t, " OPR/") ? ft : Gt.test(t) ? at : m(t, "IEMobile") || m(t, "WPDesktop") ? vt : m(t, "OculusBrowser") ? Rt : m(t, "SamsungBrowser") ? ut : m(t, "Edge") || m(t, "Edg/") ? pt : m(t, "Vivaldi/") ? Ct : m(t, "YaBrowser/") ? At : m(t, "Whale/") ? It : m(t, "DuckDuckGo/") || m(t, "Ddg/") ? Ft : m(t, "Claude/") ? Lt : m(t, "Codex/") ? jt : m(t, "ChatGPT/") ? Ut : m(t, "FBIOS") ? "Facebook Mobile" : m(t, "UCWEB") || m(t, "UCBrowser") ? "UC Browser" : m(t, "CriOS") ? ct : m(t, "CrMo") || m(t, ht) ? ht : m(t, et) && m(t, lt) ? wt : m(t, "FxiOS") ? _t : m(t.toLowerCase(), Ot.toLowerCase()) ? Ot : m(t, "Brave/") ? Nt : ((t, i) => i && m(i, "Apple") || function(t) {
        return m(t, lt) && !m(t, ht) && !m(t, et);
    }(t))(t, i) ? m(t, it) ? $t : lt : m(t, "PaleMoon/") ? Mt : m(t, "Waterfox/") ? Dt : m(t, gt) ? gt : m(t, "MSIE") || m(t, "Trident/") ? dt : m(t, "Gecko") ? gt : "");
};
var Jt = {
    [vt]: [new RegExp("rv:(\\d+(\\.\\d+)?)")],
    [pt]: [new RegExp("Edge?\\/(\\d+(\\.\\d+)?)")],
    [ht]: [new RegExp("(Chrome|CrMo)\\/(\\d+(\\.\\d+)?)")],
    [ct]: [new RegExp("CriOS\\/(\\d+(\\.\\d+)?)")],
    "UC Browser": [new RegExp("(UCBrowser|UCWEB)\\/(\\d+(\\.\\d+)?)")],
    [lt]: [zt],
    [$t]: [zt],
    [ft]: [new RegExp("(Opera|OPR)\\/(\\d+(\\.\\d+)?)")],
    [gt]: [new RegExp("Firefox\\/(\\d+(\\.\\d+)?)")],
    [_t]: [new RegExp("FxiOS\\/(\\d+(\\.\\d+)?)")],
    [Ot]: [new RegExp("Konqueror[:/]?(\\d+(\\.\\d+)?)", "i")],
    [at]: [new RegExp("BlackBerry (\\d+(\\.\\d+)?)"), zt],
    [wt]: [new RegExp("android\\s(\\d+(\\.\\d+)?)", "i")],
    [ut]: [new RegExp("SamsungBrowser\\/(\\d+(\\.\\d+)?)")],
    [Rt]: [new RegExp("OculusBrowser\\/(\\d+(\\.\\d+)?)")],
    [Ct]: [new RegExp("Vivaldi\\/(\\d+(\\.\\d+)?)")],
    [At]: [new RegExp("YaBrowser\\/(\\d+(\\.\\d+)?)")],
    [It]: [new RegExp("Whale\\/(\\d+(\\.\\d+)?)")],
    [Nt]: [new RegExp("Brave\\/(\\d+(\\.\\d+)?)")],
    [Lt]: [Ht],
    [jt]: [Ht],
    [Ut]: [Ht],
    [Ft]: [new RegExp("(DuckDuckGo|Ddg)\\/(\\d+(\\.\\d+)?)")],
    [Mt]: [new RegExp("PaleMoon\\/(\\d+(\\.\\d+)?)")],
    [Dt]: [new RegExp("Waterfox\\/(\\d+(\\.\\d+)?)")],
    [Bt]: [new RegExp("GSA\\/(\\d+(\\.\\d+)?)")],
    [dt]: [new RegExp("(rv:|MSIE )(\\d+(\\.\\d+)?)")],
    Mozilla: [new RegExp("rv:(\\d+(\\.\\d+)?)")]
};
var Xt = function(t, i, e, s) {
    const n = Yt(t, i, e, s),
        r = Jt[n];
    if (R(r)) return null;
    for (let i = 0; r.length > i; i++) {
        const e = t.match(r[i]);
        if (e) return parseFloat(e[e.length - 2]);
    }
    return null;
};
var Zt = [
    [new RegExp("Xbox; Xbox (.*?)[);]", "i"), (t) => [bt, t && t[1] || ""]],
    [new RegExp(mt, "i"), [mt, ""]],
    [new RegExp(yt, "i"), [yt, ""]],
    [Gt, [at, ""]],
    [new RegExp(St, "i"), (t, i) => {
        if (/Phone/.test(i) || /WPDesktop/.test(i)) return [xt, ""];
        if (new RegExp(it).test(i) && !/IEMobile\b/.test(i)) return ["Windows Mobile", ""];
        const e = /Windows NT ([0-9.]+)/i.exec(i);
        if (e && e[1]) {
            let t = Kt[e[1]] || "";
            return /arm/i.test(i) && (t = "RT"), [St, t];
        }
        return [St, ""];
    }],
    [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, (t) => t && t[3] ? ["iOS", [
        t[3],
        t[4],
        t[5] || "0"
    ].join(".")] : ["iOS", ""]],
    [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, (t) => {
        let i = "";
        return t && t.length >= 3 && (i = R(t[2]) ? t[3] : t[2]), ["watchOS", i];
    }],
    [new RegExp("(Android (\\d+)\\.(\\d+)\\.?(\\d+)?|Android)", "i"), (t) => t && t[2] ? [et, [
        t[2],
        t[3],
        t[4] || "0"
    ].join(".")] : [et, ""]],
    [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, (t) => {
        const i = ["Mac OS X", ""];
        return t && t[1] && (i[1] = [
            t[1],
            t[2],
            t[3] || "0"
        ].join(".")), i;
    }],
    [/Mac/i, ["Mac OS X", ""]],
    [/CrOS/, ["Chrome OS", ""]],
    [/Linux|debian/i, ["Linux", ""]]
];
var Qt = function(t) {
    for (let i = 0; Zt.length > i; i++) {
        const [e, s] = Zt[i], n = e.exec(t), r = n && (T(s) ? s(n, t) : s);
        if (r) return r;
    }
    return ["", ""];
};
var ti = function(t) {
    return Vt.test(t) ? mt : Wt.test(t) ? yt : qt.test(t) ? bt : new RegExp(kt, "i").test(t) ? kt : new RegExp("(Windows Phone|WPDesktop)", "i").test(t) ? xt : /iPad/.test(t) ? rt : /iPod/.test(t) ? "iPod Touch" : /iPhone/.test(t) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(t) ? ot : Gt.test(t) ? at : /(kobo)\s(ereader|touch)/i.test(t) ? "Kobo" : new RegExp(Et, "i").test(t) ? Et : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(t) || /(kf[a-z]+)( bui|\)).+silk\//i.test(t) ? "Kindle Fire" : /(Android|ZTE)/i.test(t) ? new RegExp(it).test(t) && !/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(t) || /pixel[\daxl ]{1,6}/i.test(t) && !/pixel c/i.test(t) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(t) || /lmy47v/i.test(t) && !/QTAQZ3/i.test(t) ? et : nt : new RegExp("(pda|Mobile)", "i").test(t) ? Tt : new RegExp(st, "i").test(t) && !new RegExp("Tablet pc", "i").test(t) ? Pt : "";
};
var ii = function(t, i) {
    var e;
    const s = ti(t);
    return s === rt || s === nt || "Kobo" === s || "Kindle Fire" === s || s === Pt ? st : s === mt || s === bt || s === yt || s === kt ? "Console" : s === ot ? "Wearable" : s ? it : "Android" === (null == i ? void 0 : i.userAgentDataPlatform) && (null !== (e = null == i ? void 0 : i.maxTouchPoints) && void 0 !== e ? e : 0) > 0 ? 600 > Math.min(null !== (n = null == i ? void 0 : i.screenWidth) && void 0 !== n ? n : 0, null !== (r = null == i ? void 0 : i.screenHeight) && void 0 !== r ? r : 0) / (null !== (o = null == i ? void 0 : i.devicePixelRatio) && void 0 !== o ? o : 1) ? it : st : "Desktop";
    var n, r, o;
};
var ei = /\bFBAV\/(\d+(?:\.\d+)*)/i;
var si = [
    [/\bInstagram(?:[ /](\d+(?:\.\d+)*))?\b/i, "Instagram"],
    [/\bBarcelona[ /](\d+(?:\.\d+)*)?/i, "Threads"],
    [
        /\b(?:MessengerForiOS|(?:FBAN|FB_IAB)\/Orca-Android)\b/i,
        "Messenger",
        ei
    ],
    [
        /\bFBAN\/EMA\b/i,
        "Facebook Lite",
        ei
    ],
    [
        /\b(?:FBIOS|(?:FBAN|FB_IAB)\/(?:FB4A|FBIOS))\b/i,
        "Facebook",
        ei
    ],
    [/\bLinkedInApp(?:\]?\/(\d+(?:\.\d+)*))?\b/i, "LinkedIn"],
    [/\bTwitter(?:Android| for (?:iPhone|iPad|Android))(?:\/(\d+(?:\.\d+)*))?\b/i, "Twitter"],
    [
        /\b(?:musical_ly|trill)(?:[_/](\d+\.\d+(?:\.\d+)*))?(?=\b|_)/i,
        "TikTok",
        /\bapp_version\/(\d+(?:\.\d+)*)/i
    ],
    [/\b(?:MicroMessenger|WeChat)\/(\d+(?:\.\d+)*)?/i, "WeChat"],
    [/\bLine\/(\d+(?:\.\d+)*)?/i, "Line"],
    [/\bGSA\/(\d+(?:\.\d+)*)?/i, "Google"],
    [/\[Pinterest\/(?:iOS|Android)\b|\bPinterest(?: for (?:Android(?: Tablet)?|iOS))?\/(\d+(?:\.\d+)*)/i, "Pinterest"],
    [/\b(?:WA4A|WAiOS)\/(\d+(?:\.\d+)*)?/i, "WhatsApp"],
    [/\bSnapchat[ /](\d+(?:\.\d+)*)?/i, "Snapchat"],
    [/\bBing(?:Web|Sapphire)\/(\d+(?:\.\d+)*)?/i, "Bing"],
    [
        /\bNAVER\(inapp; search;/i,
        "Naver",
        /\bNAVER\(inapp; search;[^;)]*; (\d+(?:\.\d+)*)/i
    ],
    [/\bKAKAOTALK[ /](\d+\.\d+(?:\.\d+)*)?/i, "KakaoTalk"]
];
var ni = "[Truncated]";
var ri = "[Unserializable]";

function oi(t) {
    let i = "";
    for (let e = 0; t.length > e; e++) {
        const s = t.charCodeAt(e);
        if (55296 > s || s > 56319) i += 56320 > s || s > 57343 ? t[e] : "�";
        else {
            const s = t.charCodeAt(e + 1);
            56320 > s || s > 57343 ? i += "�" : (i += t[e] + t[e + 1], e++);
        }
    }
    return i;
}

function li(t, i) {
    if (!i) return t;
    let e = [];
    try {
        e = Object.keys(i);
    } catch (t) {
        e = [];
    }
    for (const s of e) {
        let e;
        try {
            e = i[s];
        } catch (t) {
            e = ri;
        }
        Object.defineProperty(t, s, {
            value: e,
            enumerable: !0,
            writable: !0,
            configurable: !0
        });
    }
    return t;
}
Date, Date;
var ai = 3e5;
var ui = class {
    record(t) {
        if ("too-large" === t.kind) return;
        if ("retry-later" !== t.kind) return void this.reset();
        if (!t.retryAfterMs) return;
        const i = this.isOpen(),
            e = Date.now(),
            s = Math.min(t.retryAfterMs, ai);
        if (!i) return this.ts = e, void(this.es = e + s);
        this.es = Math.max(this.es, Math.min(e + s, this.ts + ai));
    }
    remainingMs() {
        const t = Date.now();
        if (this.ts - 5e3 > t) return this.reset(), 0;
        const i = Math.min(ai, Math.max(0, this.es - t));
        return 0 === i && this.reset(), i;
    }
    isOpen() {
        return this.remainingMs() > 0;
    }
    reset() {
        this.es = 0, this.ts = 0;
    }
    constructor() {
        this.es = 0, this.ts = 0;
    }
};
var hi = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function ci(t, i) {
    return "string" == typeof(e = t) && hi.test(e) ? t : i();
    var e;
}

function di(t, i) {
    const e = new Error(i);
    try {
        Object.defineProperty(e, "name", {
            value: t,
            writable: !0,
            enumerable: !0,
            configurable: !0
        });
    } catch (t) {}
    return e;
}

function vi(t) {
    return t ? t.split("#")[0] : t;
}

function fi(t) {
    try {
        return t();
    } catch (t) {
        return;
    }
}

function pi(t, i) {
    const e = setTimeout(t, i);
    return null != e && e.unref && (null == e || e.unref()), e;
}

function gi(t, i, e) {
    return _i.apply(this, arguments);
}

function _i() {
    return (_i = Y(function*(t, i, e) {
        let s;
        try {
            return yield Promise.race([t, new Promise((t, n) => {
                s = pi(() => {
                    try {
                        null == e || e(), t();
                    } catch (t) {
                        n(t);
                    }
                }, i);
            })]);
        } finally {
            clearTimeout(s);
        }
    })).apply(this, arguments);
}

function mi(t) {
    return mi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, mi(t);
}

function yi(t, i, e) {
    return (i = function(t) {
        var i = function(t) {
            if ("object" != mi(t) || !t) return t;
            var i = t[Symbol.toPrimitive];
            if (void 0 !== i) {
                var e = i.call(t, "string");
                if ("object" != mi(e)) return e;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        }(t);
        return "symbol" == mi(i) ? i : i + "";
    }(i)) in t ? Object.defineProperty(t, i, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[i] = e, t;
}

function bi(t, i) {
    var e = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        i && (s = s.filter(function(i) {
            return Object.getOwnPropertyDescriptor(t, i).enumerable;
        })), e.push.apply(e, s);
    }
    return e;
}

function wi(t) {
    for (var i = 1; arguments.length > i; i++) {
        var e = null != arguments[i] ? arguments[i] : {};
        i % 2 ? bi(Object(e), !0).forEach(function(i) {
            yi(t, i, e[i]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : bi(Object(e)).forEach(function(i) {
            Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i));
        });
    }
    return t;
}
var $i;
var Si;
var xi;
var Ei;

function ki(t) {
    var i;
    const e = globalThis._posthogChunkIds,
        s = globalThis._debugIds;
    if (!e && !s) return;
    const n = e ? Object.keys(e) : [],
        r = s ? Object.keys(s) : [];
    if (Ei && Ti(e, n, Si) && Ti(s, r, xi)) return Ei;
    Si = e ? wi({}, e) : void 0, xi = s ? wi({}, s) : void 0, Ei = {}, null !== (i = $i) && void 0 !== i || ($i = {});
    const o = (i, e) => {
        for (const n of i) {
            const i = e[n];
            if (!i) continue;
            const r = null == $i ? void 0 : $i[n];
            if (r) {
                Ei[r] = i;
                continue;
            }
            const o = t(n);
            for (let t = o.length - 1; t >= 0; t--) {
                var s;
                const e = null === (s = o[t]) || void 0 === s ? void 0 : s.filename;
                if (e) {
                    Ei[e] = i, $i[n] = e;
                    break;
                }
            }
        }
    };
    return s && o(r, s), e && o(n, e), Ei;
}

function Ti(t, i, e) {
    return t && e ? i.length === Object.keys(e).length && i.every((i) => t[i] === e[i]) : t === e;
}
var Pi = class {
    constructor(t, i, e = []) {
        this.coercers = t, this.stackParser = i, this.modifiers = e;
    }
    buildFromUnknown(t, i = {}) {
        const e = i && i.mechanism || {
                handled: !0,
                type: "generic"
            },
            s = this.buildCoercingContext(e, i, 0).apply(t),
            n = this.buildParsingContext(i),
            r = this.parseStacktrace(s, n);
        return {
            $exception_list: this.convertToExceptionList(r, e),
            $exception_level: "error"
        };
    }
    modifyFrames(t) {
        var i = this;
        return Y(function*() {
            for (const e of t) e.stacktrace && e.stacktrace.frames && k(e.stacktrace.frames) && (e.stacktrace.frames = yield i.applyModifiers(e.stacktrace.frames));
            return t;
        })();
    }
    coerceFallback(t) {
        var i;
        return {
            type: "Error",
            value: "Unknown error",
            stack: null === (i = t.syntheticException) || void 0 === i ? void 0 : i.stack,
            synthetic: !0
        };
    }
    parseStacktrace(t, i) {
        var e;
        let s, n;
        if (null != t.cause && (s = this.parseStacktrace(t.cause, i)), "" != t.stack && null != t.stack) try {
            n = this.applyChunkIds(this.stackParser(t.stack, t.synthetic ? i.skipFirstLines : 0), i.chunkIdMap);
        } catch (t) {}
        return wi(wi({}, t), {}, {
            cause: s,
            stack: n,
            errors: null === (e = t.errors) || void 0 === e ? void 0 : e.map((t) => this.parseStacktrace(t, i))
        });
    }
    applyChunkIds(t, i) {
        return t.map((t) => (t.filename && i && (t.chunk_id = i[t.filename]), t));
    }
    applyCoercers(t, i) {
        for (const e of this.coercers)
            if (e.match(t)) return e.coerce(t, i);
        return this.coerceFallback(i);
    }
    applyModifiers(t) {
        var i = this;
        return Y(function*() {
            let e = t;
            for (const t of i.modifiers) e = yield t(e);
            return e;
        })();
    }
    convertToExceptionList(t, i) {
        const e = [],
            s = (t, n, r) => {
                var o;
                const l = e.length,
                    a = void 0 === n ? wi(wi({
                        type: "string" == typeof i.type && i.type.length > 0 ? i.type : "generic"
                    }, "boolean" == typeof i.handled ? {
                        handled: i.handled
                    } : void 0 === i.handled ? {
                        handled: !0
                    } : {}), {}, {
                        synthetic: "boolean" == typeof i.synthetic ? i.synthetic : t.synthetic,
                        exception_id: l
                    }) : {
                        type: "chained",
                        source: r,
                        synthetic: t.synthetic,
                        exception_id: l,
                        parent_id: n
                    },
                    u = {
                        type: t.type,
                        value: t.value,
                        mechanism: a
                    };
                t.stack && (u.stacktrace = {
                    type: "raw",
                    frames: t.stack
                }), e.push(u), t.cause && s(t.cause, l, "cause");
                for (const i of null !== (o = t.errors) && void 0 !== o ? o : []) s(i, l, "member");
            };
        return s(t), e;
    }
    buildParsingContext(t) {
        var i;
        return {
            chunkIdMap: ki(this.stackParser),
            skipFirstLines: null !== (i = t.skipFirstLines) && void 0 !== i ? i : 1
        };
    }
    getAggregateErrors(t) {
        try {
            if (z(t)) {
                let e = Object.getPrototypeOf(t);
                for (let s = 0; e && 100 > s; s++) {
                    var i;
                    const s = null === (i = Object.getOwnPropertyDescriptor(e, "constructor")) || void 0 === i ? void 0 : i.value;
                    if ("function" == typeof s && "AggregateError" === s.name) {
                        const i = t.errors;
                        return k(i) ? i : void 0;
                    }
                    e = Object.getPrototypeOf(e);
                }
            }
        } catch (t) {}
    }
    buildCoercingContext(t, i, e = 0) {
        let s = 0,
            n = 0,
            r = !1;
        const o = new Set(),
            l = [],
            a = {},
            u = (t, i, e = 0) => {
                const u = h(i, e),
                    c = u.apply;
                if (u.apply = (i) => {
                        l.push(t);
                        try {
                            return c(i);
                        } finally {
                            l.pop();
                        }
                    }, e > 4 || e > 0 && -1 !== l.indexOf(t)) return this.coerceFallback(u);
                const d = "object" == typeof t && null !== t || "function" == typeof t;
                if (0 === e && s >= 50 || d && o.has(t)) return;
                d && o.add(t), 0 === e && s++;
                const v = this.getAggregateErrors(t);
                let f, p;
                r || (r = !!v);
                try {
                    if (f = this.applyCoercers(t, u), !f) throw a;
                } catch (t) {
                    if (t === a) return void(0 === e && s--);
                    if (!r) throw t;
                    f = this.coerceFallback(u);
                }
                if (!v || s >= 50) return f;
                try {
                    p = v.length;
                } catch (t) {
                    return f;
                }
                if (!Number.isInteger(p) || 0 > p || p > 4294967295) return f;
                const g = [];
                for (let t = 0; 50 > s && 1e3 > n && p > t; t++) {
                    let e;
                    n++;
                    try {
                        e = u.next(v[t]);
                    } catch (t) {
                        s++, e = this.coerceFallback(h(i + 1));
                    }
                    e && g.push(e);
                }
                return wi(wi({}, f), {}, {
                    errors: g
                });
            },
            h = (e, s = 0) => wi(wi({}, i), {}, {
                syntheticException: 0 == e ? i.syntheticException : void 0,
                mechanism: 0 == e ? t : {},
                apply(t) {
                    const i = u(t, e, s + 1);
                    if (!i) throw a;
                    return i;
                },
                next: (t) => u(t, e + 1)
            }),
            c = h(e);
        return wi(wi({}, c), {}, {
            apply: (t) => {
                var i;
                return null !== (i = u(t, e)) && void 0 !== i ? i : this.coerceFallback(c);
            }
        });
    }
};
var Oi = /^([a-z][a-z0-9.+-]+):/i;
var Ri = [
    "http",
    "https",
    "file",
    "blob",
    "app",
    "capacitor",
    "ionic",
    "webpack",
    "webpack-internal",
    "ng"
];

function Ci(t) {
    if (!t || "<anonymous>" === t) return !1;
    const i = Oi.exec(t);
    return !i || Ri.includes(i[1].toLowerCase());
}

function Ai(t, i, e, s, n) {
    const r = {
        platform: t,
        filename: i,
        function: "<anonymous>" === e ? "?" : e,
        in_app: Ci(i)
    };
    return R(s) || (r.lineno = s), R(n) || (r.colno = n), r;
}
var Ii = (t, i) => {
    const e = -1 !== t.indexOf("safari-extension"),
        s = -1 !== t.indexOf("safari-web-extension");
    return e || s ? [-1 !== t.indexOf("@") ? t.split("@")[0] : "?", e ? `safari-extension:${i}` : `safari-web-extension:${i}`] : [t, i];
};
var Fi = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;
var Mi = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
var Di = /\((\S*)(?::(\d+))(?::(\d+))\)/;
var Ni = (t, i) => {
    const e = Fi.exec(t);
    if (e) {
        const [, t, s, n] = e;
        return Ai(i, t, "?", +s, +n);
    }
    const s = Mi.exec(t);
    if (s) {
        if (s[2] && 0 === s[2].indexOf("eval")) {
            const t = Di.exec(s[2]);
            t && (s[2] = t[1], s[3] = t[2], s[4] = t[3]);
        }
        const [t, e] = Ii(s[1] || "?", s[2]);
        return Ai(i, e, t, s[3] ? +s[3] : void 0, s[4] ? +s[4] : void 0);
    }
};
var Li = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
var ji = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
var Ui = (t, i) => {
    const e = Li.exec(t);
    if (e) {
        if (e[3] && e[3].indexOf(" > eval") > -1) {
            const t = ji.exec(e[3]);
            t && (e[1] = e[1] || "eval", e[3] = t[1], e[4] = t[2], e[5] = "");
        }
        let t = e[3],
            s = e[1] || "?";
        return [s, t] = Ii(s, t), Ai(i, t, s, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0);
    }
};
var Bi = /\(error: (.*)\)/;

function zi(t, i) {
    return t.filename === i.filename && t.function === i.function && t.module === i.module && t.lineno === i.lineno && t.colno === i.colno;
}

function Hi(t) {
    for (let i = 1; 10 >= i; i++) {
        const e = t.length - 2 * i;
        if (0 > e) break;
        let s = !0;
        for (let n = 0; i > n; n++)
            if (!zi(t[e + n], t[e + i + n])) {
                s = !1;
                break;
            }
        if (s) {
            for (let s = 0; i > s; s++) t[e + s] = t[e + i + s];
            return t.length = e + i, {
                start: e,
                length: i
            };
        }
    }
}

function qi(t, i) {
    const e = i.start + i.length,
        s = Vi(t, i);
    s && t.splice(e + s === t.length ? e : i.start, s);
}

function Wi(t, i) {
    let e = i.start;
    for (; e > 0 && zi(t[e - 1], t[e - 1 + i.length]);) e--;
    return i.start - e;
}

function Vi(t, i) {
    const e = i.start + i.length;
    let s = e;
    for (; t.length > s && zi(t[s], t[s - i.length]);) s++;
    return s - e;
}

function Gi(t, i) {
    const e = i[0];
    let s = t.length - (e ? Wi(t, e) : 0);
    for (const e of i) s -= Vi(t, e);
    return s;
}

function Ki(t, i, e) {
    for (let s = 0; t.length > s; s++) {
        const n = t[(i + s) % t.length],
            r = t[(e + s) % t.length];
        if (n !== r) return r > n;
    }
    return !1;
}
var Yi = class {
    match(t) {
        return this.isDOMException(t) || this.isDOMError(t);
    }
    coerce(t, i) {
        const e = C(t.stack);
        return {
            type: this.getType(t),
            value: this.getValue(t),
            stack: e ? t.stack : void 0,
            cause: t.cause ? i.next(t.cause) : void 0,
            synthetic: !1
        };
    }
    getType(t) {
        return this.isDOMError(t) ? "DOMError" : "DOMException";
    }
    getValue(t) {
        const i = t.name || (this.isDOMError(t) ? "DOMError" : "DOMException");
        return t.message ? `${i}: ${t.message}` : i;
    }
    isDOMException(t) {
        return B(t, "DOMException");
    }
    isDOMError(t) {
        return B(t, "DOMError");
    }
};
var Ji = class {
    match(t) {
        return z(t);
    }
    coerce(t, i) {
        var e;
        const s = this.getStack(t),
            n = void 0 === s ? null === (e = i.syntheticException) || void 0 === e ? void 0 : e.stack : void 0,
            r = !!n;
        return {
            type: this.getType(t),
            value: this.getMessage(t, i),
            stack: null != s ? s : n,
            cause: t.cause ? i.next(t.cause) : void 0,
            synthetic: r
        };
    }
    getType(t) {
        return t.name || t.constructor.name;
    }
    getMessage(t, i) {
        const e = t.message;
        return String(e.error && "string" == typeof e.error.message ? e.error.message : e);
    }
    getStack(t) {
        try {
            const i = t.stacktrace;
            if ("string" == typeof i && i.length > 0) return i;
            const e = t.stack;
            return "string" == typeof e && e.length > 0 ? e : void 0;
        } catch (t) {
            return;
        }
    }
};
var Xi = class {
    match(t) {
        return !!B(t, "ErrorEvent") && (null != t.error || this.yr(t));
    }
    coerce(t, i) {
        var e;
        if (null != t.error) return i.apply(t.error);
        const s = i.apply(t.message);
        return wi(wi({}, s), {}, {
            stack: null !== (e = this.br(t)) && void 0 !== e ? e : s.stack,
            synthetic: !0
        });
    }
    yr(t) {
        return C(t.message) && t.message.length > 0;
    }
    br(t) {
        var i, e;
        const s = t,
            n = null !== (i = s.lineno) && void 0 !== i ? i : 0,
            r = null !== (e = s.colno) && void 0 !== e ? e : 0;
        if (C(s.filename) && 0 !== s.filename.length && 0 !== n) return `Error\n    at ${s.filename}:${n}:${r}`;
    }
};
var Zi = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
var Qi = class {
    match(t) {
        return "string" == typeof t;
    }
    coerce(t, i) {
        var e;
        const [s, n] = this.getInfos(t);
        return {
            type: null != s ? s : "Error",
            value: null != n ? n : t,
            stack: null === (e = i.syntheticException) || void 0 === e ? void 0 : e.stack,
            synthetic: !0
        };
    }
    getInfos(t) {
        let i = "Error",
            e = t;
        const s = t.match(Zi);
        return s && (i = s[1], e = s[2]), [i, e];
    }
};
var te = [
    "fatal",
    "error",
    "warning",
    "log",
    "info",
    "debug"
];

function ie(t, i = 40) {
    const e = Object.keys(t);
    if (e.sort(), !e.length) return "[object has no keys]";
    for (let t = e.length; t > 0; t--) {
        const s = e.slice(0, t).join(", ");
        if (i >= s.length) return t === e.length ? s : s.length > i ? `${s.slice(0, i)}...` : s;
    }
    return "";
}
var ee = class {
    match(t) {
        return "object" == typeof t && null !== t;
    }
    coerce(t, i) {
        var e, s;
        const n = this.getErrorPropertyFromObject(t);
        return n ? i.apply(n) : {
            type: this.getType(t),
            value: this.getValue(t),
            stack: null !== (e = this.getStack(t)) && void 0 !== e ? e : null === (s = i.syntheticException) || void 0 === s ? void 0 : s.stack,
            level: this.isSeverityLevel(t.level) ? t.level : "error",
            synthetic: !0
        };
    }
    getType(t) {
        if (H(t)) return t.constructor.name;
        const i = "name" in t ? t.name : void 0;
        return C(i) && !A(i) ? i : "Error";
    }
    getValue(t) {
        if ("name" in t && "string" == typeof t.name) {
            let i = `'${t.name}' captured as exception`;
            return "message" in t && "string" == typeof t.message && (i += ` with message: '${t.message}'`), i;
        }
        if ("message" in t && "string" == typeof t.message) return t.message;
        const i = this.getObjectClassName(t);
        return `${i && "Object" !== i ? `'${i}'` : "Object"} captured as exception with keys: ${ie(t)}`;
    }
    isSeverityLevel(t) {
        return C(t) && !A(t) && te.indexOf(t) >= 0;
    }
    getStack(t) {
        try {
            return C(t.stacktrace) && t.stacktrace.length > 0 ? t.stacktrace : C(t.stack) && t.stack.length > 0 ? t.stack : void 0;
        } catch (t) {
            return;
        }
    }
    getErrorPropertyFromObject(t) {
        for (const i in t)
            if ({}.hasOwnProperty.call(t, i)) {
                const e = t[i];
                if (z(e)) return e;
            }
    }
    getObjectClassName(t) {
        try {
            const i = Object.getPrototypeOf(t);
            return i ? i.constructor.name : void 0;
        } catch (t) {
            return;
        }
    }
};
var se = class {
    match(t) {
        return H(t);
    }
    coerce(t, i) {
        var e;
        const s = t.constructor.name;
        return {
            type: s,
            value: `${s} captured as exception with keys: ${ie(t)}`,
            stack: null === (e = i.syntheticException) || void 0 === e ? void 0 : e.stack,
            synthetic: !0
        };
    }
};
var ne = class {
    match(t) {
        return U(t);
    }
    coerce(t, i) {
        var e;
        return {
            type: "Error",
            value: `Primitive value captured as exception: ${String(t)}`,
            stack: null === (e = i.syntheticException) || void 0 === e ? void 0 : e.stack,
            synthetic: !0
        };
    }
};
var re = class {
    match(t) {
        return B(t, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(t);
    }
    isCustomEventWrappingRejection(t) {
        if (!H(t)) return !1;
        try {
            const i = t.detail;
            return null != i && "object" == typeof i && "reason" in i;
        } catch (t) {
            return !1;
        }
    }
    coerce(t, i) {
        var e;
        const s = this.getUnhandledRejectionReason(t);
        return U(s) ? {
            type: "UnhandledRejection",
            value: `Non-Error promise rejection captured with value: ${String(s)}`,
            stack: null === (e = i.syntheticException) || void 0 === e ? void 0 : e.stack,
            synthetic: !0
        } : i.apply(s);
    }
    getUnhandledRejectionReason(t) {
        try {
            if ("reason" in t) return t.reason;
            if ("detail" in t && null != t.detail && "object" == typeof t.detail && "reason" in t.detail) return t.detail.reason;
        } catch (t) {}
        return t;
    }
};
var oe = "$message";
var le = "$timestamp";
var ae = new Set([oe, le]);
var ue = {
    enabled: !0,
    max_bytes: 32768
};

function he(t) {
    var i;
    return t ? {
        enabled: null !== (i = t.enabled) && void 0 !== i ? i : ue.enabled,
        max_bytes: de(t.max_bytes, ue.max_bytes)
    } : wi({}, ue);
}
var ce = class {
    constructor(t) {
        this.ns = [], this.ss = 0, this.Fr = he(t);
    }
    setConfig(t) {
        this.Fr = he(t), this.rs();
    }
    add(t) {
        const i = function(t) {
            let i;
            try {
                i = w(t);
            } catch (t) {
                return;
            }
            try {
                const t = JSON.parse(i);
                if (!P(t)) return;
                const e = t,
                    s = e[oe],
                    n = e[le];
                if (!C(s) || 0 === s.trim().length) return;
                if (!C(n) && !M(n)) return;
                return {
                    step: e,
                    json: i
                };
            } catch (t) {
                return;
            }
        }(t);
        if (!i) return;
        const e = function(t) {
            if ("u" > typeof TextEncoder) return new TextEncoder().encode(t).length;
            const i = encodeURIComponent(t);
            let e = 0;
            for (let t = 0; i.length > t; t++) "%" === i[t] ? (e += 1, t += 2) : e += 1;
            return e;
        }(i.json);
        e > this.Fr.max_bytes || (this.ns.push({
            step: i.step,
            bytes: e
        }), this.ss += e, this.rs());
    }
    getAttachable() {
        return this.ns.map((t) => t.step);
    }
    clear() {
        this.ns = [], this.ss = 0;
    }
    size() {
        return this.ns.length;
    }
    rs() {
        for (; this.ss > this.Fr.max_bytes && this.ns.length > 0;) {
            const t = this.ns.shift();
            t && (this.ss -= t.bytes);
        }
    }
};

function de(t, i) {
    if (!M(t) || 1 / 0 === t || -1 / 0 === t) return i;
    const e = Math.floor(t);
    return 0 > e ? i : e;
}
var ve = (t) => {
    if ("string" != typeof t) return t;
    try {
        return JSON.parse(t);
    } catch (i) {
        return t;
    }
};

function fe(t) {
    return "string" == typeof t || t;
}

function pe(t) {
    return "string" == typeof t ? t : void 0;
}
var ge = [
    "$feature_flag",
    "$feature_flag_response",
    "$feature_flag_has_experiment",
    "$feature_flag_id",
    "$feature_flag_version",
    "$feature_flag_reason",
    "$feature_flag_request_id",
    "$feature_flag_evaluated_at",
    "$feature_flag_error",
    "locally_evaluated",
    "$groups",
    "$process_person_profile",
    "$geoip_disable",
    "$current_url",
    "$pathname",
    "$referring_domain",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "gad_source",
    "mc_cid",
    "gclid",
    "gclsrc",
    "dclid",
    "gbraid",
    "wbraid",
    "fbclid",
    "msclkid",
    "twclid",
    "li_fat_id",
    "igshid",
    "ttclid",
    "rdt_cid",
    "epik",
    "qclid",
    "sccid",
    "oppref",
    "bfcid",
    "irclid",
    "_kx",
    "$session_id",
    "$window_id",
    "$lib",
    "$lib_version",
    "$device_id",
    "$is_server"
];
var _e = "NativeGzipValidationError";
var me = (t) => t.length >= 2 && 31 === t[0] && 139 === t[1];
var ye = (t, i) => t === p.GZipJS || i === p.GZipJS || "gzip" === i;
var be = (t) => !(!t || "object" != typeof t) && "NotReadableError" === ("name" in t ? String(t.name) : "");
var we;
var $e = (t) => {
    throw di(_e, `Native gzip produced invalid output: ${t}`);
};
var Se = function() {
    var t = Y(function*(t, i) {
        18 > t.size && $e("too-short");
        const e = new Uint8Array(yield t.slice(0, 10).arrayBuffer());
        me(e) && 8 === e[2] || $e("invalid-header");
        const s = new DataView(yield t.slice(t.size - 8).arrayBuffer());
        s.getUint32(0, !0) !== ((t) => {
            const i = (() => {
                if (we) return we;
                we = [];
                for (let t = 0; 256 > t; t++) {
                    let i = t;
                    for (let t = 0; 8 > t; t++) i = 1 & i ? 3988292384 ^ i >>> 1 : i >>> 1;
                    we[t] = i >>> 0;
                }
                return we;
            })();
            let e = 4294967295;
            for (let s = 0; t.length > s; s++) e = i[255 & (e ^ t[s])] ^ e >>> 8;
            return (4294967295 ^ e) >>> 0;
        })(i) && $e("invalid-crc");
        const n = i.length >>> 0;
        s.getUint32(4, !0) !== n && $e("invalid-size");
    });
    return function(i, e) {
        return t.apply(this, arguments);
    };
}();

function xe() {
    return xe = Y(function*(t, i = !0, e) {
        try {
            const i = new TextEncoder().encode(t),
                e = new globalThis.CompressionStream("gzip"),
                n = e.writable.getWriter(),
                r = n.write(i).then(() => n.close()).catch((s = Y(function*(t) {
                    try {
                        yield n.abort(t);
                    } catch (t) {}
                    throw t;
                }), function(t) {
                    return s.apply(this, arguments);
                })),
                o = new Response(e.readable).blob(),
                [l] = yield Promise.all([o, r]);
            return yield Se(l, i), l;
        } catch (t) {
            if (null == e ? void 0 : e.rethrow) throw t;
            return i && console.error("Failed to gzip compress data", t), null;
        }
        var s;
    }), xe.apply(this, arguments);
}

function Ee(t, i) {
    if (null == t) return {};
    var e, s, n = function(t, i) {
        if (null == t) return {};
        var e = {};
        for (var s in t)
            if ({}.hasOwnProperty.call(t, s)) {
                if (i.includes(s)) continue;
                e[s] = t[s];
            }
        return e;
    }(t, i);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        for (s = 0; r.length > s; s++) i.includes(e = r[s]) || {}.propertyIsEnumerable.call(t, e) && (n[e] = t[e]);
    }
    return n;
}
var ke = "[redacted]";
var Te = /^[A-Za-z0-9+/\n\r]+=*$/;
var Pe = /^[A-Za-z0-9_-]+={0,2}$/;
var Oe = /[-_]/;
var Re = /^data:[^,\s]*;base64,/i;
var Ce = /^[A-Za-z0-9+/_-]+={0,2}$/;
var Ae = /\bph[a-z]_[A-Za-z0-9_-]{20,}\b/g;
var Ie = /^(authorization|cookie|set-cookie|x-api-key|api[-_]?key|api[-_]?token|access[-_]?token|refresh[-_]?token|token|password|secret|client[-_]?secret|private[-_]?key)$/i;
var Fe = /[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi;
var Me = /[\s<>"]/;
var De = new RegExp(Fe.source, "i");
var Ne = /[a-z][a-z0-9+.-]{0,63}:\/\//i;
var Le = new RegExp(`^${Ne.source}`, "i");
var je = new RegExp(Ne.source, "gi");
var Ue = /(^|[-_./;])(auth|token|secret|password|passwd|pwd|credential|signature|sig|key|hmac|sas|bearer|jwt|session|sessionid)([-_./;]|$)/i;
var Be = /^(code|AWSAccessKeyId|GoogleAccessId|Policy)$/i;
var ze = /[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/g;
var He = /[A-Za-z0-9._%+-]{1,64}@[A-Za-z0-9.-]{1,255}\.[A-Za-z]{2,24}/g;
var qe = /\b(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\b/g;
var We = /(^|[^\w:])((?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}|(?:[0-9A-Fa-f]{1,4}:){1,7}:|(?:[0-9A-Fa-f]{1,4}:){1,6}:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,5}|::(?:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,6})))(?=$|[^\w:])/g;
var Ve = /\b\d{3}[ .-]\d{2}[ .-]\d{4}\b/g;
var Ge = /\b\d(?:[ ./-]?\d){12,}\b/g;
var Ke = /\d+/g;
var Ye = /(^|[^\w+])((?:\+?1[ ./-]?)?(?:\(\d{3}\)[ ./-]?|\d{3}[ ./-])\d{3}[ ./-]\d{4})(?![\w])/g;
var Je = /(^|[^\w])(\+\d{1,3}(?:[ ./()-]{0,2}\d){7,13})(?![\w])/g;

function Xe(t) {
    return function(t) {
        return Ie.test(t);
    }(t) || Ue.test(t) || Be.test(t);
}

function Ze(t) {
    return t.split("&", 129).length > 128;
}

function Qe(t, i, e) {
    return Xe(t) || i.includes(";") && function(t) {
        return t.split(";").some((t) => Xe(t.split("=", 1)[0]));
    }(i) ? ke : De.test(i) ? e ? rs(i, {
        allowNestedUrls: !1,
        stripPunctuation: !0
    }) : ke : i;
}

function ts(t, i) {
    const e = new URLSearchParams();
    let s = !1,
        n = !1;
    for (const [r, o] of new URLSearchParams(t)) {
        const t = os(r),
            l = os(o);
        s || (s = t !== r || l !== o);
        const a = Qe(t, l, i);
        s || (s = a !== l), n = Xe(t) || a !== l, e.append(t, a);
    }
    return {
        changed: s,
        lastFieldSensitive: n,
        serialized: e.toString()
    };
}

function is(t, i) {
    if (!t.includes("=")) return {
        value: es(t, i),
        lastFieldSensitive: !1
    };
    const e = ts(t, i);
    return {
        value: e.changed ? e.serialized : t,
        lastFieldSensitive: e.lastFieldSensitive
    };
}

function es(t, i) {
    return i ? rs(t, {
        allowNestedUrls: !1,
        stripPunctuation: !0
    }) : De.test(t) ? ke : t;
}

function ss(t, i, e) {
    return "#" === t ? !i.fragment && (i.fragment = !0) : "?" === t && (i.fragment ? "=" !== e && !i.fragmentQuery && (i.fragmentQuery = !0) : !i.query && (i.query = !0));
}

function ns(t, i) {
    var e;
    if (t.length > 8192 && Le.test(t)) return ke;
    const {
        address: s,
        suffix: n
    } = i.stripPunctuation ? function(t) {
        let i = t.length;
        for (; i > 0 && ".,;:!?)]}'".includes(t[i - 1]);) i--;
        return {
            address: t.slice(0, i),
            suffix: t.slice(i)
        };
    }(t) : {
        address: t,
        suffix: ""
    };
    let r;
    try {
        r = new URL(s);
    } catch (t) {
        return ke + n;
    }
    const o = r.search.slice(1),
        l = "" !== r.hash,
        a = function(t) {
            const i = t.slice(1),
                e = i.indexOf("?");
            return 0 > e ? {
                head: i,
                tail: null
            } : {
                head: i.slice(0, e),
                tail: i.slice(e + 1)
            };
        }(r.hash);
    if (Ze(o) || Ze(a.head) || Ze(null !== (e = a.tail) && void 0 !== e ? e : "")) return ke + n;
    let u = !1;
    (r.username || r.password) && (r.username = ke, r.password = "", u = !0);
    const h = ts(o, i.allowNestedUrls);
    h.changed && (r.search = h.serialized, u = !0);
    const c = is(a.head, i.allowNestedUrls),
        d = null === a.tail ? null : (v = a.tail, c.lastFieldSensitive ? {
            value: "" === v ? "" : ke,
            lastFieldSensitive: !0
        } : is(v, i.allowNestedUrls));
    var v;
    const f = null === d ? c.value : `${c.value}?${d.value}`;
    f !== r.hash.slice(1) && (r.hash = f, u = !0);
    const p = l ? null != d ? d : c : h;
    return (u ? os(r.toString()) : s) + (p.lastFieldSensitive ? "" : n);
}

function rs(t, i) {
    return t.replace(Fe, (e) => function(t, i) {
        const e = function(t) {
            if (!t.includes("://")) return [];
            const i = [...t.matchAll(je)].map((t) => t.index),
                e = [],
                s = {
                    query: !1,
                    fragment: !1,
                    fragmentQuery: !1
                };
            let n = 0,
                r = !1,
                o = "";
            for (let l = 0; t.length > l && i.length > n; l++) {
                i[n] === l && (l > 0 && "=" !== o && e.push(l), n++);
                const a = t[l];
                ss(a, s, o) ? (o = a, r = !0) : r && "=&".includes(a) && (o = a);
            }
            return e;
        }(t);
        if (0 === e.length) return ns(t, i);
        let s = "",
            n = 0;
        for (const r of e) s += ns(t.slice(n, r), wi(wi({}, i), {}, {
            stripPunctuation: !1
        })), n = r;
        return s + ns(t.slice(n), i);
    }(e, wi(wi({}, i), {}, {
        stripPunctuation: i.stripPunctuation && e.length !== t.length
    })));
}

function os(t) {
    return t.replace(Ae, ke);
}

function ls(t, i) {
    return function(t) {
        return t.length >= 10240 && (Te.test(t) || function(t) {
            const i = Re.exec(t);
            if (!i) return !1;
            let e;
            try {
                e = decodeURIComponent(t.slice(i[0].length));
            } catch (t) {
                return !1;
            }
            return Ce.test(e.replace(/[\r\n]/g, ""));
        }(t) || Oe.test(t) && Pe.test(t));
    }(t) ? "[binary data redacted - not supported by PostHog MCP analytics]" : function(t, i, e) {
        const s = 4 * e.maxStringLength;
        if (t.length > s) {
            const n = i(t.slice(0, function(t, i) {
                let e = i;
                for (; e > 0 && !Me.test(t[e - 1]);) e--;
                return e;
            }(t, s)));
            if (n.length >= 2 * e.maxStringLength) return n + e.truncationSuffix;
        }
        return i(t);
    }(t, (t) => function(t) {
        return rs(t, {
            allowNestedUrls: !0,
            stripPunctuation: !0
        });
    }(function(t) {
        let i = t.replace(ze, " ");
        return i = i.replace(He, ke), i = i.replace(qe, ke), i = i.replace(We, `$1${ke}`), i = i.replace(Ge, us), i = i.replace(Ve, ke), i = i.replace(Ye, `$1${ke}`), i = i.replace(Je, `$1${ke}`), i;
    }(os(t))), i);
}

function as(t) {
    let i = 0,
        e = !1;
    for (let s = t.length - 1; s >= 0; s--) {
        let n = t.charCodeAt(s) - 48;
        if (0 > n || n > 9) return !1;
        e && (n *= 2, n > 9 && (n -= 9)), i += n, e = !e;
    }
    return i % 10 == 0;
}

function us(t) {
    const i = [];
    for (let e = Ke.exec(t); null !== e; e = Ke.exec(t)) i.push({
        digits: e[0],
        start: e.index,
        end: e.index + e[0].length
    });
    let e = "",
        s = 0,
        n = 0;
    for (; i.length > n;) {
        let r = "",
            o = -1;
        for (let t = n; i.length > t && (r += i[t].digits, 19 >= r.length); t++) r.length >= 13 && as(r) && (o = t);
        0 > o ? n++ : (e += t.slice(s, i[n].start) + ke, s = i[o].end, n = o + 1);
    }
    return e + t.slice(s);
}
var hs = {}.propertyIsEnumerable;

function cs(t, i) {
    try {
        return fs(t, i, {
            ancestors: new WeakSet(),
            remainingNodes: 1e4
        }, 0);
    } catch (t) {
        return [];
    }
}

function ds(t, i, e, s) {
    if (0 >= e.remainingNodes) return {
        stringValue: ni
    };
    if (e.remainingNodes--, N(t)) return {
        boolValue: t
    };
    if ("bigint" == typeof t) return function(t, i) {
        const e = t.toString(),
            s = BigInt("9223372036854775808");
        return t >= s || -s > t ? (null == i || i.debug(`Attribute ${e} is outside the int64 range; encoding it as a string`), {
            stringValue: e
        }) : {
            intValue: e
        };
    }(t, i);
    if ("number" == typeof t) {
        if (!Number.isFinite(t)) return {
            stringValue: String(t)
        };
        if (Number.isInteger(t)) {
            if (Number.isSafeInteger(t)) return {
                intValue: String(t)
            };
            if (typeof BigInt > "u") return {
                stringValue: String(t)
            };
            const e = BigInt(t).toString();
            return t >= 0x8000000000000000 || -0x8000000000000000 > t ? (null == i || i.debug(`Attribute ${e} is outside the int64 range; encoding it as a string`), {
                stringValue: e
            }) : {
                intValue: e
            };
        }
        return {
            doubleValue: t
        };
    }
    if ("string" == typeof t) return {
        stringValue: oi(t)
    };
    if ("function" == typeof t) return {
        stringValue: "[Function]"
    };
    if ("symbol" == typeof t) return {
        stringValue: String(t)
    };
    if ("object" == typeof t && null !== t) {
        if (e.ancestors.has(t)) return {
            stringValue: "[Circular]"
        };
        if (s >= 20) return {
            stringValue: ni
        };
        if (t instanceof Date) {
            const i = t.getTime(),
                e = Number.isFinite(i) ? t.toISOString() : String(t);
            return {
                stringValue: "string" == typeof e ? oi(e) : String(e)
            };
        }
        e.ancestors.add(t);
        try {
            try {
                const n = t.toJSON;
                if ("function" == typeof n) return ds(n.call(t), i, e, s + 1);
            } catch (t) {}
            return k(t) ? {
                arrayValue: {
                    values: vs(t, i, e, s + 1)
                }
            } : {
                kvlistValue: {
                    values: fs(t, i, e, s + 1)
                }
            };
        } finally {
            e.ancestors.delete(t);
        }
    }
    return {
        stringValue: oi(String(t))
    };
}

function vs(t, i, e, s) {
    const n = [],
        r = Math.min(t.length, 1e3);
    let o = 0;
    for (; r > o && e.remainingNodes > 0; o++) try {
        const r = o in t ? t[o] : void 0;
        if (F(r)) continue;
        n.push(ds(r, i, e, s));
    } catch (t) {
        n.push({
            stringValue: ri
        });
    }
    return t.length > o && n.push({
        stringValue: ni
    }), n;
}

function fs(t, i, e, s) {
    const n = [];
    for (const r in t)
        if (hs.call(t, r)) {
            if (!r) {
                null == i || i.debug("Dropping an attribute with an empty key");
                continue;
            }
            if (n.length >= 1e3 || 0 >= e.remainingNodes) {
                null == i || i.debug("Attributes truncated: the value exceeds the OTLP encoder budget");
                break;
            }
            try {
                const o = t[r];
                if (I(o) || R(o)) continue;
                n.push({
                    key: oi(r),
                    value: ds(o, i, e, s)
                });
            } catch (t) {
                n.push({
                    key: oi(r),
                    value: {
                        stringValue: ri
                    }
                });
            }
        }
    return n;
}

function ps(t, i, e) {
    return wi(wi(wi(wi({}, li({}, t.resourceAttributes)), {}, {
        "service.name": t.serviceName || "unknown_service"
    }, t.environment && {
        "deployment.environment": t.environment
    }), t.serviceVersion && {
        "service.version": t.serviceVersion
    }), {}, {
        "telemetry.sdk.name": i,
        "telemetry.sdk.version": e
    });
}
var gs = [
    "service.name",
    "deployment.environment",
    "service.version",
    "telemetry.sdk.name",
    "telemetry.sdk.version"
];

function _s(t, i) {
    const e = li({}, t),
        s = {};
    for (const t of gs)({}).hasOwnProperty.call(e, t) && (s[t] = e[t], delete e[t]);
    return [...cs(e, i), ...cs(s, i)];
}
var ms = {
    darwin: "macOS",
    win32: "Windows",
    cygwin: "Windows",
    linux: "Linux",
    android: "Android",
    freebsd: "FreeBSD",
    openbsd: "OpenBSD",
    netbsd: "NetBSD",
    sunos: "SunOS",
    aix: "AIX",
    haiku: "Haiku",
    "Mac OS X": "macOS"
};
var ys = {
    trace: {
        text: "TRACE",
        number: 1
    },
    debug: {
        text: "DEBUG",
        number: 5
    },
    info: {
        text: "INFO",
        number: 9
    },
    warn: {
        text: "WARN",
        number: 13
    },
    error: {
        text: "ERROR",
        number: 17
    },
    fatal: {
        text: "FATAL",
        number: 21
    }
};
var bs = ys.info;

function ws(t) {
    try {
        return oi(String(t));
    } catch (t) {
        return ri;
    }
}

function $s(t, i, e, s) {
    const n = t.level || "info",
        {
            text: r,
            number: o
        } = ys[n] || bs,
        l = function(t = Date.now()) {
            return String(t) + "000000";
        }(M(s) ? s : void 0),
        a = {};
    i.distinctId && (a.posthogDistinctId = i.distinctId), i.sessionId && (a.sessionId = i.sessionId), i.windowId && (a["window.id"] = i.windowId), F(i.sessionStartTimestamp) || (a.sessionStartTimestamp = String(i.sessionStartTimestamp)), F(i.lastActivityTimestamp) || (a.lastActivityTimestamp = String(i.lastActivityTimestamp)), i.currentUrl && (a["url.full"] = i.currentUrl), i.screenName && (a["screen.name"] = i.screenName), i.appState && (a["app.state"] = i.appState), i.activeFeatureFlags && i.activeFeatureFlags.length > 0 && (a.feature_flags = i.activeFeatureFlags);
    const u = wi({}, a),
        h = t.attributes;
    if (h) {
        let t = [];
        try {
            t = Object.keys(h);
        } catch (i) {
            t = [];
        }
        for (const i of t) {
            let t;
            try {
                t = h[i];
            } catch (i) {
                t = ri;
            }
            Object.defineProperty(u, i, {
                value: t,
                enumerable: !0,
                writable: !0,
                configurable: !0
            });
        }
    }
    const c = {
        timeUnixNano: l,
        observedTimeUnixNano: l,
        severityNumber: o,
        severityText: r,
        body: {
            stringValue: ws(t.body)
        },
        attributes: cs(u, e)
    };
    return t.trace_id && (c.traceId = t.trace_id), t.span_id && (c.spanId = t.span_id), R(t.trace_flags) || (c.flags = t.trace_flags), c;
}

function Ss(t, i, e) {
    return ps(t, i, e);
}

function xs(t, i, e, s) {
    return {
        resourceLogs: [{
            resource: {
                attributes: _s(i)
            },
            scopeLogs: [{
                scope: {
                    name: e,
                    version: s
                },
                logRecords: t
            }]
        }]
    };
}
var Es = class {
    constructor(t) {
        this.ls = t, this.us = 0;
    }
    get pending() {
        return !!this.cs;
    }
    arm(t) {
        this.clear(), this.us = Date.now() + t, this.cs = pi(() => {
            this.cs = void 0, this.ls();
        }, t);
    }
    armNoEarlierThan(t) {
        this.cs && Date.now() + t <= this.us || this.arm(t);
    }
    clear() {
        this.cs && (clearTimeout(this.cs), this.cs = void 0);
    }
};

function ks() {
    return .75 + .5 * Math.random();
}

function Ts(t, i, e, s) {
    const n = Math.min(Math.max(0, i - 1), 6),
        r = t * Math.pow(2, n);
    return Math.round((void 0 === s ? r : Math.min(r, Math.max(s, t))) * e);
}
var Ps = class {
    constructor(t, i, e, s, n, r = () => Promise.resolve(), o) {
        var l;
        this._instance = t, this.Fr = i, this.A = e, this.hs = s, this.ds = n, this.vs = r, this.fs = o, this.ps = new Es(() => this.gs()), this.ys = null, this.bs = 0, this._s = 0, this.ws = new ui(), this.ks = 0, this.Ss = 1, this.xs = 0, this.$s = 0, this.Cs = !1, this.Ts = i.maxBufferSize, this.Is = Math.max(null !== (l = i.maxQueueSize) && void 0 !== l ? l : i.maxBufferSize, i.maxBufferSize), this.Es = i.flushIntervalMs, this.Ms = i.maxBatchRecordsPerPost, this.As = i.rateCapWindowMs, this.Rs = i.maxLogsPerInterval;
    }
    clearQueue() {
        this._s++, this._instance.setPersistedProperty(f.LogsQueue, []);
    }
    reset() {
        this.ps.clear(), this.xs = 0, this.$s = 0, this.Cs = !1, this.ks = 0, this.Ss = 1, this.ws.reset(), this.Ms = this.Fr.maxBatchRecordsPerPost;
    }
    onReconnect() {
        this.ks = 0, this.Ss = 1, this.ws.isOpen() ? this.Ps() && this.Os() : this.gs();
    }
    captureLog(t, i) {
        var e;
        if (this._instance.isDisabled) return;
        if (this._instance.optedOut) return;
        if (!(null == t ? void 0 : t.body)) return;
        const s = this.Fs(t);
        if (null === s) return;
        if (!s.body) return void this.A.info("Log was rejected in beforeSend function");
        if (!this.Ds()) return;
        const n = {
            record: $s(s, null !== (e = null == i ? void 0 : i.context) && void 0 !== e ? e : this.hs(), this.A, null == i ? void 0 : i.occurredAtMs)
        };
        this.ds(() => this.Ls(n));
    }
    Fs(t) {
        const i = this.Fr.beforeSend;
        if (!i) return t;
        const e = k(i) ? i : [i];
        let s = t;
        for (const t of e) try {
            const i = t(s);
            if (!i) return this.A.info("Log was rejected in beforeSend function"), null;
            s = i;
        } catch (t) {
            return this.A.error("Error in beforeSend function for log:", t), null;
        }
        return s;
    }
    Ds() {
        if (void 0 === this.Rs) return !0;
        const t = Date.now(),
            i = t - this.xs;
        return this.As > i && i >= 0 || (this.xs = t, this.$s = 0, this.Cs = !1), this.Rs > this.$s ? (this.$s++, !0) : (this.Cs || (this.A.warn(`captureLog dropping logs: exceeded ${this.Rs} logs per ${this.As}ms`), this.Cs = !0), !1);
    }
    flush() {
        var t = this;
        return Y(function*() {
            if (!t._instance.isDisabled) return t.ys || (t.ys = t.Ns().finally(() => {
                t.ys = null;
            })), t.ys;
        })();
    }
    Ns() {
        var t = this;
        return Y(function*() {
            var i;
            t.ps.clear();
            let e = null !== (i = t._instance.getPersistedProperty(f.LogsQueue)) && void 0 !== i ? i : [];
            if (0 === e.length) return;
            const s = e.length;
            let n = 0;
            for (; e.length > 0 && s > n;) {
                var r, o;
                const i = t._s;
                t.bs = 0;
                const s = Math.min(e.length, t.Ms),
                    l = e.slice(0, s),
                    a = xs(l.map((t) => t.record), t.js(), null !== (r = t.fs) && void 0 !== r ? r : t._instance.getLibraryId(), t._instance.getLibraryVersion()),
                    u = yield t._instance.qs(a);
                if (t._s !== i) return;
                if ("too-large" === u.kind && l.length > 1) t.Ms = Math.max(1, Math.floor(l.length / 2)), t.A.warn(`Logs batch of size ${l.length} was too large for the ingestion endpoint, reducing batch size to ${t.Ms}`);
                else {
                    if (t.ws.record(u), t.ps.pending && t.ps.arm(Math.max(t.Es, t.ws.remainingMs())), "retry-later" === u.kind) throw u.error;
                    if ("too-large" === u.kind ? t.A.warn("Dropping a single log record with batch size 1 — the record is larger than the server cap and cannot be split further.") : "ok" === u.kind && t.Fr.maxBatchRecordsPerPost > t.Ms && (t.Ms = Math.min(t.Fr.maxBatchRecordsPerPost, t.Ms + 1)), yield t.Bs(l.length), e = null !== (o = t._instance.getPersistedProperty(f.LogsQueue)) && void 0 !== o ? o : [], n += l.length, "fatal" === u.kind) throw u.error;
                }
            }
        })();
    }
    Bs(t) {
        var i = this;
        return Y(function*() {
            var e;
            const s = Math.max(0, t - i.bs),
                n = null !== (e = i._instance.getPersistedProperty(f.LogsQueue)) && void 0 !== e ? e : [];
            i._instance.setPersistedProperty(f.LogsQueue, n.slice(s)), yield i.vs();
        })();
    }
    js() {
        return Ss(this.Fr, this._instance.getLibraryId(), this._instance.getLibraryVersion());
    }
    Ls(t) {
        var i;
        if (this._instance.optedOut) return;
        const e = null !== (i = this._instance.getPersistedProperty(f.LogsQueue)) && void 0 !== i ? i : [];
        this.Is > e.length || (e.shift(), this.bs++, this.A.info("Logs queue is full, dropping oldest record.")), e.push(t), this._instance.setPersistedProperty(f.LogsQueue, e), this.Ts > e.length || this.ws.isOpen() ? this.Os() : this.gs();
    }
    Os() {
        this.ps.pending || this.ps.arm(Math.max(this.Es, this.ws.remainingMs()));
    }
    zs() {
        return Math.max(Ts(this.Es, this.ks, this.Ss, 3e4), this.ws.remainingMs());
    }
    Ps() {
        const t = this._instance.getPersistedProperty(f.LogsQueue);
        return !!t && t.length > 0;
    }
    shutdown(t) {
        var i = this;
        return Y(function*() {
            i.ps.clear();
            const e = i.flush().catch(() => {});
            void 0 !== t ? yield gi(e, t): yield e;
        })();
    }
    flushWithTimeout(t) {
        var i = this;
        return Y(function*() {
            const e = i.flush();
            yield gi(e, t, () => {
                e.catch(() => {});
            });
        })();
    }
    gs() {
        this.flush().then(() => {
            this.ks = 0, this.Ss = 1;
        }, (t) => {
            this.ks++, this.Ss = ks(), this.A.error("PostHog logs flush failed:", t);
        }).finally(() => {
            !this._instance.isDisabled && this.Ps() && this.ps.armNoEarlierThan(this.zs());
        });
    }
};
var Os = /^[0-9a-f]+$/;

function Rs(t, i, e) {
    return "string" == typeof t && t.length === i && t !== e && Os.test(t);
}
var Cs = /^([0-9a-f]{2})-([0-9a-f]{32})-([0-9a-f]{16})-([0-9a-f]{2})(-.*)?$/;
var As = "00";
var Is = [
    0,
    5,
    10,
    25,
    50,
    75,
    100,
    250,
    500,
    750,
    1e3,
    2500,
    5e3,
    7500,
    1e4
];

function Fs(t) {
    return String(t) + "000000";
}

function Ms(t, i, e, s) {
    let n = "";
    return s && (n = Object.keys(s).sort().map((t) => `${JSON.stringify(t)}:${JSON.stringify(s[t])}`).join(",")), `${t}\0${i}\0${null != e ? e : ""}\0${n}`;
}
var Ds = class {
    constructor(t, i, e) {
        this._instance = t, this.Fr = i, this.A = e, this.Hs = new Map(), this.ps = new Es(() => this.flush().catch((t) => {
            this.A.error("Metrics flush failed:", t);
        })), this.ys = null, this.Us = !1, this.Ws = new Map(), this.Vs = new Set(), this.ws = new ui(), this.ks = 0, this.Ss = 1, this.Gs = 0;
    }
    count(t, i = 1, e) {
        this.Qs({
            name: t,
            type: "count",
            value: i,
            unit: null == e ? void 0 : e.unit,
            attributes: null == e ? void 0 : e.attributes
        });
    }
    gauge(t, i, e) {
        this.Qs({
            name: t,
            type: "gauge",
            value: i,
            unit: null == e ? void 0 : e.unit,
            attributes: null == e ? void 0 : e.attributes
        });
    }
    histogram(t, i, e) {
        this.Qs({
            name: t,
            type: "histogram",
            value: i,
            unit: null == e ? void 0 : e.unit,
            attributes: null == e ? void 0 : e.attributes
        });
    }
    flush() {
        var t = this;
        const i = this.ys,
            e = function() {
                var e = Y(function*() {
                    i && (yield i.catch(() => {})), yield t.Js();
                });
                return function() {
                    return e.apply(this, arguments);
                };
            }()().finally(() => {
                this.ys === e && (this.ys = null);
            });
        return this.ys = e, e;
    }
    drainWindow() {
        if (0 === this.Hs.size) return null;
        const t = this.Hs;
        return this.Hs = new Map(), this.Us = !1, this.Ws = new Map(), this.Vs = new Set(), this.Zs(t);
    }
    reset() {
        this.Gs++, this.ws.reset(), this.ks = 0, this.Ss = 1, this.ps.clear(), this.Hs = new Map(), this.ys = null, this.Us = !1, this.Ws = new Map(), this.Vs = new Set();
    }
    Qs(t) {
        if (this._instance.isDisabled || this._instance.optedOut) return;
        const i = this.Fs(t);
        if (null === i) return;
        if (!i.name || "string" != typeof i.name) return void this.A.warn("Dropping metric with empty name");
        if ("number" != typeof i.value || !Number.isFinite(i.value)) return void this.A.warn(`Dropping metric '${i.name}': value must be a finite number`);
        if ("count" === i.type && 0 > i.value) return void this.A.warn(`Dropping count '${i.name}': counters are monotonic, value must be >= 0`);
        let e, s;
        try {
            e = i.attributes ? wi({}, i.attributes) : void 0, s = Ms(i.type, i.name, i.unit, e);
        } catch (t) {
            return void this.A.warn(`Dropping metric '${i.name}': attributes could not be serialized`, t);
        }
        let n = this.Hs.get(s);
        if (!n) {
            if (!this.Ks()) return;
            n = {
                name: i.name,
                type: i.type,
                unit: i.unit,
                attributes: e,
                windowStartMs: Date.now()
            }, this.Hs.set(s, n);
        }
        const r = this.Ws.get(i.name);
        void 0 === r ? this.Ws.set(i.name, i.type) : r === i.type || this.Vs.has(i.name) || (this.Vs.add(i.name), this.A.warn(`Metric name '${i.name}' is already used as a ${r}; recording it as a ${i.type} too will blend both series in charts. Use a distinct name.`)), this.Ys(n, i.value);
        const o = this.Xs();
        o && (n.exemplar = wi(wi({}, o), {}, {
            value: i.value,
            timeMs: Date.now()
        })), this.Os();
    }
    Xs() {
        try {
            var t, i;
            const e = function(t) {
                const i = function(t) {
                    if ("string" != typeof t) return;
                    const i = Cs.exec(t.trim());
                    if (!i) return;
                    const [, e, s, n, r, o] = i;
                    return "ff" === e || "00" === e && o || ! function(t) {
                        return Rs(t, 32, "00000000000000000000000000000000");
                    }(s) || ! function(t) {
                        return Rs(t, 16, "0000000000000000");
                    }(n) ? void 0 : {
                        version: e,
                        traceId: s,
                        spanId: n,
                        flags: r
                    };
                }(t);
                return i && {
                    traceId: i.traceId,
                    spanId: i.spanId,
                    flags: (e = i.flags, 1 & parseInt(e, 16) ? "01" : As)
                };
                var e;
            }(null === (t = (i = this._instance).getActiveSpan) || void 0 === t || null === (t = t.call(i)) || void 0 === t ? void 0 : t.traceparent());
            if (e && "01" === e.flags) return {
                traceId: e.traceId,
                spanId: e.spanId
            };
        } catch (t) {}
    }
    Ks() {
        return this.Fr.maxSeriesPerFlush > this.Hs.size || (this.Us || (this.Us = !0, this.A.warn(`Metric series cap reached (${this.Fr.maxSeriesPerFlush} per flush window); dropping new series until the next flush. Reduce attribute cardinality.`)), !1);
    }
    Ys(t, i) {
        switch (t.type) {
            case "count":
                var e;
                t.total = (null !== (e = t.total) && void 0 !== e ? e : 0) + i;
                break;
            case "gauge":
                t.last = i;
                break;
            case "histogram":
                {
                    t.hist || (t.hist = {
                        count: 0,
                        sum: 0,
                        min: i,
                        max: i,
                        bucketCounts: new Array(Is.length + 1).fill(0)
                    });
                    const e = t.hist;
                    e.count += 1,
                    e.sum += i,
                    e.min = Math.min(e.min, i),
                    e.max = Math.max(e.max, i),
                    e.bucketCounts[function(t, i) {
                        for (let e = 0; i.length > e; e++)
                            if (i[e] >= t) return e;
                        return i.length;
                    }(i, Is)] += 1;
                    break;
                }
        }
    }
    Fs(t) {
        const i = this.Fr.beforeSend;
        if (!i) return t;
        const e = k(i) ? i : [i];
        let s = t;
        for (const t of e) try {
            const i = t(s);
            if (!i) return this.A.info("Metric was rejected in beforeSend function"), null;
            s = i;
        } catch (t) {
            return this.A.error("Error in beforeSend function for metric:", t), null;
        }
        return s;
    }
    Os() {
        this.ps.pending || this.ps.arm(this.zs());
    }
    zs() {
        return Math.max(Ts(this.Fr.flushIntervalMs, this.ks, this.Ss, 3e4), this.ws.remainingMs());
    }
    Js() {
        var t = this;
        return Y(function*() {
            if (t.ps.clear(), 0 === t.Hs.size) return;
            const i = t.Hs;
            t.Hs = new Map(), t.Us = !1, t.Ws = new Map(), t.Vs = new Set();
            const e = t.Gs,
                s = yield t._instance._o(t.Zs(i));
            if (e === t.Gs) switch (t.ws.record(s), "retry-later" === s.kind ? (t.ks++, t.Ss = ks()) : (t.ks = 0, t.Ss = 1), t.ps.pending && t.ps.arm(t.zs()), s.kind) {
                case "ok":
                    return;
                case "retry-later":
                    return t.ko(i), void t.ps.armNoEarlierThan(t.zs());
                case "too-large":
                    return void t.A.warn("Metrics batch exceeded the server size limit and was dropped");
                case "fatal":
                    return void t.A.error("Failed to send metrics batch:", s.error);
            }
        })();
    }
    Zs(t) {
        return i = this.So(t), e = function(t, i, e) {
            return ps(t, i, e);
        }(this.Fr, this._instance.getLibraryId(), this._instance.getLibraryVersion()), s = this._instance.getLibraryId(), n = this._instance.getLibraryVersion(), {
            resourceMetrics: [{
                resource: {
                    attributes: _s(e)
                },
                scopeMetrics: [{
                    scope: {
                        name: s,
                        version: n
                    },
                    metrics: i
                }]
            }]
        };
        var i, e, s, n;
    }
    So(t) {
        const i = Fs(Date.now()),
            e = new Map();
        for (const o of t.values()) {
            var s;
            const t = Ms(o.type, o.name, o.unit, void 0);
            let l = e.get(t);
            l || (l = wi({
                name: o.name
            }, o.unit && {
                unit: o.unit
            }), "count" === o.type ? l.sum = {
                aggregationTemporality: 1,
                isMonotonic: !0,
                dataPoints: []
            } : "gauge" === o.type ? l.gauge = {
                dataPoints: []
            } : l.histogram = {
                aggregationTemporality: 1,
                dataPoints: []
            }, e.set(t, l));
            const a = cs(null !== (s = o.attributes) && void 0 !== s ? s : {}, this.A),
                u = Fs(o.windowStartMs),
                h = Ns(o.exemplar);
            if ("count" === o.type) {
                var n;
                const t = wi({
                    attributes: a,
                    startTimeUnixNano: u,
                    timeUnixNano: i,
                    asDouble: null !== (n = o.total) && void 0 !== n ? n : 0
                }, h);
                l.sum.dataPoints.push(t);
            } else if ("gauge" === o.type) {
                var r;
                const t = wi({
                    attributes: a,
                    timeUnixNano: i,
                    asDouble: null !== (r = o.last) && void 0 !== r ? r : 0
                }, h);
                l.gauge.dataPoints.push(t);
            } else if (o.hist) {
                const t = wi({
                    attributes: a,
                    startTimeUnixNano: u,
                    timeUnixNano: i,
                    count: o.hist.count,
                    sum: o.hist.sum,
                    min: o.hist.min,
                    max: o.hist.max,
                    bucketCounts: o.hist.bucketCounts,
                    explicitBounds: Is
                }, h);
                l.histogram.dataPoints.push(t);
            }
        }
        return Array.from(e.values());
    }
    ko(t) {
        for (const [n, r] of t) {
            var i;
            const t = this.Hs.get(n);
            if (t) switch (t.windowStartMs = Math.min(t.windowStartMs, r.windowStartMs), t.exemplar = null !== (i = t.exemplar) && void 0 !== i ? i : r.exemplar, t.type) {
                case "count":
                    var e, s;
                    t.total = (null !== (e = t.total) && void 0 !== e ? e : 0) + (null !== (s = r.total) && void 0 !== s ? s : 0);
                    break;
                case "gauge":
                    break;
                case "histogram":
                    if (r.hist)
                        if (t.hist) {
                            t.hist.count += r.hist.count, t.hist.sum += r.hist.sum, t.hist.min = Math.min(t.hist.min, r.hist.min), t.hist.max = Math.max(t.hist.max, r.hist.max);
                            for (let i = 0; t.hist.bucketCounts.length > i; i++) t.hist.bucketCounts[i] += r.hist.bucketCounts[i];
                        } else t.hist = r.hist;
            }
            else this.Ks() && this.Hs.set(n, r);
        }
    }
};

function Ns(t) {
    return t ? {
        exemplars: [{
            filteredAttributes: [],
            timeUnixNano: Fs(t.timeMs),
            asDouble: t.value,
            traceId: t.traceId,
            spanId: t.spanId
        }]
    } : {};
}
var Ls = (t, {
    debugEnabled: i
} = {}) => {
    const e = {
        N(e, ...s) {
            let n;
            try {
                n = typeof window > "u" ? void 0 : window;
            } catch (t) {
                return;
            }
            n && (v.DEBUG || n.POSTHOG_DEBUG || i) && !R(n.console) && n.console && ("__rrweb_original__" in n.console[e] ? n.console[e].__rrweb_original__ : n.console[e])(t, ...s);
        },
        debug(...t) {
            e.N("debug", ...t);
        },
        info(...t) {
            e.N("log", ...t);
        },
        warn(...t) {
            e.N("warn", ...t);
        },
        error(...t) {
            e.N("error", ...t);
        },
        critical(...i) {
            console.error(t, ...i);
        },
        uninitializedWarning(t) {
            e.error(`You must initialize PostHog before calling ${t}`);
        },
        createLogger: (i, e) => Ls(`${t} ${i}`, e)
    };
    return e;
};
var js = Ls("[PostHog.js]");
var Us = js.createLogger;
var Bs = Us("[ExternalScriptsLoader]");
var zs = (t) => {
    const i = null == s ? void 0 : s.querySelectorAll("script");
    if (i) {
        for (let e = 0; i.length > e; e++)
            if (i[e].src === t || i[e].getAttribute("src") === t) return i[e];
    }
};
var Hs = (t, i, e) => {
    if (t.config.disable_external_dependency_loading) return Bs.warn(`${i} was requested but loading of external scripts is disabled.`), e("Loading of external scripts is disabled");
    const n = () => {
            if (null == s || s.removeEventListener("DOMContentLoaded", n), t.config.disable_external_dependency_loading) return e("Loading of external scripts is disabled");
            if (!s) return e("document not found");
            let o = s.createElement("script");
            if (o.type = "text/javascript", o.crossOrigin = "anonymous", o.src = i, o.onload = (t) => {
                    o.__posthog_loading_callback_fired = !0, e(void 0, t);
                }, o.onerror = (t) => {
                    o.__posthog_loading_error = t, e(t);
                }, t.config.prepare_external_dependency_script && (o = t.config.prepare_external_dependency_script(o)), !o) return e("prepare_external_dependency_script returned null");
            if (t.config.disable_external_dependency_loading) return e("Loading of external scripts is disabled");
            const l = zs(o.src);
            if (l) {
                if (l.integrity !== o.integrity || l.crossOrigin !== o.crossOrigin || l.nonce !== o.nonce) return e("Existing script conflicts with prepared script policy");
                if (l.__posthog_loading_callback_fired) return e();
                const t = l.__posthog_loading_error;
                return t ? e(t) : (l.addEventListener("load", (t) => {
                    l.__posthog_loading_callback_fired = !0, e(void 0, t);
                }), void l.addEventListener("error", (t) => {
                    l.__posthog_loading_error = t, e(t);
                }));
            }
            if (!s.body) return r();
            if ("head" === t.config.external_scripts_inject_target) s.head.appendChild(o);
            else {
                const t = s.querySelectorAll("body > script");
                var a;
                t.length > 0 ? null === (a = t[0].parentNode) || void 0 === a || a.insertBefore(o, t[0]) : s.body.appendChild(o);
            }
        },
        r = () => {
            null == s || s.addEventListener("DOMContentLoaded", n);
        };
    (null == s ? void 0 : s.body) || zs(i) ? n() : r();
};
var qs = {};
var Ws = (t, i) => {
    let e = `/static/${i}.js?v=${t.version}`;
    if ("toolbar" === i) {
        const t = 3e5;
        e = `${e}&t=${Math.floor(Date.now() / t) * t}`;
    }
    return t.requestRouter.endpointFor("assets", e);
};
c.__PosthogExtensions__ = c.__PosthogExtensions__ || {}, c.__PosthogExtensions__.loadExternalDependency = (t, i, e) => {
    if ("remote-config" === i) {
        const i = t.requestRouter.endpointFor("assets", `/array/${t.config.token}/config.js`);
        return void Hs(t, i, e);
    }
    const s = t.config.strict_script_versioning;
    if (s) {
        const n = t.requestRouter.endpointFor("assets", `/static/${t.version}/${i}.js`),
            r = qs[n];
        if ("fallback" === s && r) {
            if (zs(r)) return void Hs(t, r, e);
            delete qs[n];
        }
        return void Hs(t, n, "fallback" === s ? (s, r) => {
            if (s)
                if ("string" == typeof s) e(s);
                else {
                    var o;
                    const s = Ws(t, i);
                    qs[n] = s;
                    const r = zs(n);
                    null == r || null === (o = r.parentNode) || void 0 === o || o.removeChild(r), Hs(t, s, e);
                }
            else e(void 0, r);
        } : e);
    }
    Hs(t, Ws(t, i), e);
}, c.__PosthogExtensions__.loadSiteApp = (t, i, e) => {
    const s = t.requestRouter.endpointFor("api", i);
    Hs(t, s, e);
}, v.DEBUG = !1, v.LIB_VERSION = "1.446.0", v.LIB_NAME = "web";
var Vs = v;
var Gs = "$early_access_features";
var Ks = "$active_feature_flags";
var Ys = "$feature_flag_details";
var Js = "$feature_flag_errors";
var Xs = "$feature_flag_evaluated_at";
var Zs = "$feature_flag_request_id";
var Qs = "$minimal_flag_called_events";
var tn = "$enabled_feature_flags";
var en = "$stored_group_properties";
var sn = "$stored_person_properties";
var nn = "$flag_call_reported";
var rn = "$flag_call_reported_session_id";
var on = "$feature_flag_payloads";
var ln = "$override_feature_flags";
var an = "$override_feature_flag_payloads";
var un = "visibilitychange";
var hn = "$autocapture_disabled_server_side";
var cn = "$surveys";
var dn = "$surveys_loaded_at";
var vn = "PostHog loadExternalDependency extension not found.";
var fn = "$surveys_activated";
var pn = "$surveys_activated_session";
var gn = "$surveys_activated_timestamps";
var _n = "$people_distinct_id";
var mn = "distinct_id";
var yn = "$device_id";
var bn = "$device_model";
var wn = "__alias";
var $n = "__cmpns";
var Sn = "$fbc";
var xn = "$fbc_persistence";
var En = "$fbp";
var kn = "$fbp_persistence";
var Tn = "__timers";
var Pn = "$heatmaps_enabled_server_side";
var On = "$exception_capture_enabled_server_side";
var Rn = "$error_tracking_suppression_rules";
var Cn = "$error_tracking_capture_extension_exceptions";
var An = "$web_vitals_enabled_server_side";
var In = "$dead_clicks_enabled_server_side";
var Fn = "$product_tours_enabled_server_side";
var Mn = "$logs_capture_enabled_server_side";
var Dn = "$web_vitals_allowed_metrics";
var Nn = "$session_recording_remote_config";
var Ln = "$session_recording_enabled_server_side";
var jn = "$replay_sample_rate";
var Un = "$replay_override_sampling";
var Bn = "$replay_override_linked_flag";
var zn = "$replay_override_url_trigger";
var Hn = "$replay_override_event_trigger";
var qn = "$sesid";
var Wn = "$session_is_sampled";
var Vn = "$session_past_minimum_duration";
var Gn = "$session_recording_url_trigger_activated_session";
var Kn = "$session_recording_event_trigger_activated_session";
var Yn = "$debug_first_full_snapshot_timestamp";
var Jn = "$sess_rec_flush_size";
var Xn = "$groups";
var Zn = "ph_product_tours";
var Qn = "$product_tours_activated";
var tr = "$product_tours_activated_session";
var ir = "$conversations_widget_session_id";
var er = "$conversations_ticket_id";
var sr = "$conversations_widget_state";
var nr = "$conversations_user_traits";
var rr = "$user_state";
var or = "$client_session_props";
var lr = "$capture_rate_limit";
var ar = "$initial_campaign_params";
var ur = "$initial_referrer_info";
var hr = "$initial_person_info";
var cr = "$epp";
var dr = "$posthog_cookieless";
var vr = "$cookieless_mode";
var fr = "$sdk_debug_extensions_init_method";
var pr = "$sdk_debug_extensions_init_time_ms";
var gr = "$sdk_debug_recording_script_not_loaded";
var _r = "$sdk_debug_replay_stale_config";
var mr = "$sdk_debug_replay_event_trigger_status";
var yr = "$sdk_debug_replay_linked_flag_trigger_status";
var br = "$sdk_debug_replay_matched_recording_trigger_groups";
var wr = "$sdk_debug_replay_pending_trigger_conditions";
var $r = "$sdk_debug_replay_remote_trigger_matching_config";
var Sr = "$sdk_debug_replay_trigger_groups_count";
var xr = "$sdk_debug_replay_url_trigger_status";
var Er = "$session_recording_start_reason";
var kr = "anonymous";
var Tr = "identified";
var Pr = "identified_only";
var Or = "beforeunload";
var Rr = "$pageview";
var Cr = "$pageleave";
var Ar = "$identify";
var Ir = "$groupidentify";

function Fr(t, i) {
    k(t) && t.forEach(i);
}

function Mr(t, i) {
    if (!F(t))
        if (k(t)) t.forEach(i);
        else if (((t) => t instanceof FormData)(t)) t.forEach((t, e) => i(t, e));
    else
        for (const e in t) x.call(t, e) && i(t[e], e);
}
var Dr = function(t, ...i) {
    for (const e of i)
        for (const i in e) void 0 !== e[i] && (t[i] = e[i]);
    return t;
};

function Nr(t) {
    const i = Object.keys(t);
    let e = i.length;
    const s = new Array(e);
    for (; e--;) s[e] = [i[e], t[i[e]]];
    return s;
}
var Lr = function(t) {
    return function(...i) {
        try {
            return t.apply(this, i);
        } catch (t) {
            js.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), js.critical(t);
        }
    };
};
var jr = function(t) {
    const i = {};
    return Mr(t, function(t, e) {
        (C(t) && t.length > 0 || M(t)) && (i[e] = t);
    }), i;
};

function Ur(t) {
    const i = wi({}, t);
    for (const e of [
            "name",
            "message",
            "stack",
            "cause",
            "errors"
        ]) try {
        e in t && (i[e] = t[e]);
    } catch (t) {}
    return i;
}
var Br = [
    "herokuapp.com",
    "vercel.app",
    "netlify.app"
];

function zr(t) {
    const i = null == t ? void 0 : t.hostname;
    if (!C(i)) return !1;
    const e = i.split(".").slice(-2).join(".");
    for (const t of Br)
        if (e === t) return !1;
    return !0;
}

function Hr(t, i, e, s) {
    const {
        capture: n = !1,
        passive: r = !0
    } = null != s ? s : {};
    null == t || t.addEventListener(i, e, {
        capture: n,
        passive: r
    });
}

function qr(t) {
    return "ph_toolbar_internal" === t.name;
}
var Wr = (t) => {
    if (s) {
        try {
            const i = t + "=",
                e = s.cookie.split(";").filter((t) => t.length);
            for (let t = 0; e.length > t; t++) {
                let s = e[t];
                for (;
                    " " == s.charAt(0);) s = s.substring(1, s.length);
                if (0 === s.indexOf(i)) return decodeURIComponent(s.substring(i.length, s.length));
            }
        } catch (t) {}
        return null;
    }
};
var Vr = class t {
    constructor(t) {
        if (this.bytes = t, 16 !== t.length) throw new TypeError("not 128-bit length");
    }
    static fromFieldsV7(i, e, s, n) {
        if (!Number.isInteger(i) || !Number.isInteger(e) || !Number.isInteger(s) || !Number.isInteger(n) || 0 > i || 0 > e || 0 > s || 0 > n || i > 0xffffffffffff || e > 4095 || s > 1073741823 || n > 4294967295) throw new RangeError("invalid field value");
        const r = new Uint8Array(16);
        return r[0] = i / Math.pow(2, 40), r[1] = i / Math.pow(2, 32), r[2] = i / Math.pow(2, 24), r[3] = i / Math.pow(2, 16), r[4] = i / 256, r[5] = i, r[6] = 112 | e >>> 8, r[7] = e, r[8] = 128 | s >>> 24, r[9] = s >>> 16, r[10] = s >>> 8, r[11] = s, r[12] = n >>> 24, r[13] = n >>> 16, r[14] = n >>> 8, r[15] = n, new t(r);
    }
    toString() {
        let t = "";
        for (let i = 0; this.bytes.length > i; i++) t = t + (this.bytes[i] >>> 4).toString(16) + (15 & this.bytes[i]).toString(16), 3 !== i && 5 !== i && 7 !== i && 9 !== i || (t += "-");
        if (36 !== t.length) throw new Error("Invalid UUIDv7 was generated");
        return t;
    }
    clone() {
        return new t(this.bytes.slice(0));
    }
    equals(t) {
        return 0 === this.compareTo(t);
    }
    compareTo(t) {
        for (let i = 0; 16 > i; i++) {
            const e = this.bytes[i] - t.bytes[i];
            if (0 !== e) return Math.sign(e);
        }
        return 0;
    }
};
var Gr = class {
    generate() {
        const t = this.generateOrAbort();
        if (!R(t)) return t; {
            this.Tt = 0;
            const t = this.generateOrAbort();
            if (R(t)) throw new Error("Could not generate UUID after timestamp reset");
            return t;
        }
    }
    generateOrAbort() {
        const t = (() => {
            const t = Date.now();
            return M(t) && isFinite(t) ? Math.min(Math.max(Math.floor(t), 0), 0xffffffffffff) : 0;
        })();
        if (t > this.Tt) this.Tt = t, this.It();
        else {
            if (this.Tt >= t + 1e4) return;
            this.Mt++, this.Mt > 4398046511103 && (this.Tt++, this.It());
        }
        return Vr.fromFieldsV7(this.Tt, Math.trunc(this.Mt / Math.pow(2, 30)), this.Mt & Math.pow(2, 30) - 1, this.Rt.nextUint32());
    }
    It() {
        this.Mt = 1024 * this.Rt.nextUint32() + (1023 & this.Rt.nextUint32());
    }
    constructor() {
        this.Tt = 0, this.Mt = 0, this.Rt = new Jr();
    }
};
var Kr = (t) => {
    if ("u" > typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
    for (let i = 0; t.length > i; i++) t[i] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
    return t;
};
var Yr;
var Jr = class {
    nextUint32() {
        var t;
        return this.At.length > this.Et || ((null !== (t = Yr) && void 0 !== t ? t : Yr = "u" > typeof window && !R(window.crypto) && crypto.getRandomValues ? (t) => {
            try {
                return crypto.getRandomValues(t);
            } catch (i) {
                return Kr(t);
            }
        } : Kr)(this.At), this.Et = 0), this.At[this.Et++];
    }
    constructor() {
        this.At = new Uint32Array(8), this.Et = 1 / 0;
    }
};
var Xr;
var Zr = () => Qr().toString();
var Qr = () => (Xr || (Xr = new Gr())).generate();
var to = "";
var io = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
var eo = null;
var so = {
    Ot() {
        if (!I(eo)) return eo;
        if (eo = !1, s) try {
            const t = `__ph_cookie_support_${Zr()}`;
            so.$t(t, "xyz"), eo = "\"xyz\"" === Wr(t), so.Dt(t);
        } catch (t) {
            eo = !1;
        }
        return eo;
    },
    Pt(t) {
        js.error("cookieStore error: " + t);
    },
    Lt: Wr,
    Ft(t) {
        let i;
        try {
            i = JSON.parse(so.Lt(t)) || {};
        } catch (t) {}
        return i;
    },
    $t(t, i, e, n, r) {
        if (!s) return !1;
        try {
            let o = "",
                l = "";
            const a = function(t, i) {
                if (i) {
                    let i = function(t, i = s) {
                        if (to) return to;
                        if (!i) return "";
                        if (["localhost", "127.0.0.1"].includes(t)) return "";
                        const e = t.split(".");
                        let n = Math.min(e.length, 8);
                        const r = "dmn_chk_" + Zr();
                        for (; !to && n--;) {
                            const t = e.slice(n).join("."),
                                s = r + "=1;domain=." + t + ";path=/";
                            i.cookie = s + ";max-age=3", i.cookie.includes(r) && (i.cookie = s + ";max-age=0", to = t);
                        }
                        return to;
                    }(t);
                    if (!i) {
                        const e = ((t) => {
                            const i = t.match(io);
                            return i ? i[0] : "";
                        })(t);
                        e !== i && js.info("Warning: cookie subdomain discovery mismatch", e, i), i = e;
                    }
                    return i ? "; domain=." + i : "";
                }
                return "";
            }(s.location.hostname, n);
            if (e) {
                const t = new Date();
                t.setTime(t.getTime() + 864e5 * e), o = "; expires=" + t.toUTCString();
            }
            r && (l = "; secure");
            const u = t + "=" + encodeURIComponent(JSON.stringify(i)) + o + "; SameSite=Lax; path=/" + a + l;
            return u.length > 3686.4 && js.warn("cookieStore warning: large cookie, len=" + u.length), s.cookie = u, !0;
        } catch (t) {
            return !1;
        }
    },
    Dt(t, i) {
        if ((null == s ? void 0 : s.cookie) && (!i || !I(Wr(t)))) try {
            so.$t(t, "", -1, i);
        } catch (t) {
            return;
        }
    }
};
var no = null;
var ro = {
    Ot() {
        if (!I(no)) return no;
        let i = !0;
        if (R(t)) i = !1;
        else try {
            const t = "__mplssupport__";
            ro.$t(t, "xyz"), "\"xyz\"" !== ro.Lt(t) && (i = !1), ro.Dt(t);
        } catch (t) {
            i = !1;
        }
        return i || js.error("localStorage unsupported; falling back to cookie store"), no = i, i;
    },
    Pt(t) {
        js.error("localStorage error: " + t);
    },
    Lt(i) {
        try {
            return null == t ? void 0 : t.localStorage.getItem(i);
        } catch (t) {
            ro.Pt(t);
        }
        return null;
    },
    Ft(t) {
        try {
            return JSON.parse(ro.Lt(t)) || {};
        } catch (t) {}
        return null;
    },
    $t(i, e) {
        try {
            return null == t || t.localStorage.setItem(i, JSON.stringify(e)), !0;
        } catch (t) {
            ro.Pt(t);
        }
        return !1;
    },
    Dt(i) {
        try {
            null == t || t.localStorage.removeItem(i);
        } catch (t) {
            ro.Pt(t);
        }
    }
};
var oo = [
    sn,
    Ks,
    tn,
    Ys,
    on,
    Zs,
    Xs,
    Js,
    nn
];
var lo = [
    yn,
    mn,
    qn,
    Wn,
    cr,
    hr,
    xn,
    rr
];
var ao = (t) => t + "_cpm";
var uo = [
    "__proto__",
    "constructor",
    "prototype"
];
var ho = (t) => {
    if (!P(t)) return {};
    const i = {};
    return Object.keys(t).forEach((e) => {
        -1 === uo.indexOf(e) && (i[e] = t[e]);
    }), i;
};
var co = (t, i = []) => {
    const e = {};
    return [...lo, ...i].forEach((i) => {
        const s = t[i];
        R(s) || I(s) || "" === s || (e[i] = s);
    }), e;
};
var vo = (t) => {
    let i = 5381,
        e = 2166136261;
    for (let s = 0; t.length > s; s++) {
        const n = t.charCodeAt(s);
        i = 33 * i ^ n, e = Math.imul(e ^ n, 16777619);
    }
    return t.length.toString(36) + "." + (i >>> 0).toString(36) + "." + (e >>> 0).toString(36);
};
var fo = (t, i) => ({
    p: i,
    f: vo(JSON.stringify(t))
});
var po = (t, i) => {
    if (!i) return {
        properties: [],
        isValid: !1
    };
    try {
        const e = so.Ft(ao(t)),
            s = (null == e ? void 0 : e.f) === vo(i) && k(e.p);
        return {
            properties: s ? e.p : [],
            isValid: s
        };
    } catch (t) {
        return {
            properties: [],
            isValid: !1
        };
    }
};
var go = (t, i) => i + "|" + (so.Lt(ao(t)) || "");
var _o = {};
var mo = {
    Ot: () => !0,
    Pt(t) {
        js.error("memoryStorage error: " + t);
    },
    Lt: (t) => t in _o ? _o[t] : null,
    Ft: (t) => t in _o ? _o[t] : null,
    $t: (t, i) => (_o[t] = i, !0),
    Dt(t) {
        delete _o[t];
    }
};
var yo = null;
var bo = {
    Ot() {
        if (!I(yo)) return yo;
        if (yo = !0, R(t)) yo = !1;
        else try {
            const t = "__support__";
            bo.$t(t, "xyz"), "\"xyz\"" !== bo.Lt(t) && (yo = !1), bo.Dt(t);
        } catch (t) {
            yo = !1;
        }
        return yo;
    },
    Pt(t) {
        js.error("sessionStorage error: ", t);
    },
    Lt(i) {
        try {
            return null == t ? void 0 : t.sessionStorage.getItem(i);
        } catch (t) {
            bo.Pt(t);
        }
        return null;
    },
    Ft(t) {
        try {
            return JSON.parse(bo.Lt(t)) || null;
        } catch (t) {}
        return null;
    },
    $t(i, e) {
        try {
            return null == t || t.sessionStorage.setItem(i, JSON.stringify(e)), !0;
        } catch (t) {
            bo.Pt(t);
        }
        return !1;
    },
    Dt(i) {
        try {
            null == t || t.sessionStorage.removeItem(i);
        } catch (t) {
            bo.Pt(t);
        }
    }
};
var wo = class {
    constructor(t) {
        this._instance = t;
    }
    get Fr() {
        return this._instance.config;
    }
    get consent() {
        return this.El() ? 0 : this.Ml;
    }
    isOptedOut() {
        return "always" === this.Fr.cookieless_mode || this.isRejected() || -1 === this.consent && "on_reject" === this.Fr.cookieless_mode;
    }
    isOptedIn() {
        return !this.isOptedOut();
    }
    isExplicitlyOptedOut() {
        return 0 === this.consent;
    }
    isRejected() {
        return 0 === this.consent || -1 === this.consent && this.Fr.opt_out_capturing_by_default;
    }
    optInOut(t) {
        this.Al.$t(this.Rl, t ? 1 : 0, this.Fr.cookie_expiration, this.Fr.cross_subdomain_cookie, this.Fr.secure_cookie);
    }
    reset() {
        this.Al.Dt(this.Rl, this.Fr.cross_subdomain_cookie);
    }
    get Rl() {
        const {
            token: t,
            opt_out_capturing_cookie_prefix: i,
            consent_persistence_name: e
        } = this._instance.config;
        return e || (i ? i + t : "__ph_opt_in_out_" + t);
    }
    get Ml() {
        const t = this.Al.Lt(this.Rl);
        return V(t) ? 1 : m(G, t) ? 0 : -1;
    }
    get Al() {
        const t = this.Fr.opt_out_capturing_persistence_type,
            i = "localStorage" === t ? ro : so,
            e = i.Ot() ? i : mo;
        if (!this.Pl || this.Pl !== e) {
            this.Pl = e;
            const i = "localStorage" === t ? so : ro;
            i.Lt(this.Rl) && (this.Pl.Lt(this.Rl) || this.optInOut(V(i.Lt(this.Rl))), i.Dt(this.Rl, this.Fr.cross_subdomain_cookie));
        }
        return this.Pl;
    }
    El() {
        return !!this.Fr.respect_dnt && [
            null == e ? void 0 : e.doNotTrack,
            null == e ? void 0 : e.msDoNotTrack,
            c.doNotTrack,
            null == e ? void 0 : e.globalPrivacyControl
        ].some((t) => V(t));
    }
};

function $o(t, i) {
    var e;
    const s = null == t || null === (e = t.config) || void 0 === e ? void 0 : e.get_current_url;
    if (!T(s)) return i;
    try {
        const t = s(i);
        return C(t) && t ? t : i;
    } catch (t) {
        return js.error("Error in get_current_url, falling back to window.location.href", t), i;
    }
}

function So(t) {
    var i;
    return t instanceof Element && ("__POSTHOG_TOOLBAR__" === t.id || !!(null === (i = t.closest) || void 0 === i ? void 0 : i.call(t, ".toolbar-global-fade-container")));
}

function xo(t) {
    return !!t && 1 === t.nodeType;
}

function Eo(t, i) {
    return !!t && !!t.tagName && t.tagName.toLowerCase() === i.toLowerCase();
}

function ko(t) {
    return !!t && 3 === t.nodeType;
}

function To(t) {
    return !!t && 11 === t.nodeType && xo(t.host);
}

function Po(t) {
    return t ? y(t).split(/\s+/) : [];
}

function Oo(t, i) {
    const e = function(t) {
        var i;
        const e = typeof window > "u" ? void 0 : window,
            s = null == e || null === (i = e.location) || void 0 === i ? void 0 : i.href;
        return R(s) ? void 0 : $o(t, s);
    }(i);
    return !!(e && t && t.some((t) => e.match(t)));
}

function Ro(t) {
    let i = "";
    switch (typeof t.className) {
        case "string":
            i = t.className;
            break;
        case "object":
            i = (t.className && "baseVal" in t.className ? t.className.baseVal : null) || t.getAttribute("class") || "";
            break;
        default:
            i = "";
    }
    return Po(i);
}

function Co(t) {
    return F(t) ? null : y(t).split(/(\s+)/).filter((t) => ll(t)).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255);
}

function Ao(t) {
    let i = "";
    return Zo(t) && !Qo(t) && t.childNodes && t.childNodes.length && Mr(t.childNodes, function(t) {
        var e;
        ko(t) && t.textContent && (i += null !== (e = Co(t.textContent)) && void 0 !== e ? e : "");
    }), y(i);
}

function Io(t) {
    var i;
    return R(t.target) ? t.srcElement || null : (null === (i = t.target) || void 0 === i ? void 0 : i.shadowRoot) ? t.composedPath()[0] || null : t.target || null;
}
var Fo = [
    "a",
    "button",
    "form",
    "input",
    "select",
    "textarea",
    "label"
];

function Mo(t, i) {
    const e = t.matches || t.matchesSelector || t.msMatchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || t.oMatchesSelector;
    try {
        return !!e && e.call(t, i);
    } catch (t) {
        return !1;
    }
}

function Do(t, i) {
    if (R(i)) return !0;
    for (const e of t)
        if (i.some((t) => Mo(e, t))) return !0;
    return !1;
}

function No(t) {
    const i = t.parentNode;
    return !(!i || !xo(i)) && i;
}
var Lo = [".ph-no-autocapture", "[data-ph-no-autocapture]"];
var jo = [
    "next",
    "previous",
    "prev",
    ">",
    "<",
    "→",
    "←",
    "›",
    "‹",
    "»",
    "«",
    "▶",
    "◀",
    "❯",
    "❮"
];
var Uo = [
    ...jo,
    "+",
    "-",
    "−",
    "–"
];
var Bo = Uo.length + 10;
var zo = [
    "button",
    "a",
    "input",
    "select",
    "textarea",
    "label"
];
var Ho = [
    "button",
    "link",
    "tab",
    "menuitem",
    "option"
];
var qo = (t, i) => /[a-z0-9]/i.test(i) ? m(Uo, i) ? new RegExp(`\\b${i}\\b`).test(t) : t.includes(i) : t === i;
var Wo = (t) => m(zo, t.tagName.toLowerCase()) || m(Ho, (t.getAttribute("role") || "").toLowerCase());

function Vo(t) {
    let i = "",
        e = "";
    const s = (t) => {
        xo(t) && Zo(t) && !Qo(t) && (i += ` ${Ao(t)}`, e = e || t.getAttribute("aria-label") || "", Mr(t.childNodes, s));
    };
    s(t), i = y(i.replace(/\s+/g, " "));
    const n = (ll(i) ? i : "").toLowerCase(),
        r = t.getAttribute("aria-label") || (n ? "" : e);
    return {
        safeText: n,
        ariaLabel: y(r).toLowerCase()
    };
}
var Go = [".ph-no-rageclick", ".ph-no-capture"];
var Ko = [
    "",
    "text",
    "search",
    "email",
    "password",
    "url",
    "tel",
    "number"
];

function Yo(t, i) {
    if (!(typeof window > "u" ? void 0 : window) || Jo(t)) return !1;
    let e, s, n;
    var r, o;
    if (N(i) ? (e = !!i && Go, s = void 0, n = !1) : (e = null !== (r = null == i ? void 0 : i.css_selector_ignorelist) && void 0 !== r ? r : Go, s = null == i ? void 0 : i.content_ignorelist, n = null !== (o = null == i ? void 0 : i.ignore_text_selection) && void 0 !== o && o), !1 === e) return !1;
    if (n && function(t) {
            return !(!t || !xo(t)) && (!!Eo(t, "textarea") || (Eo(t, "input") ? m(Ko, (t.getAttribute("type") || "").toLowerCase()) : function(t) {
                var i;
                if (t.isContentEditable) return !0;
                const e = null === (i = t.getAttribute) || void 0 === i ? void 0 : i.call(t, "contenteditable");
                return "true" === e || "" === e;
            }(t)));
        }(t)) return !1;
    const {
        targetElementList: l
    } = Xo(t, !1);
    return !(s && function(t, {
        safeText: i,
        ariaLabel: e
    }) {
        let s;
        if (!0 === t) s = jo;
        else {
            if (!k(t)) return !1;
            if (t.length > Bo) return js.error(`[PostHog] content_ignorelist array cannot exceed ${Bo} items. Use css_selector_ignorelist for more complex matching.`), !1;
            s = t.map((t) => t.toLowerCase());
        }
        return s.some((t) => qo(i, t) || qo(e, t));
    }(s, function(t, i) {
        for (const t of i)
            if (Wo(t)) return Vo(t);
        for (const t of i) {
            try {
                var e;
                if ("pointer" !== (null === (e = window) || void 0 === e ? void 0 : e.getComputedStyle(t).getPropertyValue("cursor"))) break;
            } catch (t) {
                break;
            }
            const i = Vo(t);
            if (i.safeText || i.ariaLabel) return i;
        }
        return Vo(t);
    }(t, l)) || Do(l, e));
}
var Jo = (t) => !t || Eo(t, "html") || !xo(t);
var Xo = (t, i) => {
    const e = typeof window > "u" ? void 0 : window;
    if (!e || Jo(t)) return {
        parentIsUsefulElement: !1,
        targetElementList: []
    };
    let s = !1;
    const n = [t];
    let r = t;
    for (; r.parentNode && !Eo(r, "body");) {
        if (To(r.parentNode)) {
            n.push(r.parentNode.host), r = r.parentNode.host;
            continue;
        }
        const t = No(r);
        if (!t) break;
        if (i || Fo.indexOf(t.tagName.toLowerCase()) > -1) s = !0;
        else try {
            const i = e.getComputedStyle(t);
            i && "pointer" === i.getPropertyValue("cursor") && (s = !0);
        } catch (t) {}
        n.push(t), r = t;
    }
    return {
        parentIsUsefulElement: s,
        targetElementList: n
    };
};

function Zo(t) {
    const i = new Set();
    let e = 0;
    for (let s = t; s.parentNode && !Eo(s, "body"); s = s.parentNode) {
        if (e++ >= 1e3 || i.has(s)) return !1;
        i.add(s);
        const t = Ro(s);
        if (m(t, "ph-sensitive") || m(t, "ph-no-capture")) return !1;
    }
    if (m(Ro(t), "ph-include")) return !0;
    const s = t.type || "";
    if (C(s)) switch (s.toLowerCase()) {
        case "hidden":
        case "password":
            return !1;
    }
    const n = t.name || t.id || "";
    return !C(n) || !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(n.replace(/[^a-zA-Z0-9]/g, ""));
}

function Qo(t) {
    return !!(Eo(t, "input") && ![
        "button",
        "checkbox",
        "submit",
        "reset"
    ].includes(t.type) || Eo(t, "select") || Eo(t, "textarea") || "true" === t.getAttribute("contenteditable"));
}
var tl = new RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$");
var il = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g;
var el = [
    16,
    15,
    14,
    13
];
var sl = new RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$");
var nl = new RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g");
var rl = /[0-9A-Za-z_]/;

function ol(t) {
    let i = 0,
        e = !1;
    for (let s = t.length - 1; s >= 0; s--) {
        let n = t.charCodeAt(s) - 48;
        e && (n *= 2, n > 9 && (n -= 9)), i += n, e = !e;
    }
    return i % 10 == 0;
}

function ll(t, i = !0) {
    if (F(t)) return !1;
    if (C(t)) {
        if (t = y(t), i ? tl.test((t || "").replace(/[- ]/g, "")) : function(t) {
                let i;
                for (il.lastIndex = 0; i = il.exec(t);) {
                    const t = i[2];
                    if (!t) continue;
                    const e = t.replace(/[- ]/g, "");
                    for (let t = 0; e.length > t; t++)
                        for (const i of el) {
                            const s = t + i;
                            if (e.length >= s) {
                                const i = e.slice(t, s);
                                if (tl.test(i) && ol(i)) return !0;
                            }
                        }
                }
                return !1;
            }(t)) return !1;
        if (i ? sl.test(t) : function(t) {
                let i;
                for (nl.lastIndex = 0; i = nl.exec(t);) {
                    const t = i[1],
                        e = i[3];
                    if (!(t && e && rl.test(t) && rl.test(e))) return !0;
                }
                return !1;
            }(t)) return !1;
    }
    return !0;
}

function al(t) {
    let i = Ao(t);
    return i = `${i} ${ul(t)}`.trim(), ll(i) ? i : "";
}

function ul(t) {
    let i = "";
    return t && t.childNodes && t.childNodes.length && Mr(t.childNodes, function(t) {
        var e;
        if (t && "span" === (null === (e = t.tagName) || void 0 === e ? void 0 : e.toLowerCase())) try {
            const e = Ao(t);
            i = `${i} ${e}`.trim(), t.childNodes && t.childNodes.length && (i = `${i} ${ul(t)}`.trim());
        } catch (t) {
            js.error("[AutoCapture]", t);
        }
    }), i;
}

function hl(t) {
    return t.replace(/"|\\"/g, "\\\"");
}

function cl(t) {
    const i = t.attr__class;
    if (i) return k(i) ? i : Po(i);
}
var dl = Us("[Dead Clicks]");
var vl = () => !0;
var fl = (t) => {
    var i;
    const e = !!(null === (i = t.instance.persistence) || void 0 === i ? void 0 : i.get_property(In)),
        s = t.instance.config.capture_dead_clicks;
    return N(s) ? s : !!P(s) || e;
};
var pl = class {
    get lazyLoadedDeadClicksAutocapture() {
        return this.Ol;
    }
    constructor(t, i, e) {
        this.instance = t, this.isEnabled = i, this.onCapture = e, this.startIfEnabledOrStop();
    }
    onRemoteConfig(t) {
        if (!t.ok) return;
        const i = t.config;
        "captureDeadClicks" in i && (this.instance.persistence && this.instance.persistence.register({
            [In]: i.captureDeadClicks
        }), this.startIfEnabledOrStop());
    }
    startIfEnabledOrStop() {
        this.isEnabled(this) ? this.Fl(() => {
            this.Dl();
        }) : this.stop();
    }
    Fl(t) {
        var i, e, s;
        (null === (i = c.__PosthogExtensions__) || void 0 === i ? void 0 : i.initDeadClicksAutocapture) ? t(): null === (e = c.__PosthogExtensions__) || void 0 === e || null === (s = e.loadExternalDependency) || void 0 === s || s.call(e, this.instance, "dead-clicks-autocapture", (i) => {
            i ? dl.error("failed to load script", i) : t();
        });
    }
    Dl() {
        var t;
        if (s) {
            if (!this.Ol && (null === (t = c.__PosthogExtensions__) || void 0 === t ? void 0 : t.initDeadClicksAutocapture)) {
                const t = P(this.instance.config.capture_dead_clicks) ? wi({}, this.instance.config.capture_dead_clicks) : {};
                t.__onCapture = this.onCapture, this.onCapture && (t.capture_dead_swipes = !1), this.Ol = c.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, t), this.Ol.start(s), dl.info("starting...");
            }
        } else dl.error("`document` not found. Cannot start.");
    }
    stop() {
        this.Ol && (this.Ol.stop(), this.Ol = void 0, dl.info("stopping..."));
    }
};
var gl = Us("[SegmentIntegration]");

function _l(t, i, e = !0) {
    const s = t.config.segment;
    if (!s) return i();
    const {
        analytics: n,
        filterProperties: r
    } = ((t) => T(t.register))(o = s) ? {
        analytics: o
    } : o;
    var o;
    ! function(t, i, e, s) {
        const n = (i) => {
                const n = () => i.anonymousId() || Zr();
                t.config.get_device_id = n, s && i.id() && (t.register({
                    distinct_id: i.id(),
                    $device_id: n()
                }), t.persistence.set_property(rr, Tr)), e(s ? void 0 : i.anonymousId() || void 0);
            },
            r = i.user();
        "then" in r && T(r.then) ? r.then(n) : n(r);
    }(t, n, (e) => {
        n.register(((t, i, {
            filterProperties: e
        } = {}) => {
            "undefined" != typeof Promise && Promise.resolve || gl.warn("This browser does not have Promise support, and can not use the segment integration");
            const s = (s, n) => {
                if (!n) return s;
                const r = !!i && s.event.anonymousId === i && !s.event.userId;
                r || s.event.userId || s.event.anonymousId === t.get_distinct_id() || (gl.info("No userId set, resetting PostHog"), t.reset()), r || (i = void 0), s.event.userId && s.event.userId !== t.get_distinct_id() && (gl.info("UserId set, identifying with PostHog"), t.identify(s.event.userId));
                let o = t.calculateEventProperties(n, s.event.properties);
                if (!F(e)) {
                    const t = s.event.properties || {},
                        i = {};
                    for (const e of Object.keys(o)) x.call(t, e) || (i[e] = o[e]);
                    const n = ((t, i) => {
                        const e = k(t) ? t : [t];
                        let s = wi({}, i);
                        for (const t of e) try {
                            if (s = t(s), F(s)) return null;
                        } catch (t) {
                            return gl.error("Error in Segment filterProperties:", t), null;
                        }
                        return s;
                    })(e, i);
                    if (F(n)) return s;
                    o = n;
                }
                return s.event.properties = Object.assign({}, o, s.event.properties), s;
            };
            return {
                name: "PostHog JS",
                type: "enrichment",
                version: "1.0.0",
                isLoaded() {
                    return !0;
                },
                load() {
                    return Promise.resolve();
                },
                track(t) {
                    return s(t, t.event.event);
                },
                page(t) {
                    return s(t, Rr);
                },
                identify(t) {
                    return s(t, Ar);
                },
                screen(t) {
                    return s(t, "$screen");
                }
            };
        })(t, e, {
            filterProperties: r
        })).then(() => {
            i();
        }, (t) => {
            gl.error("Failed to register the Segment integration", t), i();
        });
    }, e);
}
var ml = "posthog-js";

function yl(t, {
    organization: i,
    projectId: e,
    prefix: s,
    severityAllowList: n = ["error"],
    sendExceptionsToPostHog: r = !0
} = {}) {
    return (o) => {
        var l, a, u, h, c;
        if ("*" !== n && !n.includes(o.level) || !t.__loaded) return o;
        o.tags || (o.tags = {});
        const d = t.requestRouter.endpointFor("ui", `/project/${t.config.token}/person/${t.get_distinct_id()}`);
        o.tags["PostHog Person URL"] = d, t.sessionRecordingStarted() && (o.tags["PostHog Recording URL"] = t.get_session_replay_url({
            withTimestamp: !0
        }));
        const v = (null === (l = o.exception) || void 0 === l ? void 0 : l.values) || [],
            f = v.map((t) => wi(wi({}, t), {}, {
                stacktrace: t.stacktrace ? wi(wi({}, t.stacktrace), {}, {
                    type: "raw",
                    frames: (t.stacktrace.frames || []).map((t) => wi(wi({}, t), {}, {
                        platform: "web:javascript"
                    }))
                }) : void 0
            })),
            p = {
                $exception_message: (null === (a = v[0]) || void 0 === a ? void 0 : a.value) || o.message,
                $exception_type: null === (u = v[0]) || void 0 === u ? void 0 : u.type,
                $exception_level: o.level,
                $exception_list: f,
                $sentry_event_id: o.event_id,
                $sentry_exception: o.exception,
                $sentry_exception_message: (null === (h = v[0]) || void 0 === h ? void 0 : h.value) || o.message,
                $sentry_exception_type: null === (c = v[0]) || void 0 === c ? void 0 : c.type,
                $sentry_tags: o.tags
            };
        var g;
        return i && e && (p.$sentry_url = (s || "https://sentry.io/organizations/") + i + "/issues/?project=" + e + "&query=" + o.event_id), r && (null === (g = t.exceptions) || void 0 === g || g.sendExceptionEvent(p)), o;
    };
}
var bl = class {
    constructor(t, i, e, s, n, r) {
        this.name = ml, this.setupOnce = function(o) {
            o(yl(t, {
                organization: i,
                projectId: e,
                prefix: s,
                severityAllowList: n,
                sendExceptionsToPostHog: null == r || r
            }));
        };
    }
};
var wl = class {
    constructor(t) {
        this.Ll = (t, i, e) => {
            e && (e.noSessionId || e.activityTimeout || e.sessionPastMaximumLength || e.crossTabAdoption) && (js.info("[PageViewManager] Session rotated, clearing pageview state", {
                sessionId: t,
                changeReason: e
            }), this.Nl = void 0, this._instance.scrollManager.resetContext());
        }, this._instance = t, this.jl();
    }
    jl() {
        var t;
        this.ql = null === (t = this._instance.sessionManager) || void 0 === t ? void 0 : t.onSessionId(this.Ll);
    }
    destroy() {
        var t;
        null === (t = this.ql) || void 0 === t || t.call(this), this.ql = void 0;
    }
    doPageView(i, e) {
        var s;
        const n = this.Bl(i, e);
        return this.Nl = {
            pathname: null !== (s = null == t ? void 0 : t.location.pathname) && void 0 !== s ? s : "",
            pageViewId: e,
            timestamp: i
        }, this._instance.scrollManager.resetContext(), n;
    }
    doPageLeave(t) {
        var i;
        return this.Bl(t, null === (i = this.Nl) || void 0 === i ? void 0 : i.pageViewId);
    }
    doEvent() {
        var t;
        return {
            $pageview_id: null === (t = this.Nl) || void 0 === t ? void 0 : t.pageViewId
        };
    }
    Bl(t, i) {
        const e = this.Nl;
        if (!e) return {
            $pageview_id: i
        };
        let s = {
            $pageview_id: i,
            $prev_pageview_id: e.pageViewId
        };
        const n = this._instance.scrollManager.getContext();
        if (n && !this._instance.config.disable_scroll_properties) {
            let {
                maxScrollHeight: t,
                lastScrollY: i,
                maxScrollY: e,
                maxContentHeight: r,
                lastContentY: o,
                maxContentY: l
            } = n;
            if (!(R(t) || R(i) || R(e) || R(r) || R(o) || R(l))) {
                t = Math.ceil(t), i = Math.ceil(i), e = Math.ceil(e), r = Math.ceil(r), o = Math.ceil(o), l = Math.ceil(l);
                const n = t > 1 ? Q(i / t, 0, 1, js) : 1,
                    a = t > 1 ? Q(e / t, 0, 1, js) : 1,
                    u = r > 1 ? Q(o / r, 0, 1, js) : 1,
                    h = r > 1 ? Q(l / r, 0, 1, js) : 1;
                s = Dr(s, {
                    $prev_pageview_last_scroll: i,
                    $prev_pageview_last_scroll_percentage: n,
                    $prev_pageview_max_scroll: e,
                    $prev_pageview_max_scroll_percentage: a,
                    $prev_pageview_last_content: o,
                    $prev_pageview_last_content_percentage: u,
                    $prev_pageview_max_content: l,
                    $prev_pageview_max_content_percentage: h
                });
            }
        }
        return e.pathname && (s.$prev_pageview_pathname = e.pathname), e.timestamp && (s.$prev_pageview_duration = (t.getTime() - e.timestamp.getTime()) / 1e3), s;
    }
};
var $l = ["flags", "surveys"];
var Sl = {
    [_n]: {
        exposure: "hidden"
    },
    [wn]: {
        exposure: "hidden"
    },
    [$n]: {
        exposure: "hidden"
    },
    [Tn]: {
        exposure: "hidden"
    },
    [xn]: {
        exposure: "hidden"
    },
    [kn]: {
        exposure: "hidden"
    },
    [hn]: {
        exposure: "event"
    },
    [Pn]: {
        exposure: "hidden"
    },
    [Mn]: {
        exposure: "hidden"
    },
    [On]: {
        exposure: "event"
    },
    [Rn]: {
        exposure: "hidden"
    },
    [Cn]: {
        exposure: "event"
    },
    [An]: {
        exposure: "event"
    },
    [In]: {
        exposure: "event"
    },
    [Fn]: {
        exposure: "hidden"
    },
    [Dn]: {
        exposure: "event"
    },
    [Nn]: {
        exposure: "hidden"
    },
    [Ln]: {
        exposure: "hidden"
    },
    [qn]: {
        exposure: "hidden"
    },
    [Wn]: {
        exposure: "event"
    },
    [jn]: {
        exposure: "event",
        shouldSkipFromEventProperties: (t) => I(t)
    },
    [Vn]: {
        exposure: "event"
    },
    [Gn]: {
        exposure: "event"
    },
    [Kn]: {
        exposure: "event"
    },
    [Yn]: {
        exposure: "event"
    },
    [Jn]: {
        exposure: "hidden"
    },
    [tn]: {
        exposure: "hidden",
        storageGroup: "flags"
    },
    [Ks]: {
        exposure: "hidden",
        storageGroup: "flags"
    },
    [Gs]: {
        exposure: "hidden"
    },
    [Ys]: {
        exposure: "hidden",
        storageGroup: "flags"
    },
    [on]: {
        exposure: "hidden",
        storageGroup: "flags"
    },
    [Zs]: {
        exposure: "hidden",
        storageGroup: "flags",
        volatile: !0
    },
    [Qs]: {
        exposure: "hidden",
        storageGroup: "flags"
    },
    [ln]: {
        exposure: "hidden"
    },
    [an]: {
        exposure: "hidden"
    },
    [sn]: {
        exposure: "hidden"
    },
    [en]: {
        exposure: "hidden"
    },
    [cn]: {
        exposure: "hidden",
        storageGroup: "surveys"
    },
    [dn]: {
        exposure: "hidden",
        storageGroup: "surveys",
        volatile: !0
    },
    [fn]: {
        exposure: "event"
    },
    [pn]: {
        exposure: "hidden"
    },
    [gn]: {
        exposure: "hidden"
    },
    [Zn]: {
        exposure: "hidden"
    },
    [Qn]: {
        exposure: "hidden"
    },
    [tr]: {
        exposure: "hidden"
    },
    [ir]: {
        exposure: "event"
    },
    [er]: {
        exposure: "event"
    },
    [sr]: {
        exposure: "event"
    },
    [nr]: {
        exposure: "event"
    },
    [nn]: {
        exposure: "hidden"
    },
    [rn]: {
        exposure: "hidden"
    },
    [Xn]: {
        exposure: "event"
    },
    [Js]: {
        exposure: "hidden"
    },
    [Xs]: {
        exposure: "hidden",
        storageGroup: "flags",
        volatile: !0
    },
    [rr]: {
        exposure: "hidden"
    },
    [or]: {
        exposure: "hidden"
    },
    [lr]: {
        exposure: "hidden"
    },
    [ar]: {
        exposure: "hidden"
    },
    [ur]: {
        exposure: "hidden"
    },
    [hr]: {
        exposure: "hidden"
    },
    [cr]: {
        exposure: "hidden"
    },
    [Un]: {
        exposure: "event"
    },
    [Bn]: {
        exposure: "event"
    },
    [zn]: {
        exposure: "event"
    },
    [Hn]: {
        exposure: "event"
    },
    [fr]: {
        exposure: "event"
    },
    [pr]: {
        exposure: "event"
    },
    [gr]: {
        exposure: "hidden"
    },
    [_r]: {
        exposure: "hidden"
    },
    [mr]: {
        exposure: "hidden"
    },
    [yr]: {
        exposure: "hidden"
    },
    [br]: {
        exposure: "hidden"
    },
    [wr]: {
        exposure: "hidden"
    },
    [$r]: {
        exposure: "hidden"
    },
    [Sr]: {
        exposure: "hidden"
    },
    [xr]: {
        exposure: "hidden"
    },
    [Er]: {
        exposure: "event"
    }
};
var xl = [
    ["$posthog_sr_group_event_trigger_", {
        exposure: "hidden"
    }],
    ["$posthog_sr_group_url_trigger_", {
        exposure: "hidden"
    }],
    ["$posthog_sr_group_sampling_", {
        exposure: "hidden"
    }]
];
var El = (t) => {
    const i = Sl[t];
    if (i) return i;
    for (const [i, e] of xl)
        if (0 === t.indexOf(i)) return e;
};

function kl() {
    try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch (t) {
        return;
    }
}
var Tl = (t) => {
    const i = typeof document > "u" ? void 0 : document,
        e = null == i ? void 0 : i.createElement("a");
    return R(e) ? null : (e.href = t, e);
};
var Pl = () => {
    try {
        return "u" > typeof window && !1 !== window.navigator.onLine;
    } catch (t) {
        return !1;
    }
};
var Ol = (t, i) => t >= i && Pl();
var Rl = (t, i, e, s) => {
    if (0 === t) {
        if (Pl()) {
            const t = i + 1;
            return t === e && s(), t;
        }
        return i;
    }
    return 0;
};
var Cl = (t, i) => {
    try {
        let e;
        return JSON.stringify(t, (t, i) => {
            var s;
            return z(i) ? (null !== (s = e) && void 0 !== s || (e = new WeakMap()), e.has(i) || e.set(i, Ur(i)), e.get(i)) : "bigint" == typeof i ? i.toString() : i;
        }, i);
    } catch (i) {
        return w(t);
    }
};
var Al = function(t, i) {
    const e = ((t.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&");
    let s;
    for (let t = 0; e.length > t; t++) {
        const n = e[t].split(/=(.*)/);
        if (n[0] === i) {
            s = n;
            break;
        }
    }
    if (!k(s) || 2 > s.length) return ""; {
        let t = s[1].replace(/\+/g, " ");
        try {
            t = decodeURIComponent(t);
        } catch (i) {
            js.error("Skipping decoding for malformed query param: " + t);
        }
        return t;
    }
};
var Il = function(t, i, e) {
    if (!t || !i || !i.length) return t;
    const s = t.split(/#(.*)/),
        n = s[1],
        r = (s[0] || "").split(/\?(.*)/),
        o = r[1],
        l = r[0],
        a = (o || "").split("&"),
        u = [];
    for (let t = 0; a.length > t; t++) {
        const s = a[t].split("?");
        let n = 0;
        for (; s.length > n && !i.includes(s[n].split("=")[0]);) n++;
        u.push(s.length > n ? s.slice(0, n).concat(s[n].split("=")[0] + "=" + e).join("?") : a[t]);
    }
    let h = l;
    return null != o && (h += "?" + u.join("&")), null != n && (h += "#" + n), h;
};
var Fl = function(t, i) {
    const e = t.match(new RegExp(i + "=([^&]*)"));
    return e ? e[1] : null;
};
var Ml = [
    "gclid",
    "gclsrc",
    "dclid",
    "gbraid",
    "wbraid",
    "fbclid",
    "msclkid",
    "twclid",
    "li_fat_id",
    "igshid",
    "ttclid",
    "rdt_cid",
    "epik",
    "qclid",
    "sccid",
    "oppref",
    "bfcid",
    "irclid",
    "_kx"
];
var Dl = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "gad_source",
    "mc_cid",
    ...Ml
];
var Nl = "<masked>";
var Ll = ["li_fat_id"];

function jl(t, i, e) {
    if (!s) return {};
    const n = i ? [...Ml, ...e || []] : [],
        r = Ul(Il(s.URL, n, Nl), t),
        o = function() {
            const t = {};
            return Mr(Ll, function(i) {
                const e = Wr(i);
                t[i] = e || null;
            }), t;
        }();
    return Dr(o, r);
}

function Ul(t, i) {
    const e = Dl.concat(i || []),
        s = {};
    return Mr(e, function(i) {
        const e = Al(t, i);
        s[i] = e || null;
    }), s;
}

function Bl(t) {
    const i = function(t) {
            return t ? 0 === t.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === t.search("https?://(.*)bing.com") ? "bing" : 0 === t.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === t.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null : null;
        }(t),
        e = "yahoo" != i ? "q" : "p",
        n = {};
    if (!I(i)) {
        n.$search_engine = i;
        const t = s ? Al(s.referrer, e) : "";
        t.length && (n.ph_keyword = t);
    }
    return n;
}

function zl() {
    return navigator.language || navigator.userLanguage;
}

function Hl() {
    const t = zl();
    return "string" == typeof t ? t.split("-")[0] : void 0;
}
var ql = "$direct";

function Wl() {
    return (null == s ? void 0 : s.referrer) || ql;
}

function Vl(t, i, e = !1) {
    const s = t ? [...Ml, ...i || []] : [],
        r = e ? vi(null == n ? void 0 : n.href) : null == n ? void 0 : n.href,
        o = null == r ? void 0 : r.substring(0, 1e3);
    return {
        r: Wl().substring(0, 1e3),
        u: o ? Il(o, s, Nl) : void 0
    };
}

function Gl(t, i = !1) {
    var e;
    const {
        r: s,
        u: n
    } = t, r = i ? vi(n) : n, o = {
        $referrer: s,
        $referring_domain: null == s ? void 0 : s == ql ? ql : null === (e = Tl(s)) || void 0 === e ? void 0 : e.host
    };
    if (r) {
        o.$current_url = r;
        const t = Tl(r);
        o.$host = null == t ? void 0 : t.host, o.$pathname = null == t ? void 0 : t.pathname;
        const i = Ul(r);
        Dr(o, i);
    }
    if (s) {
        const t = Bl(s);
        Dr(o, t);
    }
    return o;
}

function Kl() {
    try {
        return new Date().getTimezoneOffset();
    } catch (t) {
        return;
    }
}
var Yl = {
    flags: Xs,
    surveys: dn
};
var Jl = [
    "cookie",
    "localstorage",
    "localstorage+cookie",
    "sessionstorage",
    "memory"
];
var Xl = (t) => `${t}_cookie_identity_change_pending`;
var Zl = (t) => {
    let i = "",
        e = 0;
    for (const s of t) {
        const t = encodeURIComponent(JSON.stringify(s).slice(1, -1)).length;
        if (e + t > 1e3) break;
        i += s, e += t;
    }
    return i;
};
var Ql = "main";
var ta = [
    tn,
    Ks,
    Ys,
    on,
    Zs,
    Xs,
    Qs,
    sn
];
var ia = (t) => -1 !== ta.indexOf(t);
var ea = [xn, kn];
var sa = (t) => -1 !== ea.indexOf(t);
var na = (t, i) => {
    try {
        return JSON.stringify(t) === JSON.stringify(i);
    } catch (e) {
        return t === i;
    }
};
var ra = (t) => {
    if (!t) return {};
    const i = JSON.parse(t);
    return P(i) ? i : {};
};
var oa = (t, i) => {
    Mr(t, (e, s) => {
        const n = El(s);
        n && "event" !== n.exposure || {}.hasOwnProperty.call(i, s) || delete t[s];
    });
};
var la = class {
    constructor(i, e, s = !0, n = !i.cookieless_mode) {
        if (this.zl = {}, this.Hl = !1, this.Ul = !1, this.Wl = !1, this.Vl = !1, this.Gl = !1, this.Ql = new Map(), this.Jl = !1, this.Zl = !1, this.Kl = !1, this.Yl = new Set(), this.Xl = new Set(), this.Fr = i, this.tu = s, this.props = {}, this.eu = void 0, this.iu = ((t) => {
                let i = "";
                return t.token && (i = t.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), t.persistence_name ? "ph_" + t.persistence_name : "ph_" + i + "_posthog";
            })(i), this.fi = i.disable_persistence || !!e, this.Al = this.nu(i), this.Wl = this.su(i), this.load(n), this.ru(), i.debug && js.info("Persistence loaded", i.persistence, wi({}, this.props)), this.update_config(i, i, e), this.save(), t) {
            const i = () => this.flush();
            Hr(t, "beforeunload", i, {
                capture: !1
            }), Hr(t, "pagehide", i, {
                capture: !1
            }), this.ou = (i) => {
                if (this.Hl && (!i.storageArea || i.storageArea === (null == t ? void 0 : t.localStorage)) && i.key)
                    if (i.key !== this.iu) {
                        if (this.Wl) {
                            const t = $l.find((t) => i.key === this.au(t));
                            t && this.lu(i.key, t);
                        }
                    } else this.lu(i.key, Ql);
            }, Hr(t, "storage", this.ou);
        }
    }
    markCrossTabFeatureFlagChanges(t) {
        Object.entries(t).forEach(([t, i]) => {
            const e = this.Ql.get(t);
            if (!ia(t) || !0 === e) return;
            if (!0 === i) return void this.uu(t, !0);
            const s = new Set(e || []);
            i.forEach((t) => s.add(t)), s.size && this.uu(t, s);
        });
    }
    onCrossTabFeatureFlagChange(t) {
        return this.Xl.add(t), () => this.Xl.delete(t);
    }
    destroy() {
        this.ou && t && (t.removeEventListener("storage", this.ou), this.ou = void 0), this.Xl.clear();
    }
    lu(t, i, e = !0) {
        if (this.fi) return !1;
        let s, n;
        try {
            if (n = ro.Lt(t), I(n)) {
                const t = this.cu(i);
                return t.storageValue = null, i !== Ql && (t.persisted = !1), !1;
            }
            s = ra(n);
        } catch (t) {
            return !1;
        }
        const r = i === Ql ? s : ro.Ft(this.iu);
        if (r && this.hu(r)) return !1;
        const o = this.du(s, i, e);
        return i === Ql && this.Wl && !na(this.vu().main, s) || this.fu(s, i, !0, n), o;
    }
    hu(t) {
        const i = this.props[mn],
            e = t[mn];
        return !R(i) && !R(e) && i !== e;
    }
    fu(t, i, e, s) {
        const n = this.cu(i);
        n.storageValue = s, i !== Ql && (n.persisted = e);
        try {
            n.fingerprint = this.pu(t, i);
        } catch (t) {
            n.fingerprint = void 0;
        }
    }
    du(t, i, e) {
        let s = !1;
        return ta.forEach((e) => {
            var n;
            const r = null === (n = El(e)) || void 0 === n ? void 0 : n.storageGroup;
            if (i === Ql && this.Wl && r || i !== Ql && r !== i) return;
            const o = e in t,
                l = this.gu(e, o ? t[e] : void 0),
                a = this.Ql.has(e) ? e in this.props : o;
            a === e in this.props && na(l, this.props[e]) || (a ? this.mu(e, l, !1) : this.yu(e, !1), s = !0);
        }), s && e && this.Xl.forEach((t) => t()), s;
    }
    bu() {
        if (!this.Hl) return !1;
        try {
            this.Kl = !1;
            const t = ro.Lt(this.iu),
                i = this.cu(Ql);
            let e, s = !1,
                n = !1;
            if (t !== i.storageValue)
                if (I(t)) i.storageValue = null;
                else {
                    if (e = ra(t), this.Kl = !this.Zl && this.hu(e), this.Kl) return !1;
                    n = this.du(e, Ql, !1), !this.Wl || na(this.vu().main, e) ? this.fu(e, Ql, !0, t) : i.storageValue = t, s = !0;
                }
            return this.Wl && $l.forEach((t) => {
                const i = ro.Lt(this.au(t)),
                    r = this.cu(t),
                    o = e || {},
                    l = s && ta.some((i) => {
                        var e;
                        return (null === (e = El(i)) || void 0 === e ? void 0 : e.storageGroup) === t && i in o;
                    });
                if (i === r.storageValue && !l) return;
                if (I(i)) return r.storageValue = null, r.persisted = !1, void(l && (n = this.du(o, t, !1) || n));
                const a = ra(i);
                n = this.du(a, t, !1) || n, this.fu(a, t, !0, i);
            }), n;
        } catch (t) {
            return !1;
        }
    }
    uu(t, i) {
        this.Ql.set(t, i);
        const e = El(t);
        (null == e ? void 0 : e.volatile) || (this.cu((this.Wl ? null == e ? void 0 : e.storageGroup : void 0) || Ql).fingerprint = void 0, this._u(t));
    }
    wu() {
        ta.forEach((t) => this.Ql.set(t, !0));
    }
    ru() {
        if (this.Hl) try {
            const t = ro.Lt(this.iu),
                i = ra(t);
            this.cu(Ql).storageValue = t, ta.forEach((t) => {
                var e;
                const s = this.Wl ? null === (e = El(t)) || void 0 === e ? void 0 : e.storageGroup : void 0,
                    n = s ? ro.Lt(this.au(s)) : null;
                if (s) {
                    const t = this.cu(s);
                    t.storageValue = n, t.persisted = !I(n);
                }
                const r = s && !I(n) ? ra(n) : i;
                t in this.props ? this.ku(t, r[t], this.props[t]) : t in r && this.uu(t, !0);
            });
        } catch (t) {}
    }
    gu(t, i) {
        const e = this.Ql.get(t);
        if (!e) return i;
        if (!0 === e) return this.props[t];
        if ("$active_feature_flags" === t) {
            const s = new Set(k(i) ? i : []),
                n = new Set(k(this.props[t]) ? this.props[t] : []);
            return e.forEach((t) => n.has(t) ? s.add(t) : s.delete(t)), Array.from(s);
        }
        const s = P(i) ? wi({}, i) : {},
            n = P(this.props[t]) ? this.props[t] : {};
        return e.forEach((t) => {
            t in n ? s[t] = n[t] : delete s[t];
        }), s;
    }
    ku(t, i, e) {
        if (!ia(t)) return;
        const s = this.Ql.get(t);
        if (!0 === s) return;
        let n = i;
        if (this.Hl) try {
            var r;
            const i = this.Wl ? null === (r = El(t)) || void 0 === r ? void 0 : r.storageGroup : void 0,
                e = i ? this.au(i) : this.iu;
            n = ra(ro.Lt(e))[t];
        } catch (t) {}
        const o = new Set(s || []);
        if ("$active_feature_flags" === t) {
            if (!R(i) && !k(i) || !R(n) && !k(n) || !k(e)) return void this.uu(t, !0);
            const s = new Set(i || []),
                r = new Set(n || []),
                l = new Set(e);
            new Set([...s, ...l]).forEach((t) => {
                s.has(t) !== l.has(t) && o.add(t);
            }), o.forEach((t) => {
                r.has(t) === l.has(t) && o.delete(t);
            });
        } else {
            if (!P(e)) return void(na(n, e) ? this.Ql.delete(t) : this.uu(t, !0)); {
                if (!R(i) && !P(i) || R(i) && O(e) && R(n)) return void this.uu(t, !0);
                const s = P(i) ? i : {},
                    r = P(n) ? n : {};
                new Set([...Object.keys(s), ...Object.keys(e)]).forEach((t) => {
                    t in s == t in e && na(s[t], e[t]) || o.add(t);
                }), o.forEach((t) => {
                    t in r == t in e && na(r[t], e[t]) && o.delete(t);
                });
            }
        }
        o.size ? this.uu(t, o) : this.Ql.delete(t);
    }
    Su() {
        var t;
        const i = null === (t = this.Fr) || void 0 === t ? void 0 : t.persistence_save_debounce_ms;
        return M(i) && i > 0 ? i : 0;
    }
    xu(t) {
        if (this.Fr.cookieWinsOnConflict && "localstorage+cookie" === this.Fr.persistence.toLowerCase())
            if (t) try {
                const i = co(t, this.Fr.cookie_persisted_properties || []),
                    e = fo(i, this.Fr.cookie_persisted_properties || []),
                    s = JSON.stringify(i) + "|" + JSON.stringify(e),
                    n = so.Lt(this.iu) || void 0;
                n && go(this.iu, n) === s && (this.$u = s, this.Cu = n);
            } catch (t) {}
        else try {
            const t = so.Lt(this.iu) || void 0;
            this.$u = t ? go(this.iu, t) : void 0, this.Cu = t;
        } catch (t) {}
    }
    syncCookieProperties() {
        return this.Tu(this.Fr);
    }
    Tu(t, i = !1) {
        if (this.fi && !i || this.Gl || !t.cookieWinsOnConflict || "localstorage+cookie" !== t.persistence.toLowerCase()) return !1;
        let e;
        try {
            e = so.Lt(this.iu) || void 0;
        } catch (t) {}
        if (!e || e === this.Cu) return !1;
        const s = go(this.iu, e);
        let n;
        try {
            n = ho(JSON.parse(e));
        } catch (t) {
            return !1;
        }
        if ((so.Lt(this.iu) || void 0) !== e) return !1;
        this.$u = s, this.Cu = e;
        const r = po(this.iu, e),
            o = [...lo, ...r.properties],
            l = {};
        if (Object.keys(n).forEach((t) => {
                const i = n[t];
                (R(i) || I(i) || "" === i || "$user_state" === t && "anonymous" !== i && "identified" !== i) && (l[t] = !0, delete n[t]);
            }), O(n)) return !1;
        const a = "distinct_id" in n || "anonymous" === n.$user_state || "identified" === n.$user_state,
            u = this.props,
            h = u[mn],
            c = u[rr],
            d = Dr({}, u);
        [...lo, ...t.cookie_persisted_properties || []].forEach((t) => {
            if (-1 !== o.indexOf(t) && !(t in n) && !l[t] && (a || "distinct_id" !== t && "$user_state" !== t)) {
                const i = d[t];
                (r.isValid || -1 === lo.indexOf(t) || !1 !== i && 0 !== i) && delete d[t];
            }
        }), this.props = Dr(d, n), ta.forEach((t) => {
            const i = t in this.props;
            t in u === i && na(u[t], this.props[t]) || (i ? this.ku(t, u[t], this.props[t]) : this.uu(t, !0));
        }), !a || "$user_state" in n || "$user_state" in this.props || this.mu(rr, kr);
        const v = this.props[mn],
            f = this.props[rr];
        return !a || v === h && f === c || (this.Zl = !0, this.Vl = !0, bo.$t(Xl(this.iu), !0), this.yu(sn), this.yu(Ks), this.yu(tn), this.yu(Ys), this.yu(on), this.yu(Zs), this.yu(Xs), this.yu(Js), this.yu(nn), "anonymous" !== f || "identified" !== c && "anonymous" !== n.$user_state && (R(h) || v === h) || (oa(this.props, n), this.yu(en)), "identified" === f ? this.props.$user_id = v : delete this.props.$user_id, this.yu(wn)), !0;
    }
    consumeCookieIdentityChange() {
        const t = Xl(this.iu),
            i = this.Vl || !!bo.Lt(t);
        return this.Vl = !1, i && bo.Dt(t), i;
    }
    Iu(t = !1) {
        return !(this.Gl || this.fi && !t || !this.Fr.cookieWinsOnConflict || "localstorage+cookie" !== this.Fr.persistence.toLowerCase() || (this.Gl = !0, 0));
    }
    Eu() {
        this.Gl && (R(this.Mu) || (clearTimeout(this.Mu), this.Mu = void 0), delete this.zl[Ql], this.Au(!0));
    }
    Ru(t = !0) {
        if (this.Gl) try {
            t ? this.Eu() : R(this.Mu) || (clearTimeout(this.Mu), this.Mu = void 0);
        } finally {
            this.Gl = !1;
        }
    }
    isDisabled() {
        return !!this.fi;
    }
    nu(i) {
        -1 === Jl.indexOf(i.persistence.toLowerCase()) && (js.critical("Unknown persistence type " + i.persistence + "; falling back to localStorage+cookie"), i.persistence = "localStorage+cookie");
        const e = ((i = [], e = !1, s = () => !1) => {
            const n = [...lo, ...i];
            return wi(wi({}, ro), {}, {
                Pu(t) {
                    return [
                        so.Lt(t),
                        so.Lt(ao(t)),
                        ro.Lt(t)
                    ].join("\0");
                },
                Ft(t) {
                    try {
                        let r, o = {};
                        try {
                            r = so.Lt(t) || void 0, o = r ? ho(JSON.parse(r)) : {};
                        } catch (t) {}
                        const l = JSON.parse(ro.Lt(t) || "{}");
                        let a;
                        if (e) {
                            const e = po(t, r),
                                s = [...lo, ...e.properties],
                                u = {};
                            Object.keys(o).forEach((t) => {
                                const i = o[t];
                                I(i) || "" === i || "$user_state" === t && "anonymous" !== i && "identified" !== i || (u[t] = i);
                            });
                            const h = "distinct_id" in u || "anonymous" === u.$user_state || "identified" === u.$user_state;
                            if (Object.keys(u).length > 0) {
                                var i;
                                const t = l[mn],
                                    r = null !== (i = l.$user_state) && void 0 !== i ? i : kr;
                                n.forEach((t) => {
                                    if (-1 !== s.indexOf(t) && !(t in o) && (h || "distinct_id" !== t && "$user_state" !== t)) {
                                        const i = l[t];
                                        (e.isValid || -1 === lo.indexOf(t) || !1 !== i && 0 !== i) && delete l[t];
                                    }
                                }), !h || "$user_state" in o || "$user_state" in l || (l[rr] = kr), !h || ("distinct_id" in u ? u[mn] : l[mn]) === t && ("$user_state" in u ? u[rr] : l[rr]) === r || (oo.forEach((t) => delete l[t]), "identified" === u.$user_state && "distinct_id" in u ? l.$user_id = u[mn] : delete l.$user_id, "identified" !== u.$user_state && (delete l[Xn], delete l[en]), delete l.__alias);
                            }
                            a = Dr(l, u);
                        } else a = Dr(o, l);
                        return s() || ro.$t(t, a), a;
                    } catch (t) {}
                    return null;
                },
                $t(t, s, n, r, o, l) {
                    const a = ro.$t(t, s, void 0, void 0, l);
                    try {
                        const u = co(s, i);
                        if (Object.keys(u).length) {
                            if (e) {
                                const e = ao(t),
                                    h = fo(u, i);
                                if (so.$t(e, h, n, r, o, l), so.Lt(e) !== JSON.stringify(h)) {
                                    so.Dt(e, r);
                                    const i = co(s);
                                    return so.$t(t, i, n, r, o, l), a;
                                }
                            }
                            so.$t(t, u, n, r, o, l);
                        }
                    } catch (t) {
                        ro.Pt(t);
                    }
                    return a;
                },
                Dt(i, e) {
                    try {
                        null == t || t.localStorage.removeItem(i), so.Dt(i, e), so.Dt(ao(i), e);
                    } catch (t) {
                        ro.Pt(t);
                    }
                }
            });
        })(i.cookie_persisted_properties || [], i.cookieWinsOnConflict, () => !!this.fi);
        let s, n = !1,
            r = !1;
        const o = i.persistence.toLowerCase();
        return "localstorage" === o && ro.Ot() ? (s = ro, r = !0) : "localstorage+cookie" === o && e.Ot() ? (s = e, r = !0, n = !0) : "sessionstorage" === o && bo.Ot() ? s = bo : "memory" === o ? s = mo : "cookie" === o && so.Ot() ? (s = so, n = !0) : e.Ot() ? (s = e, r = !0, n = !0) : so.Ot() ? (s = so, n = !0) : s = mo, this.Hl = r, this.Ul = n, s;
    }
    au(t) {
        return `${this.iu}__${t}`;
    }
    su(t) {
        return this.Hl && !!t.split_storage;
    }
    properties() {
        const t = {};
        return Mr(this.props, (i, e) => {
            const s = El(e);
            if (!s || "event" === s.exposure) {
                var n;
                if (null == s || null === (n = s.shouldSkipFromEventProperties) || void 0 === n ? void 0 : n.call(s, i)) return;
                t[e] = i;
            }
        }), t;
    }
    load(t = !1) {
        if (this.fi && !t) return;
        const i = this.Fr.cookieWinsOnConflict && "localstorage+cookie" === this.Fr.persistence.toLowerCase(),
            e = i ? ro.Ft(this.iu) : null;
        let s = {};
        if (i) try {
            s = ho(so.Ft(this.iu)), Mr(s, (t, i) => {
                (R(t) || I(t) || "" === t) && delete s[i];
            });
        } catch (t) {}
        const n = this.Al.Ft(this.iu);
        if (n && (this.props = Dr({}, n)), this.Wl && this.Ou(), i && n) {
            var r, o;
            const t = null == e ? void 0 : e[mn],
                i = null !== (r = null == e ? void 0 : e.$user_state) && void 0 !== r ? r : kr,
                l = n[mn],
                a = null !== (o = n.$user_state) && void 0 !== o ? o : kr;
            if (l !== t || a !== i) {
                this.Vl = !0, this.fi || bo.$t(Xl(this.iu), !0);
                const e = Dr({}, this.props);
                oo.forEach((t) => delete e[t]), "anonymous" !== a || "identified" !== i && "anonymous" !== s.$user_state && (R(t) || l === t) || (oa(e, s), delete e[en]), this.props = e;
                const n = new Set();
                oo.forEach((t) => {
                    var i;
                    const e = null === (i = El(t)) || void 0 === i ? void 0 : i.storageGroup;
                    e && n.add(e);
                }), n.forEach((t) => {
                    if (this.fi) return;
                    const i = {};
                    Mr(this.props, (e, s) => {
                        var n;
                        (null === (n = El(s)) || void 0 === n ? void 0 : n.storageGroup) === t && (i[s] = e);
                    }), O(i) ? (ro.Dt(this.au(t)), this.zl[t] = {}) : ro.$t(this.au(t), i) && (this.zl[t] = {
                        persisted: !0,
                        fingerprint: this.pu(i, t)
                    });
                });
            }
        }
        bo.Lt(Xl(this.iu)) && (this.Vl = !0);
    }
    Ou() {
        for (const t of $l) {
            const i = ro.Ft(this.au(t));
            if (i && !O(i)) {
                const e = this.cu(t);
                e.persisted = !0, this.Fu(t) || (e.fingerprint = this.pu(i, t)), this.Du(t, i) || Dr(this.props, i);
            }
        }
    }
    Fu(t) {
        return Object.keys(this.props).some((i) => {
            var e;
            return (null === (e = El(i)) || void 0 === e ? void 0 : e.storageGroup) === t;
        });
    }
    Du(t, i) {
        const e = Yl[t];
        if (!e) return !1;
        const s = i[e],
            n = this.props[e];
        return M(s) && M(n) && n > s;
    }
    refreshKey(t) {
        this.Lu([t]);
    }
    Lu(t) {
        if (this.fi) return;
        let i, e = !1;
        const s = () => (e || (i = this.Al.Ft(this.iu), e = !0), i);
        t.forEach((t) => {
            var i;
            if (this.Yl.has(t)) return;
            const e = this.Wl ? null === (i = El(t)) || void 0 === i ? void 0 : i.storageGroup : void 0,
                n = e ? ro.Ft(this.au(e)) : s();
            if (n && t in n) this.mu(t, n[t], !1);
            else {
                if (e) {
                    const i = s();
                    if (i && t in i) return void this.mu(t, i[t], !1);
                }
                this.yu(t, !1);
            }
        });
    }
    refreshMetaIdentifiers() {
        if (this.fi) return;
        const t = this.Nu();
        (R(t) || t !== this.ju) && (this.Lu(ea), this.qu(t));
    }
    qu(t = this.Nu()) {
        this.ju = 0 === this.Yl.size ? t : void 0;
    }
    Nu() {
        const t = this.Al.Pu ? this.Al.Pu(this.iu) : this.Al.Lt(this.iu);
        return C(t) ? t : void 0;
    }
    save() {
        if (this.fi) return;
        const t = this.Su();
        t > 0 ? R(this.Mu) && (this.Mu = setTimeout(() => {
            this.Mu = void 0, this.Au();
        }, t)) : this.Au();
    }
    flush() {
        R(this.Mu) || (clearTimeout(this.Mu), this.Mu = void 0, this.Au());
    }
    Au(t = !1) {
        if (this.fi || this.Gl && !t) return;
        t || (this.syncCookieProperties(), this.Fr.cookieWinsOnConflict && "localstorage+cookie" === this.Fr.persistence.toLowerCase() || this.refreshMetaIdentifiers());
        const i = !t && !this.Jl;
        i || (this.Kl = !1);
        const e = !!i && this.bu();
        if (this.Kl) return void(this.Fr.debug && js.warn("skipping persistence write because storage belongs to a different distinct ID"));
        if (this.Wl) return this.Bu(), void(e && this.Xl.forEach((t) => t()));
        const s = this.zu(this.Al, this.iu, this.props, Ql);
        "written" === s && this.xu(this.props), "failed" !== s && (this.Ql.clear(), this.Zl = !1, this.Yl.clear()), "written" === s && this.qu(), e && this.Xl.forEach((t) => t());
    }
    Bu() {
        const {
            main: t,
            groups: i
        } = this.vu(), e = this.zu(this.Al, this.iu, t, Ql);
        "written" === e && this.xu(t), "failed" !== e && (this.Zl = !1, this.Yl.clear(), ta.forEach((t) => {
            var i;
            (null === (i = El(t)) || void 0 === i ? void 0 : i.storageGroup) || this.Ql.delete(t);
        })), "written" === e && this.qu();
        for (const t of $l) {
            var s;
            const e = i[t];
            if (O(e) && !(null === (s = this.zl[t]) || void 0 === s ? void 0 : s.persisted)) {
                ta.forEach((i) => {
                    var e;
                    (null === (e = El(i)) || void 0 === e ? void 0 : e.storageGroup) === t && this.Ql.delete(i);
                });
                continue;
            }
            const n = this.zu(ro, this.au(t), e, t);
            "failed" !== n && ta.forEach((i) => {
                const e = El(i);
                (null == e ? void 0 : e.storageGroup) !== t || "written" !== n && e.volatile || this.Ql.delete(i);
            });
        }
    }
    vu() {
        const t = {},
            i = {
                flags: {},
                surveys: {}
            };
        return Mr(this.props, (e, s) => {
            var n;
            const r = null === (n = El(s)) || void 0 === n ? void 0 : n.storageGroup;
            r ? i[r][s] = e : t[s] = e;
        }), {
            main: t,
            groups: i
        };
    }
    pu(t, i) {
        if (i === Ql) return JSON.stringify(t) + "|" + this.Hu + "|" + this.Uu + "|" + this.Wu;
        const e = {};
        return Mr(t, (t, i) => {
            var s;
            e[i] = (null === (s = El(i)) || void 0 === s ? void 0 : s.volatile) ? "__volatile__" : t;
        }), JSON.stringify(e);
    }
    zu(t, i, e, s) {
        const n = this.cu(s);
        if (s !== Ql && !n.dirty && !R(n.fingerprint)) return "skipped";
        let r;
        try {
            if (r = this.pu(e, s), r === n.fingerprint) return n.dirty = !1, "skipped";
        } catch (t) {
            r = void 0;
        }
        return t.$t(i, e, this.Hu, this.Uu, this.Wu, this.Fr.debug) ? (n.dirty = !1, s !== Ql && (n.persisted = !0), R(r) || (n.fingerprint = r), this.Hl && (n.storageValue = ro.Lt(i)), "written") : (this.Fr.debug && js.warn(`failed to persist storage entry "${i}"; will retry on next save`), "failed");
    }
    remove({
        keepGroupEntries: t = !1
    } = {}) {
        if (this.wu(), R(this.Mu) || (clearTimeout(this.Mu), this.Mu = void 0), this.Al.Dt(this.iu, !1), this.Al.Dt(this.iu, !0), !t && this.tu)
            for (const t of $l) ro.Dt(this.au(t));
        t ? delete this.zl[Ql] : this.zl = {}, this.$u = void 0, this.Cu = void 0;
    }
    clear() {
        this.remove(), this.props = {};
    }
    register_once(t, i, e) {
        if (P(t)) {
            this.syncCookieProperties(), R(i) && (i = "None"), this.Hu = R(e) ? this.Vu : e;
            let s = !1;
            if (Mr(t, (t, e) => {
                    this.props.hasOwnProperty(e) && this.props[e] !== i || (this.mu(e, t), s = !0);
                }), s) return this.save(), !0;
        }
        return !1;
    }
    register(t, i) {
        if (P(t)) {
            this.syncCookieProperties(), this.Hu = R(i) ? this.Vu : i;
            let e = !1;
            if (Mr(t, (i, s) => {
                    t.hasOwnProperty(s) && (this.props[s] !== i || P(i) || k(i)) && (this.mu(s, i), e = !0);
                }), e) return this.save(), !0;
        }
        return !1;
    }
    unregister(t) {
        this.syncCookieProperties();
        const i = "string" == typeof t ? [t] : t;
        let e = !1;
        for (const t of i) t in this.props && (this.yu(t), e = !0);
        e && this.save();
    }
    update_campaign_params() {
        const t = null == s ? void 0 : s.URL;
        if (t === this.eu) return;
        const i = jl(this.Fr.custom_campaign_params, this.Fr.mask_personal_data_properties, this.Fr.custom_personal_data_properties),
            e = !O(jr(i));
        return e && this.register(i), this.eu = t, e ? i : void 0;
    }
    update_search_keyword() {
        this.register(function() {
            const t = null == s ? void 0 : s.referrer;
            return t ? Bl(t) : {};
        }());
    }
    update_referrer_info() {
        var t;
        this.register_once({
            $referrer: Wl(),
            $referring_domain: (null == s ? void 0 : s.referrer) && (null === (t = Tl(s.referrer)) || void 0 === t ? void 0 : t.host) || ql
        }, void 0);
    }
    set_initial_person_info() {
        if (this.props.$initial_campaign_params || this.props.$initial_referrer_info) return;
        const t = Vl(this.Fr.mask_personal_data_properties, this.Fr.custom_personal_data_properties, this.Fr.disable_capture_url_hashes);
        this.register_once({
            [hr]: this.Ul ? {
                r: Zl(t.r),
                u: t.u ? Zl(t.u) : void 0
            } : t
        }, void 0);
    }
    get_initial_props() {
        const t = {};
        Mr([ur, ar], (i) => {
            const e = this.props[i];
            e && Mr(e, function(i, e) {
                t["$initial_" + b(e)] = i;
            });
        });
        const i = this.props[hr];
        if (i) {
            const e = function(t, i = !1) {
                const e = Gl(t, i),
                    s = {};
                return Mr(e, function(t, i) {
                    s[`$initial_${b(i)}`] = t;
                }), s;
            }(i, this.Fr.disable_capture_url_hashes);
            Dr(t, e);
        }
        return t;
    }
    safe_merge(t) {
        return Mr(this.props, function(i, e) {
            e in t || (t[e] = i);
        }), t;
    }
    update_config(t, i, e) {
        const s = t.persistence !== i.persistence,
            n = !((t, i) => {
                if (t.length !== i.length) return !1;
                const e = [...t].sort(),
                    s = [...i].sort();
                return e.every((t, i) => t === s[i]);
            })(t.cookie_persisted_properties || [], i.cookie_persisted_properties || []),
            r = s || n,
            o = t.cookieWinsOnConflict !== i.cookieWinsOnConflict,
            l = t.disable_persistence || !!e,
            a = !!this.fi && !l;
        l || this.Tu(i, a), this.Fr = t, !l && (s || n || o) && (this.$u = void 0, this.Cu = void 0, this.Tu(wi(wi({}, t), {}, {
            cookie_persisted_properties: i.cookie_persisted_properties
        }), a));
        const u = r || o ? this.nu(t) : this.Al;
        this.Gu();
        const h = this.su(t),
            c = r || h !== this.Wl,
            d = !l && (c || t.cross_subdomain_cookie !== this.Uu || t.secure_cookie !== this.Wu) && this.Iu(a);
        this.Jl = c;
        try {
            if (this.Vu = this.Hu = t.cookie_expiration, this.set_disabled(l), this.set_cross_subdomain(t.cross_subdomain_cookie), this.set_secure(t.secure_cookie), c) {
                const t = this.props;
                this.clear(), this.Al = u, this.Wl = h, this.props = t, this.save();
            } else o && (this.Al = u, l || (delete this.zl[Ql], this.Au()));
        } finally {
            this.Jl = !1, d && this.Ru();
        }
    }
    Gu() {
        const t = this.props[hr];
        if (!this.Ul || !P(t) || "string" != typeof t.r) return;
        const i = Zl(t.r),
            e = "string" == typeof t.u ? Zl(t.u) : t.u;
        i === t.r && e === t.u || this.mu(hr, wi(wi({}, t), {}, {
            r: i,
            u: e
        }));
    }
    set_disabled(t) {
        this.fi = t, this.fi ? this.remove() : this.save();
    }
    set_cross_subdomain(t) {
        t !== this.Uu && (this.Uu = t, this.remove({
            keepGroupEntries: !0
        }), this.save());
    }
    set_secure(t) {
        t !== this.Wu && (this.Wu = t, this.remove({
            keepGroupEntries: !0
        }), this.save());
    }
    set_event_timer(t, i) {
        const e = this.props.__timers || {};
        e[t] = i, this.mu(Tn, e), this.save();
    }
    remove_event_timer(t) {
        const i = this.props.__timers || {},
            e = i[t];
        return R(e) || (delete i[t], this.mu(Tn, i), this.save()), e;
    }
    get_property(t) {
        return this.props[t];
    }
    set_property(t, i) {
        this.mu(t, i), this.save();
    }
    mu(t, i, e = !0) {
        var s;
        const n = this.props[t];
        this.props[t] = i, e && ("distinct_id" !== t && "$user_state" !== t || n === i || (this.Zl = !0), sa(t) && !na(n, i) && this.Yl.add(t), this.ku(t, n, i), (null === (s = El(t)) || void 0 === s ? void 0 : s.volatile) || this._u(t));
    }
    yu(t, i = !0) {
        delete this.props[t], i && (ia(t) && this.uu(t, !0), sa(t) && this.Yl.add(t), this._u(t));
    }
    _u(t) {
        var i;
        const e = null === (i = El(t)) || void 0 === i ? void 0 : i.storageGroup;
        e && (this.cu(e).dirty = !0);
    }
    cu(t) {
        return this.zl[t] || (this.zl[t] = {});
    }
};
var aa = {
    GZipJS: "gzip-js",
    Base64: "base64"
};
var ua = {
    Activation: "events",
    Cancellation: "cancelEvents"
};
var ha = {
    Button: "button",
    Tab: "tab",
    Selector: "selector"
};
var ca = {
    TopLeft: "top_left",
    TopRight: "top_right",
    TopCenter: "top_center",
    MiddleLeft: "middle_left",
    MiddleRight: "middle_right",
    MiddleCenter: "middle_center",
    Left: "left",
    Center: "center",
    Right: "right",
    NextToTrigger: "next_to_trigger"
};
var da = {
    Top: "top",
    Left: "left",
    Right: "right",
    Bottom: "bottom"
};
var va = {
    Popover: "popover",
    API: "api",
    Widget: "widget",
    ExternalSurvey: "external_survey"
};
var fa = {
    Open: "open",
    MultipleChoice: "multiple_choice",
    SingleChoice: "single_choice",
    Rating: "rating",
    Link: "link"
};
var pa = {
    NextQuestion: "next_question",
    End: "end",
    ResponseBased: "response_based",
    SpecificQuestion: "specific_question"
};
var ga = {
    Once: "once",
    Recurring: "recurring",
    Always: "always"
};
var _a = {
    SHOWN: "survey shown",
    DISMISSED: "survey dismissed",
    SENT: "survey sent",
    ABANDONED: "survey abandoned"
};
var ma = {
    SURVEY_ID: "$survey_id",
    SURVEY_NAME: "$survey_name",
    SURVEY_RESPONSE: "$survey_response",
    SURVEY_ITERATION: "$survey_iteration",
    SURVEY_ITERATION_START_DATE: "$survey_iteration_start_date",
    SURVEY_PARTIALLY_COMPLETED: "$survey_partially_completed",
    SURVEY_SUBMISSION_ID: "$survey_submission_id",
    SURVEY_QUESTIONS: "$survey_questions",
    SURVEY_COMPLETED: "$survey_completed",
    PRODUCT_TOUR_ID: "$product_tour_id",
    SURVEY_LAST_SEEN_DATE: "$survey_last_seen_date",
    SURVEY_LANGUAGE: "$survey_language"
};
var ya = {
    Popover: "popover",
    Inline: "inline"
};

function ba(t) {
    let i = !0;
    return {
        dispose() {
            if (i) {
                i = !1;
                const e = t();
                e && T(e.then) && e.then(void 0, () => {});
            }
        }
    };
}
var wa = {
    backgroundColor: "#ffffff",
    textColor: "#1d1f27",
    buttonColor: "#1d1f27",
    borderRadius: 8,
    buttonBorderRadius: 6,
    borderColor: "#e5e7eb",
    fontFamily: "system-ui",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    showOverlay: !0,
    whiteLabel: !1,
    dismissOnClickOutside: !0,
    zIndex: 2147483646
};
var $a = {
    SHOWN: "product tour shown",
    DISMISSED: "product tour dismissed",
    COMPLETED: "product tour completed",
    STEP_SHOWN: "product tour step shown",
    STEP_COMPLETED: "product tour step completed",
    BUTTON_CLICKED: "product tour button clicked",
    STEP_SELECTOR_FAILED: "product tour step selector failed",
    BANNER_CONTAINER_SELECTOR_FAILED: "product tour banner container selector failed",
    BANNER_ACTION_CLICKED: "product tour banner action clicked"
};
var Sa = {
    TOUR_ID: "$product_tour_id",
    TOUR_NAME: "$product_tour_name",
    TOUR_ITERATION: "$product_tour_iteration",
    TOUR_RENDER_REASON: "$product_tour_render_reason",
    TOUR_STEP_ID: "$product_tour_step_id",
    TOUR_STEP_ORDER: "$product_tour_step_order",
    TOUR_STEP_TYPE: "$product_tour_step_type",
    TOUR_DISMISS_REASON: "$product_tour_dismiss_reason",
    TOUR_BUTTON_TEXT: "$product_tour_button_text",
    TOUR_BUTTON_ACTION: "$product_tour_button_action",
    TOUR_BUTTON_LINK: "$product_tour_button_link",
    TOUR_BUTTON_TOUR_ID: "$product_tour_button_tour_id",
    TOUR_STEPS_COUNT: "$product_tour_steps_count",
    TOUR_STEP_SELECTOR: "$product_tour_step_selector",
    TOUR_STEP_SELECTOR_FOUND: "$product_tour_step_selector_found",
    TOUR_STEP_ELEMENT_TAG: "$product_tour_step_element_tag",
    TOUR_STEP_ELEMENT_ID: "$product_tour_step_element_id",
    TOUR_STEP_ELEMENT_CLASSES: "$product_tour_step_element_classes",
    TOUR_STEP_ELEMENT_TEXT: "$product_tour_step_element_text",
    TOUR_ERROR: "$product_tour_error",
    TOUR_MATCHES_COUNT: "$product_tour_matches_count",
    TOUR_FAILURE_PHASE: "$product_tour_failure_phase",
    TOUR_WAITED_FOR_ELEMENT: "$product_tour_waited_for_element",
    TOUR_WAIT_DURATION_MS: "$product_tour_wait_duration_ms",
    TOUR_BANNER_SELECTOR: "$product_tour_banner_selector",
    TOUR_LINKED_SURVEY_ID: "$product_tour_linked_survey_id",
    USE_MANUAL_SELECTOR: "$use_manual_selector",
    INFERENCE_DATA_PRESENT: "$inference_data_present",
    TOUR_LAST_SEEN_DATE: "$product_tour_last_seen_date",
    TOUR_TYPE: "$product_tour_type"
};
var xa = Us("[RateLimiter]");
var Ea = class {
    constructor(t) {
        this.serverLimits = {}, this.lastEventRateLimited = !1, this.checkForLimiting = (t) => {
            const i = t.text;
            if (i && i.length) try {
                (JSON.parse(i).quota_limited || []).forEach((t) => {
                    xa.info(`${t || "events"} is quota limited.`), this.serverLimits[t] = new Date().getTime() + 6e4;
                });
            } catch (t) {
                return void xa.warn(`could not rate limit - continuing. Error: "${null == t ? void 0 : t.message}"`, {
                    text: i
                });
            }
        }, this.instance = t, this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited;
    }
    get captureEventsPerSecond() {
        var t;
        return (null === (t = this.instance.config.rate_limiting) || void 0 === t ? void 0 : t.events_per_second) || 10;
    }
    get captureEventsBurstLimit() {
        var t;
        return Math.max((null === (t = this.instance.config.rate_limiting) || void 0 === t ? void 0 : t.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond);
    }
    get isClientRateLimited() {
        return 1 > this.Qu().tokens;
    }
    clientRateLimitContext(t = !1) {
        var i;
        const e = this.Qu(),
            s = 1 > e.tokens;
        if (s || t || (e.tokens = Math.max(0, e.tokens - 1)), s && !t) {
            const t = (M(e.dropped) ? e.dropped : 0) + 1;
            e.dropped = t, !this.lastEventRateLimited && this.Ju(t) && (e.dropped = 0);
        }
        return this.lastEventRateLimited = s, null === (i = this.instance.persistence) || void 0 === i || i.set_property("$capture_rate_limit", e), {
            isRateLimited: s,
            remainingTokens: e.tokens
        };
    }
    Qu() {
        var t;
        const {
            captureEventsBurstLimit: i,
            captureEventsPerSecond: e
        } = this, s = new Date().getTime(), n = null === (t = this.instance.persistence) || void 0 === t ? void 0 : t.get_property(lr), r = n ? wi({}, n) : {
            tokens: i,
            last: s
        };
        return r.tokens += Math.max(0, s - r.last) / 1e3 * e, r.last = Math.max(r.last, s), r.tokens > i && (r.tokens = i), r;
    }
    Zu(t) {
        const i = this.instance.config.property_denylist;
        return !k(i) || !i.includes(t);
    }
    Ku() {
        var t;
        if (this.Zu("$current_url") && this.Zu("$pathname") && (null == n ? void 0 : n.pathname)) return `${null !== (t = n.origin) && void 0 !== t ? t : ""}${n.pathname}`;
    }
    Ju(t) {
        var i, e;
        const {
            captureEventsBurstLimit: s,
            captureEventsPerSecond: n
        } = this, r = this.Ku(), o = this.Zu("$session_id") ? null === (i = (e = this.instance).get_session_id) || void 0 === i ? void 0 : i.call(e) : void 0, l = [
            `${t} event(s) dropped since the last warning`,
            r ? `triggered on ${r}` : void 0,
            o ? `session ${o}` : void 0
        ].filter(Boolean).join(", ");
        return !!this.instance.capture("$$client_ingestion_warning", {
            $$client_ingestion_warning_message: `posthog-js client rate limited: ${l}. Config is set to ${n} events per second and ${s} events burst limit.`
        }, {
            skip_client_rate_limiting: !0
        });
    }
    isServerRateLimited(t) {
        const i = this.serverLimits[t || "events"] || !1;
        return !1 !== i && new Date().getTime() < i;
    }
};
var ka = Us("[RemoteConfig]");
var Ta = class {
    constructor(t) {
        this._instance = t;
    }
    get remoteConfig() {
        var t;
        return null === (t = c._POSTHOG_REMOTE_CONFIG) || void 0 === t || null === (t = t[this._instance.config.token]) || void 0 === t ? void 0 : t.config;
    }
    Yu(t) {
        var i, e, s;
        (null === (i = c.__PosthogExtensions__) || void 0 === i ? void 0 : i.loadExternalDependency) ? null === (e = c.__PosthogExtensions__) || void 0 === e || null === (s = e.loadExternalDependency) || void 0 === s || s.call(e, this._instance, "remote-config", () => t(this.remoteConfig)): t();
    }
    Xu(t) {
        this._instance._send_request({
            method: "GET",
            url: this._instance.requestRouter.endpointFor("assets", `/array/${this._instance.config.token}/config`),
            callback: t
        });
    }
    load() {
        try {
            if (this.remoteConfig) return ka.info("Using preloaded remote config", this.remoteConfig), void this.tc(this.remoteConfig);
            if (this._instance.ec()) return void ka.warn("Remote config is disabled. Falling back to local config.");
            this.Yu((t) => {
                if (!t) return ka.info("No config found after loading remote JS config. Falling back to JSON."), void this.Xu((t) => {
                    this.tc(t.json, t);
                });
                this.tc(t);
            });
        } catch (t) {
            ka.error("Error loading remote config", t), this.tc();
        }
    }
    tc(t, i) {
        !t && i && (0 === i.statusCode ? i.error || ka.warn("Failed to fetch remote config from PostHog.") : ka.error("Failed to fetch remote config from PostHog."));
        try {
            this._instance.tc(t ? {
                ok: !0,
                config: t
            } : {
                ok: !1
            });
        } catch (t) {
            ka.error("Error applying remote config", t);
        }
        if (!1 !== (null == t ? void 0 : t.hasFeatureFlags) && !this._instance.config.advanced_disable_feature_flags_on_first_load) try {
            var e;
            null === (e = this._instance.featureFlags) || void 0 === e || e.ensureFlagsLoaded();
        } catch (t) {
            ka.error("Error loading feature flags", t);
        }
    }
};
var Pa = [
    "fatal",
    "error",
    "warning",
    "log",
    "info",
    "debug"
];
var Oa = Uint8Array;
var Ra = Uint16Array;
var Ca = Uint32Array;
var Aa = new Oa([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0,
    0,
    0,
    0
]);
var Ia = new Oa([
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    0,
    0
]);
var Fa = new Oa([
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
]);
var Ma = function(t, i) {
    for (var e = new Ra(31), s = 0; 31 > s; ++s) e[s] = i += 1 << t[s - 1];
    var n = new Ca(e[30]);
    for (s = 1; 30 > s; ++s)
        for (var r = e[s]; e[s + 1] > r; ++r) n[r] = r - e[s] << 5 | s;
    return [e, n];
};
var Da = Ma(Aa, 2);
var Na = Da[1];
Da[0][28] = 258, Na[258] = 28;
for (var La = Ma(Ia, 0)[1], ja = new Ra(32768), Ua = 0; 32768 > Ua; ++Ua) {
    var Ba = (43690 & Ua) >>> 1 | (21845 & Ua) << 1;
    ja[Ua] = ((65280 & (Ba = (61680 & (Ba = (52428 & Ba) >>> 2 | (13107 & Ba) << 2)) >>> 4 | (3855 & Ba) << 4)) >>> 8 | (255 & Ba) << 8) >>> 1;
}
var za = function(t, i, e) {
    for (var s = t.length, n = 0, r = new Ra(i); s > n; ++n) ++r[t[n] - 1];
    var o, l = new Ra(i);
    for (n = 0; i > n; ++n) l[n] = l[n - 1] + r[n - 1] << 1;
    if (e) {
        o = new Ra(1 << i);
        var a = 15 - i;
        for (n = 0; s > n; ++n)
            if (t[n])
                for (var u = n << 4 | t[n], h = i - t[n], c = l[t[n] - 1]++ << h, d = c | (1 << h) - 1; d >= c; ++c) o[ja[c] >>> a] = u;
    } else
        for (o = new Ra(s), n = 0; s > n; ++n) o[n] = ja[l[t[n] - 1]++] >>> 15 - t[n];
    return o;
};
var Ha = new Oa(288);
for (Ua = 0; 144 > Ua; ++Ua) Ha[Ua] = 8;
for (Ua = 144; 256 > Ua; ++Ua) Ha[Ua] = 9;
for (Ua = 256; 280 > Ua; ++Ua) Ha[Ua] = 7;
for (Ua = 280; 288 > Ua; ++Ua) Ha[Ua] = 8;
var qa = new Oa(32);
for (Ua = 0; 32 > Ua; ++Ua) qa[Ua] = 5;
var Wa = za(Ha, 9, 0);
var Va = za(qa, 5, 0);
var Ga = function(t) {
    return (t / 8 | 0) + (7 & t && 1);
};
var Ka = function(t, i, e) {
    (null == i || 0 > i) && (i = 0), (null == e || e > t.length) && (e = t.length);
    var s = new(t instanceof Ra ? Ra : t instanceof Ca ? Ca : Oa)(e - i);
    return s.set(t.subarray(i, e)), s;
};
var Ya = function(t, i, e) {
    var s = i / 8 | 0;
    t[s] |= e <<= 7 & i, t[s + 1] |= e >>> 8;
};
var Ja = function(t, i, e) {
    var s = i / 8 | 0;
    t[s] |= e <<= 7 & i, t[s + 1] |= e >>> 8, t[s + 2] |= e >>> 16;
};
var Xa = function(t, i) {
    for (var e = [], s = 0; t.length > s; ++s) t[s] && e.push({
        s,
        f: t[s]
    });
    var n = e.length,
        r = e.slice();
    if (!n) return [new Oa(0), 0];
    if (1 == n) {
        var o = new Oa(e[0].s + 1);
        return o[e[0].s] = 1, [o, 1];
    }
    e.sort(function(t, i) {
        return t.f - i.f;
    }), e.push({
        s: -1,
        f: 25001
    });
    var l = e[0],
        a = e[1],
        u = 0,
        h = 1,
        c = 2;
    for (e[0] = {
            s: -1,
            f: l.f + a.f,
            l,
            r: a
        }; h != n - 1;) l = e[e[c].f > e[u].f ? u++ : c++], a = e[u != h && e[c].f > e[u].f ? u++ : c++], e[h++] = {
        s: -1,
        f: l.f + a.f,
        l,
        r: a
    };
    var d = r[0].s;
    for (s = 1; n > s; ++s) r[s].s > d && (d = r[s].s);
    var v = new Ra(d + 1),
        f = Za(e[h - 1], v, 0);
    if (f > i) {
        s = 0;
        var p = 0,
            g = f - i,
            _ = 1 << g;
        for (r.sort(function(t, i) {
                return v[i.s] - v[t.s] || t.f - i.f;
            }); n > s; ++s) {
            var m = r[s].s;
            if (i >= v[m]) break;
            p += _ - (1 << f - v[m]), v[m] = i;
        }
        for (p >>>= g; p > 0;) {
            var y = r[s].s;
            i > v[y] ? p -= 1 << i - v[y]++ - 1 : ++s;
        }
        for (; s >= 0 && p; --s) {
            var b = r[s].s;
            v[b] == i && (--v[b], ++p);
        }
        f = i;
    }
    return [new Oa(v), f];
};
var Za = function(t, i, e) {
    return -1 == t.s ? Math.max(Za(t.l, i, e + 1), Za(t.r, i, e + 1)) : i[t.s] = e;
};
var Qa = function(t) {
    for (var i = t.length; i && !t[--i];);
    for (var e = new Ra(++i), s = 0, n = t[0], r = 1, o = function(t) {
            e[s++] = t;
        }, l = 1; i >= l; ++l)
        if (t[l] == n && l != i) ++r;
        else {
            if (!n && r > 2) {
                for (; r > 138; r -= 138) o(32754);
                r > 2 && (o(r > 10 ? r - 11 << 5 | 28690 : r - 3 << 5 | 12305), r = 0);
            } else if (r > 3) {
                for (o(n), --r; r > 6; r -= 6) o(8304);
                r > 2 && (o(r - 3 << 5 | 8208), r = 0);
            }
            for (; r--;) o(n);
            r = 1, n = t[l];
        }
    return [e.subarray(0, s), i];
};
var tu = function(t, i) {
    for (var e = 0, s = 0; i.length > s; ++s) e += t[s] * i[s];
    return e;
};
var iu = function(t, i, e) {
    var s = e.length,
        n = Ga(i + 2);
    t[n] = 255 & s, t[n + 1] = s >>> 8, t[n + 2] = 255 ^ t[n], t[n + 3] = 255 ^ t[n + 1];
    for (var r = 0; s > r; ++r) t[n + r + 4] = e[r];
    return 8 * (n + 4 + s);
};
var eu = function(t, i, e, s, n, r, o, l, a, u, h) {
    Ya(i, h++, e), ++n[256];
    for (var c = Xa(n, 15), d = c[0], v = c[1], f = Xa(r, 15), p = f[0], g = f[1], _ = Qa(d), m = _[0], y = _[1], b = Qa(p), w = b[0], S = b[1], x = new Ra(19), E = 0; m.length > E; ++E) x[31 & m[E]]++;
    for (E = 0; w.length > E; ++E) x[31 & w[E]]++;
    for (var k = Xa(x, 7), T = k[0], P = k[1], O = 19; O > 4 && !T[Fa[O - 1]]; --O);
    var R, C, A, I, F = u + 5 << 3,
        M = tu(n, Ha) + tu(r, qa) + o,
        D = tu(n, d) + tu(r, p) + o + 14 + 3 * O + tu(x, T) + (2 * x[16] + 3 * x[17] + 7 * x[18]);
    if (M >= F && D >= F) return iu(i, h, t.subarray(a, a + u));
    if (Ya(i, h, 1 + (M > D)), h += 2, M > D) {
        R = za(d, v, 0), C = d, A = za(p, g, 0), I = p;
        var N = za(T, P, 0);
        for (Ya(i, h, y - 257), Ya(i, h + 5, S - 1), Ya(i, h + 10, O - 4), h += 14, E = 0; O > E; ++E) Ya(i, h + 3 * E, T[Fa[E]]);
        h += 3 * O;
        for (var L = [m, w], j = 0; 2 > j; ++j) {
            var U = L[j];
            for (E = 0; U.length > E; ++E) Ya(i, h, N[B = 31 & U[E]]), h += T[B], B > 15 && (Ya(i, h, U[E] >>> 5 & 127), h += U[E] >>> 12);
        }
    } else R = Wa, C = Ha, A = Va, I = qa;
    for (E = 0; l > E; ++E)
        if (s[E] > 255) {
            var B;
            Ja(i, h, R[257 + (B = s[E] >>> 18 & 31)]), h += C[B + 257], B > 7 && (Ya(i, h, s[E] >>> 23 & 31), h += Aa[B]);
            var z = 31 & s[E];
            Ja(i, h, A[z]), h += I[z], z > 3 && (Ja(i, h, s[E] >>> 5 & 8191), h += Ia[z]);
        } else Ja(i, h, R[s[E]]), h += C[s[E]];
    return Ja(i, h, R[256]), h + C[256];
};
var su = new Ca([
    65540,
    131080,
    131088,
    131104,
    262176,
    1048704,
    1048832,
    2114560,
    2117632
]);
var nu = new Oa(0);
var ru = function() {
    for (var t = new Ca(256), i = 0; 256 > i; ++i) {
        for (var e = i, s = 9; --s;) e = (1 & e && 3988292384) ^ e >>> 1;
        t[i] = e;
    }
    return t;
}();
var ou = function(t, i, e) {
    for (; e; ++i) t[i] = e, e >>>= 8;
};

function lu(t, i) {
    void 0 === i && (i = {});
    var e = function() {
            var t = 4294967295;
            return {
                p(i) {
                    for (var e = t, s = 0; i.length > s; ++s) e = ru[255 & e ^ i[s]] ^ e >>> 8;
                    t = e;
                },
                d() {
                    return 4294967295 ^ t;
                }
            };
        }(),
        s = t.length;
    e.p(t);
    var n, r, o, l, a, u, h = (l = 10 + ((n = i).filename && n.filename.length + 1 || 0), a = 8, function(t, i, e, s, n, r) {
            var o = t.length,
                l = new Oa(s + o + 5 * (1 + Math.floor(o / 7e3)) + n),
                a = l.subarray(s, l.length - n),
                u = 0;
            if (!i || 8 > o)
                for (var h = 0; o >= h; h += 65535) {
                    var c = h + 65535;
                    o > c ? u = iu(a, u, t.subarray(h, c)) : (a[h] = r, u = iu(a, u, t.subarray(h, o)));
                }
            else {
                for (var d = su[i - 1], v = d >>> 13, f = 8191 & d, p = (1 << e) - 1, g = new Ra(32768), _ = new Ra(p + 1), m = Math.ceil(e / 3), y = 2 * m, b = function(i) {
                        return (t[i] ^ t[i + 1] << m ^ t[i + 2] << y) & p;
                    }, w = new Ca(25e3), S = new Ra(288), x = new Ra(32), E = 0, k = 0, T = (h = 0, 0), P = 0, O = 0; o > h; ++h) {
                    var R = b(h),
                        C = 32767 & h,
                        A = _[R];
                    if (g[C] = A, _[R] = C, h >= P) {
                        var I = o - h;
                        if ((E > 7e3 || T > 24576) && I > 423) {
                            u = eu(t, a, 0, w, S, x, k, T, O, h - O, u), T = E = k = 0, O = h;
                            for (var F = 0; 286 > F; ++F) S[F] = 0;
                            for (F = 0; 30 > F; ++F) x[F] = 0;
                        }
                        var M = 2,
                            D = 0,
                            N = f,
                            L = C - A & 32767;
                        if (I > 2 && R == b(h - L))
                            for (var j = Math.min(v, I) - 1, U = Math.min(32767, h), B = Math.min(258, I); U >= L && --N && C != A;) {
                                if (t[h + M] == t[h + M - L]) {
                                    for (var z = 0; B > z && t[h + z] == t[h + z - L]; ++z);
                                    if (z > M) {
                                        if (M = z, D = L, z > j) break;
                                        var H = Math.min(L, z - 2),
                                            q = 0;
                                        for (F = 0; H > F; ++F) {
                                            var W = h - L + F + 32768 & 32767,
                                                V = W - g[W] + 32768 & 32767;
                                            V > q && (q = V, A = W);
                                        }
                                    }
                                }
                                L += (C = A) - (A = g[C]) + 32768 & 32767;
                            }
                        if (D) {
                            w[T++] = 268435456 | Na[M] << 18 | La[D];
                            var G = 31 & Na[M],
                                K = 31 & La[D];
                            k += Aa[G] + Ia[K], ++S[257 + G], ++x[K], P = h + M, ++E;
                        } else w[T++] = t[h], ++S[t[h]];
                    }
                }
                u = eu(t, a, r, w, S, x, k, T, O, h - O, u), r || (u = iu(a, u, nu));
            }
            return Ka(l, 0, s + Ga(u) + n);
        }(r = t, null == (o = i).level ? 6 : o.level, null == o.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(r.length)))) : 12 + o.mem, l, a, !u)),
        c = h.length;
    return function(t, i) {
        var e = i.filename;
        if (t[0] = 31, t[1] = 139, t[2] = 8, t[8] = 2 > i.level ? 4 : 9 == i.level ? 2 : 0, t[9] = 3, 0 != i.mtime && ou(t, 4, Math.floor(new Date(i.mtime || Date.now()) / 1e3)), e) {
            t[3] = 8;
            for (var s = 0; e.length >= s; ++s) t[s + 10] = e.charCodeAt(s);
        }
    }(h, i), ou(h, c - 8, e.d()), ou(h, c - 4, s), h;
}
var au = !!o || !!r;
var uu = new WeakMap();
var hu = "text/plain";
var cu = 0;
var du = !1;
var vu = (t, i) => {
    const [e, s] = t.split("#"), [n, r] = e.split("?");
    if (!r) return t;
    const o = r.split("&").filter((t) => t.split("=")[0] !== i).join("&");
    return `${n}${o ? `?${o}` : ""}${s ? `#${s}` : ""}`;
};
var fu = (t, i, e = !0) => {
    var s;
    const [n, r] = t.split("?"), o = wi({}, i), l = null !== (s = null == r ? void 0 : r.split("&").map((t) => {
        var i;
        const [s, n] = t.split("="), r = e && null !== (i = o[s]) && void 0 !== i ? i : n;
        return delete o[s], `${s}=${r}`;
    })) && void 0 !== s ? s : [], a = function(t, i = "&") {
        let e, s;
        const n = [];
        return Mr(t, function(t, i) {
            R(t) || R(i) || "undefined" === i || (e = encodeURIComponent(((t) => t instanceof File)(t) ? t.name : t.toString()), s = encodeURIComponent(i), n[n.length] = s + "=" + e);
        }), n.join(i);
    }(o);
    return a && l.push(a), l.length > 0 ? `${n}?${l.join("&")}` : n;
};
var pu = (t) => {
    if (t.cr) return t.cr;
    const {
        data: i,
        compression: e
    } = t;
    if (!i) return;
    if (e === aa.GZipJS) {
        const t = lu(function(t) {
            var i = t.length;
            if ("undefined" != typeof TextEncoder) return new TextEncoder().encode(t);
            for (var e = new Oa(t.length + (t.length >>> 1)), s = 0, n = function(t) {
                    e[s++] = t;
                }, r = 0; i > r; ++r) {
                if (s + 5 > e.length) {
                    var o = new Oa(s + 8 + (i - r << 1));
                    o.set(e), e = o;
                }
                var l = t.charCodeAt(r);
                128 > l ? n(l) : 2048 > l ? (n(192 | l >>> 6), n(128 | 63 & l)) : l > 55295 && 57344 > l ? (n(240 | (l = 65536 + (1047552 & l) | 1023 & t.charCodeAt(++r)) >>> 18), n(128 | l >>> 12 & 63), n(128 | l >>> 6 & 63), n(128 | 63 & l)) : (n(224 | l >>> 12), n(128 | l >>> 6 & 63), n(128 | 63 & l));
            }
            return Ka(e, 0, s);
        }(Cl(i)), {
            mtime: 0
        });
        return {
            contentType: hu,
            body: t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength),
            estimatedSize: t.byteLength
        };
    }
    if (e === aa.Base64) {
        const t = function(t) {
                return t ? btoa(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, (t, i) => String.fromCharCode(parseInt(i, 16)))) : t;
            }(Cl(i)),
            e = ((t) => "data=" + encodeURIComponent("string" == typeof t ? t : Cl(t)))(t);
        return {
            contentType: "application/x-www-form-urlencoded",
            body: e,
            estimatedSize: new Blob([e]).size
        };
    }
    const s = Cl(i);
    return {
        contentType: "application/json",
        body: s,
        estimatedSize: new Blob([s]).size
    };
};
var gu = (t) => {
    const i = () => "sendBeacon" === t.transport ? {
        url: fu(t.url, {
            compression: aa.Base64
        }),
        encodedBody: pu(wi(wi({}, t), {}, {
            compression: aa.Base64,
            cr: void 0
        }))
    } : {
        url: vu(t.url, "compression"),
        encodedBody: pu(wi(wi({}, t), {}, {
            compression: void 0,
            cr: void 0
        }))
    };
    let e;
    try {
        e = pu(t);
    } catch (e) {
        if (ye(t.compression, Al(t.url, "compression"))) return js.error("Failed to gzip request body, sending uncompressed payload", e), i();
        throw e;
    }
    return e && ye(t.compression, Al(t.url, "compression")) && !((s = e.body) instanceof ArrayBuffer ? me(new Uint8Array(s)) : ArrayBuffer.isView(s) && me(new Uint8Array(s.buffer, s.byteOffset, s.byteLength))) ? (du = !0, i()) : {
        url: t.url,
        encodedBody: e
    };
    var s;
};
var _u = (t) => {
    try {
        return gu(t);
    } catch (e) {
        var i;
        return js.error(e), void(null === (i = t.callback) || void 0 === i || i.call(t, {
            statusCode: 0,
            error: e
        }));
    }
};
var mu = function() {
    var t = Y(function*(t) {
        const i = yield function(t) {
            return xe.apply(this, arguments);
        }(Cl(t.data), Vs.DEBUG, {
            rethrow: !0
        });
        if (!i) return t;
        const e = yield i.arrayBuffer();
        return wi(wi({}, t), {}, {
            cr: {
                contentType: hu,
                body: e,
                estimatedSize: e.byteLength
            }
        });
    });
    return function(i) {
        return t.apply(this, arguments);
    };
}();
var yu = (t) => di("AbortError", "PostHog request timed out" + (t ? ` after ${t}ms` : ""));
var bu = /Failed to fetch|NetworkError|Load failed/i;
var wu = (t) => "TypeError" === (null == t ? void 0 : t.name) && bu.test((null == t ? void 0 : t.message) || "");
var $u = (t) => {
    try {
        const i = function(t, i = Date.now(), e = 3e5) {
            if ("string" != typeof t || !t) return;
            const s = t.trim(),
                n = /^\d+\s*,/.test(s) ? s.slice(0, s.indexOf(",")).trim() : s;
            if (/^\d+$/.test(n)) {
                const t = 1e3 * Math.min(Number(n), e / 1e3);
                return t > 0 ? t : void 0;
            }
            if (!/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)[a-z]*[ ,]/.test(n)) return;
            const r = /^\w{3} \w{3} /.test(n) ? n + " GMT" : n,
                o = Date.parse(r) - i;
            return Number.isFinite(o) && o > 0 ? Math.min(o, e) : void 0;
        }(t());
        return R(i) ? void 0 : Math.min(i, 3e4);
    } catch (t) {
        return;
    }
};
var Su = (t) => {
    const i = _u(t);
    if (!i) return;
    const e = new o();
    uu.set(e, !0);
    const {
        url: s,
        encodedBody: n
    } = i;
    e.open(t.method || "GET", s, !0);
    const {
        contentType: r,
        body: l
    } = null != n ? n : {};
    Mr(t.headers, function(t, i) {
        e.setRequestHeader(i, t);
    }), r && e.setRequestHeader("Content-Type", r), t.timeout && (e.timeout = t.timeout);
    let a = !1;
    e.ontimeout = () => {
        a = !0;
    }, e.onloadend = () => {
        var i;
        if (a) {
            var s;
            const i = yu(t.timeout);
            return js.warn(i), void(null === (s = t.callback) || void 0 === s || s.call(t, {
                statusCode: 0,
                error: i
            }));
        }
        const n = {
            statusCode: e.status,
            text: e.responseText
        };
        if (200 === e.status) try {
            n.json = JSON.parse(e.responseText);
        } catch (t) {}
        null === (i = t.callback) || void 0 === i || i.call(t, n, $u(() => e.getResponseHeader("Retry-After")));
    }, e.send(l);
};
var xu = (t) => {
    const i = _u(t);
    if (!i) return;
    const {
        url: e,
        encodedBody: s
    } = i, {
        contentType: n,
        body: o,
        estimatedSize: a
    } = null != s ? s : {}, u = new Headers();
    Mr(t.headers, function(t, i) {
        u.append(i, t);
    }), n && u.append("Content-Type", n);
    let h = null,
        c = !1;
    if (l) {
        const i = new l();
        h = {
            signal: i.signal,
            timeout: setTimeout(() => {
                c = !0;
                try {
                    i.abort(yu(t.timeout));
                } catch (t) {
                    v(t);
                }
            }, t.timeout)
        };
    }
    let d = !1;
    const v = (i) => {
        var e;
        d || (d = !0, c && "AbortError" === (null == i ? void 0 : i.name) || wu(i) ? js.warn(i) : js.error(i), null === (e = t.callback) || void 0 === e || e.call(t, {
            statusCode: 0,
            error: i
        }));
    };
    let f = 0;
    const p = () => {
        cu -= f, f = 0, h && clearTimeout(h.timeout);
    };
    try {
        const i = wi({
                method: (null == t ? void 0 : t.method) || "GET",
                headers: u,
                referrerPolicy: "strict-origin",
                body: o,
                signal: null == h ? void 0 : h.signal
            }, t.fetchOptions),
            s = null != a ? a : R(o) ? 0 : void 0;
        i.keepalive = "POST" === i.method && !t.Il && !1 !== i.keepalive && i.body === o && !R(s) && s >= 0 && 52428.8 > cu + s, i.keepalive && (f = s, cu += f), r(e, i).then((i) => i.text().then((e) => {
            var s;
            if (d) return;
            const n = {
                statusCode: i.status,
                text: e
            };
            if (200 === i.status) try {
                n.json = JSON.parse(e);
            } catch (t) {
                js.error(t);
            }
            d = !0, p(), null === (s = t.callback) || void 0 === s || s.call(t, n, $u(() => i.headers.get("Retry-After")));
        })).catch((t) => {
            p(), v(t);
        }).finally(p);
    } catch (t) {
        p(), v(t);
    }
};
var Eu = (t) => {
    try {
        var i;
        const {
            url: s,
            encodedBody: n
        } = gu(t), {
            contentType: o,
            body: l,
            estimatedSize: a
        } = null != n ? n : {};
        if (!l) return;
        const u = l instanceof Blob ? l : new Blob([l], {
            type: o
        });
        if (e.sendBeacon(s, u)) return;
        const h = k(t.data) ? t.data : null === (i = t.data) || void 0 === i ? void 0 : i.batch;
        if (k(h) && h.length > 1 && (null != a ? a : 0) > 16384) {
            const i = Math.ceil(h.length / 2),
                e = (i) => k(t.data) ? i : wi(wi({}, t.data), {}, {
                    batch: i
                });
            return Eu(wi(wi({}, t), {}, {
                data: e(h.slice(0, i))
            })), void Eu(wi(wi({}, t), {}, {
                data: e(h.slice(i))
            }));
        }
        js.warn(`Beacon of ~${null != a ? a : 0} bytes was rejected by the browser, falling back to ${r ? "fetch" : "XHR"}`), r ? xu(wi(wi({}, t), {}, {
            Il: !0
        })) : Su(t);
    } catch (t) {
        js.warn("Beacon send failed", t);
    }
};
var ku = (t, i, e, s) => {
    const n = "query" === s ? "POST" === i ? "sent_at" : "_" : void 0;
    return fu(e === aa.GZipJS ? vu(t, "compression") : t, wi(wi({}, n ? {
        [n]: Date.now().toString()
    } : {}), e === aa.GZipJS ? {} : {
        compression: e
    }));
};
var Tu = (() => {
    const t = [];
    return r && t.push({
        transport: "fetch",
        method: xu
    }), o && t.push({
        transport: "XHR",
        method: Su
    }), (null == e ? void 0 : e.sendBeacon) && t.push({
        transport: "sendBeacon",
        method: Eu
    }), t;
})();
var Pu = !au && -1 === (null == u ? void 0 : u.indexOf("MSIE")) && -1 === (null == u ? void 0 : u.indexOf("Mozilla"));

function Ou(t, i, e) {
    var s, n, r, o;
    e && (i = wi(wi({}, i), {}, {
        callback: (t) => e(t)
    })), t.__loaded ? Pu ? t.__request_queue.push(i) : t.rateLimiter.isServerRateLimited(i.batchKey) ? i.fireCallbackOnDrop && (null === (r = i.callback) || void 0 === r || r.call(i, {
        statusCode: 429
    })) : (i.transport = i.transport || t.config.api_transport, i.headers = wi(wi({}, t.config.request_headers), i.headers), i.compression = "best-available" === i.compression ? null !== (s = t.compression) && void 0 !== s ? s : i.compressionFallback : i.compression, (R(t.config.disable_beacon) ? t.config.__preview_disable_beacon : t.config.disable_beacon) && (i.disableTransport = ["sendBeacon"]), i.fetchOptions = i.fetchOptions || t.config.fetch_options, null === (n = i.onDispatch) || void 0 === n || n.call(i), ((t, i) => {
        var e, s, n;
        const r = wi(wi({}, t), {}, {
            callback: null != i ? i : (i) => {
                var e;
                return null === (e = t.callback) || void 0 === e ? void 0 : e.call(t, i);
            }
        });
        r.timeout = r.timeout || 6e4;
        const o = null !== (e = r.transport) && void 0 !== e ? e : "fetch";
        "sendBeacon" === o && R(r.compression) && r.data && (r.compression = aa.Base64), "POST" === r.method && r.data && ("capture-body" === r.timestampMode ? r.data = ((t) => {
            var i, e;
            const s = (k(t) ? t : [t]).map((t) => wi(wi({}, t), t.timestamp instanceof Date && !isNaN(t.timestamp.getTime()) ? {
                    timestamp: t.timestamp.toISOString()
                } : {})),
                n = s[0];
            return {
                api_key: null !== (i = null == n || null === (e = n.properties) || void 0 === e ? void 0 : e.token) && void 0 !== i ? i : null == n ? void 0 : n.token,
                batch: s,
                sent_at: new Date().toISOString()
            };
        })(r.data) : "body" === r.timestampMode && (r.data = ((t, i = new Date().toISOString()) => k(t) ? t.map((t) => wi(wi({}, t), {}, {
            sent_at: i
        })) : wi(wi({}, t), {}, {
            sent_at: i
        }))(r.data))), r.url = ku(r.url, r.method, r.compression, r.timestampMode);
        const l = Tu.filter((t) => !r.disableTransport || !t.transport || !r.disableTransport.includes(t.transport)),
            u = null !== (s = null === (n = function(t, i) {
                for (let e = 0; t.length > e; e++)
                    if (i(t[e])) return t[e];
            }(l, (t) => t.transport === o)) || void 0 === n ? void 0 : n.method) && void 0 !== s ? s : l[0].method;
        if (!u) throw new Error("No available transport method");
        const h = (t) => {
            try {
                u(t);
            } catch (t) {
                var i;
                wu(t) ? js.warn(t) : js.error(t), null === (i = r.callback) || void 0 === i || i.call(r, {
                    statusCode: 0,
                    error: t
                });
            }
        };
        "sendBeacon" !== o && !r.preferSyncCompression && r.data && r.compression === aa.GZipJS && a && "undefined" != typeof Promise && !du ? mu(r).then((t) => {
            h(t);
        }).catch((i) => {
            if (be(i)) return du = !0, void h(wi(wi({}, r), {}, {
                compression: void 0,
                url: ku(t.url, t.method, void 0, t.timestampMode)
            }));
            ((t) => {
                if (!t || "object" != typeof t) return !1;
                const i = "name" in t ? String(t.name) : "";
                return be(t) || i === _e;
            })(i) && (du = !0), h(r);
        }) : h(r);
    })(i, (s, n) => {
        var r, o, l;
        t.rateLimiter.checkForLimiting(s), 400 > s.statusCode || null === (r = (o = t.config).on_request_error) || void 0 === r || r.call(o, s), e ? e(s, n) : null === (l = i.callback) || void 0 === l || l.call(i, s);
    })) : i.fireCallbackOnDrop && (null === (o = i.callback) || void 0 === o || o.call(i, {
        statusCode: 0
    }));
}
var Ru = class {
    constructor(t, i) {
        this.nc = !0, this.sc = [], this.rc = Q((null == i ? void 0 : i.flush_interval_ms) || 3e3, 250, 5e3, js.createLogger("flush interval"), 3e3), this.oc = t;
    }
    enqueue(t) {
        this.sc.push(t), this.ac || this.lc();
    }
    unload() {
        this.uc();
        const t = this.sc.length > 0 ? this.cc() : {},
            i = Object.values(t);
        [...i.filter((t) => 0 === t.url.indexOf("/e")), ...i.filter((t) => 0 !== t.url.indexOf("/e"))].map((t) => {
            this.hc(wi(wi({}, t), {}, {
                callback: void 0
            }), "sendBeacon");
        });
    }
    enable() {
        this.nc = !1, this.lc();
    }
    lc() {
        this.nc || (this.ac = setTimeout(() => {
            this.uc(), this.dc();
        }, this.rc));
    }
    dc() {
        if (this.sc.length > 0) {
            const t = this.cc();
            for (const i in t) this.hc(t[i]);
        }
    }
    hc(t, i) {
        try {
            this.oc(t, i);
        } catch (t) {
            js.error(t);
        }
    }
    uc() {
        clearTimeout(this.ac), this.ac = void 0;
    }
    cc() {
        const t = {},
            i = {};
        Mr(this.sc, (e) => {
            var s;
            const n = e,
                r = ((n ? n.batchKey : null) || n.url) + (n.batchGroup ? `:${n.batchGroup}` : "");
            R(t[r]) && (t[r] = wi(wi({}, n), {}, {
                data: [],
                callback: void 0,
                fireCallbackOnDrop: void 0
            }), i[r] = []), null === (s = t[r].data) || void 0 === s || s.push(n.data), n.callback && i[r].push(n.callback);
        });
        for (const e in i) {
            const s = i[e];
            s.length && (t[e].callback = (t) => {
                for (const i of s) i(t);
            });
        }
        return this.sc = [], t;
    }
};
var Cu = ["retriesPerformedSoFar"];
var Au = class {
    constructor(t) {
        this._instance = t, this.vc = !1, this.fc = 3e3, this.sc = [], this.sc = [], this.gc = !0, this.resume();
    }
    resume() {
        if (!R(t) && "onLine" in t.navigator) {
            if (this.gc = t.navigator.onLine, this.mc) return;
            this.mc = () => {
                this.gc = !0, this.dc();
            }, this.yc = () => {
                this.gc = !1;
            }, Hr(t, "online", this.mc), Hr(t, "offline", this.yc);
        }
    }
    get length() {
        return this.sc.length;
    }
    retriableRequest(t, i) {
        let {
            retriesPerformedSoFar: e
        } = t, s = Ee(t, Cu);
        D(e) && (s.url = fu(s.url, {
            retry_count: e
        })), Ou(this._instance, i ? wi(wi({}, s), {}, {
            transport: i
        }) : s, (t, i) => {
            var n;
            if (200 !== t.statusCode && (400 > t.statusCode || t.statusCode >= 500)) {
                if ((0 === t.statusCode ? 3 : 10) > (null != e ? e : 0)) return void this.Ls(wi({
                    retriesPerformedSoFar: e
                }, s), i);
                0 === t.statusCode && js.warn(`Request failed before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped retrying after ${null != e ? e : 0} retries.`);
            }
            null === (n = s.callback) || void 0 === n || n.call(s, t);
        });
    }
    Ls(t, i) {
        const e = t.retriesPerformedSoFar || 0;
        t.retriesPerformedSoFar = e + 1;
        const s = Math.max(function(t) {
                const i = 3e3 * Math.pow(2, t),
                    e = i / 2,
                    s = Math.min(18e5, i),
                    n = (Math.random() - .5) * (s - e);
                return Math.ceil(s + n);
            }(e), null != i ? i : 0),
            n = Date.now() + s;
        this.sc.push({
            retryAt: n,
            requestOptions: t
        });
        let r = `Enqueued failed request for retry in ${s}`;
        navigator.onLine || (r += " (Browser is offline)"), js.warn(r), this.vc || (this.vc = !0, this.bc());
    }
    bc() {
        if (this._c && clearTimeout(this._c), 0 === this.sc.length) return this.vc = !1, void(this._c = void 0);
        this._c = setTimeout(() => {
            this.gc && this.sc.length > 0 && this.dc(), this.bc();
        }, this.fc);
    }
    dc() {
        const t = Date.now(),
            i = [],
            e = this.sc.filter((e) => t > e.retryAt || (i.push(e), !1));
        if (this.sc = i, e.length > 0)
            for (const {
                    requestOptions: t
                } of e) this.retriableRequest(t);
    }
    unload() {
        this._c && (clearTimeout(this._c), this._c = void 0), this.vc = !1, R(t) || (this.mc && (t.removeEventListener("online", this.mc), this.mc = void 0), this.yc && (t.removeEventListener("offline", this.yc), this.yc = void 0));
        for (const {
                requestOptions: t
            } of this.sc) try {
            this._instance._send_request(wi(wi({}, t), {}, {
                callback: k(t.data) ? void 0 : t.callback,
                transport: "sendBeacon"
            }));
        } catch (t) {
            js.error(t);
        }
        this.sc = [];
    }
};
var Iu = class {
    constructor(t) {
        this._instance = t, this.wc = () => {
            var t, i, e, s;
            this.kc || (this.kc = {});
            const n = this.scrollElement(),
                r = this.scrollY(),
                o = n ? Math.max(0, n.scrollHeight - n.clientHeight) : 0,
                l = r + ((null == n ? void 0 : n.clientHeight) || 0),
                a = (null == n ? void 0 : n.scrollHeight) || 0;
            this.kc.lastScrollY = Math.ceil(r), this.kc.maxScrollY = Math.max(r, null !== (t = this.kc.maxScrollY) && void 0 !== t ? t : 0), this.kc.maxScrollHeight = Math.max(o, null !== (i = this.kc.maxScrollHeight) && void 0 !== i ? i : 0), this.kc.lastContentY = l, this.kc.maxContentY = Math.max(l, null !== (e = this.kc.maxContentY) && void 0 !== e ? e : 0), this.kc.maxContentHeight = Math.max(a, null !== (s = this.kc.maxContentHeight) && void 0 !== s ? s : 0);
        };
    }
    get Sc() {
        return this._instance.config.scroll_root_selector;
    }
    getContext() {
        return this.kc;
    }
    resetContext() {
        const t = this.kc;
        return this.kc = void 0, setTimeout(this.wc, 0), t;
    }
    startMeasuringScrollPosition() {
        Hr(t, "scroll", this.wc, {
            capture: !0
        }), Hr(t, "scrollend", this.wc, {
            capture: !0
        }), Hr(t, "resize", this.wc);
    }
    scrollElement() {
        if (this.Sc) {
            const e = k(this.Sc) ? this.Sc : [this.Sc];
            for (const s of e) {
                var i;
                const e = null == t || null === (i = t.document) || void 0 === i ? void 0 : i.querySelector(s);
                if (e) return e;
            }
            return;
        }
        var e;
        return null == t || null === (e = t.document) || void 0 === e ? void 0 : e.documentElement;
    }
    xc(i) {
        var e, s;
        const n = "y" === i ? "scrollTop" : "scrollLeft";
        if (this.Sc) {
            const t = this.scrollElement();
            return t && t[n] || 0;
        }
        return t ? "y" === i ? t.scrollY || t.pageYOffset || (null === (e = t.document) || void 0 === e || null === (e = e.documentElement) || void 0 === e ? void 0 : e.scrollTop) || 0 : t.scrollX || t.pageXOffset || (null === (s = t.document) || void 0 === s || null === (s = s.documentElement) || void 0 === s ? void 0 : s.scrollLeft) || 0 : 0;
    }
    scrollY() {
        return this.xc("y");
    }
    scrollX() {
        return this.xc("x");
    }
};
var Fu = (t) => Vl(null == t ? void 0 : t.config.mask_personal_data_properties, null == t ? void 0 : t.config.custom_personal_data_properties, null == t ? void 0 : t.config.disable_capture_url_hashes);
var Mu = class {
    constructor(t, i, e, s) {
        this.je = (t) => {
            const i = this.$c();
            if (i && i.sessionId === t) return;
            const e = {
                sessionId: t,
                props: this.Cc(this._instance)
            };
            this.Tc.register({
                [or]: e
            });
        }, this._instance = t, this.Ic = i, this.Tc = e, this.Cc = s || Fu, this.Ic.onSessionId(this.je);
    }
    $c() {
        return this.Tc.props[or];
    }
    getSetOnceProps() {
        var t;
        const i = null === (t = this.$c()) || void 0 === t ? void 0 : t.props;
        return i ? "r" in i ? Gl(i, this._instance.config.disable_capture_url_hashes) : {
            $referring_domain: i.referringDomain,
            $pathname: i.initialPathName,
            utm_source: i.utm_source,
            utm_campaign: i.utm_campaign,
            utm_medium: i.utm_medium,
            utm_content: i.utm_content,
            utm_term: i.utm_term
        } : {};
    }
    getSessionProps() {
        const t = {};
        return Mr(jr(this.getSetOnceProps()), (i, e) => {
            "$current_url" === e && (e = "url"), t[`$session_entry_${b(e)}`] = i;
        }), t;
    }
};
var Du = class {
    on(t, i) {
        return this.xo[t] || (this.xo[t] = []), this.xo[t].push(i), () => {
            this.xo[t] = this.xo[t].filter((t) => t !== i);
        };
    }
    emit(t, i) {
        for (const e of this.xo[t] || []) e(i);
        for (const e of this.xo["*"] || []) e(t, i);
    }
    constructor() {
        this.xo = {};
    }
};
var Nu = Us("[SessionId]");
var Lu = 864e5;
var ju = class {
    on(t, i) {
        return this.Ec.on(t, i);
    }
    constructor(t, i, e) {
        var s;
        if (this.Mc = null, this.Ac = null, this.Rc = [], this.Pc = void 0, this.Oc = !1, this.Ec = new Du(), this.Fc = (t, i) => !(!D(t) || !D(i)) && Math.abs(t - i) > this.sessionTimeoutMs, !t.persistence) throw new Error("SessionIdManager requires a PostHogPersistence instance");
        if ("always" === t.config.cookieless_mode) throw new Error("SessionIdManager cannot be used with cookieless_mode=\"always\"");
        this.Fr = t.config, this.Tc = t.persistence, this.Be = void 0, this.Xt = void 0, this._sessionStartTimestamp = null, this.Dc = void 0, this._sessionActivityTimestamp = null, this.Lc = i || Zr, this.Nc = e || Zr;
        const n = this.Fr.persistence_name || this.Fr.token;
        if (this._sessionTimeoutMs = 1e3 * Q(this.Fr.session_idle_timeout_seconds || 1800, 60, 36e3, Nu.createLogger("session_idle_timeout_seconds"), 1800), t.register({
                $configured_session_timeout_ms: this._sessionTimeoutMs
            }), this.jc(), this.qc = "ph_" + n + "_window_id", this.Bc = "ph_" + n + "_primary_window_exists", this.zc()) {
            const t = bo.Ft(this.qc),
                i = bo.Ft(this.Bc);
            t && !i ? this.Be = t : bo.Dt(this.qc), bo.$t(this.Bc, !0);
        }
        (null === (s = this.Fr.bootstrap) || void 0 === s ? void 0 : s.sessionID) && this.setBootstrapSessionId(this.Fr.bootstrap.sessionID), this.Hc();
    }
    get sessionTimeoutMs() {
        return this._sessionTimeoutMs;
    }
    onSessionId(t) {
        return R(this.Rc) && (this.Rc = []), this.Rc.push(t), this.Xt && t(this.Xt, this.Be), () => {
            this.Rc = this.Rc.filter((i) => i !== t);
        };
    }
    zc() {
        return "memory" !== this.Fr.persistence && !this.Tc.fi && bo.Ot();
    }
    Uc(t) {
        t !== this.Be && (this.Be = t, this.zc() && bo.$t(this.qc, t));
    }
    Wc() {
        return this.Be ? this.Be : this.zc() ? bo.Ft(this.qc) : null;
    }
    Vc(t) {
        const i = this.Mc;
        return !I(i) && !I(t) && 5e3 > Math.abs(t - i);
    }
    Gc(t, i, e) {
        const s = i !== this._sessionActivityTimestamp,
            n = !(t !== this.Xt || e !== this._sessionStartTimestamp);
        this._sessionStartTimestamp = e, this._sessionActivityTimestamp = i, this.Xt = t, n && !s || n && this.Vc(i) || (this.Mc = i, this.Tc.register({
            [qn]: [
                i,
                t,
                e
            ]
        }));
    }
    Qc() {
        var t;
        const i = null === (t = this.Fr) || void 0 === t ? void 0 : t.persistence_save_debounce_ms;
        return D(i) && i > 0;
    }
    Jc() {
        this.Qc() ? this.Tc.refreshKey(qn) : (this.Tc.flush(), this.Tc.load());
    }
    Zc() {
        var t;
        if (I(this._sessionActivityTimestamp) || this._sessionActivityTimestamp === this.Mc) return;
        this.Jc();
        const [, i, e] = this.Kc();
        i === this.Xt && e === this._sessionStartTimestamp && (this.Mc = this._sessionActivityTimestamp, this.Tc.register({
            [qn]: [
                this._sessionActivityTimestamp,
                null !== (t = this.Xt) && void 0 !== t ? t : null,
                this._sessionStartTimestamp
            ]
        }), this.Tc.flush());
    }
    Yc() {
        const [t] = this.Kc(), i = D(t) ? t : 0, e = D(this._sessionActivityTimestamp) ? this._sessionActivityTimestamp : 0;
        return Math.max(i, e);
    }
    Xc(t) {
        return this.Jc(), this.Fc(t, this.Yc());
    }
    Kc() {
        const t = this.Tc.props[qn];
        return k(t) && 2 === t.length && t.push(t[0]), t || [
            0,
            null,
            0
        ];
    }
    resetSessionId() {
        this.Mc = null, this.Dc = void 0, clearTimeout(this.eh), this.eh = void 0, this.Gc(null, null, null);
    }
    setBootstrapSessionId(t, i = !1) {
        const e = ((t, i = new Date().getTime()) => {
            try {
                const e = ((t) => {
                    const i = t.replace(/-/g, "");
                    if (32 !== i.length) throw new Error("Not a valid UUID");
                    if ("7" !== i[12]) throw new Error("Not a UUIDv7");
                    return parseInt(i.substring(0, 12), 16);
                })(t);
                return e > i + 6e4 ? void Nu.error("Bootstrap sessionID cannot be in the future") : e;
            } catch (t) {
                return void Nu.error("Invalid sessionID in bootstrap", t);
            }
        })(t);
        return !R(e) && (i ? this.Dc = {
            sessionId: t,
            sessionStartTimestamp: e
        } : this.Gc(t, new Date().getTime(), e), !0);
    }
    destroy() {
        this.Oc = !0, this.Zc(), clearTimeout(this.eh), this.eh = void 0, this.Pc && t && (t.removeEventListener(Or, this.Pc, {
            capture: !1
        }), this.Pc = void 0), this.Rc = [];
    }
    Hc() {
        this.Pc = () => {
            this.Zc(), this.zc() && bo.Dt(this.Bc);
        }, Hr(t, Or, this.Pc, {
            capture: !1
        });
    }
    checkAndGetSessionAndWindowId(t = !1, i = null, e = !1) {
        if ("always" === this.Fr.cookieless_mode) throw new Error("checkAndGetSessionAndWindowId should not be called with cookieless_mode=\"always\"");
        const s = i || new Date().getTime(),
            n = this.Xt;
        if (e) this.Ac = s;
        else if (I(this.Ac) || this.Ac > s || s - this.Ac >= 1e3) {
            var r, o;
            null === (r = (o = this.Tc).syncCookieProperties) || void 0 === r || r.call(o), this.Ac = s;
        }
        let [, l, a] = this.Kc();
        const u = !R(n) && l !== n,
            h = this.Yc();
        let c = this.Wc();
        const d = this.Dc,
            v = !!d && (d.sessionStartTimestamp > s + 6e4 || s - d.sessionStartTimestamp > Lu),
            f = d ? v : D(a) && Math.abs(s - a) > Lu;
        let p = !1,
            g = u,
            _ = !l || !!d;
        const m = l;
        let y = !_ && !t && this.Fc(s, h);
        if (y && (y = this.Xc(s), y || Nu.info("cross-tab refresh kept the session alive", {
                sessionId: l
            }), [, l, a] = this.Kc(), y || (_ = !l || !!d)), _ || y || f) {
            g = !1;
            const t = d && !v;
            l = t ? d.sessionId : this.Lc(), c = this.Nc(), Nu.info("new session ID assigned", {
                sessionId: l,
                windowId: c,
                bootstrapped: !!t,
                changeReason: {
                    noSessionId: _,
                    activityTimeout: y,
                    sessionPastMaximumLength: f
                }
            }), a = t ? d.sessionStartTimestamp : s, this.Dc = void 0, p = !0;
        } else c || (c = this.Nc(), p = !0), g = g || l !== m, g && (Nu.info("adopted cross-tab session id", {
            sessionId: l,
            windowId: c
        }), p = !0);
        const b = D(h) && t && !f ? h : s,
            w = D(a) ? a : new Date().getTime();
        this.Uc(c), this.Gc(l, b, w), t || this.jc();
        const S = {
            noSessionId: _,
            activityTimeout: y,
            sessionPastMaximumLength: f,
            crossTabAdoption: g
        };
        return p && this.Rc.forEach((t) => t(l, c, S)), {
            sessionId: l,
            windowId: c,
            sessionStartTimestamp: w,
            changeReason: p ? S : void 0,
            lastActivityTimestamp: h
        };
    }
    jc() {
        this.Oc || (clearTimeout(this.eh), this.eh = setTimeout(() => {
            if (!this.Oc)
                if (this.Xc(new Date().getTime())) {
                    const t = this.Xt;
                    this.resetSessionId(), this.Ec.emit("forcedIdleReset", {
                        idleSessionId: t
                    });
                } else this.jc();
        }, 1.1 * this.sessionTimeoutMs));
    }
};
var Uu = Object.freeze([
    "2026-08-30",
    "2026-08-29",
    "2026-06-25",
    "2026-05-30",
    "2026-01-30",
    "2025-11-30",
    "2025-05-24"
]);
var Bu = function(t, i) {
    if (!t) return !1;
    const e = t.userAgent;
    if (e && Z(e, i)) return !0;
    try {
        const e = null == t ? void 0 : t.userAgentData;
        if ((null == e ? void 0 : e.brands) && e.brands.some((t) => Z(null == t ? void 0 : t.brand, i))) return !0;
    } catch (t) {}
    return !!t.webdriver;
};

function zu() {
    return (zu = Y(function*() {
        const t = null == e ? void 0 : e.userAgentData;
        if (null == t ? void 0 : t.getHighEntropyValues) try {
            const i = yield t.getHighEntropyValues(["model"]), e = null == i ? void 0 : i.model;
            return C(e) && e.length > 0 ? e : void 0;
        } catch (t) {
            return void js.info("Unable to resolve $device_model from userAgentData.getHighEntropyValues", t);
        }
    })).apply(this, arguments);
}

function Hu(t, i) {
    let e = `$survey_${i}/${t.id}`;
    return t.current_iteration && t.current_iteration > 0 && (e = `$survey_${i}/${t.id}/${t.current_iteration}`), e;
}

function qu(t) {
    var i;
    return !!(null === (i = t.conditions) || void 0 === i || null === (i = i.events) || void 0 === i || null === (i = i.values) || void 0 === i ? void 0 : i.length);
}
var Wu = (t, i) => {
    if (!((t) => {
            try {
                new RegExp(t);
            } catch (t) {
                return !1;
            }
            return !0;
        })(i)) return !1;
    try {
        return new RegExp(i).test(t);
    } catch (t) {
        return !1;
    }
};
var Vu = (t) => t.toLowerCase();
var Gu = {
    exact: (t, i) => i.some((i) => t.some((t) => i === t)),
    is_not: (t, i) => i.every((i) => t.every((t) => i !== t)),
    regex: (t, i) => i.some((i) => t.some((t) => Wu(i, t))),
    not_regex: (t, i) => i.every((i) => t.every((t) => !Wu(i, t))),
    icontains: (t, i) => i.map(Vu).some((i) => t.map(Vu).some((t) => i.includes(t))),
    not_icontains: (t, i) => i.map(Vu).every((i) => t.map(Vu).every((t) => !i.includes(t))),
    gt: (t, i) => i.some((i) => {
        const e = parseFloat(i);
        return !isNaN(e) && t.some((t) => e > parseFloat(t));
    }),
    lt: (t, i) => i.some((i) => {
        const e = parseFloat(i);
        return !isNaN(e) && t.some((t) => e < parseFloat(t));
    })
};

function Ku(t, i) {
    return !t || Object.entries(t).every(([t, e]) => {
        const s = null == i ? void 0 : i[t];
        if (null == s) return !1;
        const n = Gu[e.operator];
        return !!n && n(e.values.map(String), [String(s)]);
    });
}

function Yu(t, i, e) {
    return Cl({
        distinct_id: t,
        userPropertiesToSet: i,
        userPropertiesToSetOnce: e
    });
}
var Ju = "custom";
var Xu = "i.posthog.com";
var Zu = /^\/static\//;
var Qu = [
    "/s/",
    "/e/",
    "/i/"
];
var th = class {
    constructor(t) {
        this.ih = {}, this.instance = t;
    }
    get apiHost() {
        const t = this.instance.config.api_host.trim().replace(/\/$/, "");
        return "https://app.posthog.com" === t ? "https://us.i.posthog.com" : t;
    }
    get flagsApiHost() {
        const t = this.instance.config.flags_api_host;
        return t ? t.trim().replace(/\/$/, "") : this.apiHost;
    }
    get uiHost() {
        var t;
        let i = null === (t = this.instance.config.ui_host) || void 0 === t ? void 0 : t.replace(/\/$/, "");
        return i || (i = this.apiHost.replace(`.${Xu}`, ".posthog.com")), "https://app.posthog.com" === i ? "https://us.posthog.com" : i;
    }
    get region() {
        return this.ih[this.apiHost] || (this.ih[this.apiHost] = /https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "us" : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "eu" : Ju), this.ih[this.apiHost];
    }
    nh(t) {
        if (!Zu.test(t)) return;
        const i = this.instance.config.asset_host;
        return "string" == typeof i && i.trim().replace(/\/$/, "") || void 0;
    }
    sh(t) {
        const i = Tl(t);
        return i ? i.protocol + "//" + i.host + i.pathname : void 0;
    }
    rh(t, i, e) {
        if ("ui" === t) return e;
        let s = e;
        const n = this.instance.config.rewriteRequestPath;
        if (n) {
            var r;
            const t = (null === (r = Tl(e)) || void 0 === r ? void 0 : r.href) || e;
            s = n(new URL(t)).toString();
        }
        if (n && "api" === t && Qu.some((t) => 0 === i.indexOf(t))) {
            const t = this.sh(s);
            if (t) {
                const i = this.apiHost;
                let e = this.oh;
                (null == e ? void 0 : e.apiHost) === i && e.rewriteRequestPath === n || (e = {
                    apiHost: i,
                    rewriteRequestPath: n,
                    urls: new Set()
                }, this.oh = e), e.urls.add(t);
            }
        }
        return s;
    }
    isIngestionEndpoint(t) {
        const i = this.oh,
            e = this.sh(t);
        return (null == i ? void 0 : i.apiHost) === this.apiHost && i.rewriteRequestPath === this.instance.config.rewriteRequestPath && !!e && i.urls.has(e);
    }
    endpointFor(t, i = "") {
        if (i && (i = "/" === i[0] ? i : `/${i}`), "ui" === t) return this.rh(t, i, this.uiHost + i);
        if ("flags" === t) return this.rh(t, i, this.flagsApiHost + i);
        if ("assets" === t) {
            const e = this.nh(i);
            if (e) return this.rh(t, i, `${e}${i}`);
        }
        if (this.region === Ju) return this.rh(t, i, this.apiHost + i);
        const e = Xu + i;
        switch (t) {
            case "assets":
                return this.rh(t, i, `https://${this.region}-assets.${e}`);
            case "api":
                return this.rh(t, i, `https://${this.region}.${e}`);
        }
    }
};
var ih = Us("[Surveys]");
var eh = (t) => {
    try {
        const i = ((t) => ((t, i) => `seenSurvey_${function(t) {
			return t.current_iteration && t.current_iteration > 0 ? `${t.id}_${t.current_iteration}` : t.id;
		}(i)}`)(0, t))(t);
        if (localStorage.getItem(i)) return;
        localStorage.setItem(i, "true");
    } catch (t) {
        ih.error("Failed to persist survey seen state", t);
    }
};
var sh = [
    va.Popover,
    va.Widget,
    va.API
];
var nh = {
    ignoreConditions: !1,
    ignoreDelay: !1,
    displayType: ya.Popover
};
var rh = Us("[PostHog ExternalIntegrations]");
var oh = {
    intercom: "intercom-integration",
    crispChat: "crisp-chat-integration"
};
var lh = class {
    constructor(t) {
        this._instance = t;
    }
    Fl(t, i) {
        var e, s;
        null === (e = c.__PosthogExtensions__) || void 0 === e || null === (s = e.loadExternalDependency) || void 0 === s || s.call(e, this._instance, t, (t) => {
            if (t) return rh.error("failed to load script", t);
            i();
        });
    }
    startIfEnabledOrStop() {
        var t;
        for (const [n, r] of Object.entries(null !== (t = this._instance.config.integrations) && void 0 !== t ? t : {})) {
            var i, e, s;
            r && !(null === (i = c.__PosthogExtensions__) || void 0 === i || null === (i = i.integrations) || void 0 === i ? void 0 : i[n]) && this.Fl(oh[n], () => {
                var t;
                null === (t = c.__PosthogExtensions__) || void 0 === t || null === (t = t.integrations) || void 0 === t || null === (t = t[n]) || void 0 === t || t.start(this._instance);
            }), !r && (null === (e = c.__PosthogExtensions__) || void 0 === e || null === (e = e.integrations) || void 0 === e ? void 0 : e[n]) && (null === (s = c.__PosthogExtensions__) || void 0 === s || null === (s = s.integrations) || void 0 === s || null === (s = s[n]) || void 0 === s || s.stop());
        }
    }
};
var ah = class {
    constructor(t) {
        this.disabled = !1 === t;
        const i = P(t) ? t : {};
        this.thresholdPx = i.threshold_px || 30, this.timeoutMs = i.timeout_ms || 1e3, this.clickCount = i.click_count || 3, this.clicks = [];
    }
    isRageClick(t, i, e) {
        if (this.disabled) return !1;
        const s = this.clicks[this.clicks.length - 1];
        if (s && Math.abs(t - s.x) + Math.abs(i - s.y) < this.thresholdPx && this.timeoutMs > e - s.timestamp) {
            if (this.clicks.push({
                    x: t,
                    y: i,
                    timestamp: e
                }), this.clicks.length === this.clickCount) return !0;
        } else this.clicks = [{
            x: t,
            y: i,
            timestamp: e
        }];
        return !1;
    }
};
var uh = () => typeof window > "u" ? void 0 : window;
var hh = () => typeof document > "u" ? void 0 : document;
var ch = "$copy_autocapture";
var dh = [
    "password",
    "hidden",
    "file",
    "checkbox",
    "button",
    "submit",
    "reset",
    "image"
];
var vh = Us("[AutoCapture]");

function fh(t, i) {
    return i.length > t ? i.slice(0, t) + "..." : i;
}

function ph(t) {
    if (t.previousElementSibling) return t.previousElementSibling;
    let i = t;
    do {
        i = i.previousSibling;
    } while (i && !xo(i));
    return i;
}

function gh(t, {
    e: i,
    maskAllElementAttributes: e,
    maskAllText: s,
    elementAttributeIgnoreList: n,
    elementsChainAsString: r,
    disableCaptureUrlHashes: o
}) {
    var l, a;
    if (!xo(t)) return {
        props: {}
    };
    const u = [t],
        h = new Set([t]);
    let c = t;
    for (; c.parentNode && !Eo(c, "body") && 1e3 > u.length;) {
        if (To(c.parentNode)) {
            const t = c.parentNode.host;
            if (h.has(t)) break;
            h.add(t), u.push(t), c = t;
            continue;
        }
        if (!xo(c.parentNode)) break;
        if (h.has(c.parentNode)) break;
        h.add(c.parentNode), u.push(c.parentNode), c = c.parentNode;
    }
    const d = "click" === i.type && "http://www.w3.org/2000/svg" === t.namespaceURI ? u.findIndex((t) => Eo(t, "button") || Eo(t, "a")) : -1;
    d > 0 && (s = s || u.slice(0, d + 1).some((t) => !Zo(t) || Qo(t)));
    const v = [],
        f = {};
    let p, g = !1,
        _ = !1;
    if (Mr(u, (t) => {
            const i = Zo(t);
            if (Eo(t, "a") && !e && !(null == n ? void 0 : n.includes("href"))) {
                const e = t.getAttribute("href");
                g = !!(i && e && ll(e)) && (o ? vi(e) : e);
            }
            m(Ro(t), "ph-no-capture") && (_ = !0), v.push(function(t, i, e, s, n = !1) {
                const r = t.tagName.toLowerCase(),
                    o = {
                        tag_name: r
                    };
                Fo.indexOf(r) > -1 && !e && (o.$el_text = "a" === r.toLowerCase() || "button" === r.toLowerCase() ? fh(1024, al(t)) : fh(1024, Ao(t)));
                const l = Ro(t);
                i || (null == s ? void 0 : s.includes("class")) || 0 >= l.length || (o.classes = l.filter(function(t) {
                    return "" !== t;
                })), Mr(t.attributes, function(e) {
                    var r;
                    if ((!Qo(t) || -1 !== [
                            "name",
                            "id",
                            "class",
                            "aria-label"
                        ].indexOf(e.name)) && !(null == s ? void 0 : s.includes(e.name)) && !i && ll(e.value) && (!C(r = e.name) || "_ngcontent" !== r.substring(0, 10) && "_nghost" !== r.substring(0, 7))) {
                        let t = e.value;
                        "class" === e.name && (t = Po(t).join(" ")), o["attr__" + e.name] = fh(1024, "href" === e.name && n ? vi(t) : t);
                    }
                });
                let a = 1,
                    u = 1,
                    h = t;
                for (; h = ph(h);) a++, h.tagName === t.tagName && u++;
                return o.nth_child = a, o.nth_of_type = u, o;
            }(t, e, s, n, o)), Mr(function(t) {
                if (!Zo(t)) return {};
                const i = {};
                return Mr(t.attributes, function(t) {
                    if (t.name && 0 === t.name.indexOf("data-ph-capture-attribute")) {
                        const e = t.name.replace("data-ph-capture-attribute-", ""),
                            s = t.value;
                        e && s && ll(s) && (i[e] = s);
                    }
                }), i;
            }(t), (t, i) => {
                ({}).hasOwnProperty.call(f, i) || (f[i] = t);
            });
        }), _) return {
        props: {},
        explicitNoCapture: _
    };
    if (d > 0 && (t = u[d], v.splice(0, d)), s || (v[0].$el_text = Eo(t, "a") || Eo(t, "button") ? al(t) : Ao(t)), g) {
        var y, b;
        v[0].attr__href = g;
        const t = null === (y = Tl(g)) || void 0 === y ? void 0 : y.host,
            i = null === (b = uh()) || void 0 === b || null === (b = b.location) || void 0 === b ? void 0 : b.host;
        t && i && t !== i && (p = g);
    }
    return {
        props: Dr((S = i.type, {
            $event_type: S,
            $ce_version: 1
        }), r ? {} : {
            $elements: v
        }, {
            $elements_chain: (w = v, k(w) ? function(t) {
                return t.map((t) => {
                    var i, e;
                    let s = "";
                    if (t.tag_name && (s += t.tag_name), t.attr_class) {
                        t.attr_class.sort();
                        for (const i of t.attr_class) s += `.${i.replace(/"/g, "")}`;
                    }
                    const n = wi(wi(wi(wi({}, t.text ? {
                            text: t.text
                        } : {}), {}, {
                            "nth-child": null !== (i = t.nth_child) && void 0 !== i ? i : 0,
                            "nth-of-type": null !== (e = t.nth_of_type) && void 0 !== e ? e : 0
                        }, t.href ? {
                            href: t.href
                        } : {}), t.attr_id ? {
                            attr_id: t.attr_id
                        } : {}), t.attributes),
                        r = {};
                    return Nr(n).sort(([t], [i]) => function(t, i) {
                        return i > t ? -1 : t > i ? 1 : 0;
                    }(t, i)).forEach(([t, i]) => r[hl(t.toString())] = hl(i.toString())), s += ":", s += Nr(r).map(([t, i]) => `${t}="${i}"`).join(""), s;
                }).join(";");
            }(function(t) {
                return t.map((t) => {
                    var i, e;
                    const s = {
                        text: null === (i = t.$el_text) || void 0 === i ? void 0 : i.slice(0, 400),
                        tag_name: t.tag_name,
                        href: null === (e = t.attr__href) || void 0 === e ? void 0 : e.slice(0, 2048),
                        attr_class: cl(t),
                        attr_id: t.attr__id,
                        nth_child: t.nth_child,
                        nth_of_type: t.nth_of_type,
                        attributes: {}
                    };
                    return Nr(t).filter(([t]) => 0 === t.indexOf("attr__")).forEach(([t, i]) => s.attributes[t] = i), s;
                });
            }(w)) : "")
        }, (null === (l = v[0]) || void 0 === l ? void 0 : l.$el_text) ? {
            $el_text: null === (a = v[0]) || void 0 === a ? void 0 : a.$el_text
        } : {}, p && "click" === i.type ? {
            $external_click_url: p
        } : {}, f),
        target: t
    };
    var w, S;
}
var _h = "autocapture";
var mh = class {
    al() {
        this.ll = void 0, clearTimeout(this.ul), this.ul = void 0;
    }
    cl(t) {
        var i;
        if (!Zo(t)) return !0;
        const e = null !== (i = this.hl().css_selector_ignorelist) && void 0 !== i ? i : Lo,
            s = new Set();
        let n = t;
        for (; n;) {
            if (s.size >= 1e3 || s.has(n)) return !0;
            s.add(n);
            const t = n,
                i = Ro(t);
            if (m(i, "ph-no-capture") || m(i, "ph-sensitive") || Qo(t) || e.some((i) => Mo(t, i))) return !0;
            const r = n.parentNode;
            n = To(r) ? r.host : r && xo(r) ? r : null;
        }
        return !1;
    }
    dl(t) {
        if (!this.isEnabled || "pointercancel" === t.type) return void this.al();
        if ("pointerdown" === t.type) {
            var i;
            this.al();
            const e = Io(t);
            return void(t.isPrimary && 0 === t.button && !t.ctrlKey && e && xo(e) && (this.ll = {
                target: e,
                excluded: this.cl(e),
                id: t.pointerId,
                x: t.clientX,
                y: t.clientY,
                released: !1,
                distinctId: null === (i = this.Ea) || void 0 === i ? void 0 : i.distinctId
            }));
        }
        const e = this.ll;
        e && (t.pointerId !== e.id || Math.abs(t.clientX - e.x) > 5 || Math.abs(t.clientY - e.y) > 5 ? this.al() : "pointerup" === t.type && (e.released = !0, this.ul = setTimeout(() => this.al(), 0)));
    }
    vl(t) {
        var i;
        const e = this.ll;
        this.al();
        const s = Io(t);
        if ((null == e ? void 0 : e.released) && e.target.isConnected && e.distinctId === (null === (i = this.Ea) || void 0 === i ? void 0 : i.distinctId) && t.pointerId === e.id && (t.detail > 0 || "touch" === t.pointerType || "pen" === t.pointerType) && 0 === t.button && 5 >= Math.abs(t.clientX - e.x) && 5 >= Math.abs(t.clientY - e.y) && s && (Eo(s, "html") || Eo(s, "body"))) {
            var n, r, o;
            if (e.excluded) return null;
            const t = null !== (n = this.hl().css_selector_ignorelist) && void 0 !== n ? n : Lo;
            return [
                s,
                null === (r = hh()) || void 0 === r ? void 0 : r.documentElement,
                null === (o = hh()) || void 0 === o ? void 0 : o.body
            ].some((i) => {
                if (!i) return !1;
                const e = Ro(i);
                return m(e, "ph-no-capture") || m(e, "ph-sensitive") || !Zo(i) || Qo(i) || t.some((t) => Mo(i, t));
            }) ? null : e.target;
        }
    }
    constructor(t) {
        this.Ra = t, this.name = _h, this.fl = !1, this.pl = null, this.gl = !1, this.ml = new Map(), this.yl = !1, this.Fr = {
            enabled: !1,
            rageclick: !1,
            maskAllElementAttributes: !1,
            maskAllText: !1,
            disableCaptureUrlHashes: !1,
            remoteRequestsDisabled: !1
        }, this.Ti = !1, this.Ra.refresh(this.Fr), this.rageclicks = new ah(this.Fr.rageclick), this.bl = null;
    }
    setup(t) {
        this._l(), this.Ea = t;
        const i = t.onRemoteConfig(this.onRemoteConfig.bind(this));
        this.Ti ? i.dispose() : (this.Ua = i, this.startIfEnabled());
    }
    dispose() {
        var t;
        this.Ti || (this.Ti = !0, this.Ea = void 0, null === (t = this.Ua) || void 0 === t || t.dispose(), this.Ua = void 0, this.ml.clear(), this.bl = null, this.wl());
    }
    hl() {
        return this.Ra.refresh(this.Fr), this.Fr;
    }
    _l() {
        var t, i;
        return this.hl(), this.Fr.url_allowlist = null === (t = this.Fr.url_allowlist) || void 0 === t ? void 0 : t.map((t) => new RegExp(t)), this.Fr.url_ignorelist = null === (i = this.Fr.url_ignorelist) || void 0 === i ? void 0 : i.map((t) => new RegExp(t)), this.Fr;
    }
    kl() {
        const t = uh(),
            i = hh();
        if (!this.isBrowserSupported()) return void vh.info("Disabling Automatic Event Collection because this browser is not supported");
        if (!t || !i) return;
        this.Sl = t, this.xl = i;
        const e = this.$l = (i) => {
            i = i || (null == t ? void 0 : t.event);
            try {
                if ("blur" === i.type) return void this.al();
                if (0 === i.type.indexOf("pointer")) return void this.dl(i);
                const t = "click" === i.type ? this.vl(i) : void 0;
                if (I(t)) return;
                this.Cl(i, "$autocapture", t);
            } catch (t) {
                vh.error("Failed to capture event", t);
            }
        };
        if (Hr(t, "blur", e), Hr(i, "submit", e, {
                capture: !0
            }), Hr(i, "change", e, {
                capture: !0
            }), Hr(i, "click", e, {
                capture: !0
            }), Mr([
                "pointerdown",
                "pointermove",
                "pointerup",
                "pointercancel"
            ], (t) => {
                Hr(i, t, e, {
                    capture: !0
                });
            }), this.hl().capture_copied_text) {
            const e = this.Tl = (i) => {
                i = i || (null == t ? void 0 : t.event);
                try {
                    this.Cl(i, ch);
                } catch (t) {
                    vh.error("Failed to capture clipboard event", t);
                }
            };
            Hr(i, "copy", e, {
                capture: !0
            }), Hr(i, "cut", e, {
                capture: !0
            }), Hr(i, "paste", e, {
                capture: !0
            });
        }
    }
    wl() {
        const t = this.Sl,
            i = this.xl;
        this.al(), this.$l && (null == t || t.removeEventListener("blur", this.$l), Mr([
            "pointerdown",
            "pointermove",
            "pointerup",
            "pointercancel"
        ], (t) => {
            null == i || i.removeEventListener(t, this.$l, !0);
        }), null == i || i.removeEventListener("submit", this.$l, !0), null == i || i.removeEventListener("change", this.$l, !0), null == i || i.removeEventListener("click", this.$l, !0), this.$l = void 0), this.Tl && (null == i || i.removeEventListener("copy", this.Tl, !0), null == i || i.removeEventListener("cut", this.Tl, !0), null == i || i.removeEventListener("paste", this.Tl, !0), this.Tl = void 0), this.Sl = void 0, this.xl = void 0, this.fl = !1;
    }
    startIfEnabled() {
        this.isEnabled || this.al(), !this.Ti && this.Ea && this.isEnabled && !this.fl && (this.kl(), this.fl = !0);
    }
    onRemoteConfig(t) {
        if (this.Ti) return;
        if (this.gl = !0, !t.ok) return void this.startIfEnabled();
        const i = t.config;
        i.elementsChainAsString && (this.yl = i.elementsChainAsString);
        const e = i.autocapture_opt_out;
        var s;
        N(e) && (null === (s = this.Ea) || void 0 === s || s.kv.set("$autocapture_disabled_server_side", e), this.pl = e), this.startIfEnabled();
    }
    setElementSelectors(t, i = this) {
        if (this.Ti) return;
        t.size ? this.ml.set(i, new Set(t)) : this.ml.delete(i);
        const e = new Set();
        this.ml.forEach((t) => {
            t.forEach((t) => e.add(t));
        }), this.bl = e;
    }
    getElementSelectors(t, i) {
        var e;
        const s = [];
        return null === (e = this.bl) || void 0 === e || e.forEach((e) => {
            var n;
            const r = null === (n = hh()) || void 0 === n ? void 0 : n.querySelectorAll(e);
            null == r || r.forEach((n) => {
                t !== n && i !== n || m(s, e) || s.push(e);
            });
        }), s;
    }
    get isEnabled() {
        var t, i;
        if (this.Ti) return !1;
        const e = null === (t = this.Ea) || void 0 === t ? void 0 : t.kv.get(hn),
            s = this.pl,
            n = this.hl();
        if (!n.remoteRequestsDisabled && !this.gl) return !1;
        const r = n.remoteRequestsDisabled && !this.gl;
        if (I(s) && !N(e) && !r) return !1;
        const o = null !== (i = this.pl) && void 0 !== i ? i : !!e;
        return !!n.enabled && !o;
    }
    Cl(t, i = "$autocapture", e) {
        if (!this.isEnabled) return void this.al();
        let s = e || Io(t);
        ko(s) && (s = s.parentNode || null);
        const n = this._l();
        var r;
        "$autocapture" === i && "click" === t.type && t instanceof MouseEvent && n.rageclick && (null === (r = this.rageclicks) || void 0 === r ? void 0 : r.isRageClick(t.clientX, t.clientY, t.timeStamp || new Date().getTime())) && Yo(s, n.rageclick) && this.Cl(t, "$rageclick", e);
        const o = i === ch,
            l = o ? wi(wi({}, n), {}, {
                dom_event_allowlist: void 0
            }) : n;
        if (s && function(t, i, e, s, n, r) {
                var o;
                const l = typeof window > "u" ? void 0 : window;
                if (!l || Jo(t)) return !1;
                if ((null == e ? void 0 : e.url_allowlist) && !Oo(e.url_allowlist, r)) return !1;
                if ((null == e ? void 0 : e.url_ignorelist) && Oo(e.url_ignorelist, r)) return !1;
                if (null == e ? void 0 : e.dom_event_allowlist) {
                    const t = e.dom_event_allowlist;
                    if (t && !t.some((t) => i.type === t)) return !1;
                }
                const {
                    parentIsUsefulElement: a,
                    targetElementList: u
                } = Xo(t, s);
                if (! function(t, i) {
                        const e = null == i ? void 0 : i.element_allowlist;
                        if (R(e)) return !0;
                        for (const i of t)
                            if (e.some((t) => i.tagName.toLowerCase() === t)) return !0;
                        return !1;
                    }(u, e)) return !1;
                if (!Do(u, null == e ? void 0 : e.css_selector_allowlist)) return !1;
                if (Do(u, null !== (o = null == e ? void 0 : e.css_selector_ignorelist) && void 0 !== o ? o : Lo)) return !1;
                try {
                    const e = l.getComputedStyle(t);
                    if (e && "pointer" === e.getPropertyValue("cursor") && "click" === i.type) return !0;
                } catch (t) {}
                const h = t.tagName.toLowerCase();
                switch (h) {
                    case "html":
                        return !1;
                    case "form":
                        return (n || ["submit"]).indexOf(i.type) >= 0;
                    case "input":
                    case "select":
                    case "textarea":
                        return (n || ["change", "click"]).indexOf(i.type) >= 0;
                    default:
                        return a ? (n || ["click"]).indexOf(i.type) >= 0 : (n || ["click"]).indexOf(i.type) >= 0 && (Fo.indexOf(h) > -1 || "true" === t.getAttribute("contenteditable"));
                }
            }(s, t, l, o, o ? [
                "copy",
                "cut",
                "paste"
            ] : void 0, {
                config: {
                    get_current_url: n.getCurrentUrl
                }
            })) {
            var a;
            const {
                props: e,
                explicitNoCapture: r,
                target: o
            } = gh(s, {
                e: t,
                maskAllElementAttributes: n.maskAllElementAttributes,
                maskAllText: n.maskAllText,
                elementAttributeIgnoreList: n.element_attribute_ignorelist,
                elementsChainAsString: this.yl,
                disableCaptureUrlHashes: n.disableCaptureUrlHashes
            });
            if (r) return !1;
            const l = this.getElementSelectors(s, o);
            if (l && l.length > 0 && (e.$element_selectors = l), i === ch) {
                const i = t.type || "clipboard";
                if ("paste" !== i) {
                    var u, h;
                    const t = null === (u = uh()) || void 0 === u || null === (u = u.getSelection()) || void 0 === u ? void 0 : u.toString(),
                        i = Co(t);
                    if (!i) return !1;
                    e.$selected_content = i, e.$clipboard_text_length = null !== (h = null == t ? void 0 : t.length) && void 0 !== h ? h : 0;
                }
                e.$copy_type = i;
            }
            if ("$autocapture" === i && "change" === t.type && n.capture_value_css_selector_allowlist && !n.maskAllText && (Eo(c = s, "input") ? !m(dh, c.type) : Eo(c, "textarea") || Eo(c, "select") && !c.multiple) && function(t, i) {
                    var e;
                    if (!Zo(t)) return !1;
                    const s = null !== (e = i.css_selector_ignorelist) && void 0 !== e ? e : Lo,
                        n = new Set();
                    let r = t;
                    for (Eo(t, "select") && (r = t.options[t.selectedIndex] || t); r;) {
                        const t = r,
                            i = Ro(t);
                        if (n.size >= 1e3 || n.has(r) || m(i, "ph-sensitive") || m(i, "ph-no-capture") || s.some((i) => Mo(t, i))) return !1;
                        n.add(r);
                        const e = r.assignedSlot || r.parentNode;
                        r = To(e) ? e.host : e && xo(e) ? e : null;
                    }
                    return !0;
                }(s, n) && !s.querySelector(".ph-no-capture, .ph-sensitive")) {
                const t = n.capture_value_css_selector_allowlist;
                let i = !1;
                try {
                    i = T(t) ? !!t(s) : k(t) && t.some((t) => Mo(s, t));
                } catch (t) {
                    vh.error("capture_value_css_selector_allowlist threw", t);
                }
                i && (e.$input_value = s.value);
            }
            return null === (a = this.Ea) || void 0 === a || a.capture(i, e), !0;
        }
        var c;
    }
    isBrowserSupported() {
        var t;
        return T(null === (t = hh()) || void 0 === t ? void 0 : t.querySelectorAll);
    }
};
var yh = "featureFlags";
var bh = "logs";
var wh = () => {
    var i;
    return (null == t || null === (i = t.performance) || void 0 === i ? void 0 : i.now) ? t.performance.now() : Date.now();
};
var $h = class {
    constructor(t) {
        this._instance = t;
    }
    initialize() {}
    get(t) {
        const i = this._instance.persistence;
        if ("string" == typeof t) return null == i ? void 0 : i.get_property(t);
        const e = {};
        for (const s of t) {
            const t = null == i ? void 0 : i.get_property(s);
            R(t) || (e[s] = t);
        }
        return e;
    }
    set(t, i) {
        var e;
        null === (e = this._instance.persistence) || void 0 === e || e.register("string" == typeof t ? {
            [t]: i
        } : t);
    }
    remove(t) {
        var i;
        null === (i = this._instance.persistence) || void 0 === i || i.unregister(t);
    }
};
var Sh = class {
    constructor(t) {
        this.instance = t, this.A = js, this.kv = new $h(t), this.onSession = (t) => ba(this.instance.onSessionId((i) => {
            try {
                t(i);
            } catch (t) {
                this.A.error("Browser extension session listener failed", t);
            }
        })), this.onEvent = (t) => ba(this.instance._addCaptureHook((i, e) => {
            if (e) try {
                t({
                    event: i,
                    properties: e.properties
                });
            } catch (t) {
                this.A.error("Browser extension event listener failed", t);
            }
        })), this.onRemoteConfig = (t) => {
            const i = (i) => {
                    try {
                        t(i);
                    } catch (t) {
                        this.A.error("Browser extension remote config listener failed", t);
                    }
                },
                e = this.instance.dr.on("extensionsRemoteConfig", i);
            return this.instance.vr && i(this.instance.vr), ba(e);
        };
    }
    get logger() {
        return this.A;
    }
    get distinctId() {
        return this.instance.get_distinct_id();
    }
    get anonymousId() {
        var t;
        return null !== (t = this.instance.get_property("$device_id")) && void 0 !== t ? t : this.distinctId;
    }
    get deviceId() {
        const t = this.instance.get_property(yn);
        return "string" == typeof t ? t : void 0;
    }
    get library() {
        return {
            name: Vs.LIB_NAME,
            version: Vs.LIB_VERSION
        };
    }
    get initialPersonProperties() {
        var t, i;
        return null !== (t = null === (i = this.instance.persistence) || void 0 === i ? void 0 : i.get_initial_props()) && void 0 !== t ? t : {};
    }
    get groups() {
        return this.instance.getGroups();
    }
    get session() {
        try {
            var t, i, e, s, n;
            const r = null === (t = this.instance.sessionManager) || void 0 === t ? void 0 : t.checkAndGetSessionAndWindowId(!0);
            return {
                sessionId: null !== (i = null == r ? void 0 : r.sessionId) && void 0 !== i ? i : "",
                windowId: null !== (e = null == r ? void 0 : r.windowId) && void 0 !== e ? e : "",
                sessionStartTimestamp: null !== (s = null == r ? void 0 : r.sessionStartTimestamp) && void 0 !== s ? s : 0,
                lastActivityTimestamp: null !== (n = null == r ? void 0 : r.lastActivityTimestamp) && void 0 !== n ? n : 0
            };
        } catch (t) {
            return {
                sessionId: "",
                windowId: "",
                sessionStartTimestamp: 0,
                lastActivityTimestamp: 0
            };
        }
    }
    get isOptedOut() {
        return this.instance.has_opted_out_capturing();
    }
    get canCapture() {
        return T(this.instance.is_capturing) ? this.instance.is_capturing() : !this.isOptedOut;
    }
    get isRateLimited() {
        var t;
        return !!(null === (t = this.instance.rateLimiter) || void 0 === t ? void 0 : t.isClientRateLimited);
    }
    get projectToken() {
        return this.instance.config.token;
    }
    getExtension(t) {
        let i;
        switch (t) {
            case yh:
            case "featureFlagsCommon":
                i = this.instance.featureFlags;
                break;
            case bh:
                i = this.instance.logs;
                break;
            case "surveys":
                i = this.instance.surveys;
                break;
            case _h:
                i = this.instance.autocapture;
        }
        return i;
    }
    capture(t, i, e) {
        if (!e) return this.pr(this.instance.capture(t, i));
        const s = wi({
            timestamp: e.timestamp,
            uuid: e.uuid,
            $set: e.set,
            $set_once: e.setOnce
        }, "unload" === e.delivery ? {
            transport: "sendBeacon",
            send_instantly: !0
        } : {});
        return this.pr(this.instance.capture(t, i, s));
    }
    pr(t) {
        var i;
        return !R(t) || !(null === (i = this.instance.rateLimiter) || void 0 === i ? void 0 : i.lastEventRateLimited);
    }
    registerDynamicEventProperties(t) {
        return ba(this.instance.mr(t));
    }
    sendRequest(t) {
        var i = this;
        return Y(function*(t, e = {}) {
            var s;
            const n = null !== (s = e.target) && void 0 !== s ? s : "api",
                r = e.query ? fu(t, e.query) : t,
                o = i.instance.requestRouter.endpointFor(n, r),
                l = {
                    method: e.method,
                    url: o,
                    data: e.body,
                    headers: e.headers,
                    timeout: e.timeoutMs,
                    fireCallbackOnDrop: !0,
                    transport: e.transport,
                    compression: e.compression,
                    compressionFallback: "flags" === e.target && "best-available" === e.compression ? p.Base64 : void 0,
                    timestampMode: e.sentAt
                };
            return "api" === n && "/i/v1/logs" === t && (l.batchKey = "logs"), "sendBeacon" === e.transport ? (i.instance._send_request(l), {
                statusCode: 202
            }) : new Promise((t) => {
                var e;
                if (l.callback = t, "flags" === n && (null === (e = i.instance.config.metrics) || void 0 === e ? void 0 : e.flags)) {
                    let e;
                    l.onDispatch = () => {
                        e = wh();
                    }, l.callback = (s) => {
                        R(e) || i.gr(o, s, wh() - e), t(s);
                    };
                }
                i.instance._send_request(l);
            });
        }).apply(this, arguments);
    }
    gr(t, i, e) {
        try {
            var s, n, r;
            const o = i.statusCode || void 0,
                l = {
                    "server.address": (null !== (s = null === (n = Tl(t)) || void 0 === n ? void 0 : n.hostname) && void 0 !== s ? s : t).replace(/^\[(.*)\]$/, "$1")
                };
            o && (l["http.response.status_code"] = o);
            const a = ((t, i) => t ? 400 > t ? void 0 : String(t) : "AbortError" === (null == i ? void 0 : i.name) ? "timeout" : "_OTHER")(o, i.error);
            a && (l["error.type"] = a);
            const u = kl();
            u && (l["client.timezone"] = u), null === (r = this.instance.metrics) || void 0 === r || r.histogram("posthog.flags.request.duration", e, {
                unit: "ms",
                attributes: l
            });
        } catch (t) {
            js.error("Failed to record the /flags request duration", t);
        }
    }
};
var xh = {};
var Eh = 0;
var kh = () => {};
var Th = "Consent opt in/out is not valid with cookieless_mode=\"always\" and will be ignored";
var Ph = "Surveys module not available";
var Oh = "sanitize_properties is deprecated. Use before_send instead";
var Rh = "Invalid value for property_denylist config: ";
var Ch = [
    "$recording_status",
    "$sdk_debug_recording_script_not_loaded",
    "$sdk_debug_replay_url_trigger_status",
    "$sdk_debug_replay_event_trigger_status",
    "$sdk_debug_replay_linked_flag_trigger_status",
    "$sdk_debug_replay_rrweb_error",
    "$sdk_debug_replay_internal_buffer_length",
    "$sdk_debug_replay_flushed_size"
];
var Ah = [
    "$feature_flag_called",
    "$$heatmap",
    "$snapshot"
];
var Ih = (t) => "$" === t.charAt(0) && !m(Ah, t);
var Fh = /^[A-Za-z0-9_-]{1,400}$/;
var Mh = /^fb\.[0-9]+\.[0-9]+\.[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)?$/;
var Dh = /^fb\.[0-9]+\.[0-9]+\.[0-9]+$/;
var Nh = [
    "token",
    "distinct_id",
    vr
];
var Lh = "posthog";
var jh = [...Uu].sort()[Uu.length - 1];
var Uh = (t) => {
    const i = {};
    return t && "unset" !== t ? ("2025-11-30" > t || (i.strictMinimumDuration = !0), "2026-05-30" > t || (i.canvasCapture = {
        resolutionScale: .6
    }), "2026-06-25" > t || (i.streamNetworkBody = !0), "2026-08-30" > t || (i.captureJsonLd = !0), i) : i;
};
var Bh = (i) => {
    var e;
    return wi({
        api_host: "https://us.i.posthog.com",
        flags_api_host: null,
        ui_host: null,
        asset_host: null,
        token: "",
        autocapture: !0,
        cross_subdomain_cookie: zr(null == s ? void 0 : s.location),
        persistence: "localStorage+cookie",
        persistence_name: "",
        cookie_persisted_properties: [],
        loaded: kh,
        save_campaign_params: !0,
        custom_campaign_params: [],
        custom_blocked_useragents: [],
        save_referrer: !0,
        capture_pageleave: "if_capture_pageview",
        defaults: null != i ? i : "unset",
        __preview_deferred_init_extensions: !1,
        __preview_replay_sync_fetch: !0,
        __preview_external_dependency_versioned_paths: !1,
        __preview_cookie_wins_on_conflict: !1,
        debug: n && C(null == n ? void 0 : n.search) && -1 !== n.search.indexOf("__posthog_debug=true") || !1,
        cookie_expiration: 365,
        upgrade: !1,
        disable_session_recording: !1,
        disable_persistence: !1,
        disable_web_experiments: !0,
        disable_surveys: !1,
        disable_surveys_automatic_display: !1,
        disable_conversations: !1,
        disable_product_tours: !1,
        disableDeviceModel: !1,
        reuseAnonymousId: !1,
        disable_external_dependency_loading: !1,
        strict_script_versioning: "fallback",
        enable_recording_console_log: void 0,
        secure_cookie: "https:" === (null == t || null === (e = t.location) || void 0 === e ? void 0 : e.protocol),
        ip: !1,
        opt_out_capturing_by_default: !1,
        opt_out_persistence_by_default: !1,
        opt_out_useragent_filter: !1,
        opt_out_capturing_persistence_type: "localStorage",
        consent_persistence_name: null,
        opt_out_capturing_cookie_prefix: null,
        opt_in_site_apps: !1,
        property_denylist: [],
        respect_dnt: !1,
        sanitize_properties: null,
        request_headers: {},
        request_batching: !0,
        properties_string_max_length: 65535,
        mask_all_element_attributes: !1,
        mask_all_text: !1,
        mask_personal_data_properties: !1,
        custom_personal_data_properties: [],
        advanced_disable_flags: !1,
        advanced_disable_decide: !1,
        advanced_disable_feature_flags: !1,
        advanced_disable_feature_flags_on_first_load: !1,
        advanced_only_evaluate_survey_feature_flags: !1,
        advanced_feature_flags_dedup_per_session: !1,
        advanced_enable_surveys: !1,
        advanced_disable_toolbar_metrics: !1,
        feature_flag_request_timeout_ms: 3e3,
        feature_flag_request_max_retries: 1,
        surveys_request_timeout_ms: 1e4,
        on_request_error(t) {
            js.error("Bad HTTP status: " + t.statusCode + " " + t.text);
        },
        get_device_id: (t) => t,
        capture_performance: void 0,
        name: "posthog",
        bootstrap: {},
        disable_compression: !1,
        session_idle_timeout_seconds: 1800,
        person_profiles: Pr,
        before_send: void 0,
        get_current_url: void 0,
        request_queue_config: {
            flush_interval_ms: 3e3
        },
        error_tracking: {},
        _onCapture: kh
    }, ((t) => ({
        rageclick: t && t >= "2026-05-30" ? {
            content_ignorelist: Uo,
            ignore_text_selection: !0
        } : !t || "2025-11-30" > t || {
            content_ignorelist: !0
        },
        capture_pageview: !t || "2025-05-24" > t || "history_change",
        session_recording: Uh(t),
        external_scripts_inject_target: t && t >= "2026-01-30" ? "head" : "body",
        internal_or_test_user_hostname: t && t >= "2026-01-30" ? /^(localhost|127\.0\.0\.1)$/ : void 0,
        persistence_save_debounce_ms: t && t >= "2026-05-30" ? 250 : 0,
        split_storage: !(!t || "2026-05-30" > t),
        detect_google_search_app: !(!t || "2026-05-30" > t),
        disable_capture_url_hashes: !(!t || "2026-06-25" > t),
        cookieWinsOnConflict: !(!t || "unset" === t || "2026-08-29" > t)
    }))(i));
};
var zh = [
    ["process_person", "person_profiles"],
    ["xhr_headers", "request_headers"],
    ["cookie_name", "persistence_name"],
    ["disable_cookie", "disable_persistence"],
    ["__preview_disable_beacon", "disable_beacon"],
    ["store_google", "save_campaign_params"],
    ["verbose", "debug"],
    ["__preview_cookie_wins_on_conflict", "cookieWinsOnConflict"]
];
var Hh = (t) => {
    const i = {};
    for (const [e, s] of zh) R(t[e]) || (i[s] = t[e]);
    const e = Dr({}, i, t),
        s = t.__preview_external_dependency_versioned_paths;
    return R(s) || (R(t.strict_script_versioning) && (e.strict_script_versioning = !!s), C(s) && R(t.asset_host) && (e.asset_host = s)), k(t.property_blacklist) && (R(t.property_denylist) ? e.property_denylist = t.property_blacklist : k(t.property_denylist) ? e.property_denylist = [...t.property_blacklist, ...t.property_denylist] : js.error(Rh + t.property_denylist)), e;
};
var qh = class {
    constructor() {
        this.__forceAllowLocalhost = !1;
    }
    get ah() {
        return this.__forceAllowLocalhost;
    }
    set ah(t) {
        js.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = t;
    }
};
var Wh = class i {
    uh(t) {
        if (!t) return;
        const i = this.hh.indexOf(t); -
        1 !== i && this.hh.splice(i, 1);
    }
    dh(t, i) {
        var e;
        return this.uh(t), this.hh.push(i), null === (e = i.initialize) || void 0 === e || e.call(i), i;
    }
    fh() {
        return "always" === this.config.cookieless_mode || "on_reject" === this.config.cookieless_mode && this.consent.isRejected();
    }
    ph() {
        if (this.gh) return;
        if (this.config.reuseAnonymousId) return;
        if (this.config.segment) return;
        if (this.fh()) return;
        const t = "memory" === this.config.persistence || "sessionStorage" === this.config.persistence;
        if (!t && !this.config.disable_persistence) return;
        if (this.mh) return;
        let i, e, s;
        t ? (i = `persistence is set to '${this.config.persistence}'`, e = "memory" === this.config.persistence ? "on every page load" : "for every new browser tab or window", s = "Either set persistence to 'localStorage+cookie', keep this persistence and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId.") : (i = "persistence is disabled (disable_persistence is true)", e = "on every page load", s = "Either set disable_persistence to false, keep persistence disabled and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId."), this.gh = !0, console.warn("[PostHog.js]", `${i} but no bootstrap.distinctID was provided. PostHog will mint a new distinct ID ${e}, so calling identify() merges a new ID onto the person each time. A person can then pass the distinct-ID limit and its events stop appearing on person pages and the session tab. ${s}`);
    }
    yh() {
        const t = this.persistence;
        if (!t || this.bh) return;
        if (this.fh()) return void("on_reject" === this.config.cookieless_mode && "$posthog_cookieless" !== this.get_distinct_id() && (this._h(), this.wh()));
        if ("$posthog_cookieless" !== this.get_distinct_id()) return;
        this.kh() || t.load(!0);
        const i = this.get_distinct_id();
        if (!i || "$posthog_cookieless" === i) {
            const i = this.config.get_device_id(Zr());
            this.register({
                distinct_id: i,
                $device_id: i
            }), t.set_property(rr, kr);
        }
        this._h();
    }
    get decideEndpointWasHit() {
        var t, i;
        return null !== (t = null === (i = this.featureFlags) || void 0 === i ? void 0 : i.hasLoadedFlags) && void 0 !== t && t;
    }
    get flagsEndpointWasHit() {
        var t, i;
        return null !== (t = null === (i = this.featureFlags) || void 0 === i ? void 0 : i.hasLoadedFlags) && void 0 !== t && t;
    }
    constructor() {
        var t;
        this.Sh = !1, this.xh = !1, this.webPerformance = new qh(), this.$h = !1, this.version = Vs.LIB_VERSION, this.Ch = new Set(), this.Th = "", this.dr = new Du(), this.hh = [], this.Ih = [], this.Eh = !1, this.mh = !1, this.gh = !1, this.bh = !1, this._calculate_event_properties = this.calculateEventProperties.bind(this), this.config = Bh(), this.SentryIntegration = bl, this.sentryIntegration = (t) => function(t, i) {
            const e = yl(t, i);
            return {
                name: ml,
                processEvent: (t) => e(t)
            };
        }(this, t), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this.Mh = !1, this.Ah = null, this.Rh = null, this.Ph = null, this.scrollManager = new Iu(this), this.pageViewManager = new wl(this), this.rateLimiter = new Ea(this), this.requestRouter = new th(this), this.consent = new wo(this), this.externalIntegrations = new lh(this);
        const e = null !== (t = i.__defaultExtensionClasses) && void 0 !== t ? t : {};
        this.featureFlags = e.featureFlags && new e.featureFlags(this), this.toolbar = e.toolbar && new e.toolbar(this), this.surveys = e.surveys && new e.surveys(this), this.conversations = e.conversations && new e.conversations(this), this.logs = e.logs && new e.logs(this), this.metrics = e.metrics && new e.metrics(this), this.experiments = e.experiments && new e.experiments(this), this.exceptions = e.exceptions && new e.exceptions(this), this.people = {
            set: (t, i, e) => {
                const s = C(t) ? {
                    [t]: i
                } : t;
                this.setPersonProperties(s), null == e || e({});
            },
            set_once: (t, i, e) => {
                const s = C(t) ? {
                    [t]: i
                } : t;
                this.setPersonProperties(void 0, s), null == e || e({});
            }
        }, this.on("eventCaptured", (t) => js.info(`send "${null == t ? void 0 : t.event}"`, t));
    }
    init(t, e, s) {
        if (s && s !== Lh) {
            var n;
            const r = null !== (n = xh[s]) && void 0 !== n ? n : new i();
            return r._init(t, e, s), xh[s] = r, xh[Lh][s] = r, r;
        }
        return this._init(t, e, s);
    }
    _init(i, e = {}, s) {
        var n, r, o;
        const l = C(i) ? i.trim() : "";
        if (!l) return js.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
        var a;
        if (this.__loaded) return l !== (null === (a = this.config) || void 0 === a ? void 0 : a.token) ? console.warn("[PostHog.js]", `You have already initialized PostHog with a different project token! Re-initializing is a no-op, so events will keep going to the project this instance was initialized with. To capture into a second project, load PostHog once, then initialize a named instance after the SDK has loaded, e.g. posthog.init('${l}', { ... }, 'project2')`) : console.warn("[PostHog.js]", "You have already initialized PostHog! Re-initializing is a no-op"), this;
        this.__loaded = !0, this.config = Bh(e.defaults), e.debug = this.Oh(e.debug), this.Fh = e, this.Dh = [], e.person_profiles ? this.Rh = e.person_profiles : e.process_person && (this.Rh = e.process_person);
        const u = Bh(e.defaults),
            h = Hh(e),
            c = Dr({}, u, h, {
                name: s,
                token: l
            });
        P(u.rageclick) && P(h.rageclick) && (c.rageclick = Dr({}, u.rageclick, h.rageclick)), P(u.session_recording) && P(h.session_recording) && (c.session_recording = Dr({}, u.session_recording, h.session_recording)), this.set_config(c), this.config.on_xhr_error && js.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = e.disable_compression ? void 0 : aa.GZipJS;
        const d = this.kh(),
            v = !this.fh();
        if (this.persistence = new la(this.config, d, !0, v), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new la(wi(wi({}, this.config), {}, {
                persistence: "sessionStorage"
            }), d, !1, v), this.Th = "ph_" + (this.config.persistence_name || this.config.token) + "_session_registered_properties", "memory" !== this.config.persistence && !d && bo.Ot()) {
            const t = bo.Ft(this.Th);
            k(t) && t.forEach((t) => {
                C(t) && this.Ch.add(t);
            });
        } else bo.Dt(this.Th);
        const f = wi({}, this.persistence.props),
            p = wi({}, this.sessionPersistence.props);
        this.register({
            $initialization_time: new Date().toISOString()
        }), this.Lh = new Ru((t, i) => this.Nh(t, i), this.config.request_queue_config), this.jh = new Au(this), this.__request_queue = [];
        const g = this.fh();
        g || (this.sessionManager = new ju(this), this.sessionPropsManager = new Mu(this, this.sessionManager, this.persistence), this.sessionManager.onSessionId((t, i, e) => {
            ((null == e ? void 0 : e.activityTimeout) || (null == e ? void 0 : e.sessionPastMaximumLength) || (null == e ? void 0 : e.crossTabAdoption)) && this.qh();
        })), this.Bh(), this.config.__preview_deferred_init_extensions ? (js.info("Deferring extension initialization to improve startup performance"), this.zh = setTimeout(() => {
            this.zh = void 0, this.Hh(g);
        }, 0)) : (js.info("Initializing extensions synchronously"), this.Hh(g)), Vs.DEBUG = Vs.DEBUG || this.config.debug, Vs.DEBUG && js.info("Starting in debug mode", {
            this: this,
            config: e,
            thisC: wi({}, this.config),
            p: f,
            s: p
        }), this.config.identity_distinct_id && !(null === (n = e.bootstrap) || void 0 === n ? void 0 : n.distinctID) && (e.bootstrap = wi(wi({}, e.bootstrap), {}, {
            distinctID: this.config.identity_distinct_id,
            isIdentifiedID: !0
        }));
        const _ = null === (r = e.bootstrap) || void 0 === r ? void 0 : r.distinctID;
        if (this.mh = !!_ && !A(_), null === (o = e.bootstrap) || void 0 === o ? void 0 : o.distinctID) {
            const t = e.bootstrap.distinctID,
                i = this.get_distinct_id(),
                s = this.persistence.get_property(rr);
            if (e.bootstrap.isIdentifiedID && null != i && i !== t && "anonymous" === s) this.identify(t);
            else if (e.bootstrap.isIdentifiedID && null != i && i !== t && "identified" === s) js.warn("Bootstrap distinctID differs from an already-identified user. The existing identity is preserved. Call reset() before reinitializing if you intend to switch users.");
            else {
                const i = this.config.get_device_id(Zr()),
                    s = e.bootstrap.isIdentifiedID ? i : t;
                this.persistence.set_property(rr, e.bootstrap.isIdentifiedID ? Tr : kr), this.register({
                    distinct_id: t,
                    $device_id: s
                });
            }
        }
        if (g) this.register_once({
            distinct_id: dr,
            $device_id: null
        }, "");
        else if (!this.get_distinct_id()) {
            const t = this.config.get_device_id(Zr());
            this.register_once({
                distinct_id: t,
                $device_id: t
            }, ""), this.persistence.set_property(rr, kr);
        }
        return Hr(t, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), {
            passive: !1
        }), Hr(t, "pageshow", (t) => {
            if (this.Sh = !1, !this.xh) {
                var i;
                if (t.persisted && this.persistence) {
                    const t = this.persistence.get_property(mn),
                        i = this.persistence.get_property(rr);
                    this.persistence.load(), this.Uh() || t === this.persistence.get_property("distinct_id") && i === this.persistence.get_property("$user_state") || this.Wh();
                }
                null === (i = this.jh) || void 0 === i || i.resume();
            }
        }), e.segment ? _l(this, () => this.Vh()) : this.Vh(), T(this.config._onCapture) && this.config._onCapture !== kh && (js.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", (t) => this.config._onCapture(t.event, t))), this.config.ip && js.warn("The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or \"Discard IP data\" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information."), this.config.disableDeviceModel || function() {
            return zu.apply(this, arguments);
        }().then((t) => {
            t && this.register({
                [bn]: t
            });
        }).catch(kh), this;
    }
    Gh(t) {
        const i = t;
        return C(i.name) && T(i.setup);
    }
    Qh(t, i) {
        var e = this;
        this.Gh(t) ? i.push(Y(function*() {
            try {
                yield t.setup(e.Jh());
            } catch (e) {
                js.error(`Failed to set up extension "${t.name}"`, e);
                try {
                    var i;
                    yield null === (i = t.dispose) || void 0 === i ? void 0 : i.call(t);
                } catch (i) {
                    js.error(`Failed to dispose extension "${t.name}"`, i);
                }
            }
        })) : this.hh.push(t);
    }
    Bh() {
        var t, e, s, n = this;
        const r = null !== (t = null === (e = this.config.__extensionClasses) || void 0 === e ? void 0 : e.featureFlags) && void 0 !== t ? t : null === (s = i.__defaultExtensionClasses) || void 0 === s ? void 0 : s.featureFlags;
        var o, l, a;
        if (r)
            if (this.featureFlags && this.featureFlags instanceof r || (null === (o = this.Zh) || void 0 === o || o.call(this), this.Zh = void 0, this.featureFlags = new r(this)), T(this.featureFlags.onReloading) && T(this.featureFlags.setup)) {
                if (!this.Zh) {
                    this.Zh = this.featureFlags.onReloading(() => {
                        this.dr.emit("featureFlagsReloading", !0);
                    });
                    const t = this.featureFlags;
                    Y(function*() {
                        try {
                            yield t.setup(n.Jh());
                        } catch (i) {
                            js.error("Failed to set up feature flags", i);
                            const e = n.Zh;
                            n.Zh = void 0;
                            try {
                                null == e || e();
                            } catch (t) {
                                js.error("Failed to unsubscribe feature flag reloading", t);
                            }
                            try {
                                yield t.dispose();
                            } catch (t) {
                                js.error("Failed to dispose feature flags", t);
                            }
                        }
                    })();
                }
            } else null === (l = (a = this.featureFlags).initialize) || void 0 === l || l.call(a);
    }
    Hh(t) {
        const e = performance.now(),
            s = wi(wi({}, i.__defaultExtensionClasses), this.config.__extensionClasses),
            n = [];
        var r, o, l, a, u, h, c, d;
        s.exceptions && this.hh.push(this.exceptions = null !== (r = this.exceptions) && void 0 !== r ? r : new s.exceptions(this)), s.historyAutocapture && this.hh.push(this.historyAutocapture = new s.historyAutocapture(this)), s.tracingHeaders && this.hh.push(this.tracingHeaders = new s.tracingHeaders(this)), s.siteApps && this.hh.push(this.siteApps = new s.siteApps(this)), s.sessionRecording && !t && this.hh.push(this.sessionRecording = new s.sessionRecording(this)), this.config.disable_scroll_properties || n.push(() => {
            this.scrollManager.startMeasuringScrollPosition();
        }), s.autocapture && this.Qh(this.autocapture = new s.autocapture(this), n), s.surveys && this.Qh(this.surveys = null !== (o = this.surveys) && void 0 !== o ? o : new s.surveys(this), n), s.logs && this.Qh(this.logs = null !== (l = this.logs) && void 0 !== l ? l : new s.logs(this), n), s.metrics && this.hh.push(this.metrics = null !== (a = this.metrics) && void 0 !== a ? a : new s.metrics(this)), s.conversations && this.hh.push(this.conversations = null !== (u = this.conversations) && void 0 !== u ? u : new s.conversations(this)), s.productTours && this.hh.push(this.productTours = new s.productTours(this)), s.heatmaps && this.hh.push(this.heatmaps = new s.heatmaps(this)), s.webVitalsAutocapture && this.hh.push(this.webVitalsAutocapture = new s.webVitalsAutocapture(this)), s.exceptionObserver && this.hh.push(this.exceptionObserver = new s.exceptionObserver(this)), s.deadClicksAutocapture && this.hh.push(this.deadClicksAutocapture = new s.deadClicksAutocapture(this, fl)), s.toolbar && this.hh.push(this.toolbar = null !== (h = this.toolbar) && void 0 !== h ? h : new s.toolbar(this)), s.experiments && this.hh.push(this.experiments = null !== (c = this.experiments) && void 0 !== c ? c : new s.experiments(this)), s.webMCP && this.hh.push(this.webMCP = null !== (d = this.webMCP) && void 0 !== d ? d : new s.webMCP(this)), this.hh.forEach((t) => {
            t.initialize && n.push(() => {
                var i;
                null === (i = t.initialize) || void 0 === i || i.call(t);
            });
        }), n.push(() => {
            if (this.Kh) {
                const t = this.Kh;
                this.Kh = void 0, this.hh.forEach((i) => {
                    var e;
                    return null === (e = i.onRemoteConfig) || void 0 === e ? void 0 : e.call(i, t);
                });
            }
        }), this.Yh(n, e);
    }
    Yh(t, i) {
        for (; t.length > 0;) {
            if (this.config.__preview_deferred_init_extensions && performance.now() - i >= 30 && t.length > 0) return void(this.zh = setTimeout(() => {
                this.zh = void 0, this.Yh(t, i);
            }, 0));
            const e = t.shift();
            if (e) try {
                e();
            } catch (t) {
                js.error("Error initializing extension:", t);
            }
        }
        const e = Math.round(performance.now() - i);
        this.register_for_session({
            [fr]: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous",
            [pr]: e
        }), this.config.__preview_deferred_init_extensions && js.info(`PostHog extensions initialized (${e}ms)`);
    }
    tc(t) {
        if (!s || !s.body) return js.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout(() => {
            this.tc(t);
        }, 500);
        if (this.config.__preview_deferred_init_extensions && (this.Kh = t), this.vr = t, this.compression = void 0, t.ok) {
            var i;
            const e = t.config;
            e.supportedCompression && !this.config.disable_compression && (this.compression = m(e.supportedCompression, aa.GZipJS) ? aa.GZipJS : m(e.supportedCompression, aa.Base64) ? aa.Base64 : void 0), (null === (i = e.analytics) || void 0 === i ? void 0 : i.endpoint) && (this.analyticsDefaultEndpoint = e.analytics.endpoint);
        }
        this.set_config({
            person_profiles: this.Rh ? this.Rh : Pr
        }), this.dr.emit("extensionsRemoteConfig", t), this.hh.forEach((i) => {
            var e;
            return null === (e = i.onRemoteConfig) || void 0 === e ? void 0 : e.call(i, t);
        });
    }
    Vh() {
        try {
            this.config.loaded(this);
        } catch (t) {
            js.critical("`loaded` function failed", t);
        }
        if (this.Xh(), this.config.internal_or_test_user_hostname && (null == n ? void 0 : n.hostname)) {
            const t = n.hostname,
                i = this.config.internal_or_test_user_hostname;
            ("string" == typeof i ? t === i : i.test(t)) && this.setInternalOrTestUser();
        }
        this.config.capture_pageview && setTimeout(() => {
            (this.consent.isOptedIn() || this.fh()) && this.ed();
        }, 1), this.nd = new Ta(this), this.nd.load();
    }
    Xh() {
        var t;
        this.is_capturing() && this.config.request_batching && (null === (t = this.Lh) || void 0 === t || t.enable());
    }
    _dom_loaded() {
        this.is_capturing() && Fr(this.__request_queue, (t) => this.Nh(t)), this.__request_queue = [], this.Xh();
    }
    _handle_unload() {
        var t, i, e, s, n, r;
        this.Sh = !0, null === (t = this.surveys) || void 0 === t || null === (i = t.handlePageUnload) || void 0 === i || i.call(t), null === (e = this.metrics) || void 0 === e || e.flush("sendBeacon"), this.config.request_batching ? (this.sd() && this.capture(Cr), null === (s = this.logs) || void 0 === s || s.flushLogs("sendBeacon"), null === (n = this.Lh) || void 0 === n || n.unload(), null === (r = this.jh) || void 0 === r || r.unload()) : this.sd() && this.capture(Cr, null, {
            transport: "sendBeacon"
        });
    }
    _send_request(t) {
        Ou(this, t);
    }
    Nh(t, i) {
        this.jh ? this.jh.retriableRequest(t, i) : this._send_request(i ? wi(wi({}, t), {}, {
            transport: i
        }) : t);
    }
    _execute_array(t) {
        Eh++;
        try {
            let i;
            const e = [],
                s = [],
                n = [];
            Fr(t, (t) => {
                if (t)
                    if (i = t[0], k(i)) n.push(t);
                    else if (T(t)) try {
                    t.call(this);
                } catch (i) {
                    js.error("Error executing queued PostHog call", t, i);
                }
                else k(t) && "alias" === i ? e.push(t) : k(t) && -1 !== i.indexOf("capture") && T(this[i]) ? n.push(t) : s.push(t);
            });
            const r = function(t, i) {
                Fr(t, function(t) {
                    try {
                        if (k(t[0])) {
                            let e = i;
                            Mr(t, function(t) {
                                e = e[t[0]].apply(e, t.slice(1));
                            });
                        } else i[t[0]].apply(i, t.slice(1));
                    } catch (i) {
                        js.error("Error executing queued PostHog call", t, i);
                    }
                });
            };
            r(e, this), r(s, this), r(n, this);
        } finally {
            Eh--;
        }
    }
    push(t) {
        if (Eh > 0 && k(t) && C(t[0])) {
            const e = i.prototype[t[0]];
            return void(T(e) && e.apply(this, t.slice(1)));
        }
        this._execute_array([t]);
    }
    get rd() {
        return {
            property: Sn,
            persistenceKey: xn,
            cookieName: "_fbc",
            pattern: Mh,
            register: (t, i) => {
                var e;
                return null === (e = this.persistence) || void 0 === e ? void 0 : e.register({
                    [xn]: {
                        value: t,
                        delivered: i
                    }
                });
            },
            unregister: () => {
                var t;
                return null === (t = this.persistence) || void 0 === t ? void 0 : t.unregister(xn);
            }
        };
    }
    get od() {
        return {
            property: En,
            persistenceKey: kn,
            cookieName: "_fbp",
            pattern: Dh,
            register: (t, i) => {
                var e;
                return null === (e = this.persistence) || void 0 === e ? void 0 : e.register({
                    [kn]: {
                        value: t,
                        delivered: i
                    }
                });
            },
            unregister: () => {
                var t;
                return null === (t = this.persistence) || void 0 === t ? void 0 : t.unregister(kn);
            }
        };
    }
    ad(t) {
        var i;
        const e = null === (i = this.persistence) || void 0 === i ? void 0 : i.get_property(t.persistenceKey);
        return C(e) && t.pattern.test(e) ? {
            value: e,
            delivered: !1
        } : P(e) && C(e.value) && t.pattern.test(e.value) ? {
            value: e.value,
            delivered: !0 === e.delivered
        } : void 0;
    }
    ld(t, i, e) {
        return i === (null == e ? void 0 : e.value) ? {
            value: i,
            pending: !e.delivered
        } : (t.register(i, !1), {
            value: i,
            pending: !0
        });
    }
    ud(t) {
        if (!this.config.save_campaign_params || this.fh()) return;
        const i = Wr(t.cookieName);
        return C(i) && t.pattern.test(i) ? i : void 0;
    }
    hd(t, i, e, s) {
        if (!this.persistence) return;
        const n = this.rd;
        this.persistence.refreshMetaIdentifiers();
        const r = this.ad(n);
        if (s) return void n.unregister();
        if (e) return C(i) && Mh.test(i) ? this.ld(n, i, r) : void n.unregister();
        const o = C(t) && Fh.test(t) ? t : void 0,
            l = this.ud(n);
        return l && ((t, i, e) => {
            const s = t.split(".");
            if (i) return s[3] === i;
            if (!e) return !0;
            const n = e.value.split(".");
            return s[3] === n[3] || Number(s[2]) > Number(n[2]);
        })(l, o, r) ? this.ld(n, l, r) : o ? (null == r ? void 0 : r.value.split(".")[3]) === o ? {
            value: r.value,
            pending: !r.delivered
        } : this.ld(n, `fb.1.${Date.now()}.${o}`, r) : r ? {
            value: r.value,
            pending: !r.delivered
        } : void 0;
    }
    dd(t, i, e) {
        if (!this.persistence) return;
        const s = this.od;
        this.persistence.refreshMetaIdentifiers();
        const n = this.ad(s);
        if (e) return void s.unregister();
        if (i) return C(t) && Dh.test(t) ? this.ld(s, t, n) : void s.unregister();
        const r = this.ud(s);
        return r ? this.ld(s, r, n) : n ? {
            value: n.value,
            pending: !n.delivered
        } : void 0;
    }
    vd(t, i) {
        if (!this.persistence) return;
        this.persistence.refreshMetaIdentifiers();
        const e = this.ad(t);
        (null == e ? void 0 : e.value) !== i || e.delivered || t.register(i, !0);
    }
    capture(t, i, e) {
        var s, n, r;
        if (!(this.__loaded && this.persistence && this.sessionPersistence && this.Lh)) return void js.uninitializedWarning("posthog.capture");
        if (!this.is_capturing()) return void js.info(`Event "${t}" was not captured because capturing is disabled (opted out or consent pending).`);
        if (R(t) || !C(t)) return void js.error("No event name provided to posthog.capture");
        if (this.yh(), "$snapshot" === t && this.fh()) return;
        const o = !this.config.opt_out_useragent_filter && this._is_bot();
        if (o && !this.config.__preview_capture_bot_pageviews) return void js.info(`Event "${t}" was not captured because the user agent looks like a bot. Set \`opt_out_useragent_filter: true\` to capture it.`);
        const l = (null == e ? void 0 : e.skip_client_rate_limiting) ? void 0 : this.rateLimiter.clientRateLimitContext();
        if (null == l ? void 0 : l.isRateLimited) return void js.critical("This capture call is ignored due to client rate limiting.");
        let a;
        (null == i ? void 0 : i.$current_url) && !C(null == i ? void 0 : i.$current_url) && (js.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."), null == i || delete i.$current_url), "$exception" !== t || (null == e ? void 0 : e.fd) || js.warn("Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically."), this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && (a = this.sessionPersistence.update_campaign_params()), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
        const u = new Date(),
            h = (null == e ? void 0 : e.timestamp) || u,
            c = ci(null == e ? void 0 : e.uuid, Zr);
        let d = {
            uuid: c,
            event: t,
            properties: this.calculateEventProperties(t, i || {}, h, c)
        };
        "$pageview" === t && this.config.__preview_capture_bot_pageviews && o && (d.event = "$bot_pageview", d.properties.$browser_type = "bot"), l && (d.properties.$lib_rate_limit_remaining_tokens = l.remainingTokens);
        const v = "$feature_flag_called" === t && !1 === d.properties.$feature_flag_has_experiment && !0 === this.get_property("$minimal_flag_called_events");
        (null == e ? void 0 : e.$set) && !v && (d.$set = null == e ? void 0 : e.$set);
        const f = P(null == i ? void 0 : i.$set) ? i.$set : void 0,
            p = k(null == i ? void 0 : i.$unset) ? i.$unset : [],
            g = (null == e ? void 0 : e.$unset) || [],
            _ = (t) => {
                var i;
                const s = !!(null == e ? void 0 : e.$set) && t in e.$set;
                return {
                    hasProvided: s || !!f && t in f,
                    provided: s ? null == e || null === (i = e.$set) || void 0 === i ? void 0 : i[t] : null == f ? void 0 : f[t],
                    unset: -1 !== p.indexOf(t) || -1 !== g.indexOf(t)
                };
            },
            m = _(Sn),
            y = _(En),
            b = [{
                channel: this.rd,
                hasProvided: m.hasProvided,
                update: this.hd(null == a ? void 0 : a.fbclid, m.provided, m.hasProvided, m.unset)
            }, {
                channel: this.od,
                hasProvided: y.hasProvided,
                update: this.dd(y.provided, y.hasProvided, y.unset)
            }];
        for (const {
                channel: t,
                hasProvided: i,
                update: e
            } of b) e && !0 === d.properties.$process_person_profile && e.pending && !i && !v && (d.$set = wi({
            [t.property]: e.value
        }, d.$set));
        const w = null == e ? void 0 : e.$unset;
        w && (d.$unset = w);
        const S = v ? void 0 : this.pd(null == e ? void 0 : e.$set_once, t !== Ir, t === Ar);
        if (S && (d.$set_once = S), (null == e ? void 0 : e._noTruncate) || (x = this.config.properties_string_max_length, d = function(t, i) {
                const e = new Set();
                return function t(s, n) {
                    if (s !== Object(s)) return i ? i(s) : s;
                    if (e.has(s)) return;
                    let r;
                    if (e.add(s), k(s)) r = [], Fr(s, (i) => {
                        r.push(t(i));
                    });
                    else {
                        const i = {};
                        Mr(z(s) ? Ur(s) : s, (s, n) => {
                            e.has(s) || (i[n] = t(s, n));
                        }), r = i;
                    }
                    return r;
                }(t);
            }(d, (t) => C(t) ? t.slice(0, x) : t)), d.timestamp = h, R(null == e ? void 0 : e.timestamp) || (d.properties.$event_time_override_provided = !0, d.properties.$event_time_override_system_time = u), v && (d.properties = ((t, i = []) => {
                const e = {},
                    s = (i) => {
                        void 0 !== t[i] && (e[i] = t[i]);
                    };
                return ge.forEach(s), i.forEach(s), e;
            })(d.properties, Nh)), t === _a.DISMISSED || t === _a.SENT) {
            const e = null == i ? void 0 : i[ma.SURVEY_ID],
                s = null == i ? void 0 : i[ma.SURVEY_ITERATION];
            eh({
                id: e,
                current_iteration: s
            }), d.$set = wi(wi({}, d.$set), {}, {
                [Hu({
                    id: e,
                    current_iteration: s
                }, t === _a.SENT ? "responded" : "dismissed")]: !0
            });
        } else t === _a.SHOWN && (d.$set = wi(wi({}, d.$set), {}, {
            [ma.SURVEY_LAST_SEEN_DATE]: new Date().toISOString()
        }));
        var x;
        if (t === $a.SHOWN) {
            const t = null == i ? void 0 : i[Sa.TOUR_TYPE];
            t && (d.$set = wi(wi({}, d.$set), {}, {
                [`${Sa.TOUR_LAST_SEEN_DATE}/${t}`]: new Date().toISOString()
            }));
        }
        const E = wi(wi({}, d.properties.$set), d.$set);
        if (O(E) || this.setPersonPropertiesForFlags(E), !F(this.config.before_send)) {
            const t = this.Fs(d);
            if (!t) return;
            d = t, d.uuid = ci(d.uuid, Zr);
        }
        this.sessionRecording && !this.Eh && Ih(t) && (this.Eh = !0, setTimeout(() => this.Eh = !1, 3e4));
        const T = b.filter(({
            channel: t,
            update: i
        }) => {
            var e, s, n;
            const r = null !== (e = null === (s = d.$set) || void 0 === s ? void 0 : s[t.property]) && void 0 !== e ? e : P(null === (n = d.properties) || void 0 === n ? void 0 : n.$set) ? d.properties.$set[t.property] : void 0;
            return (null == i ? void 0 : i.pending) && r === i.value;
        });
        this.dr.emit("eventCaptured", d);
        const A = null !== (s = null == e ? void 0 : e._url) && void 0 !== s ? s : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
            I = "recordings" === (null == e ? void 0 : e._batchKey) || /\/s\/(?:\?|$)/.test(A),
            M = wi(wi(wi({
                method: "POST",
                url: A,
                data: d,
                compression: "best-available",
                preferSyncCompression: null == e ? void 0 : e.send_instantly,
                timestampMode: I ? "body" : "capture-body",
                batchKey: null == e ? void 0 : e._batchKey
            }, I && (null === (n = d.properties) || void 0 === n ? void 0 : n.$session_id) ? {
                batchGroup: d.properties.$session_id + (d.properties.$window_id ? `-${d.properties.$window_id}` : "")
            } : {}), (null == e ? void 0 : e.transport) ? {
                transport: e.transport
            } : {}), T.length ? {
                fireCallbackOnDrop: !0,
                callback: (t) => {
                    if (t.statusCode >= 200 && 300 > t.statusCode)
                        for (const {
                                channel: t,
                                update: i
                            } of T) this.vd(t, i.value);
                }
            } : {});
        if (!this.config.request_batching || e && !(null == e ? void 0 : e._batchKey) || (null == e ? void 0 : e.send_instantly)) {
            var D;
            let t;
            !M.transport && !M.callback && O(null !== (D = this.config.request_headers) && void 0 !== D ? D : {}) && this.Sh && (t = "sendBeacon"), this.Nh(M, t);
        } else this.Lh.enqueue(M);
        return null === (r = this.featureFlags) || void 0 === r || r.sendFlagCallsPendingCapture(), d;
    }
    _addCaptureHook(t) {
        return this.on("eventCaptured", (i) => t(i.event, i));
    }
    getExtension(t) {
        var i;
        return null === (i = this.gd) || void 0 === i ? void 0 : i.getExtension(t);
    }
    Jh() {
        var t;
        return null !== (t = this.gd) && void 0 !== t ? t : this.gd = new Sh(this);
    }
    mr(t) {
        this.Ih.push(t);
        let i = !0;
        return () => {
            if (!i) return;
            i = !1;
            const e = this.Ih.indexOf(t); -
            1 !== e && this.Ih.splice(e, 1);
        };
    }
    Uh(t = !0) {
        var i;
        return !!(null === (i = this.persistence) || void 0 === i ? void 0 : i.consumeCookieIdentityChange()) && (this.Wh(t), !0);
    }
    Wh(t = !0) {
        var i, e, s;
        this.Ph = null, "anonymous" === (null === (i = this.persistence) || void 0 === i ? void 0 : i.get_property("$user_state")) && (null === (s = this.sessionPersistence) || void 0 === s || s.clear(), this.Ch.clear(), this.md()), null === (e = this.featureFlags) || void 0 === e || e.reset(), t && this.reloadFeatureFlags();
    }
    calculateEventProperties(i, e, r, o, l) {
        if (r = r || new Date(), !this.persistence || !this.sessionPersistence) return e;
        this.yh(), this.persistence.syncCookieProperties(), this.Uh();
        const a = l ? void 0 : this.persistence.remove_event_timer(i);
        let h = wi({}, e);
        if (h.token = this.config.token, h.$config_defaults = "latest" === this.config.defaults ? jh : this.config.defaults, this.fh() && (h[vr] = !0), "$snapshot" === i) {
            const t = wi(wi({}, this.persistence.properties()), this.sessionPersistence.properties());
            return h.distinct_id = t.distinct_id, (!C(h.distinct_id) && !M(h.distinct_id) || A(h.distinct_id)) && js.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), h;
        }
        const c = function(i, e, s, r = !1) {
            var o, l, a, h;
            if (!u) return {};
            const c = i ? [...Ml, ...e || []] : [],
                [d, f] = Qt(u),
                [p, g] = function(t) {
                    for (let i = 0; si.length > i; i++) {
                        const [e, s, n] = si[i], r = t.match(e);
                        if (r) {
                            const i = n && t.match(n) || r;
                            return [s, (null == i ? void 0 : i[1]) || ""];
                        }
                    }
                    return ["", ""];
                }(u),
                _ = function() {
                    const t = "u" > typeof navigator ? navigator : void 0;
                    return (null == t ? void 0 : t.brave) ? {
                        brave: !0
                    } : {};
                }(),
                m = {};
            R(s) || (m.detectGoogleSearchApp = s);
            const y = {},
                b = null === (o = navigator) || void 0 === o || null === (o = o.userAgentData) || void 0 === o ? void 0 : o.platform,
                w = null === (l = navigator) || void 0 === l ? void 0 : l.maxTouchPoints,
                S = null == t || null === (a = t.screen) || void 0 === a ? void 0 : a.width,
                x = null == t || null === (h = t.screen) || void 0 === h ? void 0 : h.height,
                E = null == t ? void 0 : t.devicePixelRatio;
            R(b) || (y.userAgentDataPlatform = b), R(w) || (y.maxTouchPoints = w), R(S) || (y.screenWidth = S), R(x) || (y.screenHeight = x), R(E) || (y.devicePixelRatio = E);
            const k = Dr(jr({
                $os: d,
                $os_version: f,
                $browser: Yt(u, navigator.vendor, _, m),
                $webview_app: p,
                $webview_app_version: g,
                $device: ti(u),
                $device_type: ii(u, y),
                $timezone: kl(),
                $timezone_offset: Kl()
            }), {
                $current_url: Il(r ? vi(null == n ? void 0 : n.href) : null == n ? void 0 : n.href, c, Nl),
                $host: null == n ? void 0 : n.host,
                $pathname: null == n ? void 0 : n.pathname,
                $raw_user_agent: u.length > 1e3 ? u.substring(0, 997) + "..." : u,
                $browser_version: Xt(u, navigator.vendor, _, m),
                $browser_language: zl(),
                $browser_language_prefix: Hl(),
                $screen_height: null == t ? void 0 : t.screen.height,
                $screen_width: null == t ? void 0 : t.screen.width,
                $viewport_height: null == t ? void 0 : t.innerHeight,
                $viewport_width: null == t ? void 0 : t.innerWidth,
                $lib: v.LIB_NAME,
                $lib_version: v.LIB_VERSION,
                $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
                $time: Date.now() / 1e3
            });
            return v.SDK_DIST_CHANNEL && (k.$sdk_dist_channel = v.SDK_DIST_CHANNEL), k;
        }(this.config.mask_personal_data_properties, this.config.custom_personal_data_properties, this.config.detect_google_search_app, this.config.disable_capture_url_hashes);
        if (this.sessionManager) {
            const {
                sessionId: t,
                windowId: i
            } = this.sessionManager.checkAndGetSessionAndWindowId(l, r.getTime(), !0);
            h.$session_id = t, h.$window_id = i;
        }
        this.sessionPropsManager && Dr(h, this.sessionPropsManager.getSessionProps());
        try {
            var d;
            if (this.sessionRecording) {
                const t = this.sessionRecording.sdkDebugProperties,
                    e = !this.Eh && Ih(i);
                for (const i in t)(e || m(Ch, i)) && (h[i] = t[i]);
            }
            h.$sdk_debug_retry_queue_size = null === (d = this.jh) || void 0 === d ? void 0 : d.length;
        } catch (t) {
            h.$sdk_debug_error_capturing_properties = String(t);
        }
        let f;
        if (this.requestRouter.region === Ju && (h.$lib_custom_api_host = this.config.api_host), f = "$pageview" !== i || l ? "$pageleave" !== i || l ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(r) : this.pageViewManager.doPageView(r, o), h = Dr(h, f), "$pageview" === i && s && (h.title = s.title), !R(a)) {
            const t = r.getTime() - a;
            h.$duration = parseFloat((t / 1e3).toFixed(3));
        }
        u && this.config.opt_out_useragent_filter && (h.$browser_type = this._is_bot() ? "bot" : "browser");
        const p = this.persistence.properties(),
            g = this.sessionPersistence.properties(),
            _ = h.$groups,
            y = p.$groups;
        P(_) && !O(_) && (h.$groups = wi(wi({}, P(y) ? y : {}), _)), Mr(["$referrer", "$referring_domain"], (t) => {
            t in p && delete g[t];
        });
        const b = {};
        if (this.Ih.length > 0)
            for (const t of this.Ih.slice()) try {
                Dr(b, t());
            } catch (t) {
                js.error("Failed to produce browser extension event properties", t);
            }
        h = Dr({}, c, p, g, wi(wi({}, b), h)), h.$is_identified = this._isIdentified(), k(this.config.property_denylist) ? Mr(this.config.property_denylist, function(t) {
            delete h[t];
        }) : js.error(Rh + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
        const w = this.config.sanitize_properties;
        w && (js.error(Oh), h = w(h, i));
        const S = this.yd();
        return h.$process_person_profile = S, S && !l && this.bd("_calculate_event_properties"), h;
    }
    pd(t, i = !0, e = !1) {
        var s;
        if (!this.persistence || !this.yd()) return t;
        if (this.$h && !e) return t;
        const n = this.persistence.get_initial_props(),
            r = null === (s = this.sessionPropsManager) || void 0 === s ? void 0 : s.getSetOnceProps();
        let o = Dr({}, n, r || {}, t || {});
        const l = this.config.sanitize_properties;
        return l && (js.error(Oh), o = l(o, "$set_once")), i && (this.$h = !0), O(o) ? void 0 : o;
    }
    register(t, i) {
        var e;
        null === (e = this.persistence) || void 0 === e || e.register(t, i);
    }
    register_once(t, i, e) {
        var s;
        null === (s = this.persistence) || void 0 === s || s.register_once(t, i, e);
    }
    register_for_session(t) {
        var i, e;
        null === (i = this.persistence) || void 0 === i || i.syncCookieProperties(), this.Uh(), null === (e = this.sessionPersistence) || void 0 === e || e.register(t), Object.keys(t).forEach((t) => this.Ch.add(t)), this.md();
    }
    unregister(t) {
        var i;
        null === (i = this.persistence) || void 0 === i || i.unregister(t);
    }
    unregister_for_session(t) {
        var i;
        null === (i = this.sessionPersistence) || void 0 === i || i.unregister(t), this.Ch.delete(t), this.md();
    }
    _d(t, i) {
        this.register({
            [t]: i
        });
    }
    qh() {
        this.Ch.forEach((t) => {
            var i;
            null === (i = this.sessionPersistence) || void 0 === i || i.unregister(t);
        }), this.Ch.clear(), this.md();
    }
    md() {
        var t;
        if (!this.Th) return;
        if ("memory" === this.config.persistence || (null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.fi) || !bo.Ot()) return void bo.Dt(this.Th);
        const i = [];
        this.Ch.forEach((t) => i.push(t)), i.length > 0 ? bo.$t(this.Th, i) : bo.Dt(this.Th);
    }
    getFeatureFlag(t, i) {
        var e;
        return null === (e = this.featureFlags) || void 0 === e ? void 0 : e.getFeatureFlag(t, i);
    }
    getFeatureFlagPayload(t) {
        var i;
        return null === (i = this.featureFlags) || void 0 === i ? void 0 : i.getFeatureFlagPayload(t);
    }
    getFeatureFlagResult(t, i) {
        var e;
        return null === (e = this.featureFlags) || void 0 === e ? void 0 : e.getFeatureFlagResult(t, i);
    }
    getAllFeatureFlags() {
        var t, i;
        return null !== (t = null === (i = this.featureFlags) || void 0 === i ? void 0 : i.getAllFeatureFlags()) && void 0 !== t ? t : [];
    }
    isFeatureEnabled(t, i) {
        var e, s;
        return null !== (e = null === (s = this.featureFlags) || void 0 === s ? void 0 : s.isFeatureEnabled(t, i)) && void 0 !== e ? e : null == i ? void 0 : i.defaultValue;
    }
    reloadFeatureFlags() {
        var t;
        null === (t = this.featureFlags) || void 0 === t || t.reloadFeatureFlags();
    }
    updateFlags(t, i, e) {
        var s;
        null === (s = this.featureFlags) || void 0 === s || s.updateFlags(t, i, e);
    }
    updateEarlyAccessFeatureEnrollment(t, i, e) {
        var s;
        null === (s = this.featureFlags) || void 0 === s || s.updateEarlyAccessFeatureEnrollment(t, i, e);
    }
    getEarlyAccessFeatures(t, i = !1, e) {
        var s;
        return null === (s = this.featureFlags) || void 0 === s ? void 0 : s.getEarlyAccessFeatures(t, i, e);
    }
    on(t, i) {
        return this.dr.on(t, i);
    }
    onFeatureFlags(t) {
        return this.featureFlags ? this.featureFlags.onFeatureFlags(t) : (t([], {}, {
            errorsLoading: !0
        }), () => {});
    }
    onSurveysLoaded(t) {
        return this.surveys ? this.surveys.onSurveysLoaded(t) : (t([], {
            isLoaded: !1,
            error: Ph
        }), () => {});
    }
    onSessionId(t) {
        var i, e;
        return null !== (i = null === (e = this.sessionManager) || void 0 === e ? void 0 : e.onSessionId(t)) && void 0 !== i ? i : () => {};
    }
    getSurveys(t, i = !1) {
        this.surveys ? this.surveys.getSurveys(t, i) : t([], {
            isLoaded: !1,
            error: Ph
        });
    }
    getActiveMatchingSurveys(t, i = !1) {
        this.surveys ? this.surveys.getActiveMatchingSurveys(t, i) : t([], {
            isLoaded: !1,
            error: Ph
        });
    }
    onActiveMatchingSurveysChanged(t) {
        return this.surveys ? this.surveys.onActiveMatchingSurveysChanged(t) : (t([], {
            isLoaded: !1,
            error: Ph
        }), () => {});
    }
    renderSurvey(t, i) {
        var e;
        null === (e = this.surveys) || void 0 === e || e.renderSurvey(t, i);
    }
    displaySurvey(t, i = nh) {
        var e;
        null === (e = this.surveys) || void 0 === e || e.displaySurvey(t, i);
    }
    cancelPendingSurvey(t) {
        var i;
        null === (i = this.surveys) || void 0 === i || i.cancelPendingSurvey(t);
    }
    canRenderSurvey(t) {
        var i, e;
        return null !== (i = null === (e = this.surveys) || void 0 === e ? void 0 : e.canRenderSurvey(t)) && void 0 !== i ? i : {
            visible: !1,
            disabledReason: Ph
        };
    }
    canRenderSurveyAsync(t, i = !1) {
        var e, s;
        return null !== (e = null === (s = this.surveys) || void 0 === s ? void 0 : s.canRenderSurveyAsync(t, i)) && void 0 !== e ? e : Promise.resolve({
            visible: !1,
            disabledReason: Ph
        });
    }
    wd(t) {
        return !t || A(t) ? (js.critical("Unique user id has not been set in posthog.identify"), !1) : "$posthog_cookieless" === t ? (js.critical(`The string "${t}" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.`), !1) : !["distinct_id", "distinctid"].includes(t.toLowerCase()) && !["undefined", "null"].includes(t.toLowerCase()) || (js.critical(`The string "${t}" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.`), !1);
    }
    identify(t, i, e) {
        if (!this.__loaded || !this.persistence) return js.uninitializedWarning("posthog.identify");
        if (M(t) && (t = t.toString(), js.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), !this.wd(t)) return;
        if (!this.bd("posthog.identify")) return;
        this.yh();
        const s = this.get_distinct_id(),
            n = this.persistence.syncCookieProperties() && this.get_distinct_id() !== s,
            r = this.Uh(!1),
            o = this.persistence.Iu();
        let l = !1;
        try {
            const s = this.get_distinct_id();
            this.register({
                $user_id: t
            }), this.get_property("$device_id") || this.register_once({
                $had_persisted_distinct_id: !0,
                $device_id: s
            }, ""), t !== s && t !== this.get_property("__alias") && (this.unregister(wn), this.register({
                distinct_id: t
            }));
            const o = (this.persistence.get_property("$user_state") || "anonymous") === kr,
                u = t !== s,
                h = !u && o;
            if (u && o) {
                var a;
                const n = this.config.reuseAnonymousId ? {
                    distinct_id: t
                } : {
                    distinct_id: t,
                    $anon_distinct_id: s
                };
                this.persistence.set_property(rr, Tr), this.setPersonPropertiesForFlags({
                    $set: i || {},
                    $set_once: e || {}
                }, !1), this.config.cookieWinsOnConflict && this.persistence.Eu(), this.capture("$identify", n, {
                    $set: i || {},
                    $set_once: e || {}
                }) && (this.Ph = Yu(t, i, e)), null === (a = this.featureFlags) || void 0 === a || a.setAnonymousDistinctId(this.config.reuseAnonymousId ? void 0 : s);
            } else if (h) {
                this.persistence.set_property(rr, Tr);
                const s = i || {},
                    n = e || {};
                this.setPersonPropertiesForFlags({
                    $set: s,
                    $set_once: n
                }, !1), this.config.cookieWinsOnConflict && this.persistence.Eu(), this.capture("$set", {
                    $set: s,
                    $set_once: n
                }) && (this.Ph = Yu(t, i, e));
            } else(i || e) && this.setPersonProperties(i, e);
            u || n || r ? (this.reloadFeatureFlags(), this.featureFlags ? this.featureFlags.resetFlagCallReported() : this.unregister(nn)) : h && (i || e) && this.reloadFeatureFlags(), l = !0;
        } finally {
            o && this.persistence.Ru(l);
        }
    }
    setPersonProperties(t, i) {
        if (!t && !i) return;
        if (!this.bd("posthog.setPersonProperties")) return;
        const e = Yu(this.get_distinct_id(), t, i);
        this.Ph !== e ? (this.setPersonPropertiesForFlags({
            $set: t || {},
            $set_once: i || {}
        }, !0), this.capture("$set", {
            $set: t || {},
            $set_once: i || {}
        }) && (this.Ph = e)) : js.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.");
    }
    unsetPersonProperties(t) {
        var i;
        const e = (k(t) ? t : [t]).filter((t) => C(t) && t.length > 0);
        0 !== e.length && this.bd("posthog.unsetPersonProperties") && (null === (i = this.featureFlags) || void 0 === i || i.unsetPersonPropertiesForFlags(e, !0), this.capture("$set", {
            $unset: e
        }), this.Ph = null);
    }
    group(t, i, e) {
        var s;
        if (!t || !i) return void js.error("posthog.group requires a group type and group key");
        null === (s = this.persistence) || void 0 === s || s.syncCookieProperties(), this.Uh();
        const n = this.getGroups(),
            r = n[t] !== i;
        if (r && this.resetGroupPropertiesForFlags(t), this.register({
                $groups: wi(wi({}, n), {}, {
                    [t]: i
                })
            }), (r || e) && this.yd()) {
            const s = {
                $group_type: t,
                $group_key: i
            };
            e && (s.$group_set = e), this.capture(Ir, s);
        }
        e && this.setGroupPropertiesForFlags({
            [t]: e
        }), r && !e && this.reloadFeatureFlags();
    }
    resetGroups() {
        this.register({
            $groups: {}
        }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags();
    }
    setPersonPropertiesForFlags(t, i = !0) {
        var e;
        null === (e = this.featureFlags) || void 0 === e || e.setPersonPropertiesForFlags(t, i);
    }
    resetPersonPropertiesForFlags(t = !0) {
        var i;
        null === (i = this.featureFlags) || void 0 === i || i.resetPersonPropertiesForFlags(t);
    }
    setGroupPropertiesForFlags(t, i = !0) {
        var e;
        this.bd("posthog.setGroupPropertiesForFlags") && (null === (e = this.featureFlags) || void 0 === e || e.setGroupPropertiesForFlags(t, i));
    }
    resetGroupPropertiesForFlags(t) {
        var i;
        null === (i = this.featureFlags) || void 0 === i || i.resetGroupPropertiesForFlags(t);
    }
    reset(t) {
        const i = N(t) ? t : null == t ? void 0 : t.resetDeviceID,
            e = N(t) || null == t ? void 0 : t.bootstrap;
        this.kd(i, !1, e);
    }
    kd(t, i = !1, e) {
        var s, n, r, o, l, a;
        if (js.info("reset"), !this.__loaded) return js.uninitializedWarning("posthog.reset");
        const u = null == e ? void 0 : e.sessionID;
        this.config.bootstrap = e || (null === (s = this.Fh) || void 0 === s ? void 0 : s.bootstrap) || {}, null === (n = this.featureFlags) || void 0 === n || null === (r = n.updateConfig) || void 0 === r || r.call(n, this.config, this.ec());
        const h = this.get_property(yn),
            c = this.get_property(bn),
            d = this.get_property(Nn);
        null === (o = this.sessionRecording) || void 0 === o || o.flushBeforeIdentityReset();
        const v = this.is_capturing();
        i || this.consent.reset(), i || !v || this.is_capturing() || console.warn("[PostHog.js]", "reset() cleared the stored consent, and capturing is now off because of `opt_out_capturing_by_default`. Call opt_in_capturing() again, and prefer calling reset() before opting in rather than after.");
        const f = null === (l = this.persistence) || void 0 === l || null === (a = l.Iu) || void 0 === a ? void 0 : a.call(l),
            p = this.bh;
        this.bh = p || i;
        let g = !1;
        try {
            var _, m, y, b, w, S, x, E, k, T, P, O, C;
            if (null === (_ = this.persistence) || void 0 === _ || _.clear(), null === (m = this.sessionPersistence) || void 0 === m || m.clear(), this.Ch.clear(), this.md(), R(d) || null === (T = this.persistence) || void 0 === T || T.register({
                    $session_recording_remote_config: d
                }), null === (y = this.surveys) || void 0 === y || y.reset(), null === (b = this.featureFlags) || void 0 === b || b.reset(), null === (w = this.conversations) || void 0 === w || w.reset(), null === (S = this.logs) || void 0 === S || S.reset(), null === (x = this.metrics) || void 0 === x || x.reset(), null === (E = this.persistence) || void 0 === E || E.set_property("$user_state", "anonymous"), null === (k = this.sessionManager) || void 0 === k || k.resetSessionId(), this.Ph = null, "always" === this.config.cookieless_mode) this.register_once({
                distinct_id: dr,
                $device_id: null
            }, "");
            else {
                const i = this.config.get_device_id(Zr());
                this.register_once({
                    distinct_id: i,
                    $device_id: t ? i : h
                }, ""), t || R(c) || this.register({
                    [bn]: c
                });
            }
            if (this.register({
                    $last_posthog_reset: new Date().toISOString()
                }, 1), e) {
                if (e.distinctID && !this.fh() && (null === (C = this.persistence) || void 0 === C || C.set_property("$user_state", e.isIdentifiedID ? "identified" : "anonymous"), this.register({
                        distinct_id: e.distinctID
                    })), null === (P = this.featureFlags) || void 0 === P || P.initialize(), !F(u) && !(null === (O = this.sessionManager) || void 0 === O ? void 0 : O.setBootstrapSessionId(u, !0))) {
                    const t = wi({}, e);
                    delete t.sessionID, this.config.bootstrap = t;
                }
            }
            delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, g = !0;
        } finally {
            var A, I;
            this.bh = p, f && (null === (A = this.persistence) || void 0 === A || null === (I = A.Ru) || void 0 === I || I.call(A, g));
        }
        var M;
        this.vr && (null === (M = this.conversations) || void 0 === M || M.onRemoteConfig(this.vr)), this.reloadFeatureFlags();
    }
    shutdown(t) {
        var i = this;
        return Y(function*() {
            if (!i.__loaded) return void js.uninitializedWarning("posthog.shutdown");
            i.xh = !0, clearTimeout(i.zh), i.zh = void 0;
            const t = i.Zh;
            i.Zh = void 0;
            for (const e of [
                    () => {
                        var t;
                        return null === (t = i.sessionRecording) || void 0 === t ? void 0 : t.dispose();
                    },
                    () => {
                        var t;
                        return null === (t = i.logs) || void 0 === t ? void 0 : t.flushLogs("sendBeacon");
                    },
                    () => {
                        var t;
                        return null === (t = i.metrics) || void 0 === t ? void 0 : t.flush("sendBeacon");
                    },
                    () => {
                        var t;
                        return null === (t = i.metrics) || void 0 === t ? void 0 : t.dispose();
                    },
                    () => {
                        var t;
                        return null === (t = i.logs) || void 0 === t ? void 0 : t.dispose();
                    },
                    () => {
                        var t;
                        return null === (t = i.surveys) || void 0 === t ? void 0 : t.dispose();
                    },
                    () => {
                        var t;
                        return null === (t = i.autocapture) || void 0 === t ? void 0 : t.dispose();
                    },
                    () => null == t ? void 0 : t(),
                    () => {
                        var t;
                        return null === (t = i.Lh) || void 0 === t ? void 0 : t.unload();
                    },
                    () => {
                        var t;
                        return null === (t = i.jh) || void 0 === t ? void 0 : t.unload();
                    },
                    () => {
                        var t;
                        return null === (t = i.featureFlags) || void 0 === t ? void 0 : t.destroy();
                    },
                    () => {
                        var t;
                        return null === (t = i.persistence) || void 0 === t ? void 0 : t.destroy();
                    },
                    () => {
                        var t;
                        return null === (t = i.sessionPersistence) || void 0 === t ? void 0 : t.destroy();
                    }
                ]) try {
                const t = e();
                t && T(t.then) && t.then(void 0, (t) => {
                    js.error("Error during shutdown", t);
                });
            } catch (t) {
                js.error("Error during shutdown", t);
            }
        })();
    }
    setIdentity(t, i) {
        var e;
        delete this.config.identity_claims, this.config.identity_distinct_id = t, this.config.identity_hash = i, this.alias(t), null === (e = this.conversations) || void 0 === e || e.Sd();
    }
    clearIdentity() {
        var t;
        delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, null === (t = this.conversations) || void 0 === t || t.xd();
    }
    get_distinct_id() {
        return this.get_property("distinct_id");
    }
    getGroups() {
        return this.get_property("$groups") || {};
    }
    get_session_id() {
        var t, i;
        return null !== (t = null === (i = this.sessionManager) || void 0 === i ? void 0 : i.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== t ? t : "";
    }
    get_session_replay_url(t) {
        if (!this.sessionManager) return "";
        const {
            sessionId: i,
            sessionStartTimestamp: e
        } = this.sessionManager.checkAndGetSessionAndWindowId(!0);
        let s = this.requestRouter.endpointFor("ui", `/project/${this.config.token}/replay/${i}`);
        if ((null == t ? void 0 : t.withTimestamp) && e) {
            var n;
            const i = null !== (n = t.timestampLookBack) && void 0 !== n ? n : 10;
            if (!e) return s;
            s += `?t=${Math.max(Math.floor((new Date().getTime() - e) / 1e3) - i, 0)}`;
        }
        return s;
    }
    alias(t, i) {
        return t === this.get_property("$people_distinct_id") ? (js.critical("Attempting to create alias for existing People user - aborting."), -2) : this.bd("posthog.alias") ? (R(i) && (i = this.get_distinct_id()), t !== i ? (this._d(wn, t), this.capture("$create_alias", {
            alias: t,
            distinct_id: i
        })) : (js.warn("alias matches current distinct_id - skipping api call."), this.identify(t), -1)) : void 0;
    }
    set_config(t) {
        const i = wi({}, this.config);
        if (P(t)) {
            var e, s, n, r, o, l, a, u, h, c, d, v, f, p;
            Dr(this.config, Hh(t));
            const b = this.kh();
            if (this.persistence) {
                const t = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence;
                var g, _;
                if (t && this.sessionPersistence !== this.persistence && (null === (g = this.sessionPersistence) || void 0 === g || g.remove(), null === (_ = this.sessionPersistence) || void 0 === _ || _.destroy()), this.persistence.update_config(this.config, i, b), t) this.sessionPersistence = this.persistence;
                else if (this.sessionPersistence === this.persistence) this.sessionPersistence = new la(wi(wi({}, this.config), {}, {
                    persistence: "sessionStorage"
                }), b, !1);
                else {
                    var m;
                    null === (m = this.sessionPersistence) || void 0 === m || m.update_config(wi(wi({}, this.config), {}, {
                        persistence: "sessionStorage"
                    }), wi(wi({}, i), {}, {
                        persistence: "sessionStorage"
                    }), b);
                }
            }
            const w = this.Oh(this.config.debug);
            var y;
            N(w) && (this.config.debug = w), N(this.config.debug) && (this.config.debug ? (Vs.DEBUG = !0, ro.Ot() && ro.$t("ph_debug", !0), js.info("set_config", {
                config: t,
                oldConfig: i,
                newConfig: wi({}, this.config)
            })) : (Vs.DEBUG = !1, ro.Ot() && ro.Dt("ph_debug"))), null === (e = this.featureFlags) || void 0 === e || null === (s = e.updateConfig) || void 0 === s || s.call(e, this.config, this.ec()), null === (n = this.exceptionObserver) || void 0 === n || n.onConfigChange(), null === (r = this.exceptions) || void 0 === r || r.onConfigChange(), null === (o = this.metrics) || void 0 === o || o.onConfigChange(), null === (l = this.webMCP) || void 0 === l || l.startIfEnabled(), null === (a = this.sessionRecording) || void 0 === a || a.startIfEnabledOrStop(), null === (u = this.tracingHeaders) || void 0 === u || u.startIfEnabledOrStop(), null === (h = this.autocapture) || void 0 === h || h.startIfEnabled(), null === (c = this.heatmaps) || void 0 === c || c.startIfEnabled(), ("capture_pageview" in t || "disable_capture_url_hashes" in t) && (null === (y = this.historyAutocapture) || void 0 === y || y.startIfEnabledOrStop()), null === (d = this.exceptionObserver) || void 0 === d || d.startIfEnabledOrStop(), null === (v = this.deadClicksAutocapture) || void 0 === v || v.startIfEnabledOrStop(), null === (f = this.surveys) || void 0 === f || f.loadIfEnabled(), this._h(), null === (p = this.externalIntegrations) || void 0 === p || p.startIfEnabledOrStop(), !i.segment && this.config.segment && this.persistence && _l(this, kh, !1);
        }
    }
    _overrideSDKInfo(t, i) {
        Vs.LIB_NAME = t, Vs.LIB_VERSION = i;
    }
    startSessionRecording(t) {
        const i = !0 === t,
            e = {
                sampling: i || !!(null == t ? void 0 : t.sampling),
                linked_flag: i || !!(null == t ? void 0 : t.linked_flag),
                url_trigger: i || !!(null == t ? void 0 : t.url_trigger),
                event_trigger: i || !!(null == t ? void 0 : t.event_trigger)
            };
        var s, n, r, o, l;
        Object.values(e).some(Boolean) && (null === (s = this.sessionManager) || void 0 === s || s.checkAndGetSessionAndWindowId(), e.sampling && (null === (n = this.sessionRecording) || void 0 === n || n.overrideSampling()), e.linked_flag && (null === (r = this.sessionRecording) || void 0 === r || r.overrideLinkedFlag()), e.url_trigger && (null === (o = this.sessionRecording) || void 0 === o || o.overrideTrigger("url")), e.event_trigger && (null === (l = this.sessionRecording) || void 0 === l || l.overrideTrigger("event")));
        this.set_config({
            disable_session_recording: !1
        });
    }
    stopSessionRecording() {
        this.set_config({
            disable_session_recording: !0
        });
    }
    sessionRecordingStarted() {
        var t;
        return !!(null === (t = this.sessionRecording) || void 0 === t ? void 0 : t.started);
    }
    captureException(t, i) {
        try {
            if (!this.exceptions) return;
            const e = this.exceptions.buildProperties(t, {
                handled: !0,
                syntheticException: new Error("PostHog syntheticException")
            });
            return this.exceptions.sendExceptionEvent(wi(wi({}, e), i));
        } catch (t) {
            return;
        }
    }
    addExceptionStep(t, i) {
        var e;
        null === (e = this.exceptions) || void 0 === e || e.addExceptionStep(t, i);
    }
    captureLog(t) {
        var i;
        null === (i = this.logs) || void 0 === i || i.captureLog(t);
    }
    get logger() {
        var t, e;
        return null !== (t = null === (e = this.logs) || void 0 === e ? void 0 : e.logger) && void 0 !== t ? t : i.$d;
    }
    startExceptionAutocapture(t) {
        this.set_config({
            capture_exceptions: null == t || t
        });
    }
    stopExceptionAutocapture() {
        this.set_config({
            capture_exceptions: !1
        });
    }
    loadToolbar(t) {
        var i, e;
        return null !== (i = null === (e = this.toolbar) || void 0 === e ? void 0 : e.loadToolbar(t)) && void 0 !== i && i;
    }
    get_property(t) {
        var i;
        return null === (i = this.persistence) || void 0 === i ? void 0 : i.props[t];
    }
    getSessionProperty(t) {
        var i;
        return null === (i = this.sessionPersistence) || void 0 === i ? void 0 : i.props[t];
    }
    toString() {
        var t;
        let i = null !== (t = this.config.name) && void 0 !== t ? t : Lh;
        return i !== Lh && (i = "posthog." + i), i;
    }
    _isIdentified() {
        var t, i;
        return "identified" === (null === (t = this.persistence) || void 0 === t ? void 0 : t.get_property("$user_state")) || "identified" === (null === (i = this.sessionPersistence) || void 0 === i ? void 0 : i.get_property("$user_state"));
    }
    yd() {
        var t, i;
        return !("never" === this.config.person_profiles || "identified_only" === this.config.person_profiles && !this._isIdentified() && O(this.getGroups()) && !(null === (t = this.persistence) || void 0 === t || null === (t = t.props) || void 0 === t ? void 0 : t.__alias) && !(null === (i = this.persistence) || void 0 === i || null === (i = i.props) || void 0 === i ? void 0 : i.$epp));
    }
    sd() {
        return !0 === this.config.capture_pageleave || "if_capture_pageview" === this.config.capture_pageleave && !!this.config.capture_pageview;
    }
    createPersonProfile() {
        this.yd() || this.bd("posthog.createPersonProfile") && this.setPersonProperties({}, {});
    }
    setInternalOrTestUser() {
        this.bd("posthog.setInternalOrTestUser") && this.setPersonProperties({
            $internal_or_test_user: !0
        });
    }
    bd(t) {
        return "never" === this.config.person_profiles ? (js.error(t + " was called, but process_person is set to \"never\". This call will be ignored."), !1) : (this.ph(), this._d(cr, !0), !0);
    }
    kh() {
        if ("always" === this.config.cookieless_mode) return !0;
        const t = this.consent.isOptedOut();
        return this.config.disable_persistence || t && !(!this.config.opt_out_persistence_by_default && "on_reject" !== this.config.cookieless_mode);
    }
    _h() {
        var t, i;
        const e = this.kh();
        var s, n, r;
        return this.is_capturing() || null === (s = this.logs) || void 0 === s || s.Cd(), (null === (t = this.persistence) || void 0 === t ? void 0 : t.fi) !== e && (null === (n = this.persistence) || void 0 === n || n.set_disabled(e)), (null === (i = this.sessionPersistence) || void 0 === i ? void 0 : i.fi) !== e && (null === (r = this.sessionPersistence) || void 0 === r || r.set_disabled(e)), this.md(), e;
    }
    opt_in_capturing(t) {
        var e, s, n;
        if ("always" === this.config.cookieless_mode) return void js.warn(Th);
        if (this.fh()) {
            var r, o, l, a, u, h;
            null === (r = this.sessionRecording) || void 0 === r || r.dispose({
                discardBufferedEvents: !0
            }), this.kd(!0, !0), null === (o = this.sessionManager) || void 0 === o || o.destroy(), null === (l = this.pageViewManager) || void 0 === l || l.destroy(), this.sessionManager = new ju(this), this.pageViewManager = new wl(this), this.persistence && (this.sessionPropsManager = new Mu(this, this.sessionManager, this.persistence));
            const t = null !== (a = null === (u = this.config.__extensionClasses) || void 0 === u ? void 0 : u.sessionRecording) && void 0 !== a ? a : null === (h = i.__defaultExtensionClasses) || void 0 === h ? void 0 : h.sessionRecording;
            var c, d;
            t && (this.sessionRecording = this.dh(this.sessionRecording, new t(this)), this.vr && (null === (c = this.sessionRecording) || void 0 === c || null === (d = c.onRemoteConfig) || void 0 === d || d.call(c, this.vr)));
        }
        const v = 1 === this.consent.consent;
        var f, p, g;
        v && this.yh(), this.consent.optInOut(!0), this._h(), this.Xh(), null === (e = this.sessionRecording) || void 0 === e || e.startIfEnabledOrStop(), "on_reject" == this.config.cookieless_mode && (null === (f = this.surveys) || void 0 === f || f.loadIfEnabled(), null === (p = this.conversations) || void 0 === p || p.loadIfEnabled()), v || !R(null == t ? void 0 : t.captureEventName) && !(null == t ? void 0 : t.captureEventName) || this.capture(null !== (g = null == t ? void 0 : t.captureEventName) && void 0 !== g ? g : "$opt_in", null == t ? void 0 : t.captureProperties, {
            send_instantly: !0
        }), null === (s = this.persistence) || void 0 === s || s.syncCookieProperties(), this.Uh(), null === (n = this.featureFlags) || void 0 === n || n.sendFlagCallsPendingCapture(), this.config.capture_pageview && this.ed();
    }
    opt_out_capturing() {
        "always" !== this.config.cookieless_mode ? (this.consent.optInOut(!1), this._h(), "on_reject" === this.config.cookieless_mode && this.wh()) : js.warn(Th);
    }
    wh() {
        var t, i;
        const e = this.sessionRecording;
        null == e || e.dispose({
            discardBufferedEvents: !0
        }), "$posthog_cookieless" !== this.get_distinct_id() && this.kd(!0, !0), this.register({
            distinct_id: dr,
            $device_id: null
        }), this.uh(e), this.sessionRecording = void 0, null === (t = this.sessionManager) || void 0 === t || t.destroy(), null === (i = this.pageViewManager) || void 0 === i || i.destroy(), this.sessionManager = void 0, this.sessionPropsManager = void 0, this.config.capture_pageview && this.ed(), this.Xh();
    }
    has_opted_in_capturing() {
        return this.consent.isOptedIn();
    }
    has_opted_out_capturing() {
        return this.consent.isOptedOut();
    }
    get_explicit_consent_status() {
        const t = this.consent.consent;
        return 1 === t ? "granted" : 0 === t ? "denied" : "pending";
    }
    is_capturing() {
        return !this.bh && ("always" === this.config.cookieless_mode || ("on_reject" === this.config.cookieless_mode ? this.consent.isRejected() || this.consent.isOptedIn() : !this.has_opted_out_capturing()));
    }
    clear_opt_in_out_capturing() {
        this.consent.reset(), this._h();
    }
    _is_bot() {
        return e ? Bu(e, this.config.custom_blocked_useragents) : void 0;
    }
    ed() {
        s && ("visible" === s.visibilityState ? this.Mh || (this.Mh = !0, this.capture(Rr, {
            title: s.title
        }, {
            send_instantly: !0
        }), this.Ah && (s.removeEventListener(un, this.Ah), this.Ah = null)) : this.Ah || (this.Ah = this.ed.bind(this), Hr(s, un, this.Ah)));
    }
    debug(i) {
        !1 === i ? (null == t || t.console.log("You've disabled debug mode."), this.set_config({
            debug: !1
        })) : (null == t || t.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), this.set_config({
            debug: !0
        }));
    }
    ec() {
        const t = this.Fh || {};
        return "advanced_disable_flags" in t ? !!t.advanced_disable_flags : !1 !== this.config.advanced_disable_flags ? !!this.config.advanced_disable_flags : !0 === this.config.advanced_disable_decide ? (js.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."), !0) : function(t, i, e, s, n) {
            const r = i in t && !F(t[i]),
                o = e in t && !F(t[e]);
            return r ? t[i] : !!o && (n && n.warn(`Config field '${e}' is deprecated. Please use '${i}' instead. The old field will be removed in a future major version.`), t[e]);
        }(t, "advanced_disable_flags", "advanced_disable_decide", 0, js);
    }
    Fs(t) {
        var i;
        if (F(this.config.before_send)) return t;
        const e = Object.keys(null !== (i = t.properties) && void 0 !== i ? i : {}).filter(j),
            s = k(this.config.before_send) ? this.config.before_send : [this.config.before_send];
        let n = t;
        for (const i of s) try {
            if (n = i(n), F(n)) {
                const i = `Event '${t.event}' was rejected in beforeSend function`;
                return L(t.event) ? js.warn(`${i}. This can cause unexpected behavior.`) : js.info(i), null;
            }
            n.properties && !O(n.properties) || js.warn(`Event '${t.event}' has no properties after beforeSend function, this is likely an error.`);
        } catch (i) {
            return js.error(`Error in beforeSend function for event '${t.event}':`, i), null;
        }
        for (const i of e)
            if (n.properties && F(n.properties[i])) return js.warn(`Event '${t.event}' had its '${i}' property removed in a beforeSend function. This property is required for ingestion, so the event will be dropped.`), null;
        return n;
    }
    getPageViewId() {
        var t;
        return null === (t = this.pageViewManager.Nl) || void 0 === t ? void 0 : t.pageViewId;
    }
    captureTraceFeedback(t, i) {
        this.capture("$ai_feedback", {
            $ai_trace_id: String(t),
            $ai_feedback_text: i
        });
    }
    captureTraceMetric(t, i, e) {
        this.capture("$ai_metric", {
            $ai_trace_id: String(t),
            $ai_metric_name: i,
            $ai_metric_value: String(e)
        });
    }
    Oh(t) {
        const i = N(t) && !t,
            e = ro.Ot() && "true" === ro.Lt("ph_debug");
        return !i && (!!e || t);
    }
};
Wh.__defaultExtensionClasses = {}, Wh.$d = (() => {
        const t = () => {};
        return {
            trace: t,
            debug: t,
            info: t,
            warn: t,
            error: t,
            fatal: t
        };
    })(),
    function(t, i) {
        for (let e = 0; i.length > e; e++) t.prototype[i[e]] = Lr(t.prototype[i[e]]);
    }(Wh, ["identify"]);
var Vh = ["[data-ph-capture-value]"];
var Gh = class {
    constructor(t) {
        this._instance = t;
    }
    refresh(t) {
        var i;
        const e = this._instance.config,
            s = P(e.autocapture) ? e.autocapture : void 0;
        t.enabled = !!e.autocapture, t.rageclick = e.rageclick, t.maskAllElementAttributes = e.mask_all_element_attributes, t.maskAllText = e.mask_all_text, t.disableCaptureUrlHashes = e.disable_capture_url_hashes, t.getCurrentUrl = e.get_current_url, t.remoteRequestsDisabled = this._instance.ec(), t.url_allowlist = null == s ? void 0 : s.url_allowlist, t.url_ignorelist = null == s ? void 0 : s.url_ignorelist, t.dom_event_allowlist = null == s ? void 0 : s.dom_event_allowlist, t.element_allowlist = null == s ? void 0 : s.element_allowlist, t.css_selector_allowlist = null == s ? void 0 : s.css_selector_allowlist, t.css_selector_ignorelist = null == s ? void 0 : s.css_selector_ignorelist, t.element_attribute_ignorelist = null == s ? void 0 : s.element_attribute_ignorelist, t.capture_copied_text = null == s ? void 0 : s.capture_copied_text, t.capture_value_css_selector_allowlist = null !== (i = null == s ? void 0 : s.capture_value_css_selector_allowlist) && void 0 !== i ? i : Vh;
    }
};
var Kh = Us("[ExceptionAutocapture]");
var Yh = () => {};
var Jh = (t) => {
    var i;
    if (T(t)) return null !== (i = t.__posthog_layer__) && void 0 !== i ? i : t.__rrweb_layer__;
};

function Xh(t, i, e) {
    try {
        if (!(i in t)) return Yh;
        const s = {
                next: t[i]
            },
            n = e(function(...t) {
                return s.next.apply(this, t);
            });
        return T(n) && (n.prototype = n.prototype || {}, Object.defineProperties(n, {
            __posthog_wrapped__: {
                enumerable: !1,
                value: !0
            },
            __posthog_layer__: {
                enumerable: !1,
                value: s
            }
        })), t[i] = n, () => {
            if (t[i] === n) return void(t[i] = s.next);
            let e = t[i],
                r = Jh(e);
            for (; r;) {
                if (r.next === n) return void(r.next = s.next);
                e = r.next, r = Jh(e);
            }
        };
    } catch (t) {
        return Yh;
    }
}
var Zh = Us("[TracingHeaders]");
var Qh = Us("[Web Vitals]");
var tc = 9e5;
var ic = [
    "CLS",
    "FCP",
    "INP",
    "LCP"
];
var ec = ["INP", "LCP"];
var sc = [
    "interactionTarget",
    "interactionType",
    "inputDelay",
    "processingDuration",
    "presentationDelay",
    "loadState",
    "target",
    "url",
    "timeToFirstByte",
    "resourceLoadDelay",
    "resourceLoadDuration",
    "elementRenderDelay",
    "largestShiftTarget",
    "largestShiftTime",
    "largestShiftValue",
    "firstByteToFCP"
];
var nc = "disabled";
var rc = "lazy_loading";
var oc = Us("[SessionRecording]");
var lc = [
    gr,
    _r,
    mr,
    yr,
    br,
    wr,
    $r,
    Sr,
    xr
];
var ac = Us("[Heatmaps]");

function uc(t) {
    return P(t) && "clientX" in t && "clientY" in t && M(t.clientX) && M(t.clientY);
}
var hc = Us("[Product Tours]");
var cc = (t) => {
    var i;
    return !t.config.disable_product_tours && !!(null === (i = t.persistence) || void 0 === i ? void 0 : i.get_property(Fn));
};
var dc = ["$set_once", "$set"];
var vc = Us("[SiteApps]");
var fc = "Error while initializing PostHog app with config id ";

function pc(t, i, e) {
    if (F(t)) return !1;
    switch (e) {
        case "exact":
            return t === i;
        case "contains":
            {
                const e = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/_/g, ".").replace(/%/g, ".*");
                return new RegExp(e, "i").test(t);
            }
        case "regex":
            try {
                return new RegExp(i).test(t);
            } catch (t) {
                return !1;
            }
        default:
            return !1;
    }
}
var gc = class {
    constructor(t) {
        this.$i = t, this.$o = new Set(), this.Co = new Set(), this.To = new Du(), this.Io = (t, i) => this.Eo(t, i) && this.Mo(t, i) && this.Ao(t, i) && this.Ro(t, i), this.Eo = (t, i) => !(null == i ? void 0 : i.event) || (null == t ? void 0 : t.event) === (null == i ? void 0 : i.event);
    }
    init() {
        var t, i;
        R(null === (t = this.$i) || void 0 === t ? void 0 : t.subscribeCapture) || (this.Po = null === (i = this.$i) || void 0 === i ? void 0 : i.subscribeCapture((t, i) => {
            this.on(t, i);
        }));
    }
    dispose() {
        var t, i, e;
        null === (t = this.Po) || void 0 === t || t.call(this), this.Po = void 0, null === (i = this.$i) || void 0 === i || null === (e = i.setElementSelectors) || void 0 === e || e.call(i, new Set(), this), this.To = new Du();
    }
    register(t) {
        var i, e;
        if (!R(null === (i = this.$i) || void 0 === i ? void 0 : i.subscribeCapture) && (t.forEach((t) => {
                var i;
                this.$o.add(t), null === (i = t.steps) || void 0 === i || i.forEach((t) => {
                    this.Co.add((null == t ? void 0 : t.event) || "");
                });
            }), null === (e = this.$i) || void 0 === e ? void 0 : e.setElementSelectors)) {
            const t = new Set();
            this.$o.forEach((i) => {
                var e;
                null === (e = i.steps) || void 0 === e || e.forEach((i) => {
                    (null == i ? void 0 : i.selector) && t.add(i.selector);
                });
            }), this.$i.setElementSelectors(t, this);
        }
    }
    replace(t) {
        this.$o.clear(), this.Co.clear(), this.register(t);
    }
    on(t, i) {
        null != i && 0 != t.length && (this.Co.has(t) || this.Co.has(i.event)) && this.$o.forEach((t) => {
            this.Oo(i, t) && this.To.emit("actionCaptured", t.name);
        });
    }
    Fo(t) {
        this.onAction("actionCaptured", (i) => t(i));
    }
    Oo(t, i) {
        if (null == (null == i ? void 0 : i.steps)) return !1;
        for (const e of i.steps)
            if (this.Io(t, e)) return !0;
        return !1;
    }
    onAction(t, i) {
        return this.To.on(t, i);
    }
    Mo(t, i) {
        if (null == i ? void 0 : i.url) {
            var e;
            let r = null == t || null === (e = t.properties) || void 0 === e ? void 0 : e.$current_url;
            if (!(null == t ? void 0 : t.properties) || !("$current_url" in t.properties)) try {
                var s, n;
                r = null === (s = this.$i) || void 0 === s || null === (n = s.getActionUrl) || void 0 === n ? void 0 : n.call(s);
            } catch (t) {
                return !1;
            }
            if (!r || "string" != typeof r) return !1;
            if (!pc(r, i.url, i.url_matching || "contains")) return !1;
        }
        return !0;
    }
    Ao(t, i) {
        return !!this.Do(t, i) && !!this.Lo(t, i) && !!this.No(t, i);
    }
    Do(t, i) {
        var e;
        if (!(null == i ? void 0 : i.href)) return !0;
        const s = this.jo(t);
        if (s.length > 0) return s.some((t) => pc(t.href, i.href, i.href_matching || "exact"));
        const n = (null == t || null === (e = t.properties) || void 0 === e ? void 0 : e.$elements_chain) || "";
        return !!n && pc(function(t) {
            const i = t.match(/(?::|")href="(.*?)"/);
            return i ? i[1] : "";
        }(n), i.href, i.href_matching || "exact");
    }
    Lo(t, i) {
        var e;
        if (!(null == i ? void 0 : i.text)) return !0;
        const s = this.jo(t);
        if (s.length > 0) return s.some((t) => pc(t.text, i.text, i.text_matching || "exact") || pc(t.$el_text, i.text, i.text_matching || "exact"));
        const n = (null == t || null === (e = t.properties) || void 0 === e ? void 0 : e.$elements_chain) || "";
        return !!n && (r = function(t) {
            const i = [],
                e = /(?::|")text="(.*?)"/g;
            let s;
            for (; !F(s = e.exec(t));) i.includes(s[1]) || i.push(s[1]);
            return i;
        }(n), o = i.text, l = i.text_matching || "exact", r.some((t) => pc(t, o, l)));
        var r, o, l;
    }
    No(t, i) {
        var e, s;
        if (!(null == i ? void 0 : i.selector)) return !0;
        const n = null == t || null === (e = t.properties) || void 0 === e ? void 0 : e.$element_selectors;
        if (null == n ? void 0 : n.includes(i.selector)) return !0;
        const r = (null == t || null === (s = t.properties) || void 0 === s ? void 0 : s.$elements_chain) || "";
        if (i.selector_regex && r) try {
            return new RegExp(i.selector_regex).test(r);
        } catch (t) {}
        return !1;
    }
    jo(t) {
        var i;
        return null == (null == t || null === (i = t.properties) || void 0 === i ? void 0 : i.$elements) ? [] : null == t ? void 0 : t.properties.$elements;
    }
    Ro(t, i) {
        return !(null == i ? void 0 : i.properties) || 0 === i.properties.length || Ku(i.properties.reduce((t, i) => {
            const e = k(i.value) ? i.value.map(String) : null != i.value ? [String(i.value)] : [];
            return t[i.key] = {
                values: e,
                operator: i.operator || "exact"
            }, t;
        }, {}), null == t ? void 0 : t.properties);
    }
};
var _c = class {
    constructor(t, i) {
        this.qo = i, this.Bo = [], this.$i = t, this.zo = new Map(), this.Ho = new Map(), this.Uo = new Map();
    }
    Wo() {
        var t, i;
        this.Vo = null === (t = (i = this.$i).subscribeSession) || void 0 === t ? void 0 : t.call(i, (t) => this.Go(t));
    }
    Qo(t) {
        return !1;
    }
    Jo() {
        return null;
    }
    Zo(t) {}
    Ko() {}
    Yo(t, i) {
        return !!t && Ku(t.propertyFilters, null == i ? void 0 : i.properties);
    }
    Xo(t, i) {
        const e = new Map();
        return t.forEach((t) => {
            var s;
            null === (s = t.conditions) || void 0 === s || null === (s = s[i]) || void 0 === s || null === (s = s.values) || void 0 === s || s.forEach((i) => {
                if (null == i ? void 0 : i.name) {
                    const s = e.get(i.name) || [];
                    s.push(t.id), e.set(i.name, s);
                }
            });
        }), e;
    }
    ta(t, i, e) {
        const s = (e === ua.Activation ? this.zo : this.Ho).get(t);
        let n = [];
        return this.ea((t) => {
            n = t.filter((t) => null == s ? void 0 : s.includes(t.id));
        }), n.filter((s) => {
            var n;
            const r = null === (n = s.conditions) || void 0 === n || null === (n = n[e]) || void 0 === n || null === (n = n.values) || void 0 === n ? void 0 : n.find((i) => i.name === t);
            return this.Yo(r, i);
        });
    }
    register(t) {
        this.ia(t, !1);
    }
    replace(t) {
        this.ia(t, !0);
    }
    ia(t, i) {
        R(this.$i.subscribeCapture) || (this.na(t, i), this.sa(t, i));
    }
    sa(t, i) {
        const e = t.filter((t) => {
            var i;
            return null === (i = t.conditions) || void 0 === i || null === (i = i.actions) || void 0 === i || null === (i = i.values) || void 0 === i ? void 0 : i.length;
        });
        var s;
        if (i && this.Uo.clear(), 0 === e.length) return void(i && (null === (s = this.ra) || void 0 === s || s.replace([])));
        this.ra || (this.ra = new gc(this.$i), this.ra.init(), this.ra.Fo((t) => this.onAction(t)));
        const n = [];
        e.forEach((t) => {
            var i;
            null === (i = t.conditions) || void 0 === i || null === (i = i.actions) || void 0 === i || i.values.forEach((i) => {
                if (n.push(i), i.name) {
                    var e;
                    const s = null !== (e = this.Uo.get(i.name)) && void 0 !== e ? e : [];
                    s.includes(t.id) || s.push(t.id), this.Uo.set(i.name, s);
                }
            });
        }), i ? this.ra.replace(n) : this.ra.register(n);
    }
    oa(t, i) {
        i.forEach((i, e) => {
            var s;
            const n = null !== (s = t.get(e)) && void 0 !== s ? s : [];
            i.forEach((t) => {
                n.includes(t) || n.push(t);
            }), t.set(e, n);
        });
    }
    na(t, i) {
        var e, s, n;
        const r = t.filter((t) => {
                var i, e;
                return (null === (i = t.conditions) || void 0 === i ? void 0 : i.events) && (null === (e = t.conditions) || void 0 === e || null === (e = e.events) || void 0 === e || null === (e = e.values) || void 0 === e ? void 0 : e.length) > 0;
            }),
            o = t.filter((t) => {
                var i, e;
                return (null === (i = t.conditions) || void 0 === i ? void 0 : i.cancelEvents) && (null === (e = t.conditions) || void 0 === e || null === (e = e.cancelEvents) || void 0 === e || null === (e = e.values) || void 0 === e ? void 0 : e.length) > 0;
            }),
            l = this.Xo(t, ua.Activation),
            a = this.Xo(t, ua.Cancellation);
        i ? (this.zo = l, this.Ho = a) : (this.oa(this.zo, l), this.oa(this.Ho, a)), (0 !== r.length || 0 !== o.length || t.some((t) => {
            var i;
            return null === (i = t.conditions) || void 0 === i || null === (i = i.actions) || void 0 === i || null === (i = i.values) || void 0 === i ? void 0 : i.length;
        })) && (null !== (e = this.Po) && void 0 !== e || (this.Po = null === (s = (n = this.$i).subscribeCapture) || void 0 === s ? void 0 : s.call(n, (t, i) => {
            this.onEvent(t, i);
        })));
    }
    onEvent(t, i) {
        var e, s;
        const n = this.aa(),
            r = (null == i || null === (e = i.properties) || void 0 === e ? void 0 : e.$survey_id) || (null == i || null === (s = i.properties) || void 0 === s ? void 0 : s.$product_tour_id);
        if (r && this.getActivatedIds().includes(r)) {
            const e = this.la(t, r, i);
            if ("consume" === e) return n.info("event consumed activated item, removing it", {
                event: t,
                itemId: r
            }), void this.ua([r]);
            if ("persist" === e) return n.info("shown item promoted to persisted activation", {
                event: t,
                itemId: r
            }), this.ca(r), void this.ha([r]);
        }
        if (this.Ho.has(t)) {
            const e = this.ta(t, i, ua.Cancellation);
            e.length > 0 && (n.info("cancel event matched, cancelling items", {
                event: t,
                itemsToCancel: e.map((t) => t.id)
            }), this.ua(e.map((t) => t.id)), e.forEach((t) => this.da(t.id)));
        }
        if (!this.zo.has(t)) return;
        n.info("event name matched", {
            event: t,
            eventPayload: i,
            items: this.zo.get(t)
        });
        const o = this.ta(t, i, ua.Activation);
        this.va(o.map((t) => t.id));
    }
    onAction(t) {
        this.Uo.has(t) && this.va(this.Uo.get(t) || []);
    }
    va(t) {
        if (0 === t.length) return;
        const i = !!this.$i.getSessionId(),
            e = [];
        for (const s of t) i && this.Qo(s) ? this.ca(s) && this.fa(s) : e.push(s);
        e.length > 0 && (this.Bo = [...new Set([...this.Bo, ...e])]), this.aa().info("updating activated items", {
            activatedItems: this.getActivatedIds()
        }), this.pa();
    }
    ca(t) {
        this.Bo = this.Bo.filter((i) => i !== t);
        const i = this.ga();
        return !i.includes(t) && (this.ma([...i, t]), this.ya(), !0);
    }
    ua(t) {
        const i = new Set(t);
        this.Bo = this.Bo.filter((t) => !i.has(t));
        const e = this.ba(),
            s = e.filter((t) => !i.has(t));
        s.length !== e.length && (this.ma(s), 0 === s.length && this._a()), this.ha(t), this.pa();
    }
    pa() {
        try {
            var t;
            null === (t = this.qo) || void 0 === t || t.call(this);
        } catch (t) {
            this.aa().error("Error while handling activated items change", t);
        }
    }
    wa() {
        const t = this.Jo();
        if (!t) return {};
        const i = this.$i.getProperty(t);
        return i && "object" == typeof i ? i : {};
    }
    fa(t) {
        if (!this.Jo()) return;
        const i = this.wa();
        this.Zo(wi(wi({}, i), {}, {
            [t]: Date.now()
        }));
    }
    ha(t) {
        if (!this.Jo()) return;
        const i = this.wa(),
            e = {};
        let s = !1;
        for (const [n, r] of Object.entries(i)) t.includes(n) ? s = !0 : e[n] = r;
        s && (O(e) ? this.Ko() : this.Zo(e));
    }
    ka() {
        this.Jo() && this.Ko();
    }
    getActivationTimestamp(t) {
        if (!this.ga().includes(t)) return;
        const i = this.wa()[t];
        return M(i) ? i : void 0;
    }
    ba() {
        const t = this.Sa();
        return this.$i.getProperty(t) || [];
    }
    ga() {
        const t = this.ba();
        if (0 === t.length) return [];
        const i = this.$i.getProperty(this.xa()),
            e = this.$i.getSessionId();
        return e && i === e ? t : [];
    }
    ya() {
        const t = this.$i.getSessionId();
        t && this.$a(t);
    }
    _a() {
        this.Ca();
    }
    Go(t) {
        const i = this.$i.getProperty(this.xa());
        if (i && i !== t) {
            const t = this.ba(),
                i = this.wa();
            t.length > 0 && (this.ma([]), t.filter((t) => M(i[t])).forEach((t) => this.da(t))), this._a(), this.ka(), t.length > 0 && this.pa();
        }
    }
    getActivatedIds() {
        return [...new Set([...this.ga(), ...this.Bo])].filter((t) => !this.Ta(t));
    }
    dispose() {
        var t, i, e;
        null === (t = this.Vo) || void 0 === t || t.call(this), this.Vo = void 0, null === (i = this.Po) || void 0 === i || i.call(this), this.Po = void 0, null === (e = this.ra) || void 0 === e || e.dispose(), this.ra = void 0;
    }
    reset() {
        this.Bo = [], this.ba().length > 0 && this.ma([]), this._a(), this.ka(), this.pa();
    }
    getEventToItemsMap() {
        return this.zo;
    }
    Ia() {
        return this.ra;
    }
};
var mc = class extends _c {
    constructor(t, i, e, s) {
        var n;
        super({
            subscribeCapture(i) {
                const e = t.onEvent((t) => i(t.event, t));
                return () => e.dispose();
            },
            subscribeSession(i) {
                const e = t.onSession(i);
                return () => e.dispose();
            },
            getSessionId() {
                var i;
                return null === (i = t.session) || void 0 === i ? void 0 : i.sessionId;
            },
            getProperty: (i) => t.kv.get(i),
            getActionUrl: null == e ? void 0 : e.getActionUrl,
            setElementSelectors: null !== (n = null == e ? void 0 : e.setElementSelectors) && void 0 !== n ? n : (i, e) => {
                var s;
                return null === (s = t.getExtension("autocapture")) || void 0 === s ? void 0 : s.setElementSelectors(i, e);
            }
        }, s), this.Ea = t, this.Ma = i, this.Wo();
    }
    Sa() {
        return fn;
    }
    xa() {
        return pn;
    }
    Jo() {
        return gn;
    }
    Zo(t) {
        this.Ea.kv.set({
            [gn]: t
        });
    }
    Ko() {
        this.Ea.kv.remove(gn);
    }
    Qo(t) {
        var i;
        let e;
        this.ea((i) => {
            e = i.find((i) => i.id === t);
        });
        const s = null == e || null === (i = e.appearance) || void 0 === i ? void 0 : i.surveyPopupDelaySeconds;
        return M(s) && s > 0;
    }
    Aa() {
        return _a.SHOWN;
    }
    ea(t) {
        this.Ma.getSurveys(t);
    }
    da(t) {
        this.Ma.cancelPendingSurvey(t);
    }
    aa() {
        return ih;
    }
    ma(t) {
        this.Ea.kv.set({
            [fn]: t
        });
    }
    $a(t) {
        this.Ea.kv.set({
            [pn]: t
        });
    }
    Ca() {
        this.Ea.kv.remove(pn);
    }
    Ta() {
        return !1;
    }
    la(t, i, e) {
        var s;
        if (t === _a.SENT && !1 === (null == e || null === (s = e.properties) || void 0 === s ? void 0 : s.$survey_completed)) return "ignore";
        let n;
        return this.ea((t) => {
            n = t.find((t) => t.id === i);
        }), !n || function(t) {
            var i;
            return qu(t) && !!(null === (i = t.conditions) || void 0 === i || null === (i = i.events) || void 0 === i ? void 0 : i.repeatedActivation) || "always" === t.schedule;
        }(n) ? t === _a.SHOWN ? "consume" : "ignore" : t === _a.SHOWN ? "persist" : t === _a.DISMISSED || t === _a.SENT ? "consume" : "ignore";
    }
    getSurveys() {
        return this.getActivatedIds();
    }
    getEventToSurveys() {
        return this.getEventToItemsMap();
    }
};
var yc = (t, i) => (null == t ? void 0 : t.then) ? t.then(i) : i(t);
var bc = "SDK is not enabled or survey functionality is not yet loaded";
var wc = "Disabled. Not loading surveys.";
var $c = class {
    constructor(t) {
        this.Ra = t, this.name = "surveys", this._surveyEventReceiver = null, this._surveyManager = null, this.Pa = !1, this.Oa = !1, this.Fa = [], this.Da = [], this.La = null, this.Na = null, this.Ti = !1, this.ja = new Set(), this.onRemoteConfig = (t) => {
            if (this.Ti) return;
            if (this.Fr.disableSurveys) return;
            if (!t.ok) return this.Oa = !0, this.qa({
                isLoaded: !1,
                error: "Remote config unavailable. Not loading surveys."
            }), ih.warn("Remote config unavailable. Not loading surveys.");
            const i = t.config.surveys;
            if (F(i)) return ih.warn("Flags not loaded yet. Not loading surveys.");
            this.Ba = N(i) ? i : i.length > 0, ih.info(`flags response received, isSurveysEnabled: ${this.Ba}`), this.loadIfEnabled();
        }, this.qa = (t) => {
            this.Da.slice().forEach((i) => this.za(i, t));
        };
    }
    setup(t) {
        if (!this.Ti) return this.Ha = t, yc(t.kv.initialize(), () => {
            if (this.Ha !== t || this.Ti) return;
            this.Ha = void 0, this.Ea = t;
            const i = t.onRemoteConfig(this.onRemoteConfig);
            this.Ti ? i.dispose() : (this.Ua = i, this.loadIfEnabled());
        });
    }
    dispose() {
        var t, i, e, s, n;
        this.Ti || (this.Ti = !0, this.Ha = void 0, this.Ea = void 0, null === (t = this.Ua) || void 0 === t || t.dispose(), this.Ua = void 0, null === (i = this._surveyEventReceiver) || void 0 === i || i.dispose(), this._surveyEventReceiver = null, null === (e = this._surveyManager) || void 0 === e || null === (s = e.dispose) || void 0 === s || s.call(e), this._surveyManager = null, this.Fa = [], this.Da.forEach((t) => {
            t.active = !1;
        }), this.Da = [], null === (n = this.Wa) || void 0 === n || n.call(this), this.Wa = void 0, this.La = null, this.ja.forEach((t) => clearTimeout(t)), this.ja.clear());
    }
    get Fr() {
        return this.Ra.get();
    }
    getRenderContext() {
        if (!this.Ea) return;
        const t = this;
        return {
            client: this.Ea,
            get config() {
                return t.Fr;
            },
            surveys: t
        };
    }
    initialize() {
        this.loadIfEnabled();
    }
    reset() {
        var t, i;
        null === (t = this._surveyManager) || void 0 === t || null === (i = t.clearInMemoryInProgressSurveyState) || void 0 === i || i.call(t);
        try {
            var e;
            null === (e = this._surveyEventReceiver) || void 0 === e || e.reset(), localStorage.removeItem("lastSeenSurveyDate");
            const t = [];
            for (let i = 0; i < localStorage.length; i++) {
                const e = localStorage.key(i);
                ((null == e ? void 0 : e.startsWith("seenSurvey_")) || (null == e ? void 0 : e.startsWith("inProgressSurvey_"))) && t.push(e);
            }
            t.forEach((t) => localStorage.removeItem(t));
        } catch (t) {}
        this.qa();
    }
    loadIfEnabled() {
        if (this.Ti || !this.Ea) return;
        const t = this.Fr;
        if (this._surveyManager) return;
        if (this.Pa) return void ih.info("Already initializing surveys, skipping...");
        if (t.disableSurveys) return void ih.info(wc);
        if (t.cookielessMode && this.Ea.isOptedOut) return void ih.info("Not loading surveys in cookieless mode without consent.");
        const i = this.Ra.getExtensions();
        if (!i) return void this.Va("PostHog Extensions not found.");
        if (R(this.Ba) && !t.advancedEnableSurveys) return;
        const e = this.Ba || t.advancedEnableSurveys;
        this.Pa = !0, this.Oa = !1;
        try {
            const t = i.generateSurveys;
            if (t) return this.Ga(t, e), void(this.Pa = !1);
            const s = i.loadExternalDependency;
            if (!s) return this.Va(vn), void(this.Pa = !1);
            s((t) => {
                try {
                    if (this.Ti) return;
                    const i = this.Ra.getExtensions();
                    t || !(null == i ? void 0 : i.generateSurveys) ? this.Va("Could not load surveys script", t) : this.Ga(i.generateSurveys, e);
                } finally {
                    this.Pa = !1;
                }
            });
        } catch (t) {
            throw this.Pa = !1, this.Va("Error initializing surveys", t), t;
        }
    }
    Ga(t, i) {
        var e;
        if (this.Ti) return;
        this._surveyManager = t(i), this._surveyEventReceiver = this.Qa(this.Ea, this.qa);
        const s = null === (e = this.Ea) || void 0 === e ? void 0 : e.kv.get(cn);
        s && this.Ja(s), ih.info("Surveys loaded successfully"), this.Za(), this.qa(), this.Ka({
            isLoaded: !0
        });
    }
    Qa(t, i) {
        return new mc(t, this, void 0, i);
    }
    Va(t, i) {
        this.Oa = !0, ih.error(t, i), this.qa({
            isLoaded: !1,
            error: t
        }), this.Ka({
            isLoaded: !1,
            error: t
        });
    }
    onSurveysLoaded(t) {
        return this.Fa.push(t), this._surveyManager && this.Ka({
            isLoaded: !0
        }), () => {
            this.Fa = this.Fa.filter((i) => i !== t);
        };
    }
    getSurveys(t, i = !1) {
        if (this.Ti) return;
        const e = this.Ea;
        if (!e) return t([], {
            isLoaded: !1,
            error: bc
        });
        if (this.Fr.disableSurveys) return ih.info(wc), t([]);
        const s = e.kv.get(cn);
        if (s && !i) return t(s, {
            isLoaded: !0
        }), void(this.Ya() && this.getSurveys(() => {}, !0));
        if (this.La) return void this.La.then(({
            surveys: i,
            context: e
        }) => {
            this.Ti || t(i, e);
        }).catch((t) => ih.error("Error in survey callback", t));
        const n = e.sendRequest("/api/surveys/", {
            method: "GET",
            query: {
                token: e.projectToken
            },
            sentAt: "query",
            timeoutMs: this.Fr.requestTimeoutMs
        }).then((t) => {
            try {
                return this.Xa(e, t);
            } catch (t) {
                return ih.error("Error processing surveys response", t), this.Xa(e, {
                    statusCode: 0,
                    error: t
                });
            }
        }, (t) => this.Xa(e, {
            statusCode: 0,
            error: t
        }));
        this.La = n;
        const r = () => {
            this.La === n && (this.La = null);
        };
        n.then((i) => {
            r(), this.Ti || (this.qa(i.context), t(i.surveys, i.context));
        }, r).catch((t) => ih.error("Error in survey callback", t));
    }
    Xa(t, i) {
        if (this.Ti) return {
            surveys: [],
            context: {
                isLoaded: !1,
                error: bc
            }
        };
        const e = i.statusCode;
        if (200 !== e || !i.json) {
            const t = `Surveys API could not be loaded, status: ${e}`;
            return 0 !== e ? ih.error(t) : i.error || ih.warn(t), this.Na = Date.now(), {
                surveys: [],
                context: {
                    isLoaded: !1,
                    error: t
                }
            };
        }
        this.Na = null;
        const s = i.json.surveys || [];
        return t.kv.set({
            [cn]: s,
            [dn]: Date.now()
        }), this.Ja(s), {
            surveys: s,
            context: {
                isLoaded: !0
            }
        };
    }
    Ja(t) {
        const i = t.filter((t) => function(t) {
            return !(!t.start_date || t.end_date);
        }(t) && (qu(t) || function(t) {
            var i;
            return !!(null === (i = t.conditions) || void 0 === i || null === (i = i.actions) || void 0 === i || null === (i = i.values) || void 0 === i ? void 0 : i.length);
        }(t)));
        this.tl(i);
    }
    tl(t) {
        var i;
        null === (i = this._surveyEventReceiver) || void 0 === i || i.replace(t);
    }
    Ya() {
        return this.el() && !this.La && !this.il();
    }
    el() {
        var t;
        const i = null === (t = this.Ea) || void 0 === t ? void 0 : t.kv.get(dn);
        return M(i) && Date.now() - i > 3e5;
    }
    il() {
        return M(this.Na) && 3e5 > Date.now() - this.Na;
    }
    markSurveyAsSeen(t, i) {
        var e;
        const s = {
            id: t,
            current_iteration: null !== (e = null == i ? void 0 : i.iteration) && void 0 !== e ? e : null
        };
        eh(s);
        try {
            localStorage.setItem("lastSeenSurveyDate", new Date().toISOString());
        } catch (t) {}
        this.qa();
    }
    Ka(t) {
        for (const i of this.Fa) {
            if (this.Ti) return;
            try {
                t.isLoaded ? this.getSurveys(i) : i([], t);
            } catch (t) {
                ih.error("Error in survey callback", t);
            }
        }
    }
    getActiveMatchingSurveys(t, i = !1) {
        if (!F(this._surveyManager)) return this._surveyManager.getActiveMatchingSurveys(t, i);
        ih.warn("init was not called");
    }
    onActiveMatchingSurveysChanged(t) {
        var i;
        if (this.Ti) return () => {};
        const e = {
            callback: t,
            active: !0,
            revision: 0
        };
        this.Da.push(e), this.Za();
        const s = null === (i = this.Ea) || void 0 === i ? void 0 : i.kv.get(cn);
        return this.Fr.disableSurveys || !this._surveyManager && this.Oa && !this.Pa || !s && !F(this.Na) && !this.La ? this.za(e, {
            isLoaded: !1
        }) : this._surveyManager && this.za(e), () => {
            var t;
            e.active = !1, this.Da = this.Da.filter((t) => t !== e), 0 === this.Da.length && (null === (t = this.Wa) || void 0 === t || t.call(this), this.Wa = void 0);
        };
    }
    Za() {
        var t, i, e;
        this._surveyManager && this.Da.length > 0 && (null !== (t = this.Wa) && void 0 !== t || (this.Wa = null === (i = (e = this.Ra).onMatchingConditionsChanged) || void 0 === i ? void 0 : i.call(e, this.qa)));
    }
    za(t, i) {
        if (this.Ti || !t.active) return;
        const e = ++t.revision,
            s = (s) => {
                if (!this.Ti && t.active && e === t.revision) try {
                    const e = null != i ? i : {
                            isLoaded: !0
                        },
                        n = JSON.stringify([s, e]);
                    if (n === t.lastResult) return;
                    t.lastResult = n, t.callback(s, e);
                } catch (t) {
                    ih.error("Error in active matching surveys callback", t);
                }
            };
        try {
            i && !i.isLoaded ? s([]) : this.getActiveMatchingSurveys(s);
        } catch (t) {
            ih.error("Error in active matching surveys callback", t);
        }
    }
    nl(t) {
        let i = null;
        return this.getSurveys((e) => {
            var s;
            i = null !== (s = e.find((i) => i.id === t)) && void 0 !== s ? s : null;
        }), i;
    }
    sl(t) {
        if (F(this._surveyManager)) return {
            eligible: !1,
            reason: bc
        };
        const i = "string" == typeof t ? this.nl(t) : t;
        return i ? this._surveyManager.checkSurveyEligibility(i) : {
            eligible: !1,
            reason: "Survey not found"
        };
    }
    rl(t) {
        var i;
        if (!(null === (i = this.Ea) || void 0 === i ? void 0 : i.canCapture)) return {
            eligible: !1,
            reason: "PostHog is not capturing, so a survey response cannot be recorded"
        };
        if (F(this._surveyManager)) return {
            eligible: !1,
            reason: bc
        };
        const e = "string" == typeof t ? this.nl(t) : t;
        return e ? this._surveyManager.checkSurveyRenderability(e) : {
            eligible: !1,
            reason: "Survey not found"
        };
    }
    canRenderSurvey(t) {
        if (F(this._surveyManager)) return ih.warn("init was not called"), {
            visible: !1,
            disabledReason: bc
        };
        const i = this.rl(t);
        return {
            visible: i.eligible,
            disabledReason: i.reason
        };
    }
    canRenderSurveyAsync(t, i) {
        return F(this._surveyManager) ? (ih.warn("init was not called"), Promise.resolve({
            visible: !1,
            disabledReason: bc
        })) : new Promise((e) => {
            this.getSurveys((i) => {
                var s;
                const n = null !== (s = i.find((i) => i.id === t)) && void 0 !== s ? s : null;
                if (n) {
                    const t = this.rl(n);
                    e({
                        visible: t.eligible,
                        disabledReason: t.reason
                    });
                } else e({
                    visible: !1,
                    disabledReason: "Survey not found"
                });
            }, i);
        });
    }
    renderSurvey(t, i, e) {
        var s, n, r;
        if (!(null === (s = this.Ea) || void 0 === s ? void 0 : s.canCapture)) return;
        if (F(this._surveyManager)) return void ih.warn("init was not called");
        const o = "string" == typeof t ? this.nl(t) : t;
        if (!(null == o ? void 0 : o.id)) return void ih.warn("Survey not found");
        if (!sh.includes(o.type)) return void ih.warn(`Surveys of type ${o.type} cannot be rendered in the app`);
        const l = null === (n = typeof document > "u" ? void 0 : document) || void 0 === n ? void 0 : n.querySelector(i);
        if (l) {
            if (null === (r = o.appearance) || void 0 === r ? void 0 : r.surveyPopupDelaySeconds) {
                ih.info(`Rendering survey ${o.id} with delay of ${o.appearance.surveyPopupDelaySeconds} seconds`);
                const t = setTimeout(() => {
                    var i, s, n;
                    this.ja.delete(t), !this.Ti && (null === (i = this.Ea) || void 0 === i ? void 0 : i.canCapture) && (ih.info(`Rendering survey ${o.id} with delay of ${null === (s = o.appearance) || void 0 === s ? void 0 : s.surveyPopupDelaySeconds} seconds`), null === (n = this._surveyManager) || void 0 === n || n.renderSurvey(o, l, e), ih.info(`Survey ${o.id} rendered`));
                }, 1e3 * o.appearance.surveyPopupDelaySeconds);
                return void this.ja.add(t);
            }
            this._surveyManager.renderSurvey(o, l, e);
        } else ih.warn("Survey element not found");
    }
    displaySurvey(t, i) {
        var e, s;
        if (!(null === (e = this.Ea) || void 0 === e ? void 0 : e.canCapture)) return;
        if (F(this._surveyManager)) return void ih.warn("init was not called");
        const n = this.nl(t);
        if (!n) return void ih.warn("Survey not found");
        let r = n;
        if ((null === (s = n.appearance) || void 0 === s ? void 0 : s.surveyPopupDelaySeconds) && i.ignoreDelay && (r = wi(wi({}, n), {}, {
                appearance: wi(wi({}, n.appearance), {}, {
                    surveyPopupDelaySeconds: 0
                })
            })), i.displayType !== ya.Popover && i.initialResponses && ih.warn("initialResponses is only supported for popover surveys. prefill will not be applied."), !1 === i.ignoreConditions) {
            const t = this.sl(n);
            if (!t.eligible) return void ih.warn("Survey is not eligible to be displayed: ", t.reason);
        }
        i.displayType !== ya.Inline ? this._surveyManager.handlePopoverSurvey(r, i) : this.renderSurvey(r, i.selector, i.properties);
    }
    cancelPendingSurvey(t) {
        F(this._surveyManager) ? ih.warn("init was not called") : this._surveyManager.cancelSurvey(t);
    }
    handlePageUnload() {
        var t, i;
        null === (t = this._surveyManager) || void 0 === t || null === (i = t.handlePageUnload) || void 0 === i || i.call(t);
    }
};
var Sc = class {
    constructor(t) {
        this._instance = t;
    }
    get() {
        var t, i, e, s;
        const n = null === (t = this._instance) || void 0 === t ? void 0 : t.config;
        return {
            disableSurveys: !!(null == n ? void 0 : n.disable_surveys),
            cookielessMode: !!(null == n ? void 0 : n.cookieless_mode),
            advancedEnableSurveys: !!(null == n ? void 0 : n.advanced_enable_surveys),
            requestTimeoutMs: null !== (i = null == n ? void 0 : n.surveys_request_timeout_ms) && void 0 !== i ? i : 1e4,
            prefillFromUrl: !!(null == n || null === (e = n.surveys) || void 0 === e ? void 0 : e.prefillFromUrl),
            automaticDisplay: !(null == n ? void 0 : n.disable_surveys_automatic_display),
            featureFlagEvaluation: !(null == n ? void 0 : n.advanced_disable_feature_flags),
            overrideLanguage: null == n ? void 0 : n.override_display_language,
            prepareStylesheet: null == n ? void 0 : n.prepare_external_dependency_stylesheet,
            get_current_url: null == n ? void 0 : n.get_current_url,
            uiHost: null === (s = this._instance) || void 0 === s || null === (s = s.requestRouter) || void 0 === s ? void 0 : s.endpointFor("ui", "")
        };
    }
    getExtensions() {
        const t = null == c ? void 0 : c.__PosthogExtensions__;
        if (!t || !this._instance) return;
        const i = this._instance,
            {
                generateSurveys: e,
                loadExternalDependency: s
            } = t;
        return {
            generateSurveys: e ? (t) => e(i, t) : void 0,
            loadExternalDependency: s ? (t) => s(i, "surveys", t) : void 0
        };
    }
    onMatchingConditionsChanged(i) {
        var e, s;
        const n = null === (e = this._instance) || void 0 === e ? void 0 : e._addCaptureHook((t) => {
                "$pageview" !== t && t !== _a.SHOWN && t !== _a.DISMISSED && t !== _a.SENT || i();
            }),
            r = () => i();
        Hr(t, "PHSurveyShown", r);
        let o = !1;
        const l = null === (s = this._instance) || void 0 === s ? void 0 : s.onFeatureFlags(() => {
            o && i();
        });
        return o = !0, () => {
            o = !1, null == n || n(), null == l || l(), null == t || t.removeEventListener("PHSurveyShown", r);
        };
    }
};
var xc = (null == t ? void 0 : t.location) ? Fl(t.location.hash, "__posthog") || Fl(location.hash, "state") : null;
var Ec = "_postHogToolbarParams";
var kc = Us("[Toolbar]");
var Tc = Us("[FeatureFlags]");
var Pc = Us("[FeatureFlags]", {
    debugEnabled: !0
});
var Oc = "\" failed. Feature flags didn't load in time.";
var Rc = [502, 504];
var Cc = [
    "click",
    "keydown",
    "wheel",
    "touchstart",
    "pointerdown"
];
var Ac = "connection_error";
var Ic = (t) => {
    const i = {};
    for (let e = 0; t.length > e; e++) i[t[e]] = !0;
    return i;
};
var Fc = (t) => {
    const i = {};
    for (const [e, s] of Nr(t || {})) s && (i[e] = s);
    return i;
};
var Mc = (t, i) => t.distinctId === i.distinctId && t.sessionId === i.sessionId && ((t, i) => {
    const e = Object.keys(t);
    return e.length === Object.keys(i).length && e.every((e) => t[e] === i[e]);
})(t.groups, i.groups);
var Dc = class {
    constructor(t) {
        this.name = "featureFlags", this.Td = !1, this.featureFlagEventHandlers = [], this.A = Tc, this.Id = {}, this.Ed = {}, this.Md = [], this.Ad = new Set(), this.Rd = new Set(), this.Pd = !1, this.Od = !1, this.Fd = 0, this.Dd = !1, this.Ld = !1, this.Nd = !1, this.jd = new Map(), this.qd = !1, this.Bd = !1, this.zd = !1, this.Hd = 0, this.Ud = !1, this.sn = () => {
            const t = this.Wd();
            this.Hd = 0, t && this.reloadFeatureFlags();
        }, this.Vd = () => {
            var t, i;
            const e = this.Gd,
                s = null !== (t = this.Qd) && void 0 !== t ? t : e;
            R(e) || R(s) || this.Fr.remoteRequestsDisabled || !this.Jd || "hidden" === this.Jd.visibilityState || Date.now() - (null !== (i = this.Zd) && void 0 !== i ? i : 0) < s || (this.Qd = this.Ud || !this.Fr.idleRefreshBackoff ? e : Math.min(2 * s, 36e5), this.Ud = !1, this.reloadFeatureFlags(), this.Kd());
        }, this.Yd = () => {
            this.Ud && this.Qd === this.Gd || this.Xd();
        }, this.an = () => {
            var t;
            "visible" === (null === (t = this.Jd) || void 0 === t ? void 0 : t.visibilityState) && this.Xd();
        }, this.Ra = t;
    }
    get tv() {}
    ev() {
        this.Ea && this.iv();
    }
    setup(t) {
        try {
            this.nv = typeof window > "u" ? void 0 : window, this.Jd = typeof document > "u" ? void 0 : document;
        } catch (t) {
            this.nv = void 0, this.Jd = void 0;
        }
        return this.Ha = t, this.A = t.logger.createLogger("[FeatureFlags]"), yc(t.kv.initialize(), () => {
            this.Ha === t && (this.Ha = void 0, this.Ea = t, this.sv(t));
        });
    }
    sv(t) {
        var i;
        if (this.Ea === t) return this.nv && Hr(this.nv, "online", this.sn), this.iv(), this.rv = t.registerDynamicEventProperties(() => this.ov() ? this.Id : this.Ed), this.av = null === (i = this.tv) || void 0 === i ? void 0 : i.onCrossTabFeatureFlagChange(() => {
            this.lv(), this.uv(), this.hv();
        }), this.uv(), this.initialize();
    }
    Xd() {
        this.Ud = !0, this.Qd = this.Gd, this.Vd();
    }
    iv() {
        var t;
        const i = this.Fr.refreshIntervalMs,
            e = !this.Fr.remoteRequestsDisabled && this.Jd && !R(i) && i > 0 ? i : void 0;
        this.Fr.idleRefreshBackoff || (this.Qd = e), e !== this.Gd && (this.dv(), R(e) || (this.Gd = e, this.Qd = e, this.Kd(), (null === (t = this.Jd) || void 0 === t ? void 0 : t.addEventListener) && (Hr(this.Jd, un, this.an), Fr(Cc, (t) => {
            Hr(this.Jd, t, this.Yd, {
                capture: !0
            });
        }))));
    }
    Kd() {
        R(this.Gd) || (R(this.vv) || clearInterval(this.vv), this.Zd = Date.now(), this.vv = setInterval(this.Vd, this.Gd));
    }
    dv() {
        var t, i;
        R(this.vv) || (clearInterval(this.vv), this.vv = void 0, null === (t = this.Jd) || void 0 === t || null === (i = t.removeEventListener) || void 0 === i || i.call(t, "visibilitychange", this.an), Fr(Cc, (t) => {
            var i, e;
            null === (i = this.Jd) || void 0 === i || null === (e = i.removeEventListener) || void 0 === e || e.call(i, t, this.Yd, {
                capture: !0
            });
        })), this.Gd = void 0, this.Qd = void 0, this.Ud = !1, this.Zd = void 0;
    }
    destroy() {
        this.fv();
    }
    dispose() {
        this.fv();
    }
    fv() {
        var t, i, e;
        this.dv(), this.Fd++, this.Ld = !1, this.Ha = void 0, this.pv(this.Ad, "cancelled"), this.pv(this.Rd, "cancelled"), this.Ea && (this.gv(), null === (t = this.rv) || void 0 === t || t.dispose(), this.rv = void 0, null === (i = this.av) || void 0 === i || i.call(this), this.av = void 0, this.Md = [], null === (e = this.nv) || void 0 === e || e.removeEventListener("online", this.sn), this.Ea = void 0);
    }
    get Fr() {
        return this.Ra.get();
    }
    mv(t) {
        var i;
        return this.yv && t in this.yv ? this.yv[t] : null === (i = this.Ea) || void 0 === i ? void 0 : i.kv.get(t);
    }
    lv() {
        return !!this.yv && (this.yv = void 0, !0);
    }
    bv() {
        var t;
        return !R(null === (t = this.Ea) || void 0 === t ? void 0 : t.kv.get("$enabled_feature_flags")) && this.lv();
    }
    $t(t) {
        this._v(() => {
            var i;
            return null === (i = this.Ea) || void 0 === i ? void 0 : i.kv.set(t);
        });
    }
    wv(t, i, e) {
        if (!this.tv || !t.$enabled_feature_flags) return;
        const s = this.mv("$enabled_feature_flags") || {},
            n = t.$enabled_feature_flags || {},
            r = i.flags || i.featureFlags,
            o = i.flags ? Object.entries(i.flags).filter(([, t]) => !(null == t ? void 0 : t.failed)).map(([t]) => t) : [],
            l = !!i.errorsWhileComputingFlags && !!i.flags,
            a = l ? o : e && !k(r) ? Object.keys(r || {}) : Array.from(new Set([...Object.keys(s), ...Object.keys(n)])),
            u = this.mv("$feature_flag_payloads") || {},
            h = t.$feature_flag_payloads || {},
            c = l || e ? a : Array.from(new Set([...Object.keys(u), ...Object.keys(h)])),
            d = !l && !e,
            v = !!d || a,
            f = !!d || c,
            p = {
                [Ks]: v,
                [tn]: v,
                [on]: f
            };
        t.$feature_flag_details && (p[Ys] = v);
        for (const i of [
                Zs,
                Xs,
                Qs
            ]) R(t[i]) || (p[i] = !0);
        this.tv.markCrossTabFeatureFlagChanges(p);
    }
    Dt(t) {
        this._v(() => {
            var i;
            return null === (i = this.Ea) || void 0 === i ? void 0 : i.kv.remove(t);
        });
    }
    _v(t) {
        try {
            t();
        } catch (t) {
            this.A.error("Failed to update feature flag persistence", t);
        }
    }
    uv() {
        const t = {};
        for (const i of [
                Ks,
                on,
                Zs,
                ln
            ]) {
            const e = this.mv(i);
            R(e) || (t[i] = e);
        }
        this.Id = t;
        const i = wi({}, t),
            e = this.mv(tn);
        if (e)
            for (const [t, s] of Object.entries(e)) i[`$feature/${t}`] = s;
        this.Ed = i;
    }
    ov() {
        const t = this.Fr.cacheTtlMs;
        if (!t || 0 >= t) return !1;
        const i = this.mv(Xs);
        return "number" != typeof i || Date.now() - i > t;
    }
    Sv() {
        return !!this.ov() && (this.zd || this.Od || (this.zd = !0, this.A.warn("Feature flag cache is stale, triggering refresh..."), this.reloadFeatureFlags()), !0);
    }
    xv() {
        const t = this.Fr.evaluationContexts;
        return (null == t ? void 0 : t.length) ? t.filter((t) => {
            const i = t && "string" == typeof t && t.trim().length > 0;
            return i || this.A.error("Invalid evaluation context found:", t, "Expected non-empty string"), i;
        }) : [];
    }
    $v() {
        const t = this.Fr.flagKeys;
        if (!R(t)) return t.filter((t) => {
            const i = t && "string" == typeof t && t.trim().length > 0;
            return i || this.A.error("Invalid flag key found:", t, "Expected non-empty string"), i;
        });
    }
    initialize() {
        var t, i;
        const e = this.Fr,
            s = null !== (t = null === (i = e.bootstrap) || void 0 === i ? void 0 : i.featureFlags) && void 0 !== t ? t : {};
        if (Object.keys(s).length) {
            var n, r;
            const t = null !== (n = null === (r = e.bootstrap) || void 0 === r ? void 0 : r.featureFlagPayloads) && void 0 !== n ? n : {},
                i = Object.keys(s).filter((t) => !R(s[t])).reduce((t, i) => (t[i] = s[i], t), {}),
                o = Object.keys(t).filter((t) => i[t]).reduce((i, e) => (i[e] = t[e], i), {});
            return this.Cv({
                featureFlags: i,
                featureFlagPayloads: o
            }, void 0, {
                persist: !1
            });
        }
    }
    updateFlags(t, i, e) {
        var s, n;
        const r = (null == e ? void 0 : e.merge) && null !== (s = this.mv("$enabled_feature_flags")) && void 0 !== s ? s : {},
            o = (null == e ? void 0 : e.merge) && null !== (n = this.mv("$feature_flag_payloads")) && void 0 !== n ? n : {},
            l = wi(wi({}, r), t),
            a = wi(wi({}, o), i),
            u = {};
        for (const [t, i] of Object.entries(l)) u[t] = {
            key: t,
            enabled: fe(i),
            variant: pe(i),
            reason: void 0,
            metadata: R(null == a ? void 0 : a[t]) ? void 0 : {
                id: 0,
                version: void 0,
                description: void 0,
                payload: a[t]
            }
        };
        this.Cv({
            flags: u
        });
    }
    get hasLoadedFlags() {
        return this.Pd;
    }
    getFlags() {
        return Object.keys(this.getFlagVariants());
    }
    getFlagsWithDetails() {
        const t = this.mv(Ys),
            i = this.mv(ln),
            e = this.mv(an);
        if (!e && !i) return t || {};
        const s = Dr({}, t || {}),
            n = [...new Set([...Object.keys(e || {}), ...Object.keys(i || {})])];
        for (const t of n) {
            var r, o;
            const n = s[t],
                l = null == i ? void 0 : i[t],
                a = R(l) ? null !== (r = null == n ? void 0 : n.enabled) && void 0 !== r && r : !!l,
                u = R(l) ? null == n ? void 0 : n.variant : "string" == typeof l ? l : void 0,
                h = null == e ? void 0 : e[t],
                c = wi(wi({}, n), {}, {
                    enabled: a,
                    variant: a ? null != u ? u : null == n ? void 0 : n.variant : void 0
                });
            a !== (null == n ? void 0 : n.enabled) && (c.original_enabled = null == n ? void 0 : n.enabled), u !== (null == n ? void 0 : n.variant) && (c.original_variant = null == n ? void 0 : n.variant), h && (c.metadata = wi(wi({}, null == n ? void 0 : n.metadata), {}, {
                payload: h,
                original_payload: null == n || null === (o = n.metadata) || void 0 === o ? void 0 : o.payload
            })), s[t] = c;
        }
        return this.Td || (this.A.warn(" Overriding feature flag details!", {
            flagDetails: t,
            overriddenPayloads: e,
            finalDetails: s
        }), this.Td = !0), s;
    }
    getAllFeatureFlags() {
        const t = this.getFlagVariants(),
            i = this.getFlagPayloads();
        return Object.keys(t).map((e) => {
            const s = t[e];
            return {
                key: e,
                enabled: fe(s),
                variant: pe(s),
                payload: ve(i[e])
            };
        });
    }
    getFlagVariants() {
        const t = this.mv(tn),
            i = this.mv(ln);
        if (!i) return t || {};
        const e = Dr({}, t || {}),
            s = Object.keys(i);
        for (let t = 0; s.length > t; t++) e[s[t]] = i[s[t]];
        return this.Td || (this.A.warn(" Overriding feature flags!", {
            enabledFlags: t,
            overriddenFlags: i,
            finalFlags: e
        }), this.Td = !0), e;
    }
    getFlagPayloads() {
        const t = this.mv(on),
            i = this.mv(an);
        if (!i) return t || {};
        const e = Dr({}, t || {}),
            s = Object.keys(i);
        for (let t = 0; s.length > t; t++) e[s[t]] = i[s[t]];
        return this.Td || (this.A.warn(" Overriding feature flag payloads!", {
            flagPayloads: t,
            overriddenPayloads: i,
            finalPayloads: e
        }), this.Td = !0), e;
    }
    reloadFeatureFlags() {
        this.Dd || this.Fr.featureFlagsDisabled || this.Wd() || (this.Nd && this.A.warn("reloadFeatureFlags() was called inside an onFeatureFlags callback. This callback also runs when flags change in other tabs, so this can cause a request loop."), this.Od && (this.Ld = !0), this.Tv || (this.Md.slice().forEach((t) => {
            try {
                t();
            } catch (t) {
                this.A.error("Error while running feature flags reloading callback", t);
            }
        }), this.Tv = setTimeout(() => {
            this.Iv();
        }, 5)));
    }
    reloadFeatureFlagsAsync() {
        return !this.Ea || this.Dd || this.Fr.featureFlagsDisabled || this.Fr.remoteRequestsDisabled || this.Wd() ? Promise.resolve({
            status: "skipped"
        }) : new Promise((t) => {
            this.Ad.add(t), this.reloadFeatureFlags();
        });
    }
    pv(t, i) {
        t.forEach((t) => t({
            status: i
        })), t.clear();
    }
    gv() {
        clearTimeout(this.Tv), this.Tv = void 0;
    }
    onReloading(t) {
        return this.Md.push(t), () => {
            this.Md = this.Md.filter((i) => i !== t);
        };
    }
    ensureFlagsLoaded() {
        this.Pd || this.Od || this.Tv || this.reloadFeatureFlags();
    }
    setAnonymousDistinctId(t) {
        this.$anon_distinct_id = t;
    }
    setReloadingPaused(t) {
        this.Dd = t;
    }
    resetFlagCallReported() {
        this.Dt(nn), this.jd = new Map();
    }
    sendFlagCallsPendingCapture() {
        var t;
        if (0 !== this.jd.size && !this.qd && (null === (t = this.Ea) || void 0 === t ? void 0 : t.canCapture) && !this.Ea.isRateLimited) {
            this.qd = !0;
            try {
                const t = this.getFlagVariants();
                for (const i of Array.from(this.jd.keys())) {
                    const e = this.jd.get(i);
                    if (e) {
                        if (e.value !== String(t[i]) || !Mc(e.context, this.Ev())) {
                            this.jd.delete(i);
                            continue;
                        }
                        if (this.getFeatureFlagResult(i), this.jd.has(i)) break;
                    }
                }
            } finally {
                this.qd = !1;
            }
        }
    }
    Iv(t) {
        var i;
        this.gv();
        const e = this.Ea;
        if (!e || this.Fr.remoteRequestsDisabled || this.Wd()) return void this.pv(this.Ad, "skipped");
        if (this.Od) return void(this.Ld = !0);
        const s = {
            token: e.projectToken,
            distinct_id: e.distinctId,
            groups: e.groups,
            $anon_distinct_id: this.$anon_distinct_id,
            person_properties: wi(wi(wi({}, e.initialPersonProperties), this.mv("$stored_person_properties") || {}), {}, {
                $lib: e.library.name,
                $lib_version: e.library.version
            }),
            group_properties: this.mv(en),
            timezone: kl()
        };
        R(e.deviceId) || (s.$device_id = e.deviceId), ((null == t ? void 0 : t.disableFlags) || this.Fr.featureFlagsDisabled) && (s.disable_flags = !0);
        const n = this.xv();
        n.length && (s.evaluation_contexts = n);
        const r = this.$v();
        R(r) || (s.flag_keys = r);
        const o = this.Fr.onlyEvaluateSurveyFeatureFlags,
            l = "/flags/?v=2" + (o ? "&only_evaluate_survey_feature_flags=true" : ""),
            a = this.Fd,
            u = this.Ad;
        this.Ad = new Set(), this.Rd = u, this.Od = !0;
        const h = () => {
                this.Ld && (this.Ld = !1, this.Iv());
            },
            c = (t) => {
                var i, e;
                const n = null !== (i = t.json) && void 0 !== i ? i : {},
                    r = 200 !== t.statusCode;
                if (this.Od = !1, a !== this.Fd) return void h();
                if (this.Mv(t.statusCode), r || this.Ld || (this.$anon_distinct_id = void 0), s.disable_flags && !this.Ld) return void this.pv(u, "skipped");
                this.Bd = !r;
                const l = [];
                t.error ? l.push(t.error instanceof Error && "AbortError" === t.error.name ? "timeout" : t.error instanceof Error ? Ac : "unknown_error") : 200 !== t.statusCode && l.push(`api_error_${t.statusCode}`), n.errorsWhileComputingFlags && l.push("errors_while_computing_flags");
                const c = !!(null === (e = n.quotaLimited) || void 0 === e ? void 0 : e.includes("feature_flags"));
                c && l.push("quota_limited"), this.$t({
                    [Js]: l
                }), c ? this.A.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.") : s.disable_flags || this.Cv(n, r, {
                    partialResponse: o
                }), this.pv(u, s.disable_flags ? "skipped" : l.length || !n.flags && !n.featureFlags ? "error" : "loaded"), h();
            },
            d = (t) => {
                this.Od = !1, a === this.Fd ? (this.$t({
                    [Js]: [Ac]
                }), this.A.error("Feature flag request failed", t), this.bv() && this.hv(!0), this.pv(u, "error"), h()) : h();
            };
        let v = null !== (i = this.Fr.requestMaxRetries) && void 0 !== i ? i : 1;
        const f = () => v > 0 && a === this.Fd,
            p = () => {
                if (a !== this.Fd || !this.Ea || this.Fr.remoteRequestsDisabled) return this.Od = !1, this.pv(u, "skipped"), void h();
                try {
                    e.sendRequest(l, {
                        target: "flags",
                        method: "POST",
                        body: s,
                        compression: this.Fr.compression,
                        sentAt: "body",
                        timeoutMs: this.Fr.requestTimeoutMs
                    }).then((t) => {
                        if (((t) => Rc.includes(t.statusCode) || ((t) => 0 === t.statusCode && t.error instanceof Error && "AbortError" === t.error.name)(t))(t) && f()) return v--, void setTimeout(p, 500);
                        c(t);
                    }).catch(d);
                } catch (t) {
                    d(t);
                }
            };
        p();
    }
    Wd() {
        return Ol(this.Hd, 3);
    }
    Mv(t) {
        this.Hd = Rl(t, this.Hd, 3, () => this.A.warn("Feature flag requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped refreshing feature flags; will try again when connectivity changes."));
    }
    getFeatureFlag(t, i = {}) {
        var e;
        if (i.fresh && !this.Bd) return;
        if (!(this.Pd || this.getFlags() && this.getFlags().length > 0)) return void this.A.warn("getFeatureFlag for key \"" + t + Oc);
        if (this.Sv()) return;
        const s = this.getFeatureFlagResult(t, i);
        return null !== (e = null == s ? void 0 : s.variant) && void 0 !== e ? e : null == s ? void 0 : s.enabled;
    }
    getFeatureFlagDetails(t) {
        return this.getFlagsWithDetails()[t];
    }
    getFeatureFlagPayload(t) {
        const i = this.getFeatureFlagResult(t, {
            send_event: !1
        });
        return null == i ? void 0 : i.payload;
    }
    getFeatureFlagResult(t, i = {}) {
        if (i.fresh && !this.Bd) return;
        if (!(this.Pd || this.getFlags() && this.getFlags().length > 0)) return void this.A.warn("getFeatureFlagResult for key \"" + t + Oc);
        if (this.Sv()) return;
        const e = this.getFlagVariants(),
            s = t in e,
            n = e[t],
            r = this.getFlagPayloads()[t],
            o = String(n),
            l = this.mv("$feature_flag_request_id") || void 0,
            a = this.mv("$feature_flag_evaluated_at") || void 0;
        let u, h = this.mv("$flag_call_reported") || {};
        if (this.Fr.deduplicateCallsPerSession) {
            var c;
            const t = null === (c = this.Ea) || void 0 === c || null === (c = c.session) || void 0 === c ? void 0 : c.sessionId,
                i = this.mv(rn);
            t && t !== i && (h = {}, u = t);
        }
        if (!i.send_event && "send_event" in i) u && this.$t({
            [nn]: h,
            [rn]: u
        });
        else {
            var d, v, f;
            const i = !(null === (d = this.Ea) || void 0 === d ? void 0 : d.canCapture),
                e = !i && !(null === (v = this.Ea) || void 0 === v ? void 0 : v.isRateLimited);
            var p;
            if (e ? this.jd.delete(t) : (i && Object.keys(h).length > 0 && (h = {}, this.$t({
                    [nn]: h
                })), (null === (p = h[t]) || void 0 === p ? void 0 : p.includes(o)) || this.Av(t, o)), e && !(null === (f = h[t]) || void 0 === f ? void 0 : f.includes(o))) {
                var g, _, m, y, b, w, S, x, E, T, P, O, C;
                k(h[t]) ? h[t].push(o) : h[t] = [o], this.$t(wi({
                    [nn]: h
                }, u ? {
                    [rn]: u
                } : {}));
                const i = this.getFeatureFlagDetails(t),
                    e = [...null !== (g = this.mv("$feature_flag_errors")) && void 0 !== g ? g : []];
                R(n) && e.push("flag_missing");
                const s = {
                    $feature_flag: t,
                    $feature_flag_response: n,
                    $feature_flag_payload: null != r ? r : null,
                    $feature_flag_request_id: l,
                    $feature_flag_evaluated_at: a,
                    $feature_flag_bootstrapped_response: null !== (_ = null === (m = this.Fr.bootstrap) || void 0 === m || null === (m = m.featureFlags) || void 0 === m ? void 0 : m[t]) && void 0 !== _ ? _ : null,
                    $feature_flag_bootstrapped_payload: null !== (y = null === (b = this.Fr.bootstrap) || void 0 === b || null === (b = b.featureFlagPayloads) || void 0 === b ? void 0 : b[t]) && void 0 !== y ? y : null,
                    $used_bootstrap_value: !this.Bd
                };
                R(null == i || null === (w = i.metadata) || void 0 === w ? void 0 : w.has_experiment) || (s.$feature_flag_has_experiment = i.metadata.has_experiment), R(null == i || null === (S = i.metadata) || void 0 === S ? void 0 : S.version) || (s.$feature_flag_version = i.metadata.version);
                const c = null !== (x = null == i || null === (E = i.reason) || void 0 === E ? void 0 : E.description) && void 0 !== x ? x : null == i || null === (T = i.reason) || void 0 === T ? void 0 : T.code;
                c && (s.$feature_flag_reason = c), (null == i || null === (P = i.metadata) || void 0 === P ? void 0 : P.id) && (s.$feature_flag_id = i.metadata.id), R(null == i ? void 0 : i.original_variant) && R(null == i ? void 0 : i.original_enabled) || (s.$feature_flag_original_response = R(i.original_variant) ? i.original_enabled : i.original_variant), (null == i || null === (O = i.metadata) || void 0 === O ? void 0 : O.original_payload) && (s.$feature_flag_original_payload = null == i || null === (C = i.metadata) || void 0 === C ? void 0 : C.original_payload), e.length && (s.$feature_flag_error = e.join(",")), this.Rv(s) || (this.Pv(t, o), this.Av(t, o));
            } else u && this.$t({
                [nn]: h,
                [rn]: u
            });
        }
        return s ? {
            key: t,
            enabled: !!n,
            variant: "string" == typeof n ? n : void 0,
            payload: ve(r)
        } : void 0;
    }
    Rv(t) {
        try {
            var i;
            return !1 !== (null === (i = this.Ea) || void 0 === i ? void 0 : i.capture("$feature_flag_called", t));
        } catch (t) {
            return this.A.error("Failed to capture feature flag call", t), !0;
        }
    }
    Av(t, i) {
        this.jd.set(t, {
            value: i,
            context: this.Ev()
        });
    }
    Ev() {
        var t, i, e;
        return {
            distinctId: null === (t = this.Ea) || void 0 === t ? void 0 : t.distinctId,
            groups: wi({}, null === (i = this.Ea) || void 0 === i ? void 0 : i.groups),
            sessionId: this.Fr.deduplicateCallsPerSession ? null === (e = this.Ea) || void 0 === e || null === (e = e.session) || void 0 === e ? void 0 : e.sessionId : void 0
        };
    }
    Pv(t, i) {
        const e = this.mv("$flag_call_reported") || {},
            s = e[t];
        k(s) && s.includes(i) && (e[t] = s.filter((t) => t !== i), this.$t({
            [nn]: e
        }));
    }
    getRemoteConfigPayload(t, i) {
        this.Ov(t, i);
    }
    Ov(t, i) {
        var e = this;
        return Y(function*() {
            const s = e.Ea;
            if (!s) return;
            const n = {
                    distinct_id: s.distinctId,
                    token: s.projectToken,
                    person_properties: {
                        $lib: s.library.name,
                        $lib_version: s.library.version
                    }
                },
                r = e.xv();
            r.length && (n.evaluation_contexts = r);
            const o = e.$v();
            let l;
            R(o) || (n.flag_keys = o);
            try {
                var a;
                const i = null === (a = (yield s.sendRequest("/flags/?v=2", {
                    target: "flags",
                    method: "POST",
                    body: n,
                    compression: e.Fr.compression,
                    sentAt: "body",
                    timeoutMs: e.Fr.requestTimeoutMs
                })).json) || void 0 === a ? void 0 : a.featureFlagPayloads;
                l = (null == i ? void 0 : i[t]) || void 0;
            } catch (t) {
                return void e.A.error("Remote config feature flag request failed", t);
            }
            try {
                i(l);
            } catch (t) {
                e.A.error("Remote config feature flag callback failed", t);
            }
        })();
    }
    isFeatureEnabled(t, i = {}) {
        if (i.fresh && !this.Bd) return i.defaultValue;
        if (!(this.Pd || this.getFlags() && this.getFlags().length > 0)) return this.A.warn("isFeatureEnabled for key \"" + t + Oc), i.defaultValue;
        const e = this.getFeatureFlag(t, i);
        return R(e) ? i.defaultValue : !!e;
    }
    addFeatureFlagsHandler(t) {
        this.featureFlagEventHandlers.push(t);
    }
    removeFeatureFlagsHandler(t) {
        this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((i) => i !== t);
    }
    receivedFeatureFlags(t, i, e) {
        this.Cv(t, i, e);
    }
    Cv(t, i, e) {
        if (!this.Ea) return;
        this.Pd = !0;
        const s = ((t, i = {}, e = {}, s = {}, n, r = Tc) => {
            const o = ((t, i) => {
                    const e = t.flags;
                    if (e) {
                        const i = Object.fromEntries(Object.keys(e).map((t) => {
                                var i;
                                return [t, null !== (i = e[t].variant) && void 0 !== i ? i : e[t].enabled];
                            })),
                            s = Object.fromEntries(Object.keys(e).filter((t) => e[t].enabled).filter((t) => {
                                var i;
                                return !R(null === (i = e[t].metadata) || void 0 === i ? void 0 : i.payload);
                            }).map((t) => {
                                var i;
                                return [t, null === (i = e[t].metadata) || void 0 === i ? void 0 : i.payload];
                            }));
                        return wi(wi({}, t), {}, {
                            featureFlags: i,
                            featureFlagPayloads: s
                        });
                    }
                    return t.featureFlags && i.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"), t;
                })(t, r),
                l = o.flags,
                a = o.featureFlags,
                u = o.featureFlagPayloads;
            if (!a) return;
            const h = t.requestId,
                c = t.evaluatedAt;
            if (k(a)) {
                r.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.");
                const t = {};
                if (a)
                    for (let i = 0; a.length > i; i++) t[a[i]] = !0;
                return {
                    [Ks]: a,
                    [tn]: t,
                    [Qs]: !1
                };
            }
            let d = a,
                v = u,
                f = l;
            if (null == n ? void 0 : n.partialResponse) {
                const t = Object.keys(d),
                    n = v || {};
                d = wi(wi({}, i), d), v = wi(wi({}, e), n), t.forEach((t) => {
                    t in n || null == v || delete v[t];
                }), f = wi(wi({}, s), f);
            } else if (t.errorsWhileComputingFlags)
                if (l) {
                    const t = new Set(Object.keys(l).filter((t) => {
                        var i;
                        return !(null === (i = l[t]) || void 0 === i ? void 0 : i.failed);
                    }));
                    d = wi(wi({}, i), Object.fromEntries(Object.entries(d).filter(([i]) => t.has(i))));
                    const n = Object.fromEntries(Object.entries(v || {}).filter(([i]) => t.has(i)));
                    v = wi(wi({}, e), n), t.forEach((t) => {
                        t in n || null == v || delete v[t];
                    }), f = wi(wi({}, s), Object.fromEntries(Object.entries(f || {}).filter(([i]) => t.has(i))));
                } else d = wi(wi({}, i), d), v = wi(wi({}, e), v), f = wi(wi({}, s), f);
            return wi(wi({
                [Ks]: Object.keys(Fc(d)),
                [tn]: d || {},
                [on]: v || {},
                [Ys]: f || {},
                [Qs]: !0 === t.minimalFlagCalledEvents
            }, h ? {
                [Zs]: h
            } : {}), c ? {
                [Xs]: c
            } : {});
        })(t, this.getFlagVariants(), this.getFlagPayloads(), this.getFlagsWithDetails(), e, this.A);
        if (s)
            if (!1 === (null == e ? void 0 : e.persist)) {
                const t = !R(this.Ea.kv.get(tn));
                this.yv = s, t || this.$t(s);
            } else this.lv(), this.wv(s, t, !!(null == e ? void 0 : e.partialResponse)), this.$t(s);
        else i && this.bv();
        i || (this.zd = !1), this.hv(i);
    }
    override(t, i = !1) {
        this.A.warn("override is deprecated. Please use overrideFeatureFlags instead."), this.overrideFeatureFlags({
            flags: t,
            suppressWarning: i
        });
    }
    overrideFeatureFlags(t) {
        this.Fv(t);
    }
    Fv(t) {
        if (this.Ea) {
            if (!1 === t) return this.Dt([ln, an]), this.hv(), void Pc.info("All overrides cleared");
            if (k(t)) return this.$t({
                [ln]: Ic(t)
            }), this.hv(), void Pc.info("Flag overrides set", {
                flags: t
            });
            if (t && "object" == typeof t && ("flags" in t || "payloads" in t)) {
                var i;
                const e = t;
                this.Td = Boolean(null !== (i = e.suppressWarning) && void 0 !== i && i);
                const s = {},
                    n = e.flags,
                    r = e.payloads;
                return n && (s[ln] = k(n) ? Ic(n) : n), r && (s[an] = r), Object.keys(s).length && this.$t(s), !1 === n && !1 === r ? this.Dt([ln, an]) : !1 === n ? this.Dt(ln) : !1 === r && this.Dt(an), this.hv(), !1 === n ? Pc.info("Flag overrides cleared") : n && Pc.info("Flag overrides set", {
                    flags: n
                }), void(!1 === r ? Pc.info("Payload overrides cleared") : r && Pc.info("Payload overrides set", {
                    payloads: r
                }));
            }
            if (t && "object" == typeof t) return this.$t({
                [ln]: t
            }), this.hv(), void Pc.info("Flag overrides set", {
                flags: t
            });
            this.A.warn("Invalid overrideOptions provided to overrideFeatureFlags", {
                overrideOptions: t
            });
        } else this.A.warn("posthog.featureFlags.overrideFeatureFlags called before feature flags were ready");
    }
    onFeatureFlags(t) {
        if (this.addFeatureFlagsHandler(t), this.Pd) {
            const {
                flags: i,
                flagVariants: e
            } = this.Dv();
            try {
                t(i, e);
            } catch (t) {
                this.A.error("Error while running feature flags callback", t);
            }
        }
        return () => this.removeFeatureFlagsHandler(t);
    }
    updateEarlyAccessFeatureEnrollment(t, i, e) {
        var s;
        const n = (this.mv("$early_access_features") || []).find((i) => i.flagKey === t),
            r = {
                [`$feature_enrollment/${t}`]: i
            },
            o = {
                $feature_flag: t,
                $feature_enrollment: i,
                $set: r
            };
        n && (o.$early_access_feature_name = n.name), e && (o.$feature_enrollment_stage = e);
        const l = wi(wi({}, this.getFlagVariants()), {}, {
            [t]: i
        });
        null === (s = this.tv) || void 0 === s || s.markCrossTabFeatureFlagChanges({
            $active_feature_flags: [t],
            $enabled_feature_flags: [t],
            $stored_person_properties: Object.keys(r)
        }), this.$t({
            [Ks]: Object.keys(Fc(l)),
            [tn]: l,
            [sn]: wi(wi({}, this.mv("$stored_person_properties") || {}), r)
        }), this.hv();
        try {
            var a;
            null === (a = this.Ea) || void 0 === a || a.capture("$feature_enrollment_update", o);
        } catch (t) {
            this.A.error("Failed to capture early access feature enrollment", t);
        }
    }
    getEarlyAccessFeatures(t, i = !1, e) {
        const s = this.mv(Gs);
        !s || i ? this.Lv(t, e) : t(s);
    }
    Lv(t, i) {
        var e = this;
        return Y(function*() {
            const s = e.Ea;
            if (!s) return;
            const n = i ? `&${i.map((t) => `stage=${t}`).join("&")}` : "";
            let r;
            try {
                const t = yield s.sendRequest(`/api/early_access_features/?token=${s.projectToken}${n}`, {
                    target: "api",
                    method: "GET",
                    sentAt: "query"
                });
                if (!t.json) return;
                r = t.json.earlyAccessFeatures, e.$t({
                    [Gs]: r
                });
            } catch (t) {
                return void e.A.error("Early access feature request failed", t);
            }
            try {
                t(r);
            } catch (t) {
                e.A.error("Early access feature callback failed", t);
            }
        })();
    }
    Dv() {
        const t = this.getFlags(),
            i = this.getFlagVariants();
        return {
            flags: t.filter((t) => i[t]),
            flagVariants: Object.keys(i).filter((t) => i[t]).reduce((t, e) => (t[e] = i[e], t), {})
        };
    }
    hv(t) {
        this.uv();
        const {
            flags: i,
            flagVariants: e
        } = this.Dv(), s = this.Nd;
        this.Nd = !0, this.featureFlagEventHandlers.forEach((s) => {
            try {
                s(i, e, {
                    errorsLoading: t
                });
            } catch (t) {
                this.A.error("Error while running feature flags callback", t);
            }
        }), this.Nd = s;
    }
    setPersonPropertiesForFlags(t, i = !0) {
        this.Nv(t, i);
    }
    Nv(t, i = !0) {
        const e = this.mv("$stored_person_properties") || {},
            s = (null == t ? void 0 : t.$set) || ((null == t ? void 0 : t.$set_once) ? {} : t),
            n = null == t ? void 0 : t.$set_once,
            r = {};
        if (n)
            for (const t in n)({}).hasOwnProperty.call(n, t) && (t in e || (r[t] = n[t]));
        this.$t({
            [sn]: wi(wi(wi({}, e), r), s)
        }), i && this.reloadFeatureFlags();
    }
    unsetPersonPropertiesForFlags(t, i = !0) {
        const e = wi({}, this.mv("$stored_person_properties") || {});
        t.forEach((t) => {
            delete e[t];
        }), this.$t({
            [sn]: e
        }), i && this.reloadFeatureFlags();
    }
    resetPersonPropertiesForFlags(t = !0) {
        this.Dt(sn), t && this.reloadFeatureFlags();
    }
    setGroupPropertiesForFlags(t, i = !0) {
        const e = this.mv("$stored_group_properties") || {},
            s = wi({}, e);
        for (const i of Object.keys(t)) s[i] = wi(wi({}, e[i]), t[i]);
        this.$t({
            [en]: s
        }), i && this.reloadFeatureFlags();
    }
    resetGroupPropertiesForFlags(t) {
        if (t) {
            const i = this.mv("$stored_group_properties") || {};
            this.$t({
                [en]: wi(wi({}, i), {}, {
                    [t]: {}
                })
            });
        } else this.Dt(en);
    }
    reset() {
        this.Fd++, this.pv(this.Ad, "cancelled"), this.pv(this.Rd, "cancelled"), this.Ld = !1, this.Id = {}, this.Ed = {}, this.yv = void 0, this.Pd = !1, this.Dd = !1, this.Bd = !1, this.$anon_distinct_id = void 0, this.gv(), this.Td = !1, this.Hd = 0, this.jd = new Map();
    }
};
var Nc = Us("[FeatureFlags]");
var Lc = class {
    constructor(t, i = !1) {
        this.jv = !1, this.update(t, i);
    }
    update(t, i) {
        this.qv = ((t, i) => {
            var e, s, n, r, o, l, a, u;
            return {
                bootstrap: {
                    featureFlags: null !== (e = null === (s = t.bootstrap) || void 0 === s ? void 0 : s.featureFlags) && void 0 !== e ? e : void 0,
                    featureFlagPayloads: null !== (n = null === (r = t.bootstrap) || void 0 === r ? void 0 : r.featureFlagPayloads) && void 0 !== n ? n : void 0
                },
                remoteRequestsDisabled: i,
                featureFlagsDisabled: !!t.advanced_disable_feature_flags,
                onlyEvaluateSurveyFeatureFlags: !!t.advanced_only_evaluate_survey_feature_flags,
                deduplicateCallsPerSession: !!t.advanced_feature_flags_dedup_per_session,
                cacheTtlMs: t.feature_flag_cache_ttl_ms,
                refreshIntervalMs: null !== (o = t.remote_config_refresh_interval_ms) && void 0 !== o ? o : 3e5,
                idleRefreshBackoff: R(t.remote_config_refresh_interval_ms),
                requestTimeoutMs: t.feature_flag_request_timeout_ms,
                requestMaxRetries: Math.max(0, null !== (l = t.feature_flag_request_max_retries) && void 0 !== l ? l : 1),
                compression: t.disable_compression ? void 0 : "best-available",
                evaluationContexts: null !== (a = null !== (u = t.evaluation_contexts) && void 0 !== u ? u : t.evaluation_environments) && void 0 !== a ? a : [],
                flagKeys: k(t.flag_keys) ? t.flag_keys : void 0
            };
        })(t, i), !t.evaluation_environments || t.evaluation_contexts || this.jv || (Nc.warn("evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version."), this.jv = !0), R(t.flag_keys) || k(t.flag_keys) || Nc.error("Invalid flag_keys found:", t.flag_keys, "Expected array of non-empty strings");
    }
    get() {
        return this.qv;
    }
};
var jc = (t) => z(t) && ("RangeError" === t.name && 0 === t.message.indexOf("Maximum call stack size exceeded") || "InternalError" === t.name && "too much recursion" === t.message);
var Uc = Us("[Error tracking]");
var Bc = "webkit-masked-url:";
var zc = [{
    value: "isolatedAPI.contexts.topHostname",
    exact: !1
}, {
    value: "No response from target",
    exact: !0
}];
var Hc = [
    "chrome-extension://",
    "moz-extension://",
    "safari-extension:",
    "safari-web-extension:",
    Bc
];
var qc = ["__firefox__", "__gCrWeb"];

function Wc(t, i) {
    (null == i || i > t.length) && (i = t.length);
    for (var e = 0, s = Array(i); i > e; e++) s[e] = t[e];
    return s;
}

function Vc(t, i) {
    return function(t) {
        if (Array.isArray(t)) return t;
    }(t) || function(t, i) {
        var e = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null != e) {
            var s, n, r, o, l = [],
                a = !0,
                u = !1;
            try {
                if (r = (e = e.call(t)).next, 0 === i);
                else
                    for (; !(a = (s = r.call(e)).done) && (l.push(s.value), l.length !== i); a = !0);
            } catch (t) {
                u = !0, n = t;
            } finally {
                try {
                    if (!a && null != e.return && (o = e.return(), Object(o) !== o)) return;
                } finally {
                    if (u) throw n;
                }
            }
            return l;
        }
    }(t, i) || function(t, i) {
        if (t) {
            if ("string" == typeof t) return Wc(t, i);
            var e = {}.toString.call(t).slice(8, -1);
            return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Wc(t, i) : void 0;
        }
    }(t, i) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}
var Gc = Object.entries;
var Kc = Object.setPrototypeOf;
var Yc = Object.isFrozen;
var Jc = Object.getPrototypeOf;
var Xc = Object.getOwnPropertyDescriptor;
var Zc = Object.freeze;
var Qc = Object.seal;
var td = Object.create;
var id = "undefined" != typeof Reflect && Reflect;
var ed = id.apply;
var sd = id.construct;
Zc || (Zc = function(t) {
    return t;
}), Qc || (Qc = function(t) {
    return t;
}), ed || (ed = function(t, i) {
    for (var e = arguments.length, s = new Array(e > 2 ? e - 2 : 0), n = 2; e > n; n++) s[n - 2] = arguments[n];
    return t.apply(i, s);
}), sd || (sd = function(t) {
    for (var i = arguments.length, e = new Array(i > 1 ? i - 1 : 0), s = 1; i > s; s++) e[s - 1] = arguments[s];
    return new t(...e);
});
var nd = Ed([].forEach);
var rd = Ed([].lastIndexOf);
var od = Ed([].pop);
var ld = Ed([].push);
var ad = Ed([].splice);
var ud = Array.isArray;
var hd = Ed("".toLowerCase);
var cd = Ed("".toString);
var dd = Ed("".match);
var vd = Ed("".replace);
var fd = Ed("".indexOf);
var pd = Ed("".trim);
var gd = Ed(0.toString);
var _d = Ed(Boolean.prototype.toString);
var md = "undefined" == typeof BigInt ? null : Ed(BigInt.prototype.toString);
var yd = "undefined" == typeof Symbol ? null : Ed(Symbol.prototype.toString);
var bd = Ed({}.hasOwnProperty);
var wd = Ed({}.toString);
var $d = Ed(/t/.test);
var Sd = (xd = TypeError, function() {
    for (var t = arguments.length, i = new Array(t), e = 0; t > e; e++) i[e] = arguments[e];
    return sd(xd, i);
});
var xd;

function Ed(t) {
    return function(i) {
        i instanceof RegExp && (i.lastIndex = 0);
        for (var e = arguments.length, s = new Array(e > 1 ? e - 1 : 0), n = 1; e > n; n++) s[n - 1] = arguments[n];
        return ed(t, i, s);
    };
}

function kd(t, i) {
    let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hd;
    if (Kc && Kc(t, null), !ud(i)) return t;
    let s = i.length;
    for (; s--;) {
        let n = i[s];
        if ("string" == typeof n) {
            const t = e(n);
            t !== n && (Yc(i) || (i[s] = t), n = t);
        }
        t[n] = !0;
    }
    return t;
}

function Td(t) {
    for (let i = 0; t.length > i; i++) bd(t, i) || (t[i] = null);
    return t;
}

function Pd(t) {
    const i = td(null);
    for (const s of Gc(t)) {
        var e = Vc(s, 2);
        const n = e[0],
            r = e[1];
        bd(t, n) && (i[n] = ud(r) ? Td(r) : r && "object" == typeof r && r.constructor === Object ? Pd(r) : r);
    }
    return i;
}

function Od(t, i) {
    for (; null !== t;) {
        const e = Xc(t, i);
        if (e) {
            if (e.get) return Ed(e.get);
            if ("function" == typeof e.value) return Ed(e.value);
        }
        t = Jc(t);
    }
    return function() {
        return null;
    };
}
var Rd = Zc([
    "a",
    "abbr",
    "acronym",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "bdi",
    "bdo",
    "big",
    "blink",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "content",
    "data",
    "datalist",
    "dd",
    "decorator",
    "del",
    "details",
    "dfn",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "element",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meter",
    "nav",
    "nobr",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "search",
    "section",
    "select",
    "shadow",
    "slot",
    "small",
    "source",
    "spacer",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "tt",
    "u",
    "ul",
    "var",
    "video",
    "wbr"
]);
var Cd = Zc([
    "svg",
    "a",
    "altglyph",
    "altglyphdef",
    "altglyphitem",
    "animatecolor",
    "animatemotion",
    "animatetransform",
    "circle",
    "clippath",
    "defs",
    "desc",
    "ellipse",
    "enterkeyhint",
    "exportparts",
    "filter",
    "font",
    "g",
    "glyph",
    "glyphref",
    "hkern",
    "image",
    "inputmode",
    "line",
    "lineargradient",
    "marker",
    "mask",
    "metadata",
    "mpath",
    "part",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialgradient",
    "rect",
    "stop",
    "style",
    "switch",
    "symbol",
    "text",
    "textpath",
    "title",
    "tref",
    "tspan",
    "view",
    "vkern"
]);
var Ad = Zc([
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence"
]);
var Id = Zc([
    "animate",
    "color-profile",
    "cursor",
    "discard",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "foreignobject",
    "hatch",
    "hatchpath",
    "mesh",
    "meshgradient",
    "meshpatch",
    "meshrow",
    "missing-glyph",
    "script",
    "set",
    "solidcolor",
    "unknown",
    "use"
]);
var Fd = Zc([
    "math",
    "menclose",
    "merror",
    "mfenced",
    "mfrac",
    "mglyph",
    "mi",
    "mlabeledtr",
    "mmultiscripts",
    "mn",
    "mo",
    "mover",
    "mpadded",
    "mphantom",
    "mroot",
    "mrow",
    "ms",
    "mspace",
    "msqrt",
    "mstyle",
    "msub",
    "msup",
    "msubsup",
    "mtable",
    "mtd",
    "mtext",
    "mtr",
    "munder",
    "munderover",
    "mprescripts"
]);
var Md = Zc([
    "maction",
    "maligngroup",
    "malignmark",
    "mlongdiv",
    "mscarries",
    "mscarry",
    "msgroup",
    "mstack",
    "msline",
    "msrow",
    "semantics",
    "annotation",
    "annotation-xml",
    "mprescripts",
    "none"
]);
var Dd = Zc(["#text"]);
var Nd = Zc([
    "accept",
    "action",
    "align",
    "alt",
    "autocapitalize",
    "autocomplete",
    "autopictureinpicture",
    "autoplay",
    "background",
    "bgcolor",
    "border",
    "capture",
    "cellpadding",
    "cellspacing",
    "checked",
    "cite",
    "class",
    "clear",
    "color",
    "cols",
    "colspan",
    "command",
    "commandfor",
    "controls",
    "controlslist",
    "coords",
    "crossorigin",
    "datetime",
    "decoding",
    "default",
    "dir",
    "disabled",
    "disablepictureinpicture",
    "disableremoteplayback",
    "download",
    "draggable",
    "enctype",
    "enterkeyhint",
    "exportparts",
    "face",
    "for",
    "headers",
    "height",
    "hidden",
    "high",
    "href",
    "hreflang",
    "id",
    "inert",
    "inputmode",
    "integrity",
    "ismap",
    "kind",
    "label",
    "lang",
    "list",
    "loading",
    "loop",
    "low",
    "max",
    "maxlength",
    "media",
    "method",
    "min",
    "minlength",
    "multiple",
    "muted",
    "name",
    "nonce",
    "noshade",
    "novalidate",
    "nowrap",
    "open",
    "optimum",
    "part",
    "pattern",
    "placeholder",
    "playsinline",
    "popover",
    "popovertarget",
    "popovertargetaction",
    "poster",
    "preload",
    "pubdate",
    "radiogroup",
    "readonly",
    "rel",
    "required",
    "rev",
    "reversed",
    "role",
    "rows",
    "rowspan",
    "spellcheck",
    "scope",
    "selected",
    "shape",
    "size",
    "sizes",
    "slot",
    "span",
    "srclang",
    "start",
    "src",
    "srcset",
    "step",
    "style",
    "summary",
    "tabindex",
    "title",
    "translate",
    "type",
    "usemap",
    "valign",
    "value",
    "width",
    "wrap",
    "xmlns"
]);
var Ld = Zc([
    "accent-height",
    "accumulate",
    "additive",
    "alignment-baseline",
    "amplitude",
    "ascent",
    "attributename",
    "attributetype",
    "azimuth",
    "basefrequency",
    "baseline-shift",
    "begin",
    "bias",
    "by",
    "class",
    "clip",
    "clippathunits",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "cx",
    "cy",
    "d",
    "dx",
    "dy",
    "diffuseconstant",
    "direction",
    "display",
    "divisor",
    "dominant-baseline",
    "dur",
    "edgemode",
    "elevation",
    "end",
    "exponent",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "filterunits",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyph-name",
    "glyphref",
    "gradientunits",
    "gradienttransform",
    "height",
    "href",
    "id",
    "image-rendering",
    "in",
    "in2",
    "intercept",
    "k",
    "k1",
    "k2",
    "k3",
    "k4",
    "kerning",
    "keypoints",
    "keysplines",
    "keytimes",
    "lang",
    "lengthadjust",
    "letter-spacing",
    "kernelmatrix",
    "kernelunitlength",
    "lighting-color",
    "local",
    "marker-end",
    "marker-mid",
    "marker-start",
    "markerheight",
    "markerunits",
    "markerwidth",
    "maskcontentunits",
    "maskunits",
    "max",
    "mask",
    "mask-type",
    "media",
    "method",
    "mode",
    "min",
    "name",
    "numoctaves",
    "offset",
    "operator",
    "opacity",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "paint-order",
    "path",
    "pathlength",
    "patterncontentunits",
    "patterntransform",
    "patternunits",
    "points",
    "preservealpha",
    "preserveaspectratio",
    "primitiveunits",
    "r",
    "rx",
    "ry",
    "radius",
    "refx",
    "refy",
    "repeatcount",
    "repeatdur",
    "restart",
    "result",
    "rotate",
    "scale",
    "seed",
    "shape-rendering",
    "slope",
    "specularconstant",
    "specularexponent",
    "spreadmethod",
    "startoffset",
    "stddeviation",
    "stitchtiles",
    "stop-color",
    "stop-opacity",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke",
    "stroke-width",
    "style",
    "surfacescale",
    "systemlanguage",
    "tabindex",
    "tablevalues",
    "targetx",
    "targety",
    "transform",
    "transform-origin",
    "text-anchor",
    "text-decoration",
    "text-orientation",
    "text-rendering",
    "textlength",
    "type",
    "u1",
    "u2",
    "unicode",
    "values",
    "viewbox",
    "visibility",
    "version",
    "vert-adv-y",
    "vert-origin-x",
    "vert-origin-y",
    "width",
    "word-spacing",
    "wrap",
    "writing-mode",
    "xchannelselector",
    "ychannelselector",
    "x",
    "x1",
    "x2",
    "xmlns",
    "y",
    "y1",
    "y2",
    "z",
    "zoomandpan"
]);
var jd = Zc([
    "accent",
    "accentunder",
    "align",
    "bevelled",
    "close",
    "columnalign",
    "columnlines",
    "columnspacing",
    "columnspan",
    "denomalign",
    "depth",
    "dir",
    "display",
    "displaystyle",
    "encoding",
    "fence",
    "frame",
    "height",
    "href",
    "id",
    "largeop",
    "length",
    "linethickness",
    "lquote",
    "lspace",
    "mathbackground",
    "mathcolor",
    "mathsize",
    "mathvariant",
    "maxsize",
    "minsize",
    "movablelimits",
    "notation",
    "numalign",
    "open",
    "rowalign",
    "rowlines",
    "rowspacing",
    "rowspan",
    "rspace",
    "rquote",
    "scriptlevel",
    "scriptminsize",
    "scriptsizemultiplier",
    "selection",
    "separator",
    "separators",
    "stretchy",
    "subscriptshift",
    "supscriptshift",
    "symmetric",
    "voffset",
    "width",
    "xmlns"
]);
var Ud = Zc([
    "xlink:href",
    "xml:id",
    "xlink:title",
    "xml:space",
    "xmlns:xlink"
]);
var Bd = Qc(/{{[\w\W]*|^[\w\W]*}}/g);
var zd = Qc(/<%[\w\W]*|^[\w\W]*%>/g);
var Hd = Qc(/\${[\w\W]*/g);
var qd = Qc(/^data-[\-\w.\u00B7-\uFFFF]+$/);
var Wd = Qc(/^aria-[\-\w]+$/);
var Vd = Qc(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
var Gd = Qc(/^(?:\w+script|data):/i);
var Kd = Qc(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
var Yd = Qc(/^html$/i);
var Jd = Qc(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Xd = Qc(/<[/\w!]/g);
var Zd = Qc(/<[/\w]/g);
var Qd = Qc(/<\/no(script|embed|frames)/i);
var tv = Qc(/\/>/i);
var iv = function() {
    return "undefined" == typeof window ? null : window;
};
var ev = function(t, i, e, s) {
    return bd(t, i) && ud(t[i]) ? kd(s.base ? Pd(s.base) : {}, t[i], s.transform) : e;
};
var sv = function t() {
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iv();
    const e = (i) => t(i);
    if (e.version = "3.4.13", e.removed = [], !i || !i.document || 9 !== i.document.nodeType || !i.Element) return e.isSupported = !1, e;
    let s = i.document;
    const n = s,
        r = n.currentScript,
        o = i.HTMLTemplateElement,
        l = i.Node,
        a = i.NodeFilter,
        u = i.DOMParser,
        h = i.trustedTypes,
        c = i.Element.prototype,
        d = Od(c, "cloneNode"),
        v = Od(c, "remove"),
        f = Od(c, "nextSibling"),
        p = Od(c, "childNodes"),
        g = Od(c, "parentNode"),
        _ = Od(c, "shadowRoot"),
        m = Od(c, "attributes"),
        y = l && l.prototype ? Od(l.prototype, "nodeType") : null,
        b = l && l.prototype ? Od(l.prototype, "nodeName") : null,
        w = l && l.prototype ? Od(l.prototype, "ownerDocument") : null;
    if ("function" == typeof o) {
        const t = s.createElement("template");
        t.content && t.content.ownerDocument && (s = t.content.ownerDocument);
    }
    let S, x, E = "",
        k = !1,
        T = 0;
    const P = function() {
            if (T > 0) throw Sd("A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the \"DOMPurify and Trusted Types\" section of the README.");
        },
        O = function(t) {
            P(), T++;
            try {
                return S.createHTML(t);
            } finally {
                T--;
            }
        },
        R = s.implementation,
        C = s.createNodeIterator,
        A = s.createDocumentFragment,
        I = s.getElementsByTagName,
        F = n.importNode;
    let M = {
        afterSanitizeAttributes: [],
        afterSanitizeElements: [],
        afterSanitizeShadowDOM: [],
        beforeSanitizeAttributes: [],
        beforeSanitizeElements: [],
        beforeSanitizeShadowDOM: [],
        uponSanitizeAttribute: [],
        uponSanitizeElement: [],
        uponSanitizeShadowNode: []
    };
    e.isSupported = "function" == typeof Gc && "function" == typeof g && R && void 0 !== R.createHTMLDocument;
    const D = Bd,
        N = zd,
        L = Hd,
        j = qd,
        U = Wd,
        B = Gd,
        z = Kd,
        H = Jd;
    let q = Vd,
        W = null;
    const V = kd({}, [
        ...Rd,
        ...Cd,
        ...Ad,
        ...Fd,
        ...Dd
    ]);
    let G = null;
    const K = kd({}, [
        ...Nd,
        ...Ld,
        ...jd,
        ...Ud
    ]);
    let Y = Object.seal(td(null, {
            tagNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null
            },
            attributeNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null
            },
            allowCustomizedBuiltInElements: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: !1
            }
        })),
        J = null,
        X = null;
    const Z = Object.seal(td(null, {
        tagCheck: {
            writable: !0,
            configurable: !1,
            enumerable: !0,
            value: null
        },
        attributeCheck: {
            writable: !0,
            configurable: !1,
            enumerable: !0,
            value: null
        }
    }));
    let Q = !0,
        tt = !0,
        it = !1,
        et = !0,
        st = !1,
        nt = !0,
        rt = !1,
        ot = !1,
        lt = null,
        at = null,
        ut = !1,
        ht = !1,
        ct = !1,
        dt = !1,
        vt = !0,
        ft = !1;
    const pt = "user-content-";
    let gt = !0,
        _t = !1,
        mt = {},
        yt = null;
    const bt = kd({}, [
        "annotation-xml",
        "audio",
        "colgroup",
        "desc",
        "foreignobject",
        "head",
        "iframe",
        "math",
        "mi",
        "mn",
        "mo",
        "ms",
        "mtext",
        "noembed",
        "noframes",
        "noscript",
        "plaintext",
        "script",
        "selectedcontent",
        "style",
        "svg",
        "template",
        "thead",
        "title",
        "video",
        "xmp"
    ]);
    let wt = null;
    const $t = kd({}, [
        "audio",
        "video",
        "img",
        "source",
        "image",
        "track"
    ]);
    let St = null;
    const xt = kd({}, [
            "alt",
            "class",
            "for",
            "id",
            "label",
            "name",
            "pattern",
            "placeholder",
            "role",
            "summary",
            "title",
            "value",
            "style",
            "xmlns"
        ]),
        Et = "http://www.w3.org/1998/Math/MathML",
        kt = "http://www.w3.org/2000/svg",
        Tt = "http://www.w3.org/1999/xhtml";
    let Pt = Tt,
        Ot = !1,
        Rt = null;
    const Ct = kd({}, [
            Et,
            kt,
            Tt
        ], cd),
        At = Zc([
            "mi",
            "mo",
            "mn",
            "ms",
            "mtext"
        ]);
    let It = kd({}, At);
    const Ft = Zc(["annotation-xml"]);
    let Mt = kd({}, Ft);
    const Dt = kd({}, [
        "title",
        "style",
        "font",
        "a",
        "script"
    ]);
    let Nt = null;
    const Lt = ["application/xhtml+xml", "text/html"];
    let jt = null,
        Ut = null;
    const Bt = s.createElement("form"),
        zt = function(t) {
            return t instanceof RegExp || t instanceof Function;
        },
        Ht = function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (Ut && Ut === t) return;
            t && "object" == typeof t || (t = {}), t = Pd(t), Nt = -1 === Lt.indexOf(t.PARSER_MEDIA_TYPE) ? "text/html" : t.PARSER_MEDIA_TYPE, jt = "application/xhtml+xml" === Nt ? cd : hd, W = ev(t, "ALLOWED_TAGS", V, {
                transform: jt
            }), G = ev(t, "ALLOWED_ATTR", K, {
                transform: jt
            }), Rt = ev(t, "ALLOWED_NAMESPACES", Ct, {
                transform: cd
            }), St = ev(t, "ADD_URI_SAFE_ATTR", xt, {
                transform: jt,
                base: xt
            }), wt = ev(t, "ADD_DATA_URI_TAGS", $t, {
                transform: jt,
                base: $t
            }), yt = ev(t, "FORBID_CONTENTS", bt, {
                transform: jt
            }), J = ev(t, "FORBID_TAGS", Pd({}), {
                transform: jt
            }), X = ev(t, "FORBID_ATTR", Pd({}), {
                transform: jt
            }), mt = !!bd(t, "USE_PROFILES") && (t.USE_PROFILES && "object" == typeof t.USE_PROFILES ? Pd(t.USE_PROFILES) : t.USE_PROFILES), Q = !1 !== t.ALLOW_ARIA_ATTR, tt = !1 !== t.ALLOW_DATA_ATTR, it = t.ALLOW_UNKNOWN_PROTOCOLS || !1, et = !1 !== t.ALLOW_SELF_CLOSE_IN_ATTR, st = t.SAFE_FOR_TEMPLATES || !1, nt = !1 !== t.SAFE_FOR_XML, rt = t.WHOLE_DOCUMENT || !1, ht = t.RETURN_DOM || !1, ct = t.RETURN_DOM_FRAGMENT || !1, dt = t.RETURN_TRUSTED_TYPE || !1, ut = t.FORCE_BODY || !1, vt = !1 !== t.SANITIZE_DOM, ft = t.SANITIZE_NAMED_PROPS || !1, gt = !1 !== t.KEEP_CONTENT, _t = t.IN_PLACE || !1, q = function(t) {
                try {
                    return $d(t, ""), !0;
                } catch (t) {
                    return !1;
                }
            }(t.ALLOWED_URI_REGEXP) ? t.ALLOWED_URI_REGEXP : Vd, Pt = "string" == typeof t.NAMESPACE ? t.NAMESPACE : Tt, It = bd(t, "MATHML_TEXT_INTEGRATION_POINTS") && t.MATHML_TEXT_INTEGRATION_POINTS && "object" == typeof t.MATHML_TEXT_INTEGRATION_POINTS ? Pd(t.MATHML_TEXT_INTEGRATION_POINTS) : kd({}, At), Mt = bd(t, "HTML_INTEGRATION_POINTS") && t.HTML_INTEGRATION_POINTS && "object" == typeof t.HTML_INTEGRATION_POINTS ? Pd(t.HTML_INTEGRATION_POINTS) : kd({}, Ft);
            const i = bd(t, "CUSTOM_ELEMENT_HANDLING") && t.CUSTOM_ELEMENT_HANDLING && "object" == typeof t.CUSTOM_ELEMENT_HANDLING ? Pd(t.CUSTOM_ELEMENT_HANDLING) : td(null);
            if (Y = td(null), bd(i, "tagNameCheck") && zt(i.tagNameCheck) && (Y.tagNameCheck = i.tagNameCheck), bd(i, "attributeNameCheck") && zt(i.attributeNameCheck) && (Y.attributeNameCheck = i.attributeNameCheck), bd(i, "allowCustomizedBuiltInElements") && "boolean" == typeof i.allowCustomizedBuiltInElements && (Y.allowCustomizedBuiltInElements = i.allowCustomizedBuiltInElements), Qc(Y), st && (tt = !1), ct && (ht = !0), mt && (W = kd({}, Dd), G = td(null), !0 === mt.html && (kd(W, Rd), kd(G, Nd)), !0 === mt.svg && (kd(W, Cd), kd(G, Ld), kd(G, Ud)), !0 === mt.svgFilters && (kd(W, Ad), kd(G, Ld), kd(G, Ud)), !0 === mt.mathMl && (kd(W, Fd), kd(G, jd), kd(G, Ud))), Z.tagCheck = null, Z.attributeCheck = null, bd(t, "ADD_TAGS") && ("function" == typeof t.ADD_TAGS ? Z.tagCheck = t.ADD_TAGS : ud(t.ADD_TAGS) && (W === V && (W = Pd(W)), kd(W, t.ADD_TAGS, jt))), bd(t, "ADD_ATTR") && ("function" == typeof t.ADD_ATTR ? Z.attributeCheck = t.ADD_ATTR : ud(t.ADD_ATTR) && (G === K && (G = Pd(G)), kd(G, t.ADD_ATTR, jt))), bd(t, "ADD_URI_SAFE_ATTR") && ud(t.ADD_URI_SAFE_ATTR) && kd(St, t.ADD_URI_SAFE_ATTR, jt), bd(t, "FORBID_CONTENTS") && ud(t.FORBID_CONTENTS) && (yt === bt && (yt = Pd(yt)), kd(yt, t.FORBID_CONTENTS, jt)), bd(t, "ADD_FORBID_CONTENTS") && ud(t.ADD_FORBID_CONTENTS) && (yt === bt && (yt = Pd(yt)), kd(yt, t.ADD_FORBID_CONTENTS, jt)), gt && (W["#text"] = !0), rt && kd(W, [
                    "html",
                    "head",
                    "body"
                ]), W.table && (kd(W, ["tbody"]), delete J.tbody), t.TRUSTED_TYPES_POLICY) {
                if ("function" != typeof t.TRUSTED_TYPES_POLICY.createHTML) throw Sd("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
                if ("function" != typeof t.TRUSTED_TYPES_POLICY.createScriptURL) throw Sd("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
                const i = S;
                S = t.TRUSTED_TYPES_POLICY;
                try {
                    E = O("");
                } catch (t) {
                    throw S = i, t;
                }
            } else null === t.TRUSTED_TYPES_POLICY ? (S = void 0, E = "") : (void 0 === S && (k || (x = function(t, i) {
                if ("object" != typeof t || "function" != typeof t.createPolicy) return null;
                let e = null;
                const s = "data-tt-policy-suffix";
                i && i.hasAttribute(s) && (e = i.getAttribute(s));
                const n = "dompurify" + (e ? "#" + e : "");
                try {
                    return t.createPolicy(n, {
                        createHTML: (t) => t,
                        createScriptURL: (t) => t
                    });
                } catch (t) {
                    return console.warn("TrustedTypes policy " + n + " could not be created."), null;
                }
            }(h, r), k = !0), S = x), S && "string" == typeof E && (E = O("")));
            Zc && Zc(t), Ut = t;
        },
        qt = kd({}, [
            ...Cd,
            ...Ad,
            ...Id
        ]),
        Wt = kd({}, [...Fd, ...Md]),
        Vt = function(t) {
            ld(e.removed, {
                element: t
            });
            try {
                g(t).removeChild(t);
            } catch (i) {
                if (v(t), !g(t)) throw Sd("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
            }
        },
        Gt = function(t) {
            Jt(t);
            const i = p(t);
            if (i) {
                const t = [];
                nd(i, (i) => {
                    ld(t, i);
                }), nd(t, (t) => {
                    try {
                        v(t);
                    } catch (t) {}
                });
            }
            const e = m(t);
            if (e)
                for (let i = e.length - 1; i >= 0; --i) {
                    const s = e[i],
                        n = s && s.name;
                    if ("string" == typeof n) try {
                        t.removeAttribute(n);
                    } catch (t) {}
                }
        },
        Kt = function(t, i) {
            try {
                ld(e.removed, {
                    attribute: i.getAttributeNode(t),
                    from: i
                });
            } catch (t) {
                ld(e.removed, {
                    attribute: null,
                    from: i
                });
            }
            if (i.removeAttribute(t), "is" === t)
                if (ht || ct) try {
                    Vt(i);
                } catch (t) {}
            else try {
                i.setAttribute(t, "");
            } catch (t) {}
        },
        Yt = function(t) {
            const i = m(t);
            if (i)
                for (let e = i.length - 1; e >= 0; --e) {
                    const s = i[e],
                        n = s && s.name;
                    if ("string" == typeof n && !G[jt(n)]) try {
                        t.removeAttribute(n);
                    } catch (t) {}
                }
        },
        Jt = function(t) {
            const i = [t];
            for (; i.length > 0;) {
                const t = i.pop();
                1 === (y ? y(t) : t.nodeType) && Yt(t);
                const e = p(t);
                if (e)
                    for (let t = e.length - 1; t >= 0; --t) i.push(e[t]);
            }
        },
        Xt = function(t) {
            let i = null,
                e = null;
            if (ut) t = "<remove></remove>" + t;
            else {
                const i = dd(t, /^[\r\n\t ]+/);
                e = i && i[0];
            }
            "application/xhtml+xml" === Nt && Pt === Tt && (t = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + t + "</body></html>");
            const n = S ? O(t) : t;
            if (Pt === Tt) try {
                i = new u().parseFromString(n, Nt);
            } catch (t) {}
            if (!i || !i.documentElement) {
                i = R.createDocument(Pt, "template", null);
                try {
                    i.documentElement.innerHTML = Ot ? E : n;
                } catch (t) {}
            }
            const r = i.body || i.documentElement;
            return t && e && r.insertBefore(s.createTextNode(e), r.childNodes[0] || null), Pt === Tt ? I.call(i, rt ? "html" : "body")[0] : rt ? i.documentElement : r;
        },
        Zt = function(t) {
            const i = w ? w(t) : t.ownerDocument;
            return C.call(i || t, t, a.SHOW_ELEMENT | a.SHOW_COMMENT | a.SHOW_TEXT | a.SHOW_PROCESSING_INSTRUCTION | a.SHOW_CDATA_SECTION, null);
        },
        Qt = function(t) {
            return t = vd(t, D, " "), t = vd(t, N, " "), vd(t, L, " ");
        },
        ti = function(t) {
            var i;
            t.normalize();
            const e = w ? w(t) : t.ownerDocument,
                s = C.call(e || t, t, a.SHOW_TEXT | a.SHOW_COMMENT | a.SHOW_CDATA_SECTION | a.SHOW_PROCESSING_INSTRUCTION, null);
            let n = s.nextNode();
            for (; n;) n.data = Qt(n.data), n = s.nextNode();
            const r = null === (i = t.querySelectorAll) || void 0 === i ? void 0 : i.call(t, "template");
            r && nd(r, (t) => {
                ei(t.content) && ti(t.content);
            });
        },
        ii = function(t) {
            const i = b ? b(t) : null;
            return "string" == typeof i && "form" === jt(i) && ("string" != typeof t.nodeName || "string" != typeof t.textContent || "function" != typeof t.removeChild || t.attributes !== m(t) || "function" != typeof t.removeAttribute || "function" != typeof t.setAttribute || "string" != typeof t.namespaceURI || "function" != typeof t.insertBefore || "function" != typeof t.hasChildNodes || t.nodeType !== y(t) || t.childNodes !== p(t));
        },
        ei = function(t) {
            if (!y || "object" != typeof t || null === t) return !1;
            try {
                return 11 === y(t);
            } catch (t) {
                return !1;
            }
        },
        si = function(t) {
            if (!y || "object" != typeof t || null === t) return !1;
            try {
                return "number" == typeof y(t);
            } catch (t) {
                return !1;
            }
        };

    function ni(t, i, s) {
        0 !== t.length && nd(t, (t) => {
            t.call(e, i, s, Ut);
        });
    }
    const ri = function(t, i, e, s) {
            return 0 === t.length ? i : i === e || i === s ? Pd(i) : i;
        },
        oi = function(t, i) {
            if (ni(M.beforeSanitizeElements, t, null), t !== i && null === g(t)) return _t && Jt(t), !0;
            if (ii(t)) return Vt(t), !0;
            const s = jt(b ? b(t) : t.nodeName);
            if (W = ri(M.uponSanitizeElement, W, V, lt), ni(M.uponSanitizeElement, t, {
                    tagName: s,
                    allowedTags: W
                }), t !== i && null === g(t)) return _t && Jt(t), !0;
            if (function(t, i) {
                    return !!(nt && t.hasChildNodes() && !si(t.firstElementChild) && $d(Xd, t.textContent) && $d(Xd, t.innerHTML)) || !(!nt || t.namespaceURI !== Tt || "style" !== i || !si(t.firstElementChild)) || 7 === t.nodeType || !(!nt || 8 !== t.nodeType || !$d(Zd, t.data));
                }(t, s)) return Vt(t), !0;
            if (J[s] || !(Z.tagCheck instanceof Function && Z.tagCheck(s)) && !W[s]) {
                const e = function(t, i, e) {
                    if (!J[i] && ui(i)) {
                        if (Y.tagNameCheck instanceof RegExp && $d(Y.tagNameCheck, i)) return !1;
                        if (Y.tagNameCheck instanceof Function && Y.tagNameCheck(i)) return !1;
                    }
                    if (gt && !yt[i]) {
                        const i = g(t),
                            s = p(t);
                        if (s && i)
                            for (let n = s.length - 1; n >= 0; --n) {
                                const r = t === e ? d(s[n], !0) : s[n];
                                i.insertBefore(r, f(t));
                            }
                    }
                    return Vt(t), !0;
                }(t, s, i);
                return !1 === e && ni(M.afterSanitizeElements, t, null), e;
            }
            if (1 === (y ? y(t) : t.nodeType) && ! function(t) {
                    let i = g(t);
                    i && i.tagName || (i = {
                        namespaceURI: Pt,
                        tagName: "template"
                    });
                    const e = hd(t.tagName),
                        s = hd(i.tagName);
                    return !!Rt[t.namespaceURI] && (t.namespaceURI === kt ? function(t, i, e) {
                        return i.namespaceURI === Tt ? "svg" === t : i.namespaceURI === Et ? "svg" === t && ("annotation-xml" === e || It[e]) : Boolean(qt[t]);
                    }(e, i, s) : t.namespaceURI === Et ? function(t, i, e) {
                        return i.namespaceURI === Tt ? "math" === t : i.namespaceURI === kt ? "math" === t && Mt[e] : Boolean(Wt[t]);
                    }(e, i, s) : t.namespaceURI === Tt ? function(t, i, e) {
                        return !(i.namespaceURI === kt && !Mt[e]) && !(i.namespaceURI === Et && !It[e]) && !Wt[t] && (Dt[t] || !qt[t]);
                    }(e, i, s) : !("application/xhtml+xml" !== Nt || !Rt[t.namespaceURI]));
                }(t)) return Vt(t), !0;
            if (("noscript" === s || "noembed" === s || "noframes" === s) && $d(Qd, t.innerHTML)) return Vt(t), !0;
            if (st && 3 === t.nodeType) {
                const i = Qt(t.textContent);
                t.textContent !== i && (ld(e.removed, {
                    element: t.cloneNode()
                }), t.textContent = i);
            }
            return ni(M.afterSanitizeElements, t, null), !1;
        },
        li = function(t, i, e) {
            if (X[i]) return !1;
            if (nt && "patchsrc" === i) return !1;
            if (nt && "for" === i && "label" !== t && "output" !== t) return !1;
            if (vt && ("id" === i || "name" === i) && (e in s || e in Bt)) return !1;
            const n = G[i] || Z.attributeCheck instanceof Function && Z.attributeCheck(i, t);
            if (tt && $d(j, i));
            else if (Q && $d(U, i));
            else if (n) {
                if (St[i]);
                else if ($d(q, vd(e, z, "")));
                else if ("src" !== i && "xlink:href" !== i && "href" !== i || "script" === t || 0 !== fd(e, "data:") || !wt[t]) {
                    if (it && !$d(B, vd(e, z, "")));
                    else if (e) return !1;
                }
            } else if (!(ui(t) && (Y.tagNameCheck instanceof RegExp && $d(Y.tagNameCheck, t) || Y.tagNameCheck instanceof Function && Y.tagNameCheck(t)) && (Y.attributeNameCheck instanceof RegExp && $d(Y.attributeNameCheck, i) || Y.attributeNameCheck instanceof Function && Y.attributeNameCheck(i, t)) || "is" === i && Y.allowCustomizedBuiltInElements && (Y.tagNameCheck instanceof RegExp && $d(Y.tagNameCheck, e) || Y.tagNameCheck instanceof Function && Y.tagNameCheck(e)))) return !1;
            return !0;
        },
        ai = kd({}, [
            "annotation-xml",
            "color-profile",
            "font-face",
            "font-face-format",
            "font-face-name",
            "font-face-src",
            "font-face-uri",
            "missing-glyph"
        ]),
        ui = function(t) {
            return !ai[hd(t)] && $d(H, t);
        },
        hi = function(t, i, e, s) {
            if (S && "object" == typeof h && "function" == typeof h.getAttributeType && !e) switch (h.getAttributeType(t, i)) {
                case "TrustedHTML":
                    return O(s);
                case "TrustedScriptURL":
                    return function(t) {
                        P(), T++;
                        try {
                            return S.createScriptURL(t);
                        } finally {
                            T--;
                        }
                    }(s);
            }
            return s;
        },
        ci = function(t, i, s, n) {
            try {
                s ? t.setAttributeNS(s, i, n) : t.setAttribute(i, n), ii(t) ? Vt(t) : od(e.removed);
            } catch (e) {
                Kt(i, t);
            }
        },
        di = function(t) {
            ni(M.beforeSanitizeAttributes, t, null);
            const i = t.attributes;
            if (!i || ii(t)) return;
            G = ri(M.uponSanitizeAttribute, G, K, at);
            const e = {
                attrName: "",
                attrValue: "",
                keepAttr: !0,
                allowedAttributes: G,
                forceKeepAttr: void 0
            };
            let s = i.length;
            const n = jt(t.nodeName);
            for (; s--;) {
                const r = i[s],
                    o = r.name,
                    l = r.namespaceURI,
                    a = r.value,
                    u = jt(o),
                    h = a;
                let c = "value" === o ? h : pd(h);
                e.attrName = u, e.attrValue = c, e.keepAttr = !0, e.forceKeepAttr = void 0, ni(M.uponSanitizeAttribute, t, e), c = e.attrValue, !ft || "id" !== u && "name" !== u || 0 === fd(c, pt) || (Kt(o, t), c = pt + c), nt && $d(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, c) || "attributename" === u && dd(c, "href") ? Kt(o, t) : e.forceKeepAttr || (!e.keepAttr || !et && $d(tv, c) ? Kt(o, t) : (st && (c = Qt(c)), li(n, u, c) ? (c = hi(n, u, l, c), c !== h && ci(t, o, l, c)) : Kt(o, t)));
            }
            ni(M.afterSanitizeAttributes, t, null);
        },
        vi = function(t) {
            let i = null;
            const e = Zt(t);
            for (ni(M.beforeSanitizeShadowDOM, t, null); i = e.nextNode();)
                if (ni(M.uponSanitizeShadowNode, i, null), oi(i, t), di(i), ei(i.content) && vi(i.content), 1 === (y ? y(i) : i.nodeType)) {
                    const t = _(i);
                    ei(t) && (fi(t), vi(t));
                }
            ni(M.afterSanitizeShadowDOM, t, null);
        },
        fi = function(t) {
            const i = [{
                node: t,
                shadow: null
            }];
            for (; i.length > 0;) {
                const t = i.pop();
                if (t.shadow) {
                    vi(t.shadow);
                    continue;
                }
                const e = t.node,
                    s = 1 === (y ? y(e) : e.nodeType),
                    n = p(e);
                if (n)
                    for (let t = n.length - 1; t >= 0; --t) i.push({
                        node: n[t],
                        shadow: null
                    });
                if (s) {
                    const t = b ? b(e) : null;
                    if ("string" == typeof t && "template" === jt(t)) {
                        const t = e.content;
                        ei(t) && i.push({
                            node: t,
                            shadow: null
                        });
                    }
                }
                if (s) {
                    const t = _(e);
                    ei(t) && i.push({
                        node: null,
                        shadow: t
                    }, {
                        node: t,
                        shadow: null
                    });
                }
            }
        };
    return e.sanitize = function(t) {
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            s = null,
            r = null,
            o = null,
            l = null;
        if (Ot = !t, Ot && (t = "<!-->"), "string" != typeof t && !si(t) && "string" != typeof(t = function(t) {
                switch (typeof t) {
                    case "string":
                        return t;
                    case "number":
                        return gd(t);
                    case "boolean":
                        return _d(t);
                    case "bigint":
                        return md ? md(t) : "0";
                    case "symbol":
                        return yd ? yd(t) : "Symbol()";
                    case "undefined":
                    default:
                        return wd(t);
                    case "function":
                    case "object":
                        {
                            if (null === t) return wd(t);
                            const i = t,
                                e = Od(i, "toString");
                            if ("function" == typeof e) {
                                const t = e(i);
                                return "string" == typeof t ? t : wd(t);
                            }
                            return wd(t);
                        }
                }
            }(t))) throw Sd("dirty is not a string, aborting");
        if (!e.isSupported) return t;
        ot ? (W = lt, G = at) : Ht(i), (M.uponSanitizeElement.length > 0 || M.uponSanitizeAttribute.length > 0) && (W = Pd(W)), M.uponSanitizeAttribute.length > 0 && (G = Pd(G)), e.removed = [];
        const a = _t && "string" != typeof t && si(t);
        if (a) {
            ! function(t) {
                if (!nt) return;
                const i = [t];
                for (; i.length > 0;) {
                    const t = i.pop(),
                        e = y ? y(t) : t.nodeType;
                    if (7 === e || 8 === e && $d(Zd, t.data)) {
                        try {
                            v(t);
                        } catch (t) {}
                        continue;
                    }
                    if (1 === e) {
                        const i = t,
                            e = jt(b ? b(t) : t.nodeName);
                        try {
                            i.hasAttribute && i.hasAttribute("patchsrc") && i.removeAttribute("patchsrc"), i.hasAttribute && i.hasAttribute("for") && "label" !== e && "output" !== e && i.removeAttribute("for");
                        } catch (t) {}
                    }
                    const s = p(t);
                    if (s)
                        for (let t = s.length - 1; t >= 0; --t) i.push(s[t]);
                }
            }(t);
            const i = b ? b(t) : t.nodeName;
            if ("string" == typeof i) {
                const e = jt(i);
                if (!W[e] || J[e]) throw Gt(t), Sd("root node is forbidden and cannot be sanitized in-place");
            }
            if (ii(t)) throw Gt(t), Sd("root node is clobbered and cannot be sanitized in-place");
            try {
                fi(t);
            } catch (i) {
                throw Gt(t), i;
            }
        } else if (si(t)) s = Xt("<!---->"), r = s.ownerDocument.importNode(t, !0), 1 === r.nodeType && "BODY" === r.nodeName || "HTML" === r.nodeName ? s = r : s.appendChild(r), fi(r);
        else {
            if (!ht && !st && !rt && -1 === t.indexOf("<")) return S && dt ? O(t) : t;
            if (s = Xt(t), !s) return ht ? null : dt ? E : "";
        }
        s && ut && Vt(s.firstChild);
        const u = a ? t : s;
        try {
            const t = Zt(u);
            for (; o = t.nextNode();) oi(o, u), di(o), ei(o.content) && vi(o.content);
        } catch (i) {
            throw a && (Gt(t), nd(e.removed, (t) => {
                t.element && Jt(t.element);
            })), i;
        }
        if (a) return nd(e.removed, (t) => {
            t.element && Jt(t.element);
        }), st && ti(t), t;
        if (ht) {
            if (st && ti(s), ct)
                for (l = A.call(s.ownerDocument); s.firstChild;) l.appendChild(s.firstChild);
            else l = s;
            return (G.shadowroot || G.shadowrootmode) && (l = F.call(n, l, !0)), l;
        }
        let h = rt ? s.outerHTML : s.innerHTML;
        return rt && W["!doctype"] && s.ownerDocument && s.ownerDocument.doctype && s.ownerDocument.doctype.name && $d(Yd, s.ownerDocument.doctype.name) && (h = "<!DOCTYPE " + s.ownerDocument.doctype.name + ">\n" + h), st && (h = Qt(h)), S && dt ? O(h) : h;
    }, e.setConfig = function() {
        Ht(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), ot = !0, lt = W, at = G;
    }, e.clearConfig = function() {
        Ut = null, ot = !1, lt = null, at = null, S = x, E = "";
    }, e.isValidAttribute = function(t, i, e) {
        Ut || Ht({});
        const s = jt(t),
            n = jt(i);
        return li(s, n, e);
    }, e.addHook = function(t, i) {
        "function" == typeof i && bd(M, t) && ld(M[t], i);
    }, e.removeHook = function(t, i) {
        if (bd(M, t)) {
            if (void 0 !== i) {
                const e = rd(M[t], i);
                return -1 === e ? void 0 : ad(M[t], e, 1)[0];
            }
            return od(M[t]);
        }
    }, e.removeHooks = function(t) {
        bd(M, t) && (M[t] = []);
    }, e.removeAllHooks = function() {
        M = {
            afterSanitizeAttributes: [],
            afterSanitizeElements: [],
            afterSanitizeShadowDOM: [],
            beforeSanitizeAttributes: [],
            beforeSanitizeElements: [],
            beforeSanitizeShadowDOM: [],
            uponSanitizeAttribute: [],
            uponSanitizeElement: [],
            uponSanitizeShadowNode: []
        };
    }, e;
}();
var nv = "Refusing to render web experiment since the viewer is a likely bot";
var rv = {
    ADD_ATTR: (t, i) => "target" === t && "a" === i || "form" === t && /^(button|fieldset|input|output|select|textarea)$/.test(i),
    ADD_URI_SAFE_ATTR: ["form"]
};
var ov;
var lv = {
    icontains: (t, i) => i.toLowerCase().indexOf(t.toLowerCase()) > -1,
    not_icontains: (t, i) => -1 === i.toLowerCase().indexOf(t.toLowerCase()),
    regex: (t, i) => Wu(i, t),
    not_regex: (t, i) => !Wu(i, t),
    exact: (t, i) => i === t,
    is_not: (t, i) => i !== t
};
var av = Us("[Conversations]");
var uv = "Conversations not available yet.";

function hv(t, i) {
    var e, s, n, r, o, l, a;
    const u = null !== (e = null == t ? void 0 : t.flushIntervalMs) && void 0 !== e ? e : 3e3,
        h = null !== (s = null == t ? void 0 : t.maxBufferSize) && void 0 !== s ? s : 100,
        c = (null == i ? void 0 : i.consoleCapture) ? void 0 : null !== (n = null == t ? void 0 : t.maxLogsPerInterval) && void 0 !== n ? n : 1e3,
        d = R(c) ? Math.max(h, 2048) : Math.max(h, c),
        v = wi(wi({}, function() {
            let t = "",
                i = "";
            try {
                var e;
                const s = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : void 0,
                    n = null == s || null === (e = s.navigator) || void 0 === e ? void 0 : e.userAgent;
                n && ([t, i] = Qt(n));
            } catch (t) {}
            return function(t, i) {
                const e = function(t) {
                    if (t) return {}.hasOwnProperty.call(ms, t) ? ms[t] : t;
                }(t);
                return wi(wi({}, e ? {
                    "os.name": e
                } : {}), i ? {
                    "os.version": i
                } : {});
            }(t, i);
        }()), null == t ? void 0 : t.resourceAttributes);
    return {
        serviceName: null !== (r = null !== (o = null == v ? void 0 : v["service.name"]) && void 0 !== o ? o : null == t ? void 0 : t.serviceName) && void 0 !== r ? r : null == i ? void 0 : i.serviceNameDefault,
        serviceVersion: null !== (l = null == v ? void 0 : v["service.version"]) && void 0 !== l ? l : null == t ? void 0 : t.serviceVersion,
        environment: null !== (a = null == v ? void 0 : v["deployment.environment"]) && void 0 !== a ? a : null == t ? void 0 : t.environment,
        resourceAttributes: v,
        beforeSend: null == t ? void 0 : t.beforeSend,
        flushIntervalMs: u,
        maxBufferSize: h,
        maxQueueSize: d,
        maxBatchRecordsPerPost: 100,
        rateCapWindowMs: u,
        maxLogsPerInterval: c,
        backgroundFlushBudgetMs: 0,
        terminationFlushBudgetMs: 0
    };
}
var cv = [
    "debug",
    "log",
    "warn",
    "error",
    "info"
];
var dv = (t) => {
    for (; null == t ? void 0 : t.__rrweb_original__;) t = t.__rrweb_original__;
    return t;
};
var vv = "console";
var fv = "__posthogHandledLogsRequestError";
var pv = (t, i) => {
    const e = t instanceof Error ? t : new Error(i);
    return e[fv] = !0, e;
};
var gv = (t) => !!t && "object" == typeof t && !0 === t[fv];
var _v = class {
    get Bv() {
        return wi(wi({}, this.A), {}, {
            error: (...t) => {
                t.some(gv) || this.A.error(...t);
            }
        });
    }
    constructor(t, i) {
        var e;
        this.Ra = t, this.zv = i, this.name = "logs", this.Hv = !1, this.Uv = !1, this.Wv = !1, this.A = Us("[logs]"), this.sc = [], this.Vv = [], this.Hd = 0, this.Gv = !1, this.Ti = !1, this.Qv = [], this.Jv = [], this.Zv = !1, this.Kv = !1, this.Yv = !1, this.Xv = () => {
            var t, i;
            this.Ti || (this.Hd = 0, null === (t = this.tf) || void 0 === t || t.onReconnect(), null === (i = this.ef) || void 0 === i || i.onReconnect());
        }, this.Hv = !!(null === (e = t.get()) || void 0 === e ? void 0 : e.captureConsoleLogs);
    }
    get if() {
        return !0;
    }
    nf() {}
    sf() {
        if (!this.Yv) {
            try {
                this.nv = typeof window > "u" ? void 0 : window;
            } catch (t) {
                this.nv = void 0;
            }
            this.nv && (Hr(this.nv, "online", this.Xv), this.Yv = !0);
        }
    }
    rf(t, i, e, s) {
        this.sf();
        const n = hv(this.Ra.get(), e);
        return [new Ps(this.af(t, i), n, this.Bv, () => this.zv(), (t) => t(), void 0, s), n];
    }
    lf() {
        const t = this.Ra.get();
        var i;
        return this.tf && this.uf === t || (null === (i = this.tf) || void 0 === i || i.reset(), this.uf = t, [this.tf, this.cf] = this.rf(() => this.sc, (t) => {
            this.sc = t;
        })), this.tf;
    }
    hf() {
        const t = this.Ra.get();
        var i;
        return this.ef && this.df === t || (null === (i = this.ef) || void 0 === i || i.reset(), this.df = t, [this.ef, this.vf] = this.rf(() => this.Vv, (t) => {
            this.Vv = t;
        }, {
            serviceNameDefault: "posthog-browser-logs",
            consoleCapture: !0
        }, vv)), this.ef;
    }
    setup(t) {
        if (!this.Ti && !this.Gv) return this.Gv = !0, this.Ea = t, this.A = t.logger.createLogger("[logs]"), yc(t.kv.initialize(), () => {
            this.Ti || this.sv(t);
        });
    }
    sv(t) {
        var i;
        this.sf(), (null === (i = this.Ra.get()) || void 0 === i ? void 0 : i.captureConsoleLogs) && (this.Hv = !0), (this.Hv || this.Ra.remoteConfigWillArrive && t.kv.get(this.Ra.captureHintKey)) && this.ff();
        let e = !1;
        const s = t.onRemoteConfig((t) => {
            var i;
            e = t.ok && !0 === (null === (i = t.config.logs) || void 0 === i ? void 0 : i.captureConsoleLogs), this.onRemoteConfig(t);
        });
        this.Ti ? s.dispose() : (this.Ua = s, e || this.loadIfEnabled());
    }
    dispose() {
        var t, i, e, s, n, r, o;
        this.Ti || (this.Ti = !0, this.pf(), null === (t = this.Ua) || void 0 === t || t.dispose(), this.Ua = void 0, this.Ea = void 0, this.Wv = !1, null === (i = this.nv) || void 0 === i || i.removeEventListener("online", this.Xv), null === (e = this.gf) || void 0 === e || e.call(this), this.gf = void 0, null === (s = this.tf) || void 0 === s || s.clearQueue(), null === (n = this.ef) || void 0 === n || n.clearQueue(), null === (r = this.tf) || void 0 === r || r.reset(), null === (o = this.ef) || void 0 === o || o.reset());
    }
    onRemoteConfig(t) {
        var i, e;
        if (this.Ti) return;
        const s = t.ok ? null === (i = t.config.logs) || void 0 === i ? void 0 : i.captureConsoleLogs : void 0;
        F(s) ? this.mf() : (null === (e = this.Ea) || void 0 === e || e.kv.set(this.Ra.captureHintKey, !!s), s ? (this.Hv = !0, this.Uv || this.ff(), this.loadIfEnabled()) : this.mf());
    }
    reset() {
        var t, i, e, s;
        this.pf(), null === (t = this.tf) || void 0 === t || t.clearQueue(), this.sc = [], null === (i = this.tf) || void 0 === i || i.reset(), null === (e = this.ef) || void 0 === e || e.clearQueue(), this.Vv = [], null === (s = this.ef) || void 0 === s || s.reset(), this.Hd = 0;
    }
    captureLog(t) {
        !this.Ti && this.Ea && this.lf().captureLog(t);
    }
    captureConsoleLog(t) {
        !this.Ti && this.Ea && this.hf().captureLog(t);
    }
    captureBufferedConsoleLog(t, i, e) {
        !this.Ti && this.Ea && this.hf().captureLog(t, {
            context: i,
            occurredAtMs: e
        });
    }
    Cd() {
        var t;
        this.pf(), null === (t = this.ef) || void 0 === t || t.clearQueue(), this.Vv = [];
    }
    mf() {
        this.Hv || this.pf();
    }
    ff() {
        var t;
        if (this.Zv || !(null === (t = this.nv) || void 0 === t ? void 0 : t.console)) return;
        const i = hv(this.Ra.get()).maxBufferSize;
        let e = !0;
        this.Jv.push(() => {
            e = !1;
        });
        for (const t of cv) {
            let s;
            try {
                s = dv(this.nv.console[t]);
            } catch (t) {
                continue;
            }
            s && this.Jv.push(Xh(this.nv.console, t, (n) => {
                const r = (...s) => {
                    try {
                        e && this.yf(t, s, i);
                    } catch (t) {}
                    return n.apply(this.nv.console, s);
                };
                return r.__rrweb_original__ = s, r;
            }));
        }
        this.Zv = !0, this.bf = setTimeout(() => {
            this.pf();
        }, 3e4);
    }
    yf(t, i, e) {
        var s;
        if (this.Zv && !this.Kv && 0 !== i.length)
            if (null === (s = this.Ea) || void 0 === s ? void 0 : s.canCapture) {
                if (e > this.Qv.length) {
                    this.Kv = !0;
                    try {
                        this.Qv.push({
                            level: t,
                            args: i,
                            occurredAtMs: Date.now(),
                            context: this.zv()
                        });
                    } finally {
                        this.Kv = !1;
                    }
                }
            } else this.pf();
    }
    pf() {
        if (this.Qv = [], this.Zv) {
            this.Zv = !1, this.bf && (clearTimeout(this.bf), this.bf = void 0);
            for (const t of this.Jv) t();
            this.Jv = [];
        }
    }
    _f() {
        const t = this.Qv;
        return this.pf(), t;
    }
    get logger() {
        return this.wf || (this.wf = {
            trace: (t, i) => this.captureLog({
                body: t,
                level: "trace",
                attributes: i
            }),
            debug: (t, i) => this.captureLog({
                body: t,
                level: "debug",
                attributes: i
            }),
            info: (t, i) => this.captureLog({
                body: t,
                level: "info",
                attributes: i
            }),
            warn: (t, i) => this.captureLog({
                body: t,
                level: "warn",
                attributes: i
            }),
            error: (t, i) => this.captureLog({
                body: t,
                level: "error",
                attributes: i
            }),
            fatal: (t, i) => this.captureLog({
                body: t,
                level: "fatal",
                attributes: i
            })
        }), this.wf;
    }
    flushLogs(t) {
        this.Ea && (t ? this.kf(t) : (this.tf && this.tf.flush().catch((t) => this.Sf(t)), this.ef && this.ef.flush().catch((t) => this.Sf(t))));
    }
    flush() {
        var t = this;
        return Y(function*() {
            var i, e;
            const s = null === (i = t.tf) || void 0 === i ? void 0 : i.flush().catch((i) => t.Sf(i)),
                n = null === (e = t.ef) || void 0 === e ? void 0 : e.flush().catch((i) => t.Sf(i));
            yield s, yield n;
        })();
    }
    Sf(t) {
        gv(t) || this.A.error("PostHog logs flush failed:", t);
    }
    loadIfEnabled() {
        if (this.Ti || !this.Hv || this.Uv || this.Wv) return;
        const t = this.nf();
        if (t) {
            this.Wv = !0;
            try {
                t((t, i) => {
                    if (this.Wv = !1, !this.Ti && this.Hv)
                        if (t || !i) this.A.error("Could not load logs script", t), this.pf();
                        else {
                            const t = this._f();
                            this.gf = i.initialize(this.Ea), this.Uv = !0, t.length > 0 && i.replay(this.Ea, t);
                        }
                });
            } catch (t) {
                throw this.Wv = !1, t;
            }
        } else this.pf();
    }
    af(t, i) {
        const e = this.Ea;
        return {
            get isDisabled() {
                return !1;
            },
            get optedOut() {
                return !e.canCapture;
            },
            getPersistedProperty: (i) => i === f.LogsQueue ? t() : void 0,
            setPersistedProperty(t, e) {
                t === f.LogsQueue && i(null != e ? e : []);
            },
            qs: (t) => this.qs(t),
            getLibraryId: () => e.library.name,
            getLibraryVersion: () => e.library.version
        };
    }
    qs(t) {
        return new Promise((i) => {
            if (Ol(this.Hd, 3)) return void i({
                kind: "fatal",
                error: pv(void 0, "logs endpoint is unreachable, dropping batch")
            });
            let e = !1;
            const s = (t) => {
                    e || (e = !0, clearTimeout(n), i(t));
                },
                n = setTimeout(() => {
                    this.A.warn("Logs request timed out before receiving a response"), s({
                        kind: "retry-later",
                        error: pv(void 0, "logs request timed out")
                    });
                }, 9e4),
                r = this.if;
            this.Ea.sendRequest("/i/v1/logs", {
                method: "POST",
                query: {
                    token: this.Ea.projectToken
                },
                body: t,
                compression: "best-available",
                timeoutMs: 6e4
            }).then((t) => {
                var i;
                const e = t.statusCode;
                this.xf(e, r), e >= 200 && 300 > e ? s({
                    kind: "ok"
                }) : 413 === e ? s({
                    kind: "too-large"
                }) : 0 !== e && 408 !== e && 429 !== e && 500 > e ? s({
                    kind: "fatal",
                    error: new Error(`logs request failed with status ${e}`)
                }) : 0 === e ? (t.error || this.A.warn("Logs request failed before receiving an HTTP response"), s({
                    kind: "retry-later",
                    error: pv(t.error, "logs request failed before receiving an HTTP response")
                })) : s({
                    kind: "retry-later",
                    error: null !== (i = t.error) && void 0 !== i ? i : new Error(`logs request failed with status ${e}`)
                });
            }, (t) => {
                s({
                    kind: "retry-later",
                    error: t
                });
            });
        });
    }
    xf(t, i) {
        (0 !== t || i) && (this.Hd = Rl(t, this.Hd, 3, () => this.A.warn("Log requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped sending logs; will try again when connectivity changes.")));
    }
    kf(t) {
        this.sc.length > 0 && this.$f(t, this.sc, this.cf, this.Ea.library.name, (t) => {
            this.sc = t;
        }), this.Vv.length > 0 && this.$f(t, this.Vv, this.vf, vv, (t) => {
            this.Vv = t;
        });
    }
    $f(t, i, e, s, n) {
        if (0 === i.length) return;
        const r = i.map((t) => t.record);
        n([]);
        const o = xs(r, Ss(e, this.Ea.library.name, this.Ea.library.version), s, this.Ea.library.version);
        this.Ea.sendRequest("/i/v1/logs", {
            method: "POST",
            query: {
                token: this.Ea.projectToken
            },
            body: o,
            compression: "best-available",
            transport: t,
            timeoutMs: 6e4
        }).catch((t) => this.Sf(t));
    }
};
var mv = Us("[NetworkMetrics]");
var yv = {
    "http:": 80,
    "https:": 443
};
var bv = new Set([
    "CONNECT",
    "DELETE",
    "GET",
    "HEAD",
    "OPTIONS",
    "PATCH",
    "POST",
    "PUT",
    "TRACE"
]);
var wv = (t, i) => {
    var e;
    const s = String(i);
    return {
        method: String(t).toUpperCase(),
        url: (null === (e = Tl(s)) || void 0 === e ? void 0 : e.href) || s
    };
};
var $v = (t, i, e, s, n, r, o = !1) => {
    try {
        var l, a;
        const u = n();
        if (!u) return;
        const h = e || void 0,
            c = wh() - s,
            d = Tl(i.url);
        if (d && "http:" !== d.protocol && "https:" !== d.protocol) return;
        const v = {
                url: (null == d ? void 0 : d.href) || i.url,
                method: i.method
            },
            f = T(u.name) ? u.name(v) : C(u.name) ? u.name : "http.client.request.duration";
        if (!f) return;
        const p = o && !h ? void 0 : ((t, i) => t ? 400 > t ? void 0 : String(t) : (null == i ? void 0 : i.name) || "_OTHER")(h, r),
            g = wi(wi(wi(wi(wi({}, ((t) => {
                const i = bv.has(t) ? t : "_OTHER";
                return wi({
                    "http.request.method": i
                }, "_OTHER" === i && t !== i ? {
                    "http.request.method_original": t
                } : {});
            })(v.method)), d ? ((t) => {
                return {
                    "server.address": t.hostname.startsWith("[") && t.hostname.endsWith("]") ? t.hostname.slice(1, -1) : t.hostname,
                    "server.port": Number(t.port) || yv[t.protocol],
                    "url.scheme": t.protocol.slice(0, -1),
                    "url.template": (i = t.pathname, i.split("/").map((t) => ((t) => /^\d+$/.test(t) || t.length >= 8 && /^[0-9a-f-]*\d[0-9a-f-]*$/i.test(t))(t) ? ":id" : t).join("/"))
                };
                var i;
            })(d) : {}), h ? {
                "http.response.status_code": h
            } : {}), p ? {
                "error.type": p
            } : {}), null === (l = u.attributes) || void 0 === l ? void 0 : l.call(u, v, {
                status: h,
                durationMs: c
            }));
        null === (a = t.metrics) || void 0 === a || a.histogram(f, c, {
            unit: "ms",
            attributes: g
        });
    } catch (t) {
        mv.error("Failed to record network metric", t);
    }
};
var Sv = () => {};
var xv = (i, e) => T(null == t ? void 0 : t.fetch) ? Xh(t, "fetch", (t) => function(...s) {
    const n = wh(),
        r = t.apply(this, s);
    if (!e()) return r;
    try {
        var o, l, a;
        const [t, u] = s, h = wv(null !== (o = null !== (l = null == u ? void 0 : u.method) && void 0 !== l ? l : null == t ? void 0 : t.method) && void 0 !== o ? o : "GET", null !== (a = null == t ? void 0 : t.url) && void 0 !== a ? a : t);
        return r.then((t) => ($v(i, h, null == t ? void 0 : t.status, n, e, void 0, !0), t), (t) => {
            throw $v(i, h, void 0, n, e, t), t;
        });
    } catch (t) {
        return mv.error("Failed to observe fetch", t), r;
    }
}) : Sv;
var Ev = (i, e) => {
    var s;
    const n = null == t || null === (s = t.XMLHttpRequest) || void 0 === s ? void 0 : s.prototype;
    if (!n) return Sv;
    const r = new WeakMap(),
        o = Xh(n, "open", (t) => function(...i) {
            try {
                (() => uu.has(this))() || r.set(this, wv(i[0], i[1]));
            } catch (t) {
                mv.error("Failed to observe XHR open", t);
            }
            return t.apply(this, i);
        }),
        l = Xh(n, "send", (t) => function(...s) {
            let n;
            try {
                const t = r.get(this);
                if (t && e()) {
                    const s = wh();
                    n = () => {
                        this.removeEventListener("loadend", n), $v(i, t, this.status, s, e);
                    }, Hr(this, "loadend", n);
                }
            } catch (t) {
                mv.error("Failed to observe XHR send", t);
            }
            try {
                return t.apply(this, s);
            } catch (t) {
                throw n && this.removeEventListener("loadend", n), t;
            }
        });
    return () => {
        o(), l();
    };
};
var kv = new WeakMap();
var Tv = new Set([
    "$comment",
    "$defs",
    "$id",
    "$schema",
    "additionalProperties",
    "default",
    "definitions",
    "deprecated",
    "description",
    "examples",
    "minProperties",
    "properties",
    "readOnly",
    "required",
    "title",
    "type",
    "writeOnly"
]);
var Pv = {
    maxStringLength: 2048,
    truncationSuffix: "..."
};
var Ov = {
    maxStringLength: 2048,
    truncationSuffix: "..."
};

function Rv(t) {
    if (t) return !0 === t ? {
        intent: !0,
        model: !0
    } : {
        intent: !1 !== t.intent,
        model: !1 !== t.model
    };
}

function Cv(t, i) {
    return {}.hasOwnProperty.call(t, i);
}

function Av(t, i) {
    const e = Object.create(t);
    return i && Object.defineProperty(e, "inputSchema", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: i
    }), e;
}

function Iv(t, i, e = !1) {
    if (!C(t)) return;
    const s = t.trim();
    return s ? (e ? ls(s, Pv) : s).slice(0, i) : void 0;
}

function Fv(t) {
    try {
        return P(t) && !0 === t.isError;
    } catch (t) {
        return !1;
    }
}

function Mv(t) {
    return ls(t || "Unknown error", Ov).slice(0, 2048);
}

function Dv(t, i) {
    try {
        return Mv(i ? function(t) {
            try {
                if (!P(t) || !k(t.content)) return;
                return t.content.filter((t) => P(t) && "text" === t.type && C(t.text)).map((t) => t.text).join(" ").trim() || void 0;
            } catch (t) {
                return;
            }
        }(t) : P(t) && C(t.message) ? t.message : C(t) ? t : String(t));
    } catch (t) {
        return "Unknown error";
    }
}

function Nv(t, i, e) {
    return i.errorResult ? [{
        type: "Error",
        value: e,
        mechanism: {
            type: "generic",
            handled: !0,
            synthetic: !0,
            exception_id: 0
        }
    }] : t.buildProperties(i.error, {
        handled: !0
    }).$exception_list.map((t) => wi(wi({}, t), {}, {
        value: Mv(t.value)
    }));
}

function Lv(t, i) {
    if (i) return "Error";
    try {
        if (!P(t)) return "Error";
        let i = C(t.name) ? t.name.trim() : "";
        const e = t.constructor;
        return i && "Error" !== i || !T(e) || "Error" === e.name || (i = e.name), (i || "Error").slice(0, 256);
    } catch (t) {
        return "Error";
    }
}

function jv(t, i) {
    return {
        message: Dv(t, i),
        type: Lv(t, i)
    };
}
var Uv = {
    featureFlags: class extends Dc {
        constructor(t) {
            const i = new Lc(t.config, t.ec());
            super(i), this.name = yh, this._instance = t, this.Cf = i;
        }
        get tv() {
            return this._instance.persistence;
        }
        updateConfig(t, i) {
            this.Cf.update(t, i), this.ev();
        }
    }
};
var Bv = {
    sessionRecording: class {
        get Fr() {
            return this._instance.config;
        }
        get Tc() {
            return this._instance.persistence;
        }
        get started() {
            var t;
            return !!(null === (t = this.Tf) || void 0 === t ? void 0 : t.isStarted);
        }
        get status() {
            var t, i;
            return "awaiting_config" === this.If || "missing_config" === this.If ? this.If : null !== (t = null === (i = this.Tf) || void 0 === i ? void 0 : i.status) && void 0 !== t ? t : this.If;
        }
        constructor(i) {
            if (this._instance = i, this._forceAllowLocalhostNetworkCapture = !1, this.If = nc, this.Ef = void 0, this.Mf = !1, this.Ye = (() => {
                    var i, e;
                    if (!(null == s ? void 0 : s.visibilityState) || "visible" === s.visibilityState) return !0;
                    const n = null == t || null === (i = t.performance) || void 0 === i || null === (e = i.getEntriesByType) || void 0 === e ? void 0 : e.call(i, "visibility-state");
                    return !(null == n ? void 0 : n.length) || n.some((t) => "visible" === t.name);
                })(), this.an = () => {
                    var t, i;
                    "visible" === (null == s ? void 0 : s.visibilityState) && (this.Ye = !0, null === (t = this.Tf) || void 0 === t || null === (i = t.setDocumentWasEverVisible) || void 0 === i || i.call(t, !0));
                }, !this._instance.sessionManager) throw oc.error("started without valid sessionManager"), new Error("[SessionRecording] started without valid sessionManager. This is a bug.");
            if ("always" === this.Fr.cookieless_mode) throw new Error("[SessionRecording] cannot be used with cookieless_mode=\"always\"");
            (null == s ? void 0 : s.addEventListener) && Hr(s, "visibilitychange", this.an);
        }
        initialize() {
            this.startIfEnabledOrStop();
        }
        dispose({
            discardBufferedEvents: t = !1
        } = {}) {
            var i;
            this.Mf = !0, null == s || null === (i = s.removeEventListener) || void 0 === i || i.call(s, "visibilitychange", this.an), t ? this.Af(!0) : this.stopRecording();
        }
        get Rf() {
            var i;
            const e = !!(null === (i = this._instance.get_property("$session_recording_remote_config")) || void 0 === i ? void 0 : i.enabled),
                s = !this.Fr.disable_session_recording,
                n = this.Fr.disable_session_recording || this._instance.consent.isOptedOut();
            return t && e && s && !n;
        }
        startIfEnabledOrStop(t) {
            var i;
            if (this.Mf) return;
            if (this.Rf && (null === (i = this.Tf) || void 0 === i ? void 0 : i.isStarted)) return;
            const e = !R(Object.assign) && !R(Array.from);
            this.Rf && e ? (this.Pf(t), oc.info("starting")) : (this.If = nc, this.stopRecording());
        }
        Pf(t) {
            var i, e;
            if (this.Rf)
                if ("awaiting_config" !== this.If && "missing_config" !== this.If && (this.If = rc), (null == c || null === (i = c.__PosthogExtensions__) || void 0 === i || null === (i = i.rrweb) || void 0 === i ? void 0 : i.record) && (null === (e = c.__PosthogExtensions__) || void 0 === e ? void 0 : e.initSessionRecording)) this.Of(t);
                else {
                    var s, n;
                    const i = this._instance.sessionManager;
                    null === (s = c.__PosthogExtensions__) || void 0 === s || null === (n = s.loadExternalDependency) || void 0 === n || n.call(s, this._instance, this.Ff, (e) => {
                        if (!this.Mf && this.Rf && this._instance.sessionManager === i) return e ? (this._instance.register_for_session({
                            $sdk_debug_recording_script_not_loaded: !0
                        }), oc.error("could not load recorder", e)) : void this.Of(t);
                        this.If = "disabled";
                    });
                }
        }
        stopRecording() {
            var t, i;
            null === (t = this.Ef) || void 0 === t || t.call(this), this.Ef = void 0, null === (i = this.Tf) || void 0 === i || i.stop();
        }
        Af(t = !1) {
            var i, e;
            null === (i = this.Ef) || void 0 === i || i.call(this), this.Ef = void 0, null === (e = this.Tf) || void 0 === e || e.discard({
                discardProducerEvents: t
            });
        }
        Df() {
            var t, i;
            null === (t = this.Tc) || void 0 === t || t.unregister("$session_is_sampled"), null === (i = this.Tc) || void 0 === i || i.unregister("$replay_sample_rate");
        }
        Lf(t, i) {
            if (F(t)) return null;
            const e = M(t) ? t : parseFloat(t);
            return "number" != typeof(s = e) || !Number.isFinite(s) || 0 > s || s > 1 ? (oc.warn(`${i} must be between 0 and 1. Ignoring invalid value:`, t), null) : e;
            var s;
        }
        Nf(t) {
            if (this.Tc) {
                var i, e;
                const s = this.Tc,
                    n = () => {
                        var i;
                        const e = !1 === t.sessionRecording ? void 0 : t.sessionRecording,
                            n = this.Lf(null === (i = this.Fr.session_recording) || void 0 === i ? void 0 : i.sampleRate, "session_recording.sampleRate"),
                            r = this.Lf(null == e ? void 0 : e.sampleRate, "remote config sampleRate"),
                            o = null != n ? n : r;
                        F(o) && this.Df();
                        const l = null == e ? void 0 : e.minimumDurationMilliseconds;
                        s.register({
                            [Nn]: wi(wi({
                                cache_timestamp: Date.now(),
                                enabled: !!e
                            }, e), {}, {
                                networkPayloadCapture: wi({
                                    capturePerformance: t.capturePerformance
                                }, null == e ? void 0 : e.networkPayloadCapture),
                                canvasRecording: {
                                    enabled: null == e ? void 0 : e.recordCanvas,
                                    fps: null == e ? void 0 : e.canvasFps,
                                    quality: null == e ? void 0 : e.canvasQuality
                                },
                                sampleRate: o,
                                minimumDurationMilliseconds: R(l) ? null : l,
                                endpoint: null == e ? void 0 : e.endpoint,
                                triggerMatchType: null == e ? void 0 : e.triggerMatchType,
                                masking: null == e ? void 0 : e.masking,
                                urlTriggers: null == e ? void 0 : e.urlTriggers,
                                version: null == e ? void 0 : e.version,
                                triggerGroups: null == e ? void 0 : e.triggerGroups
                            })
                        });
                    };
                n(), null === (i = this.Ef) || void 0 === i || i.call(this), this.Ef = null === (e = this._instance.sessionManager) || void 0 === e ? void 0 : e.onSessionId(n);
            }
        }
        onRemoteConfig(t) {
            const i = t.ok ? t.config : void 0;
            return i && "sessionRecording" in i ? !1 === i.sessionRecording ? (this.Nf(i), void this.Af()) : (this.Nf(i), void this.startIfEnabledOrStop()) : ("awaiting_config" === this.If && (this.If = "missing_config", this._instance.register_for_session({
                [_r]: !0
            }), oc.warn("config refresh failed, recording will not start until page reload")), void this.startIfEnabledOrStop());
        }
        log(t, i = "log") {
            var e;
            (null === (e = this.Tf) || void 0 === e ? void 0 : e.log) ? this.Tf.log(t, i): oc.warn("log called before recorder was ready");
        }
        get Ff() {
            var t, i;
            const e = null === (t = this._instance) || void 0 === t || null === (t = t.persistence) || void 0 === t ? void 0 : t.get_property(Nn);
            return (null == e || null === (i = e.scriptConfig) || void 0 === i ? void 0 : i.script) || "lazy-recorder";
        }
        jf() {
            const t = this._instance.get_property(Nn);
            if (!t) return !1;
            let i;
            try {
                i = "object" == typeof t ? t : JSON.parse(t);
            } catch (t) {
                return oc.warn("persisted remote config for session recording is invalid and will be ignored", t), !1;
            }
            return !F(i.cache_timestamp) && 36e5 >= Date.now() - i.cache_timestamp;
        }
        Of(t) {
            var i, e, s;
            if (!this.Mf && this.Rf && this._instance.sessionManager) {
                if (!(null === (i = c.__PosthogExtensions__) || void 0 === i ? void 0 : i.initSessionRecording)) return oc.warn("Called on script loaded before session recording is available. This can be caused by adblockers."), void this._instance.register_for_session({
                    [gr]: !0
                });
                var n;
                if (this.Tf || (this.Tf = null === (n = c.__PosthogExtensions__) || void 0 === n ? void 0 : n.initSessionRecording(this._instance, this.Ye), this.Tf._forceAllowLocalhostNetworkCapture = this._forceAllowLocalhostNetworkCapture), !this.jf()) {
                    if ("missing_config" === this.If || "awaiting_config" === this.If) return;
                    return this.If = "awaiting_config", oc.info("persisted remote config is stale, requesting fresh config before starting"), void new Ta(this._instance).load();
                }
                this.If = rc, null === (e = (s = this.Tf).setDocumentWasEverVisible) || void 0 === e || e.call(s, this.Ye), this.Tf.start(t);
            } else this.If = nc;
        }
        onRRwebEmit(t) {
            var i, e;
            null === (i = this.Tf) || void 0 === i || null === (e = i.onRRwebEmit) || void 0 === e || e.call(i, t);
        }
        overrideLinkedFlag() {
            var t, i;
            this.Tf || null === (i = this.Tc) || void 0 === i || i.register({
                $replay_override_linked_flag: !0
            }), null === (t = this.Tf) || void 0 === t || t.overrideLinkedFlag();
        }
        overrideSampling() {
            var t, i;
            this.Tf || null === (i = this.Tc) || void 0 === i || i.register({
                $replay_override_sampling: !0
            }), null === (t = this.Tf) || void 0 === t || t.overrideSampling();
        }
        overrideTrigger(t) {
            var i, e;
            this.Tf || null === (e = this.Tc) || void 0 === e || e.register({
                ["url" === t ? "$replay_override_url_trigger" : "$replay_override_event_trigger"]: !0
            }), null === (i = this.Tf) || void 0 === i || i.overrideTrigger(t);
        }
        get sdkDebugProperties() {
            var t;
            const i = {};
            for (const t of lc) {
                var e;
                const s = null === (e = this._instance.sessionPersistence) || void 0 === e ? void 0 : e.get_property(t);
                R(s) || (i[t] = s);
            }
            return wi(wi({}, i), (null === (t = this.Tf) || void 0 === t ? void 0 : t.sdkDebugProperties) || {
                $recording_status: this.status
            });
        }
        tryAddCustomEvent(t, i) {
            var e;
            return !!(null === (e = this.Tf) || void 0 === e ? void 0 : e.tryAddCustomEvent(t, i));
        }
        flushBeforeIdentityReset() {
            var t, i;
            null === (t = this.Tf) || void 0 === t || null === (i = t.flushBeforeIdentityReset) || void 0 === i || i.call(t);
        }
    }
};
var zv = {
    autocapture: class extends mh {
        constructor(t) {
            super(new Gh(t)), this.instance = t;
        }
    },
    historyAutocapture: class {
        constructor(t) {
            this.qf = !1, this._instance = t, this.Bf = this.zf();
        }
        initialize() {
            this.startIfEnabled();
        }
        get isEnabled() {
            const t = this.Hf();
            return !!(t.path || t.search || this.Uf(t));
        }
        startIfEnabled() {
            this.isEnabled && (js.info("History API monitoring enabled, starting..."), this.monitorHistoryChanges());
        }
        startIfEnabledOrStop() {
            this.stop(), this.Bf = this.zf(), this.startIfEnabled();
        }
        stop() {
            this.Wf && this.Wf(), this.Wf = void 0, this.Vf && this.Vf(), this.Vf = void 0, js.info("History API monitoring stopped");
        }
        monitorHistoryChanges() {
            t && t.history && (this.Gf("pushState"), this.Gf("replaceState"), this.Qf(), this.Uf() && this.Jf());
        }
        Gf(i) {
            var e;
            if (!t || (null === (e = t.history[i]) || void 0 === e ? void 0 : e.__posthog_wrapped__)) return;
            const s = this;
            Xh(t.history, i, (e) => function(n, r, o) {
                var l;
                s.Zf(o) && s.Kf(), e.call(this, n, r, o), s.Yf(i, !s.qf && "popstate" !== (null == t || null === (l = t.event) || void 0 === l ? void 0 : l.type));
            });
        }
        zf() {
            const i = null == t ? void 0 : t.location;
            if (null == i ? void 0 : i.pathname) return {
                pathname: i.pathname,
                search: i.search,
                hash: i.hash
            };
        }
        Hf() {
            const t = this._instance.config.capture_pageview;
            return "history_change" === t ? {
                path: !0
            } : P(t) ? t : {};
        }
        Uf(t = this.Hf()) {
            return !!t.hash && !this._instance.config.disable_capture_url_hashes;
        }
        Xf(t) {
            const i = this.Hf(),
                e = this.Bf;
            return !(!e || !(i.path && t.pathname !== e.pathname || i.search && t.search !== e.search || this.Uf(i) && t.hash !== e.hash));
        }
        Yf(t, i = !1) {
            try {
                i || this.Kf();
                const e = this.zf();
                if (!e) return;
                if (this.Xf(e)) {
                    const e = () => this._instance.capture(Rr, {
                        navigation_type: t
                    });
                    i ? (this.tp = e, Promise.resolve().then(() => this.Kf())) : e();
                }
                this.Bf = e;
            } catch (i) {
                js.error(`Error capturing ${t} pageview`, i);
            }
        }
        Zf(i) {
            var e, s;
            return !(F(i) || !t) && (null === (e = Tl(String(i))) || void 0 === e ? void 0 : e.href) !== (null === (s = t.location) || void 0 === s ? void 0 : s.href);
        }
        Kf() {
            const t = this.tp;
            if (t) {
                this.tp = void 0, this.qf = !0;
                try {
                    t();
                } catch (t) {
                    js.error("Error capturing deferred pageview", t);
                } finally {
                    this.qf = !1;
                }
                this.Bf = this.zf();
            }
        }
        Qf() {
            if (this.Wf) return;
            const i = () => {
                this.Yf("popstate");
            };
            Hr(t, "popstate", i), this.Wf = () => {
                t && t.removeEventListener("popstate", i);
            };
        }
        Jf() {
            if (this.Vf) return;
            const i = () => {
                this.Yf("hashchange");
            };
            Hr(t, "hashchange", i), this.Vf = () => {
                t && t.removeEventListener("hashchange", i);
            };
        }
    },
    heatmaps: class {
        get Fr() {
            return this.instance.config;
        }
        constructor(t) {
            var i;
            this.ep = !1, this.fl = !1, this.np = null, this.instance = t, this.ep = !!(null === (i = this.instance.persistence) || void 0 === i ? void 0 : i.props[Pn]), this.rageclicks = new ah(t.config.rageclick);
        }
        initialize() {
            this.startIfEnabled();
        }
        get flushIntervalMilliseconds() {
            let t = 5e3;
            return P(this.Fr.capture_heatmaps) && this.Fr.capture_heatmaps.flush_interval_milliseconds && (t = this.Fr.capture_heatmaps.flush_interval_milliseconds), t;
        }
        get isEnabled() {
            return F(this.Fr.capture_heatmaps) ? F(this.Fr.enable_heatmaps) ? this.ep : this.Fr.enable_heatmaps : !1 !== this.Fr.capture_heatmaps;
        }
        startIfEnabled() {
            if (this.isEnabled) {
                if (this.fl) return;
                ac.info("starting..."), this.sp(), this.an();
            } else {
                var t;
                clearInterval(null !== (t = this.np) && void 0 !== t ? t : void 0), this.rp(), this.getAndClearBuffer();
            }
        }
        onRemoteConfig(t) {
            if (!t.ok) return;
            const i = t.config;
            if (!("heatmaps" in i)) return;
            const e = !!i.heatmaps;
            this.instance.persistence && this.instance.persistence.register({
                [Pn]: e
            }), this.ep = e, this.startIfEnabled();
        }
        getAndClearBuffer() {
            const t = this.At;
            return this.At = void 0, t;
        }
        op(t) {
            uc(t.originalEvent) && this.Pr(t.originalEvent, "deadclick");
        }
        an() {
            this.np && clearInterval(this.np), this.np = "visible" === (null == s ? void 0 : s.visibilityState) ? setInterval(this.dc.bind(this), this.flushIntervalMilliseconds) : null;
        }
        sp() {
            t && s && (this.ap = this.dc.bind(this), Hr(t, Or, this.ap), this.lp = (i) => this.Pr(i || (null == t ? void 0 : t.event)), Hr(s, "click", this.lp, {
                capture: !0
            }), this.up = (i) => this.cp(i || (null == t ? void 0 : t.event)), Hr(s, "mousemove", this.up, {
                capture: !0
            }), this.hp = new pl(this.instance, vl, this.op.bind(this)), this.hp.startIfEnabledOrStop(), this.dp = this.an.bind(this), Hr(s, un, this.dp), this.fl = !0);
        }
        rp() {
            var i;
            t && s && (this.ap && t.removeEventListener(Or, this.ap), this.lp && s.removeEventListener("click", this.lp, {
                capture: !0
            }), this.up && s.removeEventListener("mousemove", this.up, {
                capture: !0
            }), this.dp && s.removeEventListener(un, this.dp), clearTimeout(this.vp), null === (i = this.hp) || void 0 === i || i.stop(), this.fl = !1);
        }
        fp(i, e) {
            const s = this.instance.scrollManager.scrollY(),
                n = this.instance.scrollManager.scrollX(),
                r = this.instance.scrollManager.scrollElement(),
                o = function(i, e, s) {
                    let n = i;
                    for (; n && xo(n) && !Eo(n, "body");) {
                        if (n === s) return !1;
                        let i;
                        try {
                            var r, o, l;
                            i = null === (r = null !== (o = null === (l = n.ownerDocument) || void 0 === l ? void 0 : l.defaultView) && void 0 !== o ? o : t) || void 0 === r ? void 0 : r.getComputedStyle(n).position;
                        } catch (t) {
                            return !1;
                        }
                        if (m(e, i)) return !0;
                        n = No(n);
                    }
                    return !1;
                }(Io(i), ["fixed", "sticky"], r);
            return {
                x: i.clientX + (o ? 0 : n),
                y: i.clientY + (o ? 0 : s),
                target_fixed: o,
                type: e
            };
        }
        Pr(t, i = "click") {
            var e;
            if (So(t.target) || !uc(t)) return;
            const s = this.fp(t, i);
            (null === (e = this.rageclicks) || void 0 === e ? void 0 : e.isRageClick(t.clientX, t.clientY, new Date().getTime())) && Yo(Io(t), this.instance.config.rageclick) && this.Qs(wi(wi({}, s), {}, {
                type: "rageclick"
            })), this.Qs(s);
        }
        cp(t) {
            !So(t.target) && uc(t) && (clearTimeout(this.vp), this.vp = setTimeout(() => {
                this.Qs(this.fp(t, "mousemove"));
            }, 500));
        }
        Qs(i) {
            if (!t) return;
            const e = this.Fr.disable_capture_url_hashes ? vi(t.location.href) : t.location.href,
                s = this.Fr.custom_personal_data_properties,
                n = this.Fr.mask_personal_data_properties ? [...Ml, ...s || []] : [],
                r = Il(e, n, Nl);
            this.At = this.At || {}, this.At[r] || (this.At[r] = []), this.At[r].push(i);
        }
        dc() {
            this.At && !O(this.At) && this.instance.capture("$$heatmap", {
                $heatmap_data: this.getAndClearBuffer()
            });
        }
    },
    deadClicksAutocapture: pl,
    webVitalsAutocapture: class {
        constructor(i) {
            var e;
            this._instance = i, this.ep = !1, this.fl = !1, this.At = {
                navigationKey: void 0,
                url: void 0,
                metrics: [],
                firstMetricTimestamp: void 0
            }, this.pp = (t = !1) => {
                clearTimeout(this.gp), this.gp = void 0, 0 !== this.At.metrics.length && (this._instance.capture("$web_vitals", wi({
                    $current_url: this.At.url
                }, this.At.metrics.reduce((t, i) => wi(wi({}, t), {}, {
                    [`$web_vitals_${i.name}_event`]: wi({}, i),
                    [`$web_vitals_${i.name}_value`]: i.value
                }), {})), t ? {
                    transport: "sendBeacon",
                    send_instantly: !0
                } : void 0), this.At = {
                    navigationKey: void 0,
                    url: void 0,
                    metrics: [],
                    firstMetricTimestamp: void 0
                });
            }, this.mp = (t) => {
                var i;
                if (this.At = this.At || {
                        navigationKey: void 0,
                        url: void 0,
                        metrics: [],
                        firstMetricTimestamp: void 0
                    }, F(null == t ? void 0 : t.name) || F(null == t ? void 0 : t.value)) return void Qh.error("Invalid metric received", t);
                const e = "string" == typeof t.navigationURL ? t.navigationURL : void 0,
                    s = this.yp(e);
                if (R(s)) return;
                const n = M(t.navigationId) || "string" == typeof t.navigationId ? `navigation:${t.navigationId}` : `url:${s}`;
                if (this.bp && t.value >= this.bp) return void Qh.error("Ignoring metric with value >= " + this.bp, t);
                this.At.navigationKey !== n && (this.pp(), this.gp = setTimeout(this.pp, this.flushToCaptureTimeoutMs)), R(this.At.navigationKey) && (this.At.navigationKey = n, this.At.url = s), this.At.firstMetricTimestamp = R(this.At.firstMetricTimestamp) ? Date.now() : this.At.firstMetricTimestamp;
                const r = null === (i = this._instance.sessionManager) || void 0 === i ? void 0 : i.checkAndGetSessionAndWindowId(!0),
                    o = wi(wi(wi({}, t), e ? {
                        navigationURL: s
                    } : {}), {}, {
                        $current_url: s,
                        timestamp: Date.now()
                    });
                if (delete o.entries, P(t.attribution) && this.attributionMetrics.indexOf(t.name) > -1) {
                    const i = {};
                    for (const e of sc) {
                        const s = "url" === e && "string" == typeof t.attribution[e] ? this.yp(t.attribution[e]) : t.attribution[e];
                        R(s) || (i[e] = s);
                    }
                    o.attribution = i;
                } else delete o.attribution;
                R(r) || (o.$session_id = r.sessionId, o.$window_id = r.windowId), this.At.metrics.push(o), this.At.metrics.length === this.allowedMetrics.length && this.pp();
            }, this._p = () => {
                if (this.fl) return;
                let i, e, s, n, r = !1;
                const o = c.__PosthogExtensions__,
                    l = null == o ? void 0 : o.postHogWebVitalsCallbacksByFlavor,
                    a = (null == l ? void 0 : l[this.wp]) || ("web-vitals" === this.wp && R(l) ? null == o ? void 0 : o.postHogWebVitalsCallbacks : void 0);
                if (!R(a)) {
                    const t = a.withoutAttribution,
                        o = this.attributionMetrics;
                    r = !R(t), i = o.indexOf("LCP") > -1 ? a.onLCP : (null == t ? void 0 : t.onLCP) || a.onLCP, e = o.indexOf("CLS") > -1 ? a.onCLS : (null == t ? void 0 : t.onCLS) || a.onCLS, s = o.indexOf("FCP") > -1 ? a.onFCP : (null == t ? void 0 : t.onFCP) || a.onFCP, n = o.indexOf("INP") > -1 ? a.onINP : (null == t ? void 0 : t.onINP) || a.onINP;
                }
                if (!(i && e && s && n)) return void Qh.error("web vitals callbacks not loaded - not starting");
                const u = {
                        reportSoftNavs: this.useSoftNavs
                    },
                    h = r && this.attributionMetrics.indexOf("INP") > -1 ? wi(wi({}, u), {}, {
                        includeProcessedEventEntries: !1
                    }) : u;
                this.allowedMetrics.indexOf("LCP") > -1 && i(this.mp.bind(this), u), this.allowedMetrics.indexOf("CLS") > -1 && e(this.mp.bind(this), u), this.allowedMetrics.indexOf("FCP") > -1 && s(this.mp.bind(this), u), this.allowedMetrics.indexOf("INP") > -1 && n(this.mp.bind(this), h);
                const d = null == t ? void 0 : t.document;
                Hr(d, un, () => {
                    "hidden" === (null == d ? void 0 : d.visibilityState) && this.pp(!0);
                }), Hr(t, "pagehide", () => this.pp(!0)), this.fl = !0;
            }, this.ep = !!(null === (e = this._instance.persistence) || void 0 === e ? void 0 : e.props[An]), this.startIfEnabled();
        }
        get kp() {
            return this._instance.config.capture_performance;
        }
        get allowedMetrics() {
            var t, i;
            const e = P(this.kp) ? null === (t = this.kp) || void 0 === t ? void 0 : t.web_vitals_allowed_metrics : void 0;
            return F(e) ? (null === (i = this._instance.persistence) || void 0 === i ? void 0 : i.props.$web_vitals_allowed_metrics) || ic : e;
        }
        get flushToCaptureTimeoutMs() {
            return (P(this.kp) ? this.kp.web_vitals_delayed_flush_ms : void 0) || 5e3;
        }
        get attributionMetrics() {
            const t = P(this.kp) ? this.kp.web_vitals_attribution : void 0;
            return N(t) ? t ? ic : [] : k(t) ? t : ec;
        }
        get useAttribution() {
            return this.attributionMetrics.length > 0;
        }
        get useSoftNavs() {
            const t = P(this.kp) ? this.kp.__preview_web_vitals_soft_navs : void 0;
            return null != t && t;
        }
        get bp() {
            const t = P(this.kp) && M(this.kp.__web_vitals_max_value) ? this.kp.__web_vitals_max_value : tc;
            return t > 0 && 6e4 >= t ? tc : t;
        }
        get isEnabled() {
            const t = null == n ? void 0 : n.protocol;
            if ("http:" !== t && "https:" !== t) return Qh.info("Web Vitals are disabled on non-http/https protocols"), !1;
            const i = P(this.kp) ? this.kp.web_vitals : N(this.kp) ? this.kp : void 0;
            return N(i) ? i : this.ep;
        }
        startIfEnabled() {
            this.isEnabled && !this.fl && (Qh.info("enabled, starting..."), this.Fl(this._p));
        }
        onRemoteConfig(t) {
            if (!t.ok) return;
            const i = t.config;
            if (!("capturePerformance" in i)) return;
            const e = P(i.capturePerformance) && !!i.capturePerformance.web_vitals,
                s = P(i.capturePerformance) ? i.capturePerformance.web_vitals_allowed_metrics : void 0;
            this._instance.persistence && (this._instance.persistence.register({
                [An]: e
            }), this._instance.persistence.register({
                [Dn]: s
            })), this.ep = e, this.startIfEnabled();
        }
        get wp() {
            return this.useSoftNavs ? this.useAttribution ? "web-vitals-with-attribution-soft-navs" : "web-vitals-soft-navs" : this.useAttribution ? "web-vitals-with-attribution" : "web-vitals";
        }
        Fl(t) {
            var i;
            const e = c.__PosthogExtensions__,
                s = this.wp,
                n = null == e ? void 0 : e.postHogWebVitalsCallbacksByFlavor;
            (null == n ? void 0 : n[s]) || "web-vitals" === s && R(n) && (null == e ? void 0 : e.postHogWebVitalsCallbacks) ? t() : null == e || null === (i = e.loadExternalDependency) || void 0 === i || i.call(e, this._instance, s, (i) => {
                i ? Qh.error("failed to load script", i) : t();
            });
        }
        yp(i) {
            const e = i || (null == t ? void 0 : t.location.href);
            if (!e) return void Qh.error("Could not determine current URL");
            const s = this._instance.config.disable_capture_url_hashes ? vi(e) : e,
                n = this._instance.config.custom_personal_data_properties,
                r = this._instance.config.mask_personal_data_properties ? [...Ml, ...n || []] : [];
            return Il(s, r, Nl);
        }
    }
};
var Hv = {
    exceptionObserver: class {
        constructor(i) {
            var e;
            this._p = () => {
                var i;
                if (!t || !this.isEnabled || !(null === (i = c.__PosthogExtensions__) || void 0 === i ? void 0 : i.errorWrappingFunctions)) return;
                const e = c.__PosthogExtensions__.errorWrappingFunctions.wrapOnError,
                    s = c.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection,
                    n = c.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
                try {
                    !this.Sp && this.Fr.capture_unhandled_errors && (this.Sp = e(this.captureException.bind(this))), !this.xp && this.Fr.capture_unhandled_rejections && (this.xp = s(this.captureException.bind(this))), !this.$p && this.Fr.capture_console_errors && (this.$p = n(this.captureException.bind(this)));
                } catch (t) {
                    Kh.error("failed to start", t), this.Cp();
                }
            }, this._instance = i, this.Tp = !!(null === (e = this._instance.persistence) || void 0 === e ? void 0 : e.props[On]), this.kt = new tt(wi(wi({}, function(t = {}) {
                var i, e, s, n;
                return {
                    refillRate: null !== (i = null !== (e = t.exceptionRateLimiterRefillRate) && void 0 !== e ? e : t.__exceptionRateLimiterRefillRate) && void 0 !== i ? i : 1,
                    bucketSize: null !== (s = null !== (n = t.exceptionRateLimiterBucketSize) && void 0 !== n ? n : t.__exceptionRateLimiterBucketSize) && void 0 !== s ? s : 10
                };
            }(this._instance.config.error_tracking)), {}, {
                refillInterval: 1e4,
                A: Kh
            })), this.Fr = this.Ip(), this.startIfEnabledOrStop();
        }
        Ip() {
            const t = this._instance.config.capture_exceptions;
            let i = {
                capture_unhandled_errors: !1,
                capture_unhandled_rejections: !1,
                capture_console_errors: !1
            };
            return P(t) ? i = wi(wi({}, i), t) : (R(t) ? this.Tp : t) && (i = wi(wi({}, i), {}, {
                capture_unhandled_errors: !0,
                capture_unhandled_rejections: !0
            })), i;
        }
        get isEnabled() {
            return this.Fr.capture_console_errors || this.Fr.capture_unhandled_errors || this.Fr.capture_unhandled_rejections;
        }
        startIfEnabledOrStop() {
            this.isEnabled ? (Kh.info("enabled"), this.Cp(), this.Fl(this._p)) : this.Cp();
        }
        Fl(t) {
            var i, e, s;
            (null === (i = c.__PosthogExtensions__) || void 0 === i ? void 0 : i.errorWrappingFunctions) ? t(): null === (e = c.__PosthogExtensions__) || void 0 === e || null === (s = e.loadExternalDependency) || void 0 === s || s.call(e, this._instance, "exception-autocapture", (i) => {
                if (i) return Kh.error("failed to load script", i);
                t();
            });
        }
        Cp() {
            var t, i, e;
            null === (t = this.Sp) || void 0 === t || t.call(this), this.Sp = void 0, null === (i = this.xp) || void 0 === i || i.call(this), this.xp = void 0, null === (e = this.$p) || void 0 === e || e.call(this), this.$p = void 0;
        }
        onRemoteConfig(t) {
            if (!t.ok) return;
            const i = t.config;
            "autocaptureExceptions" in i && (this.Tp = !!i.autocaptureExceptions || !1, this._instance.persistence && this._instance.persistence.register({
                [On]: this.Tp
            }), this.Fr = this.Ip(), this.startIfEnabledOrStop());
        }
        onConfigChange() {
            this.Fr = this.Ip();
        }
        captureException(t) {
            try {
                var i, e, s;
                const n = null !== (i = null == t || null === (e = t.$exception_list) || void 0 === e || null === (e = e[0]) || void 0 === e ? void 0 : e.type) && void 0 !== i ? i : "Exception";
                if (this.kt.consumeRateLimit(n)) return void Kh.info("Skipping exception capture because of client rate limiting.", {
                    exception: n
                });
                null === (s = this._instance.exceptions) || void 0 === s || s.sendExceptionEvent(t);
            } catch (t) {}
        }
    },
    exceptions: class {
        constructor(t) {
            var i, e;
            this.Ep = [], this.Mp = new Pi([
                new Yi(),
                new re(),
                new Xi(),
                new Ji(),
                new se(),
                new ee(),
                new Qi(),
                new ne()
            ], function(t, ...i) {
                return (e, s = 0) => {
                    const n = [],
                        r = e.split("\n"),
                        o = Math.min(r.length, s + 1e3),
                        l = [];
                    for (let e = s; o > e; e++) {
                        const s = r[e];
                        if (s.length > 1024) continue;
                        const o = Bi.test(s) ? s.replace(Bi, "$1") : s;
                        if (!o.match(/\S*Error: /)) {
                            for (const e of i) {
                                const i = e(o, t);
                                if (i) {
                                    n.push(i);
                                    const t = Hi(n);
                                    if (t) {
                                        for (let i = l.length - 1; i >= 0; i--) {
                                            const e = l[i];
                                            if (t.start >= e.start + e.length) break;
                                            l.pop();
                                        }
                                        l.push(t);
                                    }
                                    break;
                                }
                            }
                            if (Gi(n, l) >= 50) break;
                        }
                    }
                    const a = [...l].sort((t, i) => i.start - t.start),
                        u = a[a.length - 1];
                    if (u) {
                        const t = Wi(n, u);
                        n.splice(u.start - t, t);
                        for (const i of a) i.start -= t;
                    }
                    for (const t of a) qi(n, t);
                    return l.some((t) => 0 === t.start && n.length === t.length) && function(t) {
                            const i = t.map((t) => `${t.function}|${t.filename}|${t.lineno}|${t.colno}|${t.module}`);
                            let e = 0;
                            for (let t = 1; i.length > t; t++) Ki(i, t, e) && (e = t);
                            t.push(...t.splice(0, e));
                        }(n),
                        function(t) {
                            if (!t.length) return [];
                            const i = Array.from(t);
                            return i.reverse(), i.slice(0, 50).map((t) => {
                                return wi(wi({}, t), {}, {
                                    filename: t.filename || (e = i, e[e.length - 1] || {}).filename,
                                    function: t.function || "?"
                                });
                                var e;
                            });
                        }(n);
                };
            }("web:javascript", Ni, Ui)), this._instance = t, this.Ep = null !== (i = null === (e = this._instance.persistence) || void 0 === e ? void 0 : e.get_property("$error_tracking_suppression_rules")) && void 0 !== i ? i : [], this.Ap = he(this.Rp()), this.Pp = new ce(this.Ap);
        }
        onConfigChange() {
            this.Ap = he(this.Rp()), this.Pp.setConfig(this.Ap);
        }
        onRemoteConfig(t) {
            var i, e, s;
            if (!t.ok) return;
            const n = t.config;
            if (!("errorTracking" in n)) return;
            const r = null !== (i = null === (e = n.errorTracking) || void 0 === e ? void 0 : e.suppressionRules) && void 0 !== i ? i : [],
                o = null === (s = n.errorTracking) || void 0 === s ? void 0 : s.captureExtensionExceptions;
            this.Ep = r, this._instance.persistence && this._instance.persistence.register({
                [Rn]: this.Ep,
                [Cn]: o
            });
        }
        get Op() {
            var t;
            const i = !!this._instance.get_property(Cn),
                e = this._instance.config.error_tracking.captureExtensionExceptions;
            return null !== (t = null != e ? e : i) && void 0 !== t && t;
        }
        buildProperties(t, i) {
            return this.Mp.buildFromUnknown(t, {
                syntheticException: null == i ? void 0 : i.syntheticException,
                mechanism: {
                    handled: null == i ? void 0 : i.handled
                }
            });
        }
        addExceptionStep(t, i) {
            if (this.Ap.enabled) try {
                if (!C(t) || 0 === t.trim().length) return void Uc.warn("Ignoring exception step because message must be a non-empty string");
                const {
                    sanitizedProperties: e,
                    droppedKeys: s
                } = function(t) {
                    if (!t) return {
                        sanitizedProperties: {},
                        droppedKeys: []
                    };
                    const i = [];
                    return {
                        sanitizedProperties: Object.keys(t).reduce((e, s) => ae.has(s) ? (i.push(s), e) : (e[s] = t[s], e), {}),
                        droppedKeys: i
                    };
                }(this.Fp(i));
                s.length > 0 && Uc.warn("Ignoring reserved exception step fields", {
                    droppedKeys: s
                }), this.Pp.add(wi({
                    [oe]: t,
                    [le]: new Date().toISOString()
                }, e));
            } catch (t) {
                Uc.error("Failed to add exception step. Ignoring breadcrumb.", t);
            }
        }
        sendExceptionEvent(t) {
            try {
                const i = t.$exception_list;
                if (this.Dp(i)) {
                    if (this.Lp(i)) return this.Np("Exception dropped: matched a suppression rule"), void Uc.info("Skipping exception capture because a suppression rule matched");
                    if (!this.Op && this.jp(i)) return this.Np("Exception dropped: thrown by a browser extension"), void Uc.info("Skipping exception capture because it was thrown by an extension");
                    if (!this.Op && this.qp(i)) return this.Np("Exception dropped: thrown by an injected browser script"), void Uc.info("Skipping exception capture because it was thrown by an injected browser script");
                    if (!this._instance.config.error_tracking.__capturePostHogExceptions && this.Bp(i)) return this.Np("Exception dropped: thrown by the PostHog SDK"), void Uc.info("Skipping exception capture because it was thrown by the PostHog SDK");
                }
                const e = this.Ap.enabled && F(t.$exception_steps) ? this.zp(t) : t,
                    s = function() {
                        if ("u" > typeof process) {
                            var t;
                            const i = null === (t = {}.POSTHOG_RELEASE_ID) || void 0 === t ? void 0 : t.trim();
                            if (i) return i;
                        }
                        const i = globalThis._posthogReleaseId;
                        return "string" == typeof i && i.length > 0 ? i : void 0;
                    }();
                s && (e.$release_id = s);
                try {
                    const t = this._instance.capture("$exception", e, {
                        _noTruncate: !0,
                        _batchKey: "exceptionEvent",
                        fd: !0
                    });
                    return t && this.Pp.clear(), t;
                } catch (t) {
                    return jc(t) || Uc.error("Failed to capture exception event. Dropping this exception.", t), void this.Pp.clear();
                }
            } catch (t) {
                return void(jc(t) || Uc.error("Failed to process exception event. Ignoring this exception.", t));
            }
        }
        zp(t) {
            try {
                const i = this.Pp.getAttachable();
                return 0 === i.length ? t : wi(wi({}, t), {}, {
                    $exception_steps: i
                });
            } catch (i) {
                return Uc.error("Failed to read buffered exception steps. Capturing exception without steps.", i), t;
            }
        }
        Np(t) {
            this.Ap.enabled && this.Pp.add({
                [oe]: t,
                [le]: new Date().toISOString()
            });
        }
        Fp(t) {
            return P(t) ? wi({}, t) : {};
        }
        Rp() {
            var t, i;
            return null !== (t = null === (i = this._instance.config.error_tracking) || void 0 === i ? void 0 : i.exception_steps) && void 0 !== t ? t : {};
        }
        Lp(t) {
            if (0 === t.length) return !1;
            try {
                const i = t.reduce((t, {
                    type: i,
                    value: e
                }) => (C(i) && i.length > 0 && t.$exception_types.push(i), C(e) && e.length > 0 && t.$exception_values.push(e), t), {
                    $exception_types: [],
                    $exception_values: []
                });
                return this.Ep.some((t) => {
                    const e = t.values.map((t) => {
                        const e = Gu[t.operator],
                            s = i[t.key];
                        if (!e || !s) return !1;
                        const n = k(t.value) ? t.value : [t.value];
                        return n.length > 0 && e(n, s);
                    });
                    return "OR" === t.type ? e.some(Boolean) : e.every(Boolean);
                });
            } catch (t) {
                return Uc.warn("Failed to evaluate suppression rules. Capturing the exception.", t), !1;
            }
        }
        jp(t) {
            const i = t.flatMap((t) => {
                    var i, e;
                    return null !== (i = null === (e = t.stacktrace) || void 0 === e ? void 0 : e.frames) && void 0 !== i ? i : [];
                }),
                e = i.filter(({
                    filename: t
                }) => !!t && Hc.some((i) => t.startsWith(i)));
            return 0 !== e.length && (!e.every(({
                filename: t
            }) => !!t && t.startsWith(Bc)) || t.some(({
                type: t,
                value: i
            }) => "NoResponse" === t || C(i) && zc.some(({
                value: t,
                exact: e
            }) => e ? i === t : i.includes(t))) && !i.some(({
                in_app: t,
                filename: i
            }) => t && !(null == i ? void 0 : i.startsWith(Bc))));
        }
        qp(t) {
            return t.some(({
                value: t
            }) => C(t) && qc.some((i) => t.includes(i)));
        }
        Bp(t) {
            if (t.length > 0) {
                var i, e, s, n;
                const r = null !== (i = null === (e = t[0].stacktrace) || void 0 === e ? void 0 : e.frames) && void 0 !== i ? i : [],
                    o = r[r.length - 1];
                return null !== (s = null == o || null === (n = o.filename) || void 0 === n ? void 0 : n.includes("posthog.com/static")) && void 0 !== s && s;
            }
            return !1;
        }
        Dp(t) {
            return !F(t) && k(t);
        }
    }
};
var qv = wi({
    productTours: class {
        get Tc() {
            return this._instance.persistence;
        }
        constructor(t) {
            this.Hp = null, this.Up = null, this._instance = t;
        }
        initialize() {
            this.loadIfEnabled();
        }
        onRemoteConfig(t) {
            if (!t.ok) return;
            const i = t.config;
            if ("productTours" in i) {
                var e, s;
                if (this.Tc && this.Tc.register({
                        [Fn]: !!i.productTours
                    }), !cc(this._instance)) return !this.Hp && F(null === (e = this.Tc) || void 0 === e ? void 0 : e.props.ph_product_tours) || hc.info("product tours disabled; stopping and clearing cached tours"), null === (s = this.Hp) || void 0 === s || s.stop(), this.Hp = null, void this.clearCache();
                this.loadIfEnabled();
            }
        }
        loadIfEnabled() {
            !this.Hp && cc(this._instance) && this.Fl(() => this.Wp());
        }
        Fl(t) {
            var i, e, s;
            (null === (i = c.__PosthogExtensions__) || void 0 === i ? void 0 : i.generateProductTours) ? t(): null === (e = c.__PosthogExtensions__) || void 0 === e || null === (s = e.loadExternalDependency) || void 0 === s || s.call(e, this._instance, "product-tours", (i) => {
                i ? hc.error("Could not load product tours script", i) : t();
            });
        }
        Wp() {
            var t;
            !this.Hp && (null === (t = c.__PosthogExtensions__) || void 0 === t ? void 0 : t.generateProductTours) && (this.Hp = c.__PosthogExtensions__.generateProductTours(this._instance, !0));
        }
        getProductTours(t, i = !1) {
            if (k(this.Up) && !i) return void t(this.Up, {
                isLoaded: !0
            });
            const e = this.Tc;
            if (e) {
                const s = e.props[Zn];
                if (k(s) && !i) return this.Up = s, void t(s, {
                    isLoaded: !0
                });
            }
            this._instance._send_request({
                url: this._instance.requestRouter.endpointFor("api", `/api/product_tours/?token=${this._instance.config.token}`),
                method: "GET",
                timestampMode: "query",
                callback: (i) => {
                    if (!cc(this._instance)) return void t([], {
                        isLoaded: !0
                    });
                    const s = i.statusCode;
                    if (200 !== s || !i.json) {
                        const e = `Product Tours API could not be loaded, status: ${s}`;
                        return 0 === s ? i.error || hc.warn(e) : hc.error(e), void t([], {
                            isLoaded: !1,
                            error: e
                        });
                    }
                    const n = k(i.json.product_tours) ? i.json.product_tours : [];
                    this.Up = n, e && e.register({
                        [Zn]: n
                    }), t(n, {
                        isLoaded: !0
                    });
                }
            });
        }
        getActiveProductTours(t) {
            F(this.Hp) ? t([], {
                isLoaded: !1,
                error: "Product tours not loaded"
            }) : this.Hp.getActiveProductTours(t);
        }
        showProductTour(t) {
            var i;
            null === (i = this.Hp) || void 0 === i || i.showTourById(t);
        }
        previewTour(t) {
            this.Hp ? this.Hp.previewTour(t) : this.Fl(() => {
                var i;
                this.Wp(), null === (i = this.Hp) || void 0 === i || i.previewTour(t);
            });
        }
        dismissProductTour() {
            var t;
            null === (t = this.Hp) || void 0 === t || t.dismissTour("user_clicked_skip");
        }
        nextStep() {
            var t;
            null === (t = this.Hp) || void 0 === t || t.nextStep();
        }
        previousStep() {
            var t;
            null === (t = this.Hp) || void 0 === t || t.previousStep();
        }
        clearCache() {
            var t;
            this.Up = null, null === (t = this.Tc) || void 0 === t || t.unregister("ph_product_tours");
        }
        resetTour(t) {
            var i;
            null === (i = this.Hp) || void 0 === i || i.resetTour(t);
        }
        resetAllTours() {
            var t;
            null === (t = this.Hp) || void 0 === t || t.resetAllTours();
        }
        cancelPendingTour(t) {
            var i;
            null === (i = this.Hp) || void 0 === i || i.cancelPendingTour(t);
        }
    }
}, Uv);
var Wv = {
    siteApps: class {
        constructor(t) {
            this._instance = t, this.Vp = 0, this.Gp = [], this.apps = {};
        }
        get isEnabled() {
            return !!this._instance.config.opt_in_site_apps;
        }
        Qp(t, i) {
            if (!i) return;
            const e = this.globalsForEvent(i);
            this.Gp.push(e), this.Gp.length > 1e3 && (this.Gp = this.Gp.slice(10));
        }
        get siteAppLoaders() {
            var t;
            return null === (t = c._POSTHOG_REMOTE_CONFIG) || void 0 === t || null === (t = t[this._instance.config.token]) || void 0 === t ? void 0 : t.siteApps;
        }
        initialize() {
            if (this.isEnabled) {
                const t = this._instance._addCaptureHook(this.Qp.bind(this));
                this.Jp = () => {
                    t(), this.Gp = [], this.Jp = void 0;
                };
            }
        }
        globalsForEvent(t) {
            var i, e, s, n, r, o, l;
            if (!t) throw new Error("Event payload is required");
            const a = {},
                u = this._instance.get_property("$groups") || [],
                h = this._instance.get_property("$stored_group_properties") || {};
            for (const [t, i] of Object.entries(h)) a[t] = {
                id: u[t],
                type: t,
                properties: i
            };
            const {
                $set_once: c,
                $set: d
            } = t;
            return {
                event: wi(wi({}, Ee(t, dc)), {}, {
                    properties: wi(wi(wi({}, t.properties), d ? {
                        $set: wi(wi({}, null !== (i = null === (e = t.properties) || void 0 === e ? void 0 : e.$set) && void 0 !== i ? i : {}), d)
                    } : {}), c ? {
                        $set_once: wi(wi({}, null !== (s = null === (n = t.properties) || void 0 === n ? void 0 : n.$set_once) && void 0 !== s ? s : {}), c)
                    } : {}),
                    elements_chain: null !== (r = null === (o = t.properties) || void 0 === o ? void 0 : o.$elements_chain) && void 0 !== r ? r : "",
                    distinct_id: null === (l = t.properties) || void 0 === l ? void 0 : l.distinct_id
                }),
                person: {
                    properties: this._instance.get_property("$stored_person_properties")
                },
                groups: a
            };
        }
        Zp(t) {
            var i;
            const e = null === (i = t.tagName) || void 0 === i ? void 0 : i.toLowerCase();
            if ("style" === e && this._instance.config.prepare_external_dependency_stylesheet) {
                return this._instance.config.prepare_external_dependency_stylesheet(t) || (vc.error("prepare_external_dependency_stylesheet returned null"), null);
            }
            if ("script" === e && this._instance.config.prepare_external_dependency_script) {
                return this._instance.config.prepare_external_dependency_script(t) || (vc.error("prepare_external_dependency_script returned null"), null);
            }
            return t;
        }
        Kp() {
            var t, i, e, n, r, o, l, a;
            if (!this._instance.config.prepare_external_dependency_stylesheet && !this._instance.config.prepare_external_dependency_script) return () => {};
            const u = null == s ? void 0 : s.defaultView,
                h = null == u || null === (t = u.Node) || void 0 === t ? void 0 : t.prototype;
            if (!u || !h) return () => {};
            if (this.Vp++, this.Yp) return this.Xp();
            const c = [],
                d = this,
                v = new WeakSet(),
                f = (t, i, e) => {
                    if (!(null == t ? void 0 : t[i])) return;
                    const s = t[i];
                    t[i] = e(s), c.push(() => {
                        t[i] = s;
                    });
                },
                p = (t) => {
                    if (v.has(t)) return t;
                    const i = d.Zp(t);
                    return i && v.add(i), i;
                },
                g = (t) => t.map((t) => "string" == typeof t ? t : p(t)).filter((t) => !I(t));
            return f(h, "appendChild", (t) => function(i) {
                const e = p(i);
                return e ? t.call(this, e) : i;
            }), f(h, "insertBefore", (t) => function(i, e) {
                const s = p(i);
                return s ? t.call(this, s, e) : i;
            }), f(h, "replaceChild", (t) => function(i, e) {
                const s = p(i);
                return s ? t.call(this, s, e) : e;
            }), [
                null === (i = u.Element) || void 0 === i ? void 0 : i.prototype,
                null === (e = u.Document) || void 0 === e ? void 0 : e.prototype,
                null === (n = u.DocumentFragment) || void 0 === n ? void 0 : n.prototype
            ].forEach((t) => {
                f(t, "append", (t) => function(...i) {
                    return t.apply(this, g(i));
                }), f(t, "prepend", (t) => function(...i) {
                    return t.apply(this, g(i));
                });
            }), [
                null === (r = u.Element) || void 0 === r ? void 0 : r.prototype,
                null === (o = u.CharacterData) || void 0 === o ? void 0 : o.prototype,
                null === (l = u.DocumentType) || void 0 === l ? void 0 : l.prototype
            ].forEach((t) => {
                f(t, "before", (t) => function(...i) {
                    return t.apply(this, g(i));
                }), f(t, "after", (t) => function(...i) {
                    return t.apply(this, g(i));
                }), f(t, "replaceWith", (t) => function(...i) {
                    const e = g(i);
                    return i.length && !e.length ? void 0 : t.apply(this, e);
                });
            }), f(null === (a = u.Element) || void 0 === a ? void 0 : a.prototype, "insertAdjacentElement", (t) => function(i, e) {
                const s = p(e);
                return s ? t.call(this, i, s) : null;
            }), this.Yp = () => {
                c.forEach((t) => t()), this.Yp = void 0;
            }, this.Xp();
        }
        Xp() {
            let t = !1;
            return () => {
                var i;
                t || (t = !0, this.Vp--, 0 === this.Vp && (null === (i = this.Yp) || void 0 === i || i.call(this)));
            };
        }
        tg(t, i = !0) {
            const e = this.Kp();
            try {
                const s = t(e);
                return i && e(), s;
            } catch (t) {
                throw e(), t;
            }
        }
        setupSiteApp(t) {
            const i = this.apps[t.id],
                e = () => {
                    var e;
                    !i.errored && this.Gp.length && (vc.info(`Processing ${this.Gp.length} events for site app with id ${t.id}`), this.Gp.forEach((t) => this.tg(() => {
                        var e;
                        return null === (e = i.processEvent) || void 0 === e ? void 0 : e.call(i, t);
                    })), i.processedBuffer = !0), Object.values(this.apps).every((t) => t.processedBuffer || t.errored) && (null === (e = this.Jp) || void 0 === e || e.call(this));
                };
            let s = !1;
            const n = (n) => {
                i.errored = !n, i.loaded = !0, vc.info(`Site app with id ${t.id} ${n ? "loaded" : "errored"}`), s && e();
            };
            try {
                const {
                    processEvent: e
                } = this.tg((i) => t.init({
                    posthog: this._instance,
                    callback(t) {
                        i(), n(t);
                    }
                }), !1);
                e && (i.processEvent = e), s = !0;
            } catch (i) {
                vc.error(fc + t.id, i), n(!1);
            }
            if (s && i.loaded) try {
                e();
            } catch (e) {
                vc.error(`Error while processing buffered events PostHog app with config id ${t.id}`, e), i.errored = !0;
            }
        }
        eg() {
            const t = this.siteAppLoaders || [];
            for (const i of t) this.apps[i.id] = {
                id: i.id,
                loaded: !1,
                errored: !1,
                processedBuffer: !1
            };
            for (const i of t) this.setupSiteApp(i);
        }
        ig(t) {
            if (0 === Object.keys(this.apps).length) return;
            const i = this.globalsForEvent(t);
            for (const e of Object.values(this.apps)) try {
                this.tg(() => {
                    var t;
                    return null === (t = e.processEvent) || void 0 === t ? void 0 : t.call(e, i);
                });
            } catch (i) {
                vc.error(`Error while processing event ${t.event} for site app ${e.id}`, i);
            }
        }
        onRemoteConfig(t) {
            var i, e, s;
            if (null === (i = this.siteAppLoaders) || void 0 === i ? void 0 : i.length) return this.isEnabled ? (this.eg(), void this._instance.on("eventCaptured", (t) => this.ig(t))) : void vc.error("PostHog site apps are disabled. Enable the \"opt_in_site_apps\" config to proceed.");
            if (null === (e = this.Jp) || void 0 === e || e.call(this), !t.ok) return;
            const n = t.config;
            if (null === (s = n.siteApps) || void 0 === s ? void 0 : s.length)
                if (this.isEnabled)
                    for (const {
                            id: t,
                            url: i
                        } of n.siteApps) {
                        var r, o;
                        c[`__$$ph_site_app_${t}`] = this._instance, null === (r = c.__PosthogExtensions__) || void 0 === r || null === (o = r.loadSiteApp) || void 0 === o || o.call(r, this._instance, i, (i) => {
                            if (i) return vc.error(fc + t, i);
                        });
                    }
            else vc.error("PostHog site apps are disabled. Enable the \"opt_in_site_apps\" config to proceed.");
        }
    }
};
var Vv = {
    tracingHeaders: class {
        constructor(t) {
            this._instance = t, this.ng = void 0, this.sg = void 0, this.rg = void 0, this._p = () => {
                const t = this.og();
                var i, e;
                t ? (R(this.ng) && (this.ng = null === (i = c.__PosthogExtensions__) || void 0 === i || null === (i = i.tracingHeadersPatchFns) || void 0 === i ? void 0 : i._patchXHR(t, () => this._instance.get_distinct_id(), this._instance.sessionManager)), R(this.sg) && (this.sg = null === (e = c.__PosthogExtensions__) || void 0 === e || null === (e = e.tracingHeadersPatchFns) || void 0 === e ? void 0 : e._patchFetch(t, () => this._instance.get_distinct_id(), this._instance.sessionManager))) : this.Cp();
            };
        }
        initialize() {
            this.startIfEnabledOrStop();
        }
        Fl(t) {
            var i, e, s;
            (null === (i = c.__PosthogExtensions__) || void 0 === i ? void 0 : i.tracingHeadersPatchFns) ? t(): null === (e = c.__PosthogExtensions__) || void 0 === e || null === (s = e.loadExternalDependency) || void 0 === s || s.call(e, this._instance, "tracing-headers", (i) => {
                if (i) return Zh.error("failed to load script", i);
                t();
            });
        }
        ag() {
            var t, i;
            return null !== (t = null !== (i = this._instance.config.tracing_headers) && void 0 !== i ? i : this._instance.config.addTracingHeaders) && void 0 !== t ? t : this._instance.config.__add_tracing_headers;
        }
        og() {
            const t = this.ag();
            return k(t) ? (k(this.rg) ? this.rg.splice(0, this.rg.length, ...t) : this.rg = [...t], t.length > 0 ? this.rg : void 0) : (k(this.rg) && this.rg.splice(0), this.rg = t || void 0, this.rg);
        }
        Cp() {
            var t, i;
            null === (t = this.ng) || void 0 === t || t.call(this), null === (i = this.sg) || void 0 === i || i.call(this), this.ng = void 0, this.sg = void 0;
        }
        startIfEnabledOrStop() {
            this.og() ? this.Fl(this._p) : this.Cp();
        }
    }
};
var Gv = wi({
    surveys: class extends $c {
        constructor(t) {
            super(new Sc(t));
        }
    }
}, Uv);
var Kv = {
    toolbar: class {
        constructor(t) {
            this.instance = t;
        }
        lg(t) {
            c.ph_toolbar_state = t;
        }
        ug() {
            var t;
            return null !== (t = c.ph_toolbar_state) && void 0 !== t ? t : 0;
        }
        initialize() {
            return this.maybeLoadToolbar();
        }
        maybeLoadToolbar(i = void 0, e = void 0, n = void 0) {
            var r, o;
            if (qr(this.instance.config)) return !1;
            if (!t || !s) return !1;
            i = null !== (r = i) && void 0 !== r ? r : t.location, n = null !== (o = n) && void 0 !== o ? o : t.history;
            try {
                if (!e) {
                    try {
                        t.localStorage.setItem("test", "test"), t.localStorage.removeItem("test");
                    } catch (t) {
                        return !1;
                    }
                    e = null == t ? void 0 : t.localStorage;
                }
                const s = xc || Fl(i.hash, "__posthog") || Fl(i.hash, "state");
                let r;
                const o = s ? fi(() => JSON.parse(atob(decodeURIComponent(s)))) || fi(() => JSON.parse(decodeURIComponent(s))) : null;
                return o && "ph_authorize" === o.action ? (r = o, r.source = "url", r && Object.keys(r).length > 0 && (o.desiredHash ? i.hash = o.desiredHash : n ? n.replaceState(n.state, "", i.pathname + i.search) : i.hash = "")) : (r = JSON.parse(e.getItem(Ec) || "{}"), r.source = "localstorage", delete r.userIntent), !(!r.token || this.instance.config.token !== r.token || (this.loadToolbar(r), 0));
            } catch (t) {
                return !1;
            }
        }
        cg(t) {
            const i = c.ph_load_toolbar || c.ph_load_editor;
            !F(i) && T(i) ? i(t, this.instance) : kc.warn("No toolbar load function found");
        }
        loadToolbar(i) {
            const e = !!(null == s ? void 0 : s.getElementById("__POSTHOG_TOOLBAR__"));
            if (!t || e) return !1;
            const n = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics,
                r = wi(wi({
                    token: this.instance.config.token
                }, i), {}, {
                    apiURL: this.instance.requestRouter.endpointFor("ui")
                }, n ? {
                    instrument: !1
                } : {});
            if (t.localStorage.setItem(Ec, JSON.stringify(wi(wi({}, r), {}, {
                    source: void 0
                }))), 2 === this.ug()) this.cg(r);
            else if (0 === this.ug()) {
                var o, l;
                this.lg(1), null === (o = c.__PosthogExtensions__) || void 0 === o || null === (l = o.loadExternalDependency) || void 0 === l || l.call(o, this.instance, "toolbar", (t) => {
                    if (t) return kc.error("[Toolbar] Failed to load", t), void this.lg(0);
                    this.lg(2), this.cg(r);
                }), Hr(t, "turbolinks:load", () => {
                    this.lg(0), this.loadToolbar(r);
                });
            }
            return !0;
        }
        hg(t) {
            return this.loadToolbar(t);
        }
        maybeLoadEditor(t = void 0, i = void 0, e = void 0) {
            return this.maybeLoadToolbar(t, i, e);
        }
    }
};
var Yv = wi({
    experiments: class i {
        get Fr() {
            return this._instance.config;
        }
        constructor(t) {
            this._instance = t, this.getWebExperimentsAndEvaluateDisplayLogic = (t = !1) => {
                this.getWebExperiments((t) => {
                    i.dg("retrieved web experiments from the server"), this.vg = new Map(), t.forEach((t) => {
                        if (t.feature_flag_key) {
                            var e;
                            this.vg && (i.dg("setting flag key ", t.feature_flag_key, " to web experiment ", t), null === (e = this.vg) || void 0 === e || e.set(t.feature_flag_key, t));
                            const s = this._instance.getFeatureFlag(t.feature_flag_key);
                            C(s) && t.variants[s] && this.fg(t, s);
                        } else if (t.variants)
                            for (const e in t.variants) {
                                const s = t.variants[e];
                                i.pg(s, this._instance) && this.gg(t.name, e, s.transforms);
                            }
                    });
                }, t);
            }, this._instance.onFeatureFlags((t) => {
                this.onFeatureFlags(t);
            });
        }
        initialize() {}
        onFeatureFlags(t) {
            if (this._is_bot()) i.dg(nv);
            else if (!this.Fr.disable_web_experiments) {
                if (F(this.vg)) return this.vg = new Map(), this.loadIfEnabled(), void this.previewWebExperiment();
                i.dg("applying feature flags", t), t.forEach((t) => {
                    var i;
                    if (this.vg && (null === (i = this.vg) || void 0 === i ? void 0 : i.has(t))) {
                        var e;
                        const i = this._instance.getFeatureFlag(t),
                            s = null === (e = this.vg) || void 0 === e ? void 0 : e.get(t);
                        i && (null == s ? void 0 : s.variants[i]) && this.fg(s, i);
                    }
                });
            }
        }
        previewWebExperiment() {
            const t = i.getWindowLocation();
            if (null == t ? void 0 : t.search) {
                const e = Al(null == t ? void 0 : t.search, "__experiment_id"),
                    s = Al(null == t ? void 0 : t.search, "__experiment_variant");
                e && s && (i.dg(`previewing web experiments ${e} && ${s}`), this.getWebExperiments((t) => {
                    this.mg(parseInt(e), s, t);
                }, !1, !0));
            }
        }
        loadIfEnabled() {
            this.Fr.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic();
        }
        getWebExperiments(t, i, e) {
            if (this.Fr.disable_web_experiments && !e) return t([]);
            const s = this._instance.get_property("$web_experiments");
            if (s && !i) return t(s);
            this._instance._send_request({
                url: this._instance.requestRouter.endpointFor("api", `/api/web_experiments/?token=${this.Fr.token}`),
                method: "GET",
                timestampMode: "query",
                callback: (i) => t(200 === i.statusCode && i.json && i.json.experiments || [])
            });
        }
        mg(t, e, s) {
            const n = s.filter((i) => i.id === t);
            n && n.length > 0 && (i.dg(`Previewing web experiment [${n[0].name}] with variant [${e}]`), this.gg(n[0].name, e, n[0].variants[e].transforms));
        }
        fg(t, e) {
            const s = t.variants[e];
            i.yg(s, this._instance) ? this.gg(t.name, e, s.transforms) : i.dg(`skipping variant ${e} of experiment ${t.name} because this page does not match its url conditions`);
        }
        static pg(t, e) {
            return !F(t.conditions) && i.yg(t, e) && i.bg(t);
        }
        static yg(t, e) {
            var s;
            if (F(t.conditions) || F(null === (s = t.conditions) || void 0 === s ? void 0 : s.url)) return !0;
            const n = i.getWindowLocation();
            if (n) {
                var r, o, l;
                const i = $o(e, n.href);
                return !(null === (r = t.conditions) || void 0 === r ? void 0 : r.url) || lv[null !== (o = null === (l = t.conditions) || void 0 === l ? void 0 : l.urlMatchType) && void 0 !== o ? o : "icontains"](t.conditions.url, i);
            }
            return !1;
        }
        static getWindowLocation() {
            return null == t ? void 0 : t.location;
        }
        static bg(t) {
            var i;
            if (F(t.conditions) || F(null === (i = t.conditions) || void 0 === i ? void 0 : i.utm)) return !0;
            const e = jl();
            if (e.utm_source) {
                var s, n, r, o, l, a, u, h;
                const i = !(null === (s = t.conditions) || void 0 === s || null === (s = s.utm) || void 0 === s ? void 0 : s.utm_campaign) || (null === (n = t.conditions) || void 0 === n || null === (n = n.utm) || void 0 === n ? void 0 : n.utm_campaign) == e.utm_campaign,
                    c = !(null === (r = t.conditions) || void 0 === r || null === (r = r.utm) || void 0 === r ? void 0 : r.utm_source) || (null === (o = t.conditions) || void 0 === o || null === (o = o.utm) || void 0 === o ? void 0 : o.utm_source) == e.utm_source,
                    d = !(null === (l = t.conditions) || void 0 === l || null === (l = l.utm) || void 0 === l ? void 0 : l.utm_medium) || (null === (a = t.conditions) || void 0 === a || null === (a = a.utm) || void 0 === a ? void 0 : a.utm_medium) == e.utm_medium,
                    v = !(null === (u = t.conditions) || void 0 === u || null === (u = u.utm) || void 0 === u ? void 0 : u.utm_term) || (null === (h = t.conditions) || void 0 === h || null === (h = h.utm) || void 0 === h ? void 0 : h.utm_term) == e.utm_term;
                return i && d && v && c;
            }
            return !1;
        }
        static dg(t, ...i) {
            js.info(`[WebExperiments] ${t}`, i);
        }
        static _g(t, ...i) {
            js.warn(`[WebExperiments] ${t}`, i);
        }
        static wg(t) {
            ("http://www.w3.org/1999/xhtml" === t.namespaceURI && "template" === t.localName ? t.content : t).querySelectorAll("a[target], template").forEach((t) => {
                var e;
                if ("template" === t.localName) return void("http://www.w3.org/1999/xhtml" === t.namespaceURI && i.wg(t));
                if ("http://www.w3.org/1999/xhtml" !== t.namespaceURI || "_blank" !== (null === (e = t.getAttribute("target")) || void 0 === e ? void 0 : e.toLowerCase())) return void t.removeAttribute("target");
                const s = (t.getAttribute("rel") || "").split(/\s+/).filter((t) => t && !/^(opener|noopener)$/i.test(t));
                s.push("noopener"), t.setAttribute("rel", s.join(" "));
            });
        }
        gg(t, e, s) {
            this._is_bot() ? i.dg(nv) : "control" !== e ? s.forEach((s) => {
                if (s.selector) {
                    var n;
                    i.dg(`applying transform of variant ${e} for experiment ${t} `, s);
                    const r = null === (n = document) || void 0 === n ? void 0 : n.querySelectorAll(s.selector);
                    if (!(null == r ? void 0 : r.length)) return void i._g(`no element on this page matches selector ${s.selector} of variant ${e} for experiment ${t}`);
                    const o = new Map();
                    null == r || r.forEach((t) => {
                        if ("script" === t.localName.toLowerCase()) return;
                        const e = t;
                        if (s.html) {
                            var n;
                            const l = "http://www.w3.org/1998/Math/MathML" === t.namespaceURI && "annotation-xml" === t.localName && (null === (n = t.getAttribute("encoding")) || void 0 === n ? void 0 : n.toLowerCase()) || "",
                                a = JSON.stringify([
                                    t.namespaceURI,
                                    t.localName,
                                    l
                                ]);
                            let u = o.get(a);
                            if (F(u)) {
                                var r;
                                const e = null !== (r = ov) && void 0 !== r ? r : ov = sv(),
                                    n = t.ownerDocument.implementation.createHTMLDocument(""),
                                    h = n.createElementNS(t.namespaceURI, t.localName);
                                l && h.setAttribute("encoding", l);
                                const c = n.createRange();
                                c.selectNodeContents(h);
                                const d = "http://www.w3.org/2000/svg" === t.namespaceURI && /^(foreignObject|desc|title)$/.test(t.localName) || /^(text\/html|application\/xhtml\+xml)$/.test(l) ? "http://www.w3.org/1999/xhtml" : t.namespaceURI,
                                    v = c.createContextualFragment(s.html);
                                "http://www.w3.org/1998/Math/MathML" === t.namespaceURI && /^(mi|mo|mn|ms|mtext)$/.test(t.localName) ? (h.appendChild(v), e.sanitize(h, wi(wi({}, rv), {}, {
                                    NAMESPACE: d || void 0,
                                    IN_PLACE: !0
                                }))) : ("http://www.w3.org/1999/xhtml" === h.namespaceURI && "template" === h.localName ? h.content : h).appendChild(e.sanitize(v, wi(wi({}, rv), {}, {
                                    NAMESPACE: d || void 0,
                                    RETURN_DOM_FRAGMENT: !0
                                }))), i.wg(h), u = h.innerHTML, o.set(a, u);
                            }
                            e.innerHTML = u;
                        }
                        s.css && e.setAttribute("style", s.css);
                    });
                }
            }) : i.dg("Control variants leave the page unmodified.");
        }
        _is_bot() {
            return e && this._instance ? Bu(e, this.Fr.custom_blocked_useragents) : void 0;
        }
    }
}, Uv);
var Jv = {
    conversations: class {
        constructor(t) {
            this._instance = t, this.kg = void 0, this._conversationsManager = null, this.Sg = !1, this.ie = null, this.xg = !1, this.$g = 0, this.Cg = null, this.Tg = null;
        }
        initialize() {
            this.loadIfEnabled();
        }
        onRemoteConfig(t) {
            if (this._instance.config.disable_conversations) return void(this.Cg = null);
            if (this.Ig = t.ok, !t.ok) return;
            const i = t.config.conversations;
            F(i) ? this.Cg = null : (N(i) ? this.kg = i : (this.kg = i.enabled, this.ie = i), this.kg || (this.Cg = null), this.loadIfEnabled());
        }
        reset() {
            var t;
            null === (t = this._conversationsManager) || void 0 === t || t.reset(), this._conversationsManager = null, this.$g++, this.kg = void 0, this.ie = null, this.Ig = void 0, this.xg = !1, this.Cg = null;
        }
        loadIfEnabled() {
            if (this._conversationsManager) return;
            if (this.Sg) return;
            if (this._instance.config.disable_conversations) return;
            if (qr(this._instance.config)) return;
            if (this._instance.config.cookieless_mode && this._instance.consent.isOptedOut()) return;
            const t = null == c ? void 0 : c.__PosthogExtensions__;
            if (t && !R(this.kg) && this.kg)
                if (this.ie && this.ie.token) {
                    this.Sg = !0;
                    try {
                        const i = t.initConversations;
                        if (i) return this.Eg(i), void(this.Sg = !1);
                        const e = t.loadExternalDependency;
                        if (!e) return void this.Mg(vn);
                        const s = this.$g;
                        e(this._instance, "conversations", (i) => {
                            if (s !== this.$g) return this.Sg = !1, void this.loadIfEnabled();
                            i || !t.initConversations ? this.Mg("Could not load conversations script", i) : this.Eg(t.initConversations), this.Sg = !1;
                        });
                    } catch (t) {
                        this.Mg("Error initializing conversations", t), this.Sg = !1;
                    }
                } else av.error("Conversations enabled but missing token in remote config.");
        }
        Eg(t) {
            if (this.ie) {
                try {
                    this._conversationsManager = t(this.ie, this._instance), this.xg = !1, av.info("Conversations loaded successfully");
                } catch (t) {
                    return void this.Mg("Error completing conversations initialization", t);
                }
                this.Tg && this._conversationsManager.setTheme(this.Tg), this.Ag();
            } else av.error("Cannot complete initialization: remote config is null");
        }
        Ag() {
            const t = this.Cg;
            this.Cg = null, this._conversationsManager && t && ("open" === t ? this._conversationsManager.open() : this._conversationsManager.close());
        }
        Mg(t, i) {
            av.error(t, i), this._conversationsManager = null, this.Sg = !1, this.xg = !0;
        }
        show() {
            this._conversationsManager ? this._conversationsManager.show() : av.warn("Conversations not loaded yet.");
        }
        hide() {
            "open" === this.Cg && (this.Cg = null), this._conversationsManager && this._conversationsManager.hide();
        }
        open() {
            this._conversationsManager ? (this.Cg = null, this._conversationsManager.open()) : this.Cg = "open";
        }
        close() {
            this._conversationsManager ? (this.Cg = null, this._conversationsManager.close()) : this.Cg = "close";
        }
        setTheme(t) {
            var i, e;
            this.Tg = wi(wi(wi({}, this.Tg), t), {}, {
                dark: wi(wi({}, null === (i = this.Tg) || void 0 === i ? void 0 : i.dark), null == t ? void 0 : t.dark)
            }), null === (e = this._conversationsManager) || void 0 === e || e.setTheme(t);
        }
        isAvailable() {
            return !0 === this.kg && !I(this._conversationsManager);
        }
        getUnavailableReason() {
            return this.isAvailable() ? null : this._instance.config.disable_conversations ? "disabled_by_config" : qr(this._instance.config) ? "disabled_for_toolbar" : this._instance.config.cookieless_mode && this._instance.consent.isOptedOut() ? "consent_opted_out" : !1 === this.Ig ? "remote_config_failed" : R(this.kg) ? this.Ig ? "disabled_in_project" : "remote_config_pending" : this.kg ? F(this.ie) || !this.ie.token ? "missing_token" : (null == c ? void 0 : c.__PosthogExtensions__) ? this.Sg ? "initializing" : this.xg ? "load_failed" : "not_loaded" : "extensions_unavailable" : "disabled_in_project";
        }
        isVisible() {
            var t, i;
            return null !== (t = null === (i = this._conversationsManager) || void 0 === i ? void 0 : i.isVisible()) && void 0 !== t && t;
        }
        sendMessage(t, i, e) {
            var s = this;
            return Y(function*() {
                return s._conversationsManager ? s._conversationsManager.sendMessage(t, i, e) : (av.warn(uv), null);
            })();
        }
        getMessages(t, i) {
            var e = this;
            return Y(function*() {
                return e._conversationsManager ? e._conversationsManager.getMessages(t, i) : (av.warn(uv), null);
            })();
        }
        markAsRead(t) {
            var i = this;
            return Y(function*() {
                return i._conversationsManager ? i._conversationsManager.markAsRead(t) : (av.warn(uv), null);
            })();
        }
        getTickets(t) {
            var i = this;
            return Y(function*() {
                return i._conversationsManager ? i._conversationsManager.getTickets(t) : (av.warn(uv), null);
            })();
        }
        requestRestoreLink(t) {
            var i = this;
            return Y(function*() {
                return i._conversationsManager ? i._conversationsManager.requestRestoreLink(t) : (av.warn(uv), null);
            })();
        }
        restoreFromToken(t) {
            var i = this;
            return Y(function*() {
                return i._conversationsManager ? i._conversationsManager.restoreFromToken(t) : (av.warn(uv), null);
            })();
        }
        restoreFromUrlToken() {
            var t = this;
            return Y(function*() {
                return t._conversationsManager ? t._conversationsManager.restoreFromUrlToken() : (av.warn(uv), null);
            })();
        }
        getCurrentTicketId() {
            var t, i;
            return null !== (t = null === (i = this._conversationsManager) || void 0 === i ? void 0 : i.getCurrentTicketId()) && void 0 !== t ? t : null;
        }
        getWidgetSessionId() {
            var t, i;
            return null !== (t = null === (i = this._conversationsManager) || void 0 === i ? void 0 : i.getWidgetSessionId()) && void 0 !== t ? t : null;
        }
        Sd() {
            var t;
            null === (t = this._conversationsManager) || void 0 === t || t.setIdentity();
        }
        xd() {
            var t;
            null === (t = this._conversationsManager) || void 0 === t || t.clearIdentity();
        }
    }
};
var Xv = {
    logs: class extends _v {
        constructor(t) {
            super({
                get() {
                    var i;
                    return null == t || null === (i = t.config) || void 0 === i ? void 0 : i.logs;
                },
                captureHintKey: Mn,
                get remoteConfigWillArrive() {
                    var i, e;
                    return !(null === (i = t.ec) || void 0 === i ? void 0 : i.call(t)) || !!(null === (e = c._POSTHOG_REMOTE_CONFIG) || void 0 === e || null === (e = e[t.config.token]) || void 0 === e ? void 0 : e.config);
                }
            }, () => function(t) {
                var i;
                const e = {};
                if (e.distinctId = t.get_distinct_id(), t.sessionManager) {
                    const {
                        sessionId: i,
                        windowId: s,
                        sessionStartTimestamp: n,
                        lastActivityTimestamp: r
                    } = t.sessionManager.checkAndGetSessionAndWindowId(!0);
                    e.sessionId = i, e.windowId = s, F(n) || (e.sessionStartTimestamp = n), F(r) || (e.lastActivityTimestamp = r);
                }
                if ((null == c || null === (i = c.location) || void 0 === i ? void 0 : i.href) && (e.currentUrl = t.config.disable_capture_url_hashes ? vi(c.location.href) : c.location.href), t.featureFlags) {
                    const i = t.featureFlags.getFlags();
                    i && i.length > 0 && (e.activeFeatureFlags = i);
                }
                return e;
            }(t)), this._instance = t, this.name = bh, this.sf();
        }
        get if() {
            return this._instance.__loaded;
        }
        nf() {
            const t = Us("[logs]"),
                i = null == c ? void 0 : c.__PosthogExtensions__;
            if (!i) return void t.error("PostHog Extensions not found.");
            const e = i.loadExternalDependency;
            if (e) return (t) => {
                e(this._instance, "logs", (e) => {
                    const s = i.logs;
                    t(e, (null == s ? void 0 : s.initializeLogs) ? {
                        initialize: (t) => s.initializeLogs(t),
                        replay(t, i) {
                            var e;
                            return null === (e = s.replayConsoleBuffer) || void 0 === e ? void 0 : e.call(s, t, i);
                        }
                    } : void 0);
                });
            };
            t.error(vn);
        }
    }
};
var Zv = {
    metrics: class {
        constructor(t) {
            this._instance = t, this.A = Us("[metrics]"), this.Ti = !1;
        }
        initialize() {
            this.onConfigChange();
        }
        onConfigChange() {
            var t;
            if (this.Ti) return;
            const i = !!(null === (t = this._instance.config.metrics) || void 0 === t ? void 0 : t.network);
            i && !this.Rg ? this.Rg = ((t) => {
                let i = !0;
                const e = () => i ? ((t) => {
                        var i;
                        const e = null === (i = t.config.metrics) || void 0 === i ? void 0 : i.network;
                        return !0 === e ? {} : e || void 0;
                    })(t) : void 0,
                    s = xv(t, e),
                    n = Ev(t, e);
                return () => {
                    i = !1, s(), n();
                };
            })(this._instance) : !i && this.Rg && (this.Rg(), this.Rg = void 0);
        }
        lf() {
            var t;
            if (this.Ti) return;
            const i = null === (t = this._instance) || void 0 === t || null === (t = t.config) || void 0 === t ? void 0 : t.metrics;
            var e;
            return this.tf && this.uf === i || (null === (e = this.tf) || void 0 === e || e.reset(), this.uf = i, this.tf = new Ds(this.af(), function(t) {
                var i, e, s, n, r;
                const o = null == t ? void 0 : t.resourceAttributes;
                return {
                    serviceName: null !== (i = null == o ? void 0 : o["service.name"]) && void 0 !== i ? i : null == t ? void 0 : t.serviceName,
                    serviceVersion: null !== (e = null == o ? void 0 : o["service.version"]) && void 0 !== e ? e : null == t ? void 0 : t.serviceVersion,
                    environment: null !== (s = null == o ? void 0 : o["deployment.environment"]) && void 0 !== s ? s : null == t ? void 0 : t.environment,
                    resourceAttributes: o,
                    beforeSend: null == t ? void 0 : t.beforeSend,
                    flushIntervalMs: null !== (n = null == t ? void 0 : t.flushIntervalMs) && void 0 !== n ? n : 1e4,
                    maxSeriesPerFlush: null !== (r = null == t ? void 0 : t.maxSeriesPerFlush) && void 0 !== r ? r : 1e3
                };
            }(i), this.A)), this.tf;
        }
        count(t, i = 1, e) {
            var s;
            null === (s = this.lf()) || void 0 === s || s.count(t, i, e);
        }
        gauge(t, i, e) {
            var s;
            null === (s = this.lf()) || void 0 === s || s.gauge(t, i, e);
        }
        histogram(t, i, e) {
            var s;
            null === (s = this.lf()) || void 0 === s || s.histogram(t, i, e);
        }
        flush(t) {
            if (!this.tf) return Promise.resolve();
            if (t) {
                const i = this.tf.drainWindow();
                return i && this._o(i, t), Promise.resolve();
            }
            return this.tf.flush().catch((t) => this.A.error("PostHog metrics flush failed:", t));
        }
        reset() {
            var t;
            null === (t = this.tf) || void 0 === t || t.reset();
        }
        dispose() {
            var t, i;
            this.Ti = !0, null === (t = this.Rg) || void 0 === t || t.call(this), this.Rg = void 0, null === (i = this.tf) || void 0 === i || i.reset();
        }
        af() {
            const t = this._instance,
                i = this;
            return {
                get isDisabled() {
                    return !1;
                },
                get optedOut() {
                    return !t.is_capturing();
                },
                _o: (t) => i._o(t),
                getLibraryId: () => Vs.LIB_NAME,
                getLibraryVersion: () => Vs.LIB_VERSION
            };
        }
        _o(t, i) {
            return new Promise((e) => {
                let s = !1;
                const n = (t) => {
                        s || (s = !0, clearTimeout(r), e(t));
                    },
                    r = setTimeout(() => n({
                        kind: "retry-later",
                        error: new Error("metrics request timed out")
                    }), 9e4);
                this._instance._send_request(wi(wi({
                    method: "POST",
                    url: this.Pg(),
                    data: t,
                    compression: "best-available",
                    batchKey: "metrics"
                }, i && {
                    transport: i
                }), {}, {
                    fireCallbackOnDrop: !0,
                    callback(t) {
                        const i = t.statusCode;
                        if (i >= 200 && 300 > i) n({
                            kind: "ok"
                        });
                        else if (413 === i) n({
                            kind: "too-large"
                        });
                        else if (0 !== i && 408 !== i && 429 !== i && 500 > i) n({
                            kind: "fatal",
                            error: new Error(`metrics request failed with status ${i}`)
                        });
                        else {
                            var e;
                            n({
                                kind: "retry-later",
                                error: null !== (e = t.error) && void 0 !== e ? e : new Error(`metrics request failed with status ${i}`)
                            });
                        }
                    }
                }));
            });
        }
        Pg() {
            return this._instance.requestRouter.endpointFor("api", "/i/v1/metrics") + "?token=" + encodeURIComponent(this._instance.config.token);
        }
    }
};
var Qv = {
    webMCP: class {
        constructor(t) {
            this._instance = t, this.Og = !1;
        }
        initialize() {
            this.startIfEnabled();
        }
        startIfEnabled() {
            if (!this._instance.config.capture_webmcp || this.Og) return;
            const t = null == s ? void 0 : s.modelContext;
            if (!t || !T(t.registerTool)) return;
            const i = kv.get(t);
            if (i) return i.instances.add(this._instance), void(this.Og = !0);
            const e = {
                    instances: new Set([this._instance])
                },
                n = t.registerTool,
                r = this;
            Xh(t, "registerTool", (t) => {
                const i = t;
                return function(t, ...s) {
                    let n = t;
                    try {
                        n = r.Fg(t, e);
                    } catch (e) {
                        return i.call(this, t, ...s);
                    }
                    return i.call(this, n, ...s);
                };
            }), t.registerTool !== n && (kv.set(t, e), this.Og = !0);
        }
        Fg(t, i) {
            if (!t || !T(t.execute)) return t;
            const e = t.execute,
                s = this,
                {
                    tool: n,
                    injected: r
                } = function(t, i) {
                    const e = {
                            intent: !1,
                            model: !1
                        },
                        s = t.inputSchema;
                    if (! function(t) {
                            return !!R(t) || P(t) && Object.keys(t).every((t) => Tv.has(t) || t.startsWith("x-")) && !0 !== t.additionalProperties && !P(t.additionalProperties) && (!t.type || "object" === t.type) && (!t.properties || P(t.properties)) && (!t.required || k(t.required));
                        }(s)) return {
                        tool: Av(t),
                        injected: e
                    };
                    const n = (null == s ? void 0 : s.properties) || {},
                        r = (t) => Cv(n, t) || k(null == s ? void 0 : s.required) && s.required.includes(t);
                    if (e.intent = i.intent && !r("context"), e.model = i.model && !r("llm_model"), !e.intent && !e.model) return {
                        tool: Av(t),
                        injected: e
                    };
                    const o = wi({}, n),
                        l = k(null == s ? void 0 : s.required) ? [...s.required] : [];
                    return e.intent && (o.context = {
                        type: "string",
                        description: "Explain why this tool is called and how it supports the user's goal. Describe the abstract purpose only. Do not include personal or identifying information. Generalize specific entities as roles such as \"a customer\"."
                    }, l.includes("context") || l.push("context")), e.model && (o.llm_model = {
                        type: "string",
                        description: "The exact model identifier you are running as, taken from your system prompt or environment. Pass \"unknown\" if you do not know it. Never guess."
                    }, l.includes("llm_model") || l.push("llm_model")), {
                        tool: Av(t, wi(wi({}, s), {}, {
                            type: (null == s ? void 0 : s.type) || "object",
                            properties: o,
                            required: l
                        })),
                        injected: e
                    };
                }(t, function(t) {
                    const i = {
                        intent: !1,
                        model: !1
                    };
                    for (const e of t.instances) {
                        const t = Rv(e.config.capture_webmcp);
                        i.intent || (i.intent = !0 === (null == t ? void 0 : t.intent)), i.model || (i.model = !0 === (null == t ? void 0 : t.model));
                    }
                    return i;
                }(i));
            return Object.defineProperty(n, "execute", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value(...o) {
                    const l = new Date(),
                        a = function(t, i) {
                            if (!P(t)) return {};
                            try {
                                const e = i.intent ? Iv(t.context, 2048, !0) : void 0,
                                    s = i.model ? Iv(t.llm_model, 256) : void 0;
                                return wi(wi({}, e && "{}" !== e ? {
                                    intent: e
                                } : {}), s && "unknown" !== s.toLowerCase() ? {
                                    model: s
                                } : {});
                            } catch (t) {
                                return {};
                            }
                        }(o[0], r),
                        u = function(t, i) {
                            const e = t[0];
                            if (!P(e)) return t;
                            try {
                                const s = i.intent && Cv(e, "context"),
                                    n = i.model && Cv(e, "llm_model");
                                if (!s && !n) return t;
                                const r = wi({}, e);
                                return s && delete r.context, n && delete r.llm_model, [r, ...t.slice(1)];
                            } catch (i) {
                                return t;
                            }
                        }(o, r);
                    let h;
                    try {
                        h = e.apply(this === n ? t : this, u);
                    } catch (t) {
                        throw s.Dg(i, n, l, {
                            error: t,
                            errorResult: !1
                        }, a), t;
                    }
                    if ((c = h) && "function" == typeof c.then) return Promise.resolve(h).then((t) => {
                        const e = Fv(t) ? {
                            error: t,
                            errorResult: !0
                        } : void 0;
                        return s.Dg(i, n, l, e, a), t;
                    }, (t) => {
                        throw s.Dg(i, n, l, {
                            error: t,
                            errorResult: !1
                        }, a), t;
                    });
                    var c;
                    const d = Fv(h) ? {
                        error: h,
                        errorResult: !0
                    } : void 0;
                    return s.Dg(i, n, l, d, a), h;
                }
            }), n;
        }
        Dg(t, i, e, s, r) {
            const o = Date.now() - e.getTime();
            let l;
            for (const u of t.instances) {
                var a;
                const t = Rv(u.config.capture_webmcp);
                if (t) {
                    s && !l && (l = jv(s.error, s.errorResult));
                    try {
                        u.capture("$mcp_tool_call", wi(wi(wi({
                            $mcp_source: "posthog_mcp_analytics",
                            $mcp_interface: "webmcp",
                            $mcp_tool_name: i.name,
                            $mcp_resource_name: i.name,
                            $mcp_tool_description: i.description,
                            $mcp_server_name: null == n ? void 0 : n.hostname,
                            $mcp_duration_ms: o,
                            $mcp_is_error: !!s
                        }, l ? {
                            $mcp_error_type: l.type,
                            $mcp_error_message: l.message
                        } : {}), t.intent && r.intent ? {
                            $mcp_intent: r.intent,
                            $mcp_intent_source: "context_parameter"
                        } : {}), t.model && r.model ? {
                            $mcp_llm_model: r.model,
                            $mcp_llm_model_source: "self_reported"
                        } : {}), {
                            timestamp: e
                        });
                    } catch (t) {
                        continue;
                    }
                    if (s && l && u.exceptions && (null === (a = u.exceptionObserver) || void 0 === a ? void 0 : a.isEnabled)) try {
                        const t = {
                            $exception_list: Nv(u.exceptions, s, l.message),
                            $exception_level: "error",
                            $exception_source: "mcp.tool_call",
                            $mcp_interface: "webmcp",
                            $mcp_tool_name: i.name,
                            $mcp_resource_name: i.name,
                            $mcp_tool_description: i.description,
                            $mcp_server_name: null == n ? void 0 : n.hostname
                        };
                        u.exceptionObserver.captureException(t);
                    } catch (t) {}
                }
            }
        }
    }
};
Wh.__defaultExtensionClasses = wi({}, wi(wi(wi(wi(wi(wi(wi(wi(wi(wi(wi(wi(wi(wi({}, Uv), Bv), zv), Hv), qv), Wv), Gv), Vv), Kv), Yv), Jv), Xv), Zv), Qv));
var tf = function() {
    Vs.SDK_DIST_CHANNEL = "npm";
    const i = xh[Lh] = new Wh();
    return function() {
        function i() {
            i.done || (i.done = !0, Pu = !1, Mr(xh, function(t) {
                t._dom_loaded();
            }));
        }
        (null == s ? void 0 : s.addEventListener) ? "complete" === s.readyState ? i() : Hr(s, "DOMContentLoaded", i, {
            capture: !1
        }): t && js.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized");
    }(), i;
}();
var ef = tf;

export {
    aa as Compression, wa as DEFAULT_PRODUCT_TOUR_APPEARANCE, ya as DisplaySurveyType, Wh as PostHog, $a as ProductTourEventName, Sa as ProductTourEventProperties, _a as SurveyEventName, ma as SurveyEventProperties, ua as SurveyEventType, ca as SurveyPosition, pa as SurveyQuestionBranchingType, fa as SurveyQuestionType, ga as SurveySchedule, da as SurveyTabPosition, va as SurveyType, ha as SurveyWidgetType, ef as
    default, tf as posthog, Pa as severityLevels
};
//# sourceMappingURL=module-CccQDQOF.js.map