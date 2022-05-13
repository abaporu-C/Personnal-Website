/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/footer.tsx":
/*!*******************************!*\
  !*** ./components/footer.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n// components/footer.tsx\nfunction Footer() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {}, void 0, false, {\n            fileName: \"C:\\\\Projects\\\\Personnal-Website\\\\components\\\\footer.tsx\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvb3Rlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUE7QUFGQSx3QkFBd0I7QUFFeEIsU0FBU0EsTUFBTSxHQUFHO0lBQ2hCLHFCQUNFO2tCQUNFLDRFQUFDQyxRQUFNOzs7O2dCQUNFO3FCQUNSLENBQ0o7Q0FDRjtBQUVELGlFQUFlRCxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIudHN4P2UzYTAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9mb290ZXIudHN4XG5cbmZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGZvb3Rlcj5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxuIl0sIm5hbWVzIjpbIkZvb3RlciIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/footer.tsx\n");

/***/ }),

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ \"react-scroll\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ \"react-icons/ai\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Header() {\n    //State\n    const { 0: active , 1: setActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const MenuToggle = ()=>{\n        setActive(!active);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: \"mx-2\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: `flex flex-wrap\n          ${active ? \"\" : \"border-b\"}\n          items-center\n          justify-between\n          w-full\n          py-4\n          md:py-0\n          px-4\n          text-lg text-700\n        `,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillHome, {\n                                onClick: ()=>router.push(\"/\")\n                                ,\n                                className: \"cursor-pointer float-left inline-block\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projects\\\\Personnal-Website\\\\components\\\\header.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Projects\\\\Personnal-Website\\\\components\\\\header.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projects\\\\Personnal-Website\\\\components\\\\header.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        onClick: MenuToggle,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineMenu, {\n                            className: `float-right h-6 w-6 cursor-pointer md:hidden block`\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Projects\\\\Personnal-Website\\\\components\\\\header.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projects\\\\Personnal-Website\\\\components\\\\header.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: `${active ? \"block\" : \"hidden\"} w-full md:flex md:items-center md:w-auto`,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: `${active ? \"divide-y-2\" : \"\"} text-base pt-4 md:flex md:place-content-end md:pt-0`,\n                            children: [\n                                \"about\",\n                                \"portfolio\",\n                                \"blog\",\n                                \"contact\"\n                            ].map((to, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                                        className: \"cursor-pointer transition-all duration-500 ease-in-out py-2 block md: p-4 hover:text-lg\",\n                                        activeClass: \"active\",\n                                        to: to,\n                                        children: to.charAt(0).toUpperCase() + to.substring(1)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Projects\\\\Personnal-Website\\\\components\\\\header.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 55\n                                    }, this)\n                                }, index, false, {\n                                    fileName: \"C:\\\\Projects\\\\Personnal-Website\\\\components\\\\header.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 39\n                                }, this)\n                            )\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Projects\\\\Personnal-Website\\\\components\\\\header.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projects\\\\Personnal-Website\\\\components\\\\header.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Projects\\\\Personnal-Website\\\\components\\\\header.tsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Projects\\\\Personnal-Website\\\\components\\\\header.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFnQztBQUNPO0FBQ3FCO0FBQ0Y7QUFFMUQsU0FBU0ssTUFBTSxHQUFHO0lBRWhCLE9BQU87SUFDUCxNQUFNLEVBUlIsR0FRU0MsTUFBTSxHQVJmLEdBUWlCQyxTQUFTLE1BQUlQLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQzNDLE1BQU1RLE1BQU0sR0FBR1Asc0RBQVMsRUFBRTtJQUUxQixNQUFNUSxVQUFVLEdBQUcsSUFBTTtRQUN2QkYsU0FBUyxDQUFDLENBQUNELE1BQU0sQ0FBQztLQUNuQjtJQUVELHFCQUNFO2tCQUNFLDRFQUFDSSxRQUFNO1lBQUNDLFNBQVMsRUFBQyxNQUFNO3NCQUN0Qiw0RUFBQ0MsS0FBRztnQkFBQ0QsU0FBUyxFQUFFLENBQUM7VUFDZixFQUFFTCxNQUFNLEdBQUcsRUFBRSxHQUFHLFVBQVUsQ0FBQzs7Ozs7Ozs7UUFRN0IsQ0FBQzs7a0NBQ0MsOERBQUNPLEtBQUc7a0NBQ0YsNEVBQUNDLEdBQUM7NEJBQUNDLElBQUksRUFBQyxHQUFHO3NDQUNULDRFQUFDWixzREFBVTtnQ0FBQ2EsT0FBTyxFQUFFLElBQU1SLE1BQU0sQ0FBQ1MsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQ0FBQTtnQ0FBRU4sU0FBUyxFQUFDLHdDQUF3Qzs7Ozs7b0NBQUc7Ozs7O2dDQUNoRzs7Ozs7NEJBQ0E7a0NBQ04sOERBQUNHLEdBQUM7d0JBQUNDLElBQUksRUFBQyxHQUFHO3dCQUFDQyxPQUFPLEVBQUVQLFVBQVU7a0NBQzdCLDRFQUFDTCx5REFBYTs0QkFBQ08sU0FBUyxFQUFFLENBQUMsa0RBQWtELENBQUM7Ozs7O2dDQUFJOzs7Ozs0QkFDaEY7a0NBQ0osOERBQUNFLEtBQUc7d0JBQUNGLFNBQVMsRUFBRSxDQUFDLEVBQUVMLE1BQU0sR0FBRyxPQUFPLEdBQUcsUUFBUSxDQUFDLHlDQUF5QyxDQUFDO2tDQUN2Riw0RUFBQ1ksSUFBRTs0QkFBQ1AsU0FBUyxFQUFFLENBQUMsRUFBRUwsTUFBTSxHQUFHLFlBQVksR0FBRyxFQUFFLENBQUMsb0RBQW9ELENBQUM7c0NBRTlGO2dDQUFDLE9BQU87Z0NBQUUsV0FBVztnQ0FBRSxNQUFNO2dDQUFFLFNBQVM7NkJBQUMsQ0FDdENhLEdBQUcsQ0FBQyxDQUFDQyxFQUFFLEVBQUVDLEtBQUssaUJBQUssOERBQUNDLElBQUU7OENBQWEsNEVBQUNwQiw4Q0FBSTt3Q0FBQ1MsU0FBUyxFQUFDLHlGQUF5Rjt3Q0FBQ1ksV0FBVyxFQUFDLFFBQVE7d0NBQUNILEVBQUUsRUFBRUEsRUFBRTtrREFBR0EsRUFBRSxDQUFDSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNDLFdBQVcsRUFBRSxHQUFHTCxFQUFFLENBQUNNLFNBQVMsQ0FBQyxDQUFDLENBQUM7Ozs7OzRDQUFRO21DQUFuTUwsS0FBSzs7Ozt3Q0FBbU07NEJBQUEsQ0FBQzs7Ozs7Z0NBRXZPOzs7Ozs0QkFDRDs7Ozs7O29CQUNGOzs7OztnQkFDQztxQkFDUixDQUNKO0NBQ0Y7QUFFRCxpRUFBZWhCLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci50c3g/ODcwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBMaW5rLCBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCB9IGZyb20gJ3JlYWN0LXNjcm9sbCdcbmltcG9ydCB7IEFpRmlsbEhvbWUsIEFpT3V0bGluZU1lbnUgfSBmcm9tICdyZWFjdC1pY29ucy9haSdcblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuXG4gIC8vU3RhdGVcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IE1lbnVUb2dnbGUgPSAoKSA9PiB7XG4gICAgc2V0QWN0aXZlKCFhY3RpdmUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm14LTJcIj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e2BmbGV4IGZsZXgtd3JhcFxuICAgICAgICAgICR7YWN0aXZlID8gXCJcIiA6IFwiYm9yZGVyLWJcIn1cbiAgICAgICAgICBpdGVtcy1jZW50ZXJcbiAgICAgICAgICBqdXN0aWZ5LWJldHdlZW5cbiAgICAgICAgICB3LWZ1bGxcbiAgICAgICAgICBweS00XG4gICAgICAgICAgbWQ6cHktMFxuICAgICAgICAgIHB4LTRcbiAgICAgICAgICB0ZXh0LWxnIHRleHQtNzAwXG4gICAgICAgIGB9PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICA8QWlGaWxsSG9tZSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycpfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBmbG9hdC1sZWZ0IGlubGluZS1ibG9ja1wiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXtNZW51VG9nZ2xlfT5cbiAgICAgICAgICAgIDxBaU91dGxpbmVNZW51IGNsYXNzTmFtZT17YGZsb2F0LXJpZ2h0IGgtNiB3LTYgY3Vyc29yLXBvaW50ZXIgbWQ6aGlkZGVuIGJsb2NrYH0gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2FjdGl2ZSA/IFwiYmxvY2tcIiA6IFwiaGlkZGVuXCJ9IHctZnVsbCBtZDpmbGV4IG1kOml0ZW1zLWNlbnRlciBtZDp3LWF1dG9gfT5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2Ake2FjdGl2ZSA/IFwiZGl2aWRlLXktMlwiIDogXCJcIn0gdGV4dC1iYXNlIHB0LTQgbWQ6ZmxleCBtZDpwbGFjZS1jb250ZW50LWVuZCBtZDpwdC0wYH0+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBbXCJhYm91dFwiLCBcInBvcnRmb2xpb1wiLCBcImJsb2dcIiwgXCJjb250YWN0XCJdXG4gICAgICAgICAgICAgICAgICAubWFwKCh0bywgaW5kZXgpID0+IDxsaSBrZXk9e2luZGV4fT48TGluayBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgcHktMiBibG9jayBtZDogcC00IGhvdmVyOnRleHQtbGdcIiBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiIHRvPXt0b30+e3RvLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdG8uc3Vic3RyaW5nKDEpfTwvTGluaz48L2xpPilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkxpbmsiLCJBaUZpbGxIb21lIiwiQWlPdXRsaW5lTWVudSIsIkhlYWRlciIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInJvdXRlciIsIk1lbnVUb2dnbGUiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJuYXYiLCJkaXYiLCJhIiwiaHJlZiIsIm9uQ2xpY2siLCJwdXNoIiwidWwiLCJtYXAiLCJ0byIsImluZGV4IiwibGkiLCJhY3RpdmVDbGFzcyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header.tsx\n");

/***/ }),

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ \"./components/header.tsx\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ \"./components/footer.tsx\");\n\n// components/layout.tsx\n\n\n\nfunction Layout({ children  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"shortcut icon\",\n                    href: \"/favicon.ico\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Projects\\\\Personnal-Website\\\\components\\\\layout.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\Personnal-Website\\\\components\\\\layout.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\Personnal-Website\\\\components\\\\layout.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\Personnal-Website\\\\components\\\\layout.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\Personnal-Website\\\\components\\\\layout.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBREEsd0JBQXdCO0FBQ0k7QUFDQztBQUNBO0FBRWQsU0FBU0csTUFBTSxDQUFDLEVBQUVDLFFBQVEsR0FBRSxFQUFFO0lBQzNDLHFCQUNFOzswQkFDRSw4REFBQ0osa0RBQUk7MEJBQ0gsNEVBQUNLLE1BQUk7b0JBQUNDLEdBQUcsRUFBQyxlQUFlO29CQUFDQyxJQUFJLEVBQUMsY0FBYzs7Ozs7d0JBQUc7Ozs7O29CQUMzQzswQkFDUCw4REFBQ04sK0NBQU07Ozs7b0JBQUc7MEJBQ1YsOERBQUNPLE1BQUk7MEJBQUVKLFFBQVE7Ozs7O29CQUFROzBCQUN2Qiw4REFBQ0YsK0NBQU07Ozs7b0JBQUc7O29CQUNULENBQ0o7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0LnRzeD9hZjI0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvbGF5b3V0LnRzeFxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPScvZmF2aWNvbi5pY28nIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkhlYWRlciIsIkZvb3RlciIsIkxheW91dCIsImNoaWxkcmVuIiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.css */ \"./styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n\n// pages/_app.tsx\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Projects\\\\Personnal-Website\\\\pages\\\\_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Projects\\\\Personnal-Website\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTtBQUZBLGlCQUFpQjtBQUVLO0FBQ21CO0FBRTFCLFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3RELHFCQUNFLDhEQUFDSCwwREFBTTtrQkFDTCw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNyQixDQUNWO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL19hcHAudHN4XG5cbmltcG9ydCAnLi4vc3R5bGVzLmNzcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-scroll");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();