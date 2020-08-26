module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/components/NewsCard/NewsCard.js":
/*!***********************************************!*\
  !*** ./pages/components/NewsCard/NewsCard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.js */ "./pages/components/NewsCard/styles.js");
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\news\\pages\\components\\NewsCard\\NewsCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const NewsCard = ({
  article: {
    description,
    publishedAt,
    source,
    title,
    url,
    urlToImage
  },
  i,
  activeArticle
}) => {
  const classes = Object(_styles_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const {
    0: elRefs,
    1: setElRefs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const scrollToRef = ref => window.scroll(0, ref.current.offsetTop - 50);

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setElRefs(refs => Array(20).fill().map((_, j) => refs[j] || Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])()));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    ref: elRefs[i],
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.card, activeArticle === i ? classes.activeCard : null),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], {
    href: url,
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 12
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    className: classes.media,
    image: urlToImage || 'https://npcs.govmu.org/English/News/PublishingImages/news8.jpg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 16
    }
  }), __jsx("div", {
    className: classes.details,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 16
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "h2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, new Date(publishedAt).toDateString()), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "h2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, source.name)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.title,
    gutterBottom: true,
    variant: "h5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 16
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 20
    }
  }, description))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActions"], {
    className: classes.cardActions,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 12
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5",
    color: "textSecondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 16
    }
  }, i + 1)));
};

/* harmony default export */ __webpack_exports__["default"] = (NewsCard);

/***/ }),

/***/ "./pages/components/NewsCard/styles.js":
/*!*********************************************!*\
  !*** ./pages/components/NewsCard/styles.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
  media: {
    height: 150
  },
  border: {
    border: 'solid'
  },
  fullHeightCard: {
    height: '100%'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderBottom: '10px solid white'
  },
  activeCard: {
    borderBottom: '10px solid #22289a'
  },
  grid: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px'
  },
  title: {
    padding: '0 16px'
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

/***/ }),

/***/ "./pages/components/NewsCards/NewsCards.js":
/*!*************************************************!*\
  !*** ./pages/components/NewsCards/NewsCards.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.js */ "./pages/components/NewsCards/styles.js");
/* harmony import */ var _NewsCard_NewsCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NewsCard/NewsCard */ "./pages/components/NewsCard/NewsCard.js");
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\news\\pages\\components\\NewsCards\\NewsCards.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const infoCards = [{
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

const NewsCards = ({
  articles,
  activeArticle
}) => {
  const classes = Object(_styles_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

  if (!articles.length) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grow"], {
      in: true,
      __self: undefined,
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
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, infoCards.map(infoCard => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      item: true,
      xs: 12,
      sm: 6,
      md: 4,
      lg: 3,
      className: classes.infoCard,
      __self: undefined,
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
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 28
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h5",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 33
      }
    }, infoCard.title), infoCard.info ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h6",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 34
      }
    }, __jsx("strong", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 37
      }
    }, infoCard.title.split(' ')[2], ":"), __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 41
      }
    }), infoCard.info) : null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h6",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 33
      }
    }, "Try saying: ", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 70
      }
    }), __jsx("i", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 75
      }
    }, infoCard.text)))))));
  }

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grow"], {
    in: true,
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, articles.map((article, i) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
    style: {
      display: 'flex'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx(_NewsCard_NewsCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    article: article,
    activeArticle: activeArticle,
    i: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (NewsCards);

/***/ }),

/***/ "./pages/components/NewsCards/styles.js":
/*!**********************************************!*\
  !*** ./pages/components/NewsCards/styles.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
  container: {
    padding: '0 5%',
    width: '100%',
    margin: 0
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    height: '50vh',
    padding: '10%',
    borderRadius: 10,
    color: 'white',
    margin: 5
  },
  infoCard: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  }
}));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_NewsCards_NewsCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/NewsCards/NewsCards */ "./pages/components/NewsCards/NewsCards.js");
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.js */ "./pages/styles.js");
/* harmony import */ var words_to_numbers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! words-to-numbers */ "words-to-numbers");
/* harmony import */ var words_to_numbers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(words_to_numbers__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\news\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const alanKey = '41451801c5be1cc25d558341b0b04d782e956eca572e1d8b807a3e2338fdd0dc/stage';

function App() {
  const {
    0: newsArticles,
    1: setNewsArticles
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: activeArticle,
    1: setactiveArticles
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1);
  const classes = Object(_styles_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const alanBtn = __webpack_require__(/*! @alan-ai/alan-sdk-web */ "@alan-ai/alan-sdk-web");

    alanBtn({
      key: alanKey,
      onCommand: ({
        command,
        articles,
        number
      }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
          setactiveArticles(-1);
        } else if (command === 'highlight') {
          setactiveArticles(prevActiveArticle => prevActiveArticle + 1);
        } else if (command === 'open') {
          const parsedNumber = number.length > 2 ? words_to_numbers__WEBPACK_IMPORTED_MODULE_3___default()(number, {
            fuzzy: true
          }) : number;

          if (parsedNumber > 20) {
            window.open("https://sitechecker.pro/wp-content/uploads/2017/12/ahrefs-404-page-not-found.png", '_blank');
          } else {
            window.open(articles[parsedNumber - 1].url, '_blank');
          }
        }
      }
    });
  }, []);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.logoContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "https://alan.app/voice/images/previews/preview.jpg",
    className: classes.alanLogo,
    alt: "alan logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  })), __jsx(_components_NewsCards_NewsCards__WEBPACK_IMPORTED_MODULE_1__["default"], {
    articles: newsArticles,
    activeArticle: activeArticle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./pages/styles.js":
/*!*************************!*\
  !*** ./pages/styles.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  footer: {
    textAlign: 'center',
    position: 'fixed',
    left: 0,
    bottom: 0,
    color: 'black',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '120px',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  link: {
    textDecoration: 'none',
    color: 'rgba(21, 101, 192)'
  },
  image: {
    marginLeft: 20
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    padding: '3%',
    borderRadius: 10,
    color: 'white',
    backgroundColor: 'rgba(21, 101, 192)',
    margin: '0 12px',
    textAlign: 'center',
    height: '25vmin',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
      width: '100%',
      height: 'initial',
      '&:nth-of-type(1)': {
        marginBottom: '12px'
      }
    }
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  logoContainer: {
    padding: '0 5%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center'
    }
  },
  alanLogo: {
    height: '27vmin',
    borderRadius: '15%',
    padding: '0 5%',
    margin: '3% 0',
    [theme.breakpoints.down('sm')]: {
      height: '35vmin'
    }
  }
})));

/***/ }),

/***/ "@alan-ai/alan-sdk-web":
/*!****************************************!*\
  !*** external "@alan-ai/alan-sdk-web" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@alan-ai/alan-sdk-web");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "words-to-numbers":
/*!***********************************!*\
  !*** external "words-to-numbers" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("words-to-numbers");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9OZXdzQ2FyZC9OZXdzQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL05ld3NDYXJkL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL05ld3NDYXJkcy9OZXdzQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9OZXdzQ2FyZHMvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYWxhbi1haS9hbGFuLXNkay13ZWJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndvcmRzLXRvLW51bWJlcnNcIiJdLCJuYW1lcyI6WyJOZXdzQ2FyZCIsImFydGljbGUiLCJkZXNjcmlwdGlvbiIsInB1Ymxpc2hlZEF0Iiwic291cmNlIiwidGl0bGUiLCJ1cmwiLCJ1cmxUb0ltYWdlIiwiaSIsImFjdGl2ZUFydGljbGUiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwiZWxSZWZzIiwic2V0RWxSZWZzIiwidXNlU3RhdGUiLCJzY3JvbGxUb1JlZiIsInJlZiIsIndpbmRvdyIsInNjcm9sbCIsImN1cnJlbnQiLCJvZmZzZXRUb3AiLCJ1c2VFZmZlY3QiLCJyZWZzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImoiLCJjcmVhdGVSZWYiLCJjbGFzc05hbWVzIiwiY2FyZCIsImFjdGl2ZUNhcmQiLCJtZWRpYSIsImRldGFpbHMiLCJEYXRlIiwidG9EYXRlU3RyaW5nIiwibmFtZSIsImNhcmRBY3Rpb25zIiwibWFrZVN0eWxlcyIsImhlaWdodCIsImJvcmRlciIsImZ1bGxIZWlnaHRDYXJkIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImJvcmRlckJvdHRvbSIsImdyaWQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiaW5mb0NhcmRzIiwiY29sb3IiLCJ0ZXh0IiwiaW5mbyIsIk5ld3NDYXJkcyIsImFydGljbGVzIiwibGVuZ3RoIiwiY29udGFpbmVyIiwiaW5mb0NhcmQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzcGxpdCIsIndpZHRoIiwiYWxpZ25JdGVtcyIsImJvcmRlclJhZGl1cyIsInRleHRBbGlnbiIsImFsYW5LZXkiLCJBcHAiLCJuZXdzQXJ0aWNsZXMiLCJzZXROZXdzQXJ0aWNsZXMiLCJzZXRhY3RpdmVBcnRpY2xlcyIsImFsYW5CdG4iLCJyZXF1aXJlIiwia2V5Iiwib25Db21tYW5kIiwiY29tbWFuZCIsIm51bWJlciIsInByZXZBY3RpdmVBcnRpY2xlIiwicGFyc2VkTnVtYmVyIiwid29yZHNUb051bWJlcnMiLCJmdXp6eSIsIm9wZW4iLCJsb2dvQ29udGFpbmVyIiwiYWxhbkxvZ28iLCJ0aGVtZSIsImZvb3RlciIsInBvc2l0aW9uIiwibGVmdCIsImJvdHRvbSIsImJyZWFrcG9pbnRzIiwiZG93biIsImxpbmsiLCJ0ZXh0RGVjb3JhdGlvbiIsImltYWdlIiwibWFyZ2luTGVmdCIsIm1hcmdpbkJvdHRvbSIsImluZm9Db250YWluZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtR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RUFBRSxRQURBO0FBRVJ1QixnQkFBWSxFQUFFLEtBRk47QUFHUmQsV0FBTyxFQUFFLE1BSEQ7QUFJUkQsVUFBTSxFQUFFLE1BSkE7QUFLUixLQUFDbUMsS0FBSyxDQUFDSyxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFELEdBQWdDO0FBQ2hDakQsWUFBTSxFQUFFO0FBRHdCO0FBTHhCO0FBaEUwQixDQUFaLENBQUQsQ0FBekIsRTs7Ozs7Ozs7Ozs7QUNGQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdCxjcmVhdGVSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDYXJkLENhcmRBY3Rpb25zLENhcmRBY3Rpb25BcmVhLENhcmRDb250ZW50LENhcmRNZWRpYSxCdXR0b24sVHlwb2dyYXBoeX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL3N0eWxlcy5qcyc7XHJcblxyXG5jb25zdCBOZXdzQ2FyZCA9ICh7YXJ0aWNsZTp7ZGVzY3JpcHRpb24scHVibGlzaGVkQXQsc291cmNlLHRpdGxlLHVybCx1cmxUb0ltYWdlfSxpLGFjdGl2ZUFydGljbGV9KSA9PntcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFtlbFJlZnMsc2V0RWxSZWZzXT11c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBzY3JvbGxUb1JlZiA9IChyZWYpID0+IHdpbmRvdy5zY3JvbGwoMCwgcmVmLmN1cnJlbnQub2Zmc2V0VG9wIC0gNTApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PntcclxuICAgICAgICBzZXRFbFJlZnMoKHJlZnMpID0+IEFycmF5KDIwKS5maWxsKCkubWFwKChfLCBqKSA9PiByZWZzW2pdIHx8IGNyZWF0ZVJlZigpKSk7XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihpID09PSBhY3RpdmVBcnRpY2xlICYmIGVsUmVmc1thY3RpdmVBcnRpY2xlXSl7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvUmVmKGVsUmVmc1thY3RpdmVBcnRpY2xlXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbaSxhY3RpdmVBcnRpY2xlLGVsUmVmc10pO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgPENhcmQgcmVmPXtlbFJlZnNbaV19IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLmNhcmQsIGFjdGl2ZUFydGljbGUgPT09IGkgPyBjbGFzc2VzLmFjdGl2ZUNhcmQgOiBudWxsKX0+XHJcbiAgICAgICAgICAgPENhcmRBY3Rpb25BcmVhIGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+IFxyXG4gICAgICAgICAgICAgICA8Q2FyZE1lZGlhIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX0gaW1hZ2U9e3VybFRvSW1hZ2UgfHwgJ2h0dHBzOi8vbnBjcy5nb3ZtdS5vcmcvRW5nbGlzaC9OZXdzL1B1Ymxpc2hpbmdJbWFnZXMvbmV3czguanBnJ30vPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWxzfT5cclxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGNvbXBvbmVudD0naDInPnsobmV3IERhdGUocHVibGlzaGVkQXQpKS50b0RhdGVTdHJpbmcoKX08L1R5cG9ncmFwaHk+XHJcbiAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBjb21wb25lbnQ9J2gyJz57c291cmNlLm5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiPnt0aXRsZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGNvbXBvbmVudD1cInBcIj57ZGVzY3JpcHRpb259PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICAgPENhcmRBY3Rpb25zIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkQWN0aW9uc30+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj57aSsxfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgPC9DYXJkPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3c0NhcmQ7IiwiaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFrZVN0eWxlcyh7XHJcbiAgICBtZWRpYTp7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTAsXHJcbiAgICB9LFxyXG4gICAgYm9yZGVyOntcclxuICAgICAgICBib3JkZXI6ICdzb2xpZCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bGxIZWlnaHRDYXJkOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNhcmQ6e1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzEwcHggc29saWQgd2hpdGUnLFxyXG4gICAgICB9LFxyXG4gICAgICBhY3RpdmVDYXJkOntcclxuICAgICAgICBib3JkZXJCb3R0b206ICcxMHB4IHNvbGlkICMyMjI4OWEnLFxyXG4gICAgICB9LFxyXG4gICAgICBncmlkOntcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRldGFpbHM6e1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgIG1hcmdpbjogJzIwcHgnLFxyXG4gICAgICB9LFxyXG4gICAgICB0aXRsZTp7XHJcbiAgICAgICAgcGFkZGluZzogJzAgMTZweCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNhcmRBY3Rpb25zOntcclxuICAgICAgICBwYWRkaW5nOiAnMCAxNnB4IDhweCAxNnB4JyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgfVxyXG4gICAgfSk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR3JpZCwgR3JvdywgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHVzZVN0eWxlcyAgZnJvbSAnLi9zdHlsZXMuanMnO1xyXG5pbXBvcnQgTmV3c0NhcmQgZnJvbSAnLi4vTmV3c0NhcmQvTmV3c0NhcmQnO1xyXG5cclxuY29uc3QgaW5mb0NhcmRzID0gW1xyXG4gICAgeyBjb2xvcjogJyMwMDgzOGYnLCB0aXRsZTogJ0xhdGVzdCBOZXdzJywgdGV4dDogJ0dpdmUgbWUgdGhlIGxhdGVzdCBuZXdzJyB9LFxyXG4gICAgeyBjb2xvcjogJyMxNTY1YzAnLCB0aXRsZTogJ05ld3MgYnkgQ2F0ZWdvcmllcycsIGluZm86ICdCdXNpbmVzcywgRW50ZXJ0YWlubWVudCwgR2VuZXJhbCwgSGVhbHRoLCBTY2llbmNlLCBTcG9ydHMsIFRlY2hub2xvZ3knLCB0ZXh0OiAnR2l2ZSBtZSB0aGUgbGF0ZXN0IFRlY2hub2xvZ3kgbmV3cycgfSxcclxuICAgIHsgY29sb3I6ICcjNDUyN2EwJywgdGl0bGU6ICdOZXdzIGJ5IFRlcm1zJywgaW5mbzogJ0JpdGNvaW4sIFBsYXlTdGF0aW9uIDUsIFNtYXJ0cGhvbmVzLCBEb25hbGQgVHJ1bXAuLi4nLCB0ZXh0OiAnV2hhdFxcJ3MgdXAgd2l0aCBQbGF5U3RhdGlvbiA1JyB9LFxyXG4gICAgeyBjb2xvcjogJyMyODM1OTMnLCB0aXRsZTogJ05ld3MgYnkgU291cmNlcycsIGluZm86ICdDTk4sIFdpcmVkLCBUaW1lLCBJR04sIEJ1enpmZWVkLCBBQkMgTmV3cy4uLicsIHRleHQ6ICdHaXZlIG1lIHRoZSBuZXdzIGZyb20gQ05OJyB9LFxyXG4gIF07XHJcblxyXG5jb25zdCBOZXdzQ2FyZHMgPSAoeyBhcnRpY2xlcyxhY3RpdmVBcnRpY2xlIH0pID0+e1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgaWYoIWFydGljbGVzLmxlbmd0aCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8R3JvdyBpbj5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9IGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwic3RyZXRjaFwiIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAge2luZm9DYXJkcy5tYXAoKGluZm9DYXJkKT0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs0fSBsZz17M30gY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9DYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGluZm9DYXJkLmNvbG9yfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e2luZm9DYXJkLnRpdGxlfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mb0NhcmQuaW5mbyA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmZvQ2FyZC50aXRsZS5zcGxpdCgnICcpWzJdfTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZm9DYXJkLmluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PiApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5Ucnkgc2F5aW5nOiA8YnIvPjxpPntpbmZvQ2FyZC50ZXh0fTwvaT48L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3Jvdz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxHcm93IGluPlxyXG4gICAgICAgICAgICA8R3JpZCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfSBjb250YWluZXIgYWxpZ25JdGVtcz1cInN0cmV0Y2hcIiBzcGFjaW5nPXszfT5cclxuICAgICAgICAgICAge2FydGljbGVzLm1hcCgoYXJ0aWNsZSwgaSk9PihcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezR9IGxnPXszfSBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxOZXdzQ2FyZCBhcnRpY2xlPXthcnRpY2xlfSBhY3RpdmVBcnRpY2xlPXthY3RpdmVBcnRpY2xlfSBpPXtpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3Jvdz5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld3NDYXJkczsiLCJpbXBvcnQge21ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1ha2VTdHlsZXMoe1xyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgICAgcGFkZGluZzogJzAgNSUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgbWFyZ2luOiAwXHJcbiAgICB9LFxyXG4gICAgY2FyZDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIHdpZHRoOiAnOTAlJyxcclxuICAgICAgICBoZWlnaHQ6ICc1MHZoJyxcclxuICAgICAgICBwYWRkaW5nOiAnMTAlJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIG1hcmdpbjogNVxyXG4gICAgfSxcclxuICAgIGluZm9DYXJkOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICAgIH1cclxufSk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5ld3NDYXJkcyBmcm9tICcuL2NvbXBvbmVudHMvTmV3c0NhcmRzL05ld3NDYXJkcyc7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9zdHlsZXMuanMnOyBcclxuaW1wb3J0IHdvcmRzVG9OdW1iZXJzIGZyb20gJ3dvcmRzLXRvLW51bWJlcnMnO1xyXG5jb25zdCBhbGFuS2V5ID0nNDE0NTE4MDFjNWJlMWNjMjVkNTU4MzQxYjBiMDRkNzgyZTk1NmVjYTU3MmUxZDhiODA3YTNlMjMzOGZkZDBkYy9zdGFnZSc7XHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICAgIGNvbnN0IFtuZXdzQXJ0aWNsZXMsIHNldE5ld3NBcnRpY2xlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbYWN0aXZlQXJ0aWNsZSwgc2V0YWN0aXZlQXJ0aWNsZXNdID0gdXNlU3RhdGUoLTEpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGFsYW5CdG4gPSByZXF1aXJlKFwiQGFsYW4tYWkvYWxhbi1zZGstd2ViXCIpO1xyXG4gICAgYWxhbkJ0bih7XHJcbiAgICBrZXk6IGFsYW5LZXksXHJcbiAgICBvbkNvbW1hbmQ6ICh7IGNvbW1hbmQsIGFydGljbGVzLCBudW1iZXIgfSkgPT57XHJcbiAgICAgICAgaWYoY29tbWFuZCA9PT0gJ25ld0hlYWRsaW5lcycpe1xyXG4gICAgICAgICAgICBzZXROZXdzQXJ0aWNsZXMoYXJ0aWNsZXMpO1xyXG4gICAgICAgICAgICBzZXRhY3RpdmVBcnRpY2xlcygtMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKGNvbW1hbmQgPT09ICdoaWdobGlnaHQnKXtcclxuICAgICAgICAgICAgc2V0YWN0aXZlQXJ0aWNsZXMoKHByZXZBY3RpdmVBcnRpY2xlKSA9PiBwcmV2QWN0aXZlQXJ0aWNsZSsxKTtcclxuICAgICAgICB9IGVsc2UgaWYoY29tbWFuZCA9PT0gJ29wZW4nKXtcclxuICAgICAgICAgICAgY29uc3QgcGFyc2VkTnVtYmVyID0gbnVtYmVyLmxlbmd0aCA+IDIgPyB3b3Jkc1RvTnVtYmVycyhudW1iZXIsIHtmdXp6eTogdHJ1ZX0pIDogbnVtYmVyO1xyXG4gICAgICAgICAgICBpZihwYXJzZWROdW1iZXIgPiAyMCl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vc2l0ZWNoZWNrZXIucHJvL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzEyL2FocmVmcy00MDQtcGFnZS1ub3QtZm91bmQucG5nXCIsJ19ibGFuaycpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4oYXJ0aWNsZXNbcGFyc2VkTnVtYmVyLTFdLnVybCwnX2JsYW5rJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgfVxyXG4gICAgfSk7XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29Db250YWluZXJ9PiBcclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vYWxhbi5hcHAvdm9pY2UvaW1hZ2VzL3ByZXZpZXdzL3ByZXZpZXcuanBnXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmFsYW5Mb2dvfSBhbHQ9XCJhbGFuIGxvZ29cIi8+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgICA8TmV3c0NhcmRzIGFydGljbGVzPXtuZXdzQXJ0aWNsZXN9IGFjdGl2ZUFydGljbGU9e2FjdGl2ZUFydGljbGV9Lz5cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICAgIH1cclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBmb290ZXI6IHtcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICBib3R0b206IDAsXHJcbiAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGhlaWdodDogJzEyMHB4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGluazoge1xyXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgIGNvbG9yOiAncmdiYSgyMSwgMTAxLCAxOTIpJyxcclxuICB9LFxyXG4gIGltYWdlOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiAyMCxcclxuICB9LFxyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgd2lkdGg6ICc1MCUnLFxyXG4gICAgcGFkZGluZzogJzMlJyxcclxuICAgIGJvcmRlclJhZGl1czogMTAsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjEsIDEwMSwgMTkyKScsXHJcbiAgICBtYXJnaW46ICcwIDEycHgnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGhlaWdodDogJzI1dm1pbicsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbi1yZXZlcnNlJyxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgaGVpZ2h0OiAnaW5pdGlhbCcsXHJcbiAgICAgICcmOm50aC1vZi10eXBlKDEpJzoge1xyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJzEycHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGluZm9Db250YWluZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxvZ29Db250YWluZXI6IHtcclxuICAgIHBhZGRpbmc6ICcwIDUlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uLXJldmVyc2UnLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGFsYW5Mb2dvOiB7XHJcbiAgICBoZWlnaHQ6ICcyN3ZtaW4nLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMTUlJyxcclxuICAgIHBhZGRpbmc6ICcwIDUlJyxcclxuICAgIG1hcmdpbjogJzMlIDAnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICBoZWlnaHQ6ICczNXZtaW4nLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbGFuLWFpL2FsYW4tc2RrLXdlYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3b3Jkcy10by1udW1iZXJzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=