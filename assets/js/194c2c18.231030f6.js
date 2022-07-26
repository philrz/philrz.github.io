"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[3670],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8023:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={sidebar_position:2,sidebar_label:"Conventions"},s="Type Conventions",c={unversionedId:"language/conventions",id:"version-v1.1.0/language/conventions",title:"Type Conventions",description:"Arguments to function and input values to operators are all dynamically typed,",source:"@site/versioned_docs/version-v1.1.0/language/conventions.md",sourceDirName:"language",slug:"/language/conventions",permalink:"/docs/v1.1.0/language/conventions",editUrl:"https://github.com/brimdata/zed/tree/versioned_docs/version-v1.1.0/language/conventions.md",tags:[],version:"v1.1.0",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Conventions"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/v1.1.0/language/overview"},next:{title:"Operators",permalink:"/docs/v1.1.0/language/operators/"}},u={},p=[],d={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"type-conventions"},"Type Conventions"),(0,a.kt)("p",null,"Arguments to function and input values to operators are all dynamically typed,\nyet certain functions expect certain data types or classes of data types.\nTo this end, the function and operator prototypes include a number\nof type classes as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"any")," - any Zed data type"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"float")," - any floating point Zed type"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"int")," - any signd or ungigned Zed integer type"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"number")," - either float or int")),(0,a.kt)("p",null,'Note that there is no "any" type in Zed as all super-structured data is\ncomprehensively typed; "any" here simply refers to a value that is allowed\nto take on any Zed type.'))}f.isMDXComponent=!0}}]);