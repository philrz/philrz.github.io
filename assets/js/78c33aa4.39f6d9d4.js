"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[2456],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2787:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={sidebar_position:2,sidebar_label:"Installation"},s="Installation",d={unversionedId:"install",id:"version-v1.2.0/install",title:"Installation",description:"Several options for installing zq and/or zed are available:",source:"@site/versioned_docs/version-v1.2.0/install.md",sourceDirName:".",slug:"/install",permalink:"/docs/install",editUrl:"https://github.com/brimdata/zed/tree/main/versioned_docs/version-v1.2.0/install.md",tags:[],version:"v1.2.0",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Installation"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Commands",permalink:"/docs/commands/"}},u={},p=[{value:"Homebrew",id:"homebrew",level:2},{value:"Binary Download",id:"binary-download",level:2},{value:"Building from source",id:"building-from-source",level:2},{value:"Quick Tests",id:"quick-tests",level:2},{value:"Test zq",id:"test-zq",level:3},{value:"Test zed",id:"test-zed",level:3}],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Several options for installing ",(0,l.kt)("inlineCode",{parentName:"p"},"zq")," and/or ",(0,l.kt)("inlineCode",{parentName:"p"},"zed")," are available:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#homebrew"},"HomeBrew")," for Mac or Linux,"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#binary-download"},"Binary Download"),", or"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#building-from-source"},"Build from Source"),".")),(0,l.kt)("p",null,"To install the Zed Python client, see the\n",(0,l.kt)("a",{parentName:"p",href:"/docs/libraries/python"},"Python library documentation"),"."),(0,l.kt)("h2",{id:"homebrew"},"Homebrew"),(0,l.kt)("p",null,"On macOS and Linux, you can use ",(0,l.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," to install ",(0,l.kt)("inlineCode",{parentName:"p"},"zq"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install brimdata/tap/zq\n")),(0,l.kt)("p",null,"Similarly, to install ",(0,l.kt)("inlineCode",{parentName:"p"},"zed")," for working with Zed lakes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install brimdata/tap/zed\n")),(0,l.kt)("p",null,"Once installed, run a ",(0,l.kt)("a",{parentName:"p",href:"#quick-tests"},"quick test"),"."),(0,l.kt)("h2",{id:"binary-download"},"Binary Download"),(0,l.kt)("p",null,"We offer pre-built binaries for macOS, Windows and Linux for both x86 and arm\narchitectures in the Zed ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/brimdata/zed/releases"},"Github Release page"),"."),(0,l.kt)("p",null,"Each archive includes the build for ",(0,l.kt)("inlineCode",{parentName:"p"},"zq")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"zed"),"."),(0,l.kt)("p",null,"Once installed, run a ",(0,l.kt)("a",{parentName:"p",href:"#hello-world"},"quick test"),"."),(0,l.kt)("h2",{id:"building-from-source"},"Building from source"),(0,l.kt)("p",null,"If you have Go installed, you can easily build ",(0,l.kt)("inlineCode",{parentName:"p"},"zed")," from source:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"go install github.com/brimdata/zed/cmd/{zed,zq}@latest\n")),(0,l.kt)("p",null,"This installs the ",(0,l.kt)("inlineCode",{parentName:"p"},"zed")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"zq")," binaries in your ",(0,l.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If you don't have Go installed, download and install it from the\n",(0,l.kt)("a",{parentName:"p",href:"https://golang.org/doc/install"},"Go install page"),". Go 1.18 or later is\nrequired.")),(0,l.kt)("p",null,"Once installed, run a ",(0,l.kt)("a",{parentName:"p",href:"#quick-tests"},"quick test"),"."),(0,l.kt)("h2",{id:"quick-tests"},"Quick Tests"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"zq")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"zed")," are easy to test as they are completely self-contained\ncommand-line tools and require no external dependendies to run."),(0,l.kt)("h3",{id:"test-zq"},"Test zq"),(0,l.kt)("p",null,"To test ",(0,l.kt)("inlineCode",{parentName:"p"},"zq"),", simply run this command in your shell:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-command"},"echo '\"hello, world\"' | zq -z -\n")),(0,l.kt)("p",null,"which should produce"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdtest-output"},'"hello, world"\n')),(0,l.kt)("h3",{id:"test-zed"},"Test zed"),(0,l.kt)("p",null,"To test ",(0,l.kt)("inlineCode",{parentName:"p"},"zed"),", we'll make a lake in ",(0,l.kt)("inlineCode",{parentName:"p"},"./scratch"),", load data, and query it\nas follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'export ZED_LAKE=./scratch\nzed init\nzed create Demo\necho \'{s:"hello, world"}\' | zed load -use Demo -\nzed query "from Demo"\n')),(0,l.kt)("p",null,"which should display"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{s:"hello, world"}\n')),(0,l.kt)("p",null,"Alternatively, you can run a Zed lake service, load it with data using ",(0,l.kt)("inlineCode",{parentName:"p"},"zed load"),",\nand hit the API."),(0,l.kt)("p",null,"In one shell, run the server:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"zed init -lake scratch\nzed serve -lake scratch\n")),(0,l.kt)("p",null,"And in another shell, run the client:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'zed create Demo\nzed use Demo\necho \'{s:"hello, world"}\' | zed load -\nzed query "from Demo"\n')),(0,l.kt)("p",null,"which should also display"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{s:"hello, world"}\n')))}m.isMDXComponent=!0}}]);