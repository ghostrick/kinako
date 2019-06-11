!function(e){function n(n){for(var t,o,a=n[0],i=n[1],c=n[2],d=n[3]||[],s=0,p=[];s<a.length;s++)o=a[s],I[o]&&p.push(I[o][0]),I[o]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);for(W&&W(n),S.push.apply(S,d);p.length;)p.shift()();return H.push.apply(H,c||[]),r()}function r(){for(var e,n=0;n<H.length;n++){for(var r=H[n],t=!0,o=1;o<r.length;o++){var a=r[o];0!==I[a]&&(t=!1)}t&&(H.splice(n--,1),e=C(C.s=r[0]))}return 0===H.length&&(S.forEach(function(e){if(void 0===I[e]){I[e]=null;var n=document.createElement("link");n.crossOrigin="anonymous",C.nc&&n.setAttribute("nonce",C.nc),n.rel="prefetch",n.as="script",n.href=q(e),document.head.appendChild(n)}}),S.length=0),e}var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!P[e]||!x[e])return;for(var r in x[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(g[r]=n[r]);0===--y&&0===b&&_()}(e,n),t&&t(e,n)};var o,a=!0,i="07485acae40b0f4a08fb",c=1e4,d={},s=[],p=[];function u(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"===typeof e)n._selfAccepted=e;else if("object"===typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"===typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:O,apply:E,status:function(e){if(!e)return f;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var n=l.indexOf(e);n>=0&&l.splice(n,1)},data:d[e]};return o=void 0,n}var l=[],f="idle";function h(e){f=e;for(var n=0;n<l.length;n++)l[n].call(null,e)}var m,g,v,y=0,b=0,w={},x={},P={};function k(e){return+e+""===e?+e:e}function O(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,h("check"),(n=c,n=n||1e4,new Promise(function(e,r){if("undefined"===typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,o=C.p+""+i+".hot-update.json";t.open("GET",o,!0),t.timeout=n,t.send(null)}catch(a){return r(a)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(a){return void r(a)}e(n)}}})).then(function(e){if(!e)return h("idle"),null;x={},w={},P=e.c,v=e.h,h("prepare");var n=new Promise(function(e,n){m={resolve:e,reject:n}});for(var r in g={},I)j(r);return"prepare"===f&&0===b&&0===y&&_(),n});var n}function j(e){P[e]?(x[e]=!0,y++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=C.p+""+e+"."+i+".hot-update.js",n.crossOrigin="anonymous",document.head.appendChild(n)}(e)):w[e]=!0}function _(){h("ready");var e=m;if(m=null,e)if(a)Promise.resolve().then(function(){return E(a)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in g)Object.prototype.hasOwnProperty.call(g,r)&&n.push(k(r));e.resolve(n)}}function E(n){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var r,t,o,a,c;function p(e){for(var n=[e],r={},t=n.map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),i=o.id,c=o.chain;if((a=D[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var d=0;d<a.parents.length;d++){var s=a.parents[d],p=D[s];if(p){if(p.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([s]),moduleId:i,parentId:s};-1===n.indexOf(s)&&(p.hot._acceptedDependencies[i]?(r[s]||(r[s]=[]),u(r[s],[i])):(delete r[s],n.push(s),t.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function u(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}n=n||{};var l={},m=[],y={},b=function(){console.warn("[HMR] unexpected require("+x.moduleId+") to disposed module")};for(var w in g)if(Object.prototype.hasOwnProperty.call(g,w)){var x;c=k(w);var O=!1,j=!1,_=!1,E="";switch((x=g[w]?p(c):{type:"disposed",moduleId:w}).chain&&(E="\nUpdate propagation: "+x.chain.join(" -> ")),x.type){case"self-declined":n.onDeclined&&n.onDeclined(x),n.ignoreDeclined||(O=new Error("Aborted because of self decline: "+x.moduleId+E));break;case"declined":n.onDeclined&&n.onDeclined(x),n.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+x.moduleId+" in "+x.parentId+E));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(x),n.ignoreUnaccepted||(O=new Error("Aborted because "+c+" is not accepted"+E));break;case"accepted":n.onAccepted&&n.onAccepted(x),j=!0;break;case"disposed":n.onDisposed&&n.onDisposed(x),_=!0;break;default:throw new Error("Unexception type "+x.type)}if(O)return h("abort"),Promise.reject(O);if(j)for(c in y[c]=g[c],u(m,x.outdatedModules),x.outdatedDependencies)Object.prototype.hasOwnProperty.call(x.outdatedDependencies,c)&&(l[c]||(l[c]=[]),u(l[c],x.outdatedDependencies[c]));_&&(u(m,[x.moduleId]),y[c]=b)}var H,S=[];for(t=0;t<m.length;t++)c=m[t],D[c]&&D[c].hot._selfAccepted&&y[c]!==b&&S.push({module:c,errorHandler:D[c].hot._selfAccepted});h("dispose"),Object.keys(P).forEach(function(e){!1===P[e]&&function(e){delete I[e]}(e)});for(var q,A,M=m.slice();M.length>0;)if(c=M.pop(),a=D[c]){var V={},W=a.hot._disposeHandlers;for(o=0;o<W.length;o++)(r=W[o])(V);for(d[c]=V,a.hot.active=!1,delete D[c],delete l[c],o=0;o<a.children.length;o++){var z=D[a.children[o]];z&&((H=z.parents.indexOf(c))>=0&&z.parents.splice(H,1))}}for(c in l)if(Object.prototype.hasOwnProperty.call(l,c)&&(a=D[c]))for(A=l[c],o=0;o<A.length;o++)q=A[o],(H=a.children.indexOf(q))>=0&&a.children.splice(H,1);for(c in h("apply"),i=v,y)Object.prototype.hasOwnProperty.call(y,c)&&(e[c]=y[c]);var U=null;for(c in l)if(Object.prototype.hasOwnProperty.call(l,c)&&(a=D[c])){A=l[c];var T=[];for(t=0;t<A.length;t++)if(q=A[t],r=a.hot._acceptedDependencies[q]){if(-1!==T.indexOf(r))continue;T.push(r)}for(t=0;t<T.length;t++){r=T[t];try{r(A)}catch(R){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:c,dependencyId:A[t],error:R}),n.ignoreErrored||U||(U=R)}}}for(t=0;t<S.length;t++){var N=S[t];c=N.module,s=[c];try{C(c)}catch(R){if("function"===typeof N.errorHandler)try{N.errorHandler(R)}catch(B){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:B,originalError:R}),n.ignoreErrored||U||(U=B),U||(U=R)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:c,error:R}),n.ignoreErrored||U||(U=R)}}return U?(h("fail"),Promise.reject(U)):(h("idle"),new Promise(function(e){e(m)}))}var D={},I={1:0},H=[],S=[];function q(e){return C.p+"static/js/"+({2:"srcdocs-components-page-page",3:"srcdocs-components-presentations-presentation",4:"srcdocs-components-wrapper-wrapper",5:"srcdocs-getstarted"}[e]||e)+"."+{2:"1c16cc26",3:"5fe919b3",4:"620f407c",5:"c95026dc"}[e]+".js"}function C(n){if(D[n])return D[n].exports;var r=D[n]={i:n,l:!1,exports:{},hot:u(n),parents:(p=s,s=[],p),children:[]};return e[n].call(r.exports,r,r.exports,function(e){var n=D[e];if(!n)return C;var r=function(r){return n.hot.active?(D[r]?-1===D[r].parents.indexOf(e)&&D[r].parents.push(e):(s=[e],o=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),s=[]),C(r)},t=function(e){return{configurable:!0,enumerable:!0,get:function(){return C[e]},set:function(n){C[e]=n}}};for(var a in C)Object.prototype.hasOwnProperty.call(C,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(r,a,t(a));return r.e=function(e){return"ready"===f&&h("prepare"),b++,C.e(e).then(n,function(e){throw n(),e});function n(){b--,"prepare"===f&&(w[e]||j(e),0===b&&0===y&&_())}},r.t=function(e,n){return 1&n&&(e=r(e)),C.t(e,-2&n)},r}(n)),r.l=!0,r.exports}C.e=function(e){var n=[],r=I[e];if(0!==r)if(r)n.push(r[2]);else{var t=new Promise(function(n,t){r=I[e]=[n,t]});n.push(r[2]=t);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,C.nc&&a.setAttribute("nonce",C.nc),a.src=q(e),0!==a.src.indexOf(window.location.origin+"/")&&(a.crossOrigin="anonymous");var i=new Error;o=function(n){a.onerror=a.onload=null,clearTimeout(c);var r=I[e];if(0!==r){if(r){var t=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",i.type=t,i.request=o,r[1](i)}I[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:a})},12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(n)},C.m=e,C.c=D,C.d=function(e,n,r){C.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},C.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},C.t=function(e,n){if(1&n&&(e=C(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(C.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)C.d(r,t,function(n){return e[n]}.bind(null,t));return r},C.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return C.d(n,"a",n),n},C.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},C.p="/kinako/",C.oe=function(e){throw console.error(e),e},C.h=function(){return i};var A=window.webpackJsonp=window.webpackJsonp||[],M=A.push.bind(A);A.push=n,A=A.slice();for(var V=0;V<A.length;V++)n(A[V]);var W=M,z=(H.push([0,0]),r());n([[],{},0,[0,2,3,4,5]])}({"./.docz/app/db.json":function(e){e.exports={config:{title:"kinako",description:"A React Component to create presentations",menu:[],version:"0.0.2",repository:null,native:!1,codeSandbox:!1,themeConfig:{colors:{primary:"#fe9638"}},separator:"-",dest:"./docs",base:"/kinako",typescript:!0},props:[{key:"src/components/Page.tsx",value:[{description:"",displayName:"Page",methods:[],props:{isCentering:{defaultValue:null,description:"If set to true, content will be centered.",name:"isCentering",required:!1,type:{name:"boolean | undefined"}}}}]},{key:"src/components/Presentation.tsx",value:[{description:"",displayName:"Presentation",methods:[],props:{currentIndex:{defaultValue:{value:"1"},description:"Index of first page",name:"currentIndex",required:!1,type:{name:"number | undefined"}},aspect:{defaultValue:null,description:"aspect ratio {height, width}",name:"aspect",required:!0,type:{name:"{ height: number; width: number; }"}},backgroundColor:{defaultValue:null,description:"background color",name:"backgroundColor",required:!1,type:{name:"string | undefined"}},controllerColor:{defaultValue:null,description:"Color of prev/next button",name:"controllerColor",required:!1,type:{name:"string | undefined"}},controllerSize:{defaultValue:{value:"32"},description:"Size of prev/next button",name:"controllerSize",required:!1,type:{name:"number | undefined"}},transitionSpeed:{defaultValue:{value:"1"},description:"(seconds)",name:"transitionSpeed",required:!1,type:{name:"number | undefined"}},isShowPrintButton:{defaultValue:null,description:"If set to true, show button to call print().",name:"isShowPrintButton",required:!1,type:{name:"boolean | undefined"}}}}]},{key:"src/components/Wrapper.tsx",value:[{description:"",displayName:"Wrapper",methods:[],props:{width:{defaultValue:{value:"'100vw'"},description:"Width of wrapper",name:"width",required:!1,type:{name:"string | undefined"}},height:{defaultValue:{value:"'100vh'"},description:"Height of wrapper",name:"height",required:!1,type:{name:"string | undefined"}}}}]}],entries:[{key:"srcdocs/getstarted.mdx",value:{name:"1. Get Started",route:"/kinako/",id:"84cce0b1420e7275c39043bac2e5a8ba",filepath:"srcdocs/getstarted.mdx",link:"",slug:"srcdocs-getstarted",menu:"",headings:[{slug:"get-started",depth:1,value:"Get Started"},{slug:"installation",depth:2,value:"Installation"},{slug:"basic-usage",depth:2,value:"Basic Usage"}]}},{key:"srcdocs/components/Page/page.mdx",value:{name:"Page",route:"/kinako/components/Page",menu:"2. Components",id:"c1c8d58b825a93c78925531bc4e32825",filepath:"srcdocs/components/Page/page.mdx",link:"",slug:"srcdocs-components-page-page",headings:[{slug:"page",depth:1,value:"Page"},{slug:"props",depth:2,value:"Props"}]}},{key:"srcdocs/components/Presentations/presentation.mdx",value:{name:"Presentation",route:"/kinako/components/Presentation",menu:"2. Components",id:"db3e6a070eed5abb28a00642bb14dc52",filepath:"srcdocs/components/Presentations/presentation.mdx",link:"",slug:"srcdocs-components-presentations-presentation",headings:[{slug:"presentation",depth:1,value:"Presentation"},{slug:"props",depth:2,value:"Props"}]}},{key:"srcdocs/components/Wrapper/wrapper.mdx",value:{name:"Wrapper",route:"/kinako/components/Wrapper",menu:"2. Components",id:"7cb2c14531bd7d651633b40c49ff4ff4",filepath:"srcdocs/components/Wrapper/wrapper.mdx",link:"",slug:"srcdocs-components-wrapper-wrapper",headings:[{slug:"wrapper",depth:1,value:"Wrapper"},{slug:"props",depth:2,value:"Props"}]}}]}},"./.docz/app/index.jsx":function(e,n,r){"use strict";r.r(n);var t=r("./node_modules/react/index.js"),o=r.n(t),a=r("./node_modules/react-dom/index.js"),i=r.n(a),c=r("./node_modules/docz/dist/index.esm.js"),d=r("./node_modules/docz-theme-default/dist/index.esm.js"),s={"srcdocs/getstarted.mdx":function(){return Promise.all([r.e(0),r.e(5)]).then(r.bind(null,"./srcdocs/getstarted.mdx"))},"srcdocs/components/Page/page.mdx":function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"./srcdocs/components/Page/page.mdx"))},"srcdocs/components/Presentations/presentation.mdx":function(){return Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"./srcdocs/components/Presentations/presentation.mdx"))},"srcdocs/components/Wrapper/wrapper.mdx":function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"./srcdocs/components/Wrapper/wrapper.mdx"))}},p=r("./.docz/app/db.json"),u=function(){return o.a.createElement(d.a,{linkComponent:c.b,db:p},o.a.createElement(c.e,{imports:s}))},l=[],f=[],h=function(){return f.forEach(function(e){return e&&e()})},m=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;l.forEach(function(e){return e&&e()}),i.a.render(o.a.createElement(e,null),m,h)}(u)},0:function(e,n,r){e.exports=r("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.07485acae40b0f4a08fb.js.map