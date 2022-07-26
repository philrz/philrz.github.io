"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[4852],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(t),d=a,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9486:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={},l=void 0,c={unversionedId:"language/functions/has",id:"version-v1.2.0/language/functions/has",title:"has",description:"Function",source:"@site/versioned_docs/version-v1.2.0/language/functions/has.md",sourceDirName:"language/functions",slug:"/language/functions/has",permalink:"/docs/language/functions/has",editUrl:"https://github.com/brimdata/zed/tree/v1.2.0/language/functions/has.md",tags:[],version:"v1.2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"grep",permalink:"/docs/language/functions/grep"},next:{title:"has_error",permalink:"/docs/language/functions/has_error"}},u={},p=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],f={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"function"},"Function"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"has")," ","\u2014"," test existence of values"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"has(val: any [, ... val: any]) -> bool\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"has")," function returns false if any of its arguments are ",(0,o.kt)("inlineCode",{parentName:"p"},'error("missing")'),"\nand otherwise returns true.\n",(0,o.kt)("inlineCode",{parentName:"p"},"has(e)")," is a shortcut for ",(0,o.kt)("a",{parentName:"p",href:"/docs/language/functions/missing"},(0,o.kt)("inlineCode",{parentName:"a"},"!missing(e)")),"."),(0,o.kt)("p",null,"This function is most often used to test the existence of certain fields in an\nexpected record, e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"has(a,b)")," is true when ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," is a record and has\nthe fields ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"b"),", provided their values are not ",(0,o.kt)("inlineCode",{parentName:"p"},'error("missing")'),"."),(0,o.kt)("p",null,"It's also useful in shaping when applying conditional logic based on the\npresence of certain fields:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"switch (\n  case has(a) => ...\n  case has(b) => ...\n  default => ...\n)\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{foo:10}' | zq -z 'yield {yes:has(foo),no:has(bar)}' -\necho '{foo:[1,2,3]}' | zq -z 'yield {yes: has(foo[0]),no:has(foo[3])}' -\necho '{foo:{bar:\"value\"}}' | zq -z 'yield {yes:has(foo.bar),no:has(foo.baz)}' -\necho '{foo:10}' | zq -z 'yield {yes:has(foo+1),no:has(bar+1)}' -\necho 1 | zq -z 'yield has(bar)' -\necho '{x:error(\"missing\")}' | zq -z 'yield has(x)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{yes:true,no:false}\n{yes:true,no:false}\n{yes:true,no:false}\n{yes:true,no:false}\nfalse\nfalse\n")))}d.isMDXComponent=!0}}]);