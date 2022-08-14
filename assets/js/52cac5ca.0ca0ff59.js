"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[7022],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),f=l,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||a;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3941:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var r=t(7462),l=t(3366),a=(t(7294),t(3905)),o=["components"],i={},u=void 0,p={unversionedId:"language/functions/len",id:"version-v1.1.0/language/functions/len",title:"len",description:"Function",source:"@site/versioned_docs/version-v1.1.0/language/functions/len.md",sourceDirName:"language/functions",slug:"/language/functions/len",permalink:"/docs/v1.1.0/language/functions/len",editUrl:"https://github.com/brimdata/zed/edit/main/docs/language/functions/len.md",tags:[],version:"v1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ksuid",permalink:"/docs/v1.1.0/language/functions/ksuid"},next:{title:"log",permalink:"/docs/v1.1.0/language/functions/log"}},c={},s=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Example:",id:"example",level:4}],d={toc:s};function f(e){var n=e.components,t=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"function"},"Function"),(0,a.kt)("p",null,"\u2003"," ",(0,a.kt)("strong",{parentName:"p"},"len")," ","\u2014"," the type-dependent length of a value"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"len(v: record|array|set|map|type|bytes|string|ip|net|error) -> int64\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"len")," function returns the length of its argument ",(0,a.kt)("inlineCode",{parentName:"p"},"val"),".\nThe semantics of this length depend on the value's type."),(0,a.kt)("p",null,"Supported types include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"record"),(0,a.kt)("li",{parentName:"ul"},"array"),(0,a.kt)("li",{parentName:"ul"},"set"),(0,a.kt)("li",{parentName:"ul"},"map"),(0,a.kt)("li",{parentName:"ul"},"error"),(0,a.kt)("li",{parentName:"ul"},"bytes"),(0,a.kt)("li",{parentName:"ul"},"string"),(0,a.kt)("li",{parentName:"ul"},"ip"),(0,a.kt)("li",{parentName:"ul"},"net"),(0,a.kt)("li",{parentName:"ul"},"type")),(0,a.kt)("h4",{id:"example"},"Example:"),(0,a.kt)("p",null,"Take the length of various types:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '[1,2,3] |[\"hello\"]| {a:1,b:2} \"hello\" 10.0.0.1 1' | zq -z 'yield {this,len:len(this)}' -\n")),(0,a.kt)("p",null,"=>"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{this:[1,2,3],len:3}\n{this:|["hello"]|,len:1}\n{this:{a:1,b:2},len:2}\n{this:"hello",len:5}\n{this:10.0.0.1,len:4}\n{this:1,len:error("len: bad type: int64")}\n')))}f.isMDXComponent=!0}}]);