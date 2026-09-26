(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Users/vladislav/Desktop/nextjs_space/instrumentation-client.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

// SYSTEM-MANAGED FILE -- do not edit, rename or delete.
// Reports uncaught client-side errors to the platform so they can be diagnosed and fixed.
(function() {
    if (("TURBOPACK compile-time value", "object") === 'undefined' || window.__abacusErrHooked) return;
    window.__abacusErrHooked = 1;
    var n = 0, seen = {};
    function r(e) {
        try {
            var st = e && e.stack || '';
            var m = String(e);
            var s = st.indexOf(m) === 0 ? st : m + (st ? '\n' + st : '');
            if (!s || seen[s] || n >= 20) return;
            seen[s] = 1;
            n++;
            navigator.sendBeacon('/__abacus/client-error', '[client] ' + s + '\nurl: ' + location.href.split('?')[0]);
        } catch (_) {}
    }
    addEventListener('error', function(e) {
        if (e.error) r(e.error);
    });
    addEventListener('unhandledrejection', function(e) {
        r(e.reason);
    });
    var _ce = console.error;
    console.error = function() {
        try {
            for(var i = 0; i < arguments.length; i++){
                var a = arguments[i];
                if (a instanceof Error || typeof a === 'string' && /\n\s+at\s|Error:/.test(a)) {
                    r(a);
                    break;
                }
            }
        } catch (_) {}
        return _ce.apply(console, arguments);
    };
})();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Users_vladislav_Desktop_nextjs_space_instrumentation-client_0b1_-5m.js.map