webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/NewsCards/NewsCards.js":
/*!*************************************************!*\
  !*** ./pages/components/NewsCards/NewsCards.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.js */ "./pages/components/NewsCards/styles.js");
/* harmony import */ var _NewsCard_NewsCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NewsCard/NewsCard */ "./pages/components/NewsCard/NewsCard.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\news\\pages\\components\\NewsCards\\NewsCards.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var infoCards = [{
  color: '#00838f',
  title: 'Latest News',
  text: 'Give me the latest news'
}, {
  color: '#1565c0',
  title: 'News by Categories',
  info: 'Business, Entertainment, General, Health, Science, Sports, Technology',
  text: 'Give me the latest Technology news'
}, {
  color: '#4527a0',
  title: 'News by Terms',
  info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...',
  text: 'What\'s up with PlayStation 5'
}, {
  color: '#283593',
  title: 'News by Sources',
  info: 'CNN, Wired, Time, IGN, Buzzfeed, ABC News...',
  text: 'Give me the news from CNN'
}];

var NewsCards = function NewsCards(_ref) {
  _s();

  var articles = _ref.articles,
      activeArticle = _ref.activeArticle;
  var classes = Object(_styles_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

  if (!articles.length) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grow"], {
      "in": true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      className: classes.container,
      container: true,
      alignItems: "stretch",
      spacing: 3,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, infoCards.map(function (infoCard) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        xs: 12,
        sm: 6,
        md: 4,
        lg: 3,
        className: classes.infoCard,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 24
        }
      }, __jsx("div", {
        className: classes.card,
        style: {
          backgroundColor: infoCard.color
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 28
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
        variant: "h5",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 33
        }
      }, infoCard.title), infoCard.info ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
        variant: "h6",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 34
        }
      }, __jsx("strong", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 37
        }
      }, infoCard.title.split(' ')[2], ":"), __jsx("br", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 41
        }
      }), infoCard.info) : null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
        variant: "h6",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 33
        }
      }, "Try saying: ", __jsx("br", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 70
        }
      }), __jsx("i", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 75
        }
      }, infoCard.text))));
    })));
  }

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grow"], {
    "in": true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    className: classes.container,
    container: true,
    alignItems: "stretch",
    spacing: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, articles.map(function (article, i) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      xs: 12,
      sm: 6,
      md: 4,
      lg: 3,
      style: {
        display: 'flex'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }, __jsx(_NewsCard_NewsCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      article: article,
      activeArticle: activeArticle,
      i: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }
    }));
  })));
};

_s(NewsCards, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [_styles_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
});

_c = NewsCards;
/* harmony default export */ __webpack_exports__["default"] = (NewsCards);

var _c;

$RefreshReg$(_c, "NewsCards");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9OZXdzQ2FyZHMvTmV3c0NhcmRzLmpzIl0sIm5hbWVzIjpbImluZm9DYXJkcyIsImNvbG9yIiwidGl0bGUiLCJ0ZXh0IiwiaW5mbyIsIk5ld3NDYXJkcyIsImFydGljbGVzIiwiYWN0aXZlQXJ0aWNsZSIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJsZW5ndGgiLCJjb250YWluZXIiLCJtYXAiLCJpbmZvQ2FyZCIsImNhcmQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzcGxpdCIsImFydGljbGUiLCJpIiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUcsQ0FDZDtBQUFFQyxPQUFLLEVBQUUsU0FBVDtBQUFvQkMsT0FBSyxFQUFFLGFBQTNCO0FBQTBDQyxNQUFJLEVBQUU7QUFBaEQsQ0FEYyxFQUVkO0FBQUVGLE9BQUssRUFBRSxTQUFUO0FBQW9CQyxPQUFLLEVBQUUsb0JBQTNCO0FBQWlERSxNQUFJLEVBQUUsdUVBQXZEO0FBQWdJRCxNQUFJLEVBQUU7QUFBdEksQ0FGYyxFQUdkO0FBQUVGLE9BQUssRUFBRSxTQUFUO0FBQW9CQyxPQUFLLEVBQUUsZUFBM0I7QUFBNENFLE1BQUksRUFBRSxzREFBbEQ7QUFBMEdELE1BQUksRUFBRTtBQUFoSCxDQUhjLEVBSWQ7QUFBRUYsT0FBSyxFQUFFLFNBQVQ7QUFBb0JDLE9BQUssRUFBRSxpQkFBM0I7QUFBOENFLE1BQUksRUFBRSw4Q0FBcEQ7QUFBb0dELE1BQUksRUFBRTtBQUExRyxDQUpjLENBQWxCOztBQU9BLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQStCO0FBQUE7O0FBQUEsTUFBNUJDLFFBQTRCLFFBQTVCQSxRQUE0QjtBQUFBLE1BQW5CQyxhQUFtQixRQUFuQkEsYUFBbUI7QUFDN0MsTUFBTUMsT0FBTyxHQUFHQywwREFBUyxFQUF6Qjs7QUFD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QUE7QUFBQTtBQUFBLE1BREosQ0FEVTtBQUFBLEdBQWIsQ0FERCxDQURKLENBREo7QUFhSCxDQTVDRDs7R0FBTWIsUztVQUNjSSxrRDs7O0tBRGRKLFM7QUE4Q1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVmOWI3NTRmMDM2ZmM4NzJjNWZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHcmlkLCBHcm93LCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgdXNlU3R5bGVzICBmcm9tICcuL3N0eWxlcy5qcyc7XHJcbmltcG9ydCBOZXdzQ2FyZCBmcm9tICcuLi9OZXdzQ2FyZC9OZXdzQ2FyZCc7XHJcblxyXG5jb25zdCBpbmZvQ2FyZHMgPSBbXHJcbiAgICB7IGNvbG9yOiAnIzAwODM4ZicsIHRpdGxlOiAnTGF0ZXN0IE5ld3MnLCB0ZXh0OiAnR2l2ZSBtZSB0aGUgbGF0ZXN0IG5ld3MnIH0sXHJcbiAgICB7IGNvbG9yOiAnIzE1NjVjMCcsIHRpdGxlOiAnTmV3cyBieSBDYXRlZ29yaWVzJywgaW5mbzogJ0J1c2luZXNzLCBFbnRlcnRhaW5tZW50LCBHZW5lcmFsLCBIZWFsdGgsIFNjaWVuY2UsIFNwb3J0cywgVGVjaG5vbG9neScsIHRleHQ6ICdHaXZlIG1lIHRoZSBsYXRlc3QgVGVjaG5vbG9neSBuZXdzJyB9LFxyXG4gICAgeyBjb2xvcjogJyM0NTI3YTAnLCB0aXRsZTogJ05ld3MgYnkgVGVybXMnLCBpbmZvOiAnQml0Y29pbiwgUGxheVN0YXRpb24gNSwgU21hcnRwaG9uZXMsIERvbmFsZCBUcnVtcC4uLicsIHRleHQ6ICdXaGF0XFwncyB1cCB3aXRoIFBsYXlTdGF0aW9uIDUnIH0sXHJcbiAgICB7IGNvbG9yOiAnIzI4MzU5MycsIHRpdGxlOiAnTmV3cyBieSBTb3VyY2VzJywgaW5mbzogJ0NOTiwgV2lyZWQsIFRpbWUsIElHTiwgQnV6emZlZWQsIEFCQyBOZXdzLi4uJywgdGV4dDogJ0dpdmUgbWUgdGhlIG5ld3MgZnJvbSBDTk4nIH0sXHJcbiAgXTtcclxuXHJcbmNvbnN0IE5ld3NDYXJkcyA9ICh7IGFydGljbGVzLGFjdGl2ZUFydGljbGUgfSkgPT57XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBpZighYXJ0aWNsZXMubGVuZ3RoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxHcm93IGluPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0gY29udGFpbmVyIGFsaWduSXRlbXM9XCJzdHJldGNoXCIgc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgICAgICAgICB7aW5mb0NhcmRzLm1hcCgoaW5mb0NhcmQpPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezR9IGxnPXszfSBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0NhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogaW5mb0NhcmQuY29sb3J9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57aW5mb0NhcmQudGl0bGV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvQ2FyZC5pbmZvID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZm9DYXJkLnRpdGxlLnNwbGl0KCcgJylbMl19OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5mb0NhcmQuaW5mb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+ICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlRyeSBzYXlpbmc6IDxici8+PGk+e2luZm9DYXJkLnRleHR9PC9pPjwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9Hcm93PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEdyb3cgaW4+XHJcbiAgICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9IGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwic3RyZXRjaFwiIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICB7YXJ0aWNsZXMubWFwKChhcnRpY2xlLCBpKT0+KFxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSBtZD17NH0gbGc9ezN9IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5ld3NDYXJkIGFydGljbGU9e2FydGljbGV9IGFjdGl2ZUFydGljbGU9e2FjdGl2ZUFydGljbGV9IGk9e2l9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Hcm93PlxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3c0NhcmRzOyJdLCJzb3VyY2VSb290IjoiIn0=