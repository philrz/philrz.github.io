"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[5386],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=l(n),f=a,d=g["".concat(i,".").concat(f)]||g[f]||c[f]||o;return n?r.createElement(d,u(u({ref:t},p),{},{components:n})):r.createElement(d,u({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,u[1]=s;for(var l=2;l<o;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2665:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),u=["components"],s={},i=void 0,l={unversionedId:"language/aggregates/fuse",id:"version-v1.1.0/language/aggregates/fuse",title:"fuse",description:"Aggregate Function",source:"@site/versioned_docs/version-v1.1.0/language/aggregates/fuse.md",sourceDirName:"language/aggregates",slug:"/language/aggregates/fuse",permalink:"/docs/v1.1.0/language/aggregates/fuse",editUrl:"https://github.com/brimdata/zed/edit/main/docs/versioned_docs/version-v1.1.0/language/aggregates/fuse.md",tags:[],version:"v1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dcount",permalink:"/docs/v1.1.0/language/aggregates/dcount"},next:{title:"max",permalink:"/docs/v1.1.0/language/aggregates/max"}},p={},c=[{value:"Aggregate Function",id:"aggregate-function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],g={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"aggregate-function"},"Aggregate Function"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"fuse")," ","\u2014"," compute a fused type of input values"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"fuse(any) -> type\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"fuse")," aggregate function applies ",(0,o.kt)("a",{parentName:"p",href:"/docs/v1.1.0/language/#type-fusion"},"type fusion"),"\nto its input and returns the fused type."),(0,o.kt)("p",null,"This aggregation is useful with group-by for data exploration and discovery",(0,o.kt)("br",{parentName:"p"}),"\n","when searching for shaping rules to cluster a large number of varied input\ntypes to a smaller number of fused types each from a set of interrelated types."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Fuse two records:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1,b:2}{a:2,b:\"foo\"}' | zq -z 'fuse(this)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{fuse:<{a:int64,b:(int64,string)}>}\n")),(0,o.kt)("p",null,"Fuse records with a group-by key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},'echo \'{a:1,b:"bar"}{a:2.1,b:"foo"}{a:3,b:"bar"}\' | zq -z \'fuse(this) by b | sort\' -\n')),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{b:"bar",fuse:<{a:int64,b:string}>}\n{b:"foo",fuse:<{a:float64,b:string}>}\n')))}f.isMDXComponent=!0}}]);