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
      children: ["This is the page for ", poet.name, "!"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_PoetPage_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.portrait,
      style: {
        backgroundImage: "./".concat(poet.portraitPath)
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: poems.map(function (poem) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
    lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9ldHMvW3BvZXRTbHVnXS50c3giXSwibmFtZXMiOlsiUG9ldFBhZ2UiLCJwb2V0IiwicG9lbXMiLCJuYW1lIiwic3R5bGVzIiwicG9ydHJhaXQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwb3J0cmFpdFBhdGgiLCJtYXAiLCJwb2VtIiwidGl0bGUiLCJib2R5Iiwic2x1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBS0E7O0FBK0JlLFNBQVNBLFFBQVQsT0FBK0Q7QUFBQTs7QUFBQSxNQUEzQ0MsSUFBMkMsUUFBM0NBLElBQTJDO0FBQUEsTUFBckNDLEtBQXFDLFFBQXJDQSxLQUFxQztBQUMxRSxzQkFDSTtBQUFBLDRCQUNJO0FBQUEsMENBQTJCRCxJQUFJLENBQUNFLElBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBSyxlQUFTLEVBQUVDLGtFQUFNLENBQUNDLFFBQXZCO0FBQWlDLFdBQUssRUFBRTtBQUFFQyx1QkFBZSxjQUFPTCxJQUFJLENBQUNNLFlBQVo7QUFBakI7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBQSxnQkFDS0wsS0FBSyxDQUFDTSxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLDRCQUNQO0FBQUEsa0NBQ0k7QUFBQSxzQkFBS0EsSUFBSSxDQUFDQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSSxxRUFBQyxxREFBRDtBQUFBLHNCQUFnQkQsSUFBSSxDQUFDRTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUEsV0FBVUYsSUFBSSxDQUFDRyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRE87QUFBQSxPQUFWO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBY0g7S0FmdUJaLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9ldHMvW3BvZXRTbHVnXS4zNDRjMDc0MjdmMDBjOTg0ZDgwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IHsgUG9lbSwgUG9ldCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0UG9ldEJ5U2x1ZywgZ2V0UG9ldFNsdWdzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2RhdGEvcG9ldHNcIjtcbmltcG9ydCB7IGdldFBvZW1CeVNsdWcgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZGF0YS9wb2Vtc1wiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvUG9ldFBhZ2UubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzPHsgcG9ldFNsdWc6IHN0cmluZyB9PiA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwb2V0U2x1Z3MgPSBnZXRQb2V0U2x1Z3MoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzOiBwb2V0U2x1Z3MubWFwKChwb2V0U2x1ZykgPT4gKHsgcGFyYW1zOiB7IHBvZXRTbHVnIH0gfSkpLFxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXG4gICAgfTtcbn07XG5cbnR5cGUgUG9ldFBhZ2VQYXJhbXMgPSB7XG4gICAgcG9ldFNsdWc6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHM8UG9ldFBhZ2VQcm9wcywgUG9ldFBhZ2VQYXJhbXM+ID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBwb2V0U2x1ZyA9IGNvbnRleHQucGFyYW1zPy5wb2V0U2x1ZztcblxuICAgIGlmICghcG9ldFNsdWcpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgdGhhdCBwb2V0IVwiKTtcblxuICAgIGNvbnN0IHBvZXQgPSBnZXRQb2V0QnlTbHVnKHBvZXRTbHVnKTtcbiAgICBjb25zdCBwb2VtcyA9IHBvZXQucG9lbVNsdWdzLm1hcChnZXRQb2VtQnlTbHVnKTtcblxuICAgIHJldHVybiB7IHByb3BzOiB7IHBvZXQsIHBvZW1zIH0gfTtcbn07XG5cbnR5cGUgUG9ldFBhZ2VQcm9wcyA9IHtcbiAgICBwb2V0OiBQb2V0O1xuICAgIHBvZW1zOiBQb2VtW107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2V0UGFnZSh7IHBvZXQsIHBvZW1zIH06IFBvZXRQYWdlUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8ZGl2PlRoaXMgaXMgdGhlIHBhZ2UgZm9yIHtwb2V0Lm5hbWV9ITwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3J0cmFpdH0gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgLi8ke3BvZXQucG9ydHJhaXRQYXRofWAgfX0gLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3BvZW1zLm1hcCgocG9lbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cG9lbS5zbHVnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND57cG9lbS50aXRsZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24+e3BvZW0uYm9keX08L1JlYWN0TWFya2Rvd24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==