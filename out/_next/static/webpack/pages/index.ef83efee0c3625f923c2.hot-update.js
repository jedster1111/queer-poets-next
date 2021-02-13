webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PoetsList; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_PoetsList_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/PoetsList.module.css */ "./styles/PoetsList.module.css");
/* harmony import */ var _styles_PoetsList_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_PoetsList_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/jed/coding/jedster1111/queerpoets-next/pages/index.tsx";



var __N_SSG = true;
function PoetsList(_ref) {
  var _this = this;

  var poets = _ref.poets;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _styles_PoetsList_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_PoetsList_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.poetsList,
      children: poets.map(function (_ref2) {
        var name = _ref2.name,
            slug = _ref2.slug,
            portraitPath = _ref2.portraitPath;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_PoetsList_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.poetItem,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/poets/".concat(slug),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _styles_PoetsList_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.portraitWrapper,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_PoetsList_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.name,
                children: name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: _styles_PoetsList_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.portrait,
                src: portraitPath,
                alt: "Portrait of the poet"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, _this)
        }, name, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}
_c = PoetsList;

var _c;

$RefreshReg$(_c, "PoetsList");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlBvZXRzTGlzdCIsInBvZXRzIiwic3R5bGVzIiwid3JhcHBlciIsInBvZXRzTGlzdCIsIm1hcCIsIm5hbWUiLCJzbHVnIiwicG9ydHJhaXRQYXRoIiwicG9ldEl0ZW0iLCJwb3J0cmFpdFdyYXBwZXIiLCJwb3J0cmFpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7O0FBWWUsU0FBU0EsU0FBVCxPQUEyRjtBQUFBOztBQUFBLE1BQXRFQyxLQUFzRSxRQUF0RUEsS0FBc0U7QUFDdEcsc0JBQ0k7QUFBUyxhQUFTLEVBQUVDLG1FQUFNLENBQUNDLE9BQTNCO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUVELG1FQUFNLENBQUNFLFNBQXZCO0FBQUEsZ0JBQ0tILEtBQUssQ0FBQ0ksR0FBTixDQUFVO0FBQUEsWUFBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsWUFBU0MsSUFBVCxTQUFTQSxJQUFUO0FBQUEsWUFBZUMsWUFBZixTQUFlQSxZQUFmO0FBQUEsNEJBQ1A7QUFBZ0IsbUJBQVMsRUFBRU4sbUVBQU0sQ0FBQ08sUUFBbEM7QUFBQSxpQ0FDSSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLG1CQUFZRixJQUFaLENBQVY7QUFBQSxtQ0FDSTtBQUFNLHVCQUFTLEVBQUVMLG1FQUFNLENBQUNRLGVBQXhCO0FBQUEsc0NBQ0k7QUFBSyx5QkFBUyxFQUFFUixtRUFBTSxDQUFDSSxJQUF2QjtBQUFBLDBCQUE4QkE7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQUsseUJBQVMsRUFBRUosbUVBQU0sQ0FBQ1MsUUFBdkI7QUFBaUMsbUJBQUcsRUFBRUgsWUFBdEM7QUFBb0QsbUJBQUcsRUFBQztBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixXQUFVRixJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRE87QUFBQSxPQUFWO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWdCSDtLQWpCdUJOLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWY4M2VmZWUwYzM2MjVmOTIzYzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzLCBJbmZlckdldFN0YXRpY1Byb3BzVHlwZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Qb2V0c0xpc3QubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgUG9ldCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0QWxsUG9ldHMgfSBmcm9tIFwiLi4vdXRpbHMvZGF0YS9wb2V0c1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzPHtcbiAgICBwb2V0czogUG9ldFtdO1xufT4gPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcG9ldHMgPSBnZXRBbGxQb2V0cygpO1xuXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgcG9ldHMgfSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9ldHNMaXN0KHsgcG9ldHMgfTogSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGU8dHlwZW9mIGdldFN0YXRpY1Byb3BzPik6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9ldHNMaXN0fT5cbiAgICAgICAgICAgICAgICB7cG9ldHMubWFwKCh7IG5hbWUsIHNsdWcsIHBvcnRyYWl0UGF0aCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtuYW1lfSBjbGFzc05hbWU9e3N0eWxlcy5wb2V0SXRlbX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3BvZXRzLyR7c2x1Z31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wb3J0cmFpdFdyYXBwZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PntuYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLnBvcnRyYWl0fSBzcmM9e3BvcnRyYWl0UGF0aH0gYWx0PVwiUG9ydHJhaXQgb2YgdGhlIHBvZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9