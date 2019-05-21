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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("WrI5");


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

/***/ "97z3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return register; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_constants_authentication_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cRSR");
/* harmony import */ var _redux_helpers_authentication_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Shr3");
/* harmony import */ var _fragments_tools_alert_toasts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cOit");




function authenticate(email, password, admin, reset, router) {
  return function (dispatch) {
    Object(_redux_helpers_authentication_helper__WEBPACK_IMPORTED_MODULE_2__[/* authenticateService */ "a"])(email, password, admin).then(function (first) {
      return first;
    }).then(function (second) {
      console.log(second);

      if (second.hasOwnProperty('errors')) {
        reset();
        Object(_fragments_tools_alert_toasts__WEBPACK_IMPORTED_MODULE_3__[/* showWarning */ "b"])("Authentification échoué.");
      } else {
        js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('authentication-token', second.data.retrieveAdminAccount.authenticateToken);
        js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('authentication-user', JSON.stringify(second.data.retrieveAdminAccount));
        admin === true ? router.push('/admin-dashboard') : router.push('/user-dashboard');
      }
    });
  };

  function request() {
    return {
      type: _redux_constants_authentication_constant__WEBPACK_IMPORTED_MODULE_1__[/* authenticationConstants */ "a"].authenticationRequest,
      user: null
    };
  }

  function failure() {
    return {
      type: _redux_constants_authentication_constant__WEBPACK_IMPORTED_MODULE_1__[/* authenticationConstants */ "a"].authenticationFailure,
      user: null
    };
  }

  function success() {
    return {
      type: _redux_constants_authentication_constant__WEBPACK_IMPORTED_MODULE_1__[/* authenticationConstants */ "a"].authenticationSuccess,
      user: user
    };
  }
}
function register(civility, firstname, lastname, email, password, phone, cancel) {
  return function (dispatch) {
    Object(_redux_helpers_authentication_helper__WEBPACK_IMPORTED_MODULE_2__[/* registerService */ "c"])(civility, firstname, lastname, email, password, phone).then(function (first) {
      return first;
    }).then(function (second) {
      if (second.hasOwnProperty('errors')) {
        dispatch(failure());
        Object(_fragments_tools_alert_toasts__WEBPACK_IMPORTED_MODULE_3__[/* showWarning */ "b"])("Inscription échoué.");
        cancel();
      } else {
        dispatch(success());
        cancel();
        window.location.reload();
        Object(_fragments_tools_alert_toasts__WEBPACK_IMPORTED_MODULE_3__[/* showSuccess */ "a"])("Inscription avec succès.");
      }
    });
  };

  function request() {
    return {
      type: _redux_constants_authentication_constant__WEBPACK_IMPORTED_MODULE_1__[/* authenticationConstants */ "a"].registerRequest
    };
  }

  function failure() {
    return {
      type: _redux_constants_authentication_constant__WEBPACK_IMPORTED_MODULE_1__[/* authenticationConstants */ "a"].registerFailure
    };
  }

  function success() {
    return {
      type: _redux_constants_authentication_constant__WEBPACK_IMPORTED_MODULE_1__[/* authenticationConstants */ "a"].registerSuccess
    };
  }
}

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

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
    console.log(data);
    return data;
  });
}

/***/ }),

/***/ "WrI5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("sLJp");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("s7eq");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _source_components_redux_actions_authentication_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("97z3");
/* harmony import */ var _source_components_component_header_guest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("6dKc");
/* harmony import */ var _static_resources_admin_account_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("o9iy");
/* harmony import */ var _static_resources_admin_account_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_resources_admin_account_scss__WEBPACK_IMPORTED_MODULE_9__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var SAdminAccount =
/*#__PURE__*/
function (_Component) {
  _inherits(SAdminAccount, _Component);

  function SAdminAccount(props) {
    var _this;

    _classCallCheck(this, SAdminAccount);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SAdminAccount).call(this, props));
    _this.state = {
      email: '',
      password: '',
      disabled: false
    };
    _this.onChangeEmail = _this.onChangeEmail.bind(_assertThisInitialized(_this));
    _this.onChangePassword = _this.onChangePassword.bind(_assertThisInitialized(_this));
    _this.onIntentLogin = _this.onIntentLogin.bind(_assertThisInitialized(_this));
    _this.onResetButton = _this.onResetButton.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SAdminAccount, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__["far"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPaperPlane"]);
    }
  }, {
    key: "onChangeEmail",
    value: function onChangeEmail(event) {
      this.setState({
        email: event.target.value
      });
    }
  }, {
    key: "onChangePassword",
    value: function onChangePassword(event) {
      this.setState({
        password: event.target.value
      });
    }
  }, {
    key: "onResetButton",
    value: function onResetButton() {
      this.setState({
        disabled: false
      });
    }
  }, {
    key: "onIntentLogin",
    value: function onIntentLogin() {
      this.setState({
        disabled: true
      });
      var dispatch = this.props.dispatch;
      dispatch(Object(_source_components_redux_actions_authentication_action__WEBPACK_IMPORTED_MODULE_7__[/* authenticate */ "a"])(this.state.email, this.state.password, true, this.onResetButton, next_router__WEBPACK_IMPORTED_MODULE_6___default.a));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_source_components_component_header_guest__WEBPACK_IMPORTED_MODULE_8__[/* GuestHeader */ "a"], {
        title: "Muscle Feed | Administrateur",
        description: "Boutique en ligne de compl\xE9ments alimentaires et de prot\xE9ines pour la musculation \xE0 prix cass\xE9. Le meilleur de la construction musculaire : proteines, gainer, bcaa, bruleur de graisses, booster."
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-center align-items-center py-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-6 col-md-3 text-center col-sm-12 col-xs-12 admin-login-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        prefix: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
          type: "user",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "E-mail",
        className: "input-login",
        onChange: this.onChangeEmail
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
        prefix: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
          type: "lock",
          style: {
            color: 'rgba(0,0,0,.25)'
          }
        }),
        placeholder: "Mot de passe",
        className: "mt-1 input-login",
        onChange: this.onChangePassword
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex flex-row justify-content-space-between mt-2 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-8 d-flex flex-row justify-content-start remember-switch"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
        size: "small",
        defaultChecked: true
      }), "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "remember-text"
      }, "Rester Connect\xE9 ?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "primary",
        className: "ml-0 admin-login-button px-2",
        disabled: this.state.disabled,
        onClick: this.onIntentLogin
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "admin-login-text"
      }, "Se connecter\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPaperPlane"]
      })))))))));
    }
  }]);

  return SAdminAccount;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(state) {
  return state;
}

var connectReduxAdminAccount = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(SAdminAccount);
/* harmony default export */ __webpack_exports__["default"] = (connectReduxAdminAccount);

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

/***/ "cRSR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authenticationConstants; });
var authenticationConstants = {
  authenticationFailure: 'authenticationFailure',
  authenticationSuccess: 'authenticationSuccess',
  authenticationRequest: 'authenticationSuccess',
  registerFailure: 'registerFailure',
  registerSuccess: 'registerSuccess',
  registerRequest: 'registerRequest'
};

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "o9iy":
/***/ (function(module, exports) {



/***/ }),

/***/ "s7eq":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ }),

/***/ "sLJp":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });