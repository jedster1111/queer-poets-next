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





var PoemsList = function PoemsList(_ref) {
  var poems = _ref.poems;
  if (!poems.length) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _styles_PoetPage_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.poemsList,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "There are no poems yet!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 13
  }, _this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _styles_PoetPage_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.poemsList,
    children: poems.map(function (poem) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: poem.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
          children: poem.body
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, _this)]
      }, poem.slug, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, _this);
};

_c = PoemsList;
var __N_SSG = true;
function PoetPage(_ref2) {
  var poet = _ref2.poet,
      poems = _ref2.poems;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
    className: _styles_PoetPage_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_PoetPage_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.portrait,
      style: {
        backgroundImage: "url(".concat(poet.portraitPath, ")")
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PoemsList, {
      poems: poems
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 9
  }, this);
}
_c2 = PoetPage;

var _c, _c2;

$RefreshReg$(_c, "PoemsList");
$RefreshReg$(_c2, "PoetPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9ldHMvW3BvZXRTbHVnXS50c3giXSwibmFtZXMiOlsiUG9lbXNMaXN0IiwicG9lbXMiLCJsZW5ndGgiLCJzdHlsZXMiLCJwb2Vtc0xpc3QiLCJtYXAiLCJwb2VtIiwidGl0bGUiLCJib2R5Iiwic2x1ZyIsIlBvZXRQYWdlIiwicG9ldCIsIndyYXBwZXIiLCJwb3J0cmFpdCIsImJhY2tncm91bmRJbWFnZSIsInBvcnRyYWl0UGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBTUE7O0FBMEJBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQStDO0FBQUEsTUFBNUNDLEtBQTRDLFFBQTVDQSxLQUE0QztBQUM3RCxNQUFJLENBQUNBLEtBQUssQ0FBQ0MsTUFBWCxFQUNJLG9CQUNJO0FBQVMsYUFBUyxFQUFFQyxrRUFBTSxDQUFDQyxTQUEzQjtBQUFBLDJCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBTUosc0JBQ0k7QUFBUyxhQUFTLEVBQUVELGtFQUFNLENBQUNDLFNBQTNCO0FBQUEsY0FDS0gsS0FBSyxDQUFDSSxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLDBCQUNQO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBS0EsSUFBSSxDQUFDQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSSxxRUFBQyxxREFBRDtBQUFBLG9CQUFnQkQsSUFBSSxDQUFDRTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUEsU0FBY0YsSUFBSSxDQUFDRyxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRE87QUFBQSxLQUFWO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBVUgsQ0FsQkQ7O0tBQU1ULFM7O0FBeUJTLFNBQVNVLFFBQVQsUUFBK0Q7QUFBQSxNQUEzQ0MsSUFBMkMsU0FBM0NBLElBQTJDO0FBQUEsTUFBckNWLEtBQXFDLFNBQXJDQSxLQUFxQztBQUMxRSxzQkFDSTtBQUFTLGFBQVMsRUFBRUUsa0VBQU0sQ0FBQ1MsT0FBM0I7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRVQsa0VBQU0sQ0FBQ1UsUUFBdkI7QUFBaUMsV0FBSyxFQUFFO0FBQUVDLHVCQUFlLGdCQUFTSCxJQUFJLENBQUNJLFlBQWQ7QUFBakI7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUkscUVBQUMsU0FBRDtBQUFXLFdBQUssRUFBRWQ7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBTUg7TUFQdUJTLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9ldHMvW3BvZXRTbHVnXS5hMDMwMmFiMDc1M2E3ZDZmZDAxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBQb2VtLCBQb2V0IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRQb2V0QnlTbHVnLCBnZXRQb2V0U2x1Z3MgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZGF0YS9wb2V0c1wiO1xuaW1wb3J0IHsgZ2V0UG9lbUJ5U2x1Zywgc29ydFBvZW1zQnlEYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2RhdGEvcG9lbXNcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL1BvZXRQYWdlLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRoczx7IHBvZXRTbHVnOiBzdHJpbmcgfT4gPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcG9ldFNsdWdzID0gZ2V0UG9ldFNsdWdzKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRoczogcG9ldFNsdWdzLm1hcCgocG9ldFNsdWcpID0+ICh7IHBhcmFtczogeyBwb2V0U2x1ZyB9IH0pKSxcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlLFxuICAgIH07XG59O1xuXG50eXBlIFBvZXRQYWdlUGFyYW1zID0ge1xuICAgIHBvZXRTbHVnOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzPFBvZXRQYWdlUHJvcHMsIFBvZXRQYWdlUGFyYW1zPiA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgcG9ldFNsdWcgPSBjb250ZXh0LnBhcmFtcz8ucG9ldFNsdWc7XG5cbiAgICBpZiAoIXBvZXRTbHVnKSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIHRoYXQgcG9ldCFcIik7XG5cbiAgICBjb25zdCBwb2V0ID0gZ2V0UG9ldEJ5U2x1Zyhwb2V0U2x1Zyk7XG4gICAgY29uc3QgcG9lbXMgPSBzb3J0UG9lbXNCeURhdGUocG9ldC5wb2VtU2x1Z3MubWFwKGdldFBvZW1CeVNsdWcpKTtcblxuICAgIHJldHVybiB7IHByb3BzOiB7IHBvZXQsIHBvZW1zIH0gfTtcbn07XG5cbmNvbnN0IFBvZW1zTGlzdCA9ICh7IHBvZW1zIH06IHsgcG9lbXM6IFBvZW1bXSB9KTogSlNYLkVsZW1lbnQgPT4ge1xuICAgIGlmICghcG9lbXMubGVuZ3RoKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMucG9lbXNMaXN0fT5cbiAgICAgICAgICAgICAgICA8cD5UaGVyZSBhcmUgbm8gcG9lbXMgeWV0ITwvcD5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnBvZW1zTGlzdH0+XG4gICAgICAgICAgICB7cG9lbXMubWFwKChwb2VtKSA9PiAoXG4gICAgICAgICAgICAgICAgPGFydGljbGUga2V5PXtwb2VtLnNsdWd9PlxuICAgICAgICAgICAgICAgICAgICA8aDM+e3BvZW0udGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24+e3BvZW0uYm9keX08L1JlYWN0TWFya2Rvd24+XG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xufTtcblxudHlwZSBQb2V0UGFnZVByb3BzID0ge1xuICAgIHBvZXQ6IFBvZXQ7XG4gICAgcG9lbXM6IFBvZW1bXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvZXRQYWdlKHsgcG9ldCwgcG9lbXMgfTogUG9ldFBhZ2VQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9ydHJhaXR9IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke3BvZXQucG9ydHJhaXRQYXRofSlgIH19IC8+XG4gICAgICAgICAgICA8UG9lbXNMaXN0IHBvZW1zPXtwb2Vtc30gLz5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9