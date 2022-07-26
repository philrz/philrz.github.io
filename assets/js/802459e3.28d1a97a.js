"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[4674],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7428:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],p={},s=void 0,l={unversionedId:"language/functions/cast",id:"language/functions/cast",title:"cast",description:"Function",source:"@site/docs/language/functions/cast.md",sourceDirName:"language/functions",slug:"/language/functions/cast",permalink:"/docs/next/language/functions/cast",editUrl:"https://github.com/brimdata/zed/tree/docs/language/functions/cast.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"bucket",permalink:"/docs/next/language/functions/bucket"},next:{title:"ceil",permalink:"/docs/next/language/functions/ceil"}},c={},u=[{value:"Function",id:"function",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"function"},"Function"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"cast")," ","\u2014"," coerce a value to a different type"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cast(val: any, t: type) -> any\ncast(val: any, name: string) -> any\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"cast")," function performs type casts but handles both primitive types and\ncomplex types.  If the input type ",(0,o.kt)("inlineCode",{parentName:"p"},"t")," is a primitive type, then the result\nis equivalent to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"t(val)\n")),(0,o.kt)("p",null,"e.g., the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"cast(1, <string>)")," is the same as ",(0,o.kt)("inlineCode",{parentName:"p"},"string(1)")," which is ",(0,o.kt)("inlineCode",{parentName:"p"},'"1"'),".\nIn the second form, where the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," argument is a string, cast creates\na new named type where the name for the type is given by ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and its\ntype is given by ",(0,o.kt)("inlineCode",{parentName:"p"},"typeof(val)"),".  This provides a convenient mechanism\nto create new named types from the input data itself without having to\nhard code the type in the Zed source text."),(0,o.kt)("p",null,"For complex types, the cast function visits each leaf value in ",(0,o.kt)("inlineCode",{parentName:"p"},"val")," and\ncasts that value to the corresponding type in ",(0,o.kt)("inlineCode",{parentName:"p"},"t"),".\nWhen a complex value has multiple levels of nesting,\ncasting is applied recursively down the tree.  For example, cast is recursively\napplied to each element in array of records and recursively applied to each record."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"val")," is a record (or if any of its nested value is a record):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"absent fields are ignored and omitted from the result,"),(0,o.kt)("li",{parentName:"ul"},"extra input fields are passed through unmodified to the result, and"),(0,o.kt)("li",{parentName:"ul"},"fields are matched by name and are order independent and the ",(0,o.kt)("em",{parentName:"li"},"input")," order is retained.")),(0,o.kt)("p",null,"In other words, ",(0,o.kt)("inlineCode",{parentName:"p"},"cast")," does not rearrange the order of fields in the input\nto match the output type's order but rather just modifies the leaf values."),(0,o.kt)("p",null,"If a cast fails, an error is returned when casting to primitive types\nand the input value is returned when casting to complex types."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Cast primitives to type ",(0,o.kt)("inlineCode",{parentName:"em"},"ip"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '\"10.0.0.1\" 1 \"foo\"' | zq -z 'cast(this, <ip>)' -\n")),(0,o.kt)("p",null,"produces"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'10.0.0.1\nerror("cannot cast 1 to type ip")\nerror("cannot cast \\"foo\\" to type ip")\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Cast a record to a different record type")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1,b:2}{a:3}{b:4}' | zq -z 'cast(this, <{b:string}>)' -\n")),(0,o.kt)("p",null,"produces"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{a:1,b:"2"}\n{a:3}\n{b:"4"}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Create a name a typed and cast value to the new type")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1,b:2}{a:3,b:4}' | zq -z 'cast(this, \"foo\")' -\n")),(0,o.kt)("p",null,"produces"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{a:1,b:2}(=foo)\n{a:3,b:4}(=foo)\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Name data based its properties")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{x:1,y:2}{r:3}{x:4,y:5}' | zq -z 'switch ( case has(x) => cast(this, \"point\")  default => cast(this, \"radius\") ) | sort this' -\n")),(0,o.kt)("p",null,"produces"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{x:1,y:2}(=point)\n{x:4,y:5}(=point)\n{r:3}(=radius)\n")))}m.isMDXComponent=!0}}]);