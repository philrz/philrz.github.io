"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[2522],{3905:function(e,r,a){a.d(r,{Zo:function(){return u},kt:function(){return f}});var t=a(7294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=t.createContext({}),p=function(e){var r=t.useContext(i),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},u=function(e){var r=p(e.components);return t.createElement(i.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),f=n,d=m["".concat(i,".").concat(f)]||m[f]||c[f]||o;return a?t.createElement(d,l(l({ref:r},u),{},{components:a})):t.createElement(d,l({ref:r},u))}));function f(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5149:function(e,r,a){a.r(r),a.d(r,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var t=a(7462),n=a(3366),o=(a(7294),a(3905)),l=["components"],s={},i="Operators",p={unversionedId:"language/operators/README",id:"version-v1.2.0/language/operators/README",title:"Operators",description:"---",source:"@site/versioned_docs/version-v1.2.0/language/operators/README.md",sourceDirName:"language/operators",slug:"/language/operators/",permalink:"/docs/language/operators/",editUrl:"https://github.com/brimdata/zed/tree/main/versioned_docs/version-v1.2.0/language/operators/README.md",tags:[],version:"v1.2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Conventions",permalink:"/docs/language/conventions"},next:{title:"assert",permalink:"/docs/language/operators/assert"}},u={},c=[],m={toc:c};function f(e){var r=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},m,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"operators"},"Operators"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Dataflow operators process a sequence of input values to create an output sequence\nand appear as the components of a dataflow pipeline."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/assert"},"assert")," - evaluate an assertion"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/combine"},"combine")," - combine parallel paths into a single output"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/cut"},"cut")," - extract subsets of record fields into new records"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/drop"},"drop")," - drop fields from record values"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/from"},"from")," - source data from pools, files, or URIs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/fork"},"fork")," - copy values to parallel paths"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/fuse"},"fuse")," - coerce all input values into a merged type"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/head"},"head")," - copy leading values of input sequence"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/join"},"join")," - combine data from two inputs using a join predicate"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/over"},"over")," - traverse nested values as a lateral query"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/put"},"put")," - add or modify fields of records"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/rename"},"rename")," - change the name of record fields"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/sample"},"sample")," - select one value of each shape"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/search"},"search")," - select values based on a search expression"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/sort"},"sort")," - sort values"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/summarize"},"summarize")," -  perform aggregations"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/switch"},"switch")," -  route values based on cases"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/tail"},"tail")," - copy trailing values of input sequence"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/uniq"},"uniq")," - deduplicate adjacent values"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/where"},"where")," - select values based on a Boolean expression"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/yield"},"yield")," - emit values from expressions")))}f.isMDXComponent=!0}}]);