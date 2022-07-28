"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[8520],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4418:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={},l=void 0,c={unversionedId:"language/functions/crop",id:"version-v1.1.0/language/functions/crop",title:"crop",description:"Function",source:"@site/versioned_docs/version-v1.1.0/language/functions/crop.md",sourceDirName:"language/functions",slug:"/language/functions/crop",permalink:"/docs/v1.1.0/language/functions/crop",editUrl:"https://github.com/brimdata/zed/edit/main/versioned_docs/version-v1.1.0/language/functions/crop.md",tags:[],version:"v1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"compare",permalink:"/docs/v1.1.0/language/functions/compare"},next:{title:"error",permalink:"/docs/v1.1.0/language/functions/error"}},u={},s=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"function"},"Function"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"crop")," ","\u2014"," remove fields from input value that are missing in a specified type"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"crop(val: any, t: type) -> any\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"crop")," function operates on record values (or records within a nested value)\nand returns a result such that any fields that are present in ",(0,o.kt)("inlineCode",{parentName:"p"},"val")," but not in\nrecord type ",(0,o.kt)("inlineCode",{parentName:"p"},"t"),' are removed.\nCropping is a useful when you want records to "fit" a schema tightly.'),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"val")," is a record (or if any of its nested values is a record):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"absent fields are ignored and omitted from the result,"),(0,o.kt)("li",{parentName:"ul"},"fields are matched by name and are order independent and the ",(0,o.kt)("em",{parentName:"li"},"input")," order is retained, and"),(0,o.kt)("li",{parentName:"ul"},"leaf types are ignored, i.e., no casting occurs.")),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"val")," is not a record, it is returned unmodified."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Crop a record")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1,b:2}' | zq -z 'crop(this, <{a:int64}>)' -\n")),(0,o.kt)("p",null,"produces"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{a:1}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Crop an array of records")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '[{a:1,b:2},{a:3,b:4}]' | zq -z 'crop(this, <[{a:int64}]>)' -\n")),(0,o.kt)("p",null,"produces"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"[{a:1},{a:3}]\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Cropped primitives are returned unmodified")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '10.0.0.1 1 \"foo\"' | zq -z 'crop(this, <{a:int64}>)' -\n")),(0,o.kt)("p",null,"produces"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'10.0.0.1\n1\n"foo"\n')))}m.isMDXComponent=!0}}]);