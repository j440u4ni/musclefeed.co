(window.webpackJsonp=window.webpackJsonp||[]).push([["cdc9"],{qtNO:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin-product-new",function(){var e=n("ySQr");return{page:e.default||e}}])},ySQr:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),u=n("/MKj"),i=n("Ol7k"),s=n("6dKc"),a=(n("WIwn"),n("sN95"));n("o9iy");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=p(this,f(t).call(this,e))).state={user:null},n}var n,u,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r["Component"]),n=t,(u=[{key:"componentDidMount",value:function(){this.props&&"string"==typeof this.props.user&&this.setState({user:JSON.parse(this.props.user)})}},{key:"componentDidUpdate",value:function(e){e.user!==this.props.user&&this.setState({user:JSON.parse(this.props.user)})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{title:null!==this.state.user?this.state.user.firstname+" "+this.state.user.lastname:"Muscle Feed | Administrateur",description:"Boutique en ligne de compléments alimentaires et de protéines pour la musculation à prix cassé. Le meilleur de la construction musculaire : proteines, gainer, bcaa, bruleur de graisses, booster."}),o.a.createElement(i.a,null,o.a.createElement(a.a,null)))}}])&&l(n.prototype,u),c&&l(n,c),t}();var b=Object(u.b)(function(e){var t=e.authenticationReducer;return{user:t.user,logged:t.logged}})(d);t.default=b}},[["qtNO","5d41","9da1","ad9d"]]]);