"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[4287],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4277:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],s={},l=void 0,p={unversionedId:"language/operators/summarize",id:"language/operators/summarize",title:"summarize",description:"Operator",source:"@site/docs/language/operators/summarize.md",sourceDirName:"language/operators",slug:"/language/operators/summarize",permalink:"/docs/1.2.0/language/operators/summarize",draft:!1,editUrl:"https://github.com/brimdata/zed/edit/main/docs/language/operators/summarize.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sort",permalink:"/docs/1.2.0/language/operators/sort"},next:{title:"switch",permalink:"/docs/1.2.0/language/operators/switch"}},u={},c=[{value:"Operator",id:"operator",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],m={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"operator"},"Operator"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"summarize")," ","\u2014"," perform aggregations"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"summarize [<field>:=]<agg> [where <expr>][, [<field>:=]<agg> [where <expr>]] [by [<field>][:=<expr>] ...]\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"summarize")," operator consumes all of its input, applies an aggregate function\nto each input value optionally organized with the group-by keys specified after\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"by")," keyword and at the end of input, and produces one or more aggregations\nfor each unique set of group-by key values."),(0,o.kt)("p",null,"Each aggregate function may be optionally followed by a ",(0,o.kt)("inlineCode",{parentName:"p"},"where")," clause, which\nindicates a Boolean expression that indicates, for each input value,\nwhether to deliver it to that aggregate."),(0,o.kt)("p",null,"The output field names for each aggregate and each key are optional.  If omitted,\na field name is inferred from each right-hand side, e.g, the output field for the ",(0,o.kt)("inlineCode",{parentName:"p"},"sum"),"\naggregate function is simply ",(0,o.kt)("inlineCode",{parentName:"p"},"sum"),"."),(0,o.kt)("p",null,"A key may be either an expression or a field.  If the key field is omitted it,\nit is inferred from the expression, e.g., the field name for ",(0,o.kt)("inlineCode",{parentName:"p"},"by lower(s)"),"\nis ",(0,o.kt)("inlineCode",{parentName:"p"},"lower.")),(0,o.kt)("p",null,"If the cardinality of group-by keys causes the memory footprint to exceed\na limit, then each aggregate's partial results are spilled to temporary storage\nand the results merged into final results using an external merge sort.\nThe same mechanism that spills to storage can also spill across the network\nto a cluster of workers in an adaptive shuffle, though this is not yet implemented."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Sum the input sequence:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1 2 3 4' | zq -z 'sum(this)' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{sum:10}\n")),(0,o.kt)("p",null,"Create integer sets by key and sort the output to get a deterministic order:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},'echo \'{k:"foo",v:1}{k:"bar",v:2}{k:"foo",v:3}{k:"baz",v:4}\' | zq -z \'set:=union(v) by key:=k\' - | sort\n')),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{key:"bar",set:|[2]|}\n{key:"baz",set:|[4]|}\n{key:"foo",set:|[1,3]|}\n')),(0,o.kt)("p",null,"Use a where clause"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},'echo \'{k:"foo",v:1}{k:"bar",v:2}{k:"foo",v:3}{k:"baz",v:4}\' | zq -z \'set:=union(v) where v > 1 by key:=k\' - | sort\n')),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{key:"bar",set:|[2]|}\n{key:"baz",set:|[4]|}\n{key:"foo",set:|[3]|}\n')))}d.isMDXComponent=!0}}]);