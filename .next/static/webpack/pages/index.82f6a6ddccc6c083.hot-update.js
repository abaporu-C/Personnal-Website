"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar myLoader = function(param) {\n    var src = param.src, width = param.width, quality = param.quality;\n    return \"/\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n};\nfunction HomePage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \" flex justify-center h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"align-middle text-center w-5/6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-6xl shadow-text\",\n                        children: \"Welcome\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projects\\\\Personnal-Website\\\\pages\\\\index.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        width: \"200\",\n                        height: \"200\",\n                        src: \"../assets/george_constanza.jpg\",\n                        layout: \"responsive\",\n                        placeholder: \"blur\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projects\\\\Personnal-Website\\\\pages\\\\index.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg font-bold\",\n                        children: \"Hello! My name is Vinicius Pereira and I'm a recently Software Developer graduate from Niagara College, Canada. Web Development is what I am passionate about, being able to deliver efficient software at a timely and efficient manner.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projects\\\\Personnal-Website\\\\pages\\\\index.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Projects\\\\Personnal-Website\\\\pages\\\\index.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Projects\\\\Personnal-Website\\\\pages\\\\index.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUE4QjtBQUU5QixJQUFNQyxRQUFRLEdBQUcsZ0JBQTZCO1FBQTFCQyxHQUFHLFNBQUhBLEdBQUcsRUFBRUMsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLE9BQU8sU0FBUEEsT0FBTztJQUNyQyxPQUFPLEdBQUUsQ0FBV0QsTUFBSyxDQUFkRCxHQUFHLEVBQUMsS0FBRyxDQUFRLENBQUtFLE1BQWEsQ0FBeEJELEtBQUssRUFBQyxLQUFHLENBQWdCLFFBQWRDLE9BQU8sSUFBSSxFQUFFLENBQUU7Q0FDL0M7QUFFRCxTQUFTQyxRQUFRLEdBQUc7SUFDbEIscUJBQ0U7a0JBQ0UsNEVBQUNDLFNBQU87WUFBQ0MsU0FBUyxFQUFDLCtCQUErQjtzQkFDaEQsNEVBQUNDLEtBQUc7Z0JBQUNELFNBQVMsRUFBQyxnQ0FBZ0M7O2tDQUM3Qyw4REFBQ0UsSUFBRTt3QkFBQ0YsU0FBUyxFQUFDLHNCQUFzQjtrQ0FBQyxTQUFPOzs7Ozs0QkFBSztrQ0FDakQsOERBQUNQLG1EQUFLO3dCQUFDRyxLQUFLLEVBQUMsS0FBSzt3QkFBQ08sTUFBTSxFQUFDLEtBQUs7d0JBQUNSLEdBQUcsRUFBQyxnQ0FBZ0M7d0JBQUNTLE1BQU0sRUFBQyxZQUFZO3dCQUFDQyxXQUFXLEVBQUMsTUFBTTs7Ozs7NEJBQUc7a0NBQzlHLDhEQUFDQyxHQUFDO3dCQUFDTixTQUFTLEVBQUMsbUJBQW1CO2tDQUFDLDJPQUMwRjs7Ozs7NEJBQUk7Ozs7OztvQkFDM0g7Ozs7O2dCQUNFO3FCQUNULENBQ0o7Q0FDRjtBQWJRRixLQUFBQSxRQUFRO0FBZWpCLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5jb25zdCBteUxvYWRlciA9ICh7IHNyYywgd2lkdGgsIHF1YWxpdHkgfSkgPT4ge1xuICByZXR1cm4gYC8ke3NyY30/dz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gXG59XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCIgZmxleCBqdXN0aWZ5LWNlbnRlciBoLXNjcmVlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZSB0ZXh0LWNlbnRlciB3LTUvNlwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCBzaGFkb3ctdGV4dFwiPldlbGNvbWU8L2gxPlxuICAgICAgICAgIDxJbWFnZSB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiIHNyYz1cIi4uL2Fzc2V0cy9nZW9yZ2VfY29uc3RhbnphLmpwZ1wiIGxheW91dD1cInJlc3BvbnNpdmVcIiBwbGFjZWhvbGRlcj1cImJsdXJcIiAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+SGVsbG8hIE15IG5hbWUgaXMgVmluaWNpdXMgUGVyZWlyYSBhbmQgSSdtIGEgcmVjZW50bHkgU29mdHdhcmUgRGV2ZWxvcGVyIGdyYWR1YXRlIGZyb20gTmlhZ2FyYSBDb2xsZWdlLCBDYW5hZGEuXG4gICAgICAgICAgICBXZWIgRGV2ZWxvcG1lbnQgaXMgd2hhdCBJIGFtIHBhc3Npb25hdGUgYWJvdXQsIGJlaW5nIGFibGUgdG8gZGVsaXZlciBlZmZpY2llbnQgc29mdHdhcmUgYXQgYSB0aW1lbHkgYW5kIGVmZmljaWVudCBtYW5uZXIuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxuIl0sIm5hbWVzIjpbIkltYWdlIiwibXlMb2FkZXIiLCJzcmMiLCJ3aWR0aCIsInF1YWxpdHkiLCJIb21lUGFnZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsImhlaWdodCIsImxheW91dCIsInBsYWNlaG9sZGVyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});