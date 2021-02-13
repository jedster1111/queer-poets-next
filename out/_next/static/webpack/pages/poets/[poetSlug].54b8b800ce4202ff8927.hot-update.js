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

var _jsxFileName = "/home/jed/coding/jedster1111/queerpoets-next/pages/poets/[poetSlug].tsx";


var __N_SSG = true;
function PoetPage(_ref) {
  var _this = this;

  var poet = _ref.poet,
      poems = _ref.poems;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["This is the page for ", poet.name, "!"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: poet.portraitPath
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: poems.map(function (poem) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: poem.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
            children: poem.body
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, _this)]
        }, poem.slug, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9ldHMvW3BvZXRTbHVnXS50c3giXSwibmFtZXMiOlsiUG9ldFBhZ2UiLCJwb2V0IiwicG9lbXMiLCJuYW1lIiwicG9ydHJhaXRQYXRoIiwibWFwIiwicG9lbSIsInRpdGxlIiwiYm9keSIsInNsdWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBa0NlLFNBQVNBLFFBQVQsT0FBK0Q7QUFBQTs7QUFBQSxNQUEzQ0MsSUFBMkMsUUFBM0NBLElBQTJDO0FBQUEsTUFBckNDLEtBQXFDLFFBQXJDQSxLQUFxQztBQUMxRSxzQkFDSTtBQUFBLDRCQUNJO0FBQUEsMENBQTJCRCxJQUFJLENBQUNFLElBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBSyxTQUFHLEVBQUVGLElBQUksQ0FBQ0c7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSTtBQUFBLGdCQUNLRixLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsNEJBQ1A7QUFBQSxrQ0FDSTtBQUFBLHNCQUFLQSxJQUFJLENBQUNDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJLHFFQUFDLHFEQUFEO0FBQUEsc0JBQWdCRCxJQUFJLENBQUNFO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQSxXQUFVRixJQUFJLENBQUNHLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFETztBQUFBLE9BQVY7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFjSDtLQWZ1QlQsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb2V0cy9bcG9ldFNsdWddLjU0YjhiODAwY2U0MjAyZmY4OTI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgeyBQb2VtLCBQb2V0IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRQb2V0QnlTbHVnLCBnZXRQb2V0U2x1Z3MgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZGF0YS9wb2V0c1wiO1xuaW1wb3J0IHsgZ2V0UG9lbUJ5U2x1ZyB9IGZyb20gXCIuLi8uLi91dGlscy9kYXRhL3BvZW1zXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHM8eyBwb2V0U2x1Zzogc3RyaW5nIH0+ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHBvZXRTbHVncyA9IGdldFBvZXRTbHVncygpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHM6IHBvZXRTbHVncy5tYXAoKHBvZXRTbHVnKSA9PiAoeyBwYXJhbXM6IHsgcG9ldFNsdWcgfSB9KSksXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgICB9O1xufTtcblxudHlwZSBQb2V0UGFnZVBhcmFtcyA9IHtcbiAgICBwb2V0U2x1Zzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wczxQb2V0UGFnZVByb3BzLCBQb2V0UGFnZVBhcmFtcz4gPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHBvZXRTbHVnID0gY29udGV4dC5wYXJhbXM/LnBvZXRTbHVnO1xuXG4gICAgaWYgKCFwb2V0U2x1ZykgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCB0aGF0IHBvZXQhXCIpO1xuXG4gICAgY29uc3QgcG9ldCA9IGdldFBvZXRCeVNsdWcocG9ldFNsdWcpO1xuICAgIGNvbnN0IHBvZW1zID0gcG9ldC5wb2VtU2x1Z3MubWFwKGdldFBvZW1CeVNsdWcpO1xuXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgcG9ldCwgcG9lbXMgfSB9O1xufTtcblxudHlwZSBQb2V0UGFnZVByb3BzID0ge1xuICAgIHBvZXQ6IFBvZXQ7XG4gICAgcG9lbXM6IFBvZW1bXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvZXRQYWdlKHsgcG9ldCwgcG9lbXMgfTogUG9ldFBhZ2VQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxkaXY+VGhpcyBpcyB0aGUgcGFnZSBmb3Ige3BvZXQubmFtZX0hPC9kaXY+XG4gICAgICAgICAgICA8aW1nIHNyYz17cG9ldC5wb3J0cmFpdFBhdGh9IC8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtwb2Vtcy5tYXAoKHBvZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3BvZW0uc2x1Z30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3BvZW0udGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duPntwb2VtLmJvZHl9PC9SZWFjdE1hcmtkb3duPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=