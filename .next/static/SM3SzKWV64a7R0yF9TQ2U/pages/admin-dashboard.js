(window.webpackJsonp=window.webpackJsonp||[]).push([["9d29"],{"9zyH":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("/MKj"),a=n("TSYQ"),l=n.n(a),s=n("foW8"),c=n.n(s),u=n("wEI+");function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),e}function b(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},S=c()({siderHook:{addSider:function(){return null},removeSider:function(){return null}}});function C(e){var t=e.suffixCls,n=e.tagName;return function(e){return function(o){function i(){var o;return y(this,i),(o=b(this,v(i).apply(this,arguments))).renderComponent=function(i){var a=i.getPrefixCls,l=o.props.prefixCls,s=a(t,l);return r.createElement(e,d({prefixCls:s,tagName:n},o.props))},o}return g(i,r["Component"]),m(i,[{key:"render",value:function(){return r.createElement(u.a,null,this.renderComponent)}}]),i}()}}var x=function(e){function t(){return y(this,t),b(this,v(t).apply(this,arguments))}return g(t,r["Component"]),m(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,o=e.children,i=e.tagName,a=O(e,["prefixCls","className","children","tagName"]),s=l()(n,t);return r.createElement(i,d({className:s},a),o)}}]),t}(),j=function(e){function t(){var e;return y(this,t),(e=b(this,v(t).apply(this,arguments))).state={siders:[]},e}return g(t,r["Component"]),m(t,[{key:"getSiderHook",value:function(){var e=this;return{addSider:function(t){e.setState(function(e){return{siders:[].concat(f(e.siders),[t])}})},removeSider:function(t){e.setState(function(e){return{siders:e.siders.filter(function(e){return e!==t})}})}}}},{key:"render",value:function(){var e,t,n,o=this.props,i=o.prefixCls,a=o.className,s=o.children,c=o.hasSider,u=o.tagName,p=O(o,["prefixCls","className","children","hasSider","tagName"]),f=l()(a,i,(e={},t="".concat(i,"-has-sider"),n="boolean"==typeof c?c:this.state.siders.length>0,t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e));return r.createElement(S.Provider,{value:{siderHook:this.getSiderHook()}},r.createElement(u,d({className:f},p),s))}}]),t}(),k=C({suffixCls:"layout",tagName:"section"})(j),E=C({suffixCls:"layout-header",tagName:"header"})(x),P=C({suffixCls:"layout-footer",tagName:"footer"})(x),_=C({suffixCls:"layout-content",tagName:"main"})(x);k.Header=E,k.Footer=P,k.Content=_;var N=k,H=n("VCL8"),q=n("BGR+"),T=n("CtXQ"),W=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t,n){return t&&L(e.prototype,t),n&&L(e,n),e}function R(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var X=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};if("undefined"!=typeof window){window.matchMedia=window.matchMedia||function(e){return{media:e,matches:!1,addListener:function(){},removeListener:function(){}}}}var K,Q={xs:"480px",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xxl:"1600px"},U=c()({}),G=(K=0,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return K+=1,"".concat(e).concat(K)}),V=function(e){function t(e){var n,o,i;return M(this,t),(n=R(this,B(t).call(this,e))).responsiveHandler=function(e){n.setState({below:e.matches});var t=n.props.onBreakpoint;t&&t(e.matches),n.state.collapsed!==e.matches&&n.setCollapsed(e.matches,"responsive")},n.setCollapsed=function(e,t){"collapsed"in n.props||n.setState({collapsed:e});var r=n.props.onCollapse;r&&r(e,t)},n.toggle=function(){var e=!n.state.collapsed;n.setCollapsed(e,"clickTrigger")},n.belowShowChange=function(){n.setState({belowShow:!n.state.belowShow})},n.renderSider=function(e){var t,o=e.getPrefixCls,i=n.props,a=i.prefixCls,s=i.className,c=i.theme,u=i.collapsible,p=i.reverseArrow,f=i.trigger,d=i.style,y=i.width,h=i.collapsedWidth,m=X(i,["prefixCls","className","theme","collapsible","reverseArrow","trigger","style","width","collapsedWidth"]),b=o("layout-sider",a),v=Object(q.a)(m,["collapsed","defaultCollapsed","onCollapse","breakpoint","onBreakpoint","siderHook"]),g=n.state.collapsed?h:y,w=W(g)?"".concat(g,"px"):String(g),O=0===parseFloat(String(h||0))?r.createElement("span",{onClick:n.toggle,className:"".concat(b,"-zero-width-trigger ").concat(b,"-zero-width-trigger-").concat(p?"right":"left")},r.createElement(T.a,{type:"bars"})):null,S={expanded:p?r.createElement(T.a,{type:"right"}):r.createElement(T.a,{type:"left"}),collapsed:p?r.createElement(T.a,{type:"left"}):r.createElement(T.a,{type:"right"})}[n.state.collapsed?"collapsed":"expanded"],C=null!==f?O||r.createElement("div",{className:"".concat(b,"-trigger"),onClick:n.toggle,style:{width:w}},f||S):null,x=I({},d,{flex:"0 0 ".concat(w),maxWidth:w,minWidth:w,width:w}),j=l()(s,b,"".concat(b,"-").concat(c),(F(t={},"".concat(b,"-collapsed"),!!n.state.collapsed),F(t,"".concat(b,"-has-trigger"),u&&null!==f&&!O),F(t,"".concat(b,"-below"),!!n.state.below),F(t,"".concat(b,"-zero-width"),0===parseFloat(w)),t));return r.createElement("aside",I({className:j},v,{style:x}),r.createElement("div",{className:"".concat(b,"-children")},n.props.children),u||n.state.below&&O?C:null)},n.uniqueId=G("ant-sider-"),"undefined"!=typeof window&&(o=window.matchMedia),o&&e.breakpoint&&e.breakpoint in Q&&(n.mql=o("(max-width: ".concat(Q[e.breakpoint],")"))),i="collapsed"in e?e.collapsed:e.defaultCollapsed,n.state={collapsed:i,below:!1},n}return D(t,r["Component"]),z(t,[{key:"componentDidMount",value:function(){this.mql&&(this.mql.addListener(this.responsiveHandler),this.responsiveHandler(this.mql)),this.props.siderHook&&this.props.siderHook.addSider(this.uniqueId)}},{key:"componentWillUnmount",value:function(){this.mql&&this.mql.removeListener(this.responsiveHandler),this.props.siderHook&&this.props.siderHook.removeSider(this.uniqueId)}},{key:"render",value:function(){var e=this.state.collapsed,t=this.props.collapsedWidth;return r.createElement(U.Provider,{value:{siderCollapsed:e,collapsedWidth:t}},r.createElement(u.a,null,this.renderSider))}}],[{key:"getDerivedStateFromProps",value:function(e){return"collapsed"in e?{collapsed:e.collapsed}:null}}]),t}();V.defaultProps={collapsible:!1,defaultCollapsed:!1,reverseArrow:!1,width:200,collapsedWidth:80,style:{},theme:"dark"},Object(H.a)(V);var Y=function(e){function t(){return M(this,t),R(this,B(t).apply(this,arguments))}return D(t,r["Component"]),z(t,[{key:"render",value:function(){var e=this;return r.createElement(S.Consumer,null,function(t){return r.createElement(V,I({},t,e.props))})}}]),t}();N.Sider=Y;var Z=N,$=n("6dKc");n("o9iy");function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ne(e,t){return!t||"object"!==ee(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function re(e){return(re=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function oe(e,t){return(oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Z.Header,Z.Content,Z.Footer;var ie=Z.Sider,ae=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=ne(this,re(t).call(this,e))).state={user:null},n}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&oe(e,t)}(t,r["Component"]),n=t,(i=[{key:"componentDidMount",value:function(){this.props&&"string"==typeof this.props.user&&this.setState({user:JSON.parse(this.props.user)})}},{key:"componentDidUpdate",value:function(e){e.user!==this.props.user&&this.setState({user:JSON.parse(this.props.user)})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement($.a,{title:null!==this.state.user?this.state.user.firstname+" "+this.state.user.lastname:"Muscle Feed | Administrateur",description:"Boutique en ligne de compléments alimentaires et de protéines pour la musculation à prix cassé. Le meilleur de la construction musculaire : proteines, gainer, bcaa, bruleur de graisses, booster."}),o.a.createElement(Z,null,o.a.createElement(ie,{style:{height:"100vh",overflow:"auto",position:"fixed",left:0,width:"140px"}},o.a.createElement("p",null,"SIder"))))}}])&&te(n.prototype,i),a&&te(n,a),t}();var le=Object(i.b)(function(e){var t=e.authenticationReducer;return{user:t.user,logged:t.logged}})(ae);t.default=le},nWrk:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin-dashboard",function(){var e=n("9zyH");return{page:e.default||e}}])}},[["nWrk","5d41","9da1","ad9d"]]]);