(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, variant = 'default', children, ...props }) {
    const variants = {
        default: 'bg-white border border-historic-sepia/20',
        historic: 'bg-historic-cream border-2 border-historic-sepia paper-texture',
        elevated: 'bg-white shadow-historic'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-lg p-6', variants[variant], className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Card.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mb-4', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Card.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('font-display text-xl font-semibold text-brand-black', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Card.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm text-historic-sepia mt-1', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Card.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardContent({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Card.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_c4 = CardContent;
function CardFooter({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mt-4 flex items-center gap-4', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Card.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c5 = CardFooter;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardContent");
__turbopack_context__.k.register(_c5, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sim/ConfigEditor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfigEditor",
    ()=>ConfigEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Card.tsx [app-client] (ecmascript)");
'use client';
;
;
function ConfigEditor({ value, onChange, error }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    children: "Simulation Config (JSON)"
                }, void 0, false, {
                    fileName: "[project]/components/sim/ConfigEditor.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sim/ConfigEditor.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: value,
                        onChange: (event)=>onChange(event.target.value),
                        className: "w-full min-h-[300px] rounded-md border border-historic-sepia/30 bg-white p-3 font-mono text-xs text-brand-black focus:outline-none focus:ring-2 focus:ring-compute-blue/30",
                        spellCheck: false,
                        "aria-label": "Simulation configuration",
                        "data-feature": "sim.config-editor"
                    }, void 0, false, {
                        fileName: "[project]/components/sim/ConfigEditor.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-mono text-sihl-red",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/components/sim/ConfigEditor.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-mono text-historic-sepia",
                        children: "Config-only by default. Dev mode can attach file overrides."
                    }, void 0, false, {
                        fileName: "[project]/components/sim/ConfigEditor.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim/ConfigEditor.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sim/ConfigEditor.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = ConfigEditor;
var _c;
__turbopack_context__.k.register(_c, "ConfigEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/sim/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SIM_CHALLENGES",
    ()=>SIM_CHALLENGES,
    "SIM_CHALLENGE_ROOTS",
    ()=>SIM_CHALLENGE_ROOTS,
    "SIM_DAILY_RUN_LIMIT",
    ()=>SIM_DAILY_RUN_LIMIT,
    "SIM_MAX_COMMENT_CHARS",
    ()=>SIM_MAX_COMMENT_CHARS,
    "SIM_MAX_CONCURRENT_RUNS",
    ()=>SIM_MAX_CONCURRENT_RUNS,
    "SIM_MAX_CONFIG_BYTES",
    ()=>SIM_MAX_CONFIG_BYTES,
    "SIM_MAX_OVERRIDE_BYTES",
    ()=>SIM_MAX_OVERRIDE_BYTES,
    "SIM_TERMINAL_STATUSES",
    ()=>SIM_TERMINAL_STATUSES
]);
const SIM_DAILY_RUN_LIMIT = 30;
const SIM_MAX_CONCURRENT_RUNS = 1;
const SIM_MAX_CONFIG_BYTES = 64_000;
const SIM_MAX_OVERRIDE_BYTES = 160_000;
const SIM_MAX_COMMENT_CHARS = 500;
const SIM_TERMINAL_STATUSES = [
    'succeeded',
    'failed',
    'timeout',
    'cancelled'
];
const SIM_CHALLENGES = {
    'sensor-logic': {
        label: 'Sensor Integration',
        description: 'Sensor data pipeline, monitoring, validation',
        scenarios: [
            'normal-stream',
            'thermal-spike',
            'flow-drop',
            'gas-alert'
        ],
        editablePaths: [
            'services/pipeline/pipeline_service.ts',
            'config/calibration.json'
        ],
        defaultConfig: {
            topicNamespace: 'sihlhack',
            enableLegacyTopicConsume: true,
            thresholds: {
                T_cpu_die: {
                    warn: 80,
                    crit: 90,
                    direction: 'high'
                },
                Flow_water: {
                    warn: 0.5,
                    crit: 0.2,
                    direction: 'low'
                }
            }
        }
    },
    'safety-coordination': {
        label: 'Multi-Node Safety Coordination',
        description: 'Safety interlocks, anomaly detection, fail-closed control',
        scenarios: [
            'heartbeat-loss',
            'sensor-drift',
            'thermal-runaway',
            'partial-degrade'
        ],
        editablePaths: [
            'src/coordinator/safety_coordinator.py',
            'src/coordinator/anomaly_detector.py',
            'src/coordinator/estop_state_machine.py'
        ],
        defaultConfig: {
            heartbeatTimeoutSeconds: 2,
            maxMissedHeartbeats: 2,
            allowlistedCommands: [
                'set_actuators'
            ],
            zScoreCritical: 4,
            zScoreWarning: 3
        }
    },
    'grid-os': {
        label: 'Grid-OS Logic',
        description: 'Scheduler, deferred compute, load shedding policies',
        scenarios: [
            'clear-sky-day',
            'cloudy-volatility',
            'grid-unstable',
            'winter-heat-demand'
        ],
        editablePaths: [
            'grid_os/scheduler/solar_budget.py',
            'grid_os/shedding/policies.py',
            'grid_os/core/control_loop.py'
        ],
        defaultConfig: {
            seed: 42,
            maxComputeW: 3000,
            cpuTempLimitC: 80,
            waterOutSetpointC: 55,
            shedding: {
                l1: 47.0,
                l2: 46.0
            }
        }
    }
};
const SIM_CHALLENGE_ROOTS = {
    'sensor-logic': 'solutions/challenge1-sensor-integration',
    'safety-coordination': 'solutions/challenge2-safety',
    'grid-os': 'solutions/challenge3-grid-os'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sim/RunPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RunPanel",
    ()=>RunPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sim$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sim/constants.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function RunPanel({ challengeId, scenarioId, onScenarioChange, comment, onCommentChange, onRun, onCancel, currentRunStatus, canRun, isSubmitting, devModeAllowed, devModeEnabled, onDevModeEnabledChange }) {
    const scenarios = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sim$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIM_CHALLENGES"][challengeId].scenarios;
    const isActive = currentRunStatus === 'queued' || currentRunStatus === 'running';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    children: "Run Control"
                }, void 0, false, {
                    fileName: "[project]/components/sim/RunPanel.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sim/RunPanel.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-mono text-brand-black",
                                children: "Scenario"
                            }, void 0, false, {
                                fileName: "[project]/components/sim/RunPanel.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: scenarioId,
                                onChange: (event)=>onScenarioChange(event.target.value),
                                className: "w-full rounded-md border border-historic-sepia/30 px-3 py-2 font-mono text-sm",
                                "data-feature": "sim.scenario-selector",
                                children: scenarios.map((scenario)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: scenario,
                                        children: scenario
                                    }, scenario, false, {
                                        fileName: "[project]/components/sim/RunPanel.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/sim/RunPanel.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sim/RunPanel.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-mono text-brand-black",
                                children: "Run comment"
                            }, void 0, false, {
                                fileName: "[project]/components/sim/RunPanel.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: comment,
                                onChange: (event)=>onCommentChange(event.target.value),
                                className: "min-h-[74px] w-full rounded-md border border-historic-sepia/30 px-3 py-2 font-mono text-sm",
                                placeholder: "What did you change in this run?",
                                maxLength: 500,
                                "data-feature": "sim.run-comment"
                            }, void 0, false, {
                                fileName: "[project]/components/sim/RunPanel.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] font-mono text-historic-sepia",
                                children: [
                                    comment.length,
                                    "/500"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sim/RunPanel.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sim/RunPanel.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    devModeAllowed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center justify-between rounded-md border border-historic-sepia/20 px-3 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-mono text-brand-black",
                                children: "Dev mode"
                            }, void 0, false, {
                                fileName: "[project]/components/sim/RunPanel.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: devModeEnabled,
                                onChange: (event)=>onDevModeEnabledChange(event.target.checked),
                                className: "h-4 w-4",
                                "data-feature": "sim.dev-mode-toggle"
                            }, void 0, false, {
                                fileName: "[project]/components/sim/RunPanel.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sim/RunPanel.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "primary",
                                onClick: onRun,
                                disabled: !canRun || isActive,
                                isLoading: isSubmitting,
                                className: "flex-1",
                                "data-feature": "sim.run-button",
                                children: "Run"
                            }, void 0, false, {
                                fileName: "[project]/components/sim/RunPanel.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                onClick: onCancel,
                                disabled: !isActive,
                                className: "flex-1",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/components/sim/RunPanel.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sim/RunPanel.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-mono text-historic-sepia",
                        children: [
                            "Status: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-brand-black",
                                children: currentRunStatus || 'idle'
                            }, void 0, false, {
                                fileName: "[project]/components/sim/RunPanel.tsx",
                                lineNumber: 110,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sim/RunPanel.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim/RunPanel.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sim/RunPanel.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c = RunPanel;
var _c;
__turbopack_context__.k.register(_c, "RunPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sim/RunHistory.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RunHistory",
    ()=>RunHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Card.tsx [app-client] (ecmascript)");
'use client';
;
;
function RunHistory({ runs, selectedRunId, onSelectRun }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    children: "Run History"
                }, void 0, false, {
                    fileName: "[project]/components/sim/RunHistory.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sim/RunHistory.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-2",
                children: runs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-mono text-historic-sepia",
                    children: "No runs yet."
                }, void 0, false, {
                    fileName: "[project]/components/sim/RunHistory.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this) : runs.map((run)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `w-full rounded-md border px-3 py-2 text-left ${selectedRunId === run.id ? 'border-compute-blue bg-compute-blue/5' : 'border-historic-sepia/20 bg-white'}`,
                        onClick: ()=>onSelectRun(run.id),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-mono text-brand-black",
                                children: run.scenarioId
                            }, void 0, false, {
                                fileName: "[project]/components/sim/RunHistory.tsx",
                                lineNumber: 32,
                                columnNumber: 15
                            }, this),
                            run.comment ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 line-clamp-2 text-xs font-mono text-brand-black/85",
                                children: run.comment
                            }, void 0, false, {
                                fileName: "[project]/components/sim/RunHistory.tsx",
                                lineNumber: 34,
                                columnNumber: 17
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-mono text-historic-sepia",
                                children: [
                                    run.status,
                                    " · ",
                                    new Date(run.createdAt).toLocaleString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sim/RunHistory.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, this)
                        ]
                    }, run.id, true, {
                        fileName: "[project]/components/sim/RunHistory.tsx",
                        lineNumber: 23,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sim/RunHistory.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sim/RunHistory.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = RunHistory;
var _c;
__turbopack_context__.k.register(_c, "RunHistory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sim/EventLog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventLog",
    ()=>EventLog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Card.tsx [app-client] (ecmascript)");
'use client';
;
;
function EventLog({ events }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    children: "Events"
                }, void 0, false, {
                    fileName: "[project]/components/sim/EventLog.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sim/EventLog.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-2",
                "data-feature": "sim.event-log",
                children: events.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-mono text-historic-sepia",
                    children: "No events in selected run."
                }, void 0, false, {
                    fileName: "[project]/components/sim/EventLog.tsx",
                    lineNumber: 18,
                    columnNumber: 11
                }, this) : events.map((event, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md border border-historic-sepia/20 bg-white px-3 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-mono text-brand-black",
                                children: [
                                    "t=",
                                    event.t,
                                    "s · ",
                                    event.level
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sim/EventLog.tsx",
                                lineNumber: 22,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-historic-sepia",
                                children: event.message
                            }, void 0, false, {
                                fileName: "[project]/components/sim/EventLog.tsx",
                                lineNumber: 23,
                                columnNumber: 15
                            }, this)
                        ]
                    }, `${event.t}-${index}`, true, {
                        fileName: "[project]/components/sim/EventLog.tsx",
                        lineNumber: 21,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sim/EventLog.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sim/EventLog.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = EventLog;
var _c;
__turbopack_context__.k.register(_c, "EventLog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sim/LineChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LineChart",
    ()=>LineChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Card.tsx [app-client] (ecmascript)");
'use client';
;
;
const COLORS = [
    '#2563EB',
    '#10B981',
    '#DC2626',
    '#F59E0B',
    '#7C3AED'
];
function LineChart({ series, title = 'Time Series' }) {
    const width = 680;
    const height = 240;
    const padding = 24;
    const allPoints = series.flatMap((entry)=>entry.points);
    const maxT = Math.max(...allPoints.map((point)=>point.t), 1);
    const minY = Math.min(...allPoints.map((point)=>point.value), 0);
    const maxY = Math.max(...allPoints.map((point)=>point.value), 1);
    const spanY = Math.max(maxY - minY, 1);
    const toPath = (points)=>{
        return points.map((point, idx)=>{
            const x = padding + point.t / maxT * (width - 2 * padding);
            const y = height - padding - (point.value - minY) / spanY * (height - 2 * padding);
            return `${idx === 0 ? 'M' : 'L'}${x},${y}`;
        }).join(' ');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    children: title
                }, void 0, false, {
                    fileName: "[project]/components/sim/LineChart.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sim/LineChart.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                "data-feature": "sim.line-chart",
                children: series.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-mono text-historic-sepia",
                    children: "No time-series data."
                }, void 0, false, {
                    fileName: "[project]/components/sim/LineChart.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: `0 0 ${width} ${height}`,
                            className: "w-full rounded-md border border-historic-sepia/20 bg-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: padding,
                                    y1: height - padding,
                                    x2: width - padding,
                                    y2: height - padding,
                                    stroke: "#ddd",
                                    strokeWidth: "1"
                                }, void 0, false, {
                                    fileName: "[project]/components/sim/LineChart.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: padding,
                                    y1: padding,
                                    x2: padding,
                                    y2: height - padding,
                                    stroke: "#ddd",
                                    strokeWidth: "1"
                                }, void 0, false, {
                                    fileName: "[project]/components/sim/LineChart.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this),
                                series.map((entry, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: toPath(entry.points),
                                        fill: "none",
                                        stroke: COLORS[idx % COLORS.length],
                                        strokeWidth: "2"
                                    }, entry.key, false, {
                                        fileName: "[project]/components/sim/LineChart.tsx",
                                        lineNumber: 48,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sim/LineChart.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 flex flex-wrap gap-3",
                            children: series.map((entry, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-mono text-brand-black",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block h-2 w-2 rounded-full",
                                            style: {
                                                backgroundColor: COLORS[idx % COLORS.length]
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/sim/LineChart.tsx",
                                            lineNumber: 54,
                                            columnNumber: 19
                                        }, this),
                                        " ",
                                        entry.label
                                    ]
                                }, entry.key, true, {
                                    fileName: "[project]/components/sim/LineChart.tsx",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/sim/LineChart.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/components/sim/LineChart.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sim/LineChart.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = LineChart;
var _c;
__turbopack_context__.k.register(_c, "LineChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sim/SimulationTuningPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SimulationTuningPanel",
    ()=>SimulationTuningPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sim$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sim/constants.ts [app-client] (ecmascript)");
'use client';
;
;
;
function SimulationTuningPanel({ challengeId, scenarioId, onScenarioChange, configText, onConfigTextChange }) {
    const challenge = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sim$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIM_CHALLENGES"][challengeId];
    const updateConfig = (mutate)=>{
        const parsedConfig = parseConfig(configText, challenge.defaultConfig);
        mutate(parsedConfig);
        onConfigTextChange(JSON.stringify(parsedConfig, null, 2));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    children: "Live Tuning"
                }, void 0, false, {
                    fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-4",
                children: [
                    challengeId === 'sensor-logic' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-3 md:grid-cols-2",
                        "data-feature": "sim.controls.sensor-values",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NumberControl, {
                                label: "Sensors",
                                min: 1,
                                max: 40,
                                step: 1,
                                value: readNumber(configText, challenge.defaultConfig, [
                                    'sensorCount'
                                ], 13),
                                onChange: (value)=>updateConfig((draft)=>setPath(draft, [
                                            'sensorCount'
                                        ], value))
                            }, void 0, false, {
                                fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NumberControl, {
                                label: "CPU Temp °C",
                                min: 20,
                                max: 120,
                                step: 1,
                                value: readNumber(configText, challenge.defaultConfig, [
                                    'simulatedSensors',
                                    'tempC'
                                ], 72),
                                onChange: (value)=>updateConfig((draft)=>setPath(draft, [
                                            'simulatedSensors',
                                            'tempC'
                                        ], value))
                            }, void 0, false, {
                                fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NumberControl, {
                                label: "Flow L/s",
                                min: 0,
                                max: 2,
                                step: 0.05,
                                value: readNumber(configText, challenge.defaultConfig, [
                                    'simulatedSensors',
                                    'flowLps'
                                ], 0.62),
                                onChange: (value)=>updateConfig((draft)=>setPath(draft, [
                                            'simulatedSensors',
                                            'flowLps'
                                        ], value))
                            }, void 0, false, {
                                fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NumberControl, {
                                label: "Gas ppm",
                                min: 0,
                                max: 600,
                                step: 5,
                                value: readNumber(configText, challenge.defaultConfig, [
                                    'simulatedSensors',
                                    'gasPpm'
                                ], 120),
                                onChange: (value)=>updateConfig((draft)=>setPath(draft, [
                                            'simulatedSensors',
                                            'gasPpm'
                                        ], value))
                            }, void 0, false, {
                                fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this) : null,
                    challengeId === 'safety-coordination' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-3 md:grid-cols-2",
                        "data-feature": "sim.controls.leg-values",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NumberControl, {
                                label: "LEG Nodes",
                                min: 1,
                                max: 12,
                                step: 1,
                                value: readNumber(configText, challenge.defaultConfig, [
                                    'legCount'
                                ], 3),
                                onChange: (value)=>updateConfig((draft)=>setPath(draft, [
                                            'legCount'
                                        ], value))
                            }, void 0, false, {
                                fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NumberControl, {
                                label: "Heartbeat s",
                                min: 1,
                                max: 10,
                                step: 0.5,
                                value: readNumber(configText, challenge.defaultConfig, [
                                    'heartbeatTimeoutSeconds'
                                ], 2),
                                onChange: (value)=>updateConfig((draft)=>setPath(draft, [
                                            'heartbeatTimeoutSeconds'
                                        ], value))
                            }, void 0, false, {
                                fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NumberControl, {
                                label: "Missed Heartbeats",
                                min: 1,
                                max: 10,
                                step: 1,
                                value: readNumber(configText, challenge.defaultConfig, [
                                    'maxMissedHeartbeats'
                                ], 2),
                                onChange: (value)=>updateConfig((draft)=>setPath(draft, [
                                            'maxMissedHeartbeats'
                                        ], value))
                            }, void 0, false, {
                                fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleControl, {
                                label: "Force E-Stop",
                                checked: readBoolean(configText, challenge.defaultConfig, [
                                    'forceEstop'
                                ], false),
                                onChange: (value)=>updateConfig((draft)=>setPath(draft, [
                                            'forceEstop'
                                        ], value))
                            }, void 0, false, {
                                fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this) : null,
                    challengeId === 'grid-os' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-3 md:grid-cols-2",
                        "data-feature": "sim.controls.grid-scenarios",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-xs text-brand-black",
                                        children: "Scenario"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: scenarioId,
                                        onChange: (event)=>onScenarioChange(event.target.value),
                                        className: "w-full rounded-md border border-historic-sepia/30 px-2 py-1.5 font-mono text-sm",
                                        children: challenge.scenarios.map((scenario)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: scenario,
                                                children: scenario
                                            }, scenario, false, {
                                                fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
                                                lineNumber: 117,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NumberControl, {
                                label: "Max Compute W",
                                min: 500,
                                max: 6000,
                                step: 100,
                                value: readNumber(configText, challenge.defaultConfig, [
                                    'maxComputeW'
                                ], 3000),
                                onChange: (value)=>updateConfig((draft)=>setPath(draft, [
                                            'maxComputeW'
                                        ], value))
                            }, void 0, false, {
                                fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NumberControl, {
                                label: "CPU Temp Limit °C",
                                min: 45,
                                max: 95,
                                step: 1,
                                value: readNumber(configText, challenge.defaultConfig, [
                                    'cpuTempLimitC'
                                ], 80),
                                onChange: (value)=>updateConfig((draft)=>setPath(draft, [
                                            'cpuTempLimitC'
                                        ], value))
                            }, void 0, false, {
                                fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NumberControl, {
                                label: "Shedding L1 °C",
                                min: 35,
                                max: 60,
                                step: 0.5,
                                value: readNumber(configText, challenge.defaultConfig, [
                                    'shedding',
                                    'l1'
                                ], 47),
                                onChange: (value)=>updateConfig((draft)=>setPath(draft, [
                                            'shedding',
                                            'l1'
                                        ], value))
                            }, void 0, false, {
                                fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NumberControl, {
                                label: "Shedding L2 °C",
                                min: 35,
                                max: 60,
                                step: 0.5,
                                value: readNumber(configText, challenge.defaultConfig, [
                                    'shedding',
                                    'l2'
                                ], 46),
                                onChange: (value)=>updateConfig((draft)=>setPath(draft, [
                                            'shedding',
                                            'l2'
                                        ], value))
                            }, void 0, false, {
                                fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = SimulationTuningPanel;
function NumberControl({ label, value, min, max, step, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "block space-y-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-mono text-xs text-brand-black",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "range",
                        min: min,
                        max: max,
                        step: step,
                        value: value,
                        onChange: (event)=>onChange(Number(event.target.value)),
                        className: "w-full"
                    }, void 0, false, {
                        fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        min: min,
                        max: max,
                        step: step,
                        value: value,
                        onChange: (event)=>onChange(Number(event.target.value)),
                        className: "w-20 rounded-md border border-historic-sepia/30 px-2 py-1 font-mono text-xs"
                    }, void 0, false, {
                        fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
_c1 = NumberControl;
function ToggleControl({ label, checked, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "flex items-center justify-between rounded-md border border-historic-sepia/30 px-2 py-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-mono text-xs text-brand-black",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "checkbox",
                checked: checked,
                onChange: (event)=>onChange(event.target.checked),
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sim/SimulationTuningPanel.tsx",
        lineNumber: 212,
        columnNumber: 5
    }, this);
}
_c2 = ToggleControl;
function parseConfig(configText, fallbackConfig) {
    try {
        const parsed = JSON.parse(configText);
        return cloneJson(parsed);
    } catch  {
        return cloneJson(fallbackConfig);
    }
}
function readNumber(configText, fallbackConfig, path, fallbackValue) {
    const parsedConfig = parseConfig(configText, fallbackConfig);
    const resolved = getPath(parsedConfig, path);
    return typeof resolved === 'number' ? resolved : fallbackValue;
}
function readBoolean(configText, fallbackConfig, path, fallbackValue) {
    const parsedConfig = parseConfig(configText, fallbackConfig);
    const resolved = getPath(parsedConfig, path);
    return typeof resolved === 'boolean' ? resolved : fallbackValue;
}
function getPath(root, path) {
    let cursor = root;
    for (const key of path){
        if (!cursor || typeof cursor !== 'object' || !(key in cursor)) {
            return undefined;
        }
        cursor = cursor[key];
    }
    return cursor;
}
function setPath(root, path, value) {
    if (path.length === 0) {
        return;
    }
    let cursor = root;
    for(let index = 0; index < path.length - 1; index += 1){
        const key = path[index];
        const nextValue = cursor[key];
        if (!nextValue || typeof nextValue !== 'object' || Array.isArray(nextValue)) {
            cursor[key] = {};
        }
        cursor = cursor[key];
    }
    cursor[path[path.length - 1]] = value;
}
function cloneJson(value) {
    return JSON.parse(JSON.stringify(value));
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SimulationTuningPanel");
__turbopack_context__.k.register(_c1, "NumberControl");
__turbopack_context__.k.register(_c2, "ToggleControl");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/sim/featureRegistry.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SIM_FEATURE_REGISTRY",
    ()=>SIM_FEATURE_REGISTRY,
    "getFeatureById",
    ()=>getFeatureById
]);
const SIM_FEATURE_REGISTRY = [
    {
        featureId: 'sensor.threshold-alerts',
        label: 'Sensor threshold alerts',
        description: 'Warn/critical threshold alert generation for sensor streams.',
        codeAnchors: [
            {
                challengeId: 'sensor-logic',
                path: 'services/pipeline/pipeline_service.ts',
                matchString: 'const ALERT_THRESHOLDS'
            },
            {
                challengeId: 'sensor-logic',
                path: 'services/pipeline/pipeline_service.ts',
                matchString: 'export function evaluateAlerts'
            }
        ]
    },
    {
        featureId: 'sensor.topic-compat',
        label: 'MQTT topic compatibility',
        description: 'Dual-namespace topic compatibility and migration support.',
        codeAnchors: [
            {
                challengeId: 'sensor-logic',
                path: 'services/pipeline/pipeline_service.ts',
                matchString: 'export function getSubscriptionTopics'
            },
            {
                challengeId: 'sensor-logic',
                path: 'tests/test_topic_transition.py',
                matchString: 'def test_sensor_reader_dual_publishes_during_transition'
            }
        ]
    },
    {
        featureId: 'safety.fail-closed',
        label: 'Fail-closed safety clearance',
        description: 'Safety API denies command clearance unless all safety checks pass.',
        codeAnchors: [
            {
                challengeId: 'safety-coordination',
                path: 'src/api/server.py',
                matchString: '@app.get("/api/v1/safety/clearance"'
            },
            {
                challengeId: 'safety-coordination',
                path: 'tests/test_safety_api.py',
                matchString: 'def test_clearance_denied_fail_closed_for_unknown_hub'
            }
        ]
    },
    {
        featureId: 'gridos.shedding-policies',
        label: 'Grid-OS shedding policies',
        description: 'Load shedding levels and allowed classes under stress.',
        codeAnchors: [
            {
                challengeId: 'grid-os',
                path: 'grid_os/shedding/policies.py',
                matchString: 'class LoadSheddingPolicy'
            },
            {
                challengeId: 'grid-os',
                path: 'grid_os/api/server.py',
                matchString: '@app.get("/api/v1/shedding/status")'
            }
        ]
    },
    {
        featureId: 'gridos.scheduler-budget',
        label: 'Grid-OS scheduler budget',
        description: 'Budget and mode/scheduler endpoints for simulation control.',
        codeAnchors: [
            {
                challengeId: 'grid-os',
                path: 'grid_os/api/server.py',
                matchString: '@app.get("/api/v1/scheduler/budget")'
            },
            {
                challengeId: 'grid-os',
                path: 'grid_os/scheduler/solar_budget.py',
                matchString: 'class SolarBudgetScheduler'
            }
        ]
    },
    {
        featureId: 'sim3d.scene.canvas',
        label: '3D simulation canvas',
        description: 'Root 3D scene with guided camera and world layout.',
        codeAnchors: [
            {
                path: 'components/sim3d/SimulationScene3D.tsx',
                matchString: 'export function SimulationScene3D'
            },
            {
                path: 'components/sim3d/hooks/useGuidedCamera.ts',
                matchString: 'export function useGuidedCamera'
            }
        ]
    },
    {
        featureId: 'sim3d.node.solar',
        label: 'Solar node (3D)',
        description: 'Solar panel and sun emitter animation in the 3D layer.',
        codeAnchors: [
            {
                path: 'components/sim3d/nodes/SolarNode.tsx',
                matchString: 'export function SolarNode'
            }
        ]
    },
    {
        featureId: 'sim3d.node.compute',
        label: 'Compute node (3D)',
        description: 'Compute unit with fan rotation tied to load.',
        codeAnchors: [
            {
                path: 'components/sim3d/nodes/ComputeNode.tsx',
                matchString: 'export function ComputeNode'
            }
        ]
    },
    {
        featureId: 'sim3d.node.battery',
        label: 'Battery node (3D)',
        description: 'Battery fill/glow mapped to SOC and status.',
        codeAnchors: [
            {
                path: 'components/sim3d/nodes/BatteryNode.tsx',
                matchString: 'export function BatteryNode'
            }
        ]
    },
    {
        featureId: 'sim3d.node.heating',
        label: 'Heating node (3D)',
        description: 'Heating loop pulse mapped to thermal output.',
        codeAnchors: [
            {
                path: 'components/sim3d/nodes/HeatingNode.tsx',
                matchString: 'export function HeatingNode'
            }
        ]
    },
    {
        featureId: 'sim3d.flow.energy',
        label: '3D energy flow links',
        description: 'Animated flow links for energy/heat/data transfer.',
        codeAnchors: [
            {
                path: 'components/sim3d/effects/FlowLinks.tsx',
                matchString: 'export function FlowLinks'
            },
            {
                path: 'lib/sim/scene-mapper.ts',
                matchString: 'function buildFlows'
            }
        ]
    },
    {
        featureId: 'sim3d.background.rural',
        label: 'Rural animated background',
        description: 'Challenge-specific rural scenery with animated clouds and turbine.',
        codeAnchors: [
            {
                path: 'components/sim3d/SimulationScene3D.tsx',
                matchString: 'function RuralBackdrop'
            },
            {
                path: 'components/sim3d/SimulationScene3D.tsx',
                matchString: 'function SunAndClouds'
            }
        ]
    },
    {
        featureId: 'sim.controls.sensor-values',
        label: 'Sensor live tuning controls',
        description: 'Quick sliders/inputs for sensor count and simulated readings.',
        codeAnchors: [
            {
                path: 'components/sim/SimulationTuningPanel.tsx',
                matchString: 'data-feature="sim.controls.sensor-values"'
            }
        ]
    },
    {
        featureId: 'sim.controls.leg-values',
        label: 'LEG live tuning controls',
        description: 'Quick controls for LEG count and safety heartbeat behavior.',
        codeAnchors: [
            {
                path: 'components/sim/SimulationTuningPanel.tsx',
                matchString: 'data-feature="sim.controls.leg-values"'
            }
        ]
    },
    {
        featureId: 'sim.controls.grid-scenarios',
        label: 'Grid scenario controls',
        description: 'Grid scenario and scheduler/shedding tuning controls.',
        codeAnchors: [
            {
                path: 'components/sim/SimulationTuningPanel.tsx',
                matchString: 'data-feature="sim.controls.grid-scenarios"'
            }
        ]
    }
];
function getFeatureById(featureId) {
    return SIM_FEATURE_REGISTRY.find((entry)=>entry.featureId === featureId);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sim/DevInspectorOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DevInspectorOverlay",
    ()=>DevInspectorOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sim$2f$featureRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sim/featureRegistry.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function DevInspectorOverlay({ enabled, challengeId, onOpenCode }) {
    _s();
    const [selectedFeatureId, setSelectedFeatureId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [resolvedAnchors, setResolvedAnchors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const selectedFeature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DevInspectorOverlay.useMemo[selectedFeature]": ()=>{
            if (!selectedFeatureId) {
                return null;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sim$2f$featureRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFeatureById"])(selectedFeatureId) || null;
        }
    }["DevInspectorOverlay.useMemo[selectedFeature]"], [
        selectedFeatureId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DevInspectorOverlay.useEffect": ()=>{
            if (!enabled) {
                setSelectedFeatureId(null);
                setResolvedAnchors([]);
                return;
            }
            const onClick = {
                "DevInspectorOverlay.useEffect.onClick": (event)=>{
                    const target = event.target;
                    if (!target) {
                        return;
                    }
                    const featureNode = target.closest('[data-feature]');
                    if (!featureNode) {
                        return;
                    }
                    const featureId = featureNode.dataset.feature;
                    if (featureId) {
                        setSelectedFeatureId(featureId);
                    }
                }
            }["DevInspectorOverlay.useEffect.onClick"];
            document.addEventListener('click', onClick);
            return ({
                "DevInspectorOverlay.useEffect": ()=>document.removeEventListener('click', onClick)
            })["DevInspectorOverlay.useEffect"];
        }
    }["DevInspectorOverlay.useEffect"], [
        enabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DevInspectorOverlay.useEffect": ()=>{
            if (!enabled || !selectedFeature) {
                setResolvedAnchors([]);
                return;
            }
            const anchors = selectedFeature.codeAnchors.filter({
                "DevInspectorOverlay.useEffect.anchors": (anchor)=>!anchor.challengeId || anchor.challengeId === challengeId
            }["DevInspectorOverlay.useEffect.anchors"]);
            if (anchors.length === 0) {
                setResolvedAnchors([]);
                return;
            }
            let cancelled = false;
            const resolveAnchors = {
                "DevInspectorOverlay.useEffect.resolveAnchors": async ()=>{
                    setIsLoading(true);
                    const resolved = await Promise.all(anchors.map({
                        "DevInspectorOverlay.useEffect.resolveAnchors": async (anchor)=>{
                            try {
                                const params = new URLSearchParams({
                                    challengeId,
                                    path: anchor.path,
                                    anchor: anchor.matchString
                                });
                                const response = await fetch(`/api/sim/dev/file?${params.toString()}`, {
                                    credentials: 'include'
                                });
                                if (!response.ok) {
                                    return null;
                                }
                                const payload = await response.json();
                                return {
                                    path: anchor.path,
                                    line: payload.line || 1,
                                    challengeId: anchor.challengeId
                                };
                            } catch  {
                                return null;
                            }
                        }
                    }["DevInspectorOverlay.useEffect.resolveAnchors"]));
                    if (!cancelled) {
                        const cleaned = [];
                        for (const item of resolved){
                            if (!item) {
                                continue;
                            }
                            cleaned.push({
                                path: item.path,
                                line: Number(item.line) || 1,
                                challengeId: item.challengeId
                            });
                        }
                        setResolvedAnchors(cleaned);
                        setIsLoading(false);
                    }
                }
            }["DevInspectorOverlay.useEffect.resolveAnchors"];
            void resolveAnchors();
            return ({
                "DevInspectorOverlay.useEffect": ()=>{
                    cancelled = true;
                }
            })["DevInspectorOverlay.useEffect"];
        }
    }["DevInspectorOverlay.useEffect"], [
        challengeId,
        enabled,
        selectedFeature
    ]);
    if (!enabled) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-4 right-4 z-50 w-[340px] rounded-lg border border-compute-blue/40 bg-white p-3 shadow-2xl",
        "data-feature": "sim.dev-inspector-overlay",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-mono text-xs text-compute-blue",
                children: "Dev Inspector"
            }, void 0, false, {
                fileName: "[project]/components/sim/DevInspectorOverlay.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            !selectedFeature ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-xs font-mono text-historic-sepia",
                children: selectedFeatureId ? `No mapping found for feature: ${selectedFeatureId}` : 'Click any tagged UI element to inspect feature mapping.'
            }, void 0, false, {
                fileName: "[project]/components/sim/DevInspectorOverlay.tsx",
                lineNumber: 127,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold text-brand-black",
                        children: selectedFeature.label
                    }, void 0, false, {
                        fileName: "[project]/components/sim/DevInspectorOverlay.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-historic-sepia",
                        children: selectedFeature.description
                    }, void 0, false, {
                        fileName: "[project]/components/sim/DevInspectorOverlay.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this),
                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-mono text-historic-sepia",
                        children: "Resolving code anchors..."
                    }, void 0, false, {
                        fileName: "[project]/components/sim/DevInspectorOverlay.tsx",
                        lineNumber: 134,
                        columnNumber: 24
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            resolvedAnchors.map((anchor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "block w-full rounded border border-historic-sepia/20 px-2 py-1 text-left font-mono text-xs text-brand-black hover:bg-historic-cream",
                                    onClick: ()=>onOpenCode(anchor.path, anchor.line),
                                    children: [
                                        anchor.path,
                                        ":",
                                        anchor.line
                                    ]
                                }, `${anchor.path}:${anchor.line}`, true, {
                                    fileName: "[project]/components/sim/DevInspectorOverlay.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this)),
                            resolvedAnchors.length === 0 && !isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-mono text-historic-sepia",
                                children: "No anchors available for this challenge."
                            }, void 0, false, {
                                fileName: "[project]/components/sim/DevInspectorOverlay.tsx",
                                lineNumber: 146,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sim/DevInspectorOverlay.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim/DevInspectorOverlay.tsx",
                lineNumber: 131,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sim/DevInspectorOverlay.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_s(DevInspectorOverlay, "bfvNcnWT3Mpp328wtlcPxUTgzyM=");
_c = DevInspectorOverlay;
var _c;
__turbopack_context__.k.register(_c, "DevInspectorOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sim/CodeEditorPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeEditorPanel",
    ()=>CodeEditorPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function CodeEditorPanel({ enabled, challengeId, overrides, onOverridesChange, openTarget }) {
    _s();
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedPath, setSelectedPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [originalContent, setOriginalContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isReadOnlyFile, setIsReadOnlyFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasOverride = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CodeEditorPanel.useMemo[hasOverride]": ()=>!!selectedPath && Object.prototype.hasOwnProperty.call(overrides, selectedPath)
    }["CodeEditorPanel.useMemo[hasOverride]"], [
        overrides,
        selectedPath
    ]);
    const availablePaths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CodeEditorPanel.useMemo[availablePaths]": ()=>{
            if (!selectedPath || files.includes(selectedPath)) {
                return files;
            }
            return [
                selectedPath,
                ...files
            ];
        }
    }["CodeEditorPanel.useMemo[availablePaths]"], [
        files,
        selectedPath
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeEditorPanel.useEffect": ()=>{
            if (!enabled) {
                setFiles([]);
                setSelectedPath('');
                setOriginalContent('');
                setContent('');
                return;
            }
            let cancelled = false;
            const loadFiles = {
                "CodeEditorPanel.useEffect.loadFiles": async ()=>{
                    setIsLoading(true);
                    try {
                        const response = await fetch(`/api/sim/dev/file?challengeId=${encodeURIComponent(challengeId)}`, {
                            credentials: 'include'
                        });
                        if (!response.ok) {
                            return;
                        }
                        const payload = await response.json();
                        if (!cancelled) {
                            const list = payload.files || [];
                            setFiles(list);
                            if (list.length > 0) {
                                setSelectedPath({
                                    "CodeEditorPanel.useEffect.loadFiles": (prev)=>prev || list[0]
                                }["CodeEditorPanel.useEffect.loadFiles"]);
                            }
                        }
                    } finally{
                        if (!cancelled) {
                            setIsLoading(false);
                        }
                    }
                }
            }["CodeEditorPanel.useEffect.loadFiles"];
            void loadFiles();
            return ({
                "CodeEditorPanel.useEffect": ()=>{
                    cancelled = true;
                }
            })["CodeEditorPanel.useEffect"];
        }
    }["CodeEditorPanel.useEffect"], [
        challengeId,
        enabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeEditorPanel.useEffect": ()=>{
            if (!enabled || !selectedPath) {
                return;
            }
            let cancelled = false;
            const loadFile = {
                "CodeEditorPanel.useEffect.loadFile": async ()=>{
                    setIsLoading(true);
                    try {
                        const params = new URLSearchParams({
                            challengeId,
                            path: selectedPath
                        });
                        const response = await fetch(`/api/sim/dev/file?${params.toString()}`, {
                            credentials: 'include'
                        });
                        if (!response.ok) {
                            return;
                        }
                        const payload = await response.json();
                        if (!cancelled) {
                            const loaded = payload.content || '';
                            setOriginalContent(loaded);
                            setContent(overrides[selectedPath] ?? loaded);
                            setIsReadOnlyFile(Boolean(payload.readOnly));
                        }
                    } finally{
                        if (!cancelled) {
                            setIsLoading(false);
                        }
                    }
                }
            }["CodeEditorPanel.useEffect.loadFile"];
            void loadFile();
            return ({
                "CodeEditorPanel.useEffect": ()=>{
                    cancelled = true;
                }
            })["CodeEditorPanel.useEffect"];
        }
    }["CodeEditorPanel.useEffect"], [
        challengeId,
        enabled,
        overrides,
        selectedPath
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeEditorPanel.useEffect": ()=>{
            if (!enabled || !openTarget) {
                return;
            }
            setSelectedPath(openTarget.path);
            if (!openTarget.line || !textareaRef.current) {
                return;
            }
            const lines = content.split('\n');
            const targetIndex = Math.max(0, Math.min(lines.length - 1, openTarget.line - 1));
            const charIndex = lines.slice(0, targetIndex).reduce({
                "CodeEditorPanel.useEffect.charIndex": (sum, line)=>sum + line.length + 1
            }["CodeEditorPanel.useEffect.charIndex"], 0);
            requestAnimationFrame({
                "CodeEditorPanel.useEffect": ()=>{
                    const element = textareaRef.current;
                    if (!element) {
                        return;
                    }
                    element.focus();
                    element.setSelectionRange(charIndex, charIndex);
                }
            }["CodeEditorPanel.useEffect"]);
        }
    }["CodeEditorPanel.useEffect"], [
        content,
        enabled,
        openTarget
    ]);
    if (!enabled) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    children: "Dev Code Overrides"
                }, void 0, false, {
                    fileName: "[project]/components/sim/CodeEditorPanel.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sim/CodeEditorPanel.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-3",
                "data-feature": "sim.dev-code-editor",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedPath,
                                onChange: (event)=>setSelectedPath(event.target.value),
                                className: "flex-1 rounded-md border border-historic-sepia/30 px-2 py-2 font-mono text-xs",
                                children: availablePaths.map((filePath)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: filePath,
                                        children: filePath
                                    }, filePath, false, {
                                        fileName: "[project]/components/sim/CodeEditorPanel.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/sim/CodeEditorPanel.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                variant: "outline",
                                onClick: ()=>{
                                    if (!selectedPath) {
                                        return;
                                    }
                                    const next = {
                                        ...overrides
                                    };
                                    delete next[selectedPath];
                                    onOverridesChange(next);
                                    setContent(originalContent);
                                },
                                disabled: !selectedPath || !hasOverride,
                                children: "Revert"
                            }, void 0, false, {
                                fileName: "[project]/components/sim/CodeEditorPanel.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sim/CodeEditorPanel.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        ref: textareaRef,
                        value: content,
                        onChange: (event)=>{
                            const nextContent = event.target.value;
                            setContent(nextContent);
                            if (!selectedPath || isReadOnlyFile) {
                                return;
                            }
                            onOverridesChange({
                                ...overrides,
                                [selectedPath]: nextContent
                            });
                        },
                        className: "w-full min-h-[260px] rounded-md border border-historic-sepia/30 bg-white p-3 font-mono text-xs text-brand-black",
                        spellCheck: false,
                        readOnly: isReadOnlyFile
                    }, void 0, false, {
                        fileName: "[project]/components/sim/CodeEditorPanel.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-mono text-historic-sepia",
                        children: isLoading ? 'Loading...' : isReadOnlyFile ? 'Read-only file (inspector view).' : hasOverride ? 'Override staged for next run.' : 'No override applied.'
                    }, void 0, false, {
                        fileName: "[project]/components/sim/CodeEditorPanel.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim/CodeEditorPanel.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sim/CodeEditorPanel.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
_s(CodeEditorPanel, "0e7VXZogkBvnjJxLrlIuO26IL84=");
_c = CodeEditorPanel;
var _c;
__turbopack_context__.k.register(_c, "CodeEditorPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sim3d/SceneShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SceneShell",
    ()=>SceneShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Card.tsx [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const SimulationScene3D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/sim3d/SimulationScene3D.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((module)=>module.SimulationScene3D), {
    loadableGenerated: {
        modules: [
            "[project]/components/sim3d/SimulationScene3D.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = SimulationScene3D;
function SceneShell({ frame, enabled }) {
    _s();
    const webGlAvailable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SceneShell.useMemo[webGlAvailable]": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                const canvas = document.createElement('canvas');
                return Boolean(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
            } catch  {
                return false;
            }
        }
    }["SceneShell.useMemo[webGlAvailable]"], []);
    const show3d = enabled && webGlAvailable;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    children: "3D Simulation Layer"
                }, void 0, false, {
                    fileName: "[project]/components/sim3d/SceneShell.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sim3d/SceneShell.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-3",
                children: [
                    show3d ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationScene3D, {
                        frame: frame
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SceneShell.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-historic-sepia/25 bg-white p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-mono text-xs text-historic-sepia",
                            children: enabled ? 'WebGL unavailable: falling back to 2D visualization.' : '3D layer disabled by feature flag (NEXT_PUBLIC_ENABLE_SIM_3D=false).'
                        }, void 0, false, {
                            fileName: "[project]/components/sim3d/SceneShell.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SceneShell.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2 md:grid-cols-4",
                        "data-feature": "sim3d.legend.nodes",
                        children: frame.nodes.map((node)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded border border-historic-sepia/20 bg-white px-2 py-1.5",
                                "data-feature": `sim3d.node.${node.id}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[11px] text-brand-black",
                                        children: node.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/sim3d/SceneShell.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[10px] text-historic-sepia",
                                        children: [
                                            node.value,
                                            node.unit || ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sim3d/SceneShell.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, node.id, true, {
                                fileName: "[project]/components/sim3d/SceneShell.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sim3d/SceneShell.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded border border-historic-sepia/20 bg-white px-3 py-2",
                        "data-feature": "sim3d.legend.flows",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-[11px] text-brand-black",
                                children: [
                                    "Flows: ",
                                    frame.flows.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sim3d/SceneShell.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-[10px] text-historic-sepia",
                                children: "Energy, heat and data links animate based on run metrics and event severity."
                            }, void 0, false, {
                                fileName: "[project]/components/sim3d/SceneShell.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sim3d/SceneShell.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sim3d/SceneShell.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sim3d/SceneShell.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(SceneShell, "5CgM/C2rq+6HhlbGcLt4t3Cjb3c=");
_c1 = SceneShell;
var _c, _c1;
__turbopack_context__.k.register(_c, "SimulationScene3D");
__turbopack_context__.k.register(_c1, "SceneShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/visualizations/GridOSVisualization.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GridOSVisualization",
    ()=>GridOSVisualization
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function GridOSVisualization() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block relative w-full max-w-3xl mx-auto bg-white rounded-3xl border-2 border-gray-100 shadow-xl overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 sm:p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 500 320",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "w-full h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                        id: "gridOSGrid",
                                        width: "20",
                                        height: "20",
                                        patternUnits: "userSpaceOnUse",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M 20 0 L 0 0 0 20",
                                            fill: "none",
                                            stroke: "#f0f0f0",
                                            strokeWidth: "0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 18,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 17,
                                        columnNumber: 11
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                    lineNumber: 16,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    width: "500",
                                    height: "320",
                                    fill: "url(#gridOSGrid)"
                                }, void 0, false, {
                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                    lineNumber: 21,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "250",
                                    y: "25",
                                    textAnchor: "middle",
                                    className: "font-display text-[14px] fill-brand-black font-bold",
                                    children: "Grid-OS Minimal Controller"
                                }, void 0, false, {
                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                    lineNumber: 24,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "250",
                                    y: "40",
                                    textAnchor: "middle",
                                    className: "font-mono text-[8px] fill-historic-sepia",
                                    children: "Scheduler mit Solar-Budget, Fallback-Policy und API"
                                }, void 0, false, {
                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                    lineNumber: 27,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    id: "solar-input",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "20",
                                            y: "60",
                                            width: "90",
                                            height: "60",
                                            rx: "8",
                                            fill: "#FBBF24",
                                            fillOpacity: "0.1",
                                            stroke: "#FBBF24",
                                            strokeWidth: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 35,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "65",
                                            y: "78",
                                            textAnchor: "middle",
                                            className: "text-[16px]",
                                            children: "☀️"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 36,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "65",
                                            y: "95",
                                            textAnchor: "middle",
                                            className: "font-mono text-[9px] fill-solar-yellow font-bold",
                                            children: "Solar Budget"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 37,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "65",
                                            y: "108",
                                            textAnchor: "middle",
                                            className: "font-mono text-[8px] fill-historic-sepia",
                                            children: "[150W]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 38,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "100",
                                            cy: "68",
                                            r: "4",
                                            fill: "#FBBF24",
                                            className: "animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 41,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                    lineNumber: 34,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    id: "demand-input",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "20",
                                            y: "135",
                                            width: "90",
                                            height: "60",
                                            rx: "8",
                                            fill: "#3B82F6",
                                            fillOpacity: "0.1",
                                            stroke: "#3B82F6",
                                            strokeWidth: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 46,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "65",
                                            y: "153",
                                            textAnchor: "middle",
                                            className: "text-[16px]",
                                            children: "📊"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 47,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "65",
                                            y: "170",
                                            textAnchor: "middle",
                                            className: "font-mono text-[9px] fill-compute-blue font-bold",
                                            children: "Demand"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 48,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "65",
                                            y: "183",
                                            textAnchor: "middle",
                                            className: "font-mono text-[8px] fill-historic-sepia",
                                            children: "[AI Job]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 49,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                    lineNumber: 45,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    id: "fallback-input",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "20",
                                            y: "210",
                                            width: "90",
                                            height: "60",
                                            rx: "8",
                                            fill: "#DC2626",
                                            fillOpacity: "0.1",
                                            stroke: "#DC2626",
                                            strokeWidth: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 54,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "65",
                                            y: "228",
                                            textAnchor: "middle",
                                            className: "text-[16px]",
                                            children: "⚠️"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 55,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "65",
                                            y: "245",
                                            textAnchor: "middle",
                                            className: "font-mono text-[9px] fill-sihl-red font-bold",
                                            children: "Fallback"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 56,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "65",
                                            y: "258",
                                            textAnchor: "middle",
                                            className: "font-mono text-[8px] fill-historic-sepia",
                                            children: "[Grid OFF]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 57,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                    lineNumber: 53,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M115 90 L165 140",
                                    stroke: "#FBBF24",
                                    strokeWidth: "2",
                                    strokeDasharray: "5 3",
                                    className: "animate-[dash_2s_linear_infinite]"
                                }, void 0, false, {
                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                    lineNumber: 61,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M115 165 L165 165",
                                    stroke: "#3B82F6",
                                    strokeWidth: "2",
                                    strokeDasharray: "5 3",
                                    className: "animate-[dash_2s_linear_infinite]"
                                }, void 0, false, {
                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                    lineNumber: 62,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M115 240 L165 190",
                                    stroke: "#DC2626",
                                    strokeWidth: "2",
                                    strokeDasharray: "5 3",
                                    className: "animate-[dash_2s_linear_infinite]"
                                }, void 0, false, {
                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                    lineNumber: 63,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    id: "scheduler",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "170",
                                            y: "100",
                                            width: "160",
                                            height: "130",
                                            rx: "12",
                                            fill: "#1A1A1A"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 67,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "170",
                                            y: "100",
                                            width: "160",
                                            height: "30",
                                            rx: "12",
                                            fill: "#2A2A2A"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 70,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "250",
                                            y: "120",
                                            textAnchor: "middle",
                                            className: "font-mono text-[11px] fill-white font-bold",
                                            children: "⚡ SCHEDULER"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 71,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "185",
                                            y: "145",
                                            width: "130",
                                            height: "40",
                                            rx: "6",
                                            fill: "#3B82F6",
                                            fillOpacity: "0.2",
                                            stroke: "#3B82F6",
                                            strokeWidth: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 74,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "250",
                                            y: "162",
                                            textAnchor: "middle",
                                            className: "font-mono text-[9px] fill-compute-blue font-bold",
                                            children: "Policy Engine"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 75,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "250",
                                            y: "178",
                                            textAnchor: "middle",
                                            className: "font-mono text-[7px] fill-gray-400",
                                            children: "if Solar < Demand → Throttle"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 76,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            className: "animate-pulse",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "195",
                                                    cy: "205",
                                                    r: "3",
                                                    fill: "#10B981"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "210",
                                                    cy: "205",
                                                    r: "3",
                                                    fill: "#10B981",
                                                    style: {
                                                        animationDelay: '0.2s'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "225",
                                                    cy: "205",
                                                    r: "3",
                                                    fill: "#10B981",
                                                    style: {
                                                        animationDelay: '0.4s'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 13
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 79,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "270",
                                            y: "208",
                                            className: "font-mono text-[7px] fill-gray-400",
                                            children: "Processing..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 84,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                    lineNumber: 66,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M335 140 L385 100",
                                    stroke: "#10B981",
                                    strokeWidth: "2",
                                    strokeDasharray: "5 3",
                                    className: "animate-[dash_1.5s_linear_infinite]"
                                }, void 0, false, {
                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                    lineNumber: 90,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    id: "compute-output",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "390",
                                            y: "60",
                                            width: "90",
                                            height: "60",
                                            rx: "8",
                                            fill: "#10B981",
                                            fillOpacity: "0.1",
                                            stroke: "#10B981",
                                            strokeWidth: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 94,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "435",
                                            y: "78",
                                            textAnchor: "middle",
                                            className: "text-[16px]",
                                            children: "💻"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 95,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "435",
                                            y: "95",
                                            textAnchor: "middle",
                                            className: "font-mono text-[9px] fill-grid-green font-bold",
                                            children: "Compute"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 96,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "435",
                                            y: "108",
                                            textAnchor: "middle",
                                            className: "font-mono text-[8px] fill-historic-sepia",
                                            children: "[Load: 140W]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 97,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "470",
                                            cy: "68",
                                            r: "4",
                                            fill: "#10B981",
                                            className: "animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 100,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                    lineNumber: 93,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M335 190 L385 190",
                                    stroke: "#F59E0B",
                                    strokeWidth: "2",
                                    strokeDasharray: "5 3",
                                    className: "animate-[dash_1.5s_linear_infinite]"
                                }, void 0, false, {
                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                    lineNumber: 104,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    id: "throttle-output",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "390",
                                            y: "160",
                                            width: "90",
                                            height: "60",
                                            rx: "8",
                                            fill: "#F59E0B",
                                            fillOpacity: "0.1",
                                            stroke: "#F59E0B",
                                            strokeWidth: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 108,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "435",
                                            y: "178",
                                            textAnchor: "middle",
                                            className: "text-[16px]",
                                            children: "📉"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 109,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "435",
                                            y: "195",
                                            textAnchor: "middle",
                                            className: "font-mono text-[9px] fill-solar-yellow font-bold",
                                            children: "Throttle"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 110,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "435",
                                            y: "208",
                                            textAnchor: "middle",
                                            className: "font-mono text-[8px] fill-historic-sepia",
                                            children: "[if Solar < X]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 111,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                    lineNumber: 107,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    id: "api-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M250 235 L250 255",
                                            stroke: "#3B82F6",
                                            strokeWidth: "2",
                                            strokeDasharray: "4 3",
                                            className: "animate-[dash_1s_linear_infinite]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 117,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "170",
                                            y: "260",
                                            width: "160",
                                            height: "50",
                                            rx: "8",
                                            fill: "#3B82F6",
                                            fillOpacity: "0.1",
                                            stroke: "#3B82F6",
                                            strokeWidth: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 119,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "195",
                                            y: "278",
                                            className: "font-mono text-[10px] fill-compute-blue font-bold",
                                            children: "📡 API"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 120,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "195",
                                            y: "295",
                                            className: "font-mono text-[7px] fill-historic-sepia",
                                            children: "/schedule"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 123,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "250",
                                            y: "295",
                                            className: "font-mono text-[7px] fill-historic-sepia",
                                            children: "/status"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 124,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "295",
                                            y: "295",
                                            className: "font-mono text-[7px] fill-historic-sepia",
                                            children: "/replay"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 125,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            className: "animate-pulse",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "290",
                                                    y: "270",
                                                    width: "30",
                                                    height: "12",
                                                    rx: "2",
                                                    fill: "#10B981"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "305",
                                                    y: "279",
                                                    textAnchor: "middle",
                                                    className: "font-mono text-[6px] fill-white",
                                                    children: "GET"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 13
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 128,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                    lineNumber: 115,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    id: "replay-mode",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "355",
                                            y: "260",
                                            width: "125",
                                            height: "50",
                                            rx: "8",
                                            fill: "#f9f9f9",
                                            stroke: "#e5e5e5",
                                            strokeWidth: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 136,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "417",
                                            y: "278",
                                            textAnchor: "middle",
                                            className: "font-mono text-[9px] fill-brand-black font-bold",
                                            children: "🔄 Replay-Modus"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 137,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "365",
                                            y1: "295",
                                            x2: "470",
                                            y2: "295",
                                            stroke: "#ccc",
                                            strokeWidth: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 140,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "417",
                                            y: "305",
                                            textAnchor: "middle",
                                            className: "font-mono text-[6px] fill-historic-sepia",
                                            children: "Solar-Zeitreihe abspielen"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 142,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                    lineNumber: 135,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    id: "deliverables",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "20",
                                            y: "280",
                                            width: "130",
                                            height: "30",
                                            rx: "4",
                                            fill: "#10B981",
                                            fillOpacity: "0.1",
                                            stroke: "#10B981",
                                            strokeWidth: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 147,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "85",
                                            y: "293",
                                            textAnchor: "middle",
                                            className: "font-mono text-[7px] fill-grid-green",
                                            children: "✓ Scheduler ✓ API ✓ Replay"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 148,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "85",
                                            y: "303",
                                            textAnchor: "middle",
                                            className: "font-mono text-[6px] fill-historic-sepia",
                                            children: "Fallback-Policy definiert"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 149,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                    lineNumber: 146,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                            lineNumber: 9,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 pb-4 sm:px-6 sm:pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-50 p-2 rounded-lg border border-gray-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 rounded-full bg-solar-yellow"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[9px] text-brand-black",
                                                    children: "Input"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 rounded-full bg-compute-blue"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[9px] text-brand-black",
                                                    children: "Process"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 rounded-full bg-grid-green"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[9px] text-brand-black",
                                                    children: "Output"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-accent text-sm text-compute-blue",
                                children: "Paket 3: Grid-OS"
                            }, void 0, false, {
                                fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden relative w-full mx-auto bg-white rounded-2xl border-2 border-gray-100 shadow-xl overflow-hidden p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display text-base font-bold text-brand-black",
                                children: "Grid-OS Minimal Controller"
                            }, void 0, false, {
                                fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-[9px] text-historic-sepia mt-1",
                                children: "Scheduler mit Solar-Budget, Fallback-Policy und API"
                            }, void 0, false, {
                                fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 260 520",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "w-full",
                        style: {
                            maxHeight: '520px'
                        },
                        preserveAspectRatio: "xMidYMid meet",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                    id: "gridOSGridMobile",
                                    width: "15",
                                    height: "15",
                                    patternUnits: "userSpaceOnUse",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M 15 0 L 0 0 0 15",
                                        fill: "none",
                                        stroke: "#f0f0f0",
                                        strokeWidth: "0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                width: "260",
                                height: "520",
                                fill: "url(#gridOSGridMobile)"
                            }, void 0, false, {
                                fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                id: "solar-input-mobile",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "80",
                                        y: "30",
                                        width: "100",
                                        height: "50",
                                        rx: "8",
                                        fill: "#FBBF24",
                                        fillOpacity: "0.1",
                                        stroke: "#FBBF24",
                                        strokeWidth: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "130",
                                        y: "50",
                                        textAnchor: "middle",
                                        className: "text-[14px]",
                                        children: "☀️"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "130",
                                        y: "65",
                                        textAnchor: "middle",
                                        className: "font-mono text-[8px] fill-solar-yellow font-bold",
                                        children: "Solar Budget"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "130",
                                        y: "75",
                                        textAnchor: "middle",
                                        className: "font-mono text-[7px] fill-historic-sepia",
                                        children: "[150W]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "165",
                                        cy: "40",
                                        r: "3",
                                        fill: "#FBBF24",
                                        className: "animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M130 80 L130 100",
                                stroke: "#FBBF24",
                                strokeWidth: "2",
                                strokeDasharray: "4 3",
                                className: "animate-[dash_2s_linear_infinite]"
                            }, void 0, false, {
                                fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                id: "demand-input-mobile",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "80",
                                        y: "105",
                                        width: "100",
                                        height: "50",
                                        rx: "8",
                                        fill: "#3B82F6",
                                        fillOpacity: "0.1",
                                        stroke: "#3B82F6",
                                        strokeWidth: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 225,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "130",
                                        y: "125",
                                        textAnchor: "middle",
                                        className: "text-[14px]",
                                        children: "📊"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 226,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "130",
                                        y: "140",
                                        textAnchor: "middle",
                                        className: "font-mono text-[8px] fill-compute-blue font-bold",
                                        children: "Demand"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "130",
                                        y: "150",
                                        textAnchor: "middle",
                                        className: "font-mono text-[7px] fill-historic-sepia",
                                        children: "[AI Job]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M130 155 L130 175",
                                stroke: "#3B82F6",
                                strokeWidth: "2",
                                strokeDasharray: "4 3",
                                className: "animate-[dash_2s_linear_infinite]"
                            }, void 0, false, {
                                fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                id: "fallback-input-mobile",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "80",
                                        y: "180",
                                        width: "100",
                                        height: "50",
                                        rx: "8",
                                        fill: "#DC2626",
                                        fillOpacity: "0.1",
                                        stroke: "#DC2626",
                                        strokeWidth: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 242,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "130",
                                        y: "200",
                                        textAnchor: "middle",
                                        className: "text-[14px]",
                                        children: "⚠️"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "130",
                                        y: "215",
                                        textAnchor: "middle",
                                        className: "font-mono text-[8px] fill-sihl-red font-bold",
                                        children: "Fallback"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 244,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "130",
                                        y: "225",
                                        textAnchor: "middle",
                                        className: "font-mono text-[7px] fill-historic-sepia",
                                        children: "[Grid OFF]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M130 230 L130 250",
                                stroke: "#DC2626",
                                strokeWidth: "2",
                                strokeDasharray: "4 3",
                                className: "animate-[dash_2s_linear_infinite]"
                            }, void 0, false, {
                                fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                id: "scheduler-mobile",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "50",
                                        y: "255",
                                        width: "160",
                                        height: "100",
                                        rx: "10",
                                        fill: "#1A1A1A"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "50",
                                        y: "255",
                                        width: "160",
                                        height: "25",
                                        rx: "10",
                                        fill: "#2A2A2A"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 262,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "130",
                                        y: "272",
                                        textAnchor: "middle",
                                        className: "font-mono text-[9px] fill-white font-bold",
                                        children: "⚡ SCHEDULER"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "60",
                                        y: "290",
                                        width: "140",
                                        height: "35",
                                        rx: "5",
                                        fill: "#3B82F6",
                                        fillOpacity: "0.2",
                                        stroke: "#3B82F6",
                                        strokeWidth: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 266,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "130",
                                        y: "305",
                                        textAnchor: "middle",
                                        className: "font-mono text-[8px] fill-compute-blue font-bold",
                                        children: "Policy Engine"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 267,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "130",
                                        y: "318",
                                        textAnchor: "middle",
                                        className: "font-mono text-[6px] fill-gray-400",
                                        children: "if Solar < Demand → Throttle"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        className: "animate-pulse",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "75",
                                                cy: "340",
                                                r: "2.5",
                                                fill: "#10B981"
                                            }, void 0, false, {
                                                fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                                lineNumber: 272,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "85",
                                                cy: "340",
                                                r: "2.5",
                                                fill: "#10B981",
                                                style: {
                                                    animationDelay: '0.2s'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                                lineNumber: 273,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "95",
                                                cy: "340",
                                                r: "2.5",
                                                fill: "#10B981",
                                                style: {
                                                    animationDelay: '0.4s'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                                lineNumber: 274,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 271,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "110",
                                        y: "343",
                                        className: "font-mono text-[6px] fill-gray-400",
                                        children: "Processing..."
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M130 355 L130 375",
                                stroke: "#10B981",
                                strokeWidth: "2",
                                strokeDasharray: "4 3",
                                className: "animate-[dash_1.5s_linear_infinite]"
                            }, void 0, false, {
                                fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                id: "compute-output-mobile",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "30",
                                        y: "380",
                                        width: "100",
                                        height: "50",
                                        rx: "8",
                                        fill: "#10B981",
                                        fillOpacity: "0.1",
                                        stroke: "#10B981",
                                        strokeWidth: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 291,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "80",
                                        y: "400",
                                        textAnchor: "middle",
                                        className: "text-[14px]",
                                        children: "💻"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 292,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "80",
                                        y: "415",
                                        textAnchor: "middle",
                                        className: "font-mono text-[8px] fill-grid-green font-bold",
                                        children: "Compute"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 293,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "80",
                                        y: "425",
                                        textAnchor: "middle",
                                        className: "font-mono text-[7px] fill-historic-sepia",
                                        children: "[Load: 140W]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 294,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "120",
                                        cy: "390",
                                        r: "3",
                                        fill: "#10B981",
                                        className: "animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 295,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                id: "throttle-output-mobile",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "140",
                                        y: "380",
                                        width: "100",
                                        height: "50",
                                        rx: "8",
                                        fill: "#F59E0B",
                                        fillOpacity: "0.1",
                                        stroke: "#F59E0B",
                                        strokeWidth: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 300,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "190",
                                        y: "400",
                                        textAnchor: "middle",
                                        className: "text-[14px]",
                                        children: "📉"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 301,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "190",
                                        y: "415",
                                        textAnchor: "middle",
                                        className: "font-mono text-[8px] fill-solar-yellow font-bold",
                                        children: "Throttle"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 302,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "190",
                                        y: "425",
                                        textAnchor: "middle",
                                        className: "font-mono text-[7px] fill-historic-sepia",
                                        children: "[if Solar < X]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 303,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                id: "api-section-mobile",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "30",
                                        y: "445",
                                        width: "210",
                                        height: "40",
                                        rx: "6",
                                        fill: "#3B82F6",
                                        fillOpacity: "0.1",
                                        stroke: "#3B82F6",
                                        strokeWidth: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 308,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "40",
                                        y: "460",
                                        className: "font-mono text-[8px] fill-compute-blue font-bold",
                                        children: "📡 API"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 309,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "40",
                                        y: "473",
                                        className: "font-mono text-[6px] fill-historic-sepia",
                                        children: "/schedule"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 312,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "100",
                                        y: "473",
                                        className: "font-mono text-[6px] fill-historic-sepia",
                                        children: "/status"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 313,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "150",
                                        y: "473",
                                        className: "font-mono text-[6px] fill-historic-sepia",
                                        children: "/replay"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        className: "animate-pulse",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "200",
                                                y: "450",
                                                width: "30",
                                                height: "10",
                                                rx: "2",
                                                fill: "#10B981"
                                            }, void 0, false, {
                                                fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                                lineNumber: 318,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: "215",
                                                y: "457",
                                                textAnchor: "middle",
                                                className: "font-mono text-[5px] fill-white",
                                                children: "GET"
                                            }, void 0, false, {
                                                fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                                lineNumber: 319,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 317,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                id: "replay-mode-mobile",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "30",
                                        y: "495",
                                        width: "210",
                                        height: "20",
                                        rx: "6",
                                        fill: "#f9f9f9",
                                        stroke: "#e5e5e5",
                                        strokeWidth: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 325,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "135",
                                        y: "508",
                                        textAnchor: "middle",
                                        className: "font-mono text-[7px] fill-brand-black font-bold",
                                        children: "🔄 Replay-Modus"
                                    }, void 0, false, {
                                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                        lineNumber: 326,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                lineNumber: 324,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 p-2 bg-gray-50 rounded-lg border border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-1.5 mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-grid-green text-xs",
                                            children: "✓"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 334,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[8px] text-brand-black",
                                            children: "Scheduler"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 335,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-grid-green text-xs",
                                            children: "✓"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 336,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[8px] text-brand-black",
                                            children: "API"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 337,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-grid-green text-xs",
                                            children: "✓"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 338,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[8px] text-brand-black",
                                            children: "Replay"
                                        }, void 0, false, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 339,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                    lineNumber: 333,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-[7px] text-historic-sepia",
                                    children: "Fallback-Policy definiert"
                                }, void 0, false, {
                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                    lineNumber: 341,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                            lineNumber: 332,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-50 p-2 rounded-lg border border-gray-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-1.5 h-1.5 rounded-full bg-solar-yellow"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[7px] text-brand-black",
                                                    children: "Input"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 349,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-1.5 h-1.5 rounded-full bg-compute-blue"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[7px] text-brand-black",
                                                    children: "Process"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 353,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-1.5 h-1.5 rounded-full bg-grid-green"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[7px] text-brand-black",
                                                    children: "Output"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                            lineNumber: 357,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                    lineNumber: 348,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                lineNumber: 347,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-accent text-xs text-compute-blue",
                                    children: "Paket 3: Grid-OS"
                                }, void 0, false, {
                                    fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                    lineNumber: 365,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                                lineNumber: 364,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                        lineNumber: 346,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/visualizations/GridOSVisualization.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = GridOSVisualization;
var _c;
__turbopack_context__.k.register(_c, "GridOSVisualization");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/sim/scene-mapper.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildSceneFrame",
    ()=>buildSceneFrame
]);
const BASE_NODE_LAYOUT = [
    {
        id: 'solar',
        label: 'Solar',
        health: 88,
        value: 1.2,
        unit: 'kW',
        status: 'active',
        pulse: 0.6
    },
    {
        id: 'grid',
        label: 'Grid',
        health: 92,
        value: 0.18,
        unit: 'kW',
        status: 'idle',
        pulse: 0.25
    },
    {
        id: 'compute',
        label: 'Compute',
        health: 85,
        value: 2.4,
        unit: 'kW',
        status: 'active',
        pulse: 0.7
    },
    {
        id: 'battery',
        label: 'Battery',
        health: 90,
        value: 64,
        unit: '%',
        status: 'active',
        pulse: 0.4
    },
    {
        id: 'house',
        label: 'House',
        health: 95,
        value: 1.1,
        unit: 'kW',
        status: 'active',
        pulse: 0.35
    },
    {
        id: 'heating',
        label: 'Heating',
        health: 86,
        value: 45,
        unit: '°C',
        status: 'active',
        pulse: 0.55
    },
    {
        id: 'sensor',
        label: 'Sensor',
        health: 90,
        value: 0,
        unit: 'events',
        status: 'idle',
        pulse: 0.2
    },
    {
        id: 'safety',
        label: 'Safety',
        health: 94,
        value: 0,
        unit: 'state',
        status: 'active',
        pulse: 0.2
    }
];
function buildSceneFrame(challengeId, run, artifacts, previewConfig = null, scenarioId) {
    const metrics = run?.summary?.metrics || {};
    const events = artifacts?.events || [];
    const warningCount = events.filter((event)=>event.level === 'warning').length;
    const criticalCount = events.filter((event)=>event.level === 'critical').length;
    const sensorCount = clampFloor(readConfigNumber(previewConfig, [
        'sensorCount'
    ], 13), 1);
    const previewTempC = readConfigNumber(previewConfig, [
        'simulatedSensors',
        'tempC'
    ], 72);
    const previewFlowLps = readConfigNumber(previewConfig, [
        'simulatedSensors',
        'flowLps'
    ], 0.62);
    const previewGasPpm = readConfigNumber(previewConfig, [
        'simulatedSensors',
        'gasPpm'
    ], 120);
    const legCount = clampFloor(readConfigNumber(previewConfig, [
        'legCount'
    ], 3), 1);
    const configuredComputeW = readConfigNumber(previewConfig, [
        'maxComputeW'
    ], 3000);
    const configuredCpuLimit = readConfigNumber(previewConfig, [
        'cpuTempLimitC'
    ], 80);
    const configuredSheddingL1 = readConfigNumber(previewConfig, [
        'shedding',
        'l1'
    ], 47);
    const configuredSheddingL2 = readConfigNumber(previewConfig, [
        'shedding',
        'l2'
    ], 46);
    const nodes = BASE_NODE_LAYOUT.map((base)=>({
            ...base
        }));
    const setNode = (id, updates)=>{
        const node = nodes.find((entry)=>entry.id === id);
        if (node) {
            Object.assign(node, updates);
        }
    };
    const computeFallback = challengeId === 'grid-os' ? configuredComputeW * 0.72 : challengeId === 'sensor-logic' ? Math.max(1200, previewTempC * 28) : 2400;
    const computeW = readMetricNumber(metrics, 'compute_w', toSeriesPeak(artifacts, [
        'compute_w',
        'p_compute_w'
    ], computeFallback));
    const gridFallback = challengeId === 'grid-os' ? Math.max(120, configuredComputeW * 0.08) : 180;
    const gridW = readMetricNumber(metrics, 'grid_w', toSeriesPeak(artifacts, [
        'grid_w',
        'p_grid_w'
    ], gridFallback));
    const solarW = toSeriesPeak(artifacts, [
        'solar_w',
        'p_solar_w'
    ], Math.max(250, computeW * 0.45));
    const batterySoc = toSeriesPeak(artifacts, [
        'soc',
        'battery_soc'
    ], 62);
    const heatingTemp = toSeriesPeak(artifacts, [
        'heat_w',
        't_water_out'
    ], challengeId === 'sensor-logic' ? Math.max(35, previewTempC - 18) : challengeId === 'grid-os' ? 55 : 43);
    setNode('solar', {
        value: round(solarW / 1000, 2),
        unit: 'kW',
        pulse: clamp01(solarW / 3500),
        status: statusFromSeverity(warningCount, criticalCount)
    });
    setNode('grid', {
        value: round(gridW / 1000, 2),
        unit: 'kW',
        pulse: clamp01(Math.abs(gridW) / 1200),
        status: criticalCount > 0 ? 'warning' : 'idle'
    });
    setNode('compute', {
        value: round(computeW / 1000, 2),
        unit: 'kW',
        pulse: clamp01(computeW / 3000),
        status: criticalCount > 0 ? 'critical' : challengeId === 'grid-os' && configuredCpuLimit <= 70 ? 'warning' : warningCount > 0 ? 'warning' : 'active'
    });
    setNode('battery', {
        value: round(batterySoc, 1),
        unit: '%',
        pulse: clamp01(Math.abs(50 - batterySoc) / 60),
        status: batterySoc < 25 ? 'warning' : 'active'
    });
    setNode('house', {
        value: round(Math.max(0.6, challengeId === 'sensor-logic' ? previewFlowLps * 1.8 : computeW / 2600), 2),
        unit: 'kW',
        pulse: clamp01(computeW / 3200),
        status: 'active'
    });
    setNode('heating', {
        value: round(heatingTemp, 1),
        unit: challengeId === 'grid-os' ? 'Wth' : '°C',
        pulse: clamp01(heatingTemp / 100),
        status: heatingTemp > 70 ? 'warning' : 'active'
    });
    setNode('sensor', {
        value: events.length || sensorCount,
        unit: 'events',
        pulse: clamp01((events.length + previewGasPpm / 80) / 12),
        status: previewGasPpm > 260 ? 'warning' : statusFromSeverity(warningCount, criticalCount)
    });
    const safetyState = String(metrics.final_state || metrics.mode || 'NORMAL').toUpperCase();
    setNode('safety', {
        value: legCount,
        unit: `${safetyState} · ${legCount} LEG`,
        pulse: safetyState.includes('LOCKOUT') || safetyState.includes('E_STOP') ? 0.95 : 0.35,
        status: safetyState.includes('LOCKOUT') || safetyState.includes('E_STOP') ? 'critical' : safetyState.includes('CRITICAL') || safetyState.includes('WARNING') ? 'warning' : 'active'
    });
    const flows = buildFlows(challengeId, nodes);
    const mode = challengeId === 'grid-os' ? String(metrics.mode || scenarioId || `AUTO · L1:${configuredSheddingL1} L2:${configuredSheddingL2}`) : challengeId === 'safety-coordination' ? String(metrics.final_state || `NORMAL · ${legCount} LEG`) : `SENSOR · ${sensorCount}ch · ${round(previewFlowLps, 2)}L/s`;
    return {
        challengeId,
        mode,
        nodes,
        flows,
        timestamp: Date.now()
    };
}
function readConfigNumber(config, path, fallback) {
    if (!config) {
        return fallback;
    }
    let cursor = config;
    for (const key of path){
        if (!cursor || typeof cursor !== 'object' || !(key in cursor)) {
            return fallback;
        }
        cursor = cursor[key];
    }
    if (typeof cursor === 'number') {
        return cursor;
    }
    if (typeof cursor === 'string') {
        const parsed = Number.parseFloat(cursor);
        return Number.isNaN(parsed) ? fallback : parsed;
    }
    return fallback;
}
function clampFloor(value, minimum) {
    return Math.max(minimum, Math.floor(value));
}
function buildFlows(challengeId, nodes) {
    const getPulse = (id)=>nodes.find((node)=>node.id === id)?.pulse || 0.2;
    const energyFlow = Math.max(getPulse('solar'), getPulse('compute'));
    const heatFlow = Math.max(getPulse('compute'), getPulse('heating'));
    const base = [
        {
            id: 'flow-solar-compute',
            from: 'solar',
            to: 'compute',
            type: 'energy',
            intensity: energyFlow,
            active: true
        },
        {
            id: 'flow-solar-battery',
            from: 'solar',
            to: 'battery',
            type: 'energy',
            intensity: getPulse('solar') * 0.7,
            active: true
        },
        {
            id: 'flow-battery-compute',
            from: 'battery',
            to: 'compute',
            type: 'energy',
            intensity: getPulse('battery') * 0.55,
            active: true
        },
        {
            id: 'flow-compute-heating',
            from: 'compute',
            to: 'heating',
            type: 'heat',
            intensity: heatFlow,
            active: true
        },
        {
            id: 'flow-grid-house',
            from: 'grid',
            to: 'house',
            type: 'energy',
            intensity: getPulse('grid') * 0.6,
            active: true
        }
    ];
    if (challengeId === 'sensor-logic') {
        base.push({
            id: 'flow-sensor-compute',
            from: 'sensor',
            to: 'compute',
            type: 'data',
            intensity: getPulse('sensor'),
            active: true
        });
    }
    if (challengeId === 'safety-coordination') {
        base.push({
            id: 'flow-safety-compute',
            from: 'safety',
            to: 'compute',
            type: 'data',
            intensity: getPulse('safety'),
            active: true
        });
    }
    return base;
}
function toSeriesPeak(artifacts, keys, fallback) {
    if (!artifacts?.series) {
        return fallback;
    }
    let max = -Infinity;
    for (const series of artifacts.series){
        if (!keys.includes(series.key)) {
            continue;
        }
        for (const point of series.points){
            max = Math.max(max, point.value);
        }
    }
    return Number.isFinite(max) ? max : fallback;
}
function readMetricNumber(metrics, key, fallback) {
    const value = metrics[key];
    if (typeof value === 'number') {
        return value;
    }
    if (typeof value === 'string') {
        const parsed = Number.parseFloat(value);
        return Number.isNaN(parsed) ? fallback : parsed;
    }
    return fallback;
}
function statusFromSeverity(warningCount, criticalCount) {
    if (criticalCount > 0) {
        return 'critical';
    }
    if (warningCount > 0) {
        return 'warning';
    }
    return 'active';
}
function clamp01(value) {
    return Math.max(0, Math.min(1, value));
}
function round(value, precision) {
    const factor = 10 ** precision;
    return Math.round(value * factor) / factor;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dashboard/sim/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SimulationDashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim$2f$ConfigEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sim/ConfigEditor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim$2f$RunPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sim/RunPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim$2f$RunHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sim/RunHistory.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim$2f$EventLog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sim/EventLog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim$2f$LineChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sim/LineChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim$2f$SimulationTuningPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sim/SimulationTuningPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim$2f$DevInspectorOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sim/DevInspectorOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim$2f$CodeEditorPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sim/CodeEditorPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$SceneShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sim3d/SceneShell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visualizations$2f$GridOSVisualization$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/visualizations/GridOSVisualization.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sim$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sim/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sim$2f$scene$2d$mapper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sim/scene-mapper.ts [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
;
function SimulationDashboardPage() {
    _s();
    const [challengeId, setChallengeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('sensor-logic');
    const [scenarioId, setScenarioId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sim$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIM_CHALLENGES"]['sensor-logic'].scenarios[0]);
    const [configText, setConfigText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sim$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIM_CHALLENGES"]['sensor-logic'].defaultConfig, null, 2));
    const [configError, setConfigError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [runs, setRuns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedRunId, setSelectedRunId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedRun, setSelectedRun] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoadingRuns, setIsLoadingRuns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [runComment, setRunComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [devModeAllowed, setDevModeAllowed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [devModeEnabled, setDevModeEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [devOverrides, setDevOverrides] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [openCodeTarget, setOpenCodeTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const activeRun = selectedRun || runs.find((run)=>run.id === selectedRunId) || null;
    const artifacts = selectedRun?.artifacts || null;
    const previewConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SimulationDashboardPage.useMemo[previewConfig]": ()=>{
            try {
                return JSON.parse(configText);
            } catch  {
                return null;
            }
        }
    }["SimulationDashboardPage.useMemo[previewConfig]"], [
        configText
    ]);
    const sceneFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SimulationDashboardPage.useMemo[sceneFrame]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sim$2f$scene$2d$mapper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSceneFrame"])(challengeId, activeRun, artifacts, previewConfig, scenarioId)
    }["SimulationDashboardPage.useMemo[sceneFrame]"], [
        activeRun,
        artifacts,
        challengeId,
        previewConfig,
        scenarioId
    ]);
    const is3dEnabled = ("TURBOPACK compile-time value", "true") === 'true';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SimulationDashboardPage.useEffect": ()=>{
            setScenarioId(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sim$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIM_CHALLENGES"][challengeId].scenarios[0]);
            setConfigText(JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sim$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIM_CHALLENGES"][challengeId].defaultConfig, null, 2));
            setConfigError(null);
            setSelectedRunId(null);
            setSelectedRun(null);
            setDevOverrides({});
            setRunComment('');
        }
    }["SimulationDashboardPage.useEffect"], [
        challengeId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SimulationDashboardPage.useEffect": ()=>{
            void fetchRuns(challengeId);
        }
    }["SimulationDashboardPage.useEffect"], [
        challengeId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SimulationDashboardPage.useEffect": ()=>{
            if (!selectedRunId) {
                return;
            }
            void fetchRunDetail(selectedRunId);
        }
    }["SimulationDashboardPage.useEffect"], [
        selectedRunId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SimulationDashboardPage.useEffect": ()=>{
            if (!selectedRunId || !activeRun) {
                return;
            }
            const isLive = activeRun.status === 'queued' || activeRun.status === 'running';
            if (!isLive) {
                return;
            }
            const timer = setInterval({
                "SimulationDashboardPage.useEffect.timer": ()=>{
                    void fetchRunDetail(selectedRunId);
                    void fetchRuns(challengeId);
                }
            }["SimulationDashboardPage.useEffect.timer"], 2500);
            return ({
                "SimulationDashboardPage.useEffect": ()=>clearInterval(timer)
            })["SimulationDashboardPage.useEffect"];
        }
    }["SimulationDashboardPage.useEffect"], [
        activeRun,
        challengeId,
        selectedRunId
    ]);
    const canRun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SimulationDashboardPage.useMemo[canRun]": ()=>{
            try {
                JSON.parse(configText);
                return true;
            } catch  {
                return false;
            }
        }
    }["SimulationDashboardPage.useMemo[canRun]"], [
        configText
    ]);
    async function fetchRuns(nextChallengeId) {
        setIsLoadingRuns(true);
        try {
            const response = await fetch(`/api/sim/runs?challengeId=${encodeURIComponent(nextChallengeId)}&limit=40`, {
                credentials: 'include'
            });
            if (!response.ok) {
                return;
            }
            const payload = await response.json();
            setRuns(payload.runs || []);
            setDevModeAllowed(Boolean(payload.devModeAllowed));
            if (!payload.devModeAllowed) {
                setDevModeEnabled(false);
            }
        } finally{
            setIsLoadingRuns(false);
        }
    }
    async function fetchRunDetail(runId) {
        const response = await fetch(`/api/sim/runs/${encodeURIComponent(runId)}`, {
            credentials: 'include'
        });
        if (!response.ok) {
            return;
        }
        const payload = await response.json();
        setSelectedRun(payload.run || null);
    }
    async function submitRun() {
        setConfigError(null);
        let config;
        try {
            config = JSON.parse(configText);
        } catch  {
            setConfigError('Invalid JSON');
            return;
        }
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/sim/runs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    challengeId,
                    scenarioId,
                    config,
                    comment: runComment.trim() || undefined,
                    devOverrides: devModeEnabled ? devOverrides : undefined
                })
            });
            const payload = await response.json().catch(()=>({}));
            if (!response.ok) {
                setConfigError(payload.error || 'Run submission failed');
                return;
            }
            await fetchRuns(challengeId);
            if (payload.runId) {
                setRunComment('');
                setSelectedRunId(payload.runId);
                await fetchRunDetail(payload.runId);
            }
        } finally{
            setIsSubmitting(false);
        }
    }
    async function cancelRun() {
        if (!selectedRunId) {
            return;
        }
        const response = await fetch(`/api/sim/runs/${encodeURIComponent(selectedRunId)}/cancel`, {
            method: 'POST',
            credentials: 'include'
        });
        if (!response.ok) {
            return;
        }
        await fetchRuns(challengeId);
        await fetchRunDetail(selectedRunId);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-display text-3xl font-bold text-brand-black",
                        children: "Simulation Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/sim/page.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 font-mono text-sm text-historic-sepia",
                        children: "Run challenge scenarios in sandbox and inspect code-feature mapping."
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/sim/page.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/sim/page.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-4 md:grid-cols-3",
                "data-feature": "sim.challenge-tabs",
                children: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sim$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIM_CHALLENGES"]).map((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setChallengeId(id),
                        className: `rounded-lg border px-4 py-3 text-left ${challengeId === id ? 'border-compute-blue bg-compute-blue/5' : 'border-historic-sepia/20 bg-white'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-display text-lg text-brand-black",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sim$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIM_CHALLENGES"][id].label
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sim/page.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-xs text-historic-sepia",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sim$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SIM_CHALLENGES"][id].description
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sim/page.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this)
                        ]
                    }, id, true, {
                        fileName: "[project]/app/dashboard/sim/page.tsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/dashboard/sim/page.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-6 lg:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 lg:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim$2f$SimulationTuningPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimulationTuningPanel"], {
                                challengeId: challengeId,
                                scenarioId: scenarioId,
                                onScenarioChange: setScenarioId,
                                configText: configText,
                                onConfigTextChange: setConfigText
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sim/page.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim$2f$ConfigEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigEditor"], {
                                value: configText,
                                onChange: setConfigText,
                                error: configError
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sim/page.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim3d$2f$SceneShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneShell"], {
                                frame: sceneFrame,
                                enabled: is3dEnabled
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sim/page.tsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChallengeView, {
                                challengeId: challengeId,
                                run: activeRun,
                                artifacts: artifacts
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sim/page.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim$2f$LineChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                                series: artifacts?.series || [],
                                title: "Simulation Signals"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sim/page.tsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim$2f$EventLog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventLog"], {
                                events: artifacts?.events || []
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sim/page.tsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/sim/page.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim$2f$RunPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunPanel"], {
                                challengeId: challengeId,
                                scenarioId: scenarioId,
                                onScenarioChange: setScenarioId,
                                comment: runComment,
                                onCommentChange: setRunComment,
                                onRun: submitRun,
                                onCancel: cancelRun,
                                currentRunStatus: activeRun?.status || null,
                                canRun: canRun,
                                isSubmitting: isSubmitting,
                                devModeAllowed: devModeAllowed,
                                devModeEnabled: devModeEnabled,
                                onDevModeEnabledChange: setDevModeEnabled
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sim/page.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim$2f$RunHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunHistory"], {
                                runs: runs,
                                selectedRunId: selectedRunId,
                                onSelectRun: setSelectedRunId
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sim/page.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this),
                            isLoadingRuns ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-xs text-historic-sepia",
                                children: "Loading runs..."
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sim/page.tsx",
                                lineNumber: 265,
                                columnNumber: 28
                            }, this) : null,
                            selectedRun?.logsUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: ()=>window.open(selectedRun.logsUrl || '', '_blank'),
                                children: "Open Logs"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sim/page.tsx",
                                lineNumber: 268,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/sim/page.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/sim/page.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim$2f$CodeEditorPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeEditorPanel"], {
                enabled: devModeAllowed && devModeEnabled,
                challengeId: challengeId,
                overrides: devOverrides,
                onOverridesChange: setDevOverrides,
                openTarget: openCodeTarget
            }, void 0, false, {
                fileName: "[project]/app/dashboard/sim/page.tsx",
                lineNumber: 275,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sim$2f$DevInspectorOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DevInspectorOverlay"], {
                enabled: devModeAllowed && devModeEnabled,
                challengeId: challengeId,
                onOpenCode: (path, line)=>setOpenCodeTarget({
                        path,
                        line,
                        nonce: Date.now()
                    })
            }, void 0, false, {
                fileName: "[project]/app/dashboard/sim/page.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/sim/page.tsx",
        lineNumber: 203,
        columnNumber: 5
    }, this);
}
_s(SimulationDashboardPage, "VRBDCKvcE608kcbD5jNsSX0MLo0=");
_c = SimulationDashboardPage;
function ChallengeView({ challengeId, run, artifacts }) {
    if (challengeId === 'sensor-logic') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: "Sensor Pipeline"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/sim/page.tsx",
                        lineNumber: 305,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/sim/page.tsx",
                    lineNumber: 304,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-3 md:grid-cols-4",
                        "data-feature": "sensor.threshold-alerts",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Step, {
                                label: "Sensors",
                                detail: "13 sensors @1Hz"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sim/page.tsx",
                                lineNumber: 309,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Step, {
                                label: "MQTT",
                                detail: "dual namespace"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sim/page.tsx",
                                lineNumber: 310,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Step, {
                                label: "Validation",
                                detail: "threshold + z-score"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sim/page.tsx",
                                lineNumber: 311,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Step, {
                                label: "Alerts",
                                detail: `${artifacts?.events?.length || 0} events`
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sim/page.tsx",
                                lineNumber: 312,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/sim/page.tsx",
                        lineNumber: 308,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/sim/page.tsx",
                    lineNumber: 307,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/sim/page.tsx",
            lineNumber: 303,
            columnNumber: 7
        }, this);
    }
    if (challengeId === 'safety-coordination') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: "Inter-LEG Safety"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/sim/page.tsx",
                        lineNumber: 323,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/sim/page.tsx",
                    lineNumber: 322,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-3 md:grid-cols-5",
                        "data-feature": "safety.fail-closed",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Step, {
                                label: "NORMAL",
                                detail: "steady"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sim/page.tsx",
                                lineNumber: 327,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Step, {
                                label: "WARNING",
                                detail: "degradation"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sim/page.tsx",
                                lineNumber: 328,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Step, {
                                label: "CRITICAL",
                                detail: "restrict"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sim/page.tsx",
                                lineNumber: 329,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Step, {
                                label: "E-STOP",
                                detail: "clearance denied"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sim/page.tsx",
                                lineNumber: 330,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Step, {
                                label: "LOCKOUT",
                                detail: "manual reset"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sim/page.tsx",
                                lineNumber: 331,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/sim/page.tsx",
                        lineNumber: 326,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/sim/page.tsx",
                    lineNumber: 325,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/sim/page.tsx",
            lineNumber: 321,
            columnNumber: 7
        }, this);
    }
    const metrics = run?.summary?.metrics || {};
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    children: "Grid-OS Visualization"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/sim/page.tsx",
                    lineNumber: 343,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/sim/page.tsx",
                lineNumber: 342,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-4",
                "data-feature": "gridos.scheduler-budget",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$visualizations$2f$GridOSVisualization$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridOSVisualization"], {}, void 0, false, {
                        fileName: "[project]/app/dashboard/sim/page.tsx",
                        lineNumber: 346,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3 font-mono text-xs text-brand-black",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Metric, {
                                label: "Mode",
                                value: String(metrics.mode || 'n/a')
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sim/page.tsx",
                                lineNumber: 348,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Metric, {
                                label: "Shedding",
                                value: String(metrics.shedding || 'n/a')
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sim/page.tsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Metric, {
                                label: "Compute W",
                                value: String(metrics.compute_w || 'n/a')
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sim/page.tsx",
                                lineNumber: 350,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Metric, {
                                label: "Grid W",
                                value: String(metrics.grid_w || 'n/a')
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/sim/page.tsx",
                                lineNumber: 351,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/sim/page.tsx",
                        lineNumber: 347,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/sim/page.tsx",
                lineNumber: 345,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/sim/page.tsx",
        lineNumber: 341,
        columnNumber: 5
    }, this);
}
_c1 = ChallengeView;
function Step({ label, detail }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-md border border-historic-sepia/20 bg-white p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-mono text-xs text-brand-black",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/dashboard/sim/page.tsx",
                lineNumber: 361,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-xs text-historic-sepia",
                children: detail
            }, void 0, false, {
                fileName: "[project]/app/dashboard/sim/page.tsx",
                lineNumber: 362,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/sim/page.tsx",
        lineNumber: 360,
        columnNumber: 5
    }, this);
}
_c2 = Step;
function Metric({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-md border border-historic-sepia/20 bg-white p-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-historic-sepia",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/dashboard/sim/page.tsx",
                lineNumber: 370,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-semibold text-brand-black",
                children: value
            }, void 0, false, {
                fileName: "[project]/app/dashboard/sim/page.tsx",
                lineNumber: 371,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/sim/page.tsx",
        lineNumber: 369,
        columnNumber: 5
    }, this);
}
_c3 = Metric;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "SimulationDashboardPage");
__turbopack_context__.k.register(_c1, "ChallengeView");
__turbopack_context__.k.register(_c2, "Step");
__turbopack_context__.k.register(_c3, "Metric");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_d797eef9._.js.map