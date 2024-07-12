"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/resume",{

/***/ "./pages/resume.js":
/*!*************************!*\
  !*** ./pages/resume.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Cursor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Cursor */ \"./components/Cursor/index.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./components/Header/index.js\");\n/* harmony import */ var _components_ProjectResume__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ProjectResume */ \"./components/ProjectResume/index.js\");\n/* harmony import */ var _components_Socials__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Socials */ \"./components/Socials/index.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Button */ \"./components/Button/index.js\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.module.js\");\n/* harmony import */ var _data_portfolio_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/portfolio.json */ \"./data/portfolio.json\");\n/* harmony import */ var _components_PdfViewer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/PdfViewer */ \"./components/PdfViewer/index.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n// Data\n\n\n\n\nvar _s = $RefreshSig$();\nvar Resume = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var theme = (0,next_themes__WEBPACK_IMPORTED_MODULE_8__.useTheme)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), mount = ref[0], setMount = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setMount(false);\n        if (!_data_portfolio_json__WEBPACK_IMPORTED_MODULE_9__.showResume) {\n            router.push(\"/\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n             true && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed bottom-6 right-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    onClick: function() {\n                        return router.push(\"/edit\");\n                    },\n                    type: \"primary\",\n                    children: \"Edit Resume\"\n                }, void 0, false, {\n                    fileName: \"/Users/tytodd/Desktop/Projects/ty-portfolio/pages/resume.js\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/tytodd/Desktop/Projects/ty-portfolio/pages/resume.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, _this),\n            _data_portfolio_json__WEBPACK_IMPORTED_MODULE_9__.showCursor && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cursor__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tytodd/Desktop/Projects/ty-portfolio/pages/resume.js\",\n                lineNumber: 35,\n                columnNumber: 27\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                isBlog: true\n            }, void 0, false, {\n                fileName: \"/Users/tytodd/Desktop/Projects/ty-portfolio/pages/resume.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                src: \"college_resume.pdf\",\n                width: \"100%\",\n                height: \"100%\"\n            }, void 0, false, {\n                fileName: \"/Users/tytodd/Desktop/Projects/ty-portfolio/pages/resume.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Resume, \"K61RI2w358vA+2wumcjYrrTmNIg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_themes__WEBPACK_IMPORTED_MODULE_8__.useTheme\n    ];\n});\n_c = Resume;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Resume);\nvar _c;\n$RefreshReg$(_c, \"Resume\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXN1bWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQW1EO0FBQ1g7QUFDRTtBQUNBO0FBQ2M7QUFDWjtBQUNGO0FBQ0g7QUFDdkMsT0FBTztBQUNtRDtBQUNWO0FBQ047QUFDTTs7QUFFaEQsSUFBTWUsTUFBTSxHQUFHLFdBQU07O0lBQ25CLElBQU1DLE1BQU0sR0FBR2Isc0RBQVMsRUFBRTtJQUMxQixJQUFNYyxLQUFLLEdBQUdSLHFEQUFRLEVBQUU7SUFDeEIsSUFBMEJQLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFqQjNDLEtBaUJjLEdBQWNBLEdBQWUsR0FBN0IsRUFqQmQsUUFpQndCLEdBQUlBLEdBQWUsR0FBbkI7SUFFdEJELGdEQUFTLENBQUMsV0FBTTtRQUNka0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQ1IsNERBQVUsRUFBRTtZQUNmSyxNQUFNLENBQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsQjtLQUNGLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUCxxQkFDRTs7WUExQkosS0EyQjZDLGtCQUNyQyw4REFBQ0MsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHdCQUF3QjswQkFDckMsNEVBQUNkLDBEQUFNO29CQUFDZSxPQUFPLEVBQUU7K0JBQU1QLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQztxQkFBQTtvQkFBRUksSUFBSSxFQUFFLFNBQVM7OEJBQUUsYUFFOUQ7Ozs7O3lCQUFTOzs7OztxQkFDTDtZQUVQWCw0REFBZSxrQkFBSSw4REFBQ1QsMERBQU07Ozs7cUJBQUc7MEJBTTlCLDhEQUFDQywwREFBTTtnQkFBQ3FCLE1BQU07Ozs7O3FCQUFHOzBCQUVqQiw4REFBQ0MsUUFBTTtnQkFBQ0MsR0FBRyxFQUFDLG9CQUFvQjtnQkFBQ0MsS0FBSyxFQUFDLE1BQU07Z0JBQUNDLE1BQU0sRUFBQyxNQUFNOzs7OztxQkFBRzs7b0JBRzdELENBQ0g7Q0FDSDtHQWpDS2YsTUFBTTs7UUFDS1osa0RBQVM7UUFDVk0saURBQVE7OztBQUZsQk0sS0FBQUEsTUFBTTtBQW1DWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Jlc3VtZS5qcz9mYzg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBDdXJzb3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3Vyc29yXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IFByb2plY3RSZXN1bWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvamVjdFJlc3VtZVwiO1xuaW1wb3J0IFNvY2lhbHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU29jaWFsc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIm5leHQtdGhlbWVzXCI7XG4vLyBEYXRhXG5pbXBvcnQgeyBuYW1lLCBzaG93UmVzdW1lIH0gZnJvbSBcIi4uL2RhdGEvcG9ydGZvbGlvLmpzb25cIjtcbmltcG9ydCB7IHJlc3VtZSB9IGZyb20gXCIuLi9kYXRhL3BvcnRmb2xpby5qc29uXCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vZGF0YS9wb3J0Zm9saW8uanNvblwiO1xuaW1wb3J0IFBkZlZpZXdlciBmcm9tIFwiLi4vY29tcG9uZW50cy9QZGZWaWV3ZXJcIjtcblxuY29uc3QgUmVzdW1lID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBbbW91bnQsIHNldE1vdW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE1vdW50KGZhbHNlKTtcbiAgICBpZiAoIXNob3dSZXN1bWUpIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS02IHJpZ2h0LTZcIj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2VkaXRcIil9IHR5cGU9e1wicHJpbWFyeVwifT5cbiAgICAgICAgICAgIEVkaXQgUmVzdW1lXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHtkYXRhLnNob3dDdXJzb3IgJiYgPEN1cnNvciAvPn1cbiAgICAgIHsvKiA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGNvbnRhaW5lciBteC1hdXRvIG1iLTEwICR7XG4gICAgICAgICAgZGF0YS5zaG93Q3Vyc29yICYmIFwiY3Vyc29yLW5vbmVcIlxuICAgICAgICB9YH1cbiAgICAgID4gKi99XG4gICAgICA8SGVhZGVyIGlzQmxvZyAvPlxuICAgICAgey8qIDxkaXY+ICovfVxuICAgICAgPGlmcmFtZSBzcmM9XCJjb2xsZWdlX3Jlc3VtZS5wZGZcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgLz5cbiAgICAgIHsvKiA8L2Rpdj4gKi99XG4gICAgICB7LyogPC9kaXY+ICovfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdW1lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJDdXJzb3IiLCJIZWFkZXIiLCJQcm9qZWN0UmVzdW1lIiwiU29jaWFscyIsIkJ1dHRvbiIsInVzZVRoZW1lIiwibmFtZSIsInNob3dSZXN1bWUiLCJyZXN1bWUiLCJkYXRhIiwiUGRmVmlld2VyIiwiUmVzdW1lIiwicm91dGVyIiwidGhlbWUiLCJtb3VudCIsInNldE1vdW50IiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJ0eXBlIiwic2hvd0N1cnNvciIsImlzQmxvZyIsImlmcmFtZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/resume.js\n");

/***/ })

});