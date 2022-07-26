"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[6749],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return c}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),c=a,y=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return t?r.createElement(y,o(o({ref:n},s),{},{components:t})):r.createElement(y,o({ref:n},s))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9275:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={sidebar_position:4,sidebar_label:"ZJSON"},p="ZJSON Specification",d={unversionedId:"formats/zjson",id:"version-v1.2.0/formats/zjson",title:"ZJSON Specification",description:"1. Introduction",source:"@site/versioned_docs/version-v1.2.0/formats/zjson.md",sourceDirName:"formats",slug:"/formats/zjson",permalink:"/docs/formats/zjson",editUrl:"https://github.com/brimdata/zed/tree/main/versioned_docs/version-v1.2.0/formats/zjson.md",tags:[],version:"v1.2.0",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"ZJSON"},sidebar:"tutorialSidebar",previous:{title:"ZST",permalink:"/docs/formats/zst"},next:{title:"Compression",permalink:"/docs/formats/compression"}},s={},m=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. The Format",id:"2-the-format",level:2},{value:"2.1 Type Encoding",id:"21-type-encoding",level:3},{value:"2.1.1 Record Type",id:"211-record-type",level:4},{value:"2.1.2 Array Type",id:"212-array-type",level:4},{value:"2.1.3 Set Type",id:"213-set-type",level:4},{value:"2.1.4 Map Type",id:"214-map-type",level:4},{value:"2.1.5 Union type",id:"215-union-type",level:4},{value:"2.1.6 Enum Type",id:"216-enum-type",level:4},{value:"2.1.7 Error Type",id:"217-error-type",level:4},{value:"2.1.8 Named Type",id:"218-named-type",level:4},{value:"2.2 Value Encoding",id:"22-value-encoding",level:3},{value:"3. Object Framing",id:"3-object-framing",level:2},{value:"4. Example",id:"4-example",level:2}],u={toc:m};function c(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"zjson-specification"},"ZJSON Specification"),(0,i.kt)("h2",{id:"1-introduction"},"1. Introduction"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/formats/zed"},"Zed data model"),"\nis based on richly typed records with a deterministic column order,\nas is implemented by the ",(0,i.kt)("a",{parentName:"p",href:"/docs/formats/zson"},"ZSON"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/formats/zng"},"ZNG"),", and ",(0,i.kt)("a",{parentName:"p",href:"/docs/formats/zst"},"ZST")," formats.\nGiven the ubiquity of JSON, it is desirable to also be able to serialize\nZed data into the JSON format.   However, encoding Zed data values\ndirectly as JSON values would not work without loss of information."),(0,i.kt)("p",null,"For example, consider this Zed data as ",(0,i.kt)("a",{parentName:"p",href:"/docs/formats/zson"},"ZSON"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    ts: 2018-03-24T17:15:21.926018012Z,\n    a: "hello, world",\n    b: {\n        x: 4611686018427387904,\n        y: 127.0.0.1\n    }\n}\n')),(0,i.kt)("p",null,"A straightforward translation to JSON might look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "ts": 1521911721.926018012,\n  "a": "hello, world",\n  "b": {\n    "x": 4611686018427387904,\n    "y": "127.0.0.1"\n  }\n}\n')),(0,i.kt)("p",null,"But, when this JSON is transmitted to a JavaScript client and parsed,\nthe result looks something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "ts": 1521911721.926018,\n  "a": "hello, world",\n  "b": {\n    "x": 4611686018427388000,\n    "y": "127.0.0.1"\n  }\n}\n')),(0,i.kt)("p",null,"The good news is the ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," field came through just fine, but there are\na few problems with the remaining fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the timestamp lost precision (due to 53 bits of mantissa in a JavaScript\nIEEE 754 floating point number) and was converted from a time type to a number,"),(0,i.kt)("li",{parentName:"ul"},"the int64 lost precision for the same reason, and"),(0,i.kt)("li",{parentName:"ul"},"the IP address has been converted to a string.")),(0,i.kt)("p",null,"As a comparison, Python's ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," module handles the 64-bit integer to full\nprecision, but loses precision on the floating point timestamp.\nAlso, it is at the whim of a JSON implementation whether\nor not the order of object keys is preserved."),(0,i.kt)("p",null,"While JSON is well suited for data exchange of generic information, it is not\nso appropriate for a ",(0,i.kt)("a",{parentName:"p",href:"/docs/formats/#2-zed-a-super-structured-pattern"},"super-structured data model"),"\nlike Zed.  That said, JSON can be used as an encoding format for Zed by mapping Zed data\nonto a JSON-based protocol.  This allows clients like web apps or\nElectron apps to receive and understand Zed and, with the help of client\nlibraries like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/brimdata/zealot"},"Zealot"),",\nto manipulate the rich, structured Zed types that are implemented on top of\nthe basic JavaScript types."),(0,i.kt)("p",null,"In other words,\nbecause JSON objects do not have a deterministic column order nor does JSON\nin general have typing beyond the basics (i.e., strings, floating point numbers,\nobjects, arrays, and booleans), we decided to encode Zed data with\nits embedded type model all in a layer above regular JSON."),(0,i.kt)("h2",{id:"2-the-format"},"2. The Format"),(0,i.kt)("p",null,"The format for representing Zed in JSON is called ZJSON.\nConverting ZSON, ZNG, or ZST to ZJSON and back results in a complete and\naccurate restoration of the original Zed data."),(0,i.kt)("p",null,"A ZJSON stream is defined as a sequence of JSON objects where each object\nrepresents a Zed value and has the form:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "type": <type>,\n  "value": <value>\n}\n')),(0,i.kt)("p",null,"The type and value fields are encoded as defined below."),(0,i.kt)("h3",{id:"21-type-encoding"},"2.1 Type Encoding"),(0,i.kt)("p",null,"The type encoding for a primitive type is simply its ",(0,i.kt)("a",{parentName:"p",href:"/docs/formats/zed#1-primitive-types"},"Zed type name"),'\ne.g., "int32" or "string".'),(0,i.kt)("p",null,"Complex types are encoded with small-integer identifiers.\nThe first instance of a unique type defines the binding between the\ninteger identifier and its definition, where the definition may recursively\nrefer  to earlier complex types by their identifiers."),(0,i.kt)("p",null,"For example, the Zed type ",(0,i.kt)("inlineCode",{parentName:"p"},"{s:string,x:int32}")," has this ZJSON format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "id": 123,\n  "kind": "record",\n  "fields": [\n    {\n      "name": "s",\n      "type": {\n        "kind": "primitive",\n        "name": "string"\n      }\n    },\n    {\n      "name": "x",\n      "type": {\n        "kind": "primitive",\n        "name": "int32"\n      }\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"A previously defined complex type may be referred to using a reference of the form:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "kind": "ref",\n  "id": 123\n}\n')),(0,i.kt)("h4",{id:"211-record-type"},"2.1.1 Record Type"),(0,i.kt)("p",null,"A record type is a JSON object of the form"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "id": <number>,\n  "kind": "record",\n  "fields": [ <field>, <field>, ... ]\n}\n')),(0,i.kt)("p",null,"where each of the fields has the form"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "name": <name>,\n  "type": <type>,\n}\n')),(0,i.kt)("p",null,"and ",(0,i.kt)("inlineCode",{parentName:"p"},"<name>")," is a string defining the column name and ",(0,i.kt)("inlineCode",{parentName:"p"},"<type>")," is a\nrecursively encoded type."),(0,i.kt)("h4",{id:"212-array-type"},"2.1.2 Array Type"),(0,i.kt)("p",null,"An array type is defined by a JSON object having the form"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "id": <number>,\n  "kind": "array",\n  "type": <type>\n}\n')),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"<type>")," is a recursively encoded type."),(0,i.kt)("h4",{id:"213-set-type"},"2.1.3 Set Type"),(0,i.kt)("p",null,"A set type is defined by a JSON object having the form"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "id": <number>,\n  "kind": "set",\n  "type": <type>\n}\n')),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"<type>")," is a recursively encoded type."),(0,i.kt)("h4",{id:"214-map-type"},"2.1.4 Map Type"),(0,i.kt)("p",null,"A map type is defined by a JSON object of the form"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "id": <number>,\n  "kind": "map",\n  "key_type": <type>,\n  "val_type": <type>\n}\n')),(0,i.kt)("p",null,"where each ",(0,i.kt)("inlineCode",{parentName:"p"},"<type>")," is a recursively encoded type."),(0,i.kt)("h4",{id:"215-union-type"},"2.1.5 Union type"),(0,i.kt)("p",null,"A union type is defined by a JSON object having the form"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "id": <number>,\n  "kind": "union",\n  "types": [ <type>, <type>, ... ]\n}\n')),(0,i.kt)("p",null,"where the list of types comprise the types of the union and\nand each ",(0,i.kt)("inlineCode",{parentName:"p"},"<type>"),"is a recursively encoded type."),(0,i.kt)("h4",{id:"216-enum-type"},"2.1.6 Enum Type"),(0,i.kt)("p",null,"An enum type is a JSON object of the form"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "id": <number>,\n  "kind": "enum",\n  "symbols": [ <string>, <string>, ... ]\n}\n')),(0,i.kt)("p",null,"where the unique ",(0,i.kt)("inlineCode",{parentName:"p"},"<string>")," values define a finite set of symbols."),(0,i.kt)("h4",{id:"217-error-type"},"2.1.7 Error Type"),(0,i.kt)("p",null,"An error type is a JSON object of the form"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "id": <number>,\n  "kind": "error",\n  "type": <type>\n}\n')),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"<type>")," is a recursively encoded type."),(0,i.kt)("h4",{id:"218-named-type"},"2.1.8 Named Type"),(0,i.kt)("p",null,"A named type is encoded as a binding between a name and a Zed type\nand represents a new type so named.  A type definition type has the form"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "id": <number>,\n  "kind": "named",\n  "name": <id>,\n  "type": <type>,\n}\n')),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"<id>")," is a JSON string representing the newly defined type name\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"<type>")," is a recursively encoded type."),(0,i.kt)("h3",{id:"22-value-encoding"},"2.2 Value Encoding"),(0,i.kt)("p",null,"The primitive values comprising an arbitrarily complex Zed data value are encoded\nas a JSON array of strings mixed with nested JSON arrays whose structure\nconforms to the nested structure of the value's schema as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"each record, array, and set is encoded as a JSON array of its composite values,"),(0,i.kt)("li",{parentName:"ul"},"a union is encoded as a string of the form ",(0,i.kt)("inlineCode",{parentName:"li"},"<tag>:<value>")," where ",(0,i.kt)("inlineCode",{parentName:"li"},"tag"),"\nis an integer string representing the positional index in the union's list of\ntypes that specifies the type of ",(0,i.kt)("inlineCode",{parentName:"li"},"<value>"),", which is a JSON string or array\nas described recursively herein,"),(0,i.kt)("li",{parentName:"ul"},"a map is encoded as a JSON array of two-element arrays of the form\n",(0,i.kt)("inlineCode",{parentName:"li"},"[ <key>, <value> ]")," where ",(0,i.kt)("inlineCode",{parentName:"li"},"key")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," are recursively encoded,"),(0,i.kt)("li",{parentName:"ul"},"a type value is encoded ",(0,i.kt)("a",{parentName:"li",href:"#21-type-encoding"},"as above"),","),(0,i.kt)("li",{parentName:"ul"},"each primitive that is not a type value\nis encoded as a string conforming to its ZSON representation, as described in the\n",(0,i.kt)("a",{parentName:"li",href:"/docs/formats/zson#23-primitive-values"},"corresponding section of the ZSON specification"),".")),(0,i.kt)("p",null,"For example, a record with three columns --- a string, an array of integers,\nand an array of union of string, and float64 --- might have a value that looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[ "hello, world", ["1","2","3","4"], ["1:foo", "0:10" ] ]\n')),(0,i.kt)("h2",{id:"3-object-framing"},"3. Object Framing"),(0,i.kt)("p",null,"A ZJSON file is composed of ZJSON objects formatted as\n",(0,i.kt)("a",{parentName:"p",href:"http://ndjson.org/"},"newline delimited JSON (NDJSON)"),".\ne.g., the ",(0,i.kt)("a",{parentName:"p",href:"/docs/commands/zq"},"zq")," CLI command\nwrites its ZJSON output as lines of NDJSON."),(0,i.kt)("h2",{id:"4-example"},"4. Example"),(0,i.kt)("p",null,"Here is an example that illustrates values of a repeated type,\nnesting, records, array, and union. Consider the file ",(0,i.kt)("inlineCode",{parentName:"p"},"input.zson"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mdtest-input",metastring:"input.zson","input.zson":!0},'{s:"hello",r:{a:1,b:2}}\n{s:"world",r:{a:3,b:4}}\n{s:"hello",r:{a:[1,2,3]}}\n{s:"goodnight",r:{x:{u:"foo"((string,int64))}}}\n{s:"gracie",r:{x:{u:12((string,int64))}}}\n')),(0,i.kt)("p",null,"This data is represented in ZJSON as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"zq -f zjson input.zson | jq .\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{\n  "type": {\n    "kind": "record",\n    "id": 31,\n    "fields": [\n      {\n        "name": "s",\n        "type": {\n          "kind": "primitive",\n          "name": "string"\n        }\n      },\n      {\n        "name": "r",\n        "type": {\n          "kind": "record",\n          "id": 30,\n          "fields": [\n            {\n              "name": "a",\n              "type": {\n                "kind": "primitive",\n                "name": "int64"\n              }\n            },\n            {\n              "name": "b",\n              "type": {\n                "kind": "primitive",\n                "name": "int64"\n              }\n            }\n          ]\n        }\n      }\n    ]\n  },\n  "value": [\n    "hello",\n    [\n      "1",\n      "2"\n    ]\n  ]\n}\n{\n  "type": {\n    "kind": "ref",\n    "id": 31\n  },\n  "value": [\n    "world",\n    [\n      "3",\n      "4"\n    ]\n  ]\n}\n{\n  "type": {\n    "kind": "record",\n    "id": 34,\n    "fields": [\n      {\n        "name": "s",\n        "type": {\n          "kind": "primitive",\n          "name": "string"\n        }\n      },\n      {\n        "name": "r",\n        "type": {\n          "kind": "record",\n          "id": 33,\n          "fields": [\n            {\n              "name": "a",\n              "type": {\n                "kind": "array",\n                "id": 32,\n                "type": {\n                  "kind": "primitive",\n                  "name": "int64"\n                }\n              }\n            }\n          ]\n        }\n      }\n    ]\n  },\n  "value": [\n    "hello",\n    [\n      [\n        "1",\n        "2",\n        "3"\n      ]\n    ]\n  ]\n}\n{\n  "type": {\n    "kind": "record",\n    "id": 38,\n    "fields": [\n      {\n        "name": "s",\n        "type": {\n          "kind": "primitive",\n          "name": "string"\n        }\n      },\n      {\n        "name": "r",\n        "type": {\n          "kind": "record",\n          "id": 37,\n          "fields": [\n            {\n              "name": "x",\n              "type": {\n                "kind": "record",\n                "id": 36,\n                "fields": [\n                  {\n                    "name": "u",\n                    "type": {\n                      "kind": "union",\n                      "id": 35,\n                      "types": [\n                        {\n                          "kind": "primitive",\n                          "name": "int64"\n                        },\n                        {\n                          "kind": "primitive",\n                          "name": "string"\n                        }\n                      ]\n                    }\n                  }\n                ]\n              }\n            }\n          ]\n        }\n      }\n    ]\n  },\n  "value": [\n    "goodnight",\n    [\n      [\n        [\n          "1",\n          "foo"\n        ]\n      ]\n    ]\n  ]\n}\n{\n  "type": {\n    "kind": "ref",\n    "id": 38\n  },\n  "value": [\n    "gracie",\n    [\n      [\n        [\n          "0",\n          "12"\n        ]\n      ]\n    ]\n  ]\n}\n')))}c.isMDXComponent=!0}}]);