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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_PoetPage_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.portrait,
      style: {
        backgroundImage: "url(".concat(poet.portraitPath, ")")
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: poems.map(function (poem) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: poem.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
            children: poem.body
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, _this)]
        }, poem.slug, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9ldHMvW3BvZXRTbHVnXS50c3giXSwibmFtZXMiOlsiUG9ldFBhZ2UiLCJwb2V0IiwicG9lbXMiLCJzdHlsZXMiLCJwb3J0cmFpdCIsImJhY2tncm91bmRJbWFnZSIsInBvcnRyYWl0UGF0aCIsIm1hcCIsInBvZW0iLCJ0aXRsZSIsImJvZHkiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFPQTs7QUFpQ2UsU0FBU0EsUUFBVCxPQUErRDtBQUFBOztBQUFBLE1BQTNDQyxJQUEyQyxRQUEzQ0EsSUFBMkM7QUFBQSxNQUFyQ0MsS0FBcUMsUUFBckNBLEtBQXFDO0FBQzFFLHNCQUNJO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVDLGtFQUFNLENBQUNDLFFBQXZCO0FBQWlDLFdBQUssRUFBRTtBQUFFQyx1QkFBZSxnQkFBU0osSUFBSSxDQUFDSyxZQUFkO0FBQWpCO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUEsZ0JBQ0tKLEtBQUssQ0FBQ0ssR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSw0QkFDUDtBQUFBLGtDQUNJO0FBQUEsc0JBQUtBLElBQUksQ0FBQ0M7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUkscUVBQUMscURBQUQ7QUFBQSxzQkFBZ0JELElBQUksQ0FBQ0U7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBLFdBQVVGLElBQUksQ0FBQ0csSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURPO0FBQUEsT0FBVjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWFIO0tBZHVCWCxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BvZXRzL1twb2V0U2x1Z10uNmRmN2ExMGQ5ZWYyYTM3ZmRiNGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuXG5pbXBvcnQgeyBQb2VtLCBQb2V0IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRQb2V0QnlTbHVnLCBnZXRQb2V0U2x1Z3MgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZGF0YS9wb2V0c1wiO1xuaW1wb3J0IHsgZ2V0UG9lbUJ5U2x1ZyB9IGZyb20gXCIuLi8uLi91dGlscy9kYXRhL3BvZW1zXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Qb2V0UGFnZS5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHM8eyBwb2V0U2x1Zzogc3RyaW5nIH0+ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHBvZXRTbHVncyA9IGdldFBvZXRTbHVncygpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHM6IHBvZXRTbHVncy5tYXAoKHBvZXRTbHVnKSA9PiAoeyBwYXJhbXM6IHsgcG9ldFNsdWcgfSB9KSksXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgICB9O1xufTtcblxudHlwZSBQb2V0UGFnZVBhcmFtcyA9IHtcbiAgICBwb2V0U2x1Zzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wczxQb2V0UGFnZVByb3BzLCBQb2V0UGFnZVBhcmFtcz4gPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHBvZXRTbHVnID0gY29udGV4dC5wYXJhbXM/LnBvZXRTbHVnO1xuXG4gICAgaWYgKCFwb2V0U2x1ZykgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCB0aGF0IHBvZXQhXCIpO1xuXG4gICAgY29uc3QgcG9ldCA9IGdldFBvZXRCeVNsdWcocG9ldFNsdWcpO1xuICAgIGNvbnN0IHBvZW1zID0gcG9ldC5wb2VtU2x1Z3NcbiAgICAgICAgLm1hcChnZXRQb2VtQnlTbHVnKVxuICAgICAgICAuc29ydCgobGVmdCwgcmlnaHQpID0+IG1vbWVudC51dGMobGVmdC50aW1lU3RhbXApLmRpZmYobW9tZW50LnV0YyhyaWdodC50aW1lU3RhbXApKSk7XG5cbiAgICByZXR1cm4geyBwcm9wczogeyBwb2V0LCBwb2VtcyB9IH07XG59O1xuXG50eXBlIFBvZXRQYWdlUHJvcHMgPSB7XG4gICAgcG9ldDogUG9ldDtcbiAgICBwb2VtczogUG9lbVtdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9ldFBhZ2UoeyBwb2V0LCBwb2VtcyB9OiBQb2V0UGFnZVByb3BzKTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3J0cmFpdH0gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7cG9ldC5wb3J0cmFpdFBhdGh9KWAgfX0gLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3BvZW1zLm1hcCgocG9lbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cG9lbS5zbHVnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND57cG9lbS50aXRsZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24+e3BvZW0uYm9keX08L1JlYWN0TWFya2Rvd24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==