"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[9181],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(t),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1872:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={},c=void 0,u={unversionedId:"language/functions/flatten",id:"version-v1.2.0/language/functions/flatten",title:"flatten",description:"Function",source:"@site/versioned_docs/version-v1.2.0/language/functions/flatten.md",sourceDirName:"language/functions",slug:"/language/functions/flatten",permalink:"/docs/language/functions/flatten",editUrl:"https://github.com/brimdata/zed/edit/main/docs/versioned_docs/version-v1.2.0/language/functions/flatten.md",tags:[],version:"v1.2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"fill",permalink:"/docs/language/functions/fill"},next:{title:"floor",permalink:"/docs/language/functions/floor"}},s={},p=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],f={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"function"},"Function"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"flatten")," ","\u2014"," transform a record into a flattened array."),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"flatten(val: record) -> [{key:[string],value:<any>}]\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"flatten")," function returns an array of records ",(0,o.kt)("inlineCode",{parentName:"p"},"[{key:[string],value:<any>}]"),"\nwhere ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," is a string array of the path of each record field of ",(0,o.kt)("inlineCode",{parentName:"p"},"val")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"value")," is the corresponding value of that field.\nIf there are multiple types for the leaf values in ",(0,o.kt)("inlineCode",{parentName:"p"},"val"),", then the array value\ninner type is a union of the record types present."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1,b:{c:\"foo\"}}' | zq -z 'yield flatten(this)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'[{key:["a"],value:1},{key:["b","c"],value:"foo"}]\n')))}d.isMDXComponent=!0}}]);