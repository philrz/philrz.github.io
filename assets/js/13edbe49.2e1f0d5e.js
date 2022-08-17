"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[3583],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,y=f["".concat(l,".").concat(d)]||f[d]||c[d]||a;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4906:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],p={},l=void 0,u={unversionedId:"language/functions/typeof",id:"version-v1.1.0/language/functions/typeof",title:"typeof",description:"Function",source:"@site/versioned_docs/version-v1.1.0/language/functions/typeof.md",sourceDirName:"language/functions",slug:"/language/functions/typeof",permalink:"/docs/v1.1.0/language/functions/typeof",draft:!1,editUrl:"https://github.com/brimdata/zed/edit/main/docs/language/functions/typeof.md",tags:[],version:"v1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"typename",permalink:"/docs/v1.1.0/language/functions/typename"},next:{title:"typeunder",permalink:"/docs/v1.1.0/language/functions/typeunder"}},s={},c=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],f={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"function"},"Function"),(0,a.kt)("p",null,"\u2003"," ",(0,a.kt)("strong",{parentName:"p"},"typeof")," ","\u2014"," the type of a value"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"typeof(val: any) -> type\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"typeof")," function returns the ",(0,a.kt)("a",{parentName:"p",href:"/docs/v1.1.0/formats/zson#25-types"},"type")," of\nits argument ",(0,a.kt)("inlineCode",{parentName:"p"},"val"),".  Types in Zed are first class so the returned type is\nalso a Zed value.  The type of a type is type ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),"."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,"The types of various values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-command"},'echo  \'1 "foo" 10.0.0.1 [1,2,3] {s:"foo"} null error("missing")\' | zq -z \'yield typeof(this)\' -\n')),(0,a.kt)("p",null,"=>"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"<int64>\n<string>\n<ip>\n<[int64]>\n<{s:string}>\n<null>\n<error(string)>\n")),(0,a.kt)("p",null,"The type of a type is type ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo null | zq -z 'yield typeof(typeof(this))' -\n")),(0,a.kt)("p",null,"=>"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"<type>\n")))}d.isMDXComponent=!0}}]);