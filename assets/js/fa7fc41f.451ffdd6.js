"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[8592],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return y}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),y=r,k=u["".concat(d,".").concat(y)]||u[y]||m[y]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6822:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:0,sidebar_label:"Data Model"},d="Zed Data Model",p={unversionedId:"formats/zed",id:"formats/zed",title:"Zed Data Model",description:"Zed data is defined as an ordered sequence of one or more typed data values.",source:"@site/docs/formats/zed.md",sourceDirName:"formats",slug:"/formats/zed",permalink:"/docs/next/formats/zed",editUrl:"https://github.com/brimdata/zed/tree/main/docs/formats/zed.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Data Model"},sidebar:"tutorialSidebar",previous:{title:"Zed Formats",permalink:"/docs/next/formats/"},next:{title:"ZNG",permalink:"/docs/next/formats/zng"}},s={},m=[{value:"1. Primitive Types",id:"1-primitive-types",level:2},{value:"2. Complex Types",id:"2-complex-types",level:2},{value:"2.1 Record",id:"21-record",level:3},{value:"2.2 Array",id:"22-array",level:3},{value:"2.3 Set",id:"23-set",level:3},{value:"2.4 Map",id:"24-map",level:3},{value:"2.5 Union",id:"25-union",level:3},{value:"2.6 Enum",id:"26-enum",level:3},{value:"2.7 Error",id:"27-error",level:3},{value:"3. Named Type",id:"3-named-type",level:2},{value:"4. Null Values",id:"4-null-values",level:2}],u={toc:m};function y(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"zed-data-model"},"Zed Data Model"),(0,l.kt)("p",null,'Zed data is defined as an ordered sequence of one or more typed data values.\nEach value\'s type is either a "primitive type", a "complex type", the "type type",\na "named type", or the "null type".'),(0,l.kt)("h2",{id:"1-primitive-types"},"1. Primitive Types"),(0,l.kt)("p",null,"Primitive types include signed and unsigned integers, IEEE binary and decimal\nfloating point, string, byte sequence, Boolean, IP address, IP network,\nnull, and a first-class type ",(0,l.kt)("em",{parentName:"p"},"type"),"."),(0,l.kt)("p",null,"There are 30 types of primitive values with syntax defined as follows:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"uint8")),(0,l.kt)("td",{parentName:"tr",align:null},"unsigned 8-bit integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"uint16")),(0,l.kt)("td",{parentName:"tr",align:null},"unsigned 16-bit integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"uint32")),(0,l.kt)("td",{parentName:"tr",align:null},"unsigned 32-bit integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"uint64")),(0,l.kt)("td",{parentName:"tr",align:null},"unsigned 64-bit integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"uint128")),(0,l.kt)("td",{parentName:"tr",align:null},"unsigned 128-bit integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"uint256")),(0,l.kt)("td",{parentName:"tr",align:null},"unsigned 256-bit integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int8")),(0,l.kt)("td",{parentName:"tr",align:null},"signed 8-bit integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int16")),(0,l.kt)("td",{parentName:"tr",align:null},"signed 16-bit integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int32")),(0,l.kt)("td",{parentName:"tr",align:null},"signed 32-bit integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int64")),(0,l.kt)("td",{parentName:"tr",align:null},"signed 64-bit integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int128")),(0,l.kt)("td",{parentName:"tr",align:null},"signed 128-bit integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int256")),(0,l.kt)("td",{parentName:"tr",align:null},"signed 256-bit integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"duration")),(0,l.kt)("td",{parentName:"tr",align:null},"signed 64-bit integer as nanoseconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"time")),(0,l.kt)("td",{parentName:"tr",align:null},"signed 64-bit integer as nanoseconds from epoch")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"float16")),(0,l.kt)("td",{parentName:"tr",align:null},"IEEE-754 binary16")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"float32")),(0,l.kt)("td",{parentName:"tr",align:null},"IEEE-754 binary32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"float64")),(0,l.kt)("td",{parentName:"tr",align:null},"IEEE-754 binary64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"float128")),(0,l.kt)("td",{parentName:"tr",align:null},"IEEE-754 binary128")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"float256")),(0,l.kt)("td",{parentName:"tr",align:null},"IEEE-754 binary256")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"decimal32")),(0,l.kt)("td",{parentName:"tr",align:null},"IEEE-754 decimal32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"decimal64")),(0,l.kt)("td",{parentName:"tr",align:null},"IEEE-754 decimal64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"decimal128")),(0,l.kt)("td",{parentName:"tr",align:null},"IEEE-754 decimal128")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"decimal256")),(0,l.kt)("td",{parentName:"tr",align:null},"IEEE-754 decimal256")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:null},"the Boolean value ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bytes")),(0,l.kt)("td",{parentName:"tr",align:null},"a bounded sequence of 8-bit bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"a UTF-8 string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ip")),(0,l.kt)("td",{parentName:"tr",align:null},"an IPv4 or IPv6 address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"net")),(0,l.kt)("td",{parentName:"tr",align:null},"an IPv4 or IPv6 address and net mask")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},"a Zed type value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},"the null type")))),(0,l.kt)("p",null,"The ",(0,l.kt)("em",{parentName:"p"},"type")," type  provides for first-class types and even though a type value can\nrepresent a complex type, the value itself is a singleton."),(0,l.kt)("p",null,"Two type values are equivalent if their underlying types are equal.  Since\nevery type in the Zed type system is uniquely defined, type values are equal\nif and only if their corresponding types are uniquely equal."),(0,l.kt)("p",null,"The ",(0,l.kt)("em",{parentName:"p"},"null")," type is a primitive type representing only a ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," value.\nA ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," value can have any type."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note that ",(0,l.kt)("inlineCode",{parentName:"p"},"time")," values correspond to 64-bit epoch nanoseconds and thus\nnot every valid RFC 3339 date and time string represents a valid Zed time.\nIn addition, nanosecond epoch times overflow on April 11, 2262.\nFor the world of 2262, a new epoch can be created well in advance\nand the old time epoch and new time epoch can live side by side with\nthe old using a named type for the new epoch time referring to the old ",(0,l.kt)("inlineCode",{parentName:"p"},"time"),".\nAn app that wants more than 64 bits of timestamp precision can always use\na named type of a ",(0,l.kt)("inlineCode",{parentName:"p"},"bytes")," type and do its own conversions to and from the\ncorresponding bytes values.  A time with a local time zone can be represented\nas a Zed record of a time field and a zone field")),(0,l.kt)("h2",{id:"2-complex-types"},"2. Complex Types"),(0,l.kt)("p",null,"Complex types are composed of primitive types and/or other complex types.\nThe categories of complex types include:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"record")," - an ordered collection of zero or more named values called fields,"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"array")," - an ordered sequence of zero or more values called elements,"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"set")," - a set of zero or more unique values called elements,"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"map")," - a collection of zero or more key/value pairs where the keys are of a\nuniform type called the key type and the values are of a uniform type called\nthe value type,"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"union")," - a type representing values whose type is any of a specified collection of two or more unique types,"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"enum")," - a type representing a finite set of symbols typically representing categories, and"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"error"),' - any value wrapped as an "error".')),(0,l.kt)("p",null,"The type system comprises a total order:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The order of primitive types corresponds to the order in the table above."),(0,l.kt)("li",{parentName:"ul"},"All primitive types are ordered before any complex types."),(0,l.kt)("li",{parentName:"ul"},"The order of complex type categories corresponds to the order above."),(0,l.kt)("li",{parentName:"ul"},"For complex types of the same category, the order is defined below.")),(0,l.kt)("h3",{id:"21-record"},"2.1 Record"),(0,l.kt)("p",null,'A record comprises an ordered set of zero or more named values\ncalled "fields".  The field names must be unique in a given record\nand the order of the fields is significant, e.g., type ',(0,l.kt)("inlineCode",{parentName:"p"},"{a:string,b:string}"),"\nis distinct from type ",(0,l.kt)("inlineCode",{parentName:"p"},"{b:string,a:string}"),"."),(0,l.kt)("p",null,"A field name is any UTF-8 string."),(0,l.kt)("p",null,"A field value is any Zed value."),(0,l.kt)("p",null,'In contrast to many schema-oriented data formats, Zed has no way to specify\na field as "optional" since any field value can be a null value.'),(0,l.kt)("p",null,"If an instance of a record value omits a value\nby dropping the field altogether rather than using a null, then that record\nvalue corresponds to a different record type that elides the field in question."),(0,l.kt)("p",null,"A record type is uniquely defined by its ordered list of field-type pairs."),(0,l.kt)("p",null,"The type order of two records is as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Record with fewer columns than other is ordered before the other."),(0,l.kt)("li",{parentName:"ul"},"Records with the same number of columns are ordered as follows according to:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"the lexicographic order of the field names from left to right,"),(0,l.kt)("li",{parentName:"ul"},"or if all the field names are the same, the type order of the field types from left to right.")))),(0,l.kt)("h3",{id:"22-array"},"2.2 Array"),(0,l.kt)("p",null,'An array is an ordered sequence of zero or more Zed values called "elements"\nall conforming to the same Zed type.'),(0,l.kt)("p",null,"An array value may be empty.  An empty array may have element type ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,l.kt)("p",null,"An array type is uniquely defined by its single element type."),(0,l.kt)("p",null,"The type order of two arrays is defined as the type order of the\ntwo array element types."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note that mixed-type JSON arrays are representable as a Zed array with\nelements of type union.")),(0,l.kt)("h3",{id:"23-set"},"2.3 Set"),(0,l.kt)("p",null,'A set is an unordered sequence of zero or more Zed values called "elements"\nall conforming to the same Zed type.'),(0,l.kt)("p",null,"A set may be empty.  An empty set may have element type ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,l.kt)("p",null,"A set of mixed-type values is representable as a Zed set with\nelements of type union."),(0,l.kt)("p",null,"A set type is uniquely defined by its single element type."),(0,l.kt)("p",null,"The type order of two sets is defined as the type order of the\ntwo set element types."),(0,l.kt)("h3",{id:"24-map"},"2.4 Map"),(0,l.kt)("p",null,"A map represents a list of zero or more key-value pairs, where the keys\nhave a common Zed type and the values have a common Zed type."),(0,l.kt)("p",null,"Each key across an instance of a map value must be a unique value."),(0,l.kt)("p",null,"A map value may be empty.  "),(0,l.kt)("p",null,"A map type is uniquely defined by its key type and value type."),(0,l.kt)("p",null,"The type order of two map types is as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the type order of their key types,"),(0,l.kt)("li",{parentName:"ul"},"or if they are the same, then the order of their value types.")),(0,l.kt)("h3",{id:"25-union"},"2.5 Union"),(0,l.kt)("p",null,'A union represents a value that may be any one of a specific enumeration\nof two or more unique Zed types that comprise its "union type".'),(0,l.kt)("p",null,"A union type is uniquely defined by an ordered set of unique types (which may be\nother union types) where the order corresponds to the Zed type system's total order."),(0,l.kt)("p",null,"Union values are tagged in that\nany instance of a union value explicitly conforms to exactly one of the union's types.\nThe union tag is an integer indicating the position of its type in the union\ntype's ordered list of types."),(0,l.kt)("p",null,"The type order of two union types is as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The union type with fewer types than other is ordered before the other."),(0,l.kt)("li",{parentName:"ul"},"Two union types with the same number of types are ordered according to\nthe type order of the constituent types in left to right order.")),(0,l.kt)("h3",{id:"26-enum"},"2.6 Enum"),(0,l.kt)("p",null,"An enum represents a symbol from a finite set of one or more unique symbols\nreferenced by name.  An enum name may be any UTF-8 string."),(0,l.kt)("p",null,"An enum type is uniquely defined by its ordered set of unique symbols,\nwhere the order is significant, e.g., two enum types\nwith the same set of symbols but in different order are distinct."),(0,l.kt)("p",null,"The type order of two enum types is as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The enum type with fewer symbols than other is ordered before the other."),(0,l.kt)("li",{parentName:"ul"},"Two enum types with the same number of symbols are ordered according to\nthe type order of the constituent types in left to right order.")),(0,l.kt)("h3",{id:"27-error"},"2.7 Error"),(0,l.kt)("p",null,"An error represents any value designated as an error.  "),(0,l.kt)("p",null,"The type order of an error is the type order of the type of its contained value."),(0,l.kt)("h2",{id:"3-named-type"},"3. Named Type"),(0,l.kt)("p",null,"A ",(0,l.kt)("em",{parentName:"p"},"named type")," is a name for a specific Zed type.\nAny value can have a named type and the named type is a distinct type\nfrom the underlying type.  A named type can refer to another named type."),(0,l.kt)("p",null,"The binding between a named type and its underlying type is local in scope\nand need not be unique across a sequence of values."),(0,l.kt)("p",null,"A type name may be any UTF-8 string exclusive of primitive type names."),(0,l.kt)("p",null,'For example, if "port" is a named type for ',(0,l.kt)("inlineCode",{parentName:"p"},"uint16"),', then two values of\ntype "port" have the same type but a value of type "port" and a value of type ',(0,l.kt)("inlineCode",{parentName:"p"},"uint16"),"\ndo not have the same type."),(0,l.kt)("p",null,"The type order of two named types is the type order of their underlying types."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"While the Zed data model does not include explicit support for schema versioning,\nnamed types provide a flexible mechanism to implement versioning\non top of the Zed serialization formats.  For example, a Zed-based system\ncould define a naming convention of the form ",(0,l.kt)("inlineCode",{parentName:"p"},"<type>.<version>"),"\nwhere ",(0,l.kt)("inlineCode",{parentName:"p"},"<type>")," is the type name of a record representing the schema\nand ",(0,l.kt)("inlineCode",{parentName:"p"},"<version>")," is a decimal string indicating the version of that schema.\nSince types need only be parsed once per stream\nin the Zed binary serialization formats, a Zed type implementation could\nefficiently support schema versioning using such a convention.")),(0,l.kt)("h2",{id:"4-null-values"},"4. Null Values"),(0,l.kt)("p",null,"All Zed types have a null representation.  It is up to an\nimplementation to decide how external data structures map into and\nout of values with nulls.  Typically, a null value is either the\nzero value or, in the case of record fields, an optional field whose\nvalue is not present, though these semantics are not explicitly\ndefined by the Zed data model."))}y.isMDXComponent=!0}}]);