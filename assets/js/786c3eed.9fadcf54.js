"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[7805],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return m}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?t.createElement(f,i(i({ref:r},c),{},{components:n})):t.createElement(f,i({ref:r},c))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7155:function(e,r,n){n.r(r),n.d(r,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var t=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={},s=void 0,u={unversionedId:"language/functions/error",id:"version-v1.1.0/language/functions/error",title:"error",description:"Function",source:"@site/versioned_docs/version-v1.1.0/language/functions/error.md",sourceDirName:"language/functions",slug:"/language/functions/error",permalink:"/docs/v1.1.0/language/functions/error",editUrl:"https://github.com/brimdata/zed/edit/main/versioned_docs/version-v1.1.0/language/functions/error.md",tags:[],version:"v1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"crop",permalink:"/docs/v1.1.0/language/functions/crop"},next:{title:"every",permalink:"/docs/v1.1.0/language/functions/every"}},c={},p=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],d={toc:p};function m(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"function"},"Function"),(0,a.kt)("p",null,"\u2003"," ",(0,a.kt)("strong",{parentName:"p"},"error")," ","\u2014"," wrap a Zed value as an error"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"error(val: any) -> error\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"error")," function returns an error version of a Zed value.\nIt wraps any Zed value ",(0,a.kt)("inlineCode",{parentName:"p"},"val")," to turn it into an error type providing\na means to create structured and stacked errors."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Wrap a record as a structured error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{foo:\"foo\"}' | zq -z 'yield error({message:\"bad value\", value:this})' -\n")),(0,a.kt)("p",null,"=>"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'error({message:"bad value",value:{foo:"foo"}})\n')),(0,a.kt)("p",null,"Wrap any value as an error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1 \"foo\" [1,2,3]' | zq -z 'yield error(this)' -\n")),(0,a.kt)("p",null,"=>"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'error(1)\nerror("foo")\nerror([1,2,3])\n')),(0,a.kt)("p",null,'Test if a value is an error and show its type "kind":'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo 'error(\"exception\") \"exception\"' | zq -Z 'yield {this,err:is_error(this),kind:kind(this)}' -\n")),(0,a.kt)("p",null,"=>"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{\n    this: error("exception"),\n    err: true,\n    kind: "error"\n}\n{\n    this: "exception",\n    err: false,\n    kind: "primitive"\n}\n')),(0,a.kt)("p",null,"Comparison of a missing error results in a missing error even if they\nare the same missing errors so as to not allow field comparisons of two\nmissing fields to succeed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{}' | zq -z 'badfield:=x | yield badfield==error(\"missing\")' -\n")),(0,a.kt)("p",null,"=>"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'error("missing")\n')))}m.isMDXComponent=!0}}]);