"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[1169],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7097:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={},p=void 0,u={unversionedId:"language/operators/tail",id:"version-v1.1.0/language/operators/tail",title:"tail",description:"Operator",source:"@site/versioned_docs/version-v1.1.0/language/operators/tail.md",sourceDirName:"language/operators",slug:"/language/operators/tail",permalink:"/docs/v1.1.0/language/operators/tail",editUrl:"https://github.com/brimdata/zed/tree/versioned_docs/version-v1.1.0/language/operators/tail.md",tags:[],version:"v1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"switch",permalink:"/docs/v1.1.0/language/operators/switch"},next:{title:"uniq",permalink:"/docs/v1.1.0/language/operators/uniq"}},s={},c=[{value:"Operator",id:"operator",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],d={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"operator"},"Operator"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"tail")," ","\u2014"," copy trailing values of input sequence"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tail [ n ]\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"tail")," operator copies the last ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," values from its input to its output\nand ends the sequence thereafter.  ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," must be an integer."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Grab last two values of arbitrary sequence")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1 \"foo\" [1,2,3]' | zq -z 'tail 2' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'"foo"\n[1,2,3]\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Grab the last record of a record sequence")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},'echo \'{a:"hello"}{b:"world"}\' | zq -z tail -\n')),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{b:"world"}\n')))}m.isMDXComponent=!0}}]);