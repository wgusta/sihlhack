module.exports = [
"[project]/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    title: {
        default: 'sihlhack | Hands‑on Energie‑Hackathon Schweiz',
        template: '%s | sihlhack'
    },
    description: 'Aus überschüssigem Solarstrom wird Wärme und Rechenleistung, direkt im Quartier. Hands‑on Hackathon für reale Energie‑ und Infrastruktur‑Lösungen.',
    keywords: [
        'hackathon',
        'Schweiz',
        'Solarstrom',
        'Wärme',
        'Rechenleistung',
        'Energie',
        'Infrastruktur',
        'Open Source',
        'LEG',
        'Sihltal',
        'Zürich'
    ],
    authors: [
        {
            name: 'sihlhack team'
        }
    ],
    metadataBase: new URL('https://sihlhack.ch'),
    openGraph: {
        title: 'sihlhack | Solarstrom wird Wärme und Rechenleistung',
        description: 'Aus überschüssigem Solarstrom wird Wärme und Rechenleistung, direkt im Quartier. Hands‑on Hackathon für reale Energie‑ und Infrastruktur‑Lösungen.',
        url: 'https://sihlhack.ch',
        siteName: 'sihlhack',
        locale: 'de_CH',
        type: 'website',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'sihlhack: Solarstrom wird Wärme und Rechenleistung'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'sihlhack | Solarstrom wird Wärme und Rechenleistung',
        description: 'Aus überschüssigem Solarstrom wird Wärme und Rechenleistung, direkt im Quartier. Hands‑on Hackathon für reale Energie‑ und Infrastruktur‑Lösungen.',
        images: [
            '/og-image.png'
        ]
    },
    robots: {
        index: true,
        follow: true
    },
    alternates: {
        canonical: 'https://sihlhack.ch'
    }
};
// JSON-LD structured data for the event
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'sihlhack 2026',
    description: 'Aus überschüssigem Solarstrom wird Wärme und Rechenleistung, direkt im Quartier. Hands‑on Hackathon für reale Energie‑ und Infrastruktur‑Lösungen.',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
        '@type': 'Place',
        name: 'Zürich (Datum folgt)',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Zürich',
            addressRegion: 'ZH',
            addressCountry: 'CH'
        }
    },
    organizer: {
        '@type': 'Organization',
        name: 'sihlhack',
        url: 'https://sihlhack.ch'
    },
    offers: {
        '@type': 'Offer',
        price: '150',
        priceCurrency: 'CHF',
        availability: 'https://schema.org/InStock',
        url: 'https://sihlhack.ch/register',
        validFrom: '2024-12-01'
    },
    image: 'https://sihlhack.ch/og-image.png'
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "de",
        className: "scroll-smooth",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify(jsonLd)
                    }
                }, void 0, false, {
                    fileName: "[project]/app/layout.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/layout.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: "min-h-screen bg-off-white",
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        id: "matomo",
                        strategy: "afterInteractive",
                        children: `
            var _paq = window._paq = window._paq || [];
            _paq.push(['disableCookies']);
            _paq.push(['setDoNotTrack', true]);
            _paq.push(['anonymizeIp']);
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="https://analytics.sihlhack.ch/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '1']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
          `
                    }, void 0, false, {
                        fileName: "[project]/app/layout.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("noscript", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            referrerPolicy: "no-referrer-when-downgrade",
                            src: "https://analytics.sihlhack.ch/matomo.php?idsite=1&rec=1",
                            style: {
                                border: 0
                            },
                            alt: ""
                        }, void 0, false, {
                            fileName: "[project]/app/layout.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/layout.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/layout.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/layout.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/client/script.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/next/dist/client/script.js <module evaluation>"));
}),
"[project]/node_modules/next/dist/client/script.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/next/dist/client/script.js"));
}),
"[project]/node_modules/next/dist/client/script.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/script.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/script.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/node_modules/next/script.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/script.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_177ccddd._.js.map