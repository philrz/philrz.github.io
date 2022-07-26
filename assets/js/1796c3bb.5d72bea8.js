"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[7066],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||s;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<s;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5285:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),o=["components"],i={},l="Zed Formats",d={unversionedId:"formats/README",id:"version-v1.1.0/formats/README",title:"Zed Formats",description:"TL;DR The Zed data model defines a new and easy way to manage, store,",source:"@site/versioned_docs/version-v1.1.0/formats/README.md",sourceDirName:"formats",slug:"/formats/",permalink:"/docs/v1.1.0/formats/",tags:[],version:"v1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"union",permalink:"/docs/v1.1.0/language/aggregates/union"},next:{title:"Data Model",permalink:"/docs/v1.1.0/formats/zed"}},u={},c=[{value:"1. Background",id:"1-background",level:2},{value:"1.1 The Tabular-structured Pattern",id:"11-the-tabular-structured-pattern",level:3},{value:"1.2 The Semi-structured Pattern",id:"12-the-semi-structured-pattern",level:3},{value:"1.3 The Hybrid Pattern",id:"13-the-hybrid-pattern",level:3},{value:"2. Zed: A Super-structured Pattern",id:"2-zed-a-super-structured-pattern",level:2},{value:"2.1 Zed and Schemas",id:"21-zed-and-schemas",level:3},{value:"2.2 Type Combinatorics",id:"22-type-combinatorics",level:3},{value:"2.3 Analytics Performance",id:"23-analytics-performance",level:3},{value:"2.4 First-class Types",id:"24-first-class-types",level:3},{value:"2.5 First-class Errors",id:"25-first-class-errors",level:3},{value:"3. The Data Model and Formats",id:"3-the-data-model-and-formats",level:2}],p={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"zed-formats"},"Zed Formats"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"TL;DR")," The Zed data model defines a new and easy way to manage, store,\nand process data utilizing an emerging concept called\n",(0,s.kt)("a",{parentName:"p",href:"#2-zed-a-super-structured-pattern"},"super-structured data"),".\nThe ",(0,s.kt)("a",{parentName:"p",href:"/docs/v1.1.0/formats/zed"},"data model specification")," defines the high-level model that is realized\nin a ",(0,s.kt)("a",{parentName:"p",href:"#3-the-data-model-and-formats"},"family of interoperable serialization formats"),",\nproviding a unified approach to row, columnar, and human-readable formats.\nZed is a superset of both the dataframe/table model of relational systems and the\nsemi-structured model that is used ubiquitously in development as JSON and by NOSQL\ndata stores.  The ZSON spec has ",(0,s.kt)("a",{parentName:"p",href:"/docs/v1.1.0/formats/zson#3-examples"},"a few examples"),".")),(0,s.kt)("h2",{id:"1-background"},"1. Background"),(0,s.kt)("p",null,"Zed offers a new and improved way to think about and manage data."),(0,s.kt)("p",null,"Modern data models are typically described in terms of their ",(0,s.kt)("em",{parentName:"p"},"structured-ness"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},"tabular-structured"),", often simply called ",(0,s.kt)("em",{parentName:"li"},'"structured"'),",\nwhere a specific schema is defined to describe a table and values are enumerated that conform to that schema;"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},"semi-structured"),", where arbitrarily complex, hierarchical data structures\ndefine the data and values do not fit neatly into tables, e.g., JSON and XML; and"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},"unstructured"),", where arbitrary text is formatted in accordance with\nexternal, often vague, rules for its interpretation.")),(0,s.kt)("h3",{id:"11-the-tabular-structured-pattern"},"1.1 The Tabular-structured Pattern"),(0,s.kt)("p",null,"CSV is arguably the simplest but most frustrating format that follows the tabular-structured\npattern.  It provides a bare bones schema consisting of the names of the columns as the\nfirst line of a file followed by a list of comma-separated, textual values\nwhose types must be inferred from the text.  The lack of a universally adopted\nspecification for CSV is an all too common source of confusion and frustration."),(0,s.kt)("p",null,"The traditional relational database, on the other hand,\noffers the classic, comprehensive example of the tabular-structured pattern.\nThe table columns have precise names and types.\nYet, like CSV, there is no universal standard format for relational tables.\nThe ",(0,s.kt)("a",{parentName:"p",href:"https://sqlite.org/fileformat.html"},(0,s.kt)("em",{parentName:"a"},"SQLite file format")),"\nis arguably the ",(0,s.kt)("em",{parentName:"p"},"de facto")," standard for relational data,\nbut this format describes a whole, specific database --- indexes and all ---\nrather than a stand-alone table."),(0,s.kt)("p",null,"Instead, file formats like Avro, ORC, and Parquet arose to represent tabular data\nwith an explicit schema followed by a sequence of values that conform to the schema.\nWhile Avro and Parquet schemas can also represent semi-structured data, all of the\nvalues in a given Avro or Parquet file must conform to the same schema.\nThe ",(0,s.kt)("a",{parentName:"p",href:"https://iceberg.apache.org/#spec/"},"Iceberg specification"),"\ndefines data types and metadata schemas for how large relational tables can be\nmanaged as a collection of Avro, ORC, and/or Parquet files."),(0,s.kt)("h3",{id:"12-the-semi-structured-pattern"},"1.2 The Semi-structured Pattern"),(0,s.kt)("p",null,"JSON, on the other hand, is the ubiquitous example of the semi-structured pattern.\nEach JSON value is self-describing in terms of its\nstructure and types, though the JSON type system is limited."),(0,s.kt)("p",null,"When a sequence of JSON objects is organized into a stream\n(perhaps ",(0,s.kt)("a",{parentName:"p",href:"http://ndjson.org/"},"separated by newlines"),")\neach value can take on any form.\nWhen all the values have the same form, the JSON sequence\nbegins to look like a relational table, but the lack of a comprehensive type system,\na union type, and precise semantics for columnar layout limits this interpretation."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://bsonspec.org/"},"BSON"),"\nand ",(0,s.kt)("a",{parentName:"p",href:"https://amzn.github.io/ion-docs/"},"Ion"),'\nwere created to provide a type-rich elaboration of the\nsemi-structured model of JSON along with performant binary representations\nthough there is no mechanism for precisely representing the type of\na complex value like an object or an array other than calling it\ntype "object" or type "array", e.g., as compared to "object with field s\nof type string" or "array of number".'),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSON Schema"),"\naddresses JSON's lack of schemas with an approach to augment\none or more JSON values with a schema definition itself expressed in JSON.\nThis creates a parallel type system for JSON, which is useful and powerful in many\ncontexts, but introduces schema-management complexity when simply trying to represent\ndata in its natural form."),(0,s.kt)("h3",{id:"13-the-hybrid-pattern"},"1.3 The Hybrid Pattern"),(0,s.kt)("p",null,'As the utility and ease of the semi-structured design pattern emerged,\nrelational system design, originally constrained by the tabular-structured\ndesign pattern, has embraced the semi-structured design pattern\nby adding support for semi-structured table columns.\n"Just put JSON in a column."'),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://asterixdb.apache.org/docs/0.9.7.1/sqlpp/manual.html"},"SQL++"),"\npioneered the extension of SQL to semi-structured data by\nadding support for referencing and unwinding complex, semi-structured values,\nand most modern SQL query engines have adopted variations of this model\nand have extended the relational model with a semi-structured column type."),(0,s.kt)("p",null,'But once you have put a number of columns of JSON data into a relational\ntable, is it still appropriately called "structured"?\nInstead, we call this approach the hybrid tabular-/semi-structured pattern,\nor more simply, ',(0,s.kt)("em",{parentName:"p"},'"the hybrid pattern"'),"."),(0,s.kt)("h2",{id:"2-zed-a-super-structured-pattern"},"2. Zed: A Super-structured Pattern"),(0,s.kt)("p",null,"The insight in Zed is to remove the tabular and schema concepts from\nthe underlying data model altogether and replace them with a granular and\nmodern type system inspired by general-purpose programming languages.\nInstead of defining a single, composite schema to\nwhich all values must conform, the Zed type system allows each value to freely\nexpress its type in accordance with the type system."),(0,s.kt)("p",null,'In this approach,\nZed is neither tabular nor semi-structured.  Zed is "super-structured".'),(0,s.kt)("p",null,"In particular, the Zed record type looks like a schema but when\nserializing Zed data, the model is very different.  A Zed sequence does not\ncomprise a record-type declaration followed by a sequence of\nhomogeneously-typed record values, but instead,\nis a sequence of arbitrarily typed Zed values, which may or may not all\nbe records."),(0,s.kt)("p",null,"Yet when a sequence of Zed values ",(0,s.kt)("em",{parentName:"p"},"in fact conforms to a uniform record type"),",\nthen such a collection of Zed records looks precisely like a relational table.\nHere, the record type\nof such a collection corresponds to a well-defined schema consisting\nof field names (i.e, column names) where each field has a specific Zed type.\nZed also has named types, so by simply naming a particular record type\n(i.e., a schema), a relational table can be projected from a pool of Zed data\nwith a simple type query for that named type."),(0,s.kt)("p",null,"But unlike traditional relational tables, these Zed-constructed tables can have arbitrary\nstructure in each column as Zed allows the fields of a record\nto have an arbitrary type.  This is very different compared to the hybrid pattern:\nall Zed data at all levels conforms to the same data model.  Here, both the\ntabular-structured and semi-structured patterns are representable in a single model.\nUnlike the hybrid pattern, systems based on Zed have\nno need to simultaneously support two very different data models."),(0,s.kt)("p",null,"In other words, Zed unifies the relational data model of SQL tables\nwith the document model of JSON into a ",(0,s.kt)("em",{parentName:"p"},"super-structured"),"\ndesign pattern enabled by the Zed type system.\nAn explicit, uniquely-defined type of each value precisely\ndefines its entire structure, i.e., its super-structure.  There is\nno need to traverse each hierarchical value --- as with JSON, BSON, or Ion ---\nto discover each value's structure."),(0,s.kt)("p",null,"And because Zed derives it design from the vast landscape\nof existing formats and data models, it was deliberately designed to be\na superset of --- and thus interoperable with --- a broad range of formats\nincluding JSON, BSON, Ion, Avro, ORC, Parquet, CSV, JSON Schema, and XML."),(0,s.kt)("p",null,"As an example, most systems that are based on semi-structured data would\nsay the JSON value"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{"a":[1,"foo"]}\n')),(0,s.kt)("p",null,"is of type object and the value of key ",(0,s.kt)("inlineCode",{parentName:"p"},"a")," is type array.\nIn Zed, however, this value's type is type ",(0,s.kt)("inlineCode",{parentName:"p"},"record")," with field ",(0,s.kt)("inlineCode",{parentName:"p"},"a"),"\nof type ",(0,s.kt)("inlineCode",{parentName:"p"},"array")," of type ",(0,s.kt)("inlineCode",{parentName:"p"},"union")," of ",(0,s.kt)("inlineCode",{parentName:"p"},"int64")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"string"),",\nexpressed succinctly in ZSON as"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"{a:[(int64,string)]}\n")),(0,s.kt)("p",null,"This is super-structuredness in a nutshell."),(0,s.kt)("h3",{id:"21-zed-and-schemas"},"2.1 Zed and Schemas"),(0,s.kt)("p",null,"While the Zed data model removes the schema constraint,\nthe implication here is not that schemas are unimportant;\nto the contrary, schemas are foundational.  Schemas not only define agreement\nand semantics between communicating entities, but also serve as the cornerstone\nfor organizing and modeling data for data engineering and business intelligence."),(0,s.kt)("p",null,"That said, schemas often create complexity in system designs\nwhere components might simply want to store and communicate data in some\nmeaningful way.  For example, an ETL pipeline should not break when upstream\nstructural changes prevent data from fitting in downstream relational tables.\nInstead, the pipeline should continue to operate and the data should continue\nto land on the target system without having to fit into a predefined table,\nwhile also preserving its super-structure."),(0,s.kt)("p",null,"This is precisely what Zed enables.  A system layer above and outside\nthe scope of the Zed data layer can decide how to adapt to the structural\nchanges with or without administrative intervention."),(0,s.kt)("p",null,"To this end, whether all the values must conform to a schema and\nhow schemas are managed, revised, and enforced is all outside the scope of Zed;\nrather, the Zed data model provides a flexible and rich foundation\nfor schema interpretation and management."),(0,s.kt)("h3",{id:"22-type-combinatorics"},"2.2 Type Combinatorics"),(0,s.kt)("p",null,"A common objection to using a type system to represent schemas is that\ndiverse applications generating arbitrarily structured data can produce\na combinatorial explosion of types for each shape of data."),(0,s.kt)("p",null,'In practice, this condition rarely arises.  Applications generating\n"arbitrary" JSON data generally conform to a well-defined set of\nJSON object structures.'),(0,s.kt)("p",null,"A few rare applications carry unique data values as JSON object keys,\nthough this is considered bad practice."),(0,s.kt)("p",null,"Even so, this is all manageable in the Zed data model as types are localized\nin scope.  The number of types that must be defined in a stream of values\nis linear in the input size.  Since data is self-describing and there is\nno need for a global schema registry in Zed, this hypothetical problem is moot."),(0,s.kt)("h3",{id:"23-analytics-performance"},"2.3 Analytics Performance"),(0,s.kt)("p",null,"One might think that removing schemas from the Zed data model would conflict\nwith an efficient columnar format for Zed, which is critical for\nhigh-performance analytics.\nAfter all, database\ntables and formats like Parquet and ORC all require schemas to organize values\nand then rely upon the natural mapping of schemas to columns."),(0,s.kt)("p",null,"Super-structure, on the other hand, provides an alternative approach to columnar structure.\nInstead of defining a schema and then fitting a sequence of values into their appropriate\ncolumns based on the schema, Zed values self-organize into columns based on their\nsuper-structure.  Here columns are created dynamically as data is analyzed\nand each top-level type induces a specific set of columns.  When all of the\nvalues have the same top-level type (i.e., like a schema), then the Zed columnar\nobject is just as performant as a traditional schema-based columnar format like Parquet."),(0,s.kt)("h3",{id:"24-first-class-types"},"2.4 First-class Types"),(0,s.kt)("p",null,"With first-class types, any type can also be a value, which means that in\na properly designed query and analytics system based on Zed, a type can appear\nanywhere that a value can appear.  In particular, types can be aggregation keys."),(0,s.kt)("p",null,"This is very powerful for data discovery and introspection.  For example,\nto count the different shapes of data, you might have a SQL-like query,\noperating on each input value as ",(0,s.kt)("inlineCode",{parentName:"p"},"this"),", that has the form:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"  SELECT count(), typeof(this) as shape GROUP by shape, count\n")),(0,s.kt)("p",null,"Likewise, you could select a sample value of each shape like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"  SELECT shape FROM (\n    SELECT any(this) as sample, typeof(this) as shape GROUP by shape,sample\n  )\n")),(0,s.kt)("p",null,"The Zed language is exploring syntax so that such operations are tighter\nand more natural given the super-structure of Zed.  For example, the above\ntwo SQL-like queries could be written as:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"  count() by shape:=typeof(this)\n  any(this) by typeof(this) | cut any\n")),(0,s.kt)("h3",{id:"25-first-class-errors"},"2.5 First-class Errors"),(0,s.kt)("p",null,"In SQL based systems, errors typically\nresult in cryptic messages or null values offering little insight as to the\nactual cause of the error."),(0,s.kt)("p",null,"Zed however includes first-class errors.  When combined with the super-structured\ndata model, error values may appear anywhere in the output and operators\ncan propagate or easily wrap errors so complicated analytics pipelines\ncan be debugged by observing the location of errors in the output results."),(0,s.kt)("h2",{id:"3-the-data-model-and-formats"},"3. The Data Model and Formats"),(0,s.kt)("p",null,"The concept of super-structured data and first-class types and errors\nis solidified in the ",(0,s.kt)("a",{parentName:"p",href:"/docs/v1.1.0/formats/zed"},"Zed data model specification"),",\nwhich defines the model but not the serialization formats."),(0,s.kt)("p",null,"A set of companion documents define a family of tightly integrated\nserialization formats that all adhere to the same Zed data model,\nproviding a unified approach to row, columnar, and human-readable formats:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/v1.1.0/formats/zson"},"ZSON")," is a JSON-like, human readable format for Zed data.  All JSON\ndocuments are Zed values as the ZSON format is a strict superset of the JSON syntax."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/v1.1.0/formats/zng"},"ZNG")," is a row-based, binary representation of Zed data somewhat like\nAvro but with Zed's more general model to represent a sequence of arbitrarily-typed\nvalues."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/v1.1.0/formats/zst"},"ZST")," is a columnar version of ZNG like Parquet or ORC but also\nembodies Zed's more general model for heterogeneous and self-describing schemas."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/v1.1.0/formats/zjson"},"Zed over JSON")," defines a JSON format for encapsulating Zed data\nin JSON for easy decoding by JSON-based clients, e.g.,\nthe ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/brimdata/zealot"},"Zealot JavaScript library"),"\nand the ",(0,s.kt)("a",{parentName:"li",href:"../../python/zed"},"Zed Python library"),".")),(0,s.kt)("p",null,"Because all of the formats conform to the same Zed data model, conversions between\na human-readable form, a row-based binary form, and a row-based columnar form can\nbe trivially carried out with no loss of information.  This is the best of both worlds:\nthe same data can be easily expressed in and converted between a human-friendly\nand easy-to-program text form alongside efficient row and columnar formats."))}m.isMDXComponent=!0}}]);