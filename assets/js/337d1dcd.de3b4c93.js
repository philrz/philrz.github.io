"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[1340],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||l;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3460:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),i=["components"],o={},u=void 0,c={unversionedId:"language/functions/fill",id:"version-v1.2.0/language/functions/fill",title:"fill",description:"Function",source:"@site/versioned_docs/version-v1.2.0/language/functions/fill.md",sourceDirName:"language/functions",slug:"/language/functions/fill",permalink:"/docs/language/functions/fill",editUrl:"https://github.com/brimdata/zed/tree/v1.2.0/language/functions/fill.md",tags:[],version:"v1.2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"fields",permalink:"/docs/language/functions/fields"},next:{title:"flatten",permalink:"/docs/language/functions/flatten"}},p={},s=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],d={toc:s};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"function"},"Function"),(0,l.kt)("p",null,"\u2003"," ",(0,l.kt)("strong",{parentName:"p"},"fill")," ","\u2014"," add null values for missing record fields"),(0,l.kt)("h3",{id:"synopsis"},"Synopsis"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"fill(val: any, t: type) -> any\n")),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("em",{parentName:"p"},"fill")," function adds to the input record ",(0,l.kt)("inlineCode",{parentName:"p"},"val")," any fields that are\npresent in the output type ",(0,l.kt)("inlineCode",{parentName:"p"},"t")," but not in the input."),(0,l.kt)("p",null,"Filled fields are added with a ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," value.  Filling is useful when\nyou want to be sure that all fields in a schema are present in a record."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"val")," is not a record, it is returned unmodified."),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Fill a record")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1}' | zq -z 'fill(this, <{a:int64,b:string}>)' -\n")),(0,l.kt)("p",null,"produces"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{a:1,b:null(string)}\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Fill an array of records")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '[{a:1},{a:2}]' | zq -z 'fill(this, <[{a:int64,b:int64}]>)' -\n")),(0,l.kt)("p",null,"produces"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"[{a:1,b:null(int64)},{a:2,b:null(int64)}]\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Non-records are returned unmodified")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '10.0.0.1 1 \"foo\"' | zq -z 'fill(this, <{a:int64,b:int64}>)' -\n")),(0,l.kt)("p",null,"produces"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'10.0.0.1\n1\n"foo"\n')))}f.isMDXComponent=!0}}]);