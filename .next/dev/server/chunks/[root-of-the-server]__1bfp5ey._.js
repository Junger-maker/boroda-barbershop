module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

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
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/Users/vladislav/Desktop/nextjs_space/app/api/uploadthing/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$uploadthing$2f$next$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/uploadthing/next/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$lib$2f$uploadthing$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/lib/uploadthing/server.ts [app-route] (ecmascript)");
;
;
const { GET, POST } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$uploadthing$2f$next$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRouteHandler"])({
    router: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$lib$2f$uploadthing$2f$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ourFileRouter"]
});
}),
"[project]/Users/vladislav/Desktop/nextjs_space/lib/uploadthing/server.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ourFileRouter",
    ()=>ourFileRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$uploadthing$2f$next$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/uploadthing/next/index.js [app-route] (ecmascript) <locals>");
;
const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$uploadthing$2f$next$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUploadthing"])();
const ourFileRouter = {
    // Загрузчик для фото барберов
    barberPhoto: f({
        image: {
            maxFileSize: "4MB",
            maxFileCount: 1
        }
    }).middleware(async ()=>{
        // Здесь можно добавить проверку авторизации
        return {
            userId: "admin"
        };
    }).onUploadComplete(async ({ metadata, file })=>{
        console.log("✅ Фото загружено:", file.url);
        return {
            url: file.url
        };
    })
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1bfp5ey._.js.map