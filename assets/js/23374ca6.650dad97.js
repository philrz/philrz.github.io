"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[8421],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6527:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={sidebar_position:1,sidebar_label:"Introduction"},s="The Zed Project",d={unversionedId:"README",id:"README",title:"The Zed Project",description:"Zed offers a new approach to data that makes it easier to manipulate and manage",source:"@site/docs/README.md",sourceDirName:".",slug:"/",permalink:"/docs/next/",editUrl:"https://github.com/brimdata/zed/tree/current/README.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction"},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/docs/next/install"}},p={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"Terminology",id:"terminology",level:2},{value:"Digging Deeper",id:"digging-deeper",level:2},{value:"Design Philosophy",id:"design-philosophy",level:2}],m={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-zed-project"},"The Zed Project"),(0,o.kt)("p",null,"Zed offers a new approach to data that makes it easier to manipulate and manage\nyour data."),(0,o.kt)("p",null,"With Zed's new ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/formats/#2-zed-a-super-structured-pattern"},"super-structured data model"),",\nmessy JSON data can easily be given the fully-typed precision of relational tables\nwithout giving up JSON's uncanny ability to represent eclectic data."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Trying out Zed is easy: just ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/install"},"install")," the command-line tool\n",(0,o.kt)("a",{parentName:"p",href:"/docs/next/commands/zq"},(0,o.kt)("inlineCode",{parentName:"a"},"zq"))," and run through the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/tutorials/zq"},"zq tutorial"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"zq")," is a lot like ",(0,o.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},(0,o.kt)("inlineCode",{parentName:"a"},"jq")),"\nbut is built from the ground up as a search and analytics engine based\non the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/formats/zed"},"Zed data model"),".  Since Zed data is a\nproper superset of JSON, ",(0,o.kt)("inlineCode",{parentName:"p"},"zq")," also works natively with JSON."),(0,o.kt)("p",null,"While ",(0,o.kt)("inlineCode",{parentName:"p"},"zq")," and the Zed data formats are production quality, the Zed project's\n",(0,o.kt)("a",{parentName:"p",href:"/docs/next/commands/zed"},"Zed data lake")," is a bit ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/commands/zed#status"},"earlier in development"),"."),(0,o.kt)("p",null,"For a non-technical user, Zed is as easy to use as web search\nwhile for a technical user, Zed exposes its technical underpinnings\nin a gradual slope, providing as much detail as desired,\npackaged up in the easy-to-understand\n",(0,o.kt)("a",{parentName:"p",href:"/docs/next/formats/zson"},"ZSON data format")," and\n",(0,o.kt)("a",{parentName:"p",href:"/docs/next/language/"},"Zed language"),"."),(0,o.kt)("h2",{id:"terminology"},"Terminology"),(0,o.kt)("p",null,'"Zed" is an umbrella term that describes\na number of different elements of the system:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/formats/zed"},"Zed data model")," is the abstract definition of the data types and semantics\nthat underlie the Zed formats."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/formats/"},"Zed formats")," are a family of\n",(0,o.kt)("a",{parentName:"li",href:"/docs/next/formats/zng"},"sequential (ZNG)"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/formats/zst"},"columnar (ZST)"),",\nand ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/formats/zson"},"human-readable (ZSON)")," formats that all adhere to the\nsame abstract Zed data model."),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/commands/zed"},"Zed lake")," is a collection of optionally-indexed Zed data stored\nacross one or more ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/commands/zed#14-data-pools"},"data pools")," with ACID commit semantics and\naccessed via a ",(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"Git"),"-like API."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/language/"},"Zed language")," is the system's dataflow language for performing\nqueries, searches, analytics, transformations, or any of the above combined together."),(0,o.kt)("li",{parentName:"ul"},"A  ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/language/overview#1-introduction"},"Zed query")," is a Zed script that performs\nsearch and/or analytics."),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/language/overview#9-shaping"},"Zed shaper")," is a Zed script that performs\ndata transformation to ",(0,o.kt)("em",{parentName:"li"},"shape"),'\nthe input data into the desired set of organizing Zed data types called "shapes",\nwhich are traditionally called ',(0,o.kt)("em",{parentName:"li"},"schemas")," in relational systems but are\nmuch more flexible in the Zed system.")),(0,o.kt)("h2",{id:"digging-deeper"},"Digging Deeper"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/language/"},"Zed language documentation"),"\nis the best way to learn about ",(0,o.kt)("inlineCode",{parentName:"p"},"zq")," in depth.\nAll of its examples use ",(0,o.kt)("inlineCode",{parentName:"p"},"zq")," commands run on the command line.\nRun ",(0,o.kt)("inlineCode",{parentName:"p"},"zq -h")," for a list of command options and online help."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/commands/zed"},"Zed Lake documentation"),"\nis the best way to learn about ",(0,o.kt)("inlineCode",{parentName:"p"},"zed"),".\nAll of its examples use ",(0,o.kt)("inlineCode",{parentName:"p"},"zed")," commands run on the command line.\nRun ",(0,o.kt)("inlineCode",{parentName:"p"},"zed -h")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"-h")," with any subcommand for a list of command options\nand online help.  The same language query that works for ",(0,o.kt)("inlineCode",{parentName:"p"},"zq")," operating\non local files or streams also works for ",(0,o.kt)("inlineCode",{parentName:"p"},"zed query")," operating on a lake."),(0,o.kt)("h2",{id:"design-philosophy"},"Design Philosophy"),(0,o.kt)("p",null,"The design philosophy for Zed is based on composable building blocks\nbuilt from self-describing data structures.  Everything in a Zed lake\nis built from Zed data and each system component can be run and tested in isolation."),(0,o.kt)("p",null,"Since Zed data is self-describing, this approach makes stream composition\nvery easy.  Data from a Zed query can trivially be piped to a local\ninstance of ",(0,o.kt)("inlineCode",{parentName:"p"},"zq")," by feeding the resulting Zed stream to stdin of ",(0,o.kt)("inlineCode",{parentName:"p"},"zq"),", for example,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'zed query "from pool | ...remote query..." | zq "...local query..." -\n')),(0,o.kt)("p",null,"There is no need to configure the Zed entities with schema information\nlike ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/proto3"},"protobuf configs"),"\nor connections to\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/schema-registry/index.html"},"schema registries"),"."),(0,o.kt)("p",null,"A Zed lake is completely self-contained, requiring no auxiliary databases\n(like the ",(0,o.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/hive/design"},"Hive metastore"),")\nor other third-party services to interpret the lake data.\nOnce copied, a new service can be instantiated by pointing a ",(0,o.kt)("inlineCode",{parentName:"p"},"zed serve"),"\nat the copy of the lake."),(0,o.kt)("p",null,"Functionality like indexing, data compaction, and retention are all\nAPI-driven."),(0,o.kt)("p",null,"Bite-sized components are unified by the Zed data, usually in the ZNG format:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All lake meta-data is available via meta-queries."),(0,o.kt)("li",{parentName:"ul"},"All like operations available through the service API are also available\ndirectly via the ",(0,o.kt)("inlineCode",{parentName:"li"},"zed")," command."),(0,o.kt)("li",{parentName:"ul"},"Search indexes and aggregate partials are all just ZNG files and you can\nlearn about the Zed lake by simply running ",(0,o.kt)("inlineCode",{parentName:"li"},"zq")," on the various ZNG files\nin a cloud store."),(0,o.kt)("li",{parentName:"ul"},"Lake management is agent-driven through the API.  For example, instead of complex policies\nlike data compaction being implemented in the core with some fixed set of\nalgorithms and policies, an agent can simply hit the API to obtain the meta-data\nof the objects in the lake, analyze the objects (e.g., looking for too much\nkey space overlap) and issue API commands to merge overlapping objects\nand delete the old fragmented objects, all with the transactional consistency\nof the commit log."),(0,o.kt)("li",{parentName:"ul"},"Components are easily tested and debugged in isolation.")))}u.isMDXComponent=!0}}]);