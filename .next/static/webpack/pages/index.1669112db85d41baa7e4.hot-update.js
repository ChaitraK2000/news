webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/NewsCard/NewsCard.js":
/*!***********************************************!*\
  !*** ./pages/components/NewsCard/NewsCard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.js */ "./pages/components/NewsCard/styles.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\news\\pages\\components\\NewsCard\\NewsCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var NewsCard = function NewsCard(_ref) {
  _s();

  var _ref$article = _ref.article,
      description = _ref$article.description,
      publishedAt = _ref$article.publishedAt,
      source = _ref$article.source,
      title = _ref$article.title,
      url = _ref$article.url,
      urlToImage = _ref$article.urlToImage,
      i = _ref.i,
      activeArticle = _ref.activeArticle;
  var classes = Object(_styles_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      elRefs = _useState[0],
      setElRefs = _useState[1];

  var scrollToRef = function scrollToRef(ref) {
    return window.scroll(0, ref.current.offsetTop - 50);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setElRefs(function (refs) {
      return Array(20).fill().map(function (_, j) {
        return refs[j] || Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
      });
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    ref: elRefs[i],
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.card, activeArticle === i ? classes.activeCard : null),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], {
    href: url,
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 12
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    className: classes.media,
    image: urlToImage || 'https://npcs.govmu.org/English/News/PublishingImages/news8.jpg',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 16
    }
  }), __jsx("div", {
    className: classes.details,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 16
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "h2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, new Date(publishedAt).toDateString()), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "h2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, source.name)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.title,
    gutterBottom: true,
    variant: "h5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 16
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 20
    }
  }, description))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActions"], {
    className: classes.cardActions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 12
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5",
    color: "textSecondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 16
    }
  }, i + 1)));
};

_s(NewsCard, "VFg59gN6Gq3eAxzg8dDoROYQuCQ=", false, function () {
  return [_styles_js__WEBPACK_IMPORTED_MODULE_3__["default"]];
});

_c = NewsCard;
/* harmony default export */ __webpack_exports__["default"] = (NewsCard);

var _c;

$RefreshReg$(_c, "NewsCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9OZXdzQ2FyZC9OZXdzQ2FyZC5qcyJdLCJuYW1lcyI6WyJOZXdzQ2FyZCIsImFydGljbGUiLCJkZXNjcmlwdGlvbiIsInB1Ymxpc2hlZEF0Iiwic291cmNlIiwidGl0bGUiLCJ1cmwiLCJ1cmxUb0ltYWdlIiwiaSIsImFjdGl2ZUFydGljbGUiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwidXNlU3RhdGUiLCJlbFJlZnMiLCJzZXRFbFJlZnMiLCJzY3JvbGxUb1JlZiIsInJlZiIsIndpbmRvdyIsInNjcm9sbCIsImN1cnJlbnQiLCJvZmZzZXRUb3AiLCJ1c2VFZmZlY3QiLCJyZWZzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImoiLCJjcmVhdGVSZWYiLCJjbGFzc05hbWVzIiwiY2FyZCIsImFjdGl2ZUNhcmQiLCJtZWRpYSIsImRldGFpbHMiLCJEYXRlIiwidG9EYXRlU3RyaW5nIiwibmFtZSIsImNhcmRBY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBb0Y7QUFBQTs7QUFBQSwwQkFBbEZDLE9BQWtGO0FBQUEsTUFBekVDLFdBQXlFLGdCQUF6RUEsV0FBeUU7QUFBQSxNQUE3REMsV0FBNkQsZ0JBQTdEQSxXQUE2RDtBQUFBLE1BQWpEQyxNQUFpRCxnQkFBakRBLE1BQWlEO0FBQUEsTUFBMUNDLEtBQTBDLGdCQUExQ0EsS0FBMEM7QUFBQSxNQUFwQ0MsR0FBb0MsZ0JBQXBDQSxHQUFvQztBQUFBLE1BQWhDQyxVQUFnQyxnQkFBaENBLFVBQWdDO0FBQUEsTUFBcEJDLENBQW9CLFFBQXBCQSxDQUFvQjtBQUFBLE1BQWxCQyxhQUFrQixRQUFsQkEsYUFBa0I7QUFDakcsTUFBTUMsT0FBTyxHQUFHQywwREFBUyxFQUF6Qjs7QUFEaUcsa0JBRXhFQyxzREFBUSxDQUFDLEVBQUQsQ0FGZ0U7QUFBQSxNQUUxRkMsTUFGMEY7QUFBQSxNQUVuRkMsU0FGbUY7O0FBR2pHLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEdBQUQ7QUFBQSxXQUFTQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxDQUFkLEVBQWlCRixHQUFHLENBQUNHLE9BQUosQ0FBWUMsU0FBWixHQUF3QixFQUF6QyxDQUFUO0FBQUEsR0FBcEI7O0FBRUFDLHlEQUFTLENBQUMsWUFBSztBQUNYUCxhQUFTLENBQUMsVUFBQ1EsSUFBRDtBQUFBLGFBQVVDLEtBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsSUFBVixHQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsZUFBVUwsSUFBSSxDQUFDSyxDQUFELENBQUosSUFBV0MsdURBQVMsRUFBOUI7QUFBQSxPQUFyQixDQUFWO0FBQUEsS0FBRCxDQUFUO0FBQ0gsR0FGUSxFQUVQLEVBRk8sQ0FBVDtBQUlBUCx5REFBUyxDQUFDLFlBQUk7QUFDVixRQUFHYixDQUFDLEtBQUtDLGFBQU4sSUFBdUJJLE1BQU0sQ0FBQ0osYUFBRCxDQUFoQyxFQUFnRDtBQUM1Q00saUJBQVcsQ0FBQ0YsTUFBTSxDQUFDSixhQUFELENBQVAsQ0FBWDtBQUNIO0FBQ0osR0FKUSxFQUlQLENBQUNELENBQUQsRUFBR0MsYUFBSCxFQUFpQkksTUFBakIsQ0FKTyxDQUFUO0FBS0EsU0FDRyxNQUFDLHNEQUFEO0FBQU0sT0FBRyxFQUFFQSxNQUFNLENBQUNMLENBQUQsQ0FBakI7QUFBc0IsYUFBUyxFQUFFcUIsaURBQVUsQ0FBQ25CLE9BQU8sQ0FBQ29CLElBQVQsRUFBZXJCLGFBQWEsS0FBS0QsQ0FBbEIsR0FBc0JFLE9BQU8sQ0FBQ3FCLFVBQTlCLEdBQTJDLElBQTFELENBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdFQUFEO0FBQWdCLFFBQUksRUFBRXpCLEdBQXRCO0FBQTJCLFVBQU0sRUFBQyxRQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywyREFBRDtBQUFXLGFBQVMsRUFBRUksT0FBTyxDQUFDc0IsS0FBOUI7QUFBcUMsU0FBSyxFQUFFekIsVUFBVSxJQUFJLGdFQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLGFBQVMsRUFBRUcsT0FBTyxDQUFDdUIsT0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNYLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsT0FBcEI7QUFBNEIsU0FBSyxFQUFDLGVBQWxDO0FBQWtELGFBQVMsRUFBQyxJQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1FLElBQUlDLElBQUosQ0FBUy9CLFdBQVQsQ0FBRCxDQUF3QmdDLFlBQXhCLEVBQWxFLENBRFcsRUFFWCxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQTRCLFNBQUssRUFBQyxlQUFsQztBQUFrRCxhQUFTLEVBQUMsSUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrRS9CLE1BQU0sQ0FBQ2dDLElBQXpFLENBRlcsQ0FGSixFQU1QLE1BQUMsNERBQUQ7QUFBWSxhQUFTLEVBQUUxQixPQUFPLENBQUNMLEtBQS9CO0FBQXNDLGdCQUFZLE1BQWxEO0FBQW1ELFdBQU8sRUFBQyxJQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlFQSxLQUFqRSxDQU5PLEVBT0ksTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUE0QixTQUFLLEVBQUMsZUFBbEM7QUFBa0QsYUFBUyxFQUFDLEdBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUVILFdBQWpFLENBREosQ0FQSixDQURKLEVBWUksTUFBQyw2REFBRDtBQUFhLGFBQVMsRUFBRVEsT0FBTyxDQUFDMkIsV0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsU0FBSyxFQUFDLGVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0Q3QixDQUFDLEdBQUMsQ0FBbEQsQ0FGSixDQVpKLENBREg7QUFtQkgsQ0FqQ0Q7O0dBQU1SLFE7VUFDY1csa0Q7OztLQURkWCxRO0FBbUNTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNjY5MTEyZGI4NWQ0MWJhYTdlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3QsY3JlYXRlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Q2FyZCxDYXJkQWN0aW9ucyxDYXJkQWN0aW9uQXJlYSxDYXJkQ29udGVudCxDYXJkTWVkaWEsQnV0dG9uLFR5cG9ncmFwaHl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9zdHlsZXMuanMnO1xyXG5cclxuY29uc3QgTmV3c0NhcmQgPSAoe2FydGljbGU6e2Rlc2NyaXB0aW9uLHB1Ymxpc2hlZEF0LHNvdXJjZSx0aXRsZSx1cmwsdXJsVG9JbWFnZX0saSxhY3RpdmVBcnRpY2xlfSkgPT57XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbZWxSZWZzLHNldEVsUmVmc109dXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3Qgc2Nyb2xsVG9SZWYgPSAocmVmKSA9PiB3aW5kb3cuc2Nyb2xsKDAsIHJlZi5jdXJyZW50Lm9mZnNldFRvcCAtIDUwKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICAgICAgc2V0RWxSZWZzKChyZWZzKSA9PiBBcnJheSgyMCkuZmlsbCgpLm1hcCgoXywgaikgPT4gcmVmc1tqXSB8fCBjcmVhdGVSZWYoKSkpO1xyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoaSA9PT0gYWN0aXZlQXJ0aWNsZSAmJiBlbFJlZnNbYWN0aXZlQXJ0aWNsZV0pe1xyXG4gICAgICAgICAgICBzY3JvbGxUb1JlZihlbFJlZnNbYWN0aXZlQXJ0aWNsZV0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sW2ksYWN0aXZlQXJ0aWNsZSxlbFJlZnNdKTtcclxuICAgIHJldHVybihcclxuICAgICAgIDxDYXJkIHJlZj17ZWxSZWZzW2ldfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5jYXJkLCBhY3RpdmVBcnRpY2xlID09PSBpID8gY2xhc3Nlcy5hY3RpdmVDYXJkIDogbnVsbCl9PlxyXG4gICAgICAgICAgIDxDYXJkQWN0aW9uQXJlYSBocmVmPXt1cmx9IHRhcmdldD1cIl9ibGFua1wiPiBcclxuICAgICAgICAgICAgICAgPENhcmRNZWRpYSBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9IGltYWdlPXt1cmxUb0ltYWdlIHx8ICdodHRwczovL25wY3MuZ292bXUub3JnL0VuZ2xpc2gvTmV3cy9QdWJsaXNoaW5nSW1hZ2VzL25ld3M4LmpwZyd9Lz5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsc30+XHJcbiAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBjb21wb25lbnQ9J2gyJz57KG5ldyBEYXRlKHB1Ymxpc2hlZEF0KSkudG9EYXRlU3RyaW5nKCl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PSdoMic+e3NvdXJjZS5uYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIj57dGl0bGV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBjb21wb25lbnQ9XCJwXCI+e2Rlc2NyaXB0aW9ufTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgICAgIDxDYXJkQWN0aW9ucyBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZEFjdGlvbnN9PlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+e2krMX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgIDwvQ2FyZD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld3NDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=