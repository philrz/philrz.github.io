"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[6174],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return m}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),c=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=c(e.components);return t.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||a;return n?t.createElement(d,i(i({ref:r},l),{},{components:n})):t.createElement(d,i({ref:r},l))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3298:function(e,r,n){n.r(r),n.d(r,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var t=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},u=void 0,c={unversionedId:"language/functions/has_error",id:"version-v1.1.0/language/functions/has_error",title:"has_error",description:"Function",source:"@site/versioned_docs/version-v1.1.0/language/functions/has_error.md",sourceDirName:"language/functions",slug:"/language/functions/has_error",permalink:"/docs/v1.1.0/language/functions/has_error",editUrl:"https://github.com/brimdata/zed/edit/main/docs/language/functions/has_error.md",tags:[],version:"v1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"has",permalink:"/docs/v1.1.0/language/functions/has"},next:{title:"hex",permalink:"/docs/v1.1.0/language/functions/hex"}},l={},p=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],f={toc:p};function m(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"function"},"Function"),(0,a.kt)("p",null,"\u2003"," ",(0,a.kt)("strong",{parentName:"p"},"has_error")," ","\u2014"," test if a value is or contains an error"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"has_error(val: any) -> bool\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"has_error")," function returns true if its argument is or contains an error.\n",(0,a.kt)("em",{parentName:"p"},"has_error")," is different from ",(0,a.kt)("em",{parentName:"p"},"is_error")," in that ",(0,a.kt)("em",{parentName:"p"},"has_error")," will recurse\ninto value's leaves to determine if there is an error in the value."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:{b:\"foo\"}}' | zq -z 'yield has_error(this)' -\necho '{a:{b:\"foo\"}}' | zq -z 'a.x := a.y + 1 | yield has_error(this)' -\n")),(0,a.kt)("p",null,"=>"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"false\ntrue\n")))}m.isMDXComponent=!0}}]);