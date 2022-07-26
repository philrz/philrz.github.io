"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[8329],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2875:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={},u=void 0,l={unversionedId:"language/functions/every",id:"language/functions/every",title:"every",description:"Function",source:"@site/docs/language/functions/every.md",sourceDirName:"language/functions",slug:"/language/functions/every",permalink:"/docs/next/language/functions/every",editUrl:"https://github.com/brimdata/zed/tree/main/docs/language/functions/every.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"error",permalink:"/docs/next/language/functions/error"},next:{title:"fields",permalink:"/docs/next/language/functions/fields"}},c={},p=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"function"},"Function"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"every")," ","\u2014"," bucket ",(0,o.kt)("inlineCode",{parentName:"p"},"ts")," using a duration"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"every(d: duration) -> time\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"every")," function is a shortcut for ",(0,o.kt)("inlineCode",{parentName:"p"},"bucket(ts, d)"),".\nThis provides a convenient binning function for aggregations\nwhen analyzing time-series data like logs that have a ",(0,o.kt)("inlineCode",{parentName:"p"},"ts")," field."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Operate on a sequence of times:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{ts:2021-02-01T12:00:01Z}' | zq -z 'yield {ts,val:0},{ts:ts+1s},{ts:ts+2h2s} | yield every(1h) | sort' -\n")),(0,o.kt)("p",null,"->"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"2021-02-01T12:00:00Z\n2021-02-01T12:00:00Z\n2021-02-01T14:00:00Z\n")),(0,o.kt)("p",null,"Use as a group-by key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{ts:2021-02-01T12:00:01Z}' | zq -z 'yield {ts,val:1},{ts:ts+1s,val:2},{ts:ts+2h2s,val:5} | sum(val) by every(1h) | sort' -\n")),(0,o.kt)("p",null,"->"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{ts:2021-02-01T12:00:00Z,sum:3}\n{ts:2021-02-01T14:00:00Z,sum:5}\n")))}f.isMDXComponent=!0}}]);