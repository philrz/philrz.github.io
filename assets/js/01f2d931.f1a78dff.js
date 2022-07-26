"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[7722],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6915:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],s={},p=void 0,i={unversionedId:"language/functions/grep",id:"version-v1.1.0/language/functions/grep",title:"grep",description:"Function",source:"@site/versioned_docs/version-v1.1.0/language/functions/grep.md",sourceDirName:"language/functions",slug:"/language/functions/grep",permalink:"/docs/v1.1.0/language/functions/grep",tags:[],version:"v1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"floor",permalink:"/docs/v1.1.0/language/functions/floor"},next:{title:"has",permalink:"/docs/v1.1.0/language/functions/has"}},u={},c=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"function"},"Function"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"grep")," ","\u2014"," search strings inside of values"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"grep(<pattern> [, e: any]) -> bool\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"grep")," function searches all of the strings in its input value ",(0,o.kt)("inlineCode",{parentName:"p"},"e"),"\n(or ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," if ",(0,o.kt)("inlineCode",{parentName:"p"},"e")," is not given)\nusing the ",(0,o.kt)("inlineCode",{parentName:"p"},"<pattern>")," argument, which must be a\n",(0,o.kt)("a",{parentName:"p",href:"/docs/v1.1.0/language/#regular-expressions"},"regular expression"),",\n",(0,o.kt)("a",{parentName:"p",href:"/docs/v1.1.0/language/#globs"},"glob pattern"),", or string literal.\nIf the pattern matches for any string, then the result is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),".  Otherwise, it is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that string matches are case insensitive while regular expression\nand glob matches are case sensitive.  In a forthcoming release, case sensitivity\nwill be a expressible for all three pattern types.")),(0,o.kt)("p",null,"The entire input value is traversed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"for records, each field name is traversed and each field value is traversed or descended\nif a complex type,"),(0,o.kt)("li",{parentName:"ul"},"for arrays and sets, each element is traversed or descended if a complex type, and"),(0,o.kt)("li",{parentName:"ul"},"for maps, each key and value is traversed or descended if a complex type.")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Reach into nested records")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{foo:10}{bar:{s:\"baz\"}}' | zq -z 'grep(\"baz\")' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{bar:{s:"baz"}}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"It only matches string fields")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{foo:10}{bar:{s:\"baz\"}}' | zq -z 'grep(\"10\")' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Match a field name")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{foo:10}{bar:{s:\"baz\"}}' | zq -z 'grep(\"foo\")' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{foo:10}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Regular expression")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{foo:10}{bar:{s:\"baz\"}}' | zq -z 'grep(/foo|baz/)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{foo:10}\n{bar:{s:"baz"}}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Glob with a second argument")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},'echo \'{s:"bar"}{s:"foo"}{s:"baz"}{t:"baz"}\' | zq -z \'grep(b*, s)\' -\n')),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{s:"bar"}\n{s:"baz"}\n')))}d.isMDXComponent=!0}}]);