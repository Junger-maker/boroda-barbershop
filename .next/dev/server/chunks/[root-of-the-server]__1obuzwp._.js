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
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

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
"[project]/Users/vladislav/Desktop/nextjs_space/app/api/admin/grades/[id]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/next/server.js [app-route] (ecmascript)");
;
;
async function PUT(request, { params }) {
    try {
        const { id } = await params;
        const body = await request.json();
        // Обновляем название градации
        await __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].execute({
            sql: `UPDATE grades SET name = ? WHERE id = ?`,
            args: [
                body.name,
                id
            ]
        });
        // Обновляем услуги и цены
        if (body.services && Array.isArray(body.services)) {
            // Удаляем старые связи
            await __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].execute({
                sql: `DELETE FROM grade_services WHERE gradeId = ?`,
                args: [
                    id
                ]
            });
            // Создаём новые связи
            for (const service of body.services){
                if (service.isActive) {
                    const gsId = crypto.randomUUID();
                    const now = Date.now();
                    await __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].execute({
                        sql: `INSERT INTO grade_services (id, gradeId, serviceId, price, isActive, created_at)
                  VALUES (?, ?, ?, ?, ?, ?)`,
                        args: [
                            gsId,
                            id,
                            service.id,
                            Number(service.price) || 0,
                            1,
                            now
                        ]
                    });
                }
            }
        }
        // Возвращаем обновлённую градацию
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].execute({
            sql: `SELECT g.id, g.name, g.isActive, g.created_at as "createdAt",
                   gs.id as gs_id, gs.gradeId, gs.serviceId, gs.price, gs.isActive as gs_isActive, gs.created_at as gs_createdAt,
                   s.id as s_id, s.name as s_name, s.isActive as s_isActive, s.created_at as s_createdAt
            FROM grades g
            LEFT JOIN grade_services gs ON g.id = gs.gradeId
            LEFT JOIN services s ON gs.serviceId = s.id
            WHERE g.id = ?`,
            args: [
                id
            ]
        });
        const grade = {
            id: result.rows[0]['id'],
            name: result.rows[0]['name'],
            isActive: result.rows[0]['isActive'],
            createdAt: result.rows[0]['createdAt'],
            gradeServices: []
        };
        for (const row of result.rows){
            if (row['s_id']) {
                grade.gradeServices.push({
                    id: row['gs_id'],
                    gradeId: row['gradeId'],
                    serviceId: row['serviceId'],
                    price: row['price'],
                    isActive: row['gs_isActive'],
                    createdAt: row['gs_createdAt'],
                    service: {
                        id: row['s_id'],
                        name: row['s_name'],
                        isActive: row['s_isActive'],
                        createdAt: row['s_createdAt']
                    }
                });
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(grade);
    } catch (error) {
        if (error.message?.includes('UNIQUE')) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Градация с таким именем уже существует'
            }, {
                status: 400
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Ошибка сервера',
            details: error.message
        }, {
            status: 500
        });
    }
}
async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        await __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].execute({
            sql: `DELETE FROM grades WHERE id = ?`,
            args: [
                id
            ]
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Ошибка сервера'
        }, {
            status: 500
        });
    }
}
}),
"[project]/Users/vladislav/Desktop/nextjs_space/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$lib$2f$turso$2d$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/lib/turso-http.ts [app-route] (ecmascript)");
;
const __TURBOPACK__default__export__ = {
    execute: async ({ sql, args })=>{
        const rows = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$lib$2f$turso$2d$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(sql, args);
        return {
            rows
        };
    },
    executeBatch: async (statements)=>{
        // Для batch запросов
        const results = [];
        for (const stmt of statements){
            results.push(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$lib$2f$turso$2d$http$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(stmt.sql, stmt.args));
        }
        return results;
    }
};
}),
"[project]/Users/vladislav/Desktop/nextjs_space/lib/turso-http.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "executeQuery",
    ()=>executeQuery,
    "query",
    ()=>query
]);
const TURSO_URL = process.env.TURSO_DATABASE_URL;
const TURSO_TOKEN = process.env.TURSO_AUTH_TOKEN;
async function executeQuery(sql, args = []) {
    const response = await fetch(`${TURSO_URL}/v2/pipeline`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${TURSO_TOKEN}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            statements: [
                {
                    sql,
                    args: args.map((a)=>({
                            value: a
                        }))
                }
            ]
        })
    });
    if (!response.ok) {
        throw new Error(`Turso error: ${response.statusText}`);
    }
    const data = await response.json();
    return data.results[0];
}
async function query(sql, args = []) {
    const result = await executeQuery(sql, args);
    return result.rows || [];
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1obuzwp._.js.map