"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[9832],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return c}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),c=r,f=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return t?a.createElement(f,i(i({ref:n},d),{},{components:t})):a.createElement(f,i({ref:n},d))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9953:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],l={sidebar_position:2,sidebar_label:"Join"},s="Join Overview",p={unversionedId:"tutorials/join",id:"tutorials/join",title:"Join Overview",description:"This is a brief primer on Zed's experimental join operator.",source:"@site/docs/tutorials/join.md",sourceDirName:"tutorials",slug:"/tutorials/join",permalink:"/docs/next/tutorials/join",editUrl:"https://github.com/brimdata/zed/edit/main/tutorials/join.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Join"},sidebar:"tutorialSidebar",previous:{title:"zed",permalink:"/docs/next/tutorials/zed"},next:{title:"Schools Data",permalink:"/docs/next/tutorials/schools"}},d={},u=[{value:"Example Data",id:"example-data",level:2},{value:"Inner Join",id:"inner-join",level:2},{value:"Left Join",id:"left-join",level:2},{value:"Right join",id:"right-join",level:2},{value:"Inputs from Pools",id:"inputs-from-pools",level:2},{value:"Self Joins",id:"self-joins",level:2},{value:"Multi-value Joins",id:"multi-value-joins",level:2},{value:"Embedding the entire opposite record",id:"embedding-the-entire-opposite-record",level:2}],m={toc:u};function c(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"join-overview"},"Join Overview"),(0,o.kt)("p",null,"This is a brief primer on Zed's experimental ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/language/operators/join"},(0,o.kt)("inlineCode",{parentName:"a"},"join")," operator"),"."),(0,o.kt)("p",null,"Currently, ",(0,o.kt)("inlineCode",{parentName:"p"},"join")," is limited in the following ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the joined inputs both come from the parent so the query must be split before join,"),(0,o.kt)("li",{parentName:"ul"},"only merge join is implemented, requiring inputs to be explicitly sorted, and"),(0,o.kt)("li",{parentName:"ul"},"only equi-join (i.e., a join predicate containing ",(0,o.kt)("inlineCode",{parentName:"li"},"="),") is supported.")),(0,o.kt)("p",null,"A more comprehensive join design with easier-to-use syntax is forthcoming."),(0,o.kt)("h2",{id:"example-data"},"Example Data"),(0,o.kt)("p",null,"The first input data source for our usage examples is ",(0,o.kt)("inlineCode",{parentName:"p"},"fruit.ndjson"),", which describes\nthe characteristics of some fresh produce."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-input",metastring:"fruit.ndjson","fruit.ndjson":!0},'{"name":"apple","color":"red","flavor":"tart"}\n{"name":"banana","color":"yellow","flavor":"sweet"}\n{"name":"avocado","color":"green","flavor":"savory"}\n{"name":"strawberry","color":"red","flavor":"sweet"}\n{"name":"dates","color":"brown","flavor":"sweet","note":"in season"}\n{"name":"figs","color":"brown","flavor":"plain"}\n')),(0,o.kt)("p",null,"The other input data source is ",(0,o.kt)("inlineCode",{parentName:"p"},"people.ndjson"),", which describes the traits\nand preferences of some potential eaters of fruit."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-input",metastring:"people.ndjson","people.ndjson":!0},'{"name":"morgan","age":61,"likes":"tart"}\n{"name":"quinn","age":14,"likes":"sweet","note":"many kids enjoy sweets"}\n{"name":"jessie","age":30,"likes":"plain"}\n{"name":"chris","age":47,"likes":"tart"}\n')),(0,o.kt)("h2",{id:"inner-join"},"Inner Join"),(0,o.kt)("p",null,"We'll start by outputting only the fruits liked by at least one person.\nThe name of the matching person is copied into a field of a different name in\nthe joined results."),(0,o.kt)("p",null,"Because we're performing an inner join (the default), the\nexplicit ",(0,o.kt)("inlineCode",{parentName:"p"},"inner")," is not strictly necessary, but including it clarifies our intention."),(0,o.kt)("p",null,"Notice how each input is specified separately within the parentheses-wrapped\n",(0,o.kt)("inlineCode",{parentName:"p"},"from()")," block before the ",(0,o.kt)("inlineCode",{parentName:"p"},"join")," appears in our Zed pipeline."),(0,o.kt)("p",null,"The Zed script ",(0,o.kt)("inlineCode",{parentName:"p"},"inner-join.zed"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-input",metastring:"inner-join.zed","inner-join.zed":!0},"from (\n  file fruit.ndjson => sort flavor\n  file people.ndjson => sort likes\n) | inner join on flavor=likes eater:=name\n")),(0,o.kt)("p",null,"Executing the Zed script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"zq -z -I inner-join.zed\n")),(0,o.kt)("p",null,"produces"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{name:"figs",color:"brown",flavor:"plain",eater:"jessie"}\n{name:"banana",color:"yellow",flavor:"sweet",eater:"quinn"}\n{name:"strawberry",color:"red",flavor:"sweet",eater:"quinn"}\n{name:"dates",color:"brown",flavor:"sweet",note:"in season",eater:"quinn"}\n{name:"apple",color:"red",flavor:"tart",eater:"morgan"}\n{name:"apple",color:"red",flavor:"tart",eater:"chris"}\n')),(0,o.kt)("h2",{id:"left-join"},"Left Join"),(0,o.kt)("p",null,"By performing a left join that targets the same key fields, now all of our\nfruits will be shown in the results even if no one likes them (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"avocado"),")."),(0,o.kt)("p",null,"As another variation, we'll also copy over the age of the matching person. By\nreferencing only the field name rather than using ",(0,o.kt)("inlineCode",{parentName:"p"},":=")," for assignment, the\noriginal field name ",(0,o.kt)("inlineCode",{parentName:"p"},"age")," is maintained in the results."),(0,o.kt)("p",null,"The Zed script ",(0,o.kt)("inlineCode",{parentName:"p"},"left-join.zed"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-input",metastring:"left-join.zed","left-join.zed":!0},"from (\n  file fruit.ndjson => sort flavor\n  file people.ndjson => sort likes\n) | left join on flavor=likes eater:=name,age\n")),(0,o.kt)("p",null,"Executing the Zed script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"zq -z -I left-join.zed\n")),(0,o.kt)("p",null,"produces"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{name:"figs",color:"brown",flavor:"plain",eater:"jessie",age:30}\n{name:"avocado",color:"green",flavor:"savory"}\n{name:"banana",color:"yellow",flavor:"sweet",eater:"quinn",age:14}\n{name:"strawberry",color:"red",flavor:"sweet",eater:"quinn",age:14}\n{name:"dates",color:"brown",flavor:"sweet",note:"in season",eater:"quinn",age:14}\n{name:"apple",color:"red",flavor:"tart",eater:"morgan",age:61}\n{name:"apple",color:"red",flavor:"tart",eater:"chris",age:47}\n')),(0,o.kt)("h2",{id:"right-join"},"Right join"),(0,o.kt)("p",null,"Next we'll change the join type from ",(0,o.kt)("inlineCode",{parentName:"p"},"left")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"right"),". Notice that this causes\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"note")," field from the right-hand input to appear in the joined results."),(0,o.kt)("p",null,"The Zed script ",(0,o.kt)("inlineCode",{parentName:"p"},"right-join.zed"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-input",metastring:"right-join.zed","right-join.zed":!0},"from (\n  file fruit.ndjson => sort flavor\n  file people.ndjson => sort likes\n) | right join on flavor=likes fruit:=name\n")),(0,o.kt)("p",null,"Executing the Zed script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"zq -z -I right-join.zed\n")),(0,o.kt)("p",null,"produces"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{name:"jessie",age:30,likes:"plain",fruit:"figs"}\n{name:"quinn",age:14,likes:"sweet",note:"many kids enjoy sweets",fruit:"banana"}\n{name:"quinn",age:14,likes:"sweet",note:"many kids enjoy sweets",fruit:"strawberry"}\n{name:"quinn",age:14,likes:"sweet",note:"many kids enjoy sweets",fruit:"dates"}\n{name:"morgan",age:61,likes:"tart",fruit:"apple"}\n{name:"chris",age:47,likes:"tart",fruit:"apple"}\n')),(0,o.kt)("h2",{id:"inputs-from-pools"},"Inputs from Pools"),(0,o.kt)("p",null,"As our prior examples all used ",(0,o.kt)("inlineCode",{parentName:"p"},"zq"),", we used ",(0,o.kt)("inlineCode",{parentName:"p"},"file")," in our ",(0,o.kt)("inlineCode",{parentName:"p"},"from()")," block to\npull our respective inputs from named file sources. However, if the inputs are\nstored in pools in a Zed lake, the pool names would instead be specified in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"from()")," block."),(0,o.kt)("p",null,"Here we'll load our input data to pools in a temporary Zed Lake, then execute\nour inner join using ",(0,o.kt)("inlineCode",{parentName:"p"},"zed query"),"."),(0,o.kt)("p",null,"Notice that because we happened to use ",(0,o.kt)("inlineCode",{parentName:"p"},"-orderby")," to sort our pools by the same\nkeys that we reference in our ",(0,o.kt)("inlineCode",{parentName:"p"},"join"),", we did not need to use any explicit\nupstream ",(0,o.kt)("inlineCode",{parentName:"p"},"sort"),"."),(0,o.kt)("p",null,"The Zed script ",(0,o.kt)("inlineCode",{parentName:"p"},"inner-join-pools.zed"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-input",metastring:"inner-join-pools.zed","inner-join-pools.zed":!0},"from (\n  pool fruit\n  pool people\n) | inner join on flavor=likes eater:=name\n")),(0,o.kt)("p",null,"Populating the pools, then executing the Zed script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"export ZED_LAKE=lake\nzed init -q\nzed create -q -orderby flavor:asc fruit\nzed create -q -orderby likes:asc people\nzed load -q -use fruit fruit.ndjson\nzed load -q -use people people.ndjson\nzed query -z -I inner-join-pools.zed\n")),(0,o.kt)("p",null,"produces"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{name:"figs",color:"brown",flavor:"plain",eater:"jessie"}\n{name:"dates",color:"brown",flavor:"sweet",note:"in season",eater:"quinn"}\n{name:"banana",color:"yellow",flavor:"sweet",eater:"quinn"}\n{name:"strawberry",color:"red",flavor:"sweet",eater:"quinn"}\n{name:"apple",color:"red",flavor:"tart",eater:"chris"}\n{name:"apple",color:"red",flavor:"tart",eater:"morgan"}\n')),(0,o.kt)("h2",{id:"self-joins"},"Self Joins"),(0,o.kt)("p",null,"In addition to the named files and pools like we've used in the prior examples,\nZed is also intended to work on a single sequence of data that is split\nand joined to itself.  Here we'll combine our file\nsources into a stream that we'll pipe into ",(0,o.kt)("inlineCode",{parentName:"p"},"zq")," via stdin. Because ",(0,o.kt)("inlineCode",{parentName:"p"},"join")," requires\ntwo separate inputs, here we'll use the ",(0,o.kt)("inlineCode",{parentName:"p"},"has()")," function to identify the\nrecords in the stream that will be treated as the left and right sides."),(0,o.kt)("p",null,"The Zed script ",(0,o.kt)("inlineCode",{parentName:"p"},"inner-join-streamed.zed"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-input",metastring:"inner-join-streamed.zed","inner-join-streamed.zed":!0},"switch (\n  case has(color) => sort flavor\n  case has(age) => sort likes\n) | inner join on flavor=likes eater:=name\n")),(0,o.kt)("p",null,"Executing the Zed script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"cat fruit.ndjson people.ndjson | zq -z -I inner-join-streamed.zed -\n")),(0,o.kt)("p",null,"produces"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{name:"figs",color:"brown",flavor:"plain",eater:"jessie"}\n{name:"banana",color:"yellow",flavor:"sweet",eater:"quinn"}\n{name:"strawberry",color:"red",flavor:"sweet",eater:"quinn"}\n{name:"dates",color:"brown",flavor:"sweet",note:"in season",eater:"quinn"}\n{name:"apple",color:"red",flavor:"tart",eater:"morgan"}\n{name:"apple",color:"red",flavor:"tart",eater:"chris"}\n')),(0,o.kt)("h2",{id:"multi-value-joins"},"Multi-value Joins"),(0,o.kt)("p",null,"The equality test in a Zed ",(0,o.kt)("inlineCode",{parentName:"p"},"join")," accepts only one named key from each input.\nHowever, joins on multiple matching values can still be performed by making the\nvalues available in comparable complex types, such as embedded records."),(0,o.kt)("p",null,"To illustrate this, we'll introduce some new input data ",(0,o.kt)("inlineCode",{parentName:"p"},"inventory.ndjson"),"\nthat represents a vendor's available quantity of fruit for sale. As the colors\nindicate, they separately offer both ripe and unripe fruit."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-input",metastring:"inventory.ndjson","inventory.ndjson":!0},'{"name":"banana","color":"yellow","quantity":1000}\n{"name":"banana","color":"green","quantity":5000}\n{"name":"strawberry","color":"red","quantity":3000}\n{"name":"strawberry","color":"white","quantity":6000}\n')),(0,o.kt)("p",null,"Let's assume we're interested in seeing the available quantities of only the\nripe fruit in our ",(0,o.kt)("inlineCode",{parentName:"p"},"fruit.ndjson"),"\nrecords. In the Zed script ",(0,o.kt)("inlineCode",{parentName:"p"},"multi-value-join.zed"),", we create the keys as\nembedded records inside each input record, using the same field names and data\ntypes in each. We'll leave the created ",(0,o.kt)("inlineCode",{parentName:"p"},"fruitkey")," records intact to show what\nthey look like, but since it represents redundant data, in practice we'd\ntypically ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/language/operators/drop"},(0,o.kt)("inlineCode",{parentName:"a"},"drop"))," it after the ",(0,o.kt)("inlineCode",{parentName:"p"},"join")," in our Zed pipeline."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-input",metastring:"multi-value-join.zed","multi-value-join.zed":!0},"from (\n  file fruit.ndjson => put fruitkey:={name,color} | sort fruitkey\n  file inventory.ndjson => put invkey:={name,color} | sort invkey\n) | inner join on fruitkey=invkey quantity\n")),(0,o.kt)("p",null,"Executing the Zed script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"zq -z -I multi-value-join.zed\n")),(0,o.kt)("p",null,"produces"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{name:"banana",color:"yellow",flavor:"sweet",fruitkey:{name:"banana",color:"yellow"},quantity:1000}\n{name:"strawberry",color:"red",flavor:"sweet",fruitkey:{name:"strawberry",color:"red"},quantity:3000}\n')),(0,o.kt)("h2",{id:"embedding-the-entire-opposite-record"},"Embedding the entire opposite record"),(0,o.kt)("p",null,"In the current ",(0,o.kt)("inlineCode",{parentName:"p"},"join")," implementation, explicit entries must be provided in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"[field-list]")," in order to copy values from the opposite input into the joined\nresults (a possible future enhancement ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/brimdata/zed/issues/2815"},"zed/2815"),"\nmay improve upon this). This can be cumbersome if your goal is to copy over many\nfields or you don't know the names of all desired fields."),(0,o.kt)("p",null,"One way to work around this limitation is to specify ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," in the field list\nto copy the contents of the ",(0,o.kt)("em",{parentName:"p"},"entire")," opposite record into an embedded record\nin the result."),(0,o.kt)("p",null,"The Zed script ",(0,o.kt)("inlineCode",{parentName:"p"},"embed-opposite.zed"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-input",metastring:"embed-opposite.zed","embed-opposite.zed":!0},"from (\n  file fruit.ndjson => sort flavor\n  file people.ndjson => sort likes\n) | inner join on flavor=likes eaterinfo:=this\n")),(0,o.kt)("p",null,"Executing the Zed script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"zq -z -I embed-opposite.zed\n")),(0,o.kt)("p",null,"produces"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{name:"figs",color:"brown",flavor:"plain",eaterinfo:{name:"jessie",age:30,likes:"plain"}}\n{name:"banana",color:"yellow",flavor:"sweet",eaterinfo:{name:"quinn",age:14,likes:"sweet",note:"many kids enjoy sweets"}}\n{name:"strawberry",color:"red",flavor:"sweet",eaterinfo:{name:"quinn",age:14,likes:"sweet",note:"many kids enjoy sweets"}}\n{name:"dates",color:"brown",flavor:"sweet",note:"in season",eaterinfo:{name:"quinn",age:14,likes:"sweet",note:"many kids enjoy sweets"}}\n{name:"apple",color:"red",flavor:"tart",eaterinfo:{name:"morgan",age:61,likes:"tart"}}\n{name:"apple",color:"red",flavor:"tart",eaterinfo:{name:"chris",age:47,likes:"tart"}}\n')))}c.isMDXComponent=!0}}]);