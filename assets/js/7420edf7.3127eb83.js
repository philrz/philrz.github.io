"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[8787],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),d=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=d(n),s=r,N=k["".concat(i,".").concat(s)]||k[s]||u[s]||l;return n?a.createElement(N,p(p({ref:e},m),{},{components:n})):a.createElement(N,p({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=k;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:r,p[1]=o;for(var d=2;d<l;d++)p[d]=n[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5958:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),p=["components"],o={sidebar_position:1,sidebar_label:"API"},i="Zed lake API",d={unversionedId:"lake/api",id:"version-v1.1.0/lake/api",title:"Zed lake API",description:"Status",source:"@site/versioned_docs/version-v1.1.0/lake/api.md",sourceDirName:"lake",slug:"/lake/api",permalink:"/docs/v1.1.0/lake/api",draft:!1,editUrl:"https://github.com/brimdata/zed/edit/main/docs/lake/api.md",tags:[],version:"v1.1.0",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"API"},sidebar:"tutorialSidebar",previous:{title:"Compression",permalink:"/docs/v1.1.0/formats/compression"},next:{title:"Format",permalink:"/docs/v1.1.0/lake/format"}},m={},u=[{value:"<em>Status</em>",id:"status",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Pools",id:"pools",level:3},{value:"Create pool",id:"create-pool",level:4},{value:"Rename pool",id:"rename-pool",level:4},{value:"Delete pool",id:"delete-pool",level:4},{value:"Branches",id:"branches",level:3},{value:"Load Data",id:"load-data",level:4},{value:"Get Branch",id:"get-branch",level:4},{value:"Delete Branch",id:"delete-branch",level:4},{value:"Delete Data",id:"delete-data",level:4},{value:"Merge Branches",id:"merge-branches",level:4},{value:"Revert",id:"revert",level:4},{value:"Index Objects",id:"index-objects",level:4},{value:"Update Index",id:"update-index",level:4},{value:"Query",id:"query",level:3},{value:"Events",id:"events",level:3},{value:"Media Types",id:"media-types",level:2}],k={toc:u};function s(t){var e=t.components,n=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"zed-lake-api"},"Zed lake API"),(0,l.kt)("h2",{id:"status"},(0,l.kt)("em",{parentName:"h2"},"Status")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This is a brief sketch of the functionality exposed in the\nZed API. More detailed documentation of the API will be forthcoming.")),(0,l.kt)("h2",{id:"endpoints"},"Endpoints"),(0,l.kt)("h3",{id:"pools"},"Pools"),(0,l.kt)("h4",{id:"create-pool"},"Create pool"),(0,l.kt)("p",null,"Create a new lake pool."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"POST /pool\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Params")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required.")," Name of the pool. Must be unique to lake.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"layout.order"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"Order of storage by primary key(s) in pool. Possible values: desc, asc. Default: asc.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"layout.keys"),(0,l.kt)("td",{parentName:"tr",align:null},"[","[string]","]"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"Primary key(s) of pool. The element of each inner string array should reflect the hierarchical ordering of named fields within indexed records. Default: [","[ts]","].")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"thresh"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"The size in bytes of each seek index.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example Request")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl -X POST \\\n     -H \'Accept: application/json\' \\\n     -H \'Content-Type: application/json\' \\\n     -d \'{"name": "inventory", "layout": {"keys": [["product","serial_number"],["warehouse"]]}}\' \\\n     http://localhost:9867/pool\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example Response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "pool": {\n    "ts": "2022-04-01T18:18:50.54718Z",\n    "name": "inventory",\n    "id": "0x0ed4f40a9ab28531c25ebc860fac69fe52fe6eb7",\n    "layout": {\n      "order": "asc",\n      "keys": [\n        [\n          "product",\n          "serial_number"\n        ],\n        [\n          "warehouse"\n        ]\n      ]\n    },\n    "seek_stride": 65536,\n    "threshold": 524288000\n  },\n  "branch": {\n    "ts": "2022-04-01T18:18:50.547752Z",\n    "name": "main",\n    "commit": "0x0000000000000000000000000000000000000000"\n  }\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"rename-pool"},"Rename pool"),(0,l.kt)("p",null,"Change a pool's name."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"PUT /pool/{pool}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Params")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pool"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required.")," ID or name of the requested pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required.")," The desired new name of the pool. Must be unique to lake.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example Request")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl -X PUT \\\n     -H 'Accept: application/json' \\\n     -H 'Content-Type: application/json' \\\n     -d '{\"name\": \"catalog\"}' \\\n     http://localhost:9867/pool/inventory\n")),(0,l.kt)("p",null,"On success, HTTP 204 is returned with no response payload."),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"delete-pool"},"Delete pool"),(0,l.kt)("p",null,"Permanently delete a pool."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"DELETE /pool/{pool}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Params")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pool"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required.")," ID or name of the requested pool.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example Request")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl -X DELETE \\\n      http://localhost:9867/pool/inventory\n")),(0,l.kt)("p",null,"On success, HTTP 204 is returned with no response payload."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"branches"},"Branches"),(0,l.kt)("h4",{id:"load-data"},"Load Data"),(0,l.kt)("p",null,"Add data to a pool and return a reference commit ID."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"POST /pool/{pool}/branch/{branch}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Params")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pool"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required.")," ID or name of the pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"branch"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required.")," Name of branch to which data will be loaded.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"various"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required.")," Contents of the posted data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"MIME type of the posted content. If undefined, the service will attempt to introspect the data and determine type automatically.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example Request")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl -X POST \\\n     -H \'Accept: application/json\' \\\n     -H \'Content-Type: application/json\' \\\n     -d \'{"product": {"serial_number": 12345, "name": "widget"}, "warehouse": "chicago"}\n         {"product": {"serial_number": 12345, "name": "widget"}, "warehouse": "miami"}\n         {"product": {"serial_number": 12346, "name": "gadget"}, "warehouse": "chicago"}\' \\\n     http://localhost:9867/pool/inventory/branch/main\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example Response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{"commit":"0x0ed4f42da5763a9500ee71bc3fa5c69f306872de","warnings":[]}\n')),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"get-branch"},"Get Branch"),(0,l.kt)("p",null,"Get information about a branch."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET /pool/{pool}/branch/{branch}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Params")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pool"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required.")," ID or name of the pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"branch"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required.")," Name of branch.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example Request")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl -X GET \\\n     -H 'Accept: application/json' \\\n     http://localhost:9867/pool/inventory/branch/main\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example Response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{"commit":"0x0ed4fa21616ecd8fec9d6fd395ad876db98a5dae","warnings":null}\n')),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"delete-branch"},"Delete Branch"),(0,l.kt)("p",null,"Delete a branch."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"DELETE /pool/{pool}/branch/{branch}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Params")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pool"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required.")," ID or name of the pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"branch"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required.")," Name of branch.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example Request")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl -X DELETE \\\n      http://localhost:9867/pool/inventory/branch/staging\n")),(0,l.kt)("p",null,"On success, HTTP 204 is returned with no response payload."),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"delete-data"},"Delete Data"),(0,l.kt)("p",null,"Take a list of commit IDs or object IDs in a branch and create a deletion\ncommit of all referenced objects."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"POST /pool/{pool}/branch/{branch}/delete\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Params")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pool"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required.")," ID of the pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"branch"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required.")," Name of branch.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"object_ids"),(0,l.kt)("td",{parentName:"tr",align:null},"[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"Commit IDs or object IDs to be deleted.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example Request")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl -X POST \\\n     -H 'Accept: application/json' \\\n     -H 'Content-Type: application/json' \\\n     -d '{\"object_ids\": [\"274Eb1Kn8MTM6qxPyBpVTvYhLLa\", \"274EavbXt546VNelRLNXrzWShNh\"]}' \\\n     http://localhost:9867/pool/inventory/branch/main/delete\n\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example Response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{"commit":"0x0ed4fee861e8fb61568783205a46a218182eba6c","warnings":null}\n')),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"merge-branches"},"Merge Branches"),(0,l.kt)("p",null,"Create a commit with the difference of the child branch added to the selected\nbranch."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"POST /pool/{pool}/branch/{branch}/merge/{child}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Params")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pool"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required.")," ID of the pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"branch"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required.")," Name of branch selected as merge destination.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"child"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required.")," Name of child branch selected as source of merge.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example Request")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl -X POST \\\n     -H 'Accept: application/json' \\\n     http://localhost:9867/pool/inventory/branch/main/merge/staging\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example Response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{"commit":"0x0ed4ffc2566b423ee444c1c8e6bf964515290f4c","warnings":null}\n')),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"revert"},"Revert"),(0,l.kt)("p",null,"Create a revert commit of the specified commit."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"POST /pool/{pool}/branch/{branch}/revert/{commit}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Params")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pool"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required.")," ID of the pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"branch"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required.")," Name of branch on which to revert commit.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"commit"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required.")," ID of commit to be reverted.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example Request")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl -X POST \\\n     -H 'Accept: application/json' \\\n     http://localhost:9867/pool/inventory/branch/main/revert/27D22ifDw3Ms2NMzo8jXpDfpgjc\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example Response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{"commit":"0x0ed500ab6f80e5ac8a1b871bddd88c57fe963ab1","warnings":null}\n')),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"index-objects"},"Index Objects"),(0,l.kt)("p",null,"Create an index of object(s) for the specified rule."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"POST /pool/{pool}/branch/{branch}/index\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Params")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pool"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required.")," ID of the pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"branch"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required.")," Name of branch.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rule_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required.")," Name of indexing rule.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tags"),(0,l.kt)("td",{parentName:"tr",align:null},"[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"IDs of data objects to index.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example Request")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl -X POST \\\n     -H \'Accept: application/json\' \\\n     -H \'Content-Type: application/json\' \\\n     -d \'{"rule_name": "MyRuleGroup", "tags": ["27DAbmqxukfABARaAHauARBJOXH", "27DAbeUBW7llN2mXAadYz00Zjpk"]}\' \\\n     http://localhost:9867/pool/inventory/branch/main/index\n\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example Response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{"commit":"0x0ed510f4648da9742e8e9c35e3439d5b708843e1","warnings":null}\n')),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"update-index"},"Update Index"),(0,l.kt)("p",null,"Apply all rules or a range of index rules for all objects that are not indexed\nin a branch."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"POST /pool/{pool}/branch/{branch}/index/update\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Params")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pool"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required.")," ID of the pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"branch"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required.")," Name of branch.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rule_names"),(0,l.kt)("td",{parentName:"tr",align:null},"[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"Name(s) of index rule(s) to apply. If undefined, all rules will be applied.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example Request")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl -X POST \\\n     -H 'Accept: application/json' \\\n     -H 'Content-Type: application/json' \\\n     -d '{\"rule_names\": [\"MyRuleGroup\", \"AnotherRuleGroup\"]}' \\\n     http://localhost:9867/pool/inventory/branch/main/index/update\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example Response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{"commit":"0x0ed51322b7d69bd0bddad10e31e3211408e34a88","warnings":null}\n')),(0,l.kt)("h3",{id:"query"},"Query"),(0,l.kt)("p",null,"Execute a Zed query against data in a data lake."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"POST /query\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Params")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"Zed query to execute. All data is returned if not specified.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"head.pool"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"Pool to query against Not required if pool is specified in query.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"head.branch"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},'Branch to query against. Defaults to "main".')))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example Request")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl -X POST \\\n     -H 'Accept: application/x-zson' \\\n     -H 'Content-Type: application/json' \\\n     http://localhost:9867/query -d '{\"query\":\"from inventory@main | count() by warehouse\"}'\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example Response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{warehouse:"chicago",count:2(uint64)}\n{warehouse:"miami",count:1(uint64)}\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"events"},"Events"),(0,l.kt)("p",null,"Subscribe to an events feed, which returns an event stream in the format of\n",(0,l.kt)("a",{parentName:"p",href:"https://html.spec.whatwg.org/multipage/server-sent-events.html"},"server-sent events"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET /events\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Params")),(0,l.kt)("p",null,"None"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example Request")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl -X GET \\\n     -H 'Accept: application/json' \\\n     http://localhost:9867/events\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example Response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'event: pool-new\ndata: {"pool_id": "1sMDXpVwqxm36Rc2vfrmgizc3jz"}\n\nevent: pool-update\ndata: {"pool_id": "1sMDXpVwqxm36Rc2vfrmgizc3jz"}\n\nevent: pool-commit\ndata: {"pool_id": "1sMDXpVwqxm36Rc2vfrmgizc3jz", "commit_id": "1tisISpHoWI7MAZdFBiMERXeA2X"}\n\nevent: pool-delete\ndata: {"pool_id": "1sMDXpVwqxm36Rc2vfrmgizc3jz"}\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"media-types"},"Media Types"),(0,l.kt)("p",null,"For response content types, the service can produce a variety of formats. To\nreceive responses in the desired format, include the MIME type of the format in\nthe request's Accept HTTP header."),(0,l.kt)("p",null,"If the Accept header is not specified, the service will return ZSON as the\ndefault response format for the endpoints described above."),(0,l.kt)("p",null,"The supported MIME types are as follows:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Format"),(0,l.kt)("th",{parentName:"tr",align:null},"MIME Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CSV"),(0,l.kt)("td",{parentName:"tr",align:null},"text/csv")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON"),(0,l.kt)("td",{parentName:"tr",align:null},"application/json")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NDJSON"),(0,l.kt)("td",{parentName:"tr",align:null},"application/x-ndjson")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ZJSON"),(0,l.kt)("td",{parentName:"tr",align:null},"application/x-zjson")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ZSON"),(0,l.kt)("td",{parentName:"tr",align:null},"application/x-zson")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ZNG"),(0,l.kt)("td",{parentName:"tr",align:null},"application/x-zng")))))}s.isMDXComponent=!0}}]);