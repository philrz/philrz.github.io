"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[9279],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7217:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],l={},i=void 0,p={unversionedId:"language/operators/switch",id:"language/operators/switch",title:"switch",description:"Operator",source:"@site/docs/language/operators/switch.md",sourceDirName:"language/operators",slug:"/language/operators/switch",permalink:"/docs/next/language/operators/switch",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"summarize",permalink:"/docs/next/language/operators/summarize"},next:{title:"tail",permalink:"/docs/next/language/operators/tail"}},c={},u=[{value:"Operator",id:"operator",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"operator"},"Operator"),(0,o.kt)("p",null,"\u2003"," ",(0,o.kt)("strong",{parentName:"p"},"switch")," ","\u2014"," route values based on cases"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"switch <expr> (\n  case <const> => <leg>\n  case <const> => <leg>\n  ...\n  [ default => <leg> ]\n)\n\nswitch (\n  case <bool-expr> => <leg>\n  case <bool-expr> => <leg>\n  ...\n  [ default => <leg> ]\n)\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"switch")," operator routes input values to multiple, parallel legs of\nthe dataflow path based on case matching."),(0,o.kt)("p",null,"In this first form, the expression ",(0,o.kt)("inlineCode",{parentName:"p"},"<expr>")," is evaluated for each input value\nand its result is\ncompared with all of the case values, which must be distinct, compile-time constant\nexpressions.  The value is propagated to the matching leg."),(0,o.kt)("p",null,"In the second form, each case is evaluated for each input value\nin the order that the cases appear.\nThe first case to match causes the input value to propagate to the corresponding leg.\nEven if later cases match, only the first leg receives the value."),(0,o.kt)("p",null,"In either form, if no case matches, but a default is present,\nthen the value is routed to the default leg.  Otherwise, the value is dropped."),(0,o.kt)("p",null,"Only one default case is allowed and it may appear anywhere in the list of cases;\nwhere it appears does not influence the result."),(0,o.kt)("p",null,"The output of a switch consists of multiple legs that must be merged.\nIf the downstream operator expects a single input, then the output legs are\nmerged with an automatically inserted ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/language/operators/combine"},"combine operator"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Split input into evens and odds")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1 2 3 4' | zq -z 'switch ( case this%2==0 => {even:this} case this%2==1 => {odd:this}) | sort odd,even' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},"{odd:1}\n{odd:3}\n{even:2}\n{even:4}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Switch on ",(0,o.kt)("inlineCode",{parentName:"em"},"this")," with a constant case")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '1 2 3 4' | zq -z 'switch this ( case 1 => yield \"1!\" default => yield string(this) ) | sort' -\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'"1!"\n"2"\n"3"\n"4"\n')))}m.isMDXComponent=!0}}]);