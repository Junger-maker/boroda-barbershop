(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Users/vladislav/Desktop/nextjs_space/app/components/reviews-slider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReviewsSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
'use client';
;
;
;
;
;
;
const REVIEWS = [
    {
        name: 'Сергей Иванов',
        date: '15 сентября 2026',
        stars: 5,
        text: 'Отличный барбершоп! Стригусь у Алексея уже полгода, каждый раз ухожу довольным. Атмосфера на высшем уровне, кофе всегда вкусный.'
    },
    {
        name: 'Андрей Петров',
        date: '8 сентября 2026',
        stars: 5,
        text: 'Первый раз пришёл по скидке и теперь постоянный клиент. Дмитрий делает идеальный фейд. Рекомендую!'
    },
    {
        name: 'Максим Кузнецов',
        date: '1 сентября 2026',
        stars: 5,
        text: 'Бороду постригли просто класс! Уютное место, приятные люди. Отдельное спасибо за камуфляж седины — естественно и незаметно.'
    },
    {
        name: 'Николай Смирнов',
        date: '25 августа 2026',
        stars: 4,
        text: 'Хорошее место, профессиональные мастера. Иногда нужно подождать, но это потому что место популярное. Стрижка всегда на высоте.'
    },
    {
        name: 'Павел Волков',
        date: '18 августа 2026',
        stars: 5,
        text: 'Был во многих барбершопах Москвы — Борода лучший. Михаил — настоящий профессионал, VIP-стрижка стоит каждого рубля.'
    }
];
function ReviewsSlider() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
        modules: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"],
            __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"]
        ],
        spaceBetween: 24,
        slidesPerView: 1,
        pagination: {
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        breakpoints: {
            768: {
                slidesPerView: 2
            }
        },
        className: "!pb-12",
        children: REVIEWS?.map?.((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-card rounded-lg p-6 sm:p-8 h-full",
                    style: {
                        boxShadow: 'var(--shadow-md)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 mb-4",
                            children: Array.from({
                                length: 5
                            })?.map?.((_, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                    className: `w-4 h-4 ${j < (r?.stars ?? 0) ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`
                                }, j, false, {
                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/reviews-slider.tsx",
                                    lineNumber: 35,
                                    columnNumber: 17
                                }, this)) ?? []
                        }, void 0, false, {
                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/reviews-slider.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-sm leading-relaxed mb-4 italic",
                            children: [
                                "«",
                                r?.text ?? '',
                                "»"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/reviews-slider.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-sm",
                                    children: r?.name ?? ''
                                }, void 0, false, {
                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/reviews-slider.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-muted-foreground",
                                    children: r?.date ?? ''
                                }, void 0, false, {
                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/reviews-slider.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/reviews-slider.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/reviews-slider.tsx",
                    lineNumber: 32,
                    columnNumber: 11
                }, this)
            }, i, false, {
                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/reviews-slider.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)) ?? []
    }, void 0, false, {
        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/reviews-slider.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = ReviewsSlider;
var _c;
__turbopack_context__.k.register(_c, "ReviewsSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Users/vladislav/Desktop/nextjs_space/app/components/reviews-slider.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/app/components/reviews-slider.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=Users_vladislav_Desktop_nextjs_space_app_components_reviews-slider_tsx_0epljj3._.js.map