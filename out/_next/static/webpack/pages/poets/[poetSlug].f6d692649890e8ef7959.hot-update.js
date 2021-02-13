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
  if (!poems.length) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: "There are no poems for this user yet."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 31
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9ldHMvW3BvZXRTbHVnXS50c3giXSwibmFtZXMiOlsiUG9ldFBhZ2UiLCJwb2V0IiwicG9lbXMiLCJzdHlsZXMiLCJtYWluIiwicG9ydHJhaXQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwb3J0cmFpdFBhdGgiLCJQb2Vtc0xpc3QiLCJsZW5ndGgiLCJwb2Vtc0xpc3QiLCJtYXAiLCJwb2VtIiwidGl0bGUiLCJib2R5Iiwic2x1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBTUE7O0FBK0JlLFNBQVNBLFFBQVQsT0FBK0Q7QUFBQSxNQUEzQ0MsSUFBMkMsUUFBM0NBLElBQTJDO0FBQUEsTUFBckNDLEtBQXFDLFFBQXJDQSxLQUFxQztBQUMxRSxzQkFDSTtBQUFNLGFBQVMsRUFBRUMsa0VBQU0sQ0FBQ0MsSUFBeEI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRUQsa0VBQU0sQ0FBQ0UsUUFBdkI7QUFBaUMsV0FBSyxFQUFFO0FBQUVDLHVCQUFlLGdCQUFTTCxJQUFJLENBQUNNLFlBQWQ7QUFBakI7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUkscUVBQUMsU0FBRDtBQUFXLFdBQUssRUFBRUw7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBTUg7S0FQdUJGLFE7O0FBUXhCLElBQU1RLFNBQVMsR0FBRyxTQUFaQSxTQUFZLFFBQStDO0FBQUEsTUFBNUNOLEtBQTRDLFNBQTVDQSxLQUE0QztBQUM3RCxNQUFJLENBQUNBLEtBQUssQ0FBQ08sTUFBWCxFQUFtQixvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBRW5CLHNCQUNJO0FBQVMsYUFBUyxFQUFFTixrRUFBTSxDQUFDTyxTQUEzQjtBQUFBLGNBQ0tSLEtBQUssQ0FBQ1MsR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSwwQkFDUDtBQUFBLGdDQUNJO0FBQUEsb0JBQUtBLElBQUksQ0FBQ0M7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUkscUVBQUMscURBQUQ7QUFBQSxvQkFBZ0JELElBQUksQ0FBQ0U7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBLFNBQWNGLElBQUksQ0FBQ0csSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURPO0FBQUEsS0FBVjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVVILENBYkQ7O01BQU1QLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9ldHMvW3BvZXRTbHVnXS5mNmQ2OTI2NDk4OTBlOGVmNzk1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBQb2VtLCBQb2V0IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRQb2V0QnlTbHVnLCBnZXRQb2V0U2x1Z3MgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZGF0YS9wb2V0c1wiO1xuaW1wb3J0IHsgZ2V0UG9lbUJ5U2x1Zywgc29ydFBvZW1zQnlEYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2RhdGEvcG9lbXNcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL1BvZXRQYWdlLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRoczx7IHBvZXRTbHVnOiBzdHJpbmcgfT4gPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcG9ldFNsdWdzID0gZ2V0UG9ldFNsdWdzKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRoczogcG9ldFNsdWdzLm1hcCgocG9ldFNsdWcpID0+ICh7IHBhcmFtczogeyBwb2V0U2x1ZyB9IH0pKSxcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlLFxuICAgIH07XG59O1xuXG50eXBlIFBvZXRQYWdlUGFyYW1zID0ge1xuICAgIHBvZXRTbHVnOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzPFBvZXRQYWdlUHJvcHMsIFBvZXRQYWdlUGFyYW1zPiA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgcG9ldFNsdWcgPSBjb250ZXh0LnBhcmFtcz8ucG9ldFNsdWc7XG5cbiAgICBpZiAoIXBvZXRTbHVnKSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIHRoYXQgcG9ldCFcIik7XG5cbiAgICBjb25zdCBwb2V0ID0gZ2V0UG9ldEJ5U2x1Zyhwb2V0U2x1Zyk7XG4gICAgY29uc3QgcG9lbXMgPSBzb3J0UG9lbXNCeURhdGUocG9ldC5wb2VtU2x1Z3MubWFwKGdldFBvZW1CeVNsdWcpKTtcblxuICAgIHJldHVybiB7IHByb3BzOiB7IHBvZXQsIHBvZW1zIH0gfTtcbn07XG5cbnR5cGUgUG9ldFBhZ2VQcm9wcyA9IHtcbiAgICBwb2V0OiBQb2V0O1xuICAgIHBvZW1zOiBQb2VtW107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2V0UGFnZSh7IHBvZXQsIHBvZW1zIH06IFBvZXRQYWdlUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvcnRyYWl0fSBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtwb2V0LnBvcnRyYWl0UGF0aH0pYCB9fSAvPlxuICAgICAgICAgICAgPFBvZW1zTGlzdCBwb2Vtcz17cG9lbXN9IC8+XG4gICAgICAgIDwvbWFpbj5cbiAgICApO1xufVxuY29uc3QgUG9lbXNMaXN0ID0gKHsgcG9lbXMgfTogeyBwb2VtczogUG9lbVtdIH0pOiBKU1guRWxlbWVudCA9PiB7XG4gICAgaWYgKCFwb2Vtcy5sZW5ndGgpIHJldHVybiA8ZGl2PlRoZXJlIGFyZSBubyBwb2VtcyBmb3IgdGhpcyB1c2VyIHlldC48L2Rpdj47XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5wb2Vtc0xpc3R9PlxuICAgICAgICAgICAge3BvZW1zLm1hcCgocG9lbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGtleT17cG9lbS5zbHVnfT5cbiAgICAgICAgICAgICAgICAgICAgPGgzPntwb2VtLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duPntwb2VtLmJvZHl9PC9SZWFjdE1hcmtkb3duPlxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9