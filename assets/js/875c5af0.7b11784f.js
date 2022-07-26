"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[6637],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5354:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],p={},i=void 0,s={unversionedId:"language/operators/rename",id:"version-v1.2.0/language/operators/rename",title:"rename",description:"Operator",source:"@site/versioned_docs/version-v1.2.0/language/operators/rename.md",sourceDirName:"language/operators",slug:"/language/operators/rename",permalink:"/docs/language/operators/rename",editUrl:"https://github.com/brimdata/zed/tree/main/versioned_docs/version-v1.2.0/language/operators/rename.md",tags:[],version:"v1.2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"put",permalink:"/docs/language/operators/put"},next:{title:"sample",permalink:"/docs/language/operators/sample"}},c={},u=[{value:"Operator",id:"operator",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"operator"},"Operator"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"rename")," ","\u2014"," change the name of record fields"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rename <newfield>:=<oldfield> [, <newfield>:=<oldfield> ...]\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"rename")," operator changes the names of one or more fields\nin the input records from the right-hand side name to the left-hand side name\nfor each assignment listed.  When ",(0,o.kt)("inlineCode",{parentName:"p"},"<oldfield>")," references a field that does not\nexist, there is no effect and the input is copied to the output."),(0,o.kt)("p",null,"Non-record inputs are copied to the output without modification."),(0,o.kt)("p",null,"Each ",(0,o.kt)("inlineCode",{parentName:"p"},"<field>")," must be a field reference as a dotted path and the old name\nand new name must refer to the same record in the case of nested records.\nThat is, the dotted path prefix before the final field name must be the\nsame on the left- and right-hand sides.  To perform more sophisticated\nrenaming of fields, you can use cut/put or record literals."),(0,o.kt)("p",null,"If a rename operation conflicts with an existing field name, then the\noffending record is wrapped in a structured error along with an error message\nand the error is emitted."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"A simple rename")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1,b:2}' | zq -z 'rename c:=b' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{a:1,c:2}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Nested rename")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1,r:{b:2,c:3}}' | zq -z 'rename r.a:=r.b' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{a:1,r:{a:2,c:3}}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Trying to mutate records with rename produces a compile-time error")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command",metastring:"fails",fails:!0},"echo '{a:1,r:{b:2,c:3}}' | zq -z 'rename w:=r.b' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"cannot rename r.b to w\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Record literals can be used instead of rename for mutation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1,r:{b:2,c:3}}' | zq -z 'yield {a,r:{c:r.c},w:r.b}' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{a:1,r:{c:3},w:2}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Alternatively, mutations can be more generic and use drop")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{a:1,r:{b:2,c:3}}' | zq -z 'yield {a,r,w:r.b} | drop r.b' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{a:1,r:{c:3},w:2}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Duplicate fields create structured errors")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '{b:1} {a:1,b:1} {c:1}' | zq -z 'rename a:=b' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'{a:1}\nerror({message:"rename: duplicate field: \\"a\\"",on:{a:1,b:1}})\n{c:1}\n')))}d.isMDXComponent=!0}}]);