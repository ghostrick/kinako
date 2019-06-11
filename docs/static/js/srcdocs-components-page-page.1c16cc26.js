(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/index.tsx":function(e,t,n){"use strict";var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),r=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),o=function(e){var t=e.children,n=e.isCentering;return Object(r.b)("section",{css:Object(i.a)({},n?{display:"flex",justifyContent:"center",alignItems:"center"}:{},{height:"100%",width:"100%",zIndex:0,overflow:"hidden",pageBreakBefore:"always"})},t)},a=o;o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Page",filename:"src/components/Page.tsx"}});var s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),c=n("./node_modules/react/index.js"),l=n("./node_modules/react-feather/dist/index.js"),d=function(e){var t=e.aspect,n=e.children,i=e.backgroundColor,o=e.controllerColor,a=e.controllerSize,d=e.currentIndex,b=e.transitionSpeed,p=e.isShowPrintButton,u=Object(c.useState)(1),m=Object(s.a)(u,2),f=m[0],j=m[1],h=Object(c.useMemo)(function(){return Array.isArray(n)?n.length:1},[n]),g=Object(c.useMemo)(function(){return h===f},[f]);if(Object(c.useEffect)(function(){void 0!==d&&j(d)},[d]),f>h||f<1)throw"Page does not exist";var O={position:"absolute",bottom:4,right:8,listStyle:"none",display:"flex",alignItems:"center",justifyContent:"center",color:o||"#000","> li":{cursor:"pointer",padding:"0 6px","> svg":{width:a||32,height:a||32}},"@media print":{display:"none"}},x=n.map(function(e,n){return Object(r.b)("div",{key:n,css:{minWidth:"100%",width:"100%",height:"auto",position:"relative",pageBreakAfter:"always","&:after":{content:'""',paddingTop:t.height/t.width*100+"%",display:"block"},"> *":{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:i||"#fff"}}},e)});return Object(r.b)("div",{css:{overflow:"hidden",position:"relative",width:"100%",height:"max-content","@media print":{overflow:"hidden"}}},Object(r.b)(r.a,{styles:{"@media print":{"@page":{margin:0,size:"".concat(t.width,"in ").concat(t.height,"in")},"*":{"-webkit-print-color-adjust":"exact","page-break-after":"avoid"}}}}),Object(r.b)("main",{css:{display:"flex",position:"relative",left:100*(f-1)*-1+"%",transition:"all ".concat(void 0===b?1:b,"s"),"@media print":{left:0,display:"block"}}},x),Object(r.b)("ul",{css:O},p&&Object(r.b)("li",null,Object(r.b)(l.Download,{onClick:print})),Object(r.b)("li",{onClick:function(){return f>1&&j(f-1)},css:f<2?{opacity:.3}:{}},Object(r.b)(l.ChevronLeft,null)),Object(r.b)("li",{onClick:function(){return!g&&j(f+1)},css:g?{opacity:.3}:{}},Object(r.b)(l.ChevronRight,null))))},b=d;d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Presentation",filename:"src/components/Presentation.tsx"}});var p=function(e){var t=e.width,n=e.height,i=e.children,o={width:t||"100vw",height:n||"100vh",background:"#222",display:"flex",justifyContent:"center",alignItems:"center","> *":{maxWidth:"100%",maxHeight:"100%"},"@media print":{width:"auto",height:"auto",display:"block","> *":{maxWidth:"none",maxHeight:"none"}}};return Object(r.b)("div",{css:o},i)},u=p;p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Wrapper",filename:"src/components/Wrapper.tsx"}}),n.d(t,"a",function(){return a}),n.d(t,"b",function(){return b}),n.d(t,"c",function(){return u}),"undefined"!==typeof Page&&Page&&Page===Object(Page)&&Object.isExtensible(Page)&&Object.defineProperty(Page,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Page",filename:"src/index.tsx"}}),"undefined"!==typeof Presentation&&Presentation&&Presentation===Object(Presentation)&&Object.isExtensible(Presentation)&&Object.defineProperty(Presentation,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Presentation",filename:"src/index.tsx"}}),"undefined"!==typeof Wrapper&&Wrapper&&Wrapper===Object(Wrapper)&&Object.isExtensible(Wrapper)&&Object.defineProperty(Wrapper,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Wrapper",filename:"src/index.tsx"}})},"./srcdocs/components/Page/page.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return l});var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),o=n("./node_modules/docz/dist/index.esm.js"),a=n("./src/index.tsx"),s={},c="wrapper";function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(c,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"page"},"Page"),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)(o.d,{of:a.a,mdxType:"Props"}))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"srcdocs/components/Page/page.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=srcdocs-components-page-page.07485acae40b0f4a08fb.js.map