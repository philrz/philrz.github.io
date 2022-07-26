"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[8518],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(t),d=a,m=f["".concat(u,".").concat(d)]||f[d]||l[d]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8247:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={},u=void 0,p={unversionedId:"language/functions/parse_uri",id:"version-v1.1.0/language/functions/parse_uri",title:"parse_uri",description:"Function",source:"@site/versioned_docs/version-v1.1.0/language/functions/parse_uri.md",sourceDirName:"language/functions",slug:"/language/functions/parse_uri",permalink:"/docs/v1.1.0/language/functions/parse_uri",editUrl:"https://github.com/brimdata/zed/tree/v1.1.0/language/functions/parse_uri.md",tags:[],version:"v1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"order",permalink:"/docs/v1.1.0/language/functions/order"},next:{title:"parse_zson",permalink:"/docs/v1.1.0/language/functions/parse_zson"}},c={},l=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],f={toc:l};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"function"},"Function"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"parse_uri")," ","\u2014"," parse a string URI into a structured record"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"parse_uri(uri: string) -> record\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"parse_uri")," function parses the ",(0,o.kt)("inlineCode",{parentName:"p"},"uri")," argument that must have the form of a\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Uniform_Resource_Identifier"},"Universal Resource Identifier"),"\ninto a structured URI comprising the parsed components as a Zed record\nwith the following type signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{\n  scheme: string,\n  opaque: string,\n  user: string,\n  password: string,\n  host: string,\n  port: uint16,\n  path: string,\n  query: |{string:[string]}|,\n  fragment: string\n}\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '\"scheme://user:password@host:12345/path?a=1&a=2&b=3&c=#fragment\"' | zq -Z 'yield parse_uri(this)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{\n    scheme: "scheme",\n    opaque: null (string),\n    user: "user",\n    password: "password",\n    host: "host",\n    port: 12345 (uint16),\n    path: "/path",\n    query: |{\n        "a": [\n            "1",\n            "2"\n        ],\n        "b": [\n            "3"\n        ],\n        "c": [\n            ""\n        ]\n    }|,\n    fragment: "fragment"\n}\n')))}d.isMDXComponent=!0}}]);