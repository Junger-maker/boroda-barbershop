module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/Users/vladislav/Desktop/nextjs_space/components/chunk-load-error-handler.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChunkLoadErrorHandler",
    ()=>ChunkLoadErrorHandler
]);
// IMPORTANT: Do not remove this component.
// It handles a known Next.js dev server race condition where dynamic chunks
// imported by next/dynamic haven't been compiled yet and cause webpack to throw
// a ChunkLoadError
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
// A dev server that keeps serving stale chunk URLs raises a ChunkLoadError on every
// render pass, so an unthrottled reload turns one bad chunk into a continuous reload
// loop that wipes whatever the user was typing.
const RELOAD_THROTTLE_MS = 60000;
const RELOAD_KEY = 'chunkReloadAt';
function shouldReload() {
    const now = Date.now();
    try {
        const last = Number(window.sessionStorage.getItem(RELOAD_KEY)) || 0;
        if (now - last < RELOAD_THROTTLE_MS) {
            return false;
        }
        window.sessionStorage.setItem(RELOAD_KEY, String(now));
    } catch  {
        // Without a durable timestamp the throttle cannot latch across reloads, so stay put
        // rather than risk the loop; the user can still reload by hand.
        return false;
    }
    return true;
}
function ChunkLoadErrorHandler() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = (event)=>{
            if (event.error?.name === 'ChunkLoadError' || event.error?.message?.includes('Loading chunk')) {
                event.preventDefault();
                if (shouldReload()) {
                    window.location.reload();
                }
            }
        };
        window.addEventListener('error', handler);
        return ()=>window.removeEventListener('error', handler);
    }, []);
    return null;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1x48c1m._.js.map