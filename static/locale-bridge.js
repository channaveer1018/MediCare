;
(function() {
    var COOKIE_NAME = 'i18n_locale';
    var COOKIE_MAX_AGE = 31536000; // 1 year

    function parseLocale(raw) {
        if (!raw || typeof raw !== 'string') return null;
        var lower = raw.trim().toLowerCase();
        if (lower === 'zh' || lower.indexOf('zh-') === 0) return 'zh';
        if (lower === 'en' || lower.indexOf('en-') === 0) return 'en';
        return null;
    }

    function setCookie(locale) {
        try {
            document.cookie =
                COOKIE_NAME + '=' + encodeURIComponent(locale) +
                '; Path=/; Max-Age=' + COOKIE_MAX_AGE + '; SameSite=Lax';
        } catch (e) {}
    }

    function applyLocale(locale) {
        setCookie(locale);
        window.__LOCALE_FROM_BRIDGE__ = locale;
        // Notify React (LocaleBootstrap) via CustomEvent
        try {
            window.dispatchEvent(
                new CustomEvent('we0-locale-received', {
                    detail: {
                        locale: locale
                    }
                })
            );
        } catch (e) {}
        // Reload only if SSR was rendered with a different locale
        // if (window.__INITIAL_LOCALE__ && locale !== window.__INITIAL_LOCALE__) {
        //   window.location.reload();
        // }
    }

    // Listen for locale postMessage from host (when this page is embedded as iframe)
    window.addEventListener('message', function(ev) {
        try {
            var d = ev.data;
            if (!d || typeof d !== 'object') return;
            if (d.type !== 'we0-locale' && d.type !== 'we0-set-locale') return;
            var loc = parseLocale(d.locale);
            if (loc) applyLocale(loc);
        } catch (e) {}
    });

    // Let the host know the bridge is ready
    try {
        if (window.parent && window.parent !== window) {
            window.parent.postMessage({
                type: 'we0-locale-bridge-ready'
            }, '*');
        }
    } catch (e) {}
})();