"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[6944],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(t),d=a,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||o;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7395:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),l=["components"],i={},u=void 0,c={unversionedId:"language/functions/unflatten",id:"version-v1.1.0/language/functions/unflatten",title:"unflatten",description:"Function",source:"@site/versioned_docs/version-v1.1.0/language/functions/unflatten.md",sourceDirName:"language/functions",slug:"/language/functions/unflatten",permalink:"/docs/v1.1.0/language/functions/unflatten",draft:!1,editUrl:"https://github.com/brimdata/zed/edit/main/docs/language/functions/unflatten.md",tags:[],version:"v1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"under",permalink:"/docs/v1.1.0/language/functions/under"},next:{title:"upper",permalink:"/docs/v1.1.0/language/functions/upper"}},p={},s=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],f={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"function"},"Function"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"unflatten")," ","\u2014"," transform an array of key/value records into a\nrecord."),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"unflatten(val: [{key:[string],value:any}) -> record\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"unflatten")," function converts the key/value records in array ",(0,o.kt)("inlineCode",{parentName:"p"},"val")," into\na single record. ",(0,o.kt)("em",{parentName:"p"},"unflatten")," is the inverse of ",(0,o.kt)("em",{parentName:"p"},"flatten"),", i.e., ",(0,o.kt)("inlineCode",{parentName:"p"},"unflatten(flatten(r))"),"\nwill produce a record identical to ",(0,o.kt)("inlineCode",{parentName:"p"},"r"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Simple:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '[{key:[\"a\"],value:1},{key:[\"b\"],value:2}]' | zq -z 'yield unflatten(this)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{a:1,b:2}\n")),(0,o.kt)("p",null,"Flatten to unflatten:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1,rm:2}' | zq -z 'over flatten(this) => (key[0] != \"rm\" | yield collect(this)) | yield unflatten(this)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{a:1}\n")))}d.isMDXComponent=!0}}]);