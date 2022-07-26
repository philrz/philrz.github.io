"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[1764],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4202:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s=void 0,u={unversionedId:"language/functions/is",id:"language/functions/is",title:"is",description:"Function",source:"@site/docs/language/functions/is.md",sourceDirName:"language/functions",slug:"/language/functions/is",permalink:"/docs/next/language/functions/is",editUrl:"https://github.com/brimdata/zed/tree/current/language/functions/is.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"hex",permalink:"/docs/next/language/functions/hex"},next:{title:"is_error",permalink:"/docs/next/language/functions/is_error"}},p={},c=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"function"},"Function"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"is")," ","\u2014"," test a value's type"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"is(t: type) -> bool\nis(val: any, t: type) -> bool\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"is")," function returns true if the argument ",(0,o.kt)("inlineCode",{parentName:"p"},"val")," is of type ",(0,o.kt)("inlineCode",{parentName:"p"},"t"),". If ",(0,o.kt)("inlineCode",{parentName:"p"},"val"),"\nis omitted, it defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),".  The ",(0,o.kt)("em",{parentName:"p"},"is")," function is shorthand for ",(0,o.kt)("inlineCode",{parentName:"p"},"typeof(val)==t"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Test simple types:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1.' | zq -z 'yield {yes:is(<float64>),no:is(<int64>)}' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{yes:true,no:false}\n")),(0,o.kt)("p",null,'Test for a given input\'s record type or "shape":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{s:\"hello\"}' | zq -z 'yield is(<{s:string}>)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"true\n")),(0,o.kt)("p",null,"If you test a named type with it's underlying type, the types are different,\nbut if you use the type name or typeunder function, there is a match:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{s:\"hello\"}(=foo)' | zq -z 'yield is(<{s:string}>)' -\necho '{s:\"hello\"}(=foo)' | zq -z 'yield is(<foo>)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"false\ntrue\n")),(0,o.kt)("p",null,"To test the underlying type, just use ",(0,o.kt)("inlineCode",{parentName:"p"},"=="),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{s:\"hello\"}(=foo)' | zq -z 'yield typeunder(this)==<{s:string}>' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"true\n")))}d.isMDXComponent=!0}}]);