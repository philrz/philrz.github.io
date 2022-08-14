"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[205],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=c(t),m=i,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return t?r.createElement(d,s(s({ref:n},u),{},{components:t})):r.createElement(d,s({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3138:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),s=["components"],a={},l=void 0,c={unversionedId:"language/functions/missing",id:"version-v1.1.0/language/functions/missing",title:"missing",description:"Function",source:"@site/versioned_docs/version-v1.1.0/language/functions/missing.md",sourceDirName:"language/functions",slug:"/language/functions/missing",permalink:"/docs/v1.1.0/language/functions/missing",editUrl:"https://github.com/brimdata/zed/edit/main/docs/language/functions/missing.md",tags:[],version:"v1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"lower",permalink:"/docs/v1.1.0/language/functions/lower"},next:{title:"nameof",permalink:"/docs/v1.1.0/language/functions/nameof"}},u={},p=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],f={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"function"},"Function"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"missing")," ","\u2014",' test for the "missing" error'),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"missing(val: any) -> bool\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"missing")," function returns true if its argument is ",(0,o.kt)("inlineCode",{parentName:"p"},'error("missing")'),"\nand false otherwise."),(0,o.kt)("p",null,"This function is often used to test if certain fields do not appear as\nexpected in a record, e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"missing(a)")," is true either when ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," is not a record\nor when ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," is a record and the field ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," is not present in ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),"."),(0,o.kt)("p",null,"It's also useful in shaping when applying conditional logic based on the\nabsence of certain fields:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"switch (\n  case missing(a) => ...\n  case missing(b) => ...\n  default => ...\n)\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{foo:10}' | zq -z 'yield {yes:missing(bar),no:missing(foo)}' -\necho '{foo:[1,2,3]}' | zq -z 'yield {yes:has(foo[3]),no:has(foo[0])}' -\necho '{foo:{bar:\"value\"}}' | zq -z 'yield {yes:missing(foo.baz),no:missing(foo.bar)}' -\necho '{foo:10}' | zq -z 'yield {yes:missing(bar+1),no:missing(foo+1)}' -\necho 1 | zq -z 'yield missing(bar)' -\necho '{x:error(\"missing\")}' | zq -z 'yield missing(x)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{yes:true,no:false}\n{yes:false,no:true}\n{yes:true,no:false}\n{yes:true,no:false}\ntrue\ntrue\n")))}m.isMDXComponent=!0}}]);