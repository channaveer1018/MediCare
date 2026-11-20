;
(function() {
    var VERSION = 1;
    var ACTIVE = false;
    var OVERLAY_ID = "__we0_inspector_overlay__";
    var LAST_HIGHLIGHTED = null;

    function safeString(v) {
        try {
            return String(v);
        } catch (e) {
            return "";
        }
    }

    var DOM_PREVIEW_MAX_DEPTH = 3;
    var DOM_PREVIEW_MAX_CHILDREN = 4;
    var DOM_PREVIEW_MAX_TEXT = 120;
    var DOM_PREVIEW_MAX_LEN = 480;

    function truncateText(text, max) {
        if (!text) return "";
        text = safeString(text).replace(/\s+/g, " ").trim();
        if (!text) return "";
        return text.length > max ? text.slice(0, max) + "…" : text;
    }

    function getTextPreview(el) {
        if (!el) return "";
        return truncateText(el.textContent || "", 80);
    }

    function getDirectText(el) {
        if (!el) return "";
        var text = "";
        for (var i = 0; i < el.childNodes.length; i++) {
            var node = el.childNodes[i];
            if (node.nodeType === 3) text += node.textContent || "";
        }
        return truncateText(text, DOM_PREVIEW_MAX_TEXT);
    }

    function formatDomTag(el) {
        var tag = (el.tagName || "").toLowerCase();
        if (!tag) return "";
        var label = tag;
        if (el.id) label += "#" + el.id;
        if (el.className && typeof el.className === "string") {
            var classes = el.className.trim().split(/\s+/).filter(Boolean);
            if (classes.length) {
                label += "." + classes.slice(0, 2).join(".");
                if (classes.length > 2) label += "+";
            }
        }
        return label;
    }

    function buildDomPreview(el, depth) {
        if (!el || el.nodeType !== 1) return "";
        if (el.id === OVERLAY_ID) return "";

        var tag = (el.tagName || "").toLowerCase();
        if (tag === "script" || tag === "style" || tag === "noscript") return "";

        depth = depth || 0;
        var head = formatDomTag(el);
        var directText = getDirectText(el);
        if (directText) head += ' "' + directText + '"';

        if (depth >= DOM_PREVIEW_MAX_DEPTH) return head;

        var children = el.children;
        if (!children || !children.length) return head;

        var childParts = [];
        var limit = Math.min(children.length, DOM_PREVIEW_MAX_CHILDREN);
        for (var i = 0; i < limit; i++) {
            var part = buildDomPreview(children[i], depth + 1);
            if (part) childParts.push(part);
        }
        if (children.length > DOM_PREVIEW_MAX_CHILDREN) {
            childParts.push("…+" + (children.length - DOM_PREVIEW_MAX_CHILDREN));
        }
        if (!childParts.length) return head;
        return head + " > " + childParts.join(" | ");
    }

    function getDomPreview(el) {
        var preview = buildDomPreview(el, 0);
        if (!preview) return "";
        return truncateText(preview, DOM_PREVIEW_MAX_LEN);
    }

    function getOverlay() {
        var overlay = document.getElementById(OVERLAY_ID);
        if (overlay) return overlay;
        overlay = document.createElement("div");
        overlay.id = OVERLAY_ID;
        overlay.style.position = "fixed";
        overlay.style.zIndex = "2147483647";
        overlay.style.pointerEvents = "none";
        overlay.style.border = "2px solid rgba(59, 130, 246, 0.95)";
        overlay.style.boxShadow = "0 0 0 9999px rgba(0,0,0,0.06)";
        overlay.style.borderRadius = "6px";
        overlay.style.display = "none";
        document.documentElement.appendChild(overlay);
        return overlay;
    }

    function setOverlayRect(rect) {
        var overlay = getOverlay();
        if (!rect) {
            overlay.style.display = "none";
            LAST_HIGHLIGHTED = null;
            return;
        }
        overlay.style.display = "block";
        overlay.style.left = rect.x + "px";
        overlay.style.top = rect.y + "px";
        overlay.style.width = rect.width + "px";
        overlay.style.height = rect.height + "px";
    }

    function getRect(el) {
        var r = el.getBoundingClientRect();
        return {
            x: r.left,
            y: r.top,
            width: r.width,
            height: r.height
        };
    }

    function getReactFiber(el) {
        if (!el) return null;
        var keys = Object.keys(el);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            if (
                k.indexOf("__reactFiber$") === 0 ||
                k.indexOf("__reactInternalInstance$") === 0
            ) {
                return el[k];
            }
        }
        return null;
    }

    function getComponentNameFromFiber(fiber) {
        if (!fiber) return undefined;
        var t = fiber.type;
        if (!t) return undefined;
        if (typeof t === "string") return t;
        return t.displayName || t.name || undefined;
    }

    function getDebugSourceFromFiber(fiber) {
        // dev build: fiber._debugSource / fiber._debugOwner 链上也可能有
        var f = fiber;
        for (var i = 0; i < 30 && f; i++) {
            if (f._debugSource && f._debugSource.fileName) return f._debugSource;
            f = f._debugOwner || f.return;
        }
        return null;
    }

    function buildComponentStack(startFiber) {
        var stack = [];
        var seen = Object.create(null);
        var f = startFiber;
        for (var i = 0; i < 48 && f; i++) {
            var t = f.type;
            var isHost = typeof t === "string";
            var name = getComponentNameFromFiber(f);
            if (!isHost && name) {
                var ds = f._debugSource;
                var row = {
                    componentName: name,
                    fileName: ds && ds.fileName ? safeString(ds.fileName) : undefined,
                    lineNumber: ds && ds.lineNumber ? Number(ds.lineNumber) : undefined,
                    columnNumber: ds && ds.columnNumber ? Number(ds.columnNumber) : undefined,
                };
                var key =
                    row.componentName +
                    "|" +
                    (row.fileName || "") +
                    ":" +
                    (row.lineNumber || 0) +
                    ":" +
                    (row.columnNumber || 0);
                if (!seen[key]) {
                    seen[key] = true;
                    stack.push(row);
                }
            }
            f = f.return;
        }
        return stack;
    }

    function buildPayload(el) {
        if (!el) return null;
        var fiber = getReactFiber(el);
        var rect = getRect(el);
        var componentStack = buildComponentStack(fiber);
        var leafIsHost = fiber && typeof fiber.type === "string";
        var componentName = getComponentNameFromFiber(fiber);
        var debug = getDebugSourceFromFiber(fiber);
        // 点到的是 DOM 节点时，Fiber 叶子是 host；对外展示优先用「最近的自定义组件」（栈首项）
        if (leafIsHost && componentStack.length) {
            var inner = componentStack[0];
            componentName = inner.componentName || componentName;
            if (inner.fileName) {
                debug = {
                    fileName: inner.fileName,
                    lineNumber: inner.lineNumber,
                    columnNumber: inner.columnNumber,
                };
            }
        }
        return {
            componentName: componentName,
            fileName: debug && debug.fileName ? safeString(debug.fileName) : undefined,
            lineNumber: debug && debug.lineNumber ? Number(debug.lineNumber) : undefined,
            columnNumber: debug && debug.columnNumber ? Number(debug.columnNumber) : undefined,
            componentStack: componentStack.length ? componentStack : undefined,
            dom: {
                tagName: (el.tagName || "").toLowerCase(),
                id: el.id || undefined,
                className: el.className ? safeString(el.className) : undefined,
                text: getTextPreview(el) || undefined,
                preview: getDomPreview(el) || undefined,
            },
            rect: rect,
        };
    }

    function chooseBestElementInRect(selRect) {
        if (!selRect) return null;
        var cx = selRect.x + selRect.width / 2;
        var cy = selRect.y + selRect.height / 2;
        var selArea = selRect.width * selRect.height;

        // elementsFromPoint 返回中心点上所有命中元素，从最顶层（最小）到最底层（最大）
        var candidates = document.elementsFromPoint(cx, cy);
        if (!candidates || !candidates.length) return null;

        // 过滤掉：overlay 自身、html、body
        candidates = candidates.filter(function(el) {
            return (
                el.id !== OVERLAY_ID &&
                el !== document.documentElement &&
                el !== document.body
            );
        });

        if (!candidates.length) return null;

        var best = null;
        var bestScore = Infinity;

        for (var i = 0; i < candidates.length; i++) {
            var el = candidates[i];
            var r = el.getBoundingClientRect();
            var elArea = r.width * r.height;
            // 选区面积与元素面积之差越小越匹配：框大选大，框小选小
            var score = Math.abs(elArea - selArea);
            if (score < bestScore) {
                bestScore = score;
                best = el;
            }
        }

        return best;
    }

    function postToParent(msg) {
        try {
            window.parent && window.parent.postMessage(msg, "*");
        } catch (e) {
            // ignore
        }
    }

    function highlightElement(el) {
        if (!el) {
            setOverlayRect(null);
            return;
        }
        LAST_HIGHLIGHTED = el;
        setOverlayRect(getRect(el));
    }

    window.addEventListener("message", function(event) {
        var data = event && event.data;
        if (!data || typeof data !== "object") return;
        if (data.type === "WE0_INSPECTOR_SET_ACTIVE") {
            ACTIVE = !!data.active;
            if (!ACTIVE) highlightElement(null);
            return;
        }
        if (data.type === "WE0_INSPECTOR_HITTEST_RECT") {
            var el = chooseBestElementInRect(data.rect);
            // 父页面拖拽框会消失；iframe 内仍高亮最终命中的节点（与点击选中一致）
            if (ACTIVE) {
                highlightElement(el);
            }
            var payload = el ? buildPayload(el) : null;
            postToParent({
                type: "WE0_INSPECTOR_HITTEST_RESULT",
                requestId: data.requestId,
                payload: payload,
            });
            return;
        }
    });

    document.addEventListener(
        "click",
        function(e) {
            if (!ACTIVE) return;
            // 拦截，避免预览里跳转/提交
            e.preventDefault();
            e.stopPropagation();
            var target = e.target;
            if (!target) return;
            var el = target.nodeType === 1 ? target : target.parentElement;
            if (!el) return;
            highlightElement(el);
            var payload = buildPayload(el);
            if (payload)
                postToParent({
                    type: "WE0_INSPECTOR_SELECTION",
                    payload: payload
                });
        },
        true
    );

    // ready
    postToParent({
        type: "WE0_INSPECTOR_READY",
        version: VERSION
    });
})();