"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[4012],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(d,s(s({ref:t},l),{},{components:r})):n.createElement(d,s({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2624:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),s=["components"],a={sidebar_position:5,sidebar_label:"Compression"},c="ZNG Compression Types",p={unversionedId:"formats/compression",id:"version-v1.1.0/formats/compression",title:"ZNG Compression Types",description:"This document specifies values for the `` byte of a",source:"@site/versioned_docs/version-v1.1.0/formats/compression.md",sourceDirName:"formats",slug:"/formats/compression",permalink:"/docs/v1.1.0/formats/compression",editUrl:"https://github.com/brimdata/zed/tree/versioned_docs/version-v1.1.0/formats/compression.md",tags:[],version:"v1.1.0",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Compression"},sidebar:"tutorialSidebar",previous:{title:"ZJSON",permalink:"/docs/v1.1.0/formats/zjson"},next:{title:"API",permalink:"/docs/v1.1.0/lake/api"}},l={},u=[],m={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"zng-compression-types"},"ZNG Compression Types"),(0,i.kt)("p",null,"This document specifies values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"<format>")," byte of a\n",(0,i.kt)("a",{parentName:"p",href:"/docs/v1.1.0/formats/zng#2-the-zng-format"},"ZNG compressed value message block"),"\nand the corresponding algorithms for the ",(0,i.kt)("inlineCode",{parentName:"p"},"<compressed paylod>")," byte sequence."),(0,i.kt)("p",null,"As new compression algorithms are specified, they will be documented\nhere without any need to change the ZNG specification."),(0,i.kt)("p",null,"Of the 256 possible values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"<format>")," byte, only type ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," is currently\ndefined and specifies that ",(0,i.kt)("inlineCode",{parentName:"p"},"<compressed payload>")," contains an\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lz4/lz4/blob/master/doc/lz4_Block_format.md"},"LZ4 block"),"."))}f.isMDXComponent=!0}}]);