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
/* harmony import */ var _redux_helpers_authentication_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Shr3");
/* harmony import */ var _static_resources_admin_account_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("o9iy");
/* harmony import */ var _static_resources_admin_account_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_resources_admin_account_scss__WEBPACK_IMPORTED_MODULE_3__);
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
          Object(_redux_helpers_authentication_helper__WEBPACK_IMPORTED_MODULE_2__[/* logoutService */ "b"])(true);
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "admin-information-first"
      }, this.state.user && this.state.user.firstname + ' ' + this.state.user.lastname), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "danger",
        onClick: this.onLogOut,
        shape: "circle",
        className: "ml-2 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "poweroff",
        className: "button-icon-header"
      })))));
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
        type: "image/x-icon",
        href: "/static/favicon.ico"
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

/***/ "O2+R":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-fredokav2@2x-b14fa0c4d03cb9f24ca41e0084c27e0a.png";

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
    query = "mutation retrieveGuestAccount($email: String!, $password: String)! { retrieveGuestAccount(email: $email, password: $password) { firstname, lastname, token, authenticateToken, email, city, main_address, secondary_address } }";
  }

  return query;
};


// CONCATENATED MODULE: ./source/components/redux-helpers/authentication-helper.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authenticateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logoutService; });



var hostname = 'http://10.188.109.85';
function authenticateService(email, password, admin) {
  var authenticationQuery = retrieveAccount(admin);
  return fetch(hostname + ':3000/v1/graphql-account', {
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

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "o9iy":
/***/ (function(module, exports) {



/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

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
/* harmony import */ var _static_resources_images_logo_fredokav2_2x_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("O2+R");
/* harmony import */ var _static_resources_images_logo_fredokav2_2x_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_resources_images_logo_fredokav2_2x_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_resources_images_logo_fredokav3_2x_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Xxwp");
/* harmony import */ var _static_resources_images_logo_fredokav3_2x_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_resources_images_logo_fredokav3_2x_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_resources_admin_account_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("o9iy");
/* harmony import */ var _static_resources_admin_account_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_resources_admin_account_scss__WEBPACK_IMPORTED_MODULE_5__);
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
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "logo application-admin-logo d-flex flex-row justify-content-center py-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _static_resources_images_logo_fredokav2_2x_png__WEBPACK_IMPORTED_MODULE_3___default.a,
        className: "application-admin-logo-img"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
        theme: "dark",
        mode: "inline",
        defaultSelectedKeys: ['1'],
        className: "mt-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
        key: "1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "pie-chart"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/admin-dashboard"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "nav-text application-admin-nav-link-text"
      }, "Panneau de Contr\xF4le"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu, {
        key: "sub1",
        title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "nav-text application-admin-nav-link-text"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
          type: "code-sandbox"
        }), "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Produits"))
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
        key: "2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "book"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/admin-products"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "nav-text application-admin-nav-link-text"
      }, "Liste Produits"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
        key: "3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "file"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/admin-product-new"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "nav-text application-admin-nav-link-text"
      }, "Ajouter Produit")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu, {
        key: "sub2",
        title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "nav-text application-admin-nav-link-text"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
          type: "box-plot"
        }), "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Commandes"))
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
        key: "4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "book"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/admin-orders"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "nav-text application-admin-nav-link-text"
      }, "Liste Commandes"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _source_components_component_header_guest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6dKc");
/* harmony import */ var _source_components_component_navbar_admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("WIwn");
/* harmony import */ var _source_components_fragments_tools_admin_sider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("sN95");
/* harmony import */ var _source_components_fragments_tools_admin_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("3NBp");
/* harmony import */ var _static_resources_admin_account_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("o9iy");
/* harmony import */ var _static_resources_admin_account_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_resources_admin_account_scss__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var TabPane = antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"].TabPane;
var Content = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Content,
    Footer = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Footer;

var SAdminProductNew =
/*#__PURE__*/
function (_Component) {
  _inherits(SAdminProductNew, _Component);

  function SAdminProductNew(props) {
    var _this;

    _classCallCheck(this, SAdminProductNew);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SAdminProductNew).call(this, props));
    _this.state = {
      user: null
    };
    return _this;
  }

  _createClass(SAdminProductNew, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props && typeof this.props.user === "string") {
        this.setState({
          user: JSON.parse(this.props.user)
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
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_source_components_component_header_guest__WEBPACK_IMPORTED_MODULE_3__[/* GuestHeader */ "a"], {
        title: this.state.user !== null ? this.state.user.firstname + ' ' + this.state.user.lastname : 'Muscle Feed | Administrateur',
        description: "Boutique en ligne de compl\xE9ments alimentaires et de prot\xE9ines pour la musculation \xE0 prix cass\xE9. Le meilleur de la construction musculaire : proteines, gainer, bcaa, bruleur de graisses, booster."
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_source_components_fragments_tools_admin_sider__WEBPACK_IMPORTED_MODULE_5__[/* AdminSider */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_source_components_fragments_tools_admin_header__WEBPACK_IMPORTED_MODULE_6__[/* AdminHeader */ "a"], {
        user: JSON.stringify(this.state.user)
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
        style: {
          backgroundColor: '#ffffff'
        },
        className: "product-new-global"
      }))));
    }
  }]);

  return SAdminProductNew;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(state) {
  var _state$authentication = state.authenticationReducer,
      user = _state$authentication.user,
      logged = _state$authentication.logged;
  return {
    user: user,
    logged: logged
  };
}

var connectReduxAdminProductNew = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(SAdminProductNew);
/* harmony default export */ __webpack_exports__["default"] = (connectReduxAdminProductNew);

/***/ })

/******/ });