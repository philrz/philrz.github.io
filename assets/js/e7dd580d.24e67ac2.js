"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[8628],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,h=u["".concat(s,".").concat(p)]||u[p]||m[p]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},791:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],l={sidebar_position:2,sidebar_label:"Format"},s="Zed Lake Format",c={unversionedId:"lake/format",id:"lake/format",title:"Zed Lake Format",description:"Status",source:"@site/docs/lake/format.md",sourceDirName:"lake",slug:"/lake/format",permalink:"/docs/next/lake/format",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Format"},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/docs/next/lake/api"},next:{title:"Libraries",permalink:"/docs/next/libraries/"}},d={},m=[{value:"<em>Status</em>",id:"status",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Cloud Object Model",id:"cloud-object-model",level:2},{value:"Immutable Objects",id:"immutable-objects",level:3},{value:"Data Objects",id:"data-objects",level:4},{value:"Commit History",id:"commit-history",level:4},{value:"Transaction Journal",id:"transaction-journal",level:3},{value:"Journal Concurrency Control",id:"journal-concurrency-control",level:4},{value:"Configuration State",id:"configuration-state",level:4},{value:"Merge on Read",id:"merge-on-read",level:3},{value:"Object Naming",id:"object-naming",level:3}],u={toc:m};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"zed-lake-format"},"Zed Lake Format"),(0,i.kt)("h2",{id:"status"},(0,i.kt)("em",{parentName:"h2"},"Status")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This document is a rough draft and work in progress.  We plan to\nsoon bring it up to date with the current implementation and maintain it\nas we add new capabilities to the system.")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"To support the client-facing ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/commands/zed#1-the-lake-model"},"Zed lake semantics"),"\nimplemented by the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/commands/zed"},(0,i.kt)("inlineCode",{parentName:"a"},"zed")," command"),", we are developing\nan open specification for the Zed lake storage format described in this document.\nAs we make progress on the Zed lake model, we will update this document\nas we go."),(0,i.kt)("p",null,"The Zed Lake storage format is somewhat analagous the emerging\ncloud table formats like ",(0,i.kt)("a",{parentName:"p",href:"https://iceberg.apache.org/spec/"},"Iceberg"),",\nbut differs but differs in a fundamental way: there are no tables in a Zed Lake."),(0,i.kt)("p",null,"On the contrary, we believe a better approach for organizing modern, eclectic\ndata is based on a type system rather than a collection of tables\nand relational schemas.  Since relations, tables, schemas, data frames,\nParquet files, Avro files, JSON, CSV, XML, and so forth are all subsets of the\nZed's super-structured type system, a data lake based on Zed holds the promise\nto provide a universal data representation for all of these different approaches to data."),(0,i.kt)("p",null,"Also, while we are not currently focused on building a SQL engine for the Zed lake,\nit is most certainly possible to do so, as a Zed record type\n",(0,i.kt)("a",{parentName:"p",href:"/docs/next/formats/#2-zed-a-super-structured-pattern"},"is analagous to"),"\na SQL table definition.  SQL tables can essentially be dynamically projected\nvia a table virtualization layer built on top of the Zed lake model."),(0,i.kt)("p",null,"All data and metadata in a Zed lake conforms to the Zed data model, which materially\nsimplifies development, test, introspection, and so forth.  For example,\nsearch indexes are just ZNG files with an embedded B-Tree structure.\nThere is no need to create a special index file format and all the related\ntooling and support functions to manipulate a custom format."),(0,i.kt)("h2",{id:"cloud-object-model"},"Cloud Object Model"),(0,i.kt)("p",null,"Every data element in a Zed lake is either of two fundamental object types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a single-writer ",(0,i.kt)("em",{parentName:"li"},"immutable object"),", or"),(0,i.kt)("li",{parentName:"ul"},"a multi-writer ",(0,i.kt)("em",{parentName:"li"},"transaction journal"),".")),(0,i.kt)("h3",{id:"immutable-objects"},"Immutable Objects"),(0,i.kt)("p",null,"All imported data in a data pool is composed of immutable objects, which are organized\naround a primary data object.  Each data object is composed of one or more immutable objects\nall of which share a common, globally unique identifier,\nwhich is referred to below generically as ",(0,i.kt)("inlineCode",{parentName:"p"},"<id>")," below."),(0,i.kt)("p",null,"These identifiers are ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/segmentio/ksuid"},"KSUIDs"),".\nThe KSUID allocation scheme\nprovides a decentralized solution for creating globally unique IDs.\nKSUIDs have embedded timestamps so the creation time of\nany object named in this way can be derived.  Also, a simple lexicographic\nsort of the KSUIDs results in a creation-time ordering (though this ordering\nis not relied on for causal relationships since clock skew can violate\nsuch an assumption)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"While a Zed lake is defined in terms of a cloud object store, it may also\nbe realized on top of a file system, which provides a convenient means for\nlocal, small-scale deployments for test/debug workflows.  Thus, for simple use cases,\nthe complexity of running an object-store service may be avoided.")),(0,i.kt)("h4",{id:"data-objects"},"Data Objects"),(0,i.kt)("p",null,"A data object is created by a single writer using a globally unique name\nwith an embedded KSUID.  "),(0,i.kt)("p",null,"New objects are written in their entirety.  No updates, appends, or modifications\nmay be made once an object exists.  Given these semantics, any such object may be\ntrivially cached as neither its name nor content ever change."),(0,i.kt)("p",null,"Since the object's name is globally unique and the\nresulting object is immutable, there is no possible write concurrency to manage\nwith respect to a given object."),(0,i.kt)("p",null,"A data object is composed of"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the primary data object stored as one or two objects (for sequence and/or vector layout),"),(0,i.kt)("li",{parentName:"ul"},"an optional seek index, and"),(0,i.kt)("li",{parentName:"ul"},"zero or more search indexes.")),(0,i.kt)("p",null,"Data objects may be either in sequence form (i.e., ZNG) or vector form (i.e., ZST),\nor both forms may be present as a query optimizer may choose to use whatever\nrepresentation is more efficient.\nWhen both sequence and vector data objects are present, they must contain the same\nunderlying Zed data."),(0,i.kt)("p",null,"Immutable objects are named as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"object type"),(0,i.kt)("th",{parentName:"tr",align:null},"name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"vector data"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<pool-id>/data/<id>.zst"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sequence data"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<pool-id>/data/<id>.zng"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sequence seek index"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<pool-id>/data/<id>-seek.zng"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"search index"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<pool-id>/index/<id>-<index-id>.zng"))))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<id>")," is the KSUID of the data object.\n",(0,i.kt)("inlineCode",{parentName:"p"},"<index-id>")," is the KSUID of an index object created according to the\nindex rules described above.  Every index object is defined\nwith respect to a data object."),(0,i.kt)("p",null,"The seek index maps pool key values to seek offsets in the ZNG file thereby\nallowing a scan to do a byte-range retrieval of the ZNG object when\nprocessing only a subset of data."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note the ZST format allows individual vector segments to be read in isolation\nand the in-memory ZST representation supports random access so there is\nno need to have a seek index for the vector object.")),(0,i.kt)("h4",{id:"commit-history"},"Commit History"),(0,i.kt)("p",null,"A branch's commit history is the definitive record of the evolution of data in\nthat pool in a transactionally consistent fashion."),(0,i.kt)("p",null,"Each commit object entry is identified with its ",(0,i.kt)("inlineCode",{parentName:"p"},"commit ID"),".\nObjects are immutable and uniquely named so there is never a concurrent write\ncondition."),(0,i.kt)("p",null,'The "add" and "commit" operations are transactionally stored\nin a chain of commit objects.  Any number of adds (and deletes) may appear\nin a commit object.  All of the operations that belong to a commit are\nidentified with a commit identifier (ID).'),(0,i.kt)("p",null,"As each commit object points to its parent (except for the initial commit\nin main), the collection of commit objects in a pool forms a tree."),(0,i.kt)("p",null,"Each commit object contains a sequence of ",(0,i.kt)("em",{parentName:"p"},"actions"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Add")," to add a data object reference to a pool,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Delete")," to delete a data object reference from a pool,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AddIndex")," to bind an index object to a data object to prune the data object\nfrom a scan when possible using the index,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DeleteIndex")," to remove an index object reference to its data object, and"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Commit")," for providing metadata about each commit.")),(0,i.kt)("p",null,"The actions are not grouped directly by their commit ID but instead each\naction serialization includes its commit ID."),(0,i.kt)("p",null,'The chain of commit objects starting at any commit and following\nthe parent pointers to the original commit is called the "commit log".\nThis log represents the definitive record of a branch\'s present\nand historical content, and accessing its complete detail can provide\ninsights about data layout, provenance, history, and so forth.'),(0,i.kt)("h3",{id:"transaction-journal"},"Transaction Journal"),(0,i.kt)("p",null,"State that is mutable is built upon a transaction journal of immutable\ncollections of entries.  In this way, there are no objects in the\nstorage footprint that are ever modified.  Instead, the journal captures\nchanges and journal snapshots are used to provide synchronization points\nfor efficient access to the journal (so the entire journal need not be\nread to create the current state) and old journal entries may be removed\nbased on retention policy."),(0,i.kt)("p",null,"The journal may be updated concurrently by multiple writers so concurrency\ncontrols are included (see ",(0,i.kt)("a",{parentName:"p",href:"#journal-concurrency-control"},"Journal Concurrency Control"),"\nbelow) to provide atomic updates."),(0,i.kt)("p",null,'A journal entry simply contains actions that modify the visible "state" of\nthe pool by changing branch name to commit object mappings.  Note that\nadding a commit object to a pool changes nothing until a branch pointer\nis mutated to point at that object.'),(0,i.kt)("p",null,"Each atomic journal commit object is a ZNG file numbered 1 to the end of journal (HEAD),\ne.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"1.zng"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"2.zng"),", etc., each number corresponding to a journal ID.\nThe 0 value is reserved as the null journal ID.\nThe journal's TAIL begins at 1 and is increased as journal entries are purged.\nEntries are added at the HEAD and removed from the TAIL.\nOnce created, a journal entry is never modified but it may be deleted and\nnever again allocated.\nThere may be 1 or more entries in each commit object."),(0,i.kt)("p",null,"Each journal entry implies a snapshot of the data in a pool.  A snapshot\nis computed by applying the transactions in sequence from entry TAIL to\nthe journal entry in question, up to HEAD.  This gives the set of commit IDs\nthat comprise a snapshot."),(0,i.kt)("p",null,"The set of branch pointers in a pool is assembled at any point in the journal's history\nby scanning a journal that includes ADD, UPDATE, and DELETE actions for the\nmapping of a branch name to a commit object.  A timestamp is recorded in\neach action to provide for time travel."),(0,i.kt)("p",null,'For efficiency, a journal entry\'s snapshot may be stored as a "cached snapshot"\nalongside the journal entry.  This way, the snapshot at HEAD may be\nefficiently computed by locating the most recent cached snapshot and scanning\nforward to HEAD.'),(0,i.kt)("h4",{id:"journal-concurrency-control"},"Journal Concurrency Control"),(0,i.kt)("p",null,"To provide for atomic commits, a writer must be able to atomically update\nthe HEAD of the log.  There are three strategies for doing so."),(0,i.kt)("p",null,'First, if the cloud service offers "put-if-missing" semantics, then a writer\ncan simply read the HEAD file and use put-if-missing to write to the\njournal at position HEAD+1.  If this fails because of a race, then the writer\ncan simply write at position HEAD+2 and so forth until it succeeds (and\nthen update the HEAD object).  Note that there can be a race in updating\nHEAD, but HEAD is always less than or equal to the real end of journal,\nand this condition can be self-corrected by probing for HEAD+1 whenever\nthe HEAD of the journal is accessed.'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note that put-if-missing can be emulated on a local file system by opening\na file for exclusive access and checking that it has zero length after\na successful open.")),(0,i.kt)("p",null,"Second, strong read/write ordering semantics (as exists in Amazon S3)\ncan be used to implement transactional journal updates as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"TBD: this is worked out but needs to be written up"))),(0,i.kt)("p",null,"Finally, since the above algorithm requires many round trips to the storage\nsystem and such round trips can be tens of milliseconds, another approach\nis to simply run a lock service as part of a cloud deployment that manages\na mutex lock for each pool's journal."),(0,i.kt)("h4",{id:"configuration-state"},"Configuration State"),(0,i.kt)("p",null,"Configuration state describing a lake or pool is also stored in mutable objects.\nZed lakes simply use a commit journal to store configuration like the\nlist of pools and pool attributes, indexing rules used across pools,\netc.  Here, a generic interface to a commit journal manages any configuration\nstate simply as a key-value store of snapshots providing time travel over\nthe configuration history."),(0,i.kt)("h3",{id:"merge-on-read"},"Merge on Read"),(0,i.kt)("p",null,"To support ",(0,i.kt)("em",{parentName:"p"},"sorted scans"),",\ndata objects are store in a sorted order defined by the pool's sort key.\nThe sort key may be a composite key compised of primary, secondary, etc\ncomponent keys."),(0,i.kt)("p",null,"When the key range of objects overlap, they may be read in parallel\nin merged in sorted order.\nThis is called the ",(0,i.kt)("em",{parentName:"p"},"merge scan"),"."),(0,i.kt)("p",null,"If many overlapping data objects arise, performing a merge scan\non every read can be inefficient.\nThis can arise when\nmany random data ",(0,i.kt)("inlineCode",{parentName:"p"},"load"),' operations involving perhaps "late" data\n(e.g., the pool key is a timestamp and records with old timestamp values regularly\nshow up and need to be inserted into the past).  The data layout can become\nfragmented and less efficient to scan, requiring a scan to merge data\nfrom a potentially large number of different objects.'),(0,i.kt)("p",null,"To solve this problem, the Zed lake format follows the\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Log-structured_merge-tree"},"LSM")," design pattern.\nSince records in each data object are stored in sorted order, a total order over\na collection of objects (e.g., the collection coming from a specific set of commits)\ncan be produced by executing a sorted scan and rewriting the results back to the pool\nin a new commit.  In addition, the objects comprising the total order\ndo not overlap.  This is just the basic LSM algorithm at work."),(0,i.kt)("h3",{id:"object-naming"},"Object Naming"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<lake-path>/\n  lake.zng\n  pools/\n    HEAD\n    TAIL\n    1.zng\n    2.zng\n    ...\n  index_rules/\n    HEAD\n    TAIL\n    1.zng\n    2.zng\n    ...\n    ...\n  <pool-id-1>/\n    branches/\n      HEAD\n      TAIL\n      1.zng\n      2.zng\n      ...\n    commits/\n      <id1>.zng\n      <id2>.zng\n      ...\n    data/\n      <id1>.{zng,zst}\n      <id2>.{zng,zst}\n      ...\n    index/\n      <id1>-<index-id-1>.zng\n      <id1>-<index-id-2>.zng\n      ...\n      <id2>-<index-id-1>.zng\n      ...\n  <pool-id-2>/\n  ...\n")))}p.isMDXComponent=!0}}]);