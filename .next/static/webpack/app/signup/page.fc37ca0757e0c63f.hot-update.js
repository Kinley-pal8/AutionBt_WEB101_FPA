"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/signup/page",{

/***/ "(app-pages-browser)/./src/app/signup/page.tsx":
/*!*********************************!*\
  !*** ./src/app/signup/page.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignUpPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n// File: src/app/signup/page.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst InputField = (param)=>{\n    let { name, value, onChange, placeholder, type = \"text\", error } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full mb-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: name,\n                value: value,\n                onChange: onChange,\n                type: type,\n                placeholder: placeholder,\n                className: \"w-full p-3 border-2 \".concat(error ? \"border-red-400\" : \"border-gray-200\", \" rounded-lg focus:outline-none focus:border-purple-500 transition duration-300\")\n            }, void 0, false, {\n                fileName: \"/Users/sonamdorjighalley/Desktop/WEB final project/AutionBt_WEB101_FPA/src/app/signup/page.tsx\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, undefined),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-1 text-xs text-red-500\",\n                children: error\n            }, void 0, false, {\n                fileName: \"/Users/sonamdorjighalley/Desktop/WEB final project/AutionBt_WEB101_FPA/src/app/signup/page.tsx\",\n                lineNumber: 42,\n                columnNumber: 15\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sonamdorjighalley/Desktop/WEB final project/AutionBt_WEB101_FPA/src/app/signup/page.tsx\",\n        lineNumber: 33,\n        columnNumber: 3\n    }, undefined);\n};\n_c = InputField;\nfunction SignUpPage() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        password: \"\",\n        phoneNumber: \"\"\n    });\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const validateForm = ()=>{\n        const newErrors = {};\n        if (!formData.name) newErrors.name = \"Name is required\";\n        if (!formData.email) newErrors.email = \"Email is required\";\n        if (!formData.password) newErrors.password = \"Password is required\";\n        if (!formData.phoneNumber) newErrors.phoneNumber = \"Phone Number is required\";\n        setErrors(newErrors);\n        return Object.keys(newErrors).length === 0;\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (!validateForm()) return;\n        try {\n            const response = await fetch(\"http://localhost:3000/register\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(formData)\n            });\n            const data = await response.json();\n            if (response.ok) {\n                console.log(\"Registration successful\", data);\n                router.push(\"/signin\");\n                console.error(\"Registration failed\", data.message);\n                setErrors({\n                    form: data.message\n                });\n            }\n        } catch (error) {\n            console.error(\"Error:\", error);\n            setErrors({\n                form: \"An unexpected error occurred. Please try again.\"\n            });\n        }\n    };\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData((prev)=>({\n                ...prev,\n                [name]: value\n            }));\n        setErrors((prev)=>({\n                ...prev,\n                [name]: \"\",\n                form: \"\"\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-pink-500\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-2xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-extrabold text-center text-gray-900\",\n                    children: \"Create Account\"\n                }, void 0, false, {\n                    fileName: \"/Users/sonamdorjighalley/Desktop/WEB final project/AutionBt_WEB101_FPA/src/app/signup/page.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"space-y-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InputField, {\n                            name: \"name\",\n                            value: formData.name,\n                            onChange: handleChange,\n                            placeholder: \"Name\",\n                            error: errors.name\n                        }, void 0, false, {\n                            fileName: \"/Users/sonamdorjighalley/Desktop/WEB final project/AutionBt_WEB101_FPA/src/app/signup/page.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InputField, {\n                            name: \"email\",\n                            value: formData.email,\n                            onChange: handleChange,\n                            type: \"email\",\n                            placeholder: \"Email Address\",\n                            error: errors.email\n                        }, void 0, false, {\n                            fileName: \"/Users/sonamdorjighalley/Desktop/WEB final project/AutionBt_WEB101_FPA/src/app/signup/page.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InputField, {\n                            name: \"password\",\n                            value: formData.password,\n                            onChange: handleChange,\n                            type: \"password\",\n                            placeholder: \"Password (6 or more characters)\",\n                            error: errors.password\n                        }, void 0, false, {\n                            fileName: \"/Users/sonamdorjighalley/Desktop/WEB final project/AutionBt_WEB101_FPA/src/app/signup/page.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InputField, {\n                            name: \"phoneNumber\",\n                            value: formData.phoneNumber,\n                            onChange: handleChange,\n                            placeholder: \"Phone Number\",\n                            error: errors.phoneNumber\n                        }, void 0, false, {\n                            fileName: \"/Users/sonamdorjighalley/Desktop/WEB final project/AutionBt_WEB101_FPA/src/app/signup/page.tsx\",\n                            lineNumber: 123,\n                            columnNumber: 11\n                        }, this),\n                        errors.form && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-center text-red-500\",\n                            children: errors.form\n                        }, void 0, false, {\n                            fileName: \"/Users/sonamdorjighalley/Desktop/WEB final project/AutionBt_WEB101_FPA/src/app/signup/page.tsx\",\n                            lineNumber: 130,\n                            columnNumber: 27\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full py-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300\",\n                            children: \"SIGN UP\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sonamdorjighalley/Desktop/WEB final project/AutionBt_WEB101_FPA/src/app/signup/page.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sonamdorjighalley/Desktop/WEB final project/AutionBt_WEB101_FPA/src/app/signup/page.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm text-center text-gray-600\",\n                    children: [\n                        \"Already have an account?\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>router.push(\"/signin\"),\n                            className: \"ml-1 font-medium text-purple-600 hover:text-purple-500\",\n                            children: \"Sign in\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sonamdorjighalley/Desktop/WEB final project/AutionBt_WEB101_FPA/src/app/signup/page.tsx\",\n                            lineNumber: 140,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sonamdorjighalley/Desktop/WEB final project/AutionBt_WEB101_FPA/src/app/signup/page.tsx\",\n                    lineNumber: 138,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sonamdorjighalley/Desktop/WEB final project/AutionBt_WEB101_FPA/src/app/signup/page.tsx\",\n            lineNumber: 97,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sonamdorjighalley/Desktop/WEB final project/AutionBt_WEB101_FPA/src/app/signup/page.tsx\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, this);\n}\n_s(SignUpPage, \"usS31IKZsrK/sm6FZC1WwcVj8UU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c1 = SignUpPage;\nvar _c, _c1;\n$RefreshReg$(_c, \"InputField\");\n$RefreshReg$(_c1, \"SignUpPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2lnbnVwL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsZ0NBQWdDOzs7QUFJeUI7QUFDYjtBQTBCNUMsTUFBTUUsYUFBd0M7UUFBQyxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sTUFBTSxFQUFFQyxLQUFLLEVBQUU7eUJBQ3pHLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQ0NSLE1BQU1BO2dCQUNOQyxPQUFPQTtnQkFDUEMsVUFBVUE7Z0JBQ1ZFLE1BQU1BO2dCQUNORCxhQUFhQTtnQkFDYkksV0FBVyx1QkFBb0UsT0FBN0NGLFFBQVEsbUJBQW1CLG1CQUFrQjs7Ozs7O1lBRWhGQSx1QkFBUyw4REFBQ0k7Z0JBQUVGLFdBQVU7MEJBQTZCRjs7Ozs7Ozs7Ozs7OztLQVZsRE47QUFjUyxTQUFTVzs7SUFDdEIsTUFBTUMsU0FBU2IsMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ2MsVUFBVUMsWUFBWSxHQUFHaEIsK0NBQVFBLENBQVc7UUFDakRHLE1BQU07UUFDTmMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQWE7SUFDZjtJQUNBLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHckIsK0NBQVFBLENBQVMsQ0FBQztJQUU5QyxNQUFNc0IsZUFBZTtRQUNuQixNQUFNQyxZQUFvQixDQUFDO1FBQzNCLElBQUksQ0FBQ1IsU0FBU1osSUFBSSxFQUFFb0IsVUFBVXBCLElBQUksR0FBRztRQUNyQyxJQUFJLENBQUNZLFNBQVNFLEtBQUssRUFBRU0sVUFBVU4sS0FBSyxHQUFHO1FBQ3ZDLElBQUksQ0FBQ0YsU0FBU0csUUFBUSxFQUFFSyxVQUFVTCxRQUFRLEdBQUc7UUFDN0MsSUFBSSxDQUFDSCxTQUFTSSxXQUFXLEVBQUVJLFVBQVVKLFdBQVcsR0FBRztRQUNuREUsVUFBVUU7UUFDVixPQUFPQyxPQUFPQyxJQUFJLENBQUNGLFdBQVdHLE1BQU0sS0FBSztJQUMzQztJQUVBLE1BQU1DLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSSxDQUFDUCxnQkFBZ0I7UUFFckIsSUFBSTtZQUNGLE1BQU1RLFdBQVcsTUFBTUMsTUFBTSxrQ0FBa0M7Z0JBQzdEQyxRQUFRO2dCQUNSQyxTQUFTO29CQUFFLGdCQUFnQjtnQkFBbUI7Z0JBQzlDQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNyQjtZQUN2QjtZQUNBLE1BQU1zQixPQUFPLE1BQU1QLFNBQVNRLElBQUk7WUFDaEMsSUFBSVIsU0FBU1MsRUFBRSxFQUFFO2dCQUNmQyxRQUFRQyxHQUFHLENBQUMsMkJBQTJCSjtnQkFDdkN2QixPQUFPNEIsSUFBSSxDQUFDO2dCQUNaRixRQUFRaEMsS0FBSyxDQUFDLHVCQUF1QjZCLEtBQUtNLE9BQU87Z0JBQ2pEdEIsVUFBVTtvQkFBRXVCLE1BQU1QLEtBQUtNLE9BQU87Z0JBQUM7WUFDakM7UUFDRixFQUFFLE9BQU9uQyxPQUFPO1lBQ2RnQyxRQUFRaEMsS0FBSyxDQUFDLFVBQVVBO1lBQ3hCYSxVQUFVO2dCQUFFdUIsTUFBTTtZQUFrRDtRQUN0RTtJQUNGO0lBRUEsTUFBTUMsZUFBZSxDQUFDakI7UUFDcEIsTUFBTSxFQUFFekIsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR3dCLEVBQUVrQixNQUFNO1FBQ2hDOUIsWUFBWStCLENBQUFBLE9BQVM7Z0JBQUUsR0FBR0EsSUFBSTtnQkFBRSxDQUFDNUMsS0FBSyxFQUFFQztZQUFNO1FBQzlDaUIsVUFBVTBCLENBQUFBLE9BQVM7Z0JBQUUsR0FBR0EsSUFBSTtnQkFBRSxDQUFDNUMsS0FBSyxFQUFFO2dCQUFJeUMsTUFBTTtZQUFHO0lBQ3JEO0lBRUEscUJBQ0UsOERBQUNuQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ3NDO29CQUFHdEMsV0FBVTs4QkFBb0Q7Ozs7Ozs4QkFDbEUsOERBQUNrQztvQkFBS0ssVUFBVXRCO29CQUFjakIsV0FBVTs7c0NBQ3RDLDhEQUFDUjs0QkFDQ0MsTUFBSzs0QkFDTEMsT0FBT1csU0FBU1osSUFBSTs0QkFDcEJFLFVBQVV3Qzs0QkFDVnZDLGFBQVk7NEJBQ1pFLE9BQU9ZLE9BQU9qQixJQUFJOzs7Ozs7c0NBRXBCLDhEQUFDRDs0QkFDQ0MsTUFBSzs0QkFDTEMsT0FBT1csU0FBU0UsS0FBSzs0QkFDckJaLFVBQVV3Qzs0QkFDVnRDLE1BQUs7NEJBQ0xELGFBQVk7NEJBQ1pFLE9BQU9ZLE9BQU9ILEtBQUs7Ozs7OztzQ0FFckIsOERBQUNmOzRCQUNDQyxNQUFLOzRCQUNMQyxPQUFPVyxTQUFTRyxRQUFROzRCQUN4QmIsVUFBVXdDOzRCQUNWdEMsTUFBSzs0QkFDTEQsYUFBWTs0QkFDWkUsT0FBT1ksT0FBT0YsUUFBUTs7Ozs7O3NDQUV4Qiw4REFBQ2hCOzRCQUNDQyxNQUFLOzRCQUNMQyxPQUFPVyxTQUFTSSxXQUFXOzRCQUMzQmQsVUFBVXdDOzRCQUNWdkMsYUFBWTs0QkFDWkUsT0FBT1ksT0FBT0QsV0FBVzs7Ozs7O3dCQUUxQkMsT0FBT3dCLElBQUksa0JBQUksOERBQUNoQzs0QkFBRUYsV0FBVTtzQ0FBb0NVLE9BQU93QixJQUFJOzs7Ozs7c0NBQzVFLDhEQUFDTTs0QkFDQzNDLE1BQUs7NEJBQ0xHLFdBQVU7c0NBQ1g7Ozs7Ozs7Ozs7Ozs4QkFJSCw4REFBQ0U7b0JBQUVGLFdBQVU7O3dCQUFvQztzQ0FFL0MsOERBQUN3Qzs0QkFDQ0MsU0FBUyxJQUFNckMsT0FBTzRCLElBQUksQ0FBQzs0QkFDM0JoQyxXQUFVO3NDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBeEd3Qkc7O1FBQ1BaLHNEQUFTQTs7O01BREZZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc2lnbnVwL3BhZ2UudHN4P2I2ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRmlsZTogc3JjL2FwcC9zaWdudXAvcGFnZS50c3hcblxuXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlLCBDaGFuZ2VFdmVudCwgRm9ybUV2ZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcblxuaW50ZXJmYWNlIEZvcm1EYXRhIHtcbiAgbmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xuICBwaG9uZU51bWJlcjogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgRXJyb3JzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgZW1haWw/OiBzdHJpbmc7XG4gIHBhc3N3b3JkPzogc3RyaW5nO1xuICBwaG9uZU51bWJlcj86IHN0cmluZztcbiAgZm9ybT86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIElucHV0RmllbGRQcm9wcyB7XG4gIG5hbWU6IGtleW9mIEZvcm1EYXRhO1xuICB2YWx1ZTogc3RyaW5nO1xuICBvbkNoYW5nZTogKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkO1xuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICB0eXBlPzogc3RyaW5nO1xuICBlcnJvcj86IHN0cmluZztcbn1cblxuY29uc3QgSW5wdXRGaWVsZDogUmVhY3QuRkM8SW5wdXRGaWVsZFByb3BzPiA9ICh7IG5hbWUsIHZhbHVlLCBvbkNoYW5nZSwgcGxhY2Vob2xkZXIsIHR5cGUgPSBcInRleHRcIiwgZXJyb3IgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYi00XCI+XG4gICAgPGlucHV0XG4gICAgICBuYW1lPXtuYW1lfVxuICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgdHlwZT17dHlwZX1cbiAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBwLTMgYm9yZGVyLTIgJHtlcnJvciA/ICdib3JkZXItcmVkLTQwMCcgOiAnYm9yZGVyLWdyYXktMjAwJ30gcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXB1cnBsZS01MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDBgfVxuICAgIC8+XG4gICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cIm10LTEgdGV4dC14cyB0ZXh0LXJlZC01MDBcIj57ZXJyb3J9PC9wPn1cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduVXBQYWdlKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZTxGb3JtRGF0YT4oe1xuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gICAgcGhvbmVOdW1iZXI6ICcnXG4gIH0pO1xuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGU8RXJyb3JzPih7fSk7XG5cbiAgY29uc3QgdmFsaWRhdGVGb3JtID0gKCk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IG5ld0Vycm9yczogRXJyb3JzID0ge307XG4gICAgaWYgKCFmb3JtRGF0YS5uYW1lKSBuZXdFcnJvcnMubmFtZSA9IFwiTmFtZSBpcyByZXF1aXJlZFwiO1xuICAgIGlmICghZm9ybURhdGEuZW1haWwpIG5ld0Vycm9ycy5lbWFpbCA9IFwiRW1haWwgaXMgcmVxdWlyZWRcIjtcbiAgICBpZiAoIWZvcm1EYXRhLnBhc3N3b3JkKSBuZXdFcnJvcnMucGFzc3dvcmQgPSBcIlBhc3N3b3JkIGlzIHJlcXVpcmVkXCI7XG4gICAgaWYgKCFmb3JtRGF0YS5waG9uZU51bWJlcikgbmV3RXJyb3JzLnBob25lTnVtYmVyID0gXCJQaG9uZSBOdW1iZXIgaXMgcmVxdWlyZWRcIjtcbiAgICBzZXRFcnJvcnMobmV3RXJyb3JzKTtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobmV3RXJyb3JzKS5sZW5ndGggPT09IDA7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdmFsaWRhdGVGb3JtKCkpIHJldHVybjtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVnaXN0ZXInLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCcsIGRhdGEpO1xuICAgICAgICByb3V0ZXIucHVzaCgnL3NpZ25pbicpOyBcbiAgICAgICAgY29uc29sZS5lcnJvcignUmVnaXN0cmF0aW9uIGZhaWxlZCcsIGRhdGEubWVzc2FnZSk7XG4gICAgICAgIHNldEVycm9ycyh7IGZvcm06IGRhdGEubWVzc2FnZSB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgICAgc2V0RXJyb3JzKHsgZm9ybTogXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluLlwiIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBzZXRGb3JtRGF0YShwcmV2ID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpO1xuICAgIHNldEVycm9ycyhwcmV2ID0+ICh7IC4uLnByZXYsIFtuYW1lXTogJycsIGZvcm06ICcnIH0pKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1wdXJwbGUtNDAwIHRvLXBpbmstNTAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1tZCBwLTggc3BhY2UteS04IGJnLXdoaXRlIHJvdW5kZWQteGwgc2hhZG93LTJ4bFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTkwMFwiPkNyZWF0ZSBBY2NvdW50PC9oMT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5uYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICBlcnJvcj17ZXJyb3JzLm5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8SW5wdXRGaWVsZFxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuZW1haWx9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8SW5wdXRGaWVsZFxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZCAoNiBvciBtb3JlIGNoYXJhY3RlcnMpXCJcbiAgICAgICAgICAgIGVycm9yPXtlcnJvcnMucGFzc3dvcmR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8SW5wdXRGaWVsZFxuICAgICAgICAgICAgbmFtZT1cInBob25lTnVtYmVyXCJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5waG9uZU51bWJlcn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBob25lIE51bWJlclwiXG4gICAgICAgICAgICBlcnJvcj17ZXJyb3JzLnBob25lTnVtYmVyfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2Vycm9ycy5mb3JtICYmIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1jZW50ZXIgdGV4dC1yZWQtNTAwXCI+e2Vycm9ycy5mb3JtfTwvcD59XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMyB0ZXh0LXdoaXRlIGJnLXB1cnBsZS02MDAgcm91bmRlZC1sZyBob3ZlcjpiZy1wdXJwbGUtNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1wdXJwbGUtNTAwIGZvY3VzOnJpbmctb3BhY2l0eS01MCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU0lHTiBVUFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P1xuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvc2lnbmluJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0xIGZvbnQtbWVkaXVtIHRleHQtcHVycGxlLTYwMCBob3Zlcjp0ZXh0LXB1cnBsZS01MDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNpZ24gaW5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUm91dGVyIiwiSW5wdXRGaWVsZCIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInAiLCJTaWduVXBQYWdlIiwicm91dGVyIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImVtYWlsIiwicGFzc3dvcmQiLCJwaG9uZU51bWJlciIsImVycm9ycyIsInNldEVycm9ycyIsInZhbGlkYXRlRm9ybSIsIm5ld0Vycm9ycyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJvayIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwibWVzc2FnZSIsImZvcm0iLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJwcmV2IiwiaDEiLCJvblN1Ym1pdCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/signup/page.tsx\n"));

/***/ })

});