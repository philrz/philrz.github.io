"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[7840],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=p(n),m=l,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2694:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),o=["components"],i={},u=void 0,p={unversionedId:"language/functions/len",id:"language/functions/len",title:"len",description:"Function",source:"@site/docs/language/functions/len.md",sourceDirName:"language/functions",slug:"/language/functions/len",permalink:"/docs/next/language/functions/len",editUrl:"https://github.com/brimdata/zed/tree/current/language/functions/len.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ksuid",permalink:"/docs/next/language/functions/ksuid"},next:{title:"log",permalink:"/docs/next/language/functions/log"}},c={},s=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Example:",id:"example",level:4}],f={toc:s};function m(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"function"},"Function"),(0,a.kt)("p",null,"\u2003"," ",(0,a.kt)("strong",{parentName:"p"},"len")," ","\u2014"," the type-dependent length of a value"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"len(v: record|array|set|map|type|bytes|string|ip|net|error) -> int64\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"len")," function returns the length of its argument ",(0,a.kt)("inlineCode",{parentName:"p"},"val"),".\nThe semantics of this length depend on the value's type."),(0,a.kt)("p",null,"Supported types include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"record"),(0,a.kt)("li",{parentName:"ul"},"array"),(0,a.kt)("li",{parentName:"ul"},"set"),(0,a.kt)("li",{parentName:"ul"},"map"),(0,a.kt)("li",{parentName:"ul"},"error"),(0,a.kt)("li",{parentName:"ul"},"bytes"),(0,a.kt)("li",{parentName:"ul"},"string"),(0,a.kt)("li",{parentName:"ul"},"ip"),(0,a.kt)("li",{parentName:"ul"},"net"),(0,a.kt)("li",{parentName:"ul"},"type")),(0,a.kt)("h4",{id:"example"},"Example:"),(0,a.kt)("p",null,"Take the length of various types:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '[1,2,3] |[\"hello\"]| {a:1,b:2} \"hello\" 10.0.0.1 1' | zq -z 'yield {this,len:len(this)}' -\n")),(0,a.kt)("p",null,"=>"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{this:[1,2,3],len:3}\n{this:|["hello"]|,len:1}\n{this:{a:1,b:2},len:2}\n{this:"hello",len:5}\n{this:10.0.0.1,len:4}\n{this:1,len:error("len: bad type: int64")}\n')))}m.isMDXComponent=!0}}]);