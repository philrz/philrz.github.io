"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[4128],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,g=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4177:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],p={},i=void 0,s={unversionedId:"language/operators/where",id:"version-v1.2.0/language/operators/where",title:"where",description:"Operator",source:"@site/versioned_docs/version-v1.2.0/language/operators/where.md",sourceDirName:"language/operators",slug:"/language/operators/where",permalink:"/docs/language/operators/where",editUrl:"https://github.com/brimdata/zed/tree/v1.2.0/language/operators/where.md",tags:[],version:"v1.2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"uniq",permalink:"/docs/language/operators/uniq"},next:{title:"yield",permalink:"/docs/language/operators/yield"}},u={},c=[{value:"Operator",id:"operator",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],m={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"operator"},"Operator"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"where")," ","\u2014"," select values based on a Boolean expression"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[where] <expr>\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"where")," operator filters its input by applying a Boolean expression ",(0,o.kt)("inlineCode",{parentName:"p"},"<expr>"),"\nto each input value and dropping each value for which the expression evaluates\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," or to an error."),(0,o.kt)("p",null,'The "where" keyword requires a regular Zed expression and does not support\n',(0,o.kt)("a",{parentName:"p",href:"/docs/language/#search-expressions"},"search expressions"),".  Use the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/language/operators/search"},"search operator")," if you want search syntax."),(0,o.kt)("p",null,'When Zed queries are run interactively, it is highly convenient to be able to omit\nthe "where" keyword, but when where filters appear in Zed source files,\nit is good practice to include the optional keyword.'),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"An arithmetic comparison")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1 2 3' | zq -z 'where this >= 2' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"2\n3\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'The "where" keyword may be dropped')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1 2 3' | zq -z 'this >= 2' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"2\n3\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"A filter with Boolean logic")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1 2 3' | zq -z 'where this >= 2 AND this <= 2' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"2\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Boolean functions may be called")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1 \"foo\" 10.0.0.1' | zq -z 'where is(<int64>)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"1\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Boolean functions with Boolean logic")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1 \"foo\" 10.0.0.1' | zq -z 'where is(<int64>) or is(<ip>)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"1\n10.0.0.1\n")))}d.isMDXComponent=!0}}]);