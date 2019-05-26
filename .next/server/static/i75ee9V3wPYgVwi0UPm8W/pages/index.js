module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4oSG":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-fredoka-v4@2x-3b02020ddfaf9ff6ba12d6533364037b.png";

/***/ }),

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "6dKc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var GuestHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(GuestHeader, _Component);

  function GuestHeader(props) {
    _classCallCheck(this, GuestHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(GuestHeader).call(this, props));
  }

  _createClass(GuestHeader, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        charSet: "UTF-8"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, this.props.title || ''), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "description",
        content: this.props.description || ''
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        href: "/static/resources/images/logo-fredokav3@2x.png"
      }));
    }
  }]);

  return GuestHeader;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "Hz3a":
/***/ (function(module, exports) {

module.exports = require("draft-js");

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "QI5m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return connectReduxGuestNavbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _musclefeed_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("sCFN");
/* harmony import */ var _static_resources_main_application_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("yObJ");
/* harmony import */ var _static_resources_main_application_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_resources_main_application_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_resources_images_logo_fredoka_v4_2x_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4oSG");
/* harmony import */ var _static_resources_images_logo_fredoka_v4_2x_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_resources_images_logo_fredoka_v4_2x_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_redux_actions_product_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("jGtb");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var InputSearch = antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Search;

var GuestNavbar =
/*#__PURE__*/
function (_Component) {
  _inherits(GuestNavbar, _Component);

  function GuestNavbar(props) {
    var _this;

    _classCallCheck(this, GuestNavbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GuestNavbar).call(this, props));
    _this.state = {
      searchQuery: '',
      categories: null,
      logged: false,
      user: null
    };
    _this.onSearch = _this.onSearch.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(GuestNavbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;
      dispatch(Object(_components_redux_actions_product_action__WEBPACK_IMPORTED_MODULE_7__[/* fetchAllProductCategories */ "g"])());

      if (this.props.logged && typeof this.props.logged === "boolean") {
        this.setState({
          logged: this.props.logged
        });
      }

      if (this.props.user && typeof this.props.user === "string") {
        this.setState({
          user: typeof this.props.user === "string" && this.props.user.length > 2 ? JSON.parse(this.props.user) : this.props.user
        });
      }

      if (this.props.categories && typeof this.props.categories === "string") {
        this.setState({
          categories: typeof this.props.categories === "string" && this.props.categories.length > 2 ? JSON.parse(this.props.categories) : this.props.categories
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(previous) {
      if (previous.user !== this.props.user) {
        this.setState({
          user: JSON.parse(this.props.user)
        });
      }

      if (previous.logged !== this.props.logged) {
        this.setState({
          logged: this.props.logged
        });
      }

      if (previous.categories !== this.props.categories) {
        this.setState({
          categories: typeof this.props.categories === "string" && this.props.categories.length > 2 ? JSON.parse(this.props.categories) : this.props.categories
        });
      }
    }
  }, {
    key: "onSearch",
    value: function onSearch(event) {
      this.setState({
        searchQuery: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container m-0 container-top-one " + this.props.className
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row d-flex flex-row justify-content-center row-guest-first"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-3 d-flex flex-row justify-content-end"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _static_resources_images_logo_fredoka_v4_2x_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        className: "application-logo"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-6 d-flex flex-row justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputSearch, {
        size: "medium",
        onChange: this.onSearch,
        placeholder: "Rechercher produit par type ou marque.",
        className: "application-search-input",
        enterButton: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-3 d-flex flex-row justify-content-start"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"].Group, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: this.state.logged ? "/user-dashboard" : "/user-account"
      }, this.state.logged === false ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "default",
        className: "application-button-default-style"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "user",
        className: "application-button-icon-style",
        style: {
          fontSize: 15
        }
      }), "\xA0Mon compte")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "default",
        className: "application-user-link"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, this.state.user && this.state.user.firstname + ' ' + this.state.user.lastname))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/user-cart"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "default",
        className: "application-button-default-style"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
        dot: true,
        style: {
          marginTop: 0,
          marginRight: -5
        },
        className: "application-button-default-style-reset"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "shopping-cart",
        className: "application-button-icon-style",
        style: {
          fontSize: 15
        }
      }), "\xA0Mon panier")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row d-flex flex-row justify-content-center row-guest-second"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "application-categories-button",
        type: "link"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "d-flex flex-column p-0"
      }, "Acceuil", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "divider-categories"
      })))), this.state.categories && Array.isArray(this.state.categories) && this.state.categories.map(function (item) {
        if (item.parent === 0) {
          var url = Object(_musclefeed_configuration__WEBPACK_IMPORTED_MODULE_4__[/* slugify */ "a"])(item.name);
          var menu = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], null, item.sub.length > 0 && item.sub.map(function (subs) {
            var sub = Object(_musclefeed_configuration__WEBPACK_IMPORTED_MODULE_4__[/* slugify */ "a"])(subs.name);
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
              key: subs.id
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              as: "/products/".concat(url, "/").concat(sub),
              href: "/products?category=".concat(url, "&sub=").concat(sub)
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "sub-category-link"
            }, subs.name)));
          }));
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            as: "/products/".concat(url, "/"),
            href: "/products?category=".concat(url)
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
            overlay: menu
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            key: item.id,
            className: "application-categories-button ml-2",
            type: "link"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "d-flex flex-column p-0"
          }, item.name, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "divider-categories"
          })))));
        }
      }))));
    }
  }]);

  return GuestNavbar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(state) {
  var categories = state.adminReducer.categories;
  var _state$authentication = state.authenticationReducer,
      logged = _state$authentication.logged,
      user = _state$authentication.user;
  return {
    categories: categories,
    logged: logged,
    user: user
  };
}

var connectReduxGuestNavbar = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(GuestNavbar);


/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _source_components_component_header_guest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6dKc");
/* harmony import */ var _source_components_component_footer_guest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("gkbE");
/* harmony import */ var _source_components_component_navbar_guest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("QI5m");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ozu2");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Hz3a");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_resources_main_application_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("yObJ");
/* harmony import */ var _static_resources_main_application_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_resources_main_application_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _source_components_redux_actions_product_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("jGtb");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var SHome =
/*#__PURE__*/
function (_Component) {
  _inherits(SHome, _Component);

  function SHome(props) {
    var _this;

    _classCallCheck(this, SHome);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SHome).call(this, props));
    _this.state = {
      slideshow: null,
      products: null,
      description: false
    };
    _this.minimum = _this.minimum.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SHome, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;
      this.setState({
        description: true
      });
      dispatch(Object(_source_components_redux_actions_product_action__WEBPACK_IMPORTED_MODULE_9__[/* fetchAllProducts */ "j"])());
      dispatch(Object(_source_components_redux_actions_product_action__WEBPACK_IMPORTED_MODULE_9__[/* fetchAllSlideshowImages */ "k"])());
      dispatch(Object(_source_components_redux_actions_product_action__WEBPACK_IMPORTED_MODULE_9__[/* fetchAllProductPerfumes */ "h"])());
      dispatch(Object(_source_components_redux_actions_product_action__WEBPACK_IMPORTED_MODULE_9__[/* fetchAllProductWeights */ "i"])());

      if (this.props.products && typeof this.props.products === "string") {
        this.setState({
          products: typeof this.props.products === "string" && this.props.products.length > 2 ? JSON.parse(this.props.products) : this.props.products
        });
      }

      if (this.props.slideshow && typeof this.props.slideshow === "string") {
        this.setState({
          slideshow: typeof this.props.slideshow === "string" && this.props.slideshow.length > 2 ? JSON.parse(this.props.slideshow) : this.props.slideshow
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(previous) {
      if (previous.products !== this.props.products) {
        this.setState({
          products: typeof this.props.products === "string" && this.props.products.length > 2 ? JSON.parse(this.props.products) : this.props.products
        });
      }

      if (previous.slideshow !== this.props.slideshow) {
        this.setState({
          slideshow: typeof this.props.slideshow === "string" && this.props.slideshow.length > 2 ? JSON.parse(this.props.slideshow) : this.props.slideshow
        });
      }
    }
  }, {
    key: "minimum",
    value: function minimum(item) {
      console.log(JSON.parse(item.details).weights);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.state.products);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_source_components_component_header_guest__WEBPACK_IMPORTED_MODULE_1__[/* GuestHeader */ "a"], {
        title: "Muscle Feed | Toutes marques de prot\xE9ines pour la Musculation & nutrition sportive.",
        description: "Boutique en ligne de compl\xE9ments alimentaires et de prot\xE9ines pour la musculation \xE0 prix cass\xE9. Le meilleur de la construction musculaire : proteines, gainer, bcaa, bruleur de graisses, booster."
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_source_components_component_navbar_guest__WEBPACK_IMPORTED_MODULE_3__[/* GuestNavbar */ "a"], {
        className: "application-guest-navbar"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-top-three"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row carousel-row-homepage p-0 m-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Carousel"], {
        dotPosition: 'bottom',
        autoplay: true,
        className: "carousel-container-homepage"
      }, this.state.slideshow && Array.isArray(this.state.slideshow) && this.state.slideshow.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: item.id
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: item.image,
          className: "carousel-image"
        }));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-fluid elevation-products d-flex flex-wrap justify-content-start"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "elevation-products-list d-flex flex-wrap justify-content-start"
      }, this.state.products && Array.isArray(this.state.products) && this.state.products.slice(0, 8).map(function (item) {
        _this2.minimum(item);

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: item.id,
          className: "col-2 d-flex flex-column justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "product-image-home",
          src: item.image
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "d-flex flex-column justify-content-center align-items-center"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "product-provider-home"
        }, item.provider), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "product-title-home"
        }, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "product-description-title-home mt-1"
        }, item.description_title), _this2.state.description && item.description !== "" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "product-description-text-home"
        }, Object(draft_js__WEBPACK_IMPORTED_MODULE_7__["convertFromRaw"])(JSON.parse(item.description)).getPlainText().substr(0, 140), "..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "d-flex flex-row p-0 justify-content-end mt-2"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-4"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "product-price-home"
        }, "Prix: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-8"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__["ButtonGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          intent: "danger",
          icon: "heart",
          text: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "button-product-user"
          }, "Favoris")
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          intent: "primary",
          icon: "shopping-cart",
          text: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "button-product-user"
          }, "Commander")
        }))))));
      }))))));
    }
  }]);

  return SHome;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(state) {
  var _state$adminReducer = state.adminReducer,
      products = _state$adminReducer.products,
      slideshow = _state$adminReducer.slideshow,
      perfumes = _state$adminReducer.perfumes,
      weights = _state$adminReducer.weights;
  return {
    products: products,
    slideshow: slideshow,
    perfumes: perfumes,
    weights: weights
  };
}

var connectReduxHome = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(SHome);
/* harmony default export */ __webpack_exports__["default"] = (connectReduxHome);

/***/ }),

/***/ "S0b8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return productConstants; });
var productConstants = {
  productCategoryAddSuccess: 'productCategoryAddSuccess',
  productCategoryAddFailure: 'productCategoryAddFailure',
  productCategoryAddRequest: 'productCategoryAddRequest',
  productPerfumeAddSuccess: 'productPerfumeAddSuccess',
  productPerfumeAddFailure: 'productPerfumeAddFailure',
  productPerfumeAddRequest: 'productPerfumeAddRequest',
  productWeightAddSuccess: 'productWeightAddSuccess',
  productWeightAddFailure: 'productWeightAddFailure',
  productWeightAddRequest: 'productWeightAddRequest',
  productCategoryFetchSuccess: 'productCategoryFetchSuccess',
  productCategoryFetchFailure: 'productCategoryFetchFailure',
  productCategoryFetchRequest: 'productCategoryFetchRequest',
  productPerfumeFetchSuccess: 'productPerfumeFetchSuccess',
  productPerfumeFetchFailure: 'productPerfumeFetchFailure',
  productPerfumeFetchRequest: 'productPerfumeFetchRequest',
  productWeightFetchSuccess: 'productWeightFetchSuccess',
  productWeightFetchFailure: 'productWeightFetchFailure',
  productWeightFetchRequest: 'productWeightFetchRequest',
  productAddRequest: 'productAddRequest',
  productAddSuccess: 'productAddSuccess',
  productAddFailure: 'productAddFailure',
  productFetchRequest: 'productFetchRequest',
  productFetchSuccess: 'productFetchSuccess',
  productFetchFailure: 'productFetchFailure',
  productDeleteRequest: 'productDeleteRequest',
  productDeleteSuccess: 'productDeleteSuccess',
  productDeleteFailure: 'productDeleteFailure',
  productSlideshowAddRequest: 'productSlideshowAddRequest',
  productSlideshowAddSuccess: 'productSlideshowAddSuccess',
  productSlideshowAddFailure: 'productSlideshowAddFailure',
  productSlideshowFetchRequest: 'productSlideshowFetchRequest',
  productSlideshowFetchSuccess: 'productSlideshowFetchSuccess',
  productSlideshowFetchFailure: 'productSlideshowFetchFailure',
  productSlideshowDeleteRequest: 'productSlideshowDeleteRequest',
  productSlideshowDeleteSuccess: 'productSlideshowDeleteSuccess',
  productSlideshowDeleteFailure: 'productSlideshowDeleteFailure'
};

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cOit":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return showWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return showSuccess; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_resources_admin_account_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("o9iy");
/* harmony import */ var _static_resources_admin_account_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_resources_admin_account_scss__WEBPACK_IMPORTED_MODULE_2__);



function showWarning(message) {
  antd__WEBPACK_IMPORTED_MODULE_1__["notification"].open({
    message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "error-text-login"
    }, message),
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      type: "warning",
      style: {
        color: '#108ee9'
      },
      className: "error-icon-login"
    }),
    className: 'notification-warning-toast'
  });
}
function showSuccess(message) {
  antd__WEBPACK_IMPORTED_MODULE_1__["notification"].open({
    message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "error-text-login"
    }, message),
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      type: "check-circle",
      style: {
        color: '#108ee9'
      },
      className: "error-icon-login"
    }),
    className: 'notification-warning-toast'
  });
}

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gkbE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GuestFooter */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var GuestFooter =
/*#__PURE__*/
function (_Component) {
  _inherits(GuestFooter, _Component);

  function GuestFooter(props) {
    _classCallCheck(this, GuestFooter);

    return _possibleConstructorReturn(this, _getPrototypeOf(GuestFooter).call(this, props));
  }

  _createClass(GuestFooter, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    }
  }]);

  return GuestFooter;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "jGtb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: ./source/components/redux-constants/product-constant.js
var product_constant = __webpack_require__("S0b8");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");

// CONCATENATED MODULE: ./source/components/apollo-client/account-apollo/product-query.js

var addProductCategoryQuery = "mutation addProductCategoryQuery($name: String!, $description: String!, $parent: Int!) { addProductCategoryQuery(name: $name, description: $description, parent: $parent) { id, name, description, parent } }";
var addProductPerfumeQuery = "mutation addProductPerfumeQuery($name: String!, $description: String!) { addProductPerfumeQuery(name: $name, description: $description) { id, name, description } }";
var addProductWeightQuery = "mutation addProductWeightQuery($name: String!, $value: Int!) { addProductWeightQuery(name: $name, value: $value) { id, name, value } }";
var addProductQuery = "mutation addProductQuery($title: String!, $quantity: Int!, $provider: String!, $description_title: String!, $description: String!, $image: String!, $details: String!) { \n    addProductQuery(title: $title, quantity: $quantity, provider: $provider, description_title: $description_title, description: $description, image: $image, details: $details) { id, title, quantity, provider, description_title, description, image, details } }";
var addSlideshowImageQuery = "mutation addSlideshowImageQuery($name: String!, $image: String!) { addSlideshowImageQuery(name: $name, image: $image) { id, name, image } }";
var fetchProductCategoriesQuery = "query { fetchAllCategories { id, name, description, parent, sub { id, name, description, parent } } }";
var fetchProductWeightsQuery = "query { fetchAllWeights { id, name, value } }";
var fetchProductPerfumesQuery = "query { fetchAllPerfumes { id, name, description } }";
var fetchProductsQuery = "query { fetchProducts { id, title, quantity, provider, description_title, description, image, details } }";
var fetchSlideshowImageQuery = "query { fetchSlideshowImage { id, name, image } }";
var deleteProductQuery = "mutation deleteProductQuery($id: Int!) { addProductQuery(id: $id) { id, title, quantity, provider, description_title, description, image, details } }";
var deleteSlideshowImageQuery = "mutation deleteSlideshowImageQuery($id: Int!) { deleteSlideshowImageQuery(id: $id) { id, name, image } }";

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__("4vsW");
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./source/components/redux-helpers/product-helper.js




var hostname = 'http://10.188.109.85';
function addProductCategoryService(name, description, parent) {
  return external_node_fetch_default()(hostname + ':3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      query: addProductCategoryQuery,
      variables: {
        name: name,
        description: description,
        parent: parent
      }
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  });
}
function addProductPerfumeService(name, description) {
  return external_node_fetch_default()(hostname + ':3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      query: addProductPerfumeQuery,
      variables: {
        name: name,
        description: description
      }
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  });
}
function addProductWeightService(name, value) {
  var v = parseInt(value, 10);
  return external_node_fetch_default()(hostname + ':3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      query: addProductWeightQuery,
      variables: {
        name: name,
        value: v
      }
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  });
}
function addProductService(title, quantity, provider, description_title, description, image, details) {
  var c = parseInt(quantity);
  return external_node_fetch_default()(hostname + ':3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      query: addProductQuery,
      variables: {
        title: title,
        quantity: c,
        provider: provider,
        description_title: description_title,
        description: description,
        image: image,
        details: JSON.stringify(details)
      }
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  });
}
function addSlideshowImageService(name, image) {
  return external_node_fetch_default()(hostname + ':3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      query: addSlideshowImageQuery,
      variables: {
        name: name,
        image: image
      }
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  });
}
function fetchAllProductsService() {
  return external_node_fetch_default()(hostname + ':3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      query: fetchProductsQuery
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  });
}
function fetchAllProductCategoriesService() {
  return external_node_fetch_default()(hostname + ':3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      query: fetchProductCategoriesQuery
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  });
}
function fetchAllProductWeightsService() {
  return external_node_fetch_default()(hostname + ':3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      query: fetchProductWeightsQuery
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  });
}
function fetchAllProductPerfumesService() {
  return external_node_fetch_default()(hostname + ':3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      query: fetchProductPerfumesQuery
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  });
}
function fetchAllSlideshowImagesService() {
  return external_node_fetch_default()(hostname + ':3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      query: fetchSlideshowImageQuery
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  });
}
function deleteProductService(id) {
  return external_node_fetch_default()(hostname + ':3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      query: deleteProductQuery,
      variables: {
        id: id
      }
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  });
}
function deleteSlideshowImageService(id) {
  return external_node_fetch_default()(hostname + ':3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      query: deleteSlideshowImageQuery,
      variables: {
        id: id
      }
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  });
}
// EXTERNAL MODULE: ./source/components/fragments-tools/alert-toasts.js
var alert_toasts = __webpack_require__("cOit");

// CONCATENATED MODULE: ./source/components/redux-actions/product-action.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return fetchAllProductCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return fetchAllProductWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return fetchAllProductPerfumes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return fetchAllProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return fetchAllSlideshowImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addProductCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addProductPerfume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return addProductWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return addSlideshowImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return deleteSlideshowImage; });
/* unused harmony export deleteProduct */






function fetchAllProductCategories() {
  return function (dispatch) {
    fetchAllProductCategoriesService().then(function (response) {
      return response;
    }).then(function (second) {
      if (second.hasOwnProperty('errors')) {
        Object(alert_toasts["b" /* showWarning */])("Erreur de disposition de catégories.");
        dispatch(failure());
      } else {
        external_js_cookie_default.a.set('product-categories', JSON.stringify(second.data.fetchAllCategories));
        dispatch(success(JSON.stringify(second.data.fetchAllCategories)));
      }
    });
  };

  function request() {
    return {
      type: product_constant["a" /* productConstants */].productCategoryFetchRequest,
      categories: null
    };
  }

  function success(categories) {
    return {
      type: product_constant["a" /* productConstants */].productCategoryFetchSuccess,
      categories: categories
    };
  }

  function failure() {
    return {
      type: product_constant["a" /* productConstants */].productCategoryFetchFailure,
      categories: null
    };
  }
}
function fetchAllProductWeights() {
  return function (dispatch) {
    fetchAllProductWeightsService().then(function (response) {
      return response;
    }).then(function (second) {
      if (second.hasOwnProperty('errors')) {
        Object(alert_toasts["b" /* showWarning */])("Erreur de disposition de poids.");
        dispatch(failure());
      } else {
        external_js_cookie_default.a.set('product-weights', JSON.stringify(second.data.fetchAllWeights));
        dispatch(success(JSON.stringify(second.data.fetchAllWeights)));
      }
    });
  };

  function request() {
    return {
      type: product_constant["a" /* productConstants */].productWeightFetchRequest,
      weights: null
    };
  }

  function success(weights) {
    return {
      type: product_constant["a" /* productConstants */].productWeightFetchSuccess,
      weights: weights
    };
  }

  function failure() {
    return {
      type: product_constant["a" /* productConstants */].productWeightFetchFailure,
      weights: null
    };
  }
}
function fetchAllProductPerfumes() {
  return function (dispatch) {
    fetchAllProductPerfumesService().then(function (response) {
      return response;
    }).then(function (second) {
      if (second.hasOwnProperty('errors')) {
        Object(alert_toasts["b" /* showWarning */])("Erreur de disposition de parfums.");
        dispatch(failure());
      } else {
        external_js_cookie_default.a.set('product-perfumes', JSON.stringify(second.data.fetchAllPerfumes));
        dispatch(success(JSON.stringify(second.data.fetchAllPerfumes)));
      }
    });
  };

  function request() {
    return {
      type: product_constant["a" /* productConstants */].productPerfumeFetchRequest,
      perfumes: null
    };
  }

  function success(perfumes) {
    return {
      type: product_constant["a" /* productConstants */].productPerfumeFetchSuccess,
      perfumes: perfumes
    };
  }

  function failure() {
    return {
      type: product_constant["a" /* productConstants */].productPerfumeFetchFailure,
      perfumes: null
    };
  }
}
function fetchAllProducts() {
  return function (dispatch) {
    fetchAllProductsService().then(function (response) {
      return response;
    }).then(function (second) {
      if (second.hasOwnProperty('errors')) {
        Object(alert_toasts["b" /* showWarning */])("Erreur de disposition de produits.");
        dispatch(failure());
      } else {
        external_js_cookie_default.a.set('products', JSON.stringify(second.data.fetchProducts));
        dispatch(success(JSON.stringify(second.data.fetchProducts)));
      }
    });
  };

  function request() {
    return {
      type: product_constant["a" /* productConstants */].productFetchRequest,
      products: null
    };
  }

  function success(products) {
    return {
      type: product_constant["a" /* productConstants */].productFetchSuccess,
      products: products
    };
  }

  function failure() {
    return {
      type: product_constant["a" /* productConstants */].productFetchFailure,
      products: null
    };
  }
}
function fetchAllSlideshowImages() {
  return function (dispatch) {
    fetchAllSlideshowImagesService().then(function (response) {
      return response;
    }).then(function (second) {
      if (second.hasOwnProperty('errors')) {
        Object(alert_toasts["b" /* showWarning */])("Erreur de disposition d'images.");
        dispatch(failure());
      } else {
        external_js_cookie_default.a.set('slideshow', JSON.stringify(second.data.fetchSlideshowImage));
        dispatch(success(JSON.stringify(second.data.fetchSlideshowImage)));
      }
    });
  };

  function request() {
    return {
      type: product_constant["a" /* productConstants */].productSlideshowFetchRequest,
      slideshow: null
    };
  }

  function success(slideshow) {
    return {
      type: product_constant["a" /* productConstants */].productSlideshowFetchSuccess,
      slideshow: slideshow
    };
  }

  function failure() {
    return {
      type: product_constant["a" /* productConstants */].productSlideshowFetchFailure,
      slideshow: null
    };
  }
}
function addProductCategory(name, description, parent, close) {
  return function (dispatch) {
    addProductCategoryService(name, description, parent).then(function (response) {
      dispatch(request());
      return response;
    }).then(function (second) {
      if (second.hasOwnProperty('errors')) {
        close(false);
        Object(alert_toasts["b" /* showWarning */])("Addition catégorie échoué.");
        dispatch(failure());
      } else {
        dispatch(success(second.data.addProductCategoryQuery));
        dispatch(fetchAllProductCategories());
        close();
        Object(alert_toasts["a" /* showSuccess */])("Addition catégorie avec succès.");
      }
    });
  };

  function request() {
    return {
      type: product_constant["a" /* productConstants */].productCategoryAddRequest,
      categories: null
    };
  }

  function success(categories) {
    return {
      type: product_constant["a" /* productConstants */].productCategoryAddSuccess,
      categories: categories
    };
  }

  function failure() {
    return {
      type: product_constant["a" /* productConstants */].productCategoryAddFailure,
      categories: null
    };
  }
}
function addProductPerfume(name, description, close) {
  return function (dispatch) {
    addProductPerfumeService(name, description).then(function (response) {
      dispatch(request());
      return response;
    }).then(function (second) {
      if (second.hasOwnProperty('errors')) {
        close(false);
        Object(alert_toasts["b" /* showWarning */])("Addition catégorie échoué.");
        dispatch(failure());
      } else {
        dispatch(success(second.data.addProductPerfumeQuery));
        dispatch(fetchAllProductPerfumes());
        close();
        Object(alert_toasts["a" /* showSuccess */])("Addition parfum avec succès.");
      }
    });
  };

  function request() {
    return {
      type: product_constant["a" /* productConstants */].productPerfumeAddRequest,
      perfumes: null
    };
  }

  function success(perfumes) {
    return {
      type: product_constant["a" /* productConstants */].productPerfumeAddSuccess,
      perfumes: perfumes
    };
  }

  function failure() {
    return {
      type: product_constant["a" /* productConstants */].productPerfumeAddFailure,
      perfumes: null
    };
  }
}
function addProductWeight(name, value, close) {
  return function (dispatch) {
    addProductWeightService(name, value).then(function (response) {
      dispatch(request());
      return response;
    }).then(function (second) {
      if (second.hasOwnProperty('errors')) {
        close(false);
        Object(alert_toasts["b" /* showWarning */])("Addition catégorie échoué.");
        dispatch(failure());
      } else {
        dispatch(success(second.data.addProductWeightQuery));
        dispatch(fetchAllProductWeights());
        close();
        Object(alert_toasts["a" /* showSuccess */])("Addition poids avec succès.");
      }
    });
  };

  function request() {
    return {
      type: product_constant["a" /* productConstants */].productWeightAddRequest,
      weights: null
    };
  }

  function success(weights) {
    return {
      type: product_constant["a" /* productConstants */].productWeightAddSuccess,
      weights: weights
    };
  }

  function failure() {
    return {
      type: product_constant["a" /* productConstants */].productWeightAddFailure,
      weights: null
    };
  }
}
function addProduct(title, quantity, provider, description_title, description, image, details) {
  return function (dispatch) {
    addProductService(title, quantity, provider, description_title, description, image, details).then(function (response) {
      dispatch(request());
      return response;
    }).then(function (second) {
      if (second.hasOwnProperty('errors')) {
        Object(alert_toasts["b" /* showWarning */])("Addition produit échoué.");
        dispatch(failure());
      } else {
        dispatch(success(second.data.addProductQuery));
        dispatch(fetchAllProducts());
        Object(alert_toasts["a" /* showSuccess */])("Addition produit avec succès.");
      }
    });
  };

  function request() {
    return {
      type: product_constant["a" /* productConstants */].productAddRequest,
      products: null
    };
  }

  function success(products) {
    return {
      type: product_constant["a" /* productConstants */].productAddSuccess,
      products: products
    };
  }

  function failure() {
    return {
      type: product_constant["a" /* productConstants */].productAddFailure,
      products: null
    };
  }
}
function addSlideshowImage(name, image) {
  return function (dispatch) {
    addSlideshowImageService(name, image).then(function (response) {
      dispatch(request());
      return response;
    }).then(function (second) {
      if (second.hasOwnProperty('errors')) {
        Object(alert_toasts["b" /* showWarning */])("Addition image échoué.");
        dispatch(failure());
      } else {
        dispatch(success(second.data.addSlideshowImageQuery));
        dispatch(fetchAllSlideshowImages());
        Object(alert_toasts["a" /* showSuccess */])("Addition image avec succès.");
      }
    });
  };

  function request() {
    return {
      type: product_constant["a" /* productConstants */].productSlideshowAddRequest,
      slideshow: null
    };
  }

  function success(slideshow) {
    return {
      type: product_constant["a" /* productConstants */].productSlideshowAddSuccess,
      slideshow: slideshow
    };
  }

  function failure() {
    return {
      type: product_constant["a" /* productConstants */].productSlideshowAddFailure,
      slideshow: null
    };
  }
}
function deleteSlideshowImage(id) {
  return function (dispatch) {
    deleteSlideshowImageService(id).then(function (response) {
      dispatch(request());
      return response;
    }).then(function (second) {
      if (second.hasOwnProperty('errors')) {
        Object(alert_toasts["b" /* showWarning */])("Suppression image échoué.");
        dispatch(failure());
      } else {
        dispatch(success(second.deleteSlideshowImageQuery));
        dispatch(fetchAllSlideshowImages());
        Object(alert_toasts["a" /* showSuccess */])("Suppression image avec succès.");
      }
    });
  };

  function request() {
    return {
      type: product_constant["a" /* productConstants */].productSlideshowDeleteRequest,
      slideshow: null
    };
  }

  function success(slideshow) {
    return {
      type: product_constant["a" /* productConstants */].productSlideshowDeleteSuccess,
      slideshow: slideshow
    };
  }

  function failure() {
    return {
      type: product_constant["a" /* productConstants */].productSlideshowDeleteFailure,
      slideshow: null
    };
  }
}
function deleteProduct(id) {
  return function (dispatch) {
    deleteProductService(id).then(function (response) {
      dispatch(request());
      return response;
    }).then(function (second) {
      if (second.hasOwnProperty('errors')) {
        Object(alert_toasts["b" /* showWarning */])("Suppression produit échoué.");
        dispatch(failure());
      } else {
        dispatch(success(second.deleteProductQuery));
        Object(alert_toasts["a" /* showSuccess */])("Suppression produit avec succès.");
      }
    });
  };

  function request() {
    return {
      type: product_constant["a" /* productConstants */].productDeleteRequest,
      slideshow: null
    };
  }

  function success(slideshow) {
    return {
      type: product_constant["a" /* productConstants */].productDeleteSuccess,
      slideshow: slideshow
    };
  }

  function failure() {
    return {
      type: product_constant["a" /* productConstants */].productDeleteFailure,
      slideshow: null
    };
  }
}

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "o9iy":
/***/ (function(module, exports) {



/***/ }),

/***/ "ozu2":
/***/ (function(module, exports) {

module.exports = require("@blueprintjs/core");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sCFN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export saltSync */
/* unused harmony export jwtSecret */
/* unused harmony export stripePublishable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slugify; });
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("yFn1");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);

var saltSync = bcryptjs__WEBPACK_IMPORTED_MODULE_0___default.a.genSaltSync(10, function (error, salt) {
  return salt;
});
var jwtSecret = '$2b$10$LrCfIc4VmkY2J1Riij5yjOM4mCdFXZR8NW0/7Oob7kSrWNRIPodse';
var stripePublishable = 'pk_live_9WY2shJjiy2xcQsWLD26mxRK';

function slugify(string) {
  var a = 'àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿź·/_,:;';
  var b = 'aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------';
  var p = new RegExp(a.split('').join('|'), 'g');
  return string.toString().toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
  .replace(p, function (c) {
    return b.charAt(a.indexOf(c));
  }) // Replace special characters
  .replace(/&/g, '-and-') // Replace & with 'and'
  .replace(/[^\w\-]+/g, '') // Remove all non-word characters
  .replace(/\-\-+/g, '-') // Replace multiple - with single -
  .replace(/^-+/, '') // Trim - from start of text
  .replace(/-+$/, ''); // Trim - from end of text
}



/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yFn1":
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "yObJ":
/***/ (function(module, exports) {



/***/ })

/******/ });