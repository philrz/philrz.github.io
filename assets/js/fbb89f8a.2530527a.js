"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[1121],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(t),u=o,f=p["".concat(l,".").concat(u)]||p[u]||c[u]||a;return t?r.createElement(f,i(i({ref:n},m),{},{components:t})):r.createElement(f,i({ref:n},m))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6392:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={sidebar_position:3,sidebar_label:"Commands"},l="Command Tooling",d={unversionedId:"commands/README",id:"version-v1.1.0/commands/README",title:"Command Tooling",description:"The Zed system is managed and queried with the zed command,",source:"@site/versioned_docs/version-v1.1.0/commands/README.md",sourceDirName:"commands",slug:"/commands/",permalink:"/docs/v1.1.0/commands/",editUrl:"https://github.com/brimdata/zed/tree/versioned_docs/version-v1.1.0/commands/README.md",tags:[],version:"v1.1.0",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Commands"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/v1.1.0/install"},next:{title:"zq",permalink:"/docs/v1.1.0/commands/zq"}},m={},c=[],p={toc:c};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"command-tooling"},"Command Tooling"),(0,a.kt)("p",null,"The Zed system is managed and queried with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/v1.1.0/commands/zed"},(0,a.kt)("inlineCode",{parentName:"a"},"zed")," command"),",\nwhich is organized into numerous subcommands like the familiar command patterns\nof ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectrl"),".\nBuilt-in help for the ",(0,a.kt)("inlineCode",{parentName:"p"},"zed")," command and all of its subcommands is always\naccessible with the ",(0,a.kt)("inlineCode",{parentName:"p"},"-h")," flag."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/docs/v1.1.0/commands/zq"},(0,a.kt)("inlineCode",{parentName:"a"},"zq")," command")," offers a convenient slice of ",(0,a.kt)("inlineCode",{parentName:"p"},"zed")," for running\nstand-alone, command-line queries on inputs from files, HTTP URLs, or S3.\n",(0,a.kt)("inlineCode",{parentName:"p"},"zq")," is like ",(0,a.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},(0,a.kt)("inlineCode",{parentName:"a"},"jq"))," but is easier and faster, utilizes the richer\nZed data model, and interoperates with a number of other formats beyond JSON.\nIf you don't need a Zed lake, you can install just the\nslimmer ",(0,a.kt)("inlineCode",{parentName:"p"},"zq")," command which omits lake support and dev tools."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"zq")," is always installed alongside ",(0,a.kt)("inlineCode",{parentName:"p"},"zed"),".  You might find yourself mixing and\nmatching ",(0,a.kt)("inlineCode",{parentName:"p"},"zed")," lake queries with ",(0,a.kt)("inlineCode",{parentName:"p"},"zq")," local queries and stitching them\nall together with Unix pipelines."))}u.isMDXComponent=!0}}]);