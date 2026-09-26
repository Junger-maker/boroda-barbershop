(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Users/vladislav/Desktop/nextjs_space/app/components/barbers-slider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BarbersSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const DEFAULT_COLORS = [
    'bg-primary',
    'bg-secondary',
    'bg-primary/70',
    'bg-secondary/70'
];
// URLs для иконок градаций
const GRADE_ICONS = {
    barber: 'https://qrvg65pv1b.ufs.sh/f/LHINhZl0o3OPpR0xJqoXqo7iVEFcPflUK1ZYAdLTJgp3589m',
    topBarber: 'https://qrvg65pv1b.ufs.sh/f/LHINhZl0o3OP3DEIkgiXMqZ7i4fbLOYajok8QwS9F12JWn5u',
    expertBarber: 'https://qrvg65pv1b.ufs.sh/f/LHINhZl0o3OPRy4xa00JoTtldXjukfmPrbQYFyn5V9GM6SsE'
};
function BarbersSlider() {
    _s();
    const [barbers, setBarbers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BarbersSlider.useEffect": ()=>{
            fetch('/api/barbers').then({
                "BarbersSlider.useEffect": (res)=>res.json()
            }["BarbersSlider.useEffect"]).then({
                "BarbersSlider.useEffect": (data)=>{
                    setBarbers(data);
                    setLoading(false);
                }
            }["BarbersSlider.useEffect"]).catch({
                "BarbersSlider.useEffect": (err)=>{
                    console.error('Ошибка загрузки барберов:', err);
                    setLoading(false);
                }
            }["BarbersSlider.useEffect"]);
        }
    }["BarbersSlider.useEffect"], []);
    const getGradeIcon = (gradeName)=>{
        const name = gradeName?.toLowerCase() || '';
        if (name.includes('эксперт')) return GRADE_ICONS.expertBarber;
        if (name.includes('топ')) return GRADE_ICONS.topBarber;
        return GRADE_ICONS.barber;
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-6 justify-center py-8",
            children: [
                1,
                2,
                3
            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-72 h-80 bg-card rounded-lg animate-pulse"
                }, i, false, {
                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/barbers-slider.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/barbers-slider.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this);
    }
    if (barbers.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-muted-foreground py-8",
            children: "Барберы пока не добавлены"
        }, void 0, false, {
            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/barbers-slider.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                modules: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"]
                ],
                spaceBetween: 24,
                slidesPerView: 1,
                navigation: {
                    prevEl: '.barber-prev',
                    nextEl: '.barber-next'
                },
                pagination: {
                    clickable: true,
                    el: '.barber-pagination'
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    }
                },
                className: "!pb-12",
                children: barbers?.map?.((b, i)=>{
                    const color = b?.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length];
                    const initials = b?.name?.split(' ').map((n)=>n[0]).join('').substring(0, 2).toUpperCase() || 'Б';
                    const gradeIcon = b?.grade?.name ? getGradeIcon(b.grade.name) : null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-card rounded-lg p-8 text-center group hover:-translate-y-1 transition-all duration-300",
                            style: {
                                boxShadow: 'var(--shadow-md)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-24 h-24 mx-auto mb-6",
                                    children: [
                                        b?.photo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-24 h-24 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300 border-2 border-gray-200 dark:border-gray-700",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: b.photo,
                                                alt: b.name,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/barbers-slider.tsx",
                                                lineNumber: 89,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/barbers-slider.tsx",
                                            lineNumber: 88,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-24 h-24 ${color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-display text-2xl font-bold text-white",
                                                children: initials
                                            }, void 0, false, {
                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/barbers-slider.tsx",
                                                lineNumber: 97,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/barbers-slider.tsx",
                                            lineNumber: 96,
                                            columnNumber: 21
                                        }, this),
                                        gradeIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -bottom-1 -right-1 w-10 h-10 flex items-center justify-center drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: gradeIcon,
                                                alt: "Градация",
                                                className: "w-full h-full object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/barbers-slider.tsx",
                                                lineNumber: 103,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/barbers-slider.tsx",
                                            lineNumber: 102,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/barbers-slider.tsx",
                                    lineNumber: 86,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display text-xl font-semibold mb-1",
                                    children: b?.name ?? 'Барбер'
                                }, void 0, false, {
                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/barbers-slider.tsx",
                                    lineNumber: 112,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-primary text-sm font-medium mb-3",
                                    children: [
                                        b?.years ?? 0,
                                        " ",
                                        b?.years === 1 ? 'год' : (b?.years ?? 0) < 5 ? 'года' : 'лет',
                                        " в профессии"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/barbers-slider.tsx",
                                    lineNumber: 113,
                                    columnNumber: 17
                                }, this),
                                b?.grade?.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground text-sm font-medium uppercase tracking-wider",
                                    children: b.grade.name
                                }, void 0, false, {
                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/barbers-slider.tsx",
                                    lineNumber: 118,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/barbers-slider.tsx",
                            lineNumber: 84,
                            columnNumber: 15
                        }, this)
                    }, b.id, false, {
                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/barbers-slider.tsx",
                        lineNumber: 83,
                        columnNumber: 13
                    }, this);
                }) ?? []
            }, barbers.length, false, {
                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/barbers-slider.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "barber-prev absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-6 z-10 w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all",
                style: {
                    boxShadow: 'var(--shadow-md)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/barbers-slider.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/barbers-slider.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "barber-next absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-6 z-10 w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all",
                style: {
                    boxShadow: 'var(--shadow-md)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/barbers-slider.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/barbers-slider.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "barber-pagination flex justify-center gap-2 mt-6"
            }, void 0, false, {
                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/barbers-slider.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/components/barbers-slider.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(BarbersSlider, "VvQ42zQXhHZA687YDikHCd0B2h0=");
_c = BarbersSlider;
var _c;
__turbopack_context__.k.register(_c, "BarbersSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Users/vladislav/Desktop/nextjs_space/app/components/barbers-slider.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/app/components/barbers-slider.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=Users_vladislav_Desktop_nextjs_space_app_components_barbers-slider_tsx_0bwfmnk._.js.map