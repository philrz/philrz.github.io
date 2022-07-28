"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[2522],{3905:function(e,a,r){r.d(a,{Zo:function(){return u},kt:function(){return f}});var t=r(7294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=t.createContext({}),p=function(e){var a=t.useContext(i),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},u=function(e){var a=p(e.components);return t.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),f=n,d=m["".concat(i,".").concat(f)]||m[f]||c[f]||o;return r?t.createElement(d,l(l({ref:a},u),{},{components:r})):t.createElement(d,l({ref:a},u))}));function f(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5149:function(e,a,r){r.r(a),r.d(a,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var t=r(7462),n=r(3366),o=(r(7294),r(3905)),l=["components"],s={},i="Operators",p={unversionedId:"language/operators/README",id:"version-v1.2.0/language/operators/README",title:"Operators",description:"---",source:"@site/versioned_docs/version-v1.2.0/language/operators/README.md",sourceDirName:"language/operators",slug:"/language/operators/",permalink:"/docs/language/operators/",editUrl:"https://github.com/brimdata/zed/edit/main/versioned_docs/version-v1.2.0/language/operators/README.md",tags:[],version:"v1.2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Conventions",permalink:"/docs/language/conventions"},next:{title:"assert",permalink:"/docs/language/operators/assert"}},u={},c=[],m={toc:c};function f(e){var a=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},m,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"operators"},"Operators"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Dataflow operators process a sequence of input values to create an output sequence\nand appear as the components of a dataflow pipeline."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/assert"},"assert")," - evaluate an assertion"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/combine"},"combine")," - combine parallel paths into a single output"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/cut"},"cut")," - extract subsets of record fields into new records"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/drop"},"drop")," - drop fields from record values"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/from"},"from")," - source data from pools, files, or URIs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/fork"},"fork")," - copy values to parallel paths"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/fuse"},"fuse")," - coerce all input values into a merged type"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/head"},"head")," - copy leading values of input sequence"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/join"},"join")," - combine data from two inputs using a join predicate"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/over"},"over")," - traverse nested values as a lateral query"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/put"},"put")," - add or modify fields of records"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/rename"},"rename")," - change the name of record fields"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/sample"},"sample")," - select one value of each shape"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/search"},"search")," - select values based on a search expression"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/sort"},"sort")," - sort values"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/summarize"},"summarize")," -  perform aggregations"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/switch"},"switch")," -  route values based on cases"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/tail"},"tail")," - copy trailing values of input sequence"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/uniq"},"uniq")," - deduplicate adjacent values"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/where"},"where")," - select values based on a Boolean expression"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/language/operators/yield"},"yield")," - emit values from expressions")))}f.isMDXComponent=!0}}]);