"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[3313],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7139:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],u={},c=void 0,l={unversionedId:"language/functions/now",id:"version-v1.2.0/language/functions/now",title:"now",description:"Function",source:"@site/versioned_docs/version-v1.2.0/language/functions/now.md",sourceDirName:"language/functions",slug:"/language/functions/now",permalink:"/docs/language/functions/now",editUrl:"https://github.com/brimdata/zed/edit/main/versioned_docs/version-v1.2.0/language/functions/now.md",tags:[],version:"v1.2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"network_of",permalink:"/docs/language/functions/network_of"},next:{title:"order",permalink:"/docs/language/functions/order"}},p={},s=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],f={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"function"},"Function"),(0,i.kt)("p",null,"\u2003"," ",(0,i.kt)("strong",{parentName:"p"},"now")," ","\u2014"," the current time"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"now() -> time\n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"now")," function takes no arguments and returns the current UTC time as a value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"time"),"."),(0,i.kt)("p",null,"This is useful to timestamp events in a data pipeline, e.g.,\nwhen generating errors that are marked with their time of occurrence:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"switch (\n  ...\n  default => yield error({ts:now(), ...})\n)\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"echo null | zq -z 'yield now()' -\n")),(0,i.kt)("p",null,"=>"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"2022-02-06T18:35:35.053843Z\n")),(0,i.kt)("p",null,"(at the time this document was written)"))}d.isMDXComponent=!0}}]);