"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[5356],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=c(t),d=a,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||o;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7215:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),i=["components"],p={},u=void 0,c={unversionedId:"language/functions/shape",id:"language/functions/shape",title:"shape",description:"Function",source:"@site/docs/language/functions/shape.md",sourceDirName:"language/functions",slug:"/language/functions/shape",permalink:"/docs/1.2.0/language/functions/shape",draft:!1,editUrl:"https://github.com/brimdata/zed/edit/main/docs/language/functions/shape.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rune_len",permalink:"/docs/1.2.0/language/functions/rune_len"},next:{title:"split",permalink:"/docs/1.2.0/language/functions/split"}},l={},s=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],f={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"function"},"Function"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"shape")," ","\u2014","  apply cast, fill, and order"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"shape(val: any, t: type) -> any\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"shape")," function applies the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/1.2.0/language/functions/cast"},"cast"),",\n",(0,o.kt)("a",{parentName:"p",href:"/docs/1.2.0/language/functions/fill"},"fill"),", and\n",(0,o.kt)("a",{parentName:"p",href:"/docs/1.2.0/language/functions/order"},"order")," functions to its input to provide an\noverall data shaping operation."),(0,o.kt)("p",null,"Note that ",(0,o.kt)("em",{parentName:"p"},"shape")," does not perform a ",(0,o.kt)("em",{parentName:"p"},"crop")," function so\nextra fields in the input are propagated to the output."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Shape input records")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{b:1,a:2}{a:3}{b:4,c:5}' | zq -z 'shape(this, <{a:int64,b:string}>)' -\n")),(0,o.kt)("p",null,"produces"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{a:2,b:"1"}\n{a:3,b:null(string)}\n{a:null(int64),b:"4",c:5}\n')))}d.isMDXComponent=!0}}]);