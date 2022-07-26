"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[6390],{3905:function(e,a,n){n.d(a,{Zo:function(){return c},kt:function(){return m}});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=t.createContext({}),s=function(e){var a=t.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},c=function(e){var a=s(e.components);return t.createElement(u.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},f=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=s(n),m=r,g=f["".concat(u,".").concat(m)]||f[m]||p[m]||i;return n?t.createElement(g,l(l({ref:a},c),{},{components:n})):t.createElement(g,l({ref:a},c))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var u in a)hasOwnProperty.call(a,u)&&(o[u]=a[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4678:function(e,a,n){n.r(a),n.d(a,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var t=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={},u="Functions",s={unversionedId:"language/functions/README",id:"version-v1.1.0/language/functions/README",title:"Functions",description:"---",source:"@site/versioned_docs/version-v1.1.0/language/functions/README.md",sourceDirName:"language/functions",slug:"/language/functions/",permalink:"/docs/v1.1.0/language/functions/",tags:[],version:"v1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"yield",permalink:"/docs/v1.1.0/language/operators/yield"},next:{title:"abs",permalink:"/docs/v1.1.0/language/functions/abs"}},c={},p=[],f={toc:p};function m(e){var a=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,t.Z)({},f,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"functions"},"Functions"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Functions appear in expression context and\ntake Zed values as arguments and produce a value as a result."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/abs"},"abs")," - absolute value of a number"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/base64"},"base64")," - encode/decode base64 strings"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/bucket"},"bucket")," - quantize a time or duration value into buckets of equal widths"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/cast"},"cast")," - coerce a value to a different type"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/ceil"},"ceil")," - ceiling of a number"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/cidr_match"},"cidr_match")," - test if IP is in a network"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/compare"},"compare")," - return an int comparing two values"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/crop"},"crop")," - remove fields from a value that are missing in a specified type"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/error"},"error")," - wrap a value as an error"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/every"},"every")," - bucket ",(0,i.kt)("inlineCode",{parentName:"li"},"ts")," using a duration"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/fields"},"fields")," - return the flattened path names of a record"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/fill"},"fill")," - add null values for missing record fields"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/flatten"},"flatten")," - transform a record into a flattened map"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/floor"},"floor")," - floor of a number"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/grep"},"grep")," - search strings inside of values"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/has"},"has")," - test existence of values"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/has_error"},"has_error")," - test if a value has an error"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/is"},"is")," - test a value's type"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/is_error"},"is_error")," - test if a value is an error"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/join"},"join")," - concatenate array of strings with a separator"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/kind"},"kind")," - return a value's type category"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/ksuid"},"ksuid")," - encode/decode KSUID-style unique identifiers"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/len"},"len")," - the type-dependent length of a value"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/log"},"log")," - natural logarithm"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/lower"},"lower")," - convert a string to lower case"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/missing"},"missing"),' - test for the "missing" error'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/nameof"},"nameof")," - the name of a named type"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/network_of"},"network_of")," - the network of an IP"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/now"},"now")," - the current time"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/order"},"order")," - reorder record fields"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/parse_uri"},"parse_uri")," - parse a string URI into a structured record"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/parse_zson"},"parse_zson")," - parse ZSON text into a Zed value"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/pow"},"pow")," - exponential function of any base"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/quiet"},"quiet"),' - quiet "missing" errors'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/replace"},"replace")," - replace one string for another"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/round"},"round")," - round a number"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/rune_len"},"rune_len")," - length of a string in Unicode code points"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/shape"},"shape")," - apply cast, fill, and order"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/split"},"split")," - slice a string into an array of strings"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/sqrt"},"sqrt")," - square root of a number"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/trim"},"trim")," - strip leading and trailing whitespace"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/typename"},"typename")," - look up and return a named type"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/typeof"},"typeof")," - the type of a value"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/typeunder"},"typeunder")," - the underlying type of a value"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/under"},"under")," - the underlying value"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/unflatten"},"unflatten")," - transform a record with dotted names to a nested record"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v1.1.0/language/functions/upper"},"upper")," - convert a string to upper case")))}m.isMDXComponent=!0}}]);