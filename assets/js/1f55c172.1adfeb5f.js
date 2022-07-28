"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[8986],{3905:function(e,t,a){a.d(t,{Zo:function(){return i},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(k,o(o({ref:t},i),{},{components:a})):n.createElement(k,o({ref:t},i))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7579:function(e,t,a){a.r(t),a.d(t,{assets:function(){return i},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],s={},u=void 0,p={unversionedId:"language/operators/over",id:"version-v1.2.0/language/operators/over",title:"over",description:"Operator",source:"@site/versioned_docs/version-v1.2.0/language/operators/over.md",sourceDirName:"language/operators",slug:"/language/operators/over",permalink:"/docs/language/operators/over",editUrl:"https://github.com/brimdata/zed/edit/main/docs/language/operators/over.md",tags:[],version:"v1.2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"merge",permalink:"/docs/language/operators/merge"},next:{title:"put",permalink:"/docs/language/operators/put"}},i={},c=[{value:"Operator",id:"operator",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3}],m={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"operator"},"Operator"),(0,l.kt)("p",null,"\u2003"," ",(0,l.kt)("strong",{parentName:"p"},"over")," ","\u2014"," traverse nested values as a lateral query"),(0,l.kt)("h3",{id:"synopsis"},"Synopsis"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"over <expr> [, <expr>...]\nover <expr> [, <expr>...] [with <var>=<expr> [, ... <var>[=<expr>]] => ( <lateral> )\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"over")," operator traverses complex values to create a new sequence\nof derived values (e.g., the elements of an array) and either\n(in the first form) sends the new values directly to its output or\n(in the second form) sends the values to a scoped computation as indicated\nby ",(0,l.kt)("inlineCode",{parentName:"p"},"<lateral>"),", which may represent any Zed subquery operating on the\nderived sequence of values as ",(0,l.kt)("inlineCode",{parentName:"p"},"this"),"."),(0,l.kt)("p",null,"Each expression ",(0,l.kt)("inlineCode",{parentName:"p"},"<expr>")," is evaluated in left-to-right order and derived sequences are\ngenerated from each such result depending on its types:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"an array value generates each of its element,"),(0,l.kt)("li",{parentName:"ul"},"a map value generates a sequence of records of the form ",(0,l.kt)("inlineCode",{parentName:"li"},"{key:<key>,value:<value>}")," for each\nentry in the map, and"),(0,l.kt)("li",{parentName:"ul"},"all other values generate a single value equal to itself.")),(0,l.kt)("p",null,"Records can be converted to maps with the ",(0,l.kt)("a",{parentName:"p",href:"/docs/language/functions/flatten"},(0,l.kt)("em",{parentName:"a"},"flatten")," function"),"\nresulting in a map that can be traversed,\ne.g., if ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," is a record, it can be traversed with ",(0,l.kt)("inlineCode",{parentName:"p"},"over flatten(this)"),"."),(0,l.kt)("p",null,"The nested subquery depicted as ",(0,l.kt)("inlineCode",{parentName:"p"},"<lateral>"),' is called a "lateral query" as the\nouter query operates on the top-level sequence of values while the lateral\nquery operates on subsequences of values derived from each input value.\nThis pattern rhymes with the SQL pattern of a "lateral join", which runs a\nSQL subquery for each row of the outer query\'s table.'),(0,l.kt)("p",null,"In a Zed lateral query, each input value induces a derived subsequence and\nfor each such input, the lateral query runs to completion and yields its results.\nIn this way, operators like ",(0,l.kt)("inlineCode",{parentName:"p"},"sort")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"summarize"),", which operate on their\nentire input, run to completion for each subsequence and yield to the output the\nlateral result set for each outer input as a sequence of values."),(0,l.kt)("p",null,"Within the lateral query, ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," refers to the values of the subsequence thereby\npreventing lateral expressions from accessing the outer ",(0,l.kt)("inlineCode",{parentName:"p"},"this"),".\nTo accommodate such references, the ",(0,l.kt)("em",{parentName:"p"},"over")," operator includes a ",(0,l.kt)("em",{parentName:"p"},"with")," clause\nthat binds arbitrary expressions evaluated in the outer scope\nto variables that may be referenced by name in the lateral scope."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note that any such variable definitions override implied field references\nof ",(0,l.kt)("inlineCode",{parentName:"p"},"this"),'.  If a both a field named "x" and a variable named "x" need be\nreferenced in the lateral scope, the field reference should be qualified as ',(0,l.kt)("inlineCode",{parentName:"p"},"this.x"),"\nwhile the variable is referenced simply as ",(0,l.kt)("inlineCode",{parentName:"p"},"x"),".")),(0,l.kt)("p",null,"Lateral queries may be nested to arbitrary depth and accesses to variables\nin parent lateral query bodies follows lexical scoping."),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Over evaluates each expression and emits it")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo null | zq -z 'over 1,2,\"foo\"' -\n")),(0,l.kt)("p",null,"=>"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'1\n2\n"foo"\n')),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"The over clause is evaluated once per each input value")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo \"null null\" | zq -z 'over 1,2' -\n")),(0,l.kt)("p",null,"=>"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"1\n2\n1\n2\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Array elements are enumerated")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo null | zq -z 'over [1,2],[3,4,5]' -\n")),(0,l.kt)("p",null,"=>"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"1\n2\n3\n4\n5\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Over traversing an array")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:[1,2,3]}' | zq -z 'over a' -\n")),(0,l.kt)("p",null,"=>"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"1\n2\n3\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Filter the traversed values")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:[6,5,4]} {a:[3,2,1]}' | zq -z 'over a | this % 2 == 0' -\n")),(0,l.kt)("p",null,"=>"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"6\n4\n2\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Aggregate the traversed values")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:[1,2]} {a:[3,4,5]}' | zq -z 'over a | sum(this)' -\n")),(0,l.kt)("p",null,"=>"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{sum:15}\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Aggregate the traversed values in a lateral query")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:[1,2]} {a:[3,4,5]}' | zq -z 'over a => ( sum(this) )' -\n")),(0,l.kt)("p",null,"=>"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{sum:3}\n{sum:12}\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Access the outer values in a lateral query")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:[1,2],s:\"foo\"} {a:[3,4,5],s:\"bar\"}' | zq -z 'over a with s => (sum(this) | yield {s,sum})' -\n")),(0,l.kt)("p",null,"=>"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{s:"foo",sum:3}\n{s:"bar",sum:12}\n')),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Traverse a record by flattening it")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{s:\"foo\",r:{a:1,b:2}} {s:\"bar\",r:{a:3,b:4}} ' | zq -z 'over flatten(r) with s => (yield {s,key:key[0],value})' -\n")),(0,l.kt)("p",null,"=>"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{s:"foo",key:"a",value:1}\n{s:"foo",key:"b",value:2}\n{s:"bar",key:"a",value:3}\n{s:"bar",key:"b",value:4}\n')))}d.isMDXComponent=!0}}]);