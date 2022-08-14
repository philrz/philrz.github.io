"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[6824],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,d=f["".concat(i,".").concat(m)]||f[m]||c[m]||a;return r?n.createElement(d,p(p({ref:t},s),{},{components:r})):n.createElement(d,p({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var u=2;u<a;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6514:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),p=["components"],l={},i=void 0,u={unversionedId:"language/operators/fork",id:"language/operators/fork",title:"fork",description:"Operator",source:"@site/docs/language/operators/fork.md",sourceDirName:"language/operators",slug:"/language/operators/fork",permalink:"/docs/next/language/operators/fork",editUrl:"https://github.com/brimdata/zed/edit/main/docs/language/operators/fork.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"drop",permalink:"/docs/next/language/operators/drop"},next:{title:"from",permalink:"/docs/next/language/operators/from"}},s={},c=[{value:"Operator",id:"operator",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],f={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"operator"},"Operator"),(0,a.kt)("p",null,"\u2003"," ",(0,a.kt)("strong",{parentName:"p"},"fork")," ","\u2014"," copy values to parallel paths"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"fork (\n  => <leg>\n  => <leg>\n  ...\n)\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"fork")," operator copies each input value to multiple, parallel legs of\nthe dataflow path."),(0,a.kt)("p",null,"The output of a fork consists of multiple legs that must be merged.\nIf the downstream operator expects a single input, then the output legs are\nmerged with an automatically inserted ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/language/operators/combine"},"combine operator"),"."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Copy input to two paths and merge")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1 2' | zq -z 'fork (=>pass =>pass) | sort this' -\n")),(0,a.kt)("p",null,"=>"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"1\n1\n2\n2\n")))}m.isMDXComponent=!0}}]);