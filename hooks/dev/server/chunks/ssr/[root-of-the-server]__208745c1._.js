module.exports = [
"[project]/lib/abi/gatekeeper.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GATEKEEPER_ABI",
    ()=>GATEKEEPER_ABI,
    "GATEKEEPER_ADDRESS",
    ()=>GATEKEEPER_ADDRESS
]);
const GATEKEEPER_ADDRESS = "0x3F0c2937E1B4854E6Bb78AE5E7ce49AF3B42D84e";
const GATEKEEPER_ABI = [
    {
        "type": "function",
        "name": "sponsorGas",
        "stateMutability": "payable",
        "inputs": [
            {
                "name": "user",
                "type": "address"
            },
            {
                "name": "maxAmount",
                "type": "uint256"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "batchSponsorGas",
        "stateMutability": "payable",
        "inputs": [
            {
                "name": "users",
                "type": "address[]"
            },
            {
                "name": "maxAmounts",
                "type": "uint256[]"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "remainingToday",
        "stateMutability": "view",
        "inputs": [
            {
                "name": "user",
                "type": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "withdraw",
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "name": "amount",
                "type": "uint256"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "owner",
        "stateMutability": "view",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "dailyLimit",
        "stateMutability": "view",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ]
    },
    {
        "type": "event",
        "name": "Sponsored",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "indexed": true
            },
            {
                "name": "amount",
                "type": "uint256",
                "indexed": false
            }
        ],
        "anonymous": false
    }
];
}),
"[project]/components/SponsorGasForm.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>SponsorGasForm
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$wagmi$29$__ = __turbopack_context__.i("[externals]/wagmi [external] (wagmi, esm_import, [project]/node_modules/wagmi)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$viem$29$__ = __turbopack_context__.i("[externals]/viem [external] (viem, esm_import, [project]/node_modules/viem)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abi$2f$gatekeeper$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/abi/gatekeeper.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$wagmi$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$viem$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$wagmi$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$viem$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
function SponsorGasForm() {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [maxAmount, setMaxAmount] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const { data: hash, isPending, writeContract, error } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$wagmi$29$__["useWriteContract"])();
    const { isLoading: isConfirming, isSuccess } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$wagmi$29$__["useWaitForTransactionReceipt"])({
        hash
    });
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!user || !maxAmount) return;
        writeContract({
            address: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abi$2f$gatekeeper$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["GATEKEEPER_ADDRESS"],
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abi$2f$gatekeeper$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["GATEKEEPER_ABI"],
            functionName: "sponsorGas",
            args: [
                user,
                (0, __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$viem$29$__["parseEther"])(maxAmount)
            ],
            value: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$viem$29$__["parseEther"])(maxAmount)
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "max-w-md mx-auto bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-4 text-white",
                children: "Sponsor Gas"
            }, void 0, false, {
                fileName: "[project]/components/SponsorGasForm.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                className: "block text-gray-300 mb-1",
                                children: "User Address"
                            }, void 0, false, {
                                fileName: "[project]/components/SponsorGasForm.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: user,
                                onChange: (e)=>setUser(e.target.value),
                                className: "w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500",
                                placeholder: "0x123..."
                            }, void 0, false, {
                                fileName: "[project]/components/SponsorGasForm.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SponsorGasForm.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                className: "block text-gray-300 mb-1",
                                children: "Max Amount (ETH)"
                            }, void 0, false, {
                                fileName: "[project]/components/SponsorGasForm.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: maxAmount,
                                onChange: (e)=>setMaxAmount(e.target.value),
                                className: "w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500",
                                placeholder: "0.01"
                            }, void 0, false, {
                                fileName: "[project]/components/SponsorGasForm.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SponsorGasForm.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: isPending,
                        className: "w-full py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 rounded text-white font-medium",
                        children: isPending ? "Sending..." : "Sponsor Gas"
                    }, void 0, false, {
                        fileName: "[project]/components/SponsorGasForm.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SponsorGasForm.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            hash && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: "text-blue-400 mt-3 break-all",
                children: [
                    "Transaction sent: ",
                    hash
                ]
            }, void 0, true, {
                fileName: "[project]/components/SponsorGasForm.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this),
            isConfirming && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: "text-yellow-400 mt-3",
                children: "Waiting for confirmation..."
            }, void 0, false, {
                fileName: "[project]/components/SponsorGasForm.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this),
            isSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: "text-green-400 mt-3",
                children: "Gas sponsored successfully!"
            }, void 0, false, {
                fileName: "[project]/components/SponsorGasForm.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: "text-red-400 mt-3",
                children: [
                    "Error: ",
                    error.message || "Transaction failed"
                ]
            }, void 0, true, {
                fileName: "[project]/components/SponsorGasForm.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SponsorGasForm.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/pages/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SponsorGasForm$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SponsorGasForm.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SponsorGasForm$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SponsorGasForm$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black text-white p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold mb-6",
                    children: "Gatekeeper Dashboard"
                }, void 0, false, {
                    fileName: "[project]/pages/index.tsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 mb-8",
                    children: "Sponsor gas for users, check remaining limits, and manage the contract."
                }, void 0, false, {
                    fileName: "[project]/pages/index.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SponsorGasForm$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/pages/index.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/pages/index.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pages/index.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__208745c1._.js.map