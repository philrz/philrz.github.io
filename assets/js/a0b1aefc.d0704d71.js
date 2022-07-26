"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[1839],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,p(p({ref:t},u),{},{components:n})):r.createElement(f,p({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5694:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),p=["components"],i={},l=void 0,s={unversionedId:"language/operators/put",id:"language/operators/put",title:"put",description:"Operator",source:"@site/docs/language/operators/put.md",sourceDirName:"language/operators",slug:"/language/operators/put",permalink:"/docs/next/language/operators/put",editUrl:"https://github.com/brimdata/zed/tree/main/docs/language/operators/put.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"over",permalink:"/docs/next/language/operators/over"},next:{title:"rename",permalink:"/docs/next/language/operators/rename"}},u={},c=[{value:"Operator",id:"operator",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"operator"},"Operator"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"put")," ","\u2014"," add or modify fields of records"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"put <field>:=<expr> [, <field>:=<expr> ...]\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"put")," operator modifies its input with\none or more ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/language/overview#25-field-assignments"},"field assignments"),".\nEach expression is evaluated based on the input record\nand the result is either assigned to a new field of the input record if it does not\nexist, or the existing field is modified in its original location with the result."),(0,o.kt)("p",null,"New fields are append in left-to-right order to the right of existing record fields\nwhile modified fields are mutated in place."),(0,o.kt)("p",null,"If multiple fields are written in a single ",(0,o.kt)("inlineCode",{parentName:"p"},"put"),", all the new field values are\ncomputed first and then they are all written simultaneously.  As a result,\na computed value cannot be referenced in another expression.  If you need\nto re-use a computed result, this can be done by chaining multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"put")," operators."),(0,o.kt)("p",null,'The "put" keyword is optional since it is an\n',(0,o.kt)("a",{parentName:"p",href:"/docs/next/language/overview#26-implied-operators"},"implied operators"),"."),(0,o.kt)("p",null,"Each ",(0,o.kt)("inlineCode",{parentName:"p"},"<field>")," expression must be a field reference expressed as a dotted path or one more\nconstant index operations on ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),", e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"a.b"),", ",(0,o.kt)("inlineCode",{parentName:"p"},'this["a"]["b"]'),",\netc."),(0,o.kt)("p",null,"Each right-hand side ",(0,o.kt)("inlineCode",{parentName:"p"},"<expr>")," can be any Zed expression."),(0,o.kt)("p",null,"For any input value that is not a record, an error is emitted."),(0,o.kt)("p",null,"Note that when the field references are all top level,\n",(0,o.kt)("inlineCode",{parentName:"p"},"put")," is a special case of a ",(0,o.kt)("inlineCode",{parentName:"p"},"yield")," with a\n",(0,o.kt)("a",{parentName:"p",href:"/docs/next/language/overview#6112-record-expressions"},"record literal"),"\nusing a spread operator of the form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yield {...this, <field>:<expr> [, <field>:<expr>...]}\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"A simple put")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1,b:2}' | zq -z 'put c:=3' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{a:1,b:2,c:3}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The ",(0,o.kt)("inlineCode",{parentName:"em"},"put")," keyword may be omitted")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1,b:2}' | zq -z 'c:=3' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{a:1,b:2,c:3}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"A ",(0,o.kt)("inlineCode",{parentName:"em"},"put")," operation can also be done with a record literal")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1,b:2}' | zq -z 'yield {...this, c:3}' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{a:1,b:2,c:3}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Missing fields show up as missing errors")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1,b:2,c:3}' | zq -z 'put d:=e' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{a:1,b:2,c:3,d:error("missing")}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Non-record input values generate errors")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1} 1' | zq -z 'b:=2' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{a:1,b:2}\nerror("put: not a record: 1")\n')))}m.isMDXComponent=!0}}]);