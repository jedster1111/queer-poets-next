webpackHotUpdate_N_E("pages/poets/[poetSlug]",{

/***/ "./pages/poets/[poetSlug].tsx":
/*!************************************!*\
  !*** ./pages/poets/[poetSlug].tsx ***!
  \************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PoetPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_PoetPage_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/PoetPage.module.css */ "./styles/PoetPage.module.css");
/* harmony import */ var _styles_PoetPage_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_PoetPage_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/jed/coding/jedster1111/queerpoets-next/pages/poets/[poetSlug].tsx";



var __N_SSG = true;
function PoetPage(_ref) {
  var _this = this;

  var poet = _ref.poet,
      poems = _ref.poems;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
    className: _styles_PoetPage_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_PoetPage_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.portrait,
      style: {
        backgroundImage: "url(".concat(poet.portraitPath, ")")
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _styles_PoetPage_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.poemsList,
      children: poems.map(function (poem) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: poem.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
            children: poem.body
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, _this)]
        }, poem.slug, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, this);
}
_c = PoetPage;

var _c;

$RefreshReg$(_c, "PoetPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9ldHMvW3BvZXRTbHVnXS50c3giXSwibmFtZXMiOlsiUG9ldFBhZ2UiLCJwb2V0IiwicG9lbXMiLCJzdHlsZXMiLCJtYWluIiwicG9ydHJhaXQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwb3J0cmFpdFBhdGgiLCJwb2Vtc0xpc3QiLCJtYXAiLCJwb2VtIiwidGl0bGUiLCJib2R5Iiwic2x1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBTUE7O0FBK0JlLFNBQVNBLFFBQVQsT0FBK0Q7QUFBQTs7QUFBQSxNQUEzQ0MsSUFBMkMsUUFBM0NBLElBQTJDO0FBQUEsTUFBckNDLEtBQXFDLFFBQXJDQSxLQUFxQztBQUMxRSxzQkFDSTtBQUFNLGFBQVMsRUFBRUMsa0VBQU0sQ0FBQ0MsSUFBeEI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRUQsa0VBQU0sQ0FBQ0UsUUFBdkI7QUFBaUMsV0FBSyxFQUFFO0FBQUVDLHVCQUFlLGdCQUFTTCxJQUFJLENBQUNNLFlBQWQ7QUFBakI7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBUyxlQUFTLEVBQUVKLGtFQUFNLENBQUNLLFNBQTNCO0FBQUEsZ0JBQ0tOLEtBQUssQ0FBQ08sR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSw0QkFDUDtBQUFBLGtDQUNJO0FBQUEsc0JBQUtBLElBQUksQ0FBQ0M7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUkscUVBQUMscURBQUQ7QUFBQSxzQkFBZ0JELElBQUksQ0FBQ0U7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBLFdBQWNGLElBQUksQ0FBQ0csSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFETztBQUFBLE9BQVY7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFhSDtLQWR1QmIsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb2V0cy9bcG9ldFNsdWddLjc2N2MzODI1MTI0ODY0OWNkMzM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5cbmltcG9ydCB7IFBvZW0sIFBvZXQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGdldFBvZXRCeVNsdWcsIGdldFBvZXRTbHVncyB9IGZyb20gXCIuLi8uLi91dGlscy9kYXRhL3BvZXRzXCI7XG5pbXBvcnQgeyBnZXRQb2VtQnlTbHVnLCBzb3J0UG9lbXNCeURhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZGF0YS9wb2Vtc1wiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvUG9ldFBhZ2UubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzPHsgcG9ldFNsdWc6IHN0cmluZyB9PiA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwb2V0U2x1Z3MgPSBnZXRQb2V0U2x1Z3MoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzOiBwb2V0U2x1Z3MubWFwKChwb2V0U2x1ZykgPT4gKHsgcGFyYW1zOiB7IHBvZXRTbHVnIH0gfSkpLFxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXG4gICAgfTtcbn07XG5cbnR5cGUgUG9ldFBhZ2VQYXJhbXMgPSB7XG4gICAgcG9ldFNsdWc6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHM8UG9ldFBhZ2VQcm9wcywgUG9ldFBhZ2VQYXJhbXM+ID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBwb2V0U2x1ZyA9IGNvbnRleHQucGFyYW1zPy5wb2V0U2x1ZztcblxuICAgIGlmICghcG9ldFNsdWcpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgdGhhdCBwb2V0IVwiKTtcblxuICAgIGNvbnN0IHBvZXQgPSBnZXRQb2V0QnlTbHVnKHBvZXRTbHVnKTtcbiAgICBjb25zdCBwb2VtcyA9IHNvcnRQb2Vtc0J5RGF0ZShwb2V0LnBvZW1TbHVncy5tYXAoZ2V0UG9lbUJ5U2x1ZykpO1xuXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgcG9ldCwgcG9lbXMgfSB9O1xufTtcblxudHlwZSBQb2V0UGFnZVByb3BzID0ge1xuICAgIHBvZXQ6IFBvZXQ7XG4gICAgcG9lbXM6IFBvZW1bXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvZXRQYWdlKHsgcG9ldCwgcG9lbXMgfTogUG9ldFBhZ2VQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9ydHJhaXR9IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke3BvZXQucG9ydHJhaXRQYXRofSlgIH19IC8+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5wb2Vtc0xpc3R9PlxuICAgICAgICAgICAgICAgIHtwb2Vtcy5tYXAoKHBvZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGFydGljbGUga2V5PXtwb2VtLnNsdWd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pntwb2VtLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93bj57cG9lbS5ib2R5fTwvUmVhY3RNYXJrZG93bj5cbiAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L21haW4+XG4gICAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=