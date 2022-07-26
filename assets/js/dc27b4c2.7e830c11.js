"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[7763],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,p(p({ref:t},u),{},{components:r})):n.createElement(f,p({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var i=2;i<o;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4546:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),p=["components"],l={},s=void 0,i={unversionedId:"language/operators/sample",id:"version-v1.1.0/language/operators/sample",title:"sample",description:"Operator",source:"@site/versioned_docs/version-v1.1.0/language/operators/sample.md",sourceDirName:"language/operators",slug:"/language/operators/sample",permalink:"/docs/v1.1.0/language/operators/sample",editUrl:"https://github.com/brimdata/zed/tree/v1.1.0/language/operators/sample.md",tags:[],version:"v1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rename",permalink:"/docs/v1.1.0/language/operators/rename"},next:{title:"search",permalink:"/docs/v1.1.0/language/operators/search"}},u={},c=[{value:"Operator",id:"operator",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],m={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"operator"},"Operator"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"sample")," ","\u2014"," select one value of each shape"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sample [<expr>]\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"sample")," operator is a syntactic shortcut for"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"val:=any(<expr>) by typeof(<expr>) | yield val\n")),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"<expr>")," is not provided, ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," is used."),(0,o.kt)("p",null,"In other words, ",(0,o.kt)("inlineCode",{parentName:"p"},"sample")," produces one value of each type in the input.\nThis is useful for data exploration when you want to see the shapes\nof data and some sample data in a data set without having to sift\nthrough it all to slice and dice it."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"A simple sample")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1 2 3 \"foo\" \"bar\" 10.0.0.1 10.0.0.2' | zq -z 'sample | sort this' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'1\n10.0.0.1\n"foo"\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Sampling record shapes")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},'echo \'{a:1}{a:2}{s:"foo"}{s:"bar"}{a:3,s:"baz"}\' | zq -z \'sample | sort a\' -\n')),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{a:1}\n{a:3,s:"baz"}\n{s:"foo"}\n')))}d.isMDXComponent=!0}}]);