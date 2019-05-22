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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ySQr");


/***/ }),

/***/ "3NBp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_helpers_authentication_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Shr3");
/* harmony import */ var _static_resources_admin_account_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("o9iy");
/* harmony import */ var _static_resources_admin_account_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_resources_admin_account_scss__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Header = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Header;
var confirm = antd__WEBPACK_IMPORTED_MODULE_1__["Modal"].confirm;
var AdminHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(AdminHeader, _Component);

  function AdminHeader(props) {
    var _this;

    _classCallCheck(this, AdminHeader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AdminHeader).call(this, props));
    _this.state = {
      user: null
    };
    _this.onLogOut = _this.onLogOut.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AdminHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.hasOwnProperty('user') && typeof this.props.user === "string") {
        this.setState({
          user: JSON.parse(this.props.user)
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(previous) {
      if (this.props.hasOwnProperty('user') && previous.user !== this.props.user) {
        this.setState({
          user: JSON.parse(this.props.user)
        });
      }
    }
  }, {
    key: "onLogOut",
    value: function onLogOut() {
      console.log('sure ?');
      confirm({
        title: 'Voulez-vous vraiment vous déconnecter ?',
        content: 'Souhaitez-vous vous déconnecter ?',
        onOk: function onOk() {
          Object(_redux_helpers_authentication_helper__WEBPACK_IMPORTED_MODULE_3__[/* logoutService */ "b"])(true);
        },
        onCancel: function onCancel() {}
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
        style: {
          background: '#ffffff',
          padding: 0,
          height: '36px'
        },
        className: "application-admin-header p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex flex-row justify-content-end sub-admin-header p-0 align-items-center px-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/user-account"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "admin-information-first"
      }, this.state.user && this.state.user.firstname + ' ' + this.state.user.lastname)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "danger",
        onClick: this.onLogOut,
        shape: "circle",
        className: "ml-2 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/user-cart"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "poweroff",
        className: "button-icon-header"
      }))))));
    }
  }]);

  return AdminHeader;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
AdminHeader.defaultProps = {
  user: null
};

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

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

/***/ "Shr3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");

// CONCATENATED MODULE: ./source/components/apollo-client/account-apollo/authentication-query.js


var retrieveAccount = function retrieveAccount(admin) {
  var query;

  if (admin === true) {
    query = "mutation retrieveAdminAccount($email: String!, $password: String!) { retrieveAdminAccount(email: $email, password: $password) { firstname, lastname, token, authenticateToken, email, city, main_address, secondary_address } }";
  } else if (admin === false) {
    query = "mutation retrieveGuestAccount($email: String!, $password: String!) { retrieveGuestAccount(email: $email, password: $password) { firstname, lastname, token, authenticateToken, email, city, main_address, secondary_address } }";
  }

  return query;
};

var registerQuery = "mutation makeGuestAccount($civility: String!, $firstname: String!, $lastname: String!, $phone: String!, $email: String!, $password: String!) { makeGuestAccount(email: $email, password: $password, civility: $civility, firstname: $firstname, lastname: $lastname, phone: $phone) \n    { firstname, lastname, token, email } }";

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__("4vsW");
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./source/components/redux-helpers/authentication-helper.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authenticateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logoutService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return registerService; });




var hostname = 'http://10.188.37.107';
function authenticateService(email, password, admin) {
  var authenticationQuery = retrieveAccount(admin);
  return external_node_fetch_default()(hostname + ':3000/v1/graphql-first-instance/BtL7NQwOt0R7psYw1Fyx', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      query: authenticationQuery,
      variables: {
        email: email,
        password: password
      }
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  });
}
function logoutService(admin) {
  external_js_cookie_default.a.remove('authentication-token');
  external_js_cookie_default.a.remove('authentication-user');
  admin ? router_default.a.push('/admin-account') : router_default.a.push('/');
}
function registerService(civility, firstname, lastname, email, password, phone) {
  return external_node_fetch_default()(hostname + ':3000/v1/graphql-first-instance/BtL7NQwOt0R7psYw1Fyx', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      query: registerQuery,
      variables: {
        civility: civility,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        phone: phone
      }
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  });
}

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

/***/ "WIwn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AdminNavbar */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_resources_admin_account_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("o9iy");
/* harmony import */ var _static_resources_admin_account_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_resources_admin_account_scss__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var AdminNavbar =
/*#__PURE__*/
function (_Component) {
  _inherits(AdminNavbar, _Component);

  function AdminNavbar(props) {
    _classCallCheck(this, AdminNavbar);

    return _possibleConstructorReturn(this, _getPrototypeOf(AdminNavbar).call(this, props));
  }

  _createClass(AdminNavbar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-fluid py-2 m-0 container-top-one " + this.props.className
      }));
    }
  }]);

  return AdminNavbar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

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

/***/ "Xxwp":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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




var hostname = 'http://10.188.37.107';
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

/***/ "s7eq":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ }),

/***/ "sLJp":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "sN95":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminSider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_resources_images_logo_fredokav3_2x_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Xxwp");
/* harmony import */ var _static_resources_images_logo_fredokav3_2x_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_resources_images_logo_fredokav3_2x_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_resources_admin_account_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("o9iy");
/* harmony import */ var _static_resources_admin_account_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_resources_admin_account_scss__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Sider = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Sider;
var AdminSider =
/*#__PURE__*/
function (_Component) {
  _inherits(AdminSider, _Component);

  function AdminSider(props) {
    _classCallCheck(this, AdminSider);

    return _possibleConstructorReturn(this, _getPrototypeOf(AdminSider).call(this, props));
  }

  _createClass(AdminSider, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Sider, {
        style: {
          height: '100vh',
          overflow: 'auto',
          position: 'fixed',
          left: 0,
          width: '140px'
        },
        collapsed: true,
        collapsedWidth: 60
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "logo application-admin-logo d-flex flex-row justify-content-center align-items-center py-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _static_resources_images_logo_fredokav3_2x_png__WEBPACK_IMPORTED_MODULE_3___default.a,
        className: "application-admin-logo"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
        theme: "dark",
        mode: "inline",
        defaultSelectedKeys: ['1'],
        className: "mt-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
        key: "1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/admin-dashboard"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "pie-chart",
        className: "admin-sider-icon"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "nav-text application-admin-nav-link-text"
      }, "Panneau de Contr\xF4le")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu, {
        key: "sub1",
        title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "nav-text application-admin-nav-link-text"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
          type: "code-sandbox",
          className: "admin-sider-icon"
        }), "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Produits"))
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
        key: "2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "barcode"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/admin-products"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "nav-text application-admin-nav-link-text"
      }, "Produits"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
        key: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "scan"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/admin-product-new"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "nav-text application-admin-nav-link-text"
      }, "Ajouter")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu, {
        key: "sub2",
        title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "nav-text application-admin-nav-link-text"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
          type: "box-plot",
          className: "admin-sider-icon"
        }), "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Commandes"))
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
        key: "4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "bars"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/admin-orders"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "nav-text application-admin-nav-link-text"
      }, "Commandes"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
        key: "5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "credit-card"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/admin-payments"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "nav-text application-admin-nav-link-text"
      }, "Paiements")))))));
    }
  }]);

  return AdminSider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

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

/***/ "ySQr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "@blueprintjs/core"
var core_ = __webpack_require__("ozu2");

// EXTERNAL MODULE: external "draft-js"
var external_draft_js_ = __webpack_require__("Hz3a");

// EXTERNAL MODULE: ./source/components/component-header-guest.js
var component_header_guest = __webpack_require__("6dKc");

// EXTERNAL MODULE: ./source/components/component-navbar-admin.js
var component_navbar_admin = __webpack_require__("WIwn");

// EXTERNAL MODULE: ./source/components/fragments-tools/admin-sider.js
var admin_sider = __webpack_require__("sN95");

// EXTERNAL MODULE: ./source/components/fragments-tools/admin-header.js
var admin_header = __webpack_require__("3NBp");

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__("sLJp");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-regular-svg-icons"
var free_regular_svg_icons_ = __webpack_require__("s7eq");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: ./source/components/redux-actions/product-action.js + 2 modules
var product_action = __webpack_require__("jGtb");

// CONCATENATED MODULE: ./source/components/component-add-perfume.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var component_add_perfume_SAddProductPerfume =
/*#__PURE__*/
function (_Component) {
  _inherits(SAddProductPerfume, _Component);

  function SAddProductPerfume(props) {
    var _this;

    _classCallCheck(this, SAddProductPerfume);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SAddProductPerfume).call(this, props));
    _this.state = {
      visible: true,
      name: '',
      description: ''
    };
    _this.onName = _this.onName.bind(_assertThisInitialized(_this));
    _this.onDescription = _this.onDescription.bind(_assertThisInitialized(_this));
    _this.onConfirm = _this.onConfirm.bind(_assertThisInitialized(_this));
    _this.onClose = _this.onClose.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SAddProductPerfume, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      fontawesome_svg_core_["library"].add(free_regular_svg_icons_["far"], free_regular_svg_icons_["faPaperPlane"]);
      fontawesome_svg_core_["library"].add(free_solid_svg_icons_["fas"], free_solid_svg_icons_["faEject"]);
    }
  }, {
    key: "onName",
    value: function onName(event) {
      this.setState({
        name: event.target.value
      });
    }
  }, {
    key: "onDescription",
    value: function onDescription(event) {
      this.setState({
        description: event.target.value
      });
    }
  }, {
    key: "onClose",
    value: function onClose() {
      var all = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.setState({
        visible: false
      });
      this.props.onClose();
    }
  }, {
    key: "onConfirm",
    value: function onConfirm() {
      var dispatch = this.props.dispatch;
      dispatch(Object(product_action["c" /* addProductPerfume */])(this.state.name, this.state.description, this.onClose));
      dispatch(Object(product_action["h" /* fetchAllProductPerfumes */])());
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_antd_["Drawer"], {
        width: 300,
        placement: "right",
        closable: false,
        onClose: this.props.onClose,
        visible: this.state.visible,
        className: "drawer-product-specifity"
      }, external_react_default.a.createElement("div", {
        className: "row mt-5"
      }, external_react_default.a.createElement("div", {
        className: "col-12"
      }, external_react_default.a.createElement(external_antd_["Input"], {
        prefix: external_react_default.a.createElement(external_antd_["Icon"], {
          type: "tags",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Nom du parfum.",
        className: "product-specifity-input",
        onChange: this.onName
      })), external_react_default.a.createElement("div", {
        className: "col-12"
      }, external_react_default.a.createElement(external_antd_["Input"], {
        prefix: external_react_default.a.createElement(external_antd_["Icon"], {
          type: "file-text",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Description du parfum.",
        className: "product-specifity-input mt-1",
        onChange: this.onDescription
      })), external_react_default.a.createElement("div", {
        className: "col-12 p-0"
      }, external_react_default.a.createElement("div", {
        className: "d-flex flex-row justify-content-space-between m-0 mt-2"
      }, external_react_default.a.createElement("div", {
        className: "col-6"
      }, external_react_default.a.createElement(external_antd_["Button"], {
        type: "danger",
        className: "button-drawer-fill",
        onClick: this.onClose
      }, external_react_default.a.createElement("span", {
        className: "remember-text"
      }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faEject"]
      }), "\xA0Annuler"))), external_react_default.a.createElement("div", {
        className: "col-6"
      }, external_react_default.a.createElement(external_antd_["Button"], {
        type: "primary",
        className: "button-drawer-fill",
        onClick: this.onConfirm
      }, external_react_default.a.createElement("span", {
        className: "remember-text"
      }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_regular_svg_icons_["faPaperPlane"]
      }), "\xA0Confirmer"))))))));
    }
  }]);

  return SAddProductPerfume;
}(external_react_["Component"]);

function mapStateToProps(state) {}

var connectReduxAddPerfume = Object(external_react_redux_["connect"])(mapStateToProps)(component_add_perfume_SAddProductPerfume);

// CONCATENATED MODULE: ./source/components/component-add-weight.js
function component_add_weight_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { component_add_weight_typeof = function _typeof(obj) { return typeof obj; }; } else { component_add_weight_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return component_add_weight_typeof(obj); }

function component_add_weight_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function component_add_weight_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function component_add_weight_createClass(Constructor, protoProps, staticProps) { if (protoProps) component_add_weight_defineProperties(Constructor.prototype, protoProps); if (staticProps) component_add_weight_defineProperties(Constructor, staticProps); return Constructor; }

function component_add_weight_possibleConstructorReturn(self, call) { if (call && (component_add_weight_typeof(call) === "object" || typeof call === "function")) { return call; } return component_add_weight_assertThisInitialized(self); }

function component_add_weight_getPrototypeOf(o) { component_add_weight_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return component_add_weight_getPrototypeOf(o); }

function component_add_weight_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function component_add_weight_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) component_add_weight_setPrototypeOf(subClass, superClass); }

function component_add_weight_setPrototypeOf(o, p) { component_add_weight_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return component_add_weight_setPrototypeOf(o, p); }










var component_add_weight_SAddProductWeight =
/*#__PURE__*/
function (_Component) {
  component_add_weight_inherits(SAddProductWeight, _Component);

  function SAddProductWeight(props) {
    var _this;

    component_add_weight_classCallCheck(this, SAddProductWeight);

    _this = component_add_weight_possibleConstructorReturn(this, component_add_weight_getPrototypeOf(SAddProductWeight).call(this, props));
    _this.state = {
      visible: true,
      name: '',
      value: 0
    };
    _this.onName = _this.onName.bind(component_add_weight_assertThisInitialized(_this));
    _this.onValue = _this.onValue.bind(component_add_weight_assertThisInitialized(_this));
    _this.onConfirm = _this.onConfirm.bind(component_add_weight_assertThisInitialized(_this));
    _this.onClose = _this.onClose.bind(component_add_weight_assertThisInitialized(_this));
    return _this;
  }

  component_add_weight_createClass(SAddProductWeight, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      fontawesome_svg_core_["library"].add(free_regular_svg_icons_["far"], free_regular_svg_icons_["faPaperPlane"]);
      fontawesome_svg_core_["library"].add(free_solid_svg_icons_["fas"], free_solid_svg_icons_["faEject"]);
    }
  }, {
    key: "onName",
    value: function onName(event) {
      this.setState({
        name: event.target.value
      });
    }
  }, {
    key: "onValue",
    value: function onValue(event) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "onClose",
    value: function onClose() {
      var all = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.setState({
        visible: false
      });
      this.props.onClose();
    }
  }, {
    key: "onConfirm",
    value: function onConfirm() {
      var dispatch = this.props.dispatch;
      dispatch(Object(product_action["d" /* addProductWeight */])(this.state.name, this.state.value, this.onClose));
      dispatch(Object(product_action["i" /* fetchAllProductWeights */])());
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_antd_["Drawer"], {
        width: 300,
        placement: "right",
        closable: false,
        onClose: this.props.onClose,
        visible: this.state.visible,
        className: "drawer-product-specifity"
      }, external_react_default.a.createElement("div", {
        className: "row mt-5"
      }, external_react_default.a.createElement("div", {
        className: "col-12"
      }, external_react_default.a.createElement(external_antd_["Input"], {
        prefix: external_react_default.a.createElement(external_antd_["Icon"], {
          type: "tags",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Nom du poids.",
        className: "product-specifity-input",
        onChange: this.onName
      })), external_react_default.a.createElement("div", {
        className: "col-12"
      }, external_react_default.a.createElement(external_antd_["Input"], {
        prefix: external_react_default.a.createElement(external_antd_["Icon"], {
          type: "file-text",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Valeur du poids.",
        className: "product-specifity-input mt-1",
        onChange: this.onValue
      })), external_react_default.a.createElement("div", {
        className: "col-12 p-0"
      }, external_react_default.a.createElement("div", {
        className: "d-flex flex-row justify-content-space-between m-0 mt-2"
      }, external_react_default.a.createElement("div", {
        className: "col-6"
      }, external_react_default.a.createElement(external_antd_["Button"], {
        type: "danger",
        className: "button-drawer-fill",
        onClick: this.onClose
      }, external_react_default.a.createElement("span", {
        className: "remember-text"
      }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faEject"]
      }), "\xA0Annuler"))), external_react_default.a.createElement("div", {
        className: "col-6"
      }, external_react_default.a.createElement(external_antd_["Button"], {
        type: "primary",
        className: "button-drawer-fill",
        onClick: this.onConfirm
      }, external_react_default.a.createElement("span", {
        className: "remember-text"
      }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_regular_svg_icons_["faPaperPlane"]
      }), "\xA0Confirmer"))))))));
    }
  }]);

  return SAddProductWeight;
}(external_react_["Component"]);

function component_add_weight_mapStateToProps(state) {}

var connectReduxAddWeight = Object(external_react_redux_["connect"])(component_add_weight_mapStateToProps)(component_add_weight_SAddProductWeight);

// CONCATENATED MODULE: ./source/components/component-add-category.js
function component_add_category_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { component_add_category_typeof = function _typeof(obj) { return typeof obj; }; } else { component_add_category_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return component_add_category_typeof(obj); }

function component_add_category_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function component_add_category_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function component_add_category_createClass(Constructor, protoProps, staticProps) { if (protoProps) component_add_category_defineProperties(Constructor.prototype, protoProps); if (staticProps) component_add_category_defineProperties(Constructor, staticProps); return Constructor; }

function component_add_category_possibleConstructorReturn(self, call) { if (call && (component_add_category_typeof(call) === "object" || typeof call === "function")) { return call; } return component_add_category_assertThisInitialized(self); }

function component_add_category_getPrototypeOf(o) { component_add_category_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return component_add_category_getPrototypeOf(o); }

function component_add_category_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function component_add_category_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) component_add_category_setPrototypeOf(subClass, superClass); }

function component_add_category_setPrototypeOf(o, p) { component_add_category_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return component_add_category_setPrototypeOf(o, p); }










var component_add_category_SAddProductCategory =
/*#__PURE__*/
function (_Component) {
  component_add_category_inherits(SAddProductCategory, _Component);

  function SAddProductCategory(props) {
    var _this;

    component_add_category_classCallCheck(this, SAddProductCategory);

    _this = component_add_category_possibleConstructorReturn(this, component_add_category_getPrototypeOf(SAddProductCategory).call(this, props));
    _this.state = {
      visible: true,
      name: '',
      description: '',
      categories: null,
      parent: 0
    };
    _this.onName = _this.onName.bind(component_add_category_assertThisInitialized(_this));
    _this.onDescription = _this.onDescription.bind(component_add_category_assertThisInitialized(_this));
    _this.onConfirm = _this.onConfirm.bind(component_add_category_assertThisInitialized(_this));
    _this.onClose = _this.onClose.bind(component_add_category_assertThisInitialized(_this));
    _this.onParent = _this.onParent.bind(component_add_category_assertThisInitialized(_this));
    return _this;
  }

  component_add_category_createClass(SAddProductCategory, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      fontawesome_svg_core_["library"].add(free_regular_svg_icons_["far"], free_regular_svg_icons_["faPaperPlane"]);
      fontawesome_svg_core_["library"].add(free_solid_svg_icons_["fas"], free_solid_svg_icons_["faEject"]);

      if (this.props.categories && typeof this.props.categories === "string") {
        this.setState({
          categories: typeof this.props.categories === "string" && this.props.categories.length > 2 ? JSON.parse(this.props.categories) : this.props.categories
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(previous) {
      if (previous.categories !== this.props.categories) {
        this.setState({
          categories: typeof this.props.categories === "string" && this.props.categories.length > 2 ? JSON.parse(this.props.categories) : this.props.categories
        });
      }
    }
  }, {
    key: "onName",
    value: function onName(event) {
      this.setState({
        name: event.target.value
      });
    }
  }, {
    key: "onDescription",
    value: function onDescription(event) {
      this.setState({
        description: event.target.value
      });
    }
  }, {
    key: "onParent",
    value: function onParent(event) {
      this.setState({
        parent: parseInt(event)
      });
    }
  }, {
    key: "onClose",
    value: function onClose() {
      var all = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.setState({
        visible: false
      });
      this.props.onClose();
    }
  }, {
    key: "onConfirm",
    value: function onConfirm() {
      var dispatch = this.props.dispatch;
      dispatch(Object(product_action["b" /* addProductCategory */])(this.state.name, this.state.description, this.state.parent, this.onClose));
      dispatch(Object(product_action["g" /* fetchAllProductCategories */])());
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_antd_["Drawer"], {
        width: 300,
        placement: "right",
        closable: false,
        onClose: this.props.onClose,
        visible: this.state.visible,
        className: "drawer-product-specifity"
      }, external_react_default.a.createElement("div", {
        className: "row mt-5"
      }, external_react_default.a.createElement("div", {
        className: "col-12"
      }, external_react_default.a.createElement(external_antd_["Input"], {
        prefix: external_react_default.a.createElement(external_antd_["Icon"], {
          type: "tags",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Nom de la cat\xE9gorie.",
        className: "product-specifity-input",
        onChange: this.onName
      })), external_react_default.a.createElement("div", {
        className: "col-12"
      }, external_react_default.a.createElement(external_antd_["Input"], {
        prefix: external_react_default.a.createElement(external_antd_["Icon"], {
          type: "file-text",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Description de la cat\xE9gorie.",
        className: "product-specifity-input mt-1",
        onChange: this.onDescription
      })), external_react_default.a.createElement("div", {
        className: "col-12 mt-1"
      }, external_react_default.a.createElement(external_antd_["Select"], {
        defaultValue: external_react_default.a.createElement("span", {
          className: "category-select-option"
        }, "Aucun Parent"),
        className: "category-select-input",
        onChange: this.onParent
      }, external_react_default.a.createElement(external_antd_["Select"].Option, {
        value: 0,
        className: "cart-select-input"
      }, external_react_default.a.createElement("span", {
        className: "category-select-option"
      }, "Aucun Parent")), this.state.categories && Array.isArray(this.state.categories) && this.state.categories.map(function (item) {
        if (item.parent === 0) {
          return external_react_default.a.createElement(external_antd_["Select"].Option, {
            value: item.id,
            className: "category-select-input",
            key: item.id
          }, external_react_default.a.createElement("span", {
            className: "cart-select-option"
          }, item.name));
        }
      }))), external_react_default.a.createElement("div", {
        className: "col-12 p-0"
      }, external_react_default.a.createElement("div", {
        className: "d-flex flex-row justify-content-space-between m-0 mt-2"
      }, external_react_default.a.createElement("div", {
        className: "col-6"
      }, external_react_default.a.createElement(external_antd_["Button"], {
        type: "danger",
        className: "button-drawer-fill",
        onClick: this.onClose
      }, external_react_default.a.createElement("span", {
        className: "remember-text"
      }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faEject"]
      }), "\xA0Annuler"))), external_react_default.a.createElement("div", {
        className: "col-6"
      }, external_react_default.a.createElement(external_antd_["Button"], {
        type: "primary",
        className: "button-drawer-fill",
        onClick: this.onConfirm
      }, external_react_default.a.createElement("span", {
        className: "remember-text"
      }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_regular_svg_icons_["faPaperPlane"]
      }), "\xA0Confirmer"))))))));
    }
  }]);

  return SAddProductCategory;
}(external_react_["Component"]);

function component_add_category_mapStateToProps(state) {
  var categories = state.adminReducer.categories;
  return {
    categories: categories
  };
}

var connectReduxAddCategory = Object(external_react_redux_["connect"])(component_add_category_mapStateToProps)(component_add_category_SAddProductCategory);

// EXTERNAL MODULE: ./static/resources/admin-account.scss
var admin_account = __webpack_require__("o9iy");

// CONCATENATED MODULE: ./pages/admin-product-new.js
function admin_product_new_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { admin_product_new_typeof = function _typeof(obj) { return typeof obj; }; } else { admin_product_new_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return admin_product_new_typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function admin_product_new_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function admin_product_new_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function admin_product_new_createClass(Constructor, protoProps, staticProps) { if (protoProps) admin_product_new_defineProperties(Constructor.prototype, protoProps); if (staticProps) admin_product_new_defineProperties(Constructor, staticProps); return Constructor; }

function admin_product_new_possibleConstructorReturn(self, call) { if (call && (admin_product_new_typeof(call) === "object" || typeof call === "function")) { return call; } return admin_product_new_assertThisInitialized(self); }

function admin_product_new_getPrototypeOf(o) { admin_product_new_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return admin_product_new_getPrototypeOf(o); }

function admin_product_new_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function admin_product_new_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) admin_product_new_setPrototypeOf(subClass, superClass); }

function admin_product_new_setPrototypeOf(o, p) { admin_product_new_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return admin_product_new_setPrototypeOf(o, p); }
















var Content = external_antd_["Layout"].Content,
    Footer = external_antd_["Layout"].Footer;

var admin_product_new_SAdminProductNew =
/*#__PURE__*/
function (_Component) {
  admin_product_new_inherits(SAdminProductNew, _Component);

  function SAdminProductNew(props) {
    var _this;

    admin_product_new_classCallCheck(this, SAdminProductNew);

    _this = admin_product_new_possibleConstructorReturn(this, admin_product_new_getPrototypeOf(SAdminProductNew).call(this, props));
    _this.state = {
      user: null,
      categoryVisible: false,
      perfumeVisible: false,
      weightVisible: false,
      selectedPrices: [],
      uploading: false,
      categories: null,
      perfumes: null,
      weights: null,
      selectedCategory: 1,
      selectedPerfumes: [],
      selectedWeights: [],
      productImage: '',
      productTitle: '',
      productProvider: '',
      productQuantity: 0,
      productDescription: '',
      editorState: external_draft_js_["EditorState"].createEmpty(),
      editorShow: false,
      productDescriptionTitle: ''
    };
    _this.onCategory = _this.onCategory.bind(admin_product_new_assertThisInitialized(_this));
    _this.onPerfume = _this.onPerfume.bind(admin_product_new_assertThisInitialized(_this));
    _this.onWeight = _this.onWeight.bind(admin_product_new_assertThisInitialized(_this));
    _this.onProductDescriptionTitle = _this.onProductDescriptionTitle.bind(admin_product_new_assertThisInitialized(_this));
    _this.onProductTitle = _this.onProductTitle.bind(admin_product_new_assertThisInitialized(_this));
    _this.onCloseCategory = _this.onCloseCategory.bind(admin_product_new_assertThisInitialized(_this));
    _this.onCloseWeight = _this.onCloseWeight.bind(admin_product_new_assertThisInitialized(_this));
    _this.onClosePerfume = _this.onClosePerfume.bind(admin_product_new_assertThisInitialized(_this));
    _this.onProductImage = _this.onProductImage.bind(admin_product_new_assertThisInitialized(_this));
    _this.onProductQuantity = _this.onProductQuantity.bind(admin_product_new_assertThisInitialized(_this));
    _this.onSelectCategory = _this.onSelectCategory.bind(admin_product_new_assertThisInitialized(_this));
    _this.onSelectPerfume = _this.onSelectPerfume.bind(admin_product_new_assertThisInitialized(_this));
    _this.onInputPrice = _this.onInputPrice.bind(admin_product_new_assertThisInitialized(_this));
    _this.onProductDescriptionStrikeThrough = _this.onProductDescriptionStrikeThrough.bind(admin_product_new_assertThisInitialized(_this));
    _this.onSelectWeight = _this.onSelectWeight.bind(admin_product_new_assertThisInitialized(_this));
    _this.onProductDescription = _this.onProductDescription.bind(admin_product_new_assertThisInitialized(_this));
    _this.onProductDescriptionUnderline = _this.onProductDescriptionUnderline.bind(admin_product_new_assertThisInitialized(_this));
    _this.onConfirmProduct = _this.onConfirmProduct.bind(admin_product_new_assertThisInitialized(_this));
    _this.onProductDescriptionBold = _this.onProductDescriptionBold.bind(admin_product_new_assertThisInitialized(_this));
    _this.onProductDescriptionItalic = _this.onProductDescriptionItalic.bind(admin_product_new_assertThisInitialized(_this));
    _this.onProductDescriptionCode = _this.onProductDescriptionCode.bind(admin_product_new_assertThisInitialized(_this));
    _this.onProductProvider = _this.onProductProvider.bind(admin_product_new_assertThisInitialized(_this));
    return _this;
  }

  admin_product_new_createClass(SAdminProductNew, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;
      this.setState({
        editorShow: true
      });
      dispatch(Object(product_action["g" /* fetchAllProductCategories */])());
      dispatch(Object(product_action["h" /* fetchAllProductPerfumes */])());
      dispatch(Object(product_action["i" /* fetchAllProductWeights */])());

      if (this.props.user && typeof this.props.user === "string") {
        this.setState({
          user: JSON.parse(this.props.user)
        });
      }

      if (this.props.weights && typeof this.props.weights === "string") {
        this.setState({
          weights: typeof this.props.weights === "string" && this.props.weights.length > 2 ? JSON.parse(this.props.weights) : this.props.weights
        });
      }

      if (this.props.perfumes && typeof this.props.perfumes === "string") {
        this.setState({
          perfumes: typeof this.props.perfumes === "string" && this.props.perfumes.length > 2 ? JSON.parse(this.props.perfumes) : this.props.perfumes
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

      if (previous.categories !== this.props.categories) {
        this.setState({
          categories: typeof this.props.categories === "string" && this.props.categories.length > 2 ? JSON.parse(this.props.categories) : this.props.categories
        });
      }

      if (previous.weights !== this.props.weights) {
        this.setState({
          weights: typeof this.props.weights === "string" && this.props.weights.length > 2 ? JSON.parse(this.props.weights) : this.props.weights
        });
      }

      if (previous.perfumes !== this.props.perfumes) {
        this.setState({
          perfumes: typeof this.props.perfumes === "string" && this.props.perfumes.length > 2 ? JSON.parse(this.props.perfumes) : this.props.perfumes
        });
      }
    }
  }, {
    key: "onCategory",
    value: function onCategory() {
      this.setState({
        categoryVisible: true
      });
    }
  }, {
    key: "onPerfume",
    value: function onPerfume() {
      this.setState({
        perfumeVisible: true
      });
    }
  }, {
    key: "onWeight",
    value: function onWeight() {
      this.setState({
        weightVisible: true
      });
    }
  }, {
    key: "onCloseCategory",
    value: function onCloseCategory() {
      this.setState({
        categoryVisible: false
      });
      this.forceUpdate();
    }
  }, {
    key: "onClosePerfume",
    value: function onClosePerfume() {
      this.setState({
        perfumeVisible: false
      });
      this.forceUpdate();
    }
  }, {
    key: "onCloseWeight",
    value: function onCloseWeight() {
      this.setState({
        weightVisible: false
      });
      this.forceUpdate();
    }
  }, {
    key: "onSelectCategory",
    value: function onSelectCategory(value) {
      this.setState({
        selectedCategory: parseInt(value)
      });
    }
  }, {
    key: "onSelectPerfume",
    value: function onSelectPerfume(event) {
      if ((this.state.selectedPerfumes === null || this.state.selectedPerfumes.indexOf(event.target.id) === -1) && event.target.checked) {
        this.setState({
          selectedPerfumes: [].concat(_toConsumableArray(this.state.selectedPerfumes), [event.target.id])
        });
      } else if (this.state.selectedPerfumes !== null && this.state.selectedPerfumes.indexOf(event.target.id) !== -1 && !event.target.checked) {
        this.state.selectedPerfumes.splice(this.state.selectedPerfumes.indexOf(event.target.id), 1);
      }
    }
  }, {
    key: "onSelectWeight",
    value: function onSelectWeight(event) {
      if (this.state.selectedWeights.indexOf(event.target.id) === -1 && event.target.checked) {
        this.setState({
          selectedWeights: [].concat(_toConsumableArray(this.state.selectedWeights), [event.target.id])
        });
      } else if (this.state.selectedWeights.indexOf(event.target.id) !== -1 && !event.target.checked) {
        this.state.selectedWeights.splice(this.state.selectedWeights.indexOf(event.target.id), 1);
      }
    }
  }, {
    key: "onInputPrice",
    value: function onInputPrice(event) {
      if (this.state.selectedPrices.indexOf(event.target.id) === -1) {
        var id = event.target.id;
        var prices = {
          id: id,
          price: parseFloat(event.target.value)
        };
        this.setState({
          selectedPrices: [].concat(_toConsumableArray(this.state.selectedPrices.filter(function (element) {
            return element.id != id;
          })), [prices])
        });
      }
    }
  }, {
    key: "onProductTitle",
    value: function onProductTitle(event) {
      this.setState({
        productTitle: event.target.value
      });
    }
  }, {
    key: "onProductProvider",
    value: function onProductProvider(event) {
      this.setState({
        productProvider: event.target.value
      });
    }
  }, {
    key: "onProductQuantity",
    value: function onProductQuantity(event) {
      this.setState({
        productQuantity: event.target.value
      });
    }
  }, {
    key: "onProductDescription",
    value: function onProductDescription(editorState) {
      this.setState({
        editorState: editorState
      });
    }
  }, {
    key: "onProductDescriptionTitle",
    value: function onProductDescriptionTitle(event) {
      this.setState({
        productDescriptionTitle: event.target.value
      });
    }
  }, {
    key: "onProductImage",
    value: function onProductImage(event) {
      event.preventDefault();
      var image = event.currentTarget.files[0];
      this.setState({
        uploading: true
      });
      var reader = new FileReader();
      var scope = this;

      reader.onload = function () {
        scope.setState({
          uploading: false,
          productImage: reader.result
        });
      };

      reader.readAsDataURL(image);
    }
  }, {
    key: "onProductDescriptionBold",
    value: function onProductDescriptionBold() {
      this.onProductDescription(external_draft_js_["RichUtils"].toggleInlineStyle(this.state.editorState, 'BOLD'));
    }
  }, {
    key: "onProductDescriptionItalic",
    value: function onProductDescriptionItalic() {
      this.onProductDescription(external_draft_js_["RichUtils"].toggleInlineStyle(this.state.editorState, 'ITALIC'));
    }
  }, {
    key: "onProductDescriptionUnderline",
    value: function onProductDescriptionUnderline() {
      this.onProductDescription(external_draft_js_["RichUtils"].toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
    }
  }, {
    key: "onProductDescriptionCode",
    value: function onProductDescriptionCode() {
      this.onProductDescription(external_draft_js_["RichUtils"].toggleCode(this.state.editorState));
    }
  }, {
    key: "onProductDescriptionStrikeThrough",
    value: function onProductDescriptionStrikeThrough() {
      this.onProductDescription(external_draft_js_["RichUtils"].toggleInlineStyle(this.state.editorState, 'STRIKETHROUGH'));
    }
  }, {
    key: "handleKeyCommand",
    value: function handleKeyCommand(command) {
      var newState = external_draft_js_["RichUtils"].handleKeyCommand(this.state.editorState, command);

      if (newState) {
        this.onProductDescription(newState);
        return "handled";
      }

      return "not-handled";
    }
  }, {
    key: "onConfirmProduct",
    value: function onConfirmProduct() {
      var dispatch = this.props.dispatch;
      var details = {
        perfumes: this.state.selectedPerfumes,
        weights: this.state.selectedPrices,
        category: this.state.selectedCategory
      };
      dispatch(Object(product_action["a" /* addProduct */])(this.state.productTitle, this.state.productQuantity, this.state.productProvider, this.state.productDescriptionTitle, this.state.productDescription, this.state.productImage, details));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _React$createElement,
          _React$createElement2,
          _React$createElement3;

      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(component_header_guest["a" /* GuestHeader */], {
        title: this.state.user !== null ? this.state.user.firstname + ' ' + this.state.user.lastname : 'Muscle Feed | Administrateur',
        description: "Boutique en ligne de compl\xE9ments alimentaires et de prot\xE9ines pour la musculation \xE0 prix cass\xE9. Le meilleur de la construction musculaire : proteines, gainer, bcaa, bruleur de graisses, booster."
      }), external_react_default.a.createElement(external_antd_["Layout"], null, external_react_default.a.createElement(admin_sider["a" /* AdminSider */], null), external_react_default.a.createElement(external_antd_["Layout"], null, external_react_default.a.createElement(admin_header["a" /* AdminHeader */], {
        user: JSON.stringify(this.state.user)
      }), external_react_default.a.createElement(Content, {
        style: {
          backgroundColor: '#ffffff'
        },
        className: "product-new-global"
      }, external_react_default.a.createElement("div", {
        className: "d-flex flex-row justify-content-center row-product-specifity top-specifity mt-2"
      }, external_react_default.a.createElement(external_antd_["Button"].Group, null, external_react_default.a.createElement(external_antd_["Button"], {
        type: "primary",
        onClick: this.onCategory
      }, external_react_default.a.createElement(external_antd_["Icon"], {
        type: "tags"
      }), "\xA0", external_react_default.a.createElement("span", {
        className: "button-text"
      }, "Cat\xE9gorie")), external_react_default.a.createElement(external_antd_["Button"], {
        type: "primary",
        onClick: this.onPerfume
      }, external_react_default.a.createElement(external_antd_["Icon"], {
        type: "hourglass"
      }), "\xA0", external_react_default.a.createElement("span", {
        className: "button-text"
      }, "Parfums")), external_react_default.a.createElement(external_antd_["Button"], {
        type: "primary",
        onClick: this.onWeight
      }, external_react_default.a.createElement(external_antd_["Icon"], {
        type: "hdd"
      }), "\xA0", external_react_default.a.createElement("span", {
        className: "button-text"
      }, "Poids")))), external_react_default.a.createElement("div", {
        className: "d-flex flex-row justify-content-center row-product-specifities rows-two mt-2"
      }, external_react_default.a.createElement("div", {
        className: "col-2"
      }, external_react_default.a.createElement(core_["Card"], {
        interactive: true,
        elevation: core_["Elevation"].TWO,
        className: "mt-0 bp3-dark p-2"
      }, external_react_default.a.createElement("h5", {
        className: "box-title-white"
      }, "Parfums"), this.state.perfumes && typeof this.state.perfumes === "string" && this.state.perfumes.length <= 2 ? external_react_default.a.createElement(external_antd_["Empty"], {
        image: external_antd_["Empty"].PRESENTED_IMAGE_SIMPLE,
        description: external_react_default.a.createElement("span", {
          className: "box-notfound-description"
        }, "Aucun parfum"),
        className: "box-notfound-error mt-2"
      }) : this.state.perfumes && Array.isArray(this.state.perfumes) && this.state.perfumes.map(function (item) {
        return external_react_default.a.createElement(core_["Checkbox"], {
          key: item.id,
          className: "checkbox-title",
          onChange: _this2.onSelectPerfume,
          id: item.id
        }, item.name);
      })), external_react_default.a.createElement(core_["Card"], {
        interactive: true,
        elevation: core_["Elevation"].TWO,
        className: "mt-2 bp3-dark p-2"
      }, external_react_default.a.createElement("h5", {
        className: "box-title-white"
      }, "Poids & Quantit\xE9s."), external_react_default.a.createElement("div", {
        "class": "d-flex flex-column"
      }, this.state.weights && typeof this.state.weights === "string" && this.state.weights.length <= 2 ? external_react_default.a.createElement(external_antd_["Empty"], {
        image: external_antd_["Empty"].PRESENTED_IMAGE_SIMPLE,
        description: external_react_default.a.createElement("span", {
          className: "box-notfound-description"
        }, "Aucune poids"),
        className: "box-notfound-error mt-2"
      }) : this.state.weights && Array.isArray(this.state.weights) && this.state.weights.map(function (item) {
        return external_react_default.a.createElement("div", {
          className: "row p-0 m-0 mt-1"
        }, external_react_default.a.createElement("div", {
          className: "col-6 p-0 m-0"
        }, external_react_default.a.createElement(core_["Checkbox"], {
          onChange: _this2.onSelectWeight,
          id: item.id,
          className: "checkbox-title"
        }, item.name)), external_react_default.a.createElement("div", {
          className: "col-6 p-0 m-0"
        }, external_react_default.a.createElement(core_["InputGroup"], {
          ref: item.id,
          id: item.id,
          className: item.id + "-price",
          leftIcon: external_react_default.a.createElement(external_antd_["Icon"], {
            icon: "dollar",
            iconSize: 12
          }),
          placeholder: "Prix",
          type: "number",
          small: true,
          onChange: _this2.onInputPrice
        })));
      })))), external_react_default.a.createElement("div", {
        className: "col-10"
      }, external_react_default.a.createElement(core_["Card"], {
        interactive: true,
        elevation: core_["Elevation"].TWO,
        className: " bp3-dark"
      }, external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement("div", {
        className: "row d-flex flex-row justify-content-center align-items-center"
      }, external_react_default.a.createElement("div", {
        className: "col-4"
      }, external_react_default.a.createElement("div", {
        className: "product-image-preview d-flex flex-column justify-content-center align-items-center"
      }, external_react_default.a.createElement(external_antd_["Icon"], {
        type: this.state.uploading ? "loading" : "cloud-upload",
        className: "product-image-upload-icon",
        iconSize: 22
      }), external_react_default.a.createElement("input", {
        type: "file",
        name: "product-image-file",
        className: "product-image-file-input",
        onChange: this.onProductImage
      }))), external_react_default.a.createElement("div", {
        className: "col-4"
      }, external_react_default.a.createElement(core_["InputGroup"], {
        placeholder: "Nom du produit",
        className: "admin-input",
        onChange: this.onProductTitle
      }), external_react_default.a.createElement(core_["InputGroup"], {
        placeholder: "Titre de description",
        className: "admin-input mt-2",
        onChange: this.onProductDescriptionTitle
      }), external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-6"
      }, external_react_default.a.createElement(core_["InputGroup"], {
        type: "number",
        placeholder: "Quantit\xE9 du produit",
        className: "mt-2 admin-input",
        onChange: this.onProductQuantity
      })), external_react_default.a.createElement("div", {
        className: "col-6"
      }, external_react_default.a.createElement(core_["InputGroup"], {
        placeholder: "Fournisseur du produit",
        className: "mt-2 admin-input",
        onChange: this.onProductProvider
      }))), external_react_default.a.createElement(core_["Button"], {
        type: "primary",
        className: "admin-input mt-2",
        onClick: this.onConfirmProduct,
        text: external_react_default.a.createElement("span", {
          className: "admin-input"
        }, "Confirmer"),
        fill: true
      })), external_react_default.a.createElement("div", {
        className: "col-4"
      }, external_react_default.a.createElement(external_antd_["Select"], {
        onSelect: this.onSelectCategory,
        defaultValue: "1"
      }, this.state.categories && Array.isArray(this.state.categories) && this.state.categories.map(function (item) {
        if (item.parent === 0) {
          return external_react_default.a.createElement(external_antd_["OptGroup"], {
            label: item.name,
            key: item.id
          }, item.sub.length > 2 && item.sub.map(function (sub) {
            return external_react_default.a.createElement(external_antd_["Select"].Option, {
              value: sub.id,
              key: sub.id
            }, sub.name);
          }));
        }
      })))))), external_react_default.a.createElement("div", {
        className: "d-flex flex-column justify-content-center align-items-center mt-1"
      }, external_react_default.a.createElement("div", {
        className: "col-12 d-flex flex-column editor-description justify-content-center align-items-center mt-2 p-0"
      }, external_react_default.a.createElement(core_["Card"], {
        interactive: false,
        elevation: core_["Elevation"].ONE,
        className: "py-1 editor-container m-0"
      }, external_react_default.a.createElement("div", {
        className: "d-flex flex-row justify-content-center align-items-center"
      }, external_react_default.a.createElement(core_["ButtonGroup"], {
        className: "buttons-editor"
      }, external_react_default.a.createElement(core_["Button"], {
        icon: "italic",
        text: external_react_default.a.createElement("span", (_React$createElement = {
          className: "admin-input"
        }, _defineProperty(_React$createElement, "className", "focus-disable"), _defineProperty(_React$createElement, "onClick", this.onProductDescriptionItalic), _React$createElement), "Italique")
      }), external_react_default.a.createElement(core_["Button"], {
        icon: "bold",
        text: external_react_default.a.createElement("span", (_React$createElement2 = {
          className: "admin-input"
        }, _defineProperty(_React$createElement2, "className", "focus-disable"), _defineProperty(_React$createElement2, "onClick", this.onProductDescriptionBold), _React$createElement2), "Gras")
      }), external_react_default.a.createElement(core_["Button"], {
        icon: "underline",
        text: external_react_default.a.createElement("span", (_React$createElement3 = {
          className: "admin-input"
        }, _defineProperty(_React$createElement3, "className", "focus-disable"), _defineProperty(_React$createElement3, "onClick", this.onProductDescriptionUnderline), _React$createElement3), "Souligner")
      }), external_react_default.a.createElement(core_["Button"], {
        icon: "code",
        text: external_react_default.a.createElement("span", {
          className: "admin-input"
        }),
        className: "focus-disable",
        onClick: this.onProductDescriptionCode
      }, "Code"), external_react_default.a.createElement(core_["Button"], {
        icon: "strikethrough",
        text: external_react_default.a.createElement("span", {
          className: "admin-input"
        }),
        className: "focus-disable",
        onClick: this.onProductDescriptionStrikeThrough
      }, "Surligner"))), this.state.editorShow ? external_react_default.a.createElement(external_draft_js_["Editor"], {
        editorState: this.state.editorState,
        onChange: this.onProductDescription,
        handleKeyCommand: this.onProductKeyCommand
      }) : null))))))), this.state.categoryVisible && external_react_default.a.createElement(connectReduxAddCategory, {
        onClose: this.onCloseCategory
      }), this.state.perfumeVisible && external_react_default.a.createElement(connectReduxAddPerfume, {
        onClose: this.onClosePerfume
      }), this.state.weightVisible && external_react_default.a.createElement(connectReduxAddWeight, {
        onClose: this.onCloseWeight
      })));
    }
  }]);

  return SAdminProductNew;
}(external_react_["Component"]);

function admin_product_new_mapStateToProps(state) {
  var _state$authentication = state.authenticationReducer,
      user = _state$authentication.user,
      logged = _state$authentication.logged;
  var _state$adminReducer = state.adminReducer,
      weights = _state$adminReducer.weights,
      perfumes = _state$adminReducer.perfumes,
      categories = _state$adminReducer.categories;
  return {
    user: user,
    logged: logged,
    weights: weights,
    perfumes: perfumes,
    categories: categories
  };
}

var connectReduxAdminProductNew = Object(external_react_redux_["connect"])(admin_product_new_mapStateToProps)(admin_product_new_SAdminProductNew);
/* harmony default export */ var admin_product_new = __webpack_exports__["default"] = (connectReduxAdminProductNew);

/***/ })

/******/ });