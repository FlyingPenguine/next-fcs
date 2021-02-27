webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(Buffer, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fcs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fcs */ \"./node_modules/fcs/fcs.js\");\n/* harmony import */ var fcs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fcs__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/amazingshellyyy/projects/amazyyy/next-fcs/pages/index.js\";\n\n\n\n\nvar acceptFile = function acceptFile(file) {\n  var reader = new FileReader();\n  console.log('file just upload', file);\n\n  reader.onabort = function () {\n    return console.log('file reading was aborted');\n  };\n\n  reader.onerror = function () {\n    return console.log('file reading has failed');\n  };\n\n  reader.onload = function () {\n    console.log('file on load'); // Do whatever you want with the file contents\n    // console.log('reader', reader)\n    // arrayBuffer\n\n    var binaryStr = reader.result; // console.log('binaryStr', binaryStr)\n\n    var buffer = Buffer.from(binaryStr, 'binary'); // console.log('buffer', buffer)\n\n    var FCSfile = new fcs__WEBPACK_IMPORTED_MODULE_3___default.a({}, buffer);\n    console.log('FCSfile', FCSfile);\n  };\n\n  console.log('file', file);\n  reader.readAsArrayBuffer(file);\n};\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Create Next App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,\n        children: [\"Welcome to \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"https://nextjs.org\",\n          children: \"Next.js!52333\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 22\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"file\",\n          onChange: function onChange(e) {\n            return acceptFile(e.target.files[0]);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          onChange: function onChange(e) {\n            return console.log(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,\n        children: [\"Get started by editing\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"code\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.code,\n          children: \"pages/index.js\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, this);\n}\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/node-libs-browser/node_modules/buffer/index.js */ \"./node_modules/node-libs-browser/node_modules/buffer/index.js\").Buffer, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJhY2NlcHRGaWxlIiwiZmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJjb25zb2xlIiwibG9nIiwib25hYm9ydCIsIm9uZXJyb3IiLCJvbmxvYWQiLCJiaW5hcnlTdHIiLCJyZXN1bHQiLCJidWZmZXIiLCJCdWZmZXIiLCJmcm9tIiwiRkNTZmlsZSIsIkZDUyIsInJlYWRBc0FycmF5QnVmZmVyIiwiSG9tZSIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJjb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUFVO0FBQzNCLE1BQU1DLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWY7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NKLElBQWhDOztBQUNBQyxRQUFNLENBQUNJLE9BQVAsR0FBaUI7QUFBQSxXQUFNRixPQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWixDQUFOO0FBQUEsR0FBakI7O0FBQ0FILFFBQU0sQ0FBQ0ssT0FBUCxHQUFpQjtBQUFBLFdBQU1ILE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLENBQU47QUFBQSxHQUFqQjs7QUFDQUgsUUFBTSxDQUFDTSxNQUFQLEdBQWdCLFlBQU07QUFDcEJKLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFEb0IsQ0FFdEI7QUFDRTtBQUNBOztBQUNBLFFBQU1JLFNBQVMsR0FBR1AsTUFBTSxDQUFDUSxNQUF6QixDQUxvQixDQU1wQjs7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSixTQUFaLEVBQXVCLFFBQXZCLENBQWYsQ0FQb0IsQ0FRcEI7O0FBQ0EsUUFBTUssT0FBTyxHQUFHLElBQUlDLDBDQUFKLENBQVEsRUFBUixFQUFZSixNQUFaLENBQWhCO0FBQ0FQLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJTLE9BQXZCO0FBQ0QsR0FYRDs7QUFZQVYsU0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQkosSUFBcEI7QUFDQUMsUUFBTSxDQUFDYyxpQkFBUCxDQUF5QmYsSUFBekI7QUFDRCxDQW5CRDs7QUFvQmUsU0FBU2dCLElBQVQsR0FBZ0I7QUFDN0Isc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDhEQUFNLENBQUNDLFNBQXZCO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBTSxlQUFTLEVBQUVELDhEQUFNLENBQUNFLElBQXhCO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFFRiw4REFBTSxDQUFDRyxLQUF0QjtBQUFBLCtDQUNhO0FBQUcsY0FBSSxFQUFDLG9CQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBQSxnQ0FDRTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLGtCQUFRLEVBQUUsa0JBQUNDLENBQUQ7QUFBQSxtQkFBT3RCLFVBQVUsQ0FBQ3NCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQUFELENBQWpCO0FBQUE7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsa0JBQVEsRUFBRSxrQkFBQ0YsQ0FBRDtBQUFBLG1CQUFPbEIsT0FBTyxDQUFDQyxHQUFSLENBQVlpQixDQUFDLENBQUNDLE1BQUYsQ0FBU0UsS0FBckIsQ0FBUDtBQUFBO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFRRTtBQUFHLGlCQUFTLEVBQUVQLDhEQUFNLENBQUNRLFdBQXJCO0FBQUEsNkNBQ3lCLEdBRHpCLGVBRUU7QUFBTSxtQkFBUyxFQUFFUiw4REFBTSxDQUFDUyxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNCRDtLQXZCdUJWLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBGQ1MgZnJvbSAnZmNzJ1xuY29uc3QgYWNjZXB0RmlsZSA9IChmaWxlKSA9PiB7XG4gIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgY29uc29sZS5sb2coJ2ZpbGUganVzdCB1cGxvYWQnLCBmaWxlKVxuICByZWFkZXIub25hYm9ydCA9ICgpID0+IGNvbnNvbGUubG9nKCdmaWxlIHJlYWRpbmcgd2FzIGFib3J0ZWQnKVxuICByZWFkZXIub25lcnJvciA9ICgpID0+IGNvbnNvbGUubG9nKCdmaWxlIHJlYWRpbmcgaGFzIGZhaWxlZCcpXG4gIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2ZpbGUgb24gbG9hZCcpXG4gIC8vIERvIHdoYXRldmVyIHlvdSB3YW50IHdpdGggdGhlIGZpbGUgY29udGVudHNcbiAgICAvLyBjb25zb2xlLmxvZygncmVhZGVyJywgcmVhZGVyKVxuICAgIC8vIGFycmF5QnVmZmVyXG4gICAgY29uc3QgYmluYXJ5U3RyID0gcmVhZGVyLnJlc3VsdFxuICAgIC8vIGNvbnNvbGUubG9nKCdiaW5hcnlTdHInLCBiaW5hcnlTdHIpXG4gICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oYmluYXJ5U3RyLCAnYmluYXJ5JylcbiAgICAvLyBjb25zb2xlLmxvZygnYnVmZmVyJywgYnVmZmVyKVxuICAgIGNvbnN0IEZDU2ZpbGUgPSBuZXcgRkNTKHt9LCBidWZmZXIpXG4gICAgY29uc29sZS5sb2coJ0ZDU2ZpbGUnLCBGQ1NmaWxlKVxuICB9XG4gIGNvbnNvbGUubG9nKCdmaWxlJywgZmlsZSlcbiAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpXG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBXZWxjb21lIHRvIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmdcIj5OZXh0LmpzITUyMzMzPC9hPlxuICAgICAgICA8L2gxPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0nZmlsZScgb25DaGFuZ2U9eyhlKSA9PiBhY2NlcHRGaWxlKGUudGFyZ2V0LmZpbGVzWzBdKX0gLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgb25DaGFuZ2U9eyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIEdldCBzdGFydGVkIGJ5IGVkaXRpbmd7JyAnfVxuICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT17c3R5bGVzLmNvZGV9PnBhZ2VzL2luZGV4LmpzPC9jb2RlPlxuICAgICAgICA8L3A+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})