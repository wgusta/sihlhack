(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/sim3d/hooks/useGuidedCamera.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGuidedCamera",
    ()=>useGuidedCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function useGuidedCamera({ challengeId, focusPosition, freezeUntil, reducedMotion }) {
    _s();
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const orbit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const viewPreset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useGuidedCamera.useMemo[viewPreset]": ()=>{
            if (challengeId === 'sensor-logic') {
                return {
                    center: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-0.9, 0.5, -0.35),
                    radius: 7.8,
                    height: 3.25,
                    speed: 0.12,
                    angle: 0.55
                };
            }
            if (challengeId === 'safety-coordination') {
                return {
                    center: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1.9, 0.55, -1.1),
                    radius: 5.6,
                    height: 2.7,
                    speed: 0.08,
                    angle: -0.95
                };
            }
            return {
                center: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0.4, 0.45, -0.65),
                radius: 7.4,
                height: 2.85,
                speed: 0.22,
                angle: 0.35
            };
        }
    }["useGuidedCamera.useMemo[viewPreset]"], [
        challengeId
    ]);
    const focusTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useGuidedCamera.useMemo[focusTarget]": ()=>focusPosition ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...focusPosition) : null
    }["useGuidedCamera.useMemo[focusTarget]"], [
        focusPosition
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "useGuidedCamera.useFrame": (state, delta)=>{
            if (!reducedMotion && Date.now() > freezeUntil) {
                orbit.current += delta * viewPreset.speed;
            }
            let desiredPosition;
            let lookAtTarget;
            if (focusTarget) {
                desiredPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](focusTarget.x + 2.8, focusTarget.y + 1.9, focusTarget.z + 3.2);
                lookAtTarget = focusTarget;
            } else {
                const radius = reducedMotion ? viewPreset.radius - 0.45 : viewPreset.radius;
                const angle = reducedMotion ? viewPreset.angle : orbit.current + viewPreset.angle;
                desiredPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](Math.cos(angle) * radius + viewPreset.center.x, viewPreset.height, Math.sin(angle) * radius + viewPreset.center.z);
                lookAtTarget = viewPreset.center;
            }
            camera.position.lerp(desiredPosition, 0.07);
            camera.lookAt(lookAtTarget);
            if (typeof camera.updateProjectionMatrix === 'function') {
                camera.updateProjectionMatrix();
            }
            state.invalidate();
        }
    }["useGuidedCamera.useFrame"]);
}
_s(useGuidedCamera, "GoWU05YJpBoErb3SXaAQEKeh4pw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sim3d/hooks/useReducedMotion.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReducedMotion",
    ()=>useReducedMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useReducedMotion() {
    _s();
    const [reduced, setReduced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useReducedMotion.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") === 'undefined' || typeof window.matchMedia !== 'function') {
                return;
            }
            const media = window.matchMedia('(prefers-reduced-motion: reduce)');
            const handle = {
                "useReducedMotion.useEffect.handle": ()=>setReduced(media.matches)
            }["useReducedMotion.useEffect.handle"];
            handle();
            media.addEventListener('change', handle);
            return ({
                "useReducedMotion.useEffect": ()=>media.removeEventListener('change', handle)
            })["useReducedMotion.useEffect"];
        }
    }["useReducedMotion.useEffect"], []);
    return reduced;
}
_s(useReducedMotion, "PAG4zvF6+IsK2eHB7xTPE8NJ12w=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sim3d/nodes/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nodeColor",
    ()=>nodeColor
]);
'use client';
function nodeColor(status) {
    if (status === 'critical') {
        return '#ef4444';
    }
    if (status === 'warning') {
        return '#f59e0b';
    }
    if (status === 'active') {
        return '#22c55e';
    }
    return '#64748b';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sim3d/nodes/SolarNode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SolarNode",
    ()=>SolarNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sim3d/nodes/types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function SolarNode({ node, position, selected, onHover, onSelect }) {
    _s();
    const sunRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "SolarNode.useFrame": (_state, delta)=>{
            if (sunRef.current) {
                sunRef.current.scale.setScalar(1 + node.pulse * 0.2);
                sunRef.current.rotation.y += delta * 0.45;
            }
            if (panelRef.current) {
                panelRef.current.rotation.z = Math.sin(Date.now() / 700) * 0.02;
            }
        }
    }["SolarNode.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: position,
        onPointerOver: ()=>onHover(node.id),
        onPointerOut: ()=>onHover(null),
        onClick: ()=>onSelect(node.id),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: sunRef,
                position: [
                    0,
                    1.15,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.33,
                            24,
                            24
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/SolarNode.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#facc15",
                        emissive: "#f59e0b",
                        emissiveIntensity: 0.25 + node.pulse * 0.8
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/SolarNode.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/nodes/SolarNode.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: panelRef,
                rotation: [
                    -0.9,
                    0,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            1.5,
                            0.1,
                            1
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/SolarNode.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#0f172a",
                        metalness: 0.5,
                        roughness: 0.4
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/SolarNode.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/nodes/SolarNode.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    -0.55,
                    0
                ],
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.12,
                            0.12,
                            1,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/SolarNode.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeColor"])(node.status)
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/SolarNode.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/nodes/SolarNode.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            selected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                distanceFactor: 10,
                position: [
                    0,
                    1.9,
                    0
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded bg-black/80 px-2 py-1 font-mono text-[11px] text-white",
                    "data-feature": "sim3d.node.solar",
                    children: [
                        node.label,
                        ": ",
                        node.value,
                        node.unit || ''
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sim3d/nodes/SolarNode.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sim3d/nodes/SolarNode.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/sim3d/nodes/SolarNode.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(SolarNode, "bxzb4cu9RhfdExRWCzIQ0Jejq6g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = SolarNode;
var _c;
__turbopack_context__.k.register(_c, "SolarNode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sim3d/nodes/HouseNode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HouseNode",
    ()=>HouseNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sim3d/nodes/types.ts [app-client] (ecmascript)");
'use client';
;
;
;
function HouseNode({ node, position, selected, onHover, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: position,
        onPointerOver: ()=>onHover(node.id),
        onPointerOut: ()=>onHover(null),
        onClick: ()=>onSelect(node.id),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.35,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            1.3,
                            0.8,
                            1.1
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/HouseNode.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#f5f5f4"
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/HouseNode.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/nodes/HouseNode.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.95,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("coneGeometry", {
                        args: [
                            0.95,
                            0.65,
                            4
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/HouseNode.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#9a3412"
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/HouseNode.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/nodes/HouseNode.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    -0.4,
                    0
                ],
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.1,
                            0.1,
                            0.5,
                            12
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/HouseNode.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeColor"])(node.status)
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/HouseNode.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/nodes/HouseNode.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            selected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                distanceFactor: 10,
                position: [
                    0,
                    1.7,
                    0
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded bg-black/80 px-2 py-1 font-mono text-[11px] text-white",
                    "data-feature": "sim3d.node.house",
                    children: [
                        node.label,
                        ": ",
                        node.value,
                        node.unit || ''
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sim3d/nodes/HouseNode.tsx",
                    lineNumber: 28,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sim3d/nodes/HouseNode.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/sim3d/nodes/HouseNode.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = HouseNode;
var _c;
__turbopack_context__.k.register(_c, "HouseNode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sim3d/nodes/BatteryNode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BatteryNode",
    ()=>BatteryNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sim3d/nodes/types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function BatteryNode({ node, position, selected, onHover, onSelect }) {
    _s();
    const fillRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ratio = Math.max(0.05, Math.min(1, node.value / 100));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "BatteryNode.useFrame": ()=>{
            if (fillRef.current) {
                fillRef.current.scale.y += (ratio - fillRef.current.scale.y) * 0.12;
                fillRef.current.position.y = -0.4 + fillRef.current.scale.y * 0.8 * 0.5;
            }
        }
    }["BatteryNode.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: position,
        onPointerOver: ()=>onHover(node.id),
        onPointerOut: ()=>onHover(null),
        onClick: ()=>onSelect(node.id),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            1.2,
                            1.6,
                            0.8
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/BatteryNode.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#0f172a",
                        roughness: 0.65,
                        metalness: 0.35
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/BatteryNode.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/nodes/BatteryNode.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: fillRef,
                position: [
                    0,
                    -0.15,
                    0.41
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            1.02,
                            1.28,
                            0.08
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/BatteryNode.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeColor"])(node.status),
                        emissive: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeColor"])(node.status),
                        emissiveIntensity: 0.12 + node.pulse * 0.45
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/BatteryNode.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/nodes/BatteryNode.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.95,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.35,
                            0.2,
                            0.35
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/BatteryNode.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#cbd5e1"
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/BatteryNode.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/nodes/BatteryNode.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            selected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                distanceFactor: 10,
                position: [
                    0,
                    1.55,
                    0
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded bg-black/80 px-2 py-1 font-mono text-[11px] text-white",
                    "data-feature": "sim3d.node.battery",
                    children: [
                        node.label,
                        ": ",
                        node.value,
                        node.unit || ''
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sim3d/nodes/BatteryNode.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sim3d/nodes/BatteryNode.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/sim3d/nodes/BatteryNode.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(BatteryNode, "tOJyfIyi2TE7H5FJi/GmuvT2dq8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = BatteryNode;
var _c;
__turbopack_context__.k.register(_c, "BatteryNode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sim3d/nodes/ComputeNode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComputeNode",
    ()=>ComputeNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sim3d/nodes/types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ComputeNode({ node, position, selected, onHover, onSelect }) {
    _s();
    const fanGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ComputeNode.useFrame": (_state, delta)=>{
            if (fanGroup.current) {
                fanGroup.current.rotation.z += delta * (1 + node.pulse * 3.2);
            }
        }
    }["ComputeNode.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: position,
        onPointerOver: ()=>onHover(node.id),
        onPointerOut: ()=>onHover(null),
        onClick: ()=>onSelect(node.id),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.2,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            1.7,
                            1.1,
                            1.3
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/ComputeNode.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#1f2937",
                        roughness: 0.5,
                        metalness: 0.4
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/ComputeNode.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/nodes/ComputeNode.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                ref: fanGroup,
                position: [
                    0,
                    0.2,
                    0.67
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.28,
                                    0.28,
                                    0.08,
                                    20
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/sim3d/nodes/ComputeNode.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeColor"])(node.status),
                                emissive: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeColor"])(node.status),
                                emissiveIntensity: 0.08 + node.pulse * 0.4
                            }, void 0, false, {
                                fileName: "[project]/components/sim3d/nodes/ComputeNode.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sim3d/nodes/ComputeNode.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        rotation: [
                            0,
                            0,
                            0
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                args: [
                                    0.55,
                                    0.05,
                                    0.06
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/sim3d/nodes/ComputeNode.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#e2e8f0"
                            }, void 0, false, {
                                fileName: "[project]/components/sim3d/nodes/ComputeNode.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sim3d/nodes/ComputeNode.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        rotation: [
                            0,
                            0,
                            Math.PI / 2
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                args: [
                                    0.55,
                                    0.05,
                                    0.06
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/sim3d/nodes/ComputeNode.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#e2e8f0"
                            }, void 0, false, {
                                fileName: "[project]/components/sim3d/nodes/ComputeNode.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sim3d/nodes/ComputeNode.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/nodes/ComputeNode.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            selected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                distanceFactor: 10,
                position: [
                    0,
                    1.4,
                    0
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded bg-black/80 px-2 py-1 font-mono text-[11px] text-white",
                    "data-feature": "sim3d.node.compute",
                    children: [
                        node.label,
                        ": ",
                        node.value,
                        node.unit || ''
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sim3d/nodes/ComputeNode.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sim3d/nodes/ComputeNode.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/sim3d/nodes/ComputeNode.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(ComputeNode, "i6MhvlLU2W93ZoCbPSAI/F+yzdE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = ComputeNode;
var _c;
__turbopack_context__.k.register(_c, "ComputeNode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sim3d/nodes/HeatingNode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeatingNode",
    ()=>HeatingNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sim3d/nodes/types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function HeatingNode({ node, position, selected, onHover, onSelect }) {
    _s();
    const ringRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "HeatingNode.useFrame": ()=>{
            if (ringRef.current) {
                const pulse = 1 + Math.sin(Date.now() / 350) * (0.04 + node.pulse * 0.08);
                ringRef.current.scale.setScalar(pulse);
                ringRef.current.rotation.y += 0.01;
            }
        }
    }["HeatingNode.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: position,
        onPointerOver: ()=>onHover(node.id),
        onPointerOut: ()=>onHover(null),
        onClick: ()=>onSelect(node.id),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.35,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.55,
                            0.55,
                            1.2,
                            18
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/HeatingNode.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#334155",
                        metalness: 0.25,
                        roughness: 0.6
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/HeatingNode.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/nodes/HeatingNode.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: ringRef,
                position: [
                    0,
                    1.05,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("torusGeometry", {
                        args: [
                            0.48,
                            0.1,
                            12,
                            26
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/HeatingNode.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeColor"])(node.status),
                        emissive: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeColor"])(node.status),
                        emissiveIntensity: 0.1 + node.pulse * 0.5
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/HeatingNode.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/nodes/HeatingNode.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            selected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                distanceFactor: 10,
                position: [
                    0,
                    1.7,
                    0
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded bg-black/80 px-2 py-1 font-mono text-[11px] text-white",
                    "data-feature": "sim3d.node.heating",
                    children: [
                        node.label,
                        ": ",
                        node.value,
                        node.unit || ''
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sim3d/nodes/HeatingNode.tsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sim3d/nodes/HeatingNode.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/sim3d/nodes/HeatingNode.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(HeatingNode, "p0omQiteSeSUymJDeC/FGrjwy8U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = HeatingNode;
var _c;
__turbopack_context__.k.register(_c, "HeatingNode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sim3d/nodes/GridNode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GridNode",
    ()=>GridNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sim3d/nodes/types.ts [app-client] (ecmascript)");
'use client';
;
;
;
function GridNode({ node, position, selected, onHover, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: position,
        onPointerOver: ()=>onHover(node.id),
        onPointerOut: ()=>onHover(null),
        onClick: ()=>onSelect(node.id),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.7,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.1,
                            0.1,
                            1.8,
                            12
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/GridNode.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#64748b"
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/GridNode.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/nodes/GridNode.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    1.55,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.8,
                            0.08,
                            0.08
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/GridNode.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#94a3b8"
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/GridNode.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/nodes/GridNode.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    1.28,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.65,
                            0.07,
                            0.07
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/GridNode.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#94a3b8"
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/GridNode.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/nodes/GridNode.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    -0.25,
                    0
                ],
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.15,
                            0.18,
                            0.35,
                            12
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/GridNode.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeColor"])(node.status)
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/nodes/GridNode.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/nodes/GridNode.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            selected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                distanceFactor: 10,
                position: [
                    0,
                    2.0,
                    0
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded bg-black/80 px-2 py-1 font-mono text-[11px] text-white",
                    "data-feature": "sim3d.node.grid",
                    children: [
                        node.label,
                        ": ",
                        node.value,
                        node.unit || ''
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sim3d/nodes/GridNode.tsx",
                    lineNumber: 32,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sim3d/nodes/GridNode.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/sim3d/nodes/GridNode.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = GridNode;
var _c;
__turbopack_context__.k.register(_c, "GridNode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sim3d/effects/FlowLinks.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowLinks",
    ()=>FlowLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function FlowLinks({ flows, nodePositions }) {
    _s();
    const orbs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const segments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FlowLinks.useMemo[segments]": ()=>{
            return flows.filter({
                "FlowLinks.useMemo[segments]": (flow)=>nodePositions[flow.from] && nodePositions[flow.to]
            }["FlowLinks.useMemo[segments]"]).map({
                "FlowLinks.useMemo[segments]": (flow)=>{
                    const from = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...nodePositions[flow.from]);
                    const to = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...nodePositions[flow.to]);
                    const mid = from.clone().lerp(to, 0.5);
                    mid.y += flow.type === 'heat' ? 0.9 : 0.45;
                    return {
                        flow,
                        points: [
                            from.toArray(),
                            mid.toArray(),
                            to.toArray()
                        ]
                    };
                }
            }["FlowLinks.useMemo[segments]"]);
        }
    }["FlowLinks.useMemo[segments]"], [
        flows,
        nodePositions
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "FlowLinks.useFrame": ({ clock })=>{
            const t = clock.getElapsedTime();
            segments.forEach({
                "FlowLinks.useFrame": (segment, index)=>{
                    const orb = orbs.current[index];
                    if (!orb) {
                        return;
                    }
                    const [a, b, c] = segment.points.map({
                        "FlowLinks.useFrame": (p)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...p)
                    }["FlowLinks.useFrame"]);
                    const phase = t * (0.28 + segment.flow.intensity * 0.9) % 1;
                    const ab = a.clone().lerp(b, phase);
                    const bc = b.clone().lerp(c, phase);
                    const point = ab.lerp(bc, phase);
                    orb.position.copy(point);
                    orb.visible = segment.flow.active;
                }
            }["FlowLinks.useFrame"]);
        }
    }["FlowLinks.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        "data-feature": "sim3d.flow.energy",
        children: segments.map((segment, index)=>{
            const color = flowColor(segment.flow.type);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                        points: segment.points,
                        color: color,
                        lineWidth: 1 + segment.flow.intensity * 1.3,
                        opacity: 0.18 + segment.flow.intensity * 0.6,
                        transparent: true
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/effects/FlowLinks.tsx",
                        lineNumber: 57,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        ref: (mesh)=>{
                            orbs.current[index] = mesh;
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                                args: [
                                    0.08,
                                    12,
                                    12
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/sim3d/effects/FlowLinks.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: color,
                                emissive: color,
                                emissiveIntensity: 0.35
                            }, void 0, false, {
                                fileName: "[project]/components/sim3d/effects/FlowLinks.tsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sim3d/effects/FlowLinks.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this)
                ]
            }, segment.flow.id, true, {
                fileName: "[project]/components/sim3d/effects/FlowLinks.tsx",
                lineNumber: 56,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/sim3d/effects/FlowLinks.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(FlowLinks, "vlFn7NzP2+3U8qUo7urmBB/ul4c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = FlowLinks;
function flowColor(type) {
    if (type === 'heat') {
        return '#fb7185';
    }
    if (type === 'data') {
        return '#38bdf8';
    }
    return '#86efac';
}
var _c;
__turbopack_context__.k.register(_c, "FlowLinks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sim3d/effects/StatusParticles.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusParticles",
    ()=>StatusParticles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Sparkles.js [app-client] (ecmascript)");
'use client';
;
;
function StatusParticles({ nodes, nodePositions, reducedMotion }) {
    if (reducedMotion) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        "data-feature": "sim3d.flow.status-particles",
        children: nodes.filter((node)=>node.status === 'warning' || node.status === 'critical').map((node)=>{
            const position = nodePositions[node.id];
            if (!position) {
                return null;
            }
            const isCritical = node.status === 'critical';
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sparkles"], {
                count: isCritical ? 24 : 14,
                scale: 1.9,
                size: isCritical ? 4 : 2.2,
                speed: isCritical ? 0.75 : 0.35,
                color: isCritical ? '#ef4444' : '#f59e0b',
                position: [
                    position[0],
                    position[1] + 0.8,
                    position[2]
                ]
            }, node.id, false, {
                fileName: "[project]/components/sim3d/effects/StatusParticles.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/sim3d/effects/StatusParticles.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = StatusParticles;
var _c;
__turbopack_context__.k.register(_c, "StatusParticles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sim3d/SimulationScene3D.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SimulationScene3D",
    ()=>SimulationScene3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Float.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$RoundedBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/RoundedBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/postprocessing/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$hooks$2f$useGuidedCamera$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sim3d/hooks/useGuidedCamera.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sim3d/hooks/useReducedMotion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$SolarNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sim3d/nodes/SolarNode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$HouseNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sim3d/nodes/HouseNode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$BatteryNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sim3d/nodes/BatteryNode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$ComputeNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sim3d/nodes/ComputeNode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$HeatingNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sim3d/nodes/HeatingNode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$GridNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sim3d/nodes/GridNode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$effects$2f$FlowLinks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sim3d/effects/FlowLinks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$effects$2f$StatusParticles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sim3d/effects/StatusParticles.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sim3d/nodes/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const BASE_NODE_POSITIONS = {
    solar: [
        -4.1,
        0.1,
        1.7
    ],
    grid: [
        -4.6,
        0.0,
        -1.8
    ],
    compute: [
        0,
        0.1,
        0
    ],
    battery: [
        0.2,
        0,
        2.1
    ],
    house: [
        4.0,
        0.1,
        1.4
    ],
    heating: [
        3.6,
        0,
        -1.6
    ],
    sensor: [
        -0.9,
        0.1,
        -2.1
    ],
    safety: [
        1.3,
        0.1,
        -2.2
    ]
};
const SCENE_THEME = {
    'sensor-logic': {
        sky: '#b8f0ff',
        fog: '#d3f7ff',
        ground: '#cbeed8',
        environment: 'sunset',
        ambient: 0.68,
        keyLight: 1.1,
        fillLight: 0.4
    },
    'safety-coordination': {
        sky: '#d3d7ea',
        fog: '#e3e7f4',
        ground: '#d6d9de',
        environment: 'city',
        ambient: 0.5,
        keyLight: 0.85,
        fillLight: 0.3
    },
    'grid-os': {
        sky: '#b7dcff',
        fog: '#d3e8ff',
        ground: '#c5e4b8',
        environment: 'dawn',
        ambient: 0.62,
        keyLight: 1.02,
        fillLight: 0.47
    }
};
const CHALLENGE_VISIBLE_NODES = {
    'sensor-logic': [
        'solar',
        'grid',
        'compute',
        'sensor'
    ],
    'safety-coordination': [
        'compute',
        'house',
        'heating',
        'safety'
    ],
    'grid-os': [
        'solar',
        'grid',
        'compute',
        'battery',
        'house',
        'heating'
    ]
};
function SimulationScene3D({ frame }) {
    _s();
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const lowPower = useLowPowerDevice();
    const [hoveredNode, setHoveredNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedNode, setSelectedNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [freezeUntil, setFreezeUntil] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const nodePositions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SimulationScene3D.useMemo[nodePositions]": ()=>getNodePositions(frame.challengeId)
    }["SimulationScene3D.useMemo[nodePositions]"], [
        frame.challengeId
    ]);
    const focusedPosition = selectedNode ? nodePositions[selectedNode] : null;
    const theme = SCENE_THEME[frame.challengeId];
    const selectedNodeState = frame.nodes.find((node)=>node.id === selectedNode) || null;
    const onNodeSelect = (id)=>{
        setSelectedNode(id);
        setFreezeUntil(Date.now() + 4000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[380px] w-full overflow-hidden rounded-xl border border-historic-sepia/25 bg-gradient-to-b from-slate-100 to-slate-200",
        "data-feature": "sim3d.scene.canvas",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            shadows: true,
            dpr: [
                1,
                1.5
            ],
            camera: {
                position: [
                    6.5,
                    3.2,
                    6.8
                ],
                fov: 44
            },
            gl: {
                antialias: true,
                powerPreference: lowPower ? 'low-power' : 'high-performance'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SceneContent, {
                    frame: frame,
                    theme: theme,
                    nodePositions: nodePositions,
                    reducedMotion: reducedMotion,
                    lowPower: lowPower,
                    hoveredNode: hoveredNode,
                    selectedNode: selectedNode,
                    selectedNodeState: selectedNodeState,
                    focusedPosition: focusedPosition,
                    freezeUntil: freezeUntil,
                    onNodeHover: setHoveredNode,
                    onNodeSelect: onNodeSelect
                }, void 0, false, {
                    fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                    lineNumber: 100,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
            lineNumber: 93,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_s(SimulationScene3D, "KrzrMeaRNsxGRPCbvur6Yhrvx3A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        useLowPowerDevice
    ];
});
_c = SimulationScene3D;
function SceneContent({ frame, theme, nodePositions, reducedMotion, lowPower, hoveredNode, selectedNode, selectedNodeState, focusedPosition, freezeUntil, onNodeHover, onNodeSelect }) {
    _s1();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$hooks$2f$useGuidedCamera$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGuidedCamera"])({
        challengeId: frame.challengeId,
        focusPosition: focusedPosition,
        freezeUntil,
        reducedMotion
    });
    const safety = frame.nodes.find((node)=>node.id === 'safety');
    const sensor = frame.nodes.find((node)=>node.id === 'sensor');
    const visibleNodes = CHALLENGE_VISIBLE_NODES[frame.challengeId];
    const visibleNodeSet = new Set(visibleNodes);
    const visibleFlows = frame.flows.filter((flow)=>visibleNodeSet.has(flow.from) && visibleNodeSet.has(flow.to));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("color", {
                attach: "background",
                args: [
                    theme.sky
                ]
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fog", {
                attach: "fog",
                args: [
                    theme.fog,
                    7,
                    26
                ]
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                intensity: theme.ambient
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                position: [
                    5,
                    9,
                    2
                ],
                intensity: theme.keyLight,
                castShadow: true,
                "shadow-mapSize-width": 1024,
                "shadow-mapSize-height": 1024
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                position: [
                    -6,
                    5,
                    -2
                ],
                intensity: theme.fillLight
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                preset: theme.environment
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                position: [
                    0,
                    -0.85,
                    0
                ],
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                        args: [
                            20,
                            14
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: theme.ground
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RuralBackdrop, {
                challengeId: frame.challengeId,
                reducedMotion: reducedMotion
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            visibleNodeSet.has('solar') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float"], {
                speed: reducedMotion ? 0 : 0.6,
                rotationIntensity: 0.03,
                floatIntensity: 0.06,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$SolarNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolarNode"], {
                    node: findNode(frame.nodes, 'solar'),
                    position: nodePositions.solar,
                    selected: selectedNode === 'solar' || hoveredNode === 'solar',
                    onHover: onNodeHover,
                    onSelect: onNodeSelect
                }, void 0, false, {
                    fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                    lineNumber: 173,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 172,
                columnNumber: 9
            }, this) : null,
            visibleNodeSet.has('grid') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$GridNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridNode"], {
                node: findNode(frame.nodes, 'grid'),
                position: nodePositions.grid,
                selected: selectedNode === 'grid' || hoveredNode === 'grid',
                onHover: onNodeHover,
                onSelect: onNodeSelect
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 184,
                columnNumber: 9
            }, this) : null,
            visibleNodeSet.has('compute') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$ComputeNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComputeNode"], {
                node: findNode(frame.nodes, 'compute'),
                position: nodePositions.compute,
                selected: selectedNode === 'compute' || hoveredNode === 'compute',
                onHover: onNodeHover,
                onSelect: onNodeSelect
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 194,
                columnNumber: 9
            }, this) : null,
            visibleNodeSet.has('battery') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$BatteryNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BatteryNode"], {
                node: findNode(frame.nodes, 'battery'),
                position: nodePositions.battery,
                selected: selectedNode === 'battery' || hoveredNode === 'battery',
                onHover: onNodeHover,
                onSelect: onNodeSelect
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 204,
                columnNumber: 9
            }, this) : null,
            visibleNodeSet.has('house') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$HouseNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HouseNode"], {
                node: findNode(frame.nodes, 'house'),
                position: nodePositions.house,
                selected: selectedNode === 'house' || hoveredNode === 'house',
                onHover: onNodeHover,
                onSelect: onNodeSelect
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 214,
                columnNumber: 9
            }, this) : null,
            visibleNodeSet.has('heating') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$HeatingNode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeatingNode"], {
                node: findNode(frame.nodes, 'heating'),
                position: nodePositions.heating,
                selected: selectedNode === 'heating' || hoveredNode === 'heating',
                onHover: onNodeHover,
                onSelect: onNodeSelect
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 224,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$effects$2f$FlowLinks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlowLinks"], {
                flows: visibleFlows,
                nodePositions: nodePositions
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$effects$2f$StatusParticles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusParticles"], {
                nodes: frame.nodes.filter((node)=>visibleNodeSet.has(node.id)),
                nodePositions: nodePositions,
                reducedMotion: reducedMotion
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            frame.challengeId === 'sensor-logic' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                position: [
                    0,
                    -0.22,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ringGeometry", {
                        args: [
                            1.4,
                            1.58,
                            40
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 238,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#22d3ee",
                        emissive: "#06b6d4",
                        emissiveIntensity: 0.2 + (sensor?.pulse || 0.2) * 0.45,
                        transparent: true,
                        opacity: 0.78
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 239,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 237,
                columnNumber: 9
            }, this) : null,
            frame.challengeId === 'safety-coordination' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: nodePositions.safety,
                "data-feature": "sim3d.node.safety-beacon",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0,
                            0.8,
                            0
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.12,
                                    0.12,
                                    1.6,
                                    12
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#334155"
                            }, void 0, false, {
                                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                                lineNumber: 247,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 245,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0,
                            1.75,
                            0
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                                args: [
                                    0.24,
                                    14,
                                    14
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                                lineNumber: 250,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeColor"])(safety?.status || 'active'),
                                emissive: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$nodes$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeColor"])(safety?.status || 'active'),
                                emissiveIntensity: 0.35 + (safety?.pulse || 0.3) * 0.7
                            }, void 0, false, {
                                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 249,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 244,
                columnNumber: 9
            }, this) : null,
            frame.challengeId === 'grid-os' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                "data-feature": "sim3d.flow.shedding-lane",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$RoundedBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBox"], {
                        args: [
                            6.8,
                            0.08,
                            0.6
                        ],
                        radius: 0.08,
                        position: [
                            0,
                            -0.35,
                            -2.7
                        ],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: "#1e3a8a",
                            emissive: "#3b82f6",
                            emissiveIntensity: 0.18
                        }, void 0, false, {
                            fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                            lineNumber: 263,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                        distanceFactor: 11,
                        position: [
                            0,
                            0.15,
                            -2.7
                        ],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded bg-black/70 px-2 py-1 font-mono text-[11px] text-sky-200",
                            "data-feature": "sim3d.mode-banner",
                            children: [
                                "Mode: ",
                                frame.mode
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                            lineNumber: 266,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 265,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 261,
                columnNumber: 9
            }, this) : null,
            hoveredNode || selectedNodeState ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                position: [
                    0,
                    2.75,
                    0
                ],
                distanceFactor: 12,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded bg-black/70 px-3 py-1.5 font-mono text-xs text-white",
                    "data-feature": "sim3d.node.tooltip",
                    children: [
                        (selectedNodeState || findNode(frame.nodes, hoveredNode || 'compute')).label,
                        ": ",
                        (selectedNodeState || findNode(frame.nodes, hoveredNode || 'compute')).value,
                        (selectedNodeState || findNode(frame.nodes, hoveredNode || 'compute')).unit || ''
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                    lineNumber: 275,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 274,
                columnNumber: 9
            }, this) : null,
            !reducedMotion && !lowPower ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectComposer"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bloom"], {
                    luminanceThreshold: 0.25,
                    luminanceSmoothing: 0.35,
                    intensity: 0.55
                }, void 0, false, {
                    fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                    lineNumber: 284,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 283,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FramePulse, {
                reducedMotion: reducedMotion
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 288,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s1(SceneContent, "1UWAKkEIz3Hjc00Ya26xfVHrJlQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$hooks$2f$useGuidedCamera$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGuidedCamera"]
    ];
});
_c1 = SceneContent;
function findNode(nodes, id) {
    const found = nodes.find((node)=>node.id === id);
    if (found) {
        return found;
    }
    return {
        id,
        label: id,
        health: 80,
        value: 0,
        status: 'idle',
        pulse: 0
    };
}
function FramePulse({ reducedMotion }) {
    _s2();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "FramePulse.useFrame": ({ clock, scene })=>{
            if (reducedMotion) {
                return;
            }
            const elapsed = clock.getElapsedTime();
            scene.rotation.y = Math.sin(elapsed * 0.08) * 0.02;
        }
    }["FramePulse.useFrame"]);
    return null;
}
_s2(FramePulse, "xC67171NPRcCAzsbrenetil66NI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c2 = FramePulse;
function useLowPowerDevice() {
    _s3();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useLowPowerDevice.useMemo": ()=>{
            if (typeof navigator === 'undefined') {
                return false;
            }
            const cores = navigator.hardwareConcurrency || 8;
            const memory = navigator.deviceMemory || 8;
            return cores <= 4 || memory <= 4;
        }
    }["useLowPowerDevice.useMemo"], []);
}
_s3(useLowPowerDevice, "nwk+m61qLgjDVUp4IGV/072DDN4=");
function getNodePositions(challengeId) {
    if (challengeId === 'sensor-logic') {
        return {
            ...BASE_NODE_POSITIONS,
            solar: [
                -4.8,
                0.1,
                1.95
            ],
            grid: [
                -4.9,
                0.0,
                -1.95
            ],
            sensor: [
                -1.5,
                0.1,
                -1.45
            ],
            compute: [
                1.15,
                0.1,
                -0.2
            ],
            battery: [
                1.9,
                0,
                2.35
            ],
            house: [
                4.9,
                0.1,
                1.85
            ],
            heating: [
                4.6,
                0,
                -1.45
            ]
        };
    }
    if (challengeId === 'safety-coordination') {
        return {
            ...BASE_NODE_POSITIONS,
            solar: [
                -5.1,
                0.1,
                2.1
            ],
            grid: [
                -4.95,
                0.0,
                -2.2
            ],
            compute: [
                -0.25,
                0.1,
                -0.35
            ],
            battery: [
                0.55,
                0,
                2.45
            ],
            safety: [
                2.8,
                0.1,
                -1.5
            ],
            house: [
                3.1,
                0.1,
                0.75
            ],
            heating: [
                2.95,
                0,
                -2.25
            ],
            sensor: [
                -0.95,
                0.1,
                -2.35
            ]
        };
    }
    return {
        ...BASE_NODE_POSITIONS,
        solar: [
            -4.25,
            0.1,
            2.2
        ],
        grid: [
            -4.15,
            0.0,
            -2.2
        ],
        compute: [
            -0.05,
            0.1,
            0.35
        ],
        battery: [
            1.1,
            0,
            2.6
        ],
        house: [
            4.35,
            0.1,
            1.6
        ],
        heating: [
            4.1,
            0,
            -1.95
        ],
        sensor: [
            -1.35,
            0.1,
            -2.6
        ],
        safety: [
            1.75,
            0.1,
            -2.5
        ]
    };
}
function RuralBackdrop({ challengeId, reducedMotion }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        "data-feature": "sim3d.background.rural",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SunAndClouds, {
                reducedMotion: reducedMotion,
                challengeId: challengeId
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 381,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MountainRange, {}, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 382,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VillageEdge, {
                challengeId: challengeId
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 383,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WindTurbine, {
                reducedMotion: reducedMotion
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 384,
                columnNumber: 7
            }, this),
            challengeId === 'sensor-logic' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SensorFence, {}, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 387,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SensorOperationsField, {
                        reducedMotion: reducedMotion
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 388,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : null,
            challengeId === 'safety-coordination' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SafetyFence, {}, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 393,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SafetyCommandZone, {}, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 394,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : null,
            challengeId === 'grid-os' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PowerLines, {}, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 399,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GridDistrict, {
                        reducedMotion: reducedMotion
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 400,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
        lineNumber: 380,
        columnNumber: 5
    }, this);
}
_c3 = RuralBackdrop;
function MountainRange() {
    const peaks = [
        [
            -8.2,
            1.1,
            -4.5,
            1.8
        ],
        [
            -5.8,
            1.4,
            -4.9,
            2.2
        ],
        [
            -2.8,
            1.2,
            -4.3,
            1.9
        ],
        [
            0.9,
            1.5,
            -4.8,
            2.35
        ],
        [
            3.9,
            1.1,
            -4.4,
            1.95
        ],
        [
            7.2,
            1.35,
            -4.9,
            2.15
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: peaks.map(([peakX, peakY, peakZ, peakScale], index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    peakX,
                    peakY,
                    peakZ
                ],
                scale: [
                    peakScale,
                    peakScale,
                    peakScale
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("coneGeometry", {
                        args: [
                            1,
                            2,
                            5
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 421,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: index % 2 === 0 ? '#9bb9a2' : '#87a28e'
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 422,
                        columnNumber: 11
                    }, this)
                ]
            }, `${peakX}-${peakZ}-${index}`, true, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 420,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
        lineNumber: 418,
        columnNumber: 5
    }, this);
}
_c4 = MountainRange;
function VillageEdge({ challengeId }) {
    const homeColor = challengeId === 'safety-coordination' ? '#bda78b' : '#caa98b';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: [
            4.8,
            -0.52,
            -2.7
        ],
        "data-feature": "sim3d.background.village",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$RoundedBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBox"], {
                args: [
                    1.2,
                    0.85,
                    1
                ],
                radius: 0.06,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                    color: homeColor
                }, void 0, false, {
                    fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                    lineNumber: 434,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 433,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.74,
                    0
                ],
                rotation: [
                    0,
                    Math.PI / 4,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("coneGeometry", {
                        args: [
                            0.86,
                            0.72,
                            4
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 437,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#8f5f43"
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 438,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 436,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -1.5,
                    0.05,
                    0.15
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.25,
                            0.35,
                            0.5,
                            10
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 441,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#6e8f53"
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 442,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 440,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
        lineNumber: 432,
        columnNumber: 5
    }, this);
}
_c5 = VillageEdge;
function WindTurbine({ reducedMotion }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: [
            -6.3,
            0.1,
            -3.1
        ],
        "data-feature": "sim3d.background.wind",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    1.3,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.08,
                            0.11,
                            2.6,
                            12
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 452,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#d7dee9"
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 453,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 451,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WindBlades, {
                reducedMotion: reducedMotion
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 455,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
        lineNumber: 450,
        columnNumber: 5
    }, this);
}
_c6 = WindTurbine;
function WindBlades({ reducedMotion }) {
    _s4();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "WindBlades.useFrame": (state, delta)=>{
            if (reducedMotion) {
                return;
            }
            state.scene.getObjectByName('wind-blades')?.rotateZ(delta * 1.7);
        }
    }["WindBlades.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        name: "wind-blades",
        position: [
            0,
            2.53,
            0
        ],
        children: [
            [
                0,
                Math.PI * 0.67,
                Math.PI * 1.33
            ].map((angle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    rotation: [
                        0,
                        0,
                        angle
                    ],
                    position: [
                        0.4,
                        0,
                        0
                    ],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                            args: [
                                0.78,
                                0.08,
                                0.05
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                            lineNumber: 472,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: "#f8fafc"
                        }, void 0, false, {
                            fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                            lineNumber: 473,
                            columnNumber: 11
                        }, this)
                    ]
                }, angle, true, {
                    fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                    lineNumber: 471,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.09,
                            12,
                            12
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 477,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#cbd5e1"
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 478,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 476,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
        lineNumber: 469,
        columnNumber: 5
    }, this);
}
_s4(WindBlades, "xC67171NPRcCAzsbrenetil66NI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c7 = WindBlades;
function SunAndClouds({ challengeId, reducedMotion }) {
    const base = challengeId === 'safety-coordination' ? '#fde68a' : '#fef08a';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -5.9,
                    4.3,
                    -5.6
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.58,
                            18,
                            18
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 495,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: base,
                        emissive: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](base),
                        emissiveIntensity: 0.33
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 496,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 494,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloudBank, {
                reducedMotion: reducedMotion
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 498,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
        lineNumber: 493,
        columnNumber: 5
    }, this);
}
_c8 = SunAndClouds;
function CloudBank({ reducedMotion }) {
    _s5();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "CloudBank.useFrame": (state)=>{
            if (reducedMotion) {
                return;
            }
            const clouds = state.scene.getObjectByName('cloud-bank');
            if (!clouds) {
                return;
            }
            clouds.position.x = -2.4 + Math.sin(state.clock.elapsedTime * 0.11) * 1.25;
        }
    }["CloudBank.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        name: "cloud-bank",
        position: [
            -2.4,
            3.5,
            -5.1
        ],
        children: [
            -1.1,
            -0.4,
            0.35,
            1.1
        ].map((offsetX)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    offsetX,
                    0,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.43,
                            12,
                            12
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 519,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#f8fafc",
                        transparent: true,
                        opacity: 0.88
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 520,
                        columnNumber: 11
                    }, this)
                ]
            }, offsetX, true, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 518,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
        lineNumber: 516,
        columnNumber: 5
    }, this);
}
_s5(CloudBank, "xC67171NPRcCAzsbrenetil66NI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c9 = CloudBank;
function SensorFence() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        "data-feature": "sim3d.background.sensor-fence",
        children: [
            -2.8,
            -1.8,
            -0.8
        ].map((offsetX, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: [
                    offsetX,
                    -0.3,
                    -2.9
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                                args: [
                                    0.04,
                                    0.04,
                                    0.7,
                                    8
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                                lineNumber: 533,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#0f766e"
                            }, void 0, false, {
                                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                                lineNumber: 534,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 532,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            0,
                            0.42,
                            0
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                                args: [
                                    0.07,
                                    12,
                                    12
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                                lineNumber: 537,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#22d3ee",
                                emissive: "#0891b2",
                                emissiveIntensity: 0.4
                            }, void 0, false, {
                                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                                lineNumber: 538,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 536,
                        columnNumber: 11
                    }, this)
                ]
            }, `${offsetX}-${index}`, true, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 531,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
        lineNumber: 529,
        columnNumber: 5
    }, this);
}
_c10 = SensorFence;
function SafetyFence() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        "data-feature": "sim3d.background.safety-zone",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$RoundedBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBox"], {
                args: [
                    3.3,
                    0.04,
                    1.9
                ],
                radius: 0.05,
                position: [
                    1.65,
                    -0.42,
                    -2.55
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                    color: "#dbe4f2"
                }, void 0, false, {
                    fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                    lineNumber: 550,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 549,
                columnNumber: 7
            }, this),
            [
                -0.9,
                0,
                0.9
            ].map((offset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: [
                        1.65 + offset,
                        -0.08,
                        -1.7
                    ],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                            args: [
                                0.06,
                                0.65,
                                0.06
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                            lineNumber: 554,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: "#64748b"
                        }, void 0, false, {
                            fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                            lineNumber: 555,
                            columnNumber: 11
                        }, this)
                    ]
                }, offset, true, {
                    fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                    lineNumber: 553,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
        lineNumber: 548,
        columnNumber: 5
    }, this);
}
_c11 = SafetyFence;
function PowerLines() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        "data-feature": "sim3d.background.power-lines",
        children: [
            [
                -3.5,
                -2.2,
                -0.9
            ].map((offsetX)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: [
                        offsetX,
                        0.25,
                        -2.65
                    ],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                            args: [
                                0.08,
                                1.2,
                                0.08
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                            lineNumber: 567,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: "#475569"
                        }, void 0, false, {
                            fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                            lineNumber: 568,
                            columnNumber: 11
                        }, this)
                    ]
                }, offsetX, true, {
                    fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                    lineNumber: 566,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -2.2,
                    0.86,
                    -2.65
                ],
                rotation: [
                    0,
                    0,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            2.6,
                            0.03,
                            0.03
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 572,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#334155"
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 573,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 571,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
        lineNumber: 564,
        columnNumber: 5
    }, this);
}
_c12 = PowerLines;
function SensorOperationsField({ reducedMotion }) {
    _s6();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "SensorOperationsField.useFrame": (state)=>{
            if (reducedMotion) {
                return;
            }
            const beacon = state.scene.getObjectByName('sensor-data-beacon');
            if (!beacon) {
                return;
            }
            beacon.scale.y = 0.7 + (Math.sin(state.clock.elapsedTime * 2.2) + 1) * 0.2;
        }
    }["SensorOperationsField.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: [
            -1.4,
            -0.48,
            -1.35
        ],
        "data-feature": "sim3d.challenge.sensor-field",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$RoundedBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBox"], {
                args: [
                    3.5,
                    0.02,
                    2.6
                ],
                radius: 0.04,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                    color: "#cffafe"
                }, void 0, false, {
                    fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                    lineNumber: 594,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 593,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: [
                    0,
                    0.02,
                    0
                ],
                children: [
                    -1.2,
                    -0.4,
                    0.4,
                    1.2
                ].map((offsetX)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            offsetX,
                            0.02,
                            0
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                args: [
                                    0.12,
                                    0.02,
                                    2.1
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                                lineNumber: 599,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: "#67e8f9",
                                emissive: "#0891b2",
                                emissiveIntensity: 0.22
                            }, void 0, false, {
                                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                                lineNumber: 600,
                                columnNumber: 13
                            }, this)
                        ]
                    }, offsetX, true, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 598,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 596,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                name: "sensor-data-beacon",
                position: [
                    0,
                    0.55,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.07,
                            0.11,
                            1.1,
                            10
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 605,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#0ea5e9",
                        emissive: "#0369a1",
                        emissiveIntensity: 0.42,
                        transparent: true,
                        opacity: 0.85
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 606,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 604,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
        lineNumber: 592,
        columnNumber: 5
    }, this);
}
_s6(SensorOperationsField, "xC67171NPRcCAzsbrenetil66NI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c13 = SensorOperationsField;
function SafetyCommandZone() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: [
            1.8,
            -0.5,
            -1.2
        ],
        "data-feature": "sim3d.challenge.safety-zone",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$RoundedBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBox"], {
                args: [
                    3.3,
                    0.06,
                    2.5
                ],
                radius: 0.07,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                    color: "#e5e7eb"
                }, void 0, false, {
                    fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                    lineNumber: 616,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 615,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$RoundedBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBox"], {
                args: [
                    1.4,
                    0.9,
                    1
                ],
                radius: 0.06,
                position: [
                    -0.85,
                    0.48,
                    0.35
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                    color: "#94a3b8"
                }, void 0, false, {
                    fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                    lineNumber: 619,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 618,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$RoundedBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBox"], {
                args: [
                    1.2,
                    0.55,
                    0.55
                ],
                radius: 0.05,
                position: [
                    0.75,
                    0.3,
                    -0.35
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                    color: "#ef4444",
                    emissive: "#7f1d1d",
                    emissiveIntensity: 0.18
                }, void 0, false, {
                    fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                    lineNumber: 622,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 621,
                columnNumber: 7
            }, this),
            [
                -1.4,
                -0.5,
                0.4,
                1.3
            ].map((offsetX)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: [
                        offsetX,
                        0.13,
                        1.15
                    ],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                            args: [
                                0.06,
                                0.26,
                                0.06
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                            lineNumber: 626,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: "#475569"
                        }, void 0, false, {
                            fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                            lineNumber: 627,
                            columnNumber: 11
                        }, this)
                    ]
                }, offsetX, true, {
                    fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                    lineNumber: 625,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
        lineNumber: 614,
        columnNumber: 5
    }, this);
}
_c14 = SafetyCommandZone;
function GridDistrict({ reducedMotion }) {
    _s7();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "GridDistrict.useFrame": (state)=>{
            if (reducedMotion) {
                return;
            }
            const district = state.scene.getObjectByName('grid-district-core');
            if (!district) {
                return;
            }
            district.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.04;
        }
    }["GridDistrict.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: [
            0.9,
            -0.5,
            -1.65
        ],
        "data-feature": "sim3d.challenge.grid-district",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$RoundedBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBox"], {
                args: [
                    4.6,
                    0.04,
                    3.2
                ],
                radius: 0.08,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                    color: "#dbeafe"
                }, void 0, false, {
                    fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                    lineNumber: 649,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 648,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                name: "grid-district-core",
                position: [
                    0,
                    0.12,
                    0
                ],
                children: [
                    [
                        -1.4,
                        0.35,
                        0.8,
                        '#60a5fa'
                    ],
                    [
                        -0.2,
                        0.48,
                        0.25,
                        '#2563eb'
                    ],
                    [
                        1.0,
                        0.4,
                        -0.6,
                        '#3b82f6'
                    ],
                    [
                        1.7,
                        0.52,
                        0.7,
                        '#1d4ed8'
                    ]
                ].map(([x, h, z, color])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            Number(x),
                            Number(h) / 2,
                            Number(z)
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                args: [
                                    0.6,
                                    Number(h),
                                    0.6
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                                lineNumber: 659,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: String(color),
                                emissive: String(color),
                                emissiveIntensity: 0.22
                            }, void 0, false, {
                                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                                lineNumber: 660,
                                columnNumber: 13
                            }, this)
                        ]
                    }, `${x}-${z}`, true, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 658,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 651,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.1,
                    -1.2
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            3.6,
                            0.03,
                            0.12
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 665,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#0f172a"
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 666,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 664,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.1,
                    -1.15
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            3.6,
                            0.02,
                            0.03
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 669,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#fbbf24"
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                        lineNumber: 670,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
                lineNumber: 668,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sim3d/SimulationScene3D.tsx",
        lineNumber: 647,
        columnNumber: 5
    }, this);
}
_s7(GridDistrict, "xC67171NPRcCAzsbrenetil66NI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c15 = GridDistrict;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
__turbopack_context__.k.register(_c, "SimulationScene3D");
__turbopack_context__.k.register(_c1, "SceneContent");
__turbopack_context__.k.register(_c2, "FramePulse");
__turbopack_context__.k.register(_c3, "RuralBackdrop");
__turbopack_context__.k.register(_c4, "MountainRange");
__turbopack_context__.k.register(_c5, "VillageEdge");
__turbopack_context__.k.register(_c6, "WindTurbine");
__turbopack_context__.k.register(_c7, "WindBlades");
__turbopack_context__.k.register(_c8, "SunAndClouds");
__turbopack_context__.k.register(_c9, "CloudBank");
__turbopack_context__.k.register(_c10, "SensorFence");
__turbopack_context__.k.register(_c11, "SafetyFence");
__turbopack_context__.k.register(_c12, "PowerLines");
__turbopack_context__.k.register(_c13, "SensorOperationsField");
__turbopack_context__.k.register(_c14, "SafetyCommandZone");
__turbopack_context__.k.register(_c15, "GridDistrict");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sim3d/SimulationScene3D.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/sim3d/SimulationScene3D.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_sim3d_15d80f3b._.js.map