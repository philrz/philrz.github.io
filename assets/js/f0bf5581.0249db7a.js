"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[5043],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||i[d]||o;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8808:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return i}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],p={},s=void 0,c={unversionedId:"language/operators/search",id:"version-v1.2.0/language/operators/search",title:"search",description:"Operator",source:"@site/versioned_docs/version-v1.2.0/language/operators/search.md",sourceDirName:"language/operators",slug:"/language/operators/search",permalink:"/docs/language/operators/search",editUrl:"https://github.com/brimdata/zed/tree/versioned_docs/version-v1.2.0/language/operators/search.md",tags:[],version:"v1.2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sample",permalink:"/docs/language/operators/sample"},next:{title:"sort",permalink:"/docs/language/operators/sort"}},u={},i=[{value:"Operator",id:"operator",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],m={toc:i};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"operator"},"Operator"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"search")," ","\u2014"," select values based on a search expression"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[search] <sexpr>\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"search")," operator filters its input by applying a search expression ",(0,o.kt)("inlineCode",{parentName:"p"},"<sexpr>"),"\nto each input value and dropping each value for which the expression evaluates\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," or to an error."),(0,o.kt)("p",null,'The "search" keyword may be omitted in which case ',(0,o.kt)("inlineCode",{parentName:"p"},"<sexpr>")," follows\nthe ",(0,o.kt)("a",{parentName:"p",href:"/docs/language/#search-expressions"},"search expression")," syntax."),(0,o.kt)("p",null,'When Zed queries are run interactively, it is convenient to be able to omit\nthe "search" keyword, but when search filters appear in Zed source files,\nit is good practice to include the optional keyword.'),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'A simple keyword search for "world"')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},'echo \'"hello, world" "say hello" "goodbye, world"\' | zq -z \'search world\' -\n')),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'"hello, world"\n"goodbye, world"\n')),(0,o.kt)("p",null,"Search can utilize ",(0,o.kt)("em",{parentName:"p"},"arithmetic comparisons")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1 2 3' | zq -z 'search this >= 2' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"2\n3\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'The "search" keyword may be dropped')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1 2 3' | zq -z '2 or 3' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"2\n3\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"A search with Boolean logic")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1 2 3' | zq -z 'search this >= 2 AND this <= 2' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"2\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The AND operator may be omitted through predicate concatenation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1 2 3' | zq -z 'search this >= 2 this <= 2' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"2\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Concatenation for keyword search")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},'echo \'"foo" "foo bar" "foo bar baz" "baz"\' | zq -z \'foo bar\' -\n')),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'"foo bar"\n"foo bar baz"\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Search expressions match fields names too")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{foo:1} {bar:2} {foo:3}' | zq -z foo -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{foo:1}\n{foo:3}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Boolean functions may be called")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1 \"foo\" 10.0.0.1' | zq -z 'search is(<int64>)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"1\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Boolean functions with Boolean logic")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1 \"foo\" 10.0.0.1' | zq -z 'search is(<int64>) or is(<ip>)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"1\n10.0.0.1\n")))}d.isMDXComponent=!0}}]);