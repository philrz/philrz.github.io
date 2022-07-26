"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[1297],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2868:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={},s="Python",p={unversionedId:"libraries/python",id:"libraries/python",title:"Python",description:"Zed includes preliminary support for Python-based interaction",source:"@site/docs/libraries/python.md",sourceDirName:"libraries",slug:"/libraries/python",permalink:"/docs/next/libraries/python",editUrl:"https://github.com/brimdata/zed/tree/main/docs/libraries/python.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Javascript",permalink:"/docs/next/libraries/javascript"}},c={},u=[{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"python"},"Python"),(0,o.kt)("p",null,"Zed includes preliminary support for Python-based interaction\nwith a Zed lake.\nThe Zed Python package supports loading data into a Zed lake as well as\nquerying and retrieving results in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/formats/zjson"},"ZJSON format"),".\nThe Python client interacts with the Zed lake via the REST API served by\n",(0,o.kt)("a",{parentName:"p",href:"/docs/next/commands/zed#213-serve"},(0,o.kt)("inlineCode",{parentName:"a"},"zed serve")),"."),(0,o.kt)("p",null,"This approach works adequately when high data throughput is not required.\nWe will soon introduce native ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/formats/zng"},"ZNG")," support for\nPython that should increase performance substantially for more\ndata intensive workloads."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Install the latest version like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'pip3 install "git+https://github.com/brimdata/zed#subdirectory=python/zed"\n')),(0,o.kt)("p",null,"Install the version compatible with a local ",(0,o.kt)("inlineCode",{parentName:"p"},"zed")," like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pip3 install \"git+https://github.com/brimdata/zed@$(zed -version | cut -d ' ' -f 2)#subdirectory=python/zed\"\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"To run this example, first start a Zed lake service from your shell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"zed init -lake scratch\nzed serve -lake scratch\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Or you can launch the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/brimdata/brim"},"Brim app")," and it will run a Zed lake service\non the default port at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:9867"),".")),(0,o.kt)("p",null,"Then, in another shell, use Python to create a pool, load some data,\nand run a query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"python3 <<EOF\nimport zed\n\n# Connect to the default lake at http://localhost:9867.  To use a\n# different lake, supply its URL via the ZED_LAKE environment variable\n# or as an argument here.\nclient = zed.Client()\n\nclient.create_pool('TestPool')\n\n# Load some ZSON records from a string.  A file-like object also works.\n# Data format is detected automatically and can be CSV, JSON, Zeek TSV,\n# ZJSON, ZNG, or ZSON.\nclient.load('TestPool', '{s:\"hello\"} {s:\"world\"}')\n\n# Begin executing a Zed query for all values in TestPool.\n# This returns an iterator, not a container.\nvalues = client.query('from TestPool')\n\n# Stream values from the server.\nfor val in values:\n    print(val)\nEOF\n")),(0,o.kt)("p",null,"You should see this output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{'s': 'world'}\n{'s': 'hello'}\n")))}h.isMDXComponent=!0}}]);