"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[9356],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(k,s(s({ref:t},u),{},{components:n})):r.createElement(k,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9110:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],l={},i=void 0,p={unversionedId:"language/operators/sort",id:"version-v1.1.0/language/operators/sort",title:"sort",description:"Operator",source:"@site/versioned_docs/version-v1.1.0/language/operators/sort.md",sourceDirName:"language/operators",slug:"/language/operators/sort",permalink:"/docs/v1.1.0/language/operators/sort",editUrl:"https://github.com/brimdata/zed/tree/v1.1.0/language/operators/sort.md",tags:[],version:"v1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"search",permalink:"/docs/v1.1.0/language/operators/search"},next:{title:"summarize",permalink:"/docs/v1.1.0/language/operators/summarize"}},u={},d=[{value:"Operator",id:"operator",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],c={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"operator"},"Operator"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"sort")," ","\u2014"," sort values"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sort [-r] [-nulls first|last] [<expr> [, <expr> ...]]\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"sort")," operator sorts its input by reading all values until the end of input,\nsorting the values according to the provided sort expression(s), and emitting\nthe values in the sorted order."),(0,o.kt)("p",null,"By default, the sort order is ascending, from lowest value to highest.  If the ",(0,o.kt)("inlineCode",{parentName:"p"},"-r"),"\nflag is provided, the sort order is descending."),(0,o.kt)("p",null,"Zed follows the SQL convention that, by default, ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," values appear last\nin either case of ascending or descending sort.  This can be overridden\nby specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"-nulls first"),"."),(0,o.kt)("p",null,"If not all data fits in memory, values are spilled to temporary storage\nand sorted with an external merge sort."),(0,o.kt)("p",null,"The sort expressions act as primary key, secondary key, and so forth."),(0,o.kt)("p",null,"If no sort expression is provided, a sort key is guessed based on heuristics applied\nto the values present.\nThe heuristic examines the first input record and finds the first field in\nleft-to-right order that is an integer, or if no integer field is found,\nthe first field that is floating point. If no such numeric field is found, ",(0,o.kt)("inlineCode",{parentName:"p"},"sort")," finds\nthe first field in left-to-right order that is ",(0,o.kt)("em",{parentName:"p"},"not")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"time")," data type.\nNote that there are some cases (such as the output of a grouped aggregation performed on heterogeneous data) where the first input record to ",(0,o.kt)("inlineCode",{parentName:"p"},"sort"),"\nmay vary even when the same query is executed repeatedly against the same data.\nIf you require a query to show deterministic output on repeated execution,\nan explicit field list must be provided."),(0,o.kt)("p",null,"Note that a total order is defined over the space of all Zed values even\nbetween values of different types so sort order is always well-defined even\nwhen comparing heterogeneously typed values."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"TBD: document the definition of the total order")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"A simple sort with a null")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '2 null 1 3' | zq -z 'sort this' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"1\n2\n3\nnull\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"With no sort expression, sort will sort by ",(0,o.kt)("inlineCode",{parentName:"em"},"this")," for non-records")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '2 null 1 3' | zq -z sort -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"1\n2\n3\nnull\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'The "nulls last" default may be overridden')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '2 null 1 3' | zq -z 'sort -nulls first' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"null\n1\n2\n3\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"With no sort expression, sort will find a numeric key")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},'echo \'{s:"bar",k:2}{s:"bar",k:3}{s:"foo",k:1}\' | zq -z sort -\n')),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{s:"foo",k:1}\n{s:"bar",k:2}\n{s:"bar",k:3}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"It's best practice to provide the sort key")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},'echo \'{s:"bar",k:2}{s:"bar",k:3}{s:"foo",k:1}\' | zq -z \'sort k\' -\n')),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{s:"foo",k:1}\n{s:"bar",k:2}\n{s:"bar",k:3}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Sort with a secondary key")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},'echo \'{s:"bar",k:2}{s:"bar",k:3}{s:"foo",k:2}\' | zq -z \'sort k,s\' -\n')),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{s:"bar",k:2}\n{s:"foo",k:2}\n{s:"bar",k:3}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Sort with an expression")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},'echo \'{s:"sum 2",x:2,y:0}{s:"sum 3",x:1,y:2}{s:"sum 0",x:-1,y:-1}\' | zq -z \'sort x+y\' -\n')),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{s:"sum 0",x:-1,y:-1}\n{s:"sum 2",x:2,y:0}\n{s:"sum 3",x:1,y:2}\n')))}m.isMDXComponent=!0}}]);