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


var _jsxFileName = "/home/jed/coding/jedster1111/queerpoets-next/pages/poets/[poetSlug].tsx",
    _this = undefined;




var __N_SSG = true;
function PoetPage(_ref) {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PoemsList, {
      poems: poems
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

var PoemsList = function PoemsList(_ref2) {
  var poems = _ref2.poems;
  if (poems.length) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: "There are no poems for this user yet."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 30
  }, _this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _styles_PoetPage_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.poemsList,
    children: poems.map(function (poem) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: poem.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
          children: poem.body
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, _this)]
      }, poem.slug, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }, _this);
};

_c2 = PoemsList;

var _c, _c2;

$RefreshReg$(_c, "PoetPage");
$RefreshReg$(_c2, "PoemsList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9ldHMvW3BvZXRTbHVnXS50c3giXSwibmFtZXMiOlsiUG9ldFBhZ2UiLCJwb2V0IiwicG9lbXMiLCJzdHlsZXMiLCJtYWluIiwicG9ydHJhaXQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwb3J0cmFpdFBhdGgiLCJQb2Vtc0xpc3QiLCJsZW5ndGgiLCJwb2Vtc0xpc3QiLCJtYXAiLCJwb2VtIiwidGl0bGUiLCJib2R5Iiwic2x1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBTUE7O0FBK0JlLFNBQVNBLFFBQVQsT0FBK0Q7QUFBQSxNQUEzQ0MsSUFBMkMsUUFBM0NBLElBQTJDO0FBQUEsTUFBckNDLEtBQXFDLFFBQXJDQSxLQUFxQztBQUMxRSxzQkFDSTtBQUFNLGFBQVMsRUFBRUMsa0VBQU0sQ0FBQ0MsSUFBeEI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRUQsa0VBQU0sQ0FBQ0UsUUFBdkI7QUFBaUMsV0FBSyxFQUFFO0FBQUVDLHVCQUFlLGdCQUFTTCxJQUFJLENBQUNNLFlBQWQ7QUFBakI7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUkscUVBQUMsU0FBRDtBQUFXLFdBQUssRUFBRUw7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBTUg7S0FQdUJGLFE7O0FBUXhCLElBQU1RLFNBQVMsR0FBRyxTQUFaQSxTQUFZLFFBQStDO0FBQUEsTUFBNUNOLEtBQTRDLFNBQTVDQSxLQUE0QztBQUM3RCxNQUFJQSxLQUFLLENBQUNPLE1BQVYsRUFBa0Isb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUVsQixzQkFDSTtBQUFTLGFBQVMsRUFBRU4sa0VBQU0sQ0FBQ08sU0FBM0I7QUFBQSxjQUNLUixLQUFLLENBQUNTLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsMEJBQ1A7QUFBQSxnQ0FDSTtBQUFBLG9CQUFLQSxJQUFJLENBQUNDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJLHFFQUFDLHFEQUFEO0FBQUEsb0JBQWdCRCxJQUFJLENBQUNFO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQSxTQUFjRixJQUFJLENBQUNHLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETztBQUFBLEtBQVY7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFVSCxDQWJEOztNQUFNUCxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BvZXRzL1twb2V0U2x1Z10uODM2MGRiNTcwOWY4OTUzYzQ2MTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgUG9lbSwgUG9ldCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0UG9ldEJ5U2x1ZywgZ2V0UG9ldFNsdWdzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2RhdGEvcG9ldHNcIjtcbmltcG9ydCB7IGdldFBvZW1CeVNsdWcsIHNvcnRQb2Vtc0J5RGF0ZSB9IGZyb20gXCIuLi8uLi91dGlscy9kYXRhL3BvZW1zXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Qb2V0UGFnZS5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHM8eyBwb2V0U2x1Zzogc3RyaW5nIH0+ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHBvZXRTbHVncyA9IGdldFBvZXRTbHVncygpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHM6IHBvZXRTbHVncy5tYXAoKHBvZXRTbHVnKSA9PiAoeyBwYXJhbXM6IHsgcG9ldFNsdWcgfSB9KSksXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgICB9O1xufTtcblxudHlwZSBQb2V0UGFnZVBhcmFtcyA9IHtcbiAgICBwb2V0U2x1Zzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wczxQb2V0UGFnZVByb3BzLCBQb2V0UGFnZVBhcmFtcz4gPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHBvZXRTbHVnID0gY29udGV4dC5wYXJhbXM/LnBvZXRTbHVnO1xuXG4gICAgaWYgKCFwb2V0U2x1ZykgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCB0aGF0IHBvZXQhXCIpO1xuXG4gICAgY29uc3QgcG9ldCA9IGdldFBvZXRCeVNsdWcocG9ldFNsdWcpO1xuICAgIGNvbnN0IHBvZW1zID0gc29ydFBvZW1zQnlEYXRlKHBvZXQucG9lbVNsdWdzLm1hcChnZXRQb2VtQnlTbHVnKSk7XG5cbiAgICByZXR1cm4geyBwcm9wczogeyBwb2V0LCBwb2VtcyB9IH07XG59O1xuXG50eXBlIFBvZXRQYWdlUHJvcHMgPSB7XG4gICAgcG9ldDogUG9ldDtcbiAgICBwb2VtczogUG9lbVtdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9ldFBhZ2UoeyBwb2V0LCBwb2VtcyB9OiBQb2V0UGFnZVByb3BzKTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3J0cmFpdH0gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7cG9ldC5wb3J0cmFpdFBhdGh9KWAgfX0gLz5cbiAgICAgICAgICAgIDxQb2Vtc0xpc3QgcG9lbXM9e3BvZW1zfSAvPlxuICAgICAgICA8L21haW4+XG4gICAgKTtcbn1cbmNvbnN0IFBvZW1zTGlzdCA9ICh7IHBvZW1zIH06IHsgcG9lbXM6IFBvZW1bXSB9KTogSlNYLkVsZW1lbnQgPT4ge1xuICAgIGlmIChwb2Vtcy5sZW5ndGgpIHJldHVybiA8ZGl2PlRoZXJlIGFyZSBubyBwb2VtcyBmb3IgdGhpcyB1c2VyIHlldC48L2Rpdj47XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5wb2Vtc0xpc3R9PlxuICAgICAgICAgICAge3BvZW1zLm1hcCgocG9lbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGtleT17cG9lbS5zbHVnfT5cbiAgICAgICAgICAgICAgICAgICAgPGgzPntwb2VtLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duPntwb2VtLmJvZHl9PC9SZWFjdE1hcmtkb3duPlxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9