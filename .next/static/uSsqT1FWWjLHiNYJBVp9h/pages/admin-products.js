(window.webpackJsonp=window.webpackJsonp||[]).push([["a8ec"],{BX3z:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),c=n("/MKj"),i=n("Ol7k"),a=n("6dKc"),s=(n("WIwn"),n("sN95")),u=n("3NBp"),d=n("jGtb");n("o9iy");function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=i.a.Content,g=(i.a.Footer,function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=f(this,h(t).call(this,e))).state={user:null,products:null},n}var n,c,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r["Component"]),n=t,(c=[{key:"componentDidMount",value:function(){(0,this.props.dispatch)(Object(d.h)()),this.props.user&&"string"==typeof this.props.user&&this.setState({user:"string"==typeof this.props.user&&this.props.user.length>2?JSON.parse(this.props.user):this.props.user}),this.props.products&&"string"==typeof this.props.products&&this.setState({products:"string"==typeof this.props.products&&this.props.products.length>2?JSON.parse(this.props.products):this.props.products})}},{key:"componentDidUpdate",value:function(e){e.user!==this.props.user&&this.setState({user:JSON.parse(this.props.user)}),e.products!==this.props.products&&this.setState({products:JSON.parse(this.props.products)})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,{title:null!==this.state.user?this.state.user.firstname+" "+this.state.user.lastname:"Muscle Feed | Administrateur",description:"Boutique en ligne de compléments alimentaires et de protéines pour la musculation à prix cassé. Le meilleur de la construction musculaire : proteines, gainer, bcaa, bruleur de graisses, booster."}),o.a.createElement(i.a,null,o.a.createElement(s.a,null),o.a.createElement(i.a,null,o.a.createElement(u.a,{user:JSON.stringify(this.state.user)}),o.a.createElement(m,{style:{backgroundColor:"#ffffff"},className:"product-global"}))))}}])&&l(n.prototype,c),p&&l(n,p),t}());var v=Object(c.b)(function(e){var t=e.authenticationReducer;return{user:t.user,logged:t.logged,products:e.adminReducer.products}})(g);t.default=v},S0b8:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={productCategoryAddSuccess:"productCategoryAddSuccess",productCategoryAddFailure:"productCategoryAddFailure",productCategoryAddRequest:"productCategoryAddRequest",productPerfumeAddSuccess:"productPerfumeAddSuccess",productPerfumeAddFailure:"productPerfumeAddFailure",productPerfumeAddRequest:"productPerfumeAddRequest",productWeightAddSuccess:"productWeightAddSuccess",productWeightAddFailure:"productWeightAddFailure",productWeightAddRequest:"productWeightAddRequest",productCategoryFetchSuccess:"productCategoryFetchSuccess",productCategoryFetchFailure:"productCategoryFetchFailure",productCategoryFetchRequest:"productCategoryFetchRequest",productPerfumeFetchSuccess:"productPerfumeFetchSuccess",productPerfumeFetchFailure:"productPerfumeFetchFailure",productPerfumeFetchRequest:"productPerfumeFetchRequest",productWeightFetchSuccess:"productWeightFetchSuccess",productWeightFetchFailure:"productWeightFetchFailure",productWeightFetchRequest:"productWeightFetchRequest",productAddRequest:"productAddRequest",productAddSuccess:"productAddSuccess",productAddFailure:"productAddFailure",productFetchRequest:"productFetchRequest",productFetchSuccess:"productFetchSuccess",productFetchFailure:"productFetchFailure",productSlideshowAddRequest:"productSlideshowAddRequest",productSlideshowAddSuccess:"productSlideshowAddSuccess",productSlideshowAddFailure:"productSlideshowAddFailure",productSlideshowFetchRequest:"productSlideshowFetchRequest",productSlideshowFetchSuccess:"productSlideshowFetchSuccess",productSlideshowFetchFailure:"productSlideshowFetchFailure"}},cOit:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),c=n("jo6Y"),i=n.n(c),a=n("YEIV"),s=n.n(a),u=n("QbLZ"),d=n.n(u),p=n("iCc5"),l=n.n(p),f=n("V7oC"),h=n.n(f),y=n("FYw3"),m=n.n(y),g=n("mRg0"),v=n.n(g),b=n("17x9"),S=n.n(b),C=n("i8i4"),F=n.n(C),O=n("MFj2"),w=n("2GS6"),A=n("TSYQ"),P=n.n(A),N=function(e){function t(){var e,n,r,o;l()(this,t);for(var c=arguments.length,i=Array(c),a=0;a<c;a++)i[a]=arguments[a];return n=r=m()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.close=function(e){e&&e.stopPropagation(),r.clearCloseTimer(),r.props.onClose()},r.startCloseTimer=function(){r.props.duration&&(r.closeTimer=setTimeout(function(){r.close()},1e3*r.props.duration))},r.clearCloseTimer=function(){r.closeTimer&&(clearTimeout(r.closeTimer),r.closeTimer=null)},o=n,m()(r,o)}return v()(t,e),h()(t,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentDidUpdate",value:function(e){(this.props.duration!==e.duration||this.props.update)&&this.restartCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"restartCloseTimer",value:function(){this.clearCloseTimer(),this.startCloseTimer()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls+"-notice",r=(e={},s()(e,""+n,1),s()(e,n+"-closable",t.closable),s()(e,t.className,!!t.className),e);return o.a.createElement("div",{className:P()(r),style:t.style,onMouseEnter:this.clearCloseTimer,onMouseLeave:this.startCloseTimer,onClick:t.onClick},o.a.createElement("div",{className:n+"-content"},t.children),t.closable?o.a.createElement("a",{tabIndex:"0",onClick:this.close,className:n+"-close"},t.closeIcon||o.a.createElement("span",{className:n+"-close-x"})):null)}}]),t}(r.Component);N.propTypes={duration:S.a.number,onClose:S.a.func,children:S.a.any,update:S.a.bool,closeIcon:S.a.node},N.defaultProps={onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}};var q=N,j=0,T=Date.now();var E=function(e){function t(){var e,n,r,o;l()(this,t);for(var c=arguments.length,i=Array(c),a=0;a<c;a++)i[a]=arguments[a];return n=r=m()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.state={notices:[]},r.add=function(e){var t=e.key=e.key||"rcNotification_"+T+"_"+j++,n=r.props.maxCount;r.setState(function(r){var o=r.notices,c=o.map(function(e){return e.key}).indexOf(t),i=o.concat();return-1!==c?i.splice(c,1,e):(n&&o.length>=n&&(e.updateKey=i[0].updateKey||i[0].key,i.shift()),i.push(e)),{notices:i}})},r.remove=function(e){r.setState(function(t){return{notices:t.notices.filter(function(t){return t.key!==e})}})},o=n,m()(r,o)}return v()(t,e),h()(t,[{key:"getTransitionName",value:function(){var e=this.props,t=e.transitionName;return!t&&e.animation&&(t=e.prefixCls+"-"+e.animation),t}},{key:"render",value:function(){var e,t=this,n=this.props,r=this.state.notices,c=r.map(function(e,c){var i=Boolean(c===r.length-1&&e.updateKey),a=e.updateKey?e.updateKey:e.key,s=Object(w.a)(t.remove.bind(t,e.key),e.onClose);return o.a.createElement(q,d()({prefixCls:n.prefixCls},e,{key:a,update:i,onClose:s,onClick:e.onClick,closeIcon:n.closeIcon}),e.content)}),i=(e={},s()(e,n.prefixCls,1),s()(e,n.className,!!n.className),e);return o.a.createElement("div",{className:P()(i),style:n.style},o.a.createElement(O.a,{transitionName:this.getTransitionName()},c))}}]),t}(r.Component);E.propTypes={prefixCls:S.a.string,transitionName:S.a.string,animation:S.a.oneOfType([S.a.string,S.a.object]),style:S.a.object,maxCount:S.a.number,closeIcon:S.a.node},E.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}},E.newInstance=function(e,t){var n=e||{},r=n.getContainer,c=i()(n,["getContainer"]),a=document.createElement("div");r?r().appendChild(a):document.body.appendChild(a);var s=!1;F.a.render(o.a.createElement(E,d()({},c,{ref:function(e){s||(s=!0,t({notice:function(t){e.add(t)},removeNotice:function(t){e.remove(t)},component:e,destroy:function(){F.a.unmountComponentAtNode(a),a.parentNode.removeChild(a)}}))}})),a)};var k=E,J=n("CtXQ");function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var _,$={},W=4.5,x=24,I=24,Q="topRight";function M(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:I;switch(e){case"topLeft":t={left:0,top:n,bottom:"auto"};break;case"topRight":t={right:0,top:n,bottom:"auto"};break;case"bottomLeft":t={left:0,top:"auto",bottom:r};break;default:t={right:0,top:"auto",bottom:r}}return t}var B={success:"check-circle-o",info:"info-circle-o",error:"close-circle-o",warning:"exclamation-circle-o"};var D={open:function(e){var t=e.prefixCls||"ant-notification",n="".concat(t,"-notice"),o=void 0===e.duration?W:e.duration,c=null;if(e.icon)c=r.createElement("span",{className:"".concat(n,"-icon")},e.icon);else if(e.type){var i=B[e.type];c=r.createElement(J.a,{className:"".concat(n,"-icon ").concat(n,"-icon-").concat(e.type),type:i})}var a=!e.description&&c?r.createElement("span",{className:"".concat(n,"-message-single-line-auto-margin")}):null;!function(e,t){var n=e.prefixCls,o=e.placement,c=void 0===o?Q:o,i=e.getContainer,a=void 0===i?_:i,s=e.top,u=e.bottom,d="".concat(n,"-").concat(c);$[d]?t($[d]):k.newInstance({prefixCls:n,className:"".concat(n,"-").concat(c),style:M(c,s,u),getContainer:a,closeIcon:r.createElement(J.a,{className:"".concat(n,"-close-icon"),type:"close"})},function(e){$[d]=e,t(e)})}({prefixCls:t,placement:e.placement,top:e.top,bottom:e.bottom,getContainer:e.getContainer},function(t){t.notice({content:r.createElement("div",{className:c?"".concat(n,"-with-icon"):""},c,r.createElement("div",{className:"".concat(n,"-message")},a,e.message),r.createElement("div",{className:"".concat(n,"-description")},e.description),e.btn?r.createElement("span",{className:"".concat(n,"-btn")},e.btn):null),duration:o,closable:!0,onClose:e.onClose,onClick:e.onClick,key:e.key,style:e.style||{},className:e.className})})},close:function(e){Object.keys($).forEach(function(t){return $[t].removeNotice(e)})},config:function(e){var t=e.duration,n=e.placement,r=e.bottom,o=e.top,c=e.getContainer;void 0!==t&&(W=t),void 0!==n&&(Q=n),void 0!==r&&(I=r),void 0!==o&&(x=o),void 0!==c&&(_=c)},destroy:function(){Object.keys($).forEach(function(e){$[e].destroy(),delete $[e]})}};["success","info","warning","error"].forEach(function(e){D[e]=function(t){return D.open(R({},t,{type:e}))}}),D.warn=D.warning;var Y=D;n("o9iy");function K(e){Y.open({message:o.a.createElement("span",{className:"error-text-login"},e),icon:o.a.createElement(J.a,{type:"warning",style:{color:"#108ee9"},className:"error-icon-login"}),className:"notification-warning-toast"})}function L(e){Y.open({message:o.a.createElement("span",{className:"error-text-login"},e),icon:o.a.createElement(J.a,{type:"check-circle",style:{color:"#108ee9"},className:"error-icon-login"}),className:"notification-warning-toast"})}n.d(t,"b",function(){return K}),n.d(t,"a",function(){return L})},e9Nx:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin-products",function(){var e=n("BX3z");return{page:e.default||e}}])},jGtb:function(e,t,n){"use strict";var r=n("p46w"),o=n.n(r),c=n("S0b8"),i=(n("lTCR"),"mutation addProductCategoryQuery($name: String!, $description: String!) { addProductCategoryQuery(name: $name, description: $description) { id, name, description } }"),a="mutation addProductPerfumeQuery($name: String!, $description: String!) { addProductPerfumeQuery(name: $name, description: $description) { id, name, description } }",s="mutation addProductWeightQuery($name: String!, $value: Int!) { addProductWeightQuery(name: $name, value: $value) { id, name, value } }",u="mutation addProductQuery($title: String!, $quantity: Int!, $provider: String!, $description_title: String!, $description: String!, $image: String!, $details: String!) { \n    addProductQuery(title: $title, quantity: $quantity, provider: $provider, description_title: $description_title, description: $description, image: $image, details: $details) { id, title, quantity, provider, description_title, description, image, details } }",d="query { fetchAllCategories { id, name, description } }",p="query { fetchAllWeights { id, name, value } }",l="query { fetchAllPerfumes { id, name, description } }",f="query { fetchProducts { id, title, quantity, provider, description_title, description, image, details } }",h="query { fetchSlideshowImage { id, name, image } }",y=n("oY9k"),m=n.n(y),g="http://10.188.37.107";var v=n("cOit");function b(){return function(e){m()(g+":3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:d})}).then(function(e){return e.json()}).then(function(e){return e}).then(function(e){return e}).then(function(t){var n;t.hasOwnProperty("errors")?(Object(v.b)("Erreur de disposition de catégories."),e({type:c.a.productCategoryFetchFailure,categories:null})):(o.a.set("product-categories",JSON.stringify(t.data.fetchAllCategories)),e((n=JSON.stringify(t.data.fetchAllCategories),{type:c.a.productCategoryFetchSuccess,categories:n})))})}}function S(){return function(e){m()(g+":3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:p})}).then(function(e){return e.json()}).then(function(e){return e}).then(function(e){return e}).then(function(t){var n;t.hasOwnProperty("errors")?(Object(v.b)("Erreur de disposition de poids."),e({type:c.a.productWeightFetchFailure,weights:null})):(o.a.set("product-weights",JSON.stringify(t.data.fetchAllWeights)),e((n=JSON.stringify(t.data.fetchAllWeights),{type:c.a.productWeightFetchSuccess,weights:n})))})}}function C(){return function(e){m()(g+":3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:l})}).then(function(e){return e.json()}).then(function(e){return e}).then(function(e){return e}).then(function(t){var n;t.hasOwnProperty("errors")?(Object(v.b)("Erreur de disposition de parfums."),e({type:c.a.productPerfumeFetchFailure,perfumes:null})):(o.a.set("product-perfumes",JSON.stringify(t.data.fetchAllPerfumes)),e((n=JSON.stringify(t.data.fetchAllPerfumes),{type:c.a.productPerfumeFetchSuccess,perfumes:n})))})}}function F(){return function(e){m()(g+":3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:f})}).then(function(e){return e.json()}).then(function(e){return e}).then(function(e){return e}).then(function(t){var n;t.hasOwnProperty("errors")?(Object(v.b)("Erreur de disposition de produits."),e({type:c.a.productFetchFailure,products:null})):(o.a.set("products",JSON.stringify(t.data.fetchProducts)),e((n=JSON.stringify(t.data.fetchProducts),{type:c.a.productFetchSuccess,products:n})))})}}function O(){return function(e){m()(g+":3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:h})}).then(function(e){return e.json()}).then(function(e){return e}).then(function(e){return e}).then(function(t){var n;t.hasOwnProperty("errors")?(Object(v.b)("Erreur de disposition d'images."),e({type:c.a.productSlideshowFetchFailure,slideshow:null})):(o.a.set("slideshow",JSON.stringify(t.data.fetchSlideshowImageQuery)),e((n=JSON.stringify(t.data.fetchSlideshowImageQuery),{type:c.a.productSlideshowFetchSuccess,slideshow:n})))})}}function w(e,t,n){return function(r){(function(e,t){return m()(g+":3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:i,variables:{name:e,description:t}})}).then(function(e){return e.json()}).then(function(e){return e})})(e,t).then(function(e){return r({type:c.a.productCategoryAddRequest,categories:null}),e}).then(function(e){var t;e.hasOwnProperty("errors")?(n(!1),Object(v.b)("Addition catégorie échoué."),r({type:c.a.productCategoryAddFailure,categories:null})):(r((t=e.data.addProductCategoryQuery,{type:c.a.productCategoryAddSuccess,categories:t})),r(b()),n(),Object(v.a)("Addition catégorie avec succès."))})}}function A(e,t,n){return function(r){(function(e,t){return m()(g+":3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:a,variables:{name:e,description:t}})}).then(function(e){return e.json()}).then(function(e){return e})})(e,t).then(function(e){return r({type:c.a.productPerfumeAddRequest,perfumes:null}),e}).then(function(e){var t;e.hasOwnProperty("errors")?(n(!1),Object(v.b)("Addition catégorie échoué."),r({type:c.a.productPerfumeAddFailure,perfumes:null})):(r((t=e.data.addProductPerfumeQuery,{type:c.a.productPerfumeAddSuccess,perfumes:t})),r(C()),n(),Object(v.a)("Addition parfum avec succès."))})}}function P(e,t,n){return function(r){(function(e,t){var n=parseInt(t,10);return m()(g+":3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:s,variables:{name:e,value:n}})}).then(function(e){return e.json()}).then(function(e){return e})})(e,t).then(function(e){return r({type:c.a.productWeightAddRequest,weights:null}),e}).then(function(e){var t;e.hasOwnProperty("errors")?(n(!1),Object(v.b)("Addition catégorie échoué."),r({type:c.a.productWeightAddFailure,weights:null})):(r((t=e.data.addProductWeightQuery,{type:c.a.productWeightAddSuccess,weights:t})),r(S()),n(),Object(v.a)("Addition poids avec succès."))})}}function N(e,t,n,r,o,i,a){return function(s){(function(e,t,n,r,o,c,i){var a=parseInt(t);return m()(g+":3000/v1/graphql-second-instance/0lqY5JycFu4BwCDv7vsM",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:u,variables:{title:e,quantity:a,provider:n,description_title:r,description:o,image:c,details:JSON.stringify(i)}})}).then(function(e){return e.json()}).then(function(e){return e})})(e,t,n,r,o,i,a).then(function(e){return s({type:c.a.productAddRequest,products:null}),e}).then(function(e){var t;e.hasOwnProperty("errors")?(Object(v.b)("Addition produit échoué."),s({type:c.a.productAddFailure,products:null})):(s((t=e.data.addProductQuery,{type:c.a.productAddSuccess,products:t})),Object(v.a)("Addition produit avec succès."))})}}n.d(t,"e",function(){return b}),n.d(t,"g",function(){return S}),n.d(t,"f",function(){return C}),n.d(t,"h",function(){return F}),n.d(t,"i",function(){return O}),n.d(t,"b",function(){return w}),n.d(t,"c",function(){return A}),n.d(t,"d",function(){return P}),n.d(t,"a",function(){return N})}},[["e9Nx","5d41","9da1","ad9d"]]]);