(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$components$2f$photo$2d$uploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/components/photo-uploader.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function AdminPage() {
    _s();
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('bookings');
    const [bookings, setBookings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [barbers, setBarbers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [services, setServices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [grades, setGrades] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingBarber, setEditingBarber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Убрали spec и initials из состояния для чистоты
    const [newBarber, setNewBarber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        years: 0,
        photo: '',
        gradeId: ''
    });
    const [editingService, setEditingService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [newService, setNewService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: ''
    });
    const [editingGrade, setEditingGrade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [newGrade, setNewGrade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: ''
    });
    const ADMIN_PASSWORD = 'boroda2024';
    const handleLogin = (e)=>{
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setIsAuthenticated(true);
            loadData();
        } else {
            alert('Неверный пароль');
        }
    };
    const loadData = async ()=>{
        setLoading(true);
        try {
            const [bookingsRes, barbersRes, servicesRes, gradesRes] = await Promise.all([
                fetch('/api/admin/bookings'),
                fetch('/api/admin/barbers'),
                fetch('/api/admin/services'),
                fetch('/api/admin/grades')
            ]);
            setBookings(await bookingsRes.json());
            setBarbers(await barbersRes.json());
            setServices(await servicesRes.json());
            setGrades(await gradesRes.json());
        } catch (error) {
            console.error('Ошибка загрузки данных:', error);
        } finally{
            setLoading(false);
        }
    };
    const handleDeleteBooking = async (id)=>{
        if (!confirm('Удалить эту запись?')) return;
        try {
            await fetch(`/api/admin/bookings/${id}`, {
                method: 'DELETE'
            });
            loadData();
        } catch (error) {
            console.error('Ошибка удаления:', error);
        }
    };
    // БАРБЕРЫ
    const handleAddBarber = async ()=>{
        if (!newBarber.name.trim()) return;
        try {
            const res = await fetch('/api/admin/barbers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...newBarber,
                    spec: '',
                    initials: ''
                })
            });
            if (!res.ok) {
                const errorText = await res.text();
                alert(`Ошибка: ${errorText || 'Не удалось добавить'}`);
                return;
            }
            setNewBarber({
                name: '',
                years: 0,
                photo: '',
                gradeId: ''
            });
            loadData();
        } catch (error) {
            console.error('Ошибка сети:', error);
            alert('Ошибка сети');
        }
    };
    const handleUpdateBarber = async ()=>{
        if (!editingBarber) return;
        try {
            const res = await fetch(`/api/admin/barbers/${editingBarber.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: editingBarber.name,
                    years: Number(editingBarber.years) || 0,
                    spec: '',
                    initials: '',
                    photo: editingBarber.photo || null,
                    gradeId: editingBarber.gradeId || null,
                    isActive: editingBarber.isActive ?? true
                })
            });
            if (!res.ok) {
                const errorText = await res.text();
                alert(`Ошибка: ${errorText || 'Не удалось сохранить'}`);
                return;
            }
            setEditingBarber(null);
            loadData();
        } catch (error) {
            console.error('Ошибка сети:', error);
            alert('Ошибка сети');
        }
    };
    const handleDeleteBarber = async (id)=>{
        if (!confirm('Удалить этого барбера?')) return;
        try {
            await fetch(`/api/admin/barbers/${id}`, {
                method: 'DELETE'
            });
            loadData();
        } catch (error) {
            console.error('Ошибка удаления:', error);
        }
    };
    // УСЛУГИ
    const handleAddService = async ()=>{
        if (!newService.name.trim()) return;
        try {
            await fetch('/api/admin/services', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newService)
            });
            setNewService({
                name: ''
            });
            loadData();
        } catch (error) {
            console.error('Ошибка добавления:', error);
        }
    };
    const handleUpdateService = async ()=>{
        if (!editingService) return;
        try {
            const res = await fetch(`/api/admin/services/${editingService.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: editingService.name,
                    isActive: editingService.isActive ?? true
                })
            });
            if (!res.ok) {
                const errorText = await res.text();
                alert(`Ошибка: ${errorText || 'Не удалось сохранить'}`);
                return;
            }
            setEditingService(null);
            loadData();
        } catch (error) {
            console.error('Ошибка сети:', error);
            alert('Ошибка сети');
        }
    };
    const handleDeleteService = async (id)=>{
        if (!confirm('Удалить эту услугу?')) return;
        try {
            await fetch(`/api/admin/services/${id}`, {
                method: 'DELETE'
            });
            loadData();
        } catch (error) {
            console.error('Ошибка удаления:', error);
        }
    };
    // ГРАДАЦИИ
    const handleAddGrade = async ()=>{
        if (!newGrade.name.trim()) return;
        try {
            const res = await fetch('/api/admin/grades', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newGrade)
            });
            if (!res.ok) {
                const errorText = await res.text();
                alert(`Ошибка: ${errorText || 'Не удалось добавить'}`);
                return;
            }
            setNewGrade({
                name: ''
            });
            loadData();
        } catch (error) {
            console.error('Ошибка добавления:', error);
        }
    };
    const handleUpdateGrade = async ()=>{
        if (!editingGrade) return;
        try {
            const res = await fetch(`/api/admin/grades/${editingGrade.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: editingGrade.name,
                    services: editingGrade.gradeServices?.map((gs)=>({
                            id: gs.serviceId,
                            price: gs.price,
                            isActive: gs.isActive
                        })) || []
                })
            });
            if (!res.ok) {
                const errorText = await res.text();
                alert(`Ошибка: ${errorText || 'Не удалось сохранить'}`);
                return;
            }
            setEditingGrade(null);
            loadData();
        } catch (error) {
            console.error('Ошибка сети:', error);
            alert('Ошибка сети');
        }
    };
    const handleDeleteGrade = async (id)=>{
        if (!confirm('Удалить эту градацию?')) return;
        try {
            await fetch(`/api/admin/grades/${id}`, {
                method: 'DELETE'
            });
            loadData();
        } catch (error) {
            console.error('Ошибка удаления:', error);
        }
    };
    const toggleGradeService = (grade, serviceId)=>{
        const updatedGrade = {
            ...grade
        };
        const serviceIndex = updatedGrade.gradeServices.findIndex((gs)=>gs.serviceId === serviceId);
        if (serviceIndex === -1) {
            updatedGrade.gradeServices = [
                ...updatedGrade.gradeServices || [],
                {
                    serviceId,
                    price: 0,
                    isActive: true
                }
            ];
        } else {
            updatedGrade.gradeServices[serviceIndex].isActive = !updatedGrade.gradeServices[serviceIndex].isActive;
        }
        setEditingGrade(updatedGrade);
    };
    const updateGradeServicePrice = (grade, serviceId, price)=>{
        const updatedGrade = {
            ...grade
        };
        const serviceIndex = updatedGrade.gradeServices.findIndex((gs)=>gs.serviceId === serviceId);
        if (serviceIndex !== -1) {
            updatedGrade.gradeServices[serviceIndex].price = price;
        }
        setEditingGrade(updatedGrade);
    };
    if (!isAuthenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-900 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-white mb-6 text-center",
                        children: "Админ-панель"
                    }, void 0, false, {
                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                        lineNumber: 265,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleLogin,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "password",
                                value: password,
                                onChange: (e)=>setPassword(e.target.value),
                                placeholder: "Введите пароль",
                                className: "w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            }, void 0, false, {
                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                lineNumber: 267,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition",
                                children: "Войти"
                            }, void 0, false, {
                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                lineNumber: 268,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                        lineNumber: 266,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                lineNumber: 264,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
            lineNumber: 263,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-900 text-white p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold",
                            children: "Админ-панель Boroda Barbershop"
                        }, void 0, false, {
                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsAuthenticated(false),
                            className: "flex items-center gap-2 text-gray-400 hover:text-white transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                    lineNumber: 281,
                                    columnNumber: 13
                                }, this),
                                " Выйти"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                            lineNumber: 280,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                    lineNumber: 278,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4 mb-8 border-b border-gray-700 flex-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('bookings'),
                            className: `px-6 py-3 font-semibold transition ${activeTab === 'bookings' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400 hover:text-white'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                    className: "inline w-5 h-5 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, this),
                                " Записи"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                            lineNumber: 286,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('barbers'),
                            className: `px-6 py-3 font-semibold transition ${activeTab === 'barbers' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400 hover:text-white'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                    className: "inline w-5 h-5 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                    lineNumber: 290,
                                    columnNumber: 13
                                }, this),
                                " Барберы"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                            lineNumber: 289,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('services'),
                            className: `px-6 py-3 font-semibold transition ${activeTab === 'services' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400 hover:text-white'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                    className: "inline w-5 h-5 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this),
                                " Услуги"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                            lineNumber: 292,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('grades'),
                            className: `px-6 py-3 font-semibold transition ${activeTab === 'grades' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400 hover:text-white'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                    className: "inline w-5 h-5 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                    lineNumber: 296,
                                    columnNumber: 13
                                }, this),
                                " Градации"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                            lineNumber: 295,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                    lineNumber: 285,
                    columnNumber: 9
                }, this),
                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                        lineNumber: 301,
                        columnNumber: 46
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                    lineNumber: 301,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        activeTab === 'bookings' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-800 rounded-lg p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold mb-4",
                                    children: [
                                        "Все записи (",
                                        bookings.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                    lineNumber: 306,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-b border-gray-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left py-3 px-4",
                                                            children: "Дата"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                            lineNumber: 311,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left py-3 px-4",
                                                            children: "Время"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                            lineNumber: 312,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left py-3 px-4",
                                                            children: "Барбер"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                            lineNumber: 313,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left py-3 px-4",
                                                            children: "Клиент"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left py-3 px-4",
                                                            children: "Телефон"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                            lineNumber: 315,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left py-3 px-4",
                                                            children: "Услуга"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                            lineNumber: 316,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left py-3 px-4",
                                                            children: "Действия"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                            lineNumber: 317,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                lineNumber: 309,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: bookings.map((booking)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "border-b border-gray-700 hover:bg-gray-750",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-4",
                                                                children: booking.date
                                                            }, void 0, false, {
                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                lineNumber: 323,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-4",
                                                                children: booking.time
                                                            }, void 0, false, {
                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                lineNumber: 324,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-4",
                                                                children: booking.barber || 'Любой'
                                                            }, void 0, false, {
                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                lineNumber: 325,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-4",
                                                                children: booking.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                lineNumber: 326,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-4",
                                                                children: booking.phone
                                                            }, void 0, false, {
                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                lineNumber: 327,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-4",
                                                                children: booking.service
                                                            }, void 0, false, {
                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                lineNumber: 328,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleDeleteBooking(booking.id),
                                                                    className: "text-red-500 hover:text-red-400",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                        lineNumber: 330,
                                                                        columnNumber: 129
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                    lineNumber: 330,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, booking.id, true, {
                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                lineNumber: 320,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                        lineNumber: 308,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                    lineNumber: 307,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                            lineNumber: 305,
                            columnNumber: 15
                        }, this),
                        activeTab === 'barbers' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-800 rounded-lg p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold mb-4",
                                    children: [
                                        "Барберы (",
                                        barbers.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                    lineNumber: 342,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 p-4 bg-gray-700 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold mb-3",
                                            children: "Добавить барбера"
                                        }, void 0, false, {
                                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                            lineNumber: 345,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Имя",
                                                    value: newBarber.name,
                                                    onChange: (e)=>setNewBarber({
                                                            ...newBarber,
                                                            name: e.target.value
                                                        }),
                                                    className: "px-3 py-2 bg-gray-600 rounded text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    placeholder: "Опыт (лет)",
                                                    value: newBarber.years,
                                                    onChange: (e)=>setNewBarber({
                                                            ...newBarber,
                                                            years: parseInt(e.target.value) || 0
                                                        }),
                                                    className: "px-3 py-2 bg-gray-600 rounded text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: newBarber.gradeId,
                                                    onChange: (e)=>setNewBarber({
                                                            ...newBarber,
                                                            gradeId: e.target.value
                                                        }),
                                                    className: "px-3 py-2 bg-gray-600 rounded text-white",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Выберите градацию"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                            lineNumber: 350,
                                                            columnNumber: 23
                                                        }, this),
                                                        grades.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: g.id,
                                                                children: g.name
                                                            }, g.id, false, {
                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                lineNumber: 351,
                                                                columnNumber: 42
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                            lineNumber: 346,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium mb-2 text-gray-300",
                                                    children: "Фото"
                                                }, void 0, false, {
                                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$components$2f$photo$2d$uploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    currentPhoto: newBarber.photo,
                                                    onUploadComplete: (url)=>setNewBarber({
                                                            ...newBarber,
                                                            photo: url
                                                        }),
                                                    label: "Выбрать фото"
                                                }, void 0, false, {
                                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                            lineNumber: 355,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleAddBarber,
                                            className: "mt-4 bg-green-600 px-4 py-2 rounded font-semibold hover:bg-green-700 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 21
                                                }, this),
                                                " Добавить"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                            lineNumber: 364,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                    lineNumber: 344,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                    children: barbers.map((barber)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-700 p-4 rounded-lg",
                                            children: editingBarber?.id === barber.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: editingBarber.name,
                                                        onChange: (e)=>setEditingBarber({
                                                                ...editingBarber,
                                                                name: e.target.value
                                                            }),
                                                        className: "w-full px-3 py-2 bg-gray-600 rounded text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: editingBarber.years,
                                                        onChange: (e)=>setEditingBarber({
                                                                ...editingBarber,
                                                                years: parseInt(e.target.value) || 0
                                                            }),
                                                        className: "w-full px-3 py-2 bg-gray-600 rounded text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                        lineNumber: 375,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: editingBarber.gradeId || '',
                                                        onChange: (e)=>setEditingBarber({
                                                                ...editingBarber,
                                                                gradeId: e.target.value
                                                            }),
                                                        className: "w-full px-3 py-2 bg-gray-600 rounded text-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Выберите градацию"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                lineNumber: 377,
                                                                columnNumber: 29
                                                            }, this),
                                                            grades.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: g.id,
                                                                    children: g.name
                                                                }, g.id, false, {
                                                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                    lineNumber: 378,
                                                                    columnNumber: 48
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                        lineNumber: 376,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-xs font-medium mb-1 text-gray-300",
                                                                children: "Заменить фото"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                lineNumber: 382,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$components$2f$photo$2d$uploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                currentPhoto: editingBarber.photo,
                                                                onUploadComplete: (url)=>setEditingBarber({
                                                                        ...editingBarber,
                                                                        photo: url
                                                                    }),
                                                                label: "Выбрать новое фото"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                lineNumber: 383,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                        lineNumber: 381,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2 pt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: handleUpdateBarber,
                                                                className: "bg-blue-600 px-3 py-1.5 rounded text-sm flex items-center gap-1 hover:bg-blue-700",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                        lineNumber: 391,
                                                                        columnNumber: 160
                                                                    }, this),
                                                                    " Сохранить"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                lineNumber: 391,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setEditingBarber(null),
                                                                className: "bg-gray-600 px-3 py-1.5 rounded text-sm flex items-center gap-1 hover:bg-gray-500",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                        lineNumber: 392,
                                                                        columnNumber: 170
                                                                    }, this),
                                                                    " Отмена"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                lineNumber: 392,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                lineNumber: 373,
                                                columnNumber: 25
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-4",
                                                        children: [
                                                            barber.photo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: barber.photo,
                                                                alt: barber.name,
                                                                className: "w-16 h-16 object-cover rounded-full border-2 border-gray-600 flex-shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                lineNumber: 399,
                                                                columnNumber: 31
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 bg-primary`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-display text-xl font-bold text-white",
                                                                    children: barber.name.split(' ').map((n)=>n[0]).join('')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                    lineNumber: 402,
                                                                    columnNumber: 33
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                lineNumber: 401,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-semibold text-lg truncate",
                                                                        children: barber.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                        lineNumber: 406,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-400 text-sm",
                                                                        children: [
                                                                            "Опыт: ",
                                                                            barber.years,
                                                                            " лет"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                        lineNumber: 407,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    barber.grade && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-primary text-xs mt-1 font-medium",
                                                                        children: barber.grade.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                        lineNumber: 408,
                                                                        columnNumber: 48
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                lineNumber: 405,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-3 mt-4 pt-3 border-t border-gray-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setEditingBarber(barber),
                                                                className: "text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                        lineNumber: 412,
                                                                        columnNumber: 156
                                                                    }, this),
                                                                    " Изменить"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                lineNumber: 412,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleDeleteBarber(barber.id),
                                                                className: "text-red-400 hover:text-red-300 flex items-center gap-1 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                        lineNumber: 413,
                                                                        columnNumber: 159
                                                                    }, this),
                                                                    " Удалить"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                lineNumber: 413,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                lineNumber: 396,
                                                columnNumber: 25
                                            }, this)
                                        }, barber.id, false, {
                                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                            lineNumber: 371,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                    lineNumber: 369,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                            lineNumber: 341,
                            columnNumber: 15
                        }, this),
                        activeTab === 'services' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-800 rounded-lg p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold mb-4",
                                    children: [
                                        "Услуги (",
                                        services.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                    lineNumber: 425,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 p-4 bg-gray-700 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold mb-3",
                                            children: "Добавить услугу"
                                        }, void 0, false, {
                                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                            lineNumber: 427,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Название услуги",
                                                    value: newService.name,
                                                    onChange: (e)=>setNewService({
                                                            name: e.target.value
                                                        }),
                                                    className: "flex-1 px-3 py-2 bg-gray-600 rounded text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                    lineNumber: 429,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleAddService,
                                                    className: "bg-green-600 px-4 py-2 rounded font-semibold hover:bg-green-700 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                            lineNumber: 431,
                                                            columnNumber: 23
                                                        }, this),
                                                        " Добавить"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                    lineNumber: 430,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                            lineNumber: 428,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                    lineNumber: 426,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                    children: services.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-700 p-4 rounded-lg",
                                            children: editingService?.id === service.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: editingService.name,
                                                        onChange: (e)=>setEditingService({
                                                                ...editingService,
                                                                name: e.target.value
                                                            }),
                                                        className: "w-full px-3 py-2 bg-gray-600 rounded text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                        lineNumber: 440,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: handleUpdateService,
                                                                className: "bg-blue-600 px-3 py-1.5 rounded text-sm flex items-center gap-1 hover:bg-blue-700",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                        lineNumber: 442,
                                                                        columnNumber: 161
                                                                    }, this),
                                                                    " Сохранить"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                lineNumber: 442,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setEditingService(null),
                                                                className: "bg-gray-600 px-3 py-1.5 rounded text-sm flex items-center gap-1 hover:bg-gray-500",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                        lineNumber: 443,
                                                                        columnNumber: 171
                                                                    }, this),
                                                                    " Отмена"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                lineNumber: 443,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                        lineNumber: 441,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                lineNumber: 439,
                                                columnNumber: 25
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-lg",
                                                        children: service.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                        lineNumber: 448,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-3 mt-3 pt-3 border-t border-gray-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setEditingService(service),
                                                                className: "text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                        lineNumber: 450,
                                                                        columnNumber: 158
                                                                    }, this),
                                                                    " Изменить"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                lineNumber: 450,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleDeleteService(service.id),
                                                                className: "text-red-400 hover:text-red-300 flex items-center gap-1 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                        lineNumber: 451,
                                                                        columnNumber: 161
                                                                    }, this),
                                                                    " Удалить"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                lineNumber: 451,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                        lineNumber: 449,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                lineNumber: 447,
                                                columnNumber: 25
                                            }, this)
                                        }, service.id, false, {
                                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                            lineNumber: 437,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                    lineNumber: 435,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                            lineNumber: 424,
                            columnNumber: 15
                        }, this),
                        activeTab === 'grades' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-800 rounded-lg p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold mb-4",
                                    children: [
                                        "Градации (",
                                        grades.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                    lineNumber: 463,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 p-4 bg-gray-700 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold mb-3",
                                            children: "Добавить градацию"
                                        }, void 0, false, {
                                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                            lineNumber: 465,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Название градации",
                                                    value: newGrade.name,
                                                    onChange: (e)=>setNewGrade({
                                                            name: e.target.value
                                                        }),
                                                    className: "flex-1 px-3 py-2 bg-gray-600 rounded text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                    lineNumber: 467,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleAddGrade,
                                                    className: "bg-green-600 px-4 py-2 rounded font-semibold hover:bg-green-700 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                            lineNumber: 469,
                                                            columnNumber: 23
                                                        }, this),
                                                        " Добавить"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                    lineNumber: 468,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                            lineNumber: 466,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                    lineNumber: 464,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: grades.map((grade)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-700 p-4 rounded-lg",
                                            children: editingGrade?.id === grade.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: editingGrade.name,
                                                        onChange: (e)=>setEditingGrade({
                                                                ...editingGrade,
                                                                name: e.target.value
                                                            }),
                                                        className: "w-full px-3 py-2 bg-gray-600 rounded text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                        lineNumber: 478,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-medium mb-2",
                                                                children: "Услуги и цены:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                lineNumber: 480,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: services.map((service)=>{
                                                                    const gradeService = editingGrade.gradeServices?.find((gs)=>gs.serviceId === service.id);
                                                                    const isActive = gradeService?.isActive || false;
                                                                    const price = gradeService?.price || 0;
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3 bg-gray-600 p-2 rounded",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "checkbox",
                                                                                checked: isActive,
                                                                                onChange: ()=>toggleGradeService(editingGrade, service.id),
                                                                                className: "w-4 h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                                lineNumber: 489,
                                                                                columnNumber: 37
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "flex-1",
                                                                                children: service.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                                lineNumber: 490,
                                                                                columnNumber: 37
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "number",
                                                                                value: price,
                                                                                onChange: (e)=>updateGradeServicePrice(editingGrade, service.id, parseInt(e.target.value) || 0),
                                                                                className: "w-24 px-2 py-1 bg-gray-700 rounded text-white text-sm",
                                                                                placeholder: "Цена"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                                lineNumber: 491,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        ]
                                                                    }, service.id, true, {
                                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                        lineNumber: 488,
                                                                        columnNumber: 35
                                                                    }, this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                lineNumber: 481,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                        lineNumber: 479,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: handleUpdateGrade,
                                                                className: "bg-blue-600 px-3 py-1.5 rounded text-sm flex items-center gap-1 hover:bg-blue-700",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                        lineNumber: 498,
                                                                        columnNumber: 159
                                                                    }, this),
                                                                    " Сохранить"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                lineNumber: 498,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setEditingGrade(null),
                                                                className: "bg-gray-600 px-3 py-1.5 rounded text-sm flex items-center gap-1 hover:bg-gray-500",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                        lineNumber: 499,
                                                                        columnNumber: 169
                                                                    }, this),
                                                                    " Отмена"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                lineNumber: 499,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                        lineNumber: 497,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                lineNumber: 477,
                                                columnNumber: 25
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-semibold text-lg",
                                                                    children: grade.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                    lineNumber: 506,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-400 text-sm",
                                                                    children: [
                                                                        "Барберов: ",
                                                                        grade._count?.barbers || 0
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                    lineNumber: 507,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-400 text-sm",
                                                                    children: [
                                                                        "Услуг: ",
                                                                        grade.gradeServices?.filter((gs)=>gs.isActive).length || 0
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                    lineNumber: 508,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                            lineNumber: 505,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setEditingGrade(grade),
                                                                    className: "text-blue-400 hover:text-blue-300",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                        lineNumber: 511,
                                                                        columnNumber: 124
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                    lineNumber: 511,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleDeleteGrade(grade.id),
                                                                    className: "text-red-400 hover:text-red-300",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                        lineNumber: 512,
                                                                        columnNumber: 127
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                                    lineNumber: 512,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                            lineNumber: 510,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                    lineNumber: 504,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                                lineNumber: 503,
                                                columnNumber: 25
                                            }, this)
                                        }, grade.id, false, {
                                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                            lineNumber: 475,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                                    lineNumber: 473,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                            lineNumber: 462,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
                    lineNumber: 303,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
            lineNumber: 277,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/app/admin/page.tsx",
        lineNumber: 276,
        columnNumber: 5
    }, this);
}
_s(AdminPage, "HGe4X2lww43OBDpQy1sD9P4exj0=");
_c = AdminPage;
var _c;
__turbopack_context__.k.register(_c, "AdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Users/vladislav/Desktop/nextjs_space/components/photo-uploader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PhotoUploader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$lib$2f$uploadthing$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/lib/uploadthing/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function PhotoUploader({ onUploadComplete, currentPhoto, label = 'Загрузить фото' }) {
    _s();
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentPhoto || null);
    const { startUpload } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$lib$2f$uploadthing$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUploadThing"])("barberPhoto", {
        onClientUploadComplete: {
            "PhotoUploader.useUploadThing": (res)=>{
                if (res && res[0]) {
                    const url = res[0].url;
                    setPreview(url);
                    onUploadComplete(url);
                    setIsUploading(false);
                    alert('✅ Фото успешно загружено!');
                }
            }
        }["PhotoUploader.useUploadThing"],
        onUploadError: {
            "PhotoUploader.useUploadThing": (error)=>{
                console.error('❌ Ошибка загрузки:', error);
                alert('❌ Ошибка загрузки фото: ' + error.message);
                setIsUploading(false);
            }
        }["PhotoUploader.useUploadThing"],
        onUploadBegin: {
            "PhotoUploader.useUploadThing": ()=>{
                setIsUploading(true);
            }
        }["PhotoUploader.useUploadThing"]
    });
    const handleFileChange = async (e)=>{
        const files = e.target.files;
        if (files && files.length > 0) {
            await startUpload(Array.from(files));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            preview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-32 h-32 mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: preview,
                    alt: "Превью",
                    className: "w-full h-full object-cover rounded-full border-2 border-primary"
                }, void 0, false, {
                    fileName: "[project]/Users/vladislav/Desktop/nextjs_space/components/photo-uploader.tsx",
                    lineNumber: 47,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/components/photo-uploader.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded font-medium text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        children: [
                            isUploading ? '⏳ Загрузка...' : label,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                accept: "image/*",
                                onChange: handleFileChange,
                                disabled: isUploading,
                                className: "hidden"
                            }, void 0, false, {
                                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/components/photo-uploader.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/components/photo-uploader.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    isUploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground",
                        children: "Загрузка фото..."
                    }, void 0, false, {
                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/components/photo-uploader.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this),
                    preview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            setPreview(null);
                            onUploadComplete('');
                        },
                        className: "text-xs text-red-500 hover:text-red-400",
                        children: "Удалить фото"
                    }, void 0, false, {
                        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/components/photo-uploader.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Users/vladislav/Desktop/nextjs_space/components/photo-uploader.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Users/vladislav/Desktop/nextjs_space/components/photo-uploader.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(PhotoUploader, "oGIHKljZaiyxkn7lM4RYdMWctGk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$lib$2f$uploadthing$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUploadThing"]
    ];
});
_c = PhotoUploader;
var _c;
__turbopack_context__.k.register(_c, "PhotoUploader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Users/vladislav/Desktop/nextjs_space/lib/uploadthing/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "uploadFiles",
    ()=>uploadFiles,
    "useUploadThing",
    ()=>useUploadThing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f40$uploadthing$2f$react$2f$dist$2f$use$2d$uploadthing$2d$pxkJ3LFs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/vladislav/Desktop/nextjs_space/node_modules/@uploadthing/react/dist/use-uploadthing-pxkJ3LFs.js [app-client] (ecmascript)");
;
const { useUploadThing, uploadFiles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$vladislav$2f$Desktop$2f$nextjs_space$2f$node_modules$2f40$uploadthing$2f$react$2f$dist$2f$use$2d$uploadthing$2d$pxkJ3LFs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateReactHelpers"])();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Users_vladislav_Desktop_nextjs_space_17igs-_._.js.map