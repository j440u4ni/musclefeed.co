(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{"4oSG":function(t,e){t.exports="/_next/static/images/logo-fredoka-v4@2x-3b02020ddfaf9ff6ba12d6533364037b.png"},RNiq:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),a=n("6dKc"),u=(n("gkbE"),n("2/Rp")),i=n("CtXQ"),s=n("17x9"),c=n("MFj2"),l=n("TSYQ"),f=n.n(l),p=n("BGR+"),y=n("wEI+"),m=n("VCL8");function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e){return!e||"object"!==b(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t,e){return(w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function O(t){return t?t.toString().split("").reverse().map(function(t){var e=Number(t);return isNaN(e)?t:e}):[]}var N=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=v(this,g(e).call(this,t))).renderScrollNumber=function(t){var e=t.getPrefixCls,o=n.props,a=o.prefixCls,u=o.className,i=o.style,s=o.title,c=o.component,l=void 0===c?"sup":c,y=o.displayComponent,m=Object(p.a)(n.props,["count","onAnimated","component","prefixCls","displayComponent"]),b=e("scroll-number",a),h=d({},m,{className:f()(b,u),title:s});return i&&i.borderColor&&(h.style=d({},i,{boxShadow:"0 0 0 1px ".concat(i.borderColor," inset")})),y?r.cloneElement(y,{className:f()("".concat(b,"-custom-component"),y.props&&y.props.className)}):Object(r.createElement)(l,h,n.renderNumberElement(b))},n.state={animateStarted:!0,count:t.count},n}var n,o,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}(e,r["Component"]),n=e,a=[{key:"getDerivedStateFromProps",value:function(t,e){return"count"in t?e.count===t.count?null:{animateStarted:!0}:null}}],(o=[{key:"getPositionByNum",value:function(t,e){var n=this.state.count,r=Math.abs(Number(n)),o=Math.abs(Number(this.lastCount)),a=Math.abs(O(this.state.count)[e]),u=Math.abs(O(this.lastCount)[e]);return this.state.animateStarted?10+t:r>o?a>=u?10+t:20+t:a<=u?10+t:t}},{key:"componentDidUpdate",value:function(t,e){this.lastCount=e.count;var n=this.state.animateStarted,r=this.props.onAnimated;n&&this.setState({animateStarted:!1,count:this.props.count},function(){r&&r()})}},{key:"renderNumberList",value:function(t){for(var e=[],n=0;n<30;n++){var o=t===n?"current":"";e.push(r.createElement("p",{key:n.toString(),className:o},n%10))}return e}},{key:"renderCurrentNumber",value:function(t,e,n){if("number"==typeof e){var o=this.getPositionByNum(e,n),a=this.state.animateStarted||void 0===O(this.lastCount)[n];return Object(r.createElement)("span",{className:"".concat(t,"-only"),style:{transition:a?"none":void 0,msTransform:"translateY(".concat(100*-o,"%)"),WebkitTransform:"translateY(".concat(100*-o,"%)"),transform:"translateY(".concat(100*-o,"%)")},key:n},this.renderNumberList(o))}return r.createElement("span",{key:"symbol",className:"".concat(t,"-symbol")},e)}},{key:"renderNumberElement",value:function(t){var e=this,n=this.state.count;return n&&Number(n)%1==0?O(n).map(function(n,r){return e.renderCurrentNumber(t,n,r)}).reverse():n}},{key:"render",value:function(){return r.createElement(y.a,null,this.renderScrollNumber)}}])&&h(n.prototype,o),a&&h(n,a),e}();N.defaultProps={count:null,onAnimated:function(){}},Object(m.polyfill)(N);var S=N,E=n("CWQg"),j=Object(E.a)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime");function C(t){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function k(){return(k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t,e){return!e||"object"!==C(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function D(t,e){return(D=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var B=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n};function M(t){return-1!==j.indexOf(t)}var R=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=x(this,T(e).apply(this,arguments))).renderBadge=function(e){var n,o=e.getPrefixCls,a=t.props,u=(a.count,a.showZero,a.prefixCls),i=a.scrollNumberPrefixCls,s=(a.overflowCount,a.className,a.style,a.children),l=(a.dot,a.status),p=a.text,y=(a.offset,a.title,a.color),m=B(a,["count","showZero","prefixCls","scrollNumberPrefixCls","overflowCount","className","style","children","dot","status","text","offset","title","color"]),b=o("badge",u),d=o("scroll-number",i),h=t.renderBadgeNumber(b,d),v=t.renderStatusText(b),g=f()((_(n={},"".concat(b,"-status-dot"),t.hasStatus()),_(n,"".concat(b,"-status-").concat(l),!!l),_(n,"".concat(b,"-status-").concat(y),M(y)),n)),w={};if(y&&!M(y)&&(w.background=y),!s&&t.hasStatus()){var O=t.getStyleWithOffset(),N=O&&O.color;return r.createElement("span",k({},m,{className:t.getBadgeClassName(b),style:O}),r.createElement("span",{className:g,style:w}),r.createElement("span",{style:{color:N},className:"".concat(b,"-status-text")},p))}return r.createElement("span",k({},m,{className:t.getBadgeClassName(b)}),s,r.createElement(c.a,{component:"",showProp:"data-show",transitionName:s?"".concat(b,"-zoom"):"",transitionAppear:!0},h),v)},t}var n,o,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&D(t,e)}(e,r["Component"]),n=e,(o=[{key:"getBadgeClassName",value:function(t){var e,n=this.props,r=n.className,o=n.children;return f()(r,t,(_(e={},"".concat(t,"-status"),this.hasStatus()),_(e,"".concat(t,"-not-a-wrapper"),!o),e))}},{key:"hasStatus",value:function(){var t=this.props,e=t.status,n=t.color;return!!e||!!n}},{key:"isZero",value:function(){var t=this.getNumberedDispayCount();return"0"===t||0===t}},{key:"isDot",value:function(){var t=this.props.dot,e=this.isZero();return t&&!e||this.hasStatus()}},{key:"isHidden",value:function(){var t=this.props.showZero,e=this.getDispayCount(),n=this.isZero(),r=this.isDot();return(null==e||""===e||n&&!t)&&!r}},{key:"getNumberedDispayCount",value:function(){var t=this.props,e=t.count,n=t.overflowCount;return e>n?"".concat(n,"+"):e}},{key:"getDispayCount",value:function(){return this.isDot()?"":this.getNumberedDispayCount()}},{key:"getScrollNumberTitle",value:function(){var t=this.props,e=t.title,n=t.count;return e||("string"==typeof n||"number"==typeof n?n:void 0)}},{key:"getStyleWithOffset",value:function(){var t=this.props,e=t.offset,n=t.style;return e?k({right:-parseInt(e[0],10),marginTop:e[1]},n):n}},{key:"renderStatusText",value:function(t){var e=this.props.text;return this.isHidden()||!e?null:r.createElement("span",{className:"".concat(t,"-status-text")},e)}},{key:"renderDispayComponent",value:function(){var t=this.props.count;if(t&&"object"===C(t))return r.cloneElement(t,{style:k({},this.getStyleWithOffset(),t.props&&t.props.style)})}},{key:"renderBadgeNumber",value:function(t,e){var n,o=this.props,a=o.status,u=o.count,i=this.getDispayCount(),s=this.isDot(),c=this.isHidden(),l=f()((_(n={},"".concat(t,"-dot"),s),_(n,"".concat(t,"-count"),!s),_(n,"".concat(t,"-multiple-words"),!s&&u&&u.toString&&u.toString().length>1),_(n,"".concat(t,"-status-").concat(a),this.hasStatus()),n));return c?null:r.createElement(S,{prefixCls:e,"data-show":!c,className:l,count:i,displayComponent:this.renderDispayComponent(),title:this.getScrollNumberTitle(),style:this.getStyleWithOffset(),key:"scrollNumber"})}},{key:"render",value:function(){return r.createElement(y.a,null,this.renderBadge)}}])&&P(n.prototype,o),a&&P(n,a),e}();R.defaultProps={count:null,showZero:!1,dot:!1,overflowCount:99},R.propTypes={count:s.node,showZero:s.bool,dot:s.bool,overflowCount:s.number};n("yObJ");var Z=n("4oSG"),q=n.n(Z);function W(t){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function A(t,e){return!e||"object"!==W(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function G(t){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function I(t,e){return(I=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var L=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),A(this,G(e).call(this,t))}var n,a,s;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&I(t,e)}(e,r["Component"]),n=e,(a=[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container-fluid m-0 container-top-one "+this.props.className},o.a.createElement("div",{className:"row d-flex flex-row justify-content-center row-guest-first"},o.a.createElement("div",{className:"col-4 d-flex flex-row justify-content-center"},o.a.createElement("img",{src:q.a,className:"application-logo"})),o.a.createElement("div",{className:"col-5"}),o.a.createElement("div",{className:"col-3 d-flex flex-row justify-content-start"},o.a.createElement(u.a.Group,null,o.a.createElement(u.a,{type:"default",className:"application-button-default-style"},o.a.createElement(i.a,{type:"user",className:"application-button-icon-style",style:{fontSize:15}})," Mon compte"),o.a.createElement(u.a,{type:"default",className:"application-button-default-style"},o.a.createElement(R,{dot:!0,style:{marginTop:0,marginRight:-5},className:"application-button-default-style-reset"},o.a.createElement(i.a,{type:"shopping-cart",className:"application-button-icon-style",style:{fontSize:15}})," Mon panier")))))))}}])&&F(n.prototype,a),s&&F(n,s),e}(),Y=n("/MKj");function z(t){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function H(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function J(t,e){return!e||"object"!==z(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Q(t){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function X(t,e){return(X=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var K=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),J(this,Q(e).call(this,t))}var n,u,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&X(t,e)}(e,r["Component"]),n=e,(u=[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,{title:"Muscle Feed | Toutes marques de protéines pour la Musculation & nutrition sportive.",description:"Boutique en ligne de compléments alimentaires et de protéines pour la musculation à prix cassé. Le meilleur de la construction musculaire : proteines, gainer, bcaa, bruleur de graisses, booster."}),o.a.createElement(L,{className:"application-guest-navbar"}))}}])&&H(n.prototype,u),i&&H(n,i),e}();var U=Object(Y.b)(function(t){return t})(K);e.default=U},gkbE:function(t,e,n){"use strict";n("q1tI")},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var t=n("RNiq");return{page:t.default||t}}])}},[["vlRD","5d41","9da1","ad9d"]]]);