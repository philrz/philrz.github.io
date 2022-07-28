"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[7997],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8083:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="Go",d={unversionedId:"libraries/go",id:"version-v1.2.0/libraries/go",title:"Go",description:"The Zed system was developed in Go so support for Go clients is",source:"@site/versioned_docs/version-v1.2.0/libraries/go.md",sourceDirName:"libraries",slug:"/libraries/go",permalink:"/docs/libraries/go",editUrl:"https://github.com/brimdata/zed/edit/main/docs/versioned_docs/version-v1.2.0/libraries/go.md",tags:[],version:"v1.2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Libraries",permalink:"/docs/libraries/"},next:{title:"Javascript",permalink:"/docs/libraries/javascript"}},c={},p=[{value:"Installation",id:"installation",level:2},{value:"Examples",id:"examples",level:2},{value:"ZSON Reader",id:"zson-reader",level:3},{value:"Local Lake Reader",id:"local-lake-reader",level:3},{value:"Lake Service Reader",id:"lake-service-reader",level:3}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"go"},"Go"),(0,o.kt)("p",null,"The Zed system was developed in Go so support for Go clients is\nfairly comprehensive.  That said, the code-embedded documentation of exported\npackage functions is scant and we are actively working to document\nthe functions of the key Go packages."),(0,o.kt)("p",null,"Also, our focus for the Go client packages has been on supporting\nthe core Zed implementation.  We intend to develop a Go package that\nis easier to use for external clients.  In the meantime, clients\nmay use the internal Go packages though the APIs are subject to change."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"The Zed system is structured as a standard Go module so it's easy to import into\nother Go projects straight from the GitHub repo."),(0,o.kt)("p",null,"Some of the key packages are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/brimdata/zed"},"zed")," - core Zed values and types"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/brimdata/zed/zson"},"zson")," - ZSON support"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/brimdata/zed/zio"},"zio")," - I/O interfaces for Zed following the Reader/Writer patterns"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/brimdata/zed/zio/zsonio"},"zio/zsonio")," - ZSON reader/writer"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/brimdata/zed/zio/zngio"},"zio/zngio")," - ZNG reader/writer"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/brimdata/zed/lake/api"},"lake/api")," - interact with a Zed lake")),(0,o.kt)("p",null,"To install in your local Go project, simply run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"go get github.com/brimdata/zed\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"zson-reader"},"ZSON Reader"),(0,o.kt)("p",null,"Read ZSON from stdin, dereference field ",(0,o.kt)("inlineCode",{parentName:"p"},"s"),", and print results:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'package main\n\nimport (\n    "fmt"\n    "log"\n    "os"\n\n    "github.com/brimdata/zed"\n    "github.com/brimdata/zed/zio/zsonio"\n    "github.com/brimdata/zed/zson"\n)\n\nfunc main() {\n    zctx := zed.NewContext()\n    reader := zsonio.NewReader(os.Stdin, zctx)\n    for {\n        val, err := reader.Read()\n        if err != nil {\n            log.Fatalln(err)\n        }\n        if val == nil {\n            return\n        }\n        s := val.Deref("s")\n        if s == nil {\n            s = zctx.Missing()\n        }\n        fmt.Println(zson.String(s))\n    }\n}\n')),(0,o.kt)("p",null,"To build, create a directory for the main package, initialize it,\ncopy the above code into ",(0,o.kt)("inlineCode",{parentName:"p"},"main.go"),", and fetch the required Zed packages."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mkdir example\ncd example\ngo mod init example\ncat > main.go\n# [paste from above]\ngo mod tidy\n")),(0,o.kt)("p",null,"To run type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'echo \'{s:"hello"}{x:123}{s:"world"}\' | go run .\n')),(0,o.kt)("p",null,"which produces"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"hello"\nerror("missing")\n"world"\n')),(0,o.kt)("h3",{id:"local-lake-reader"},"Local Lake Reader"),(0,o.kt)("p",null,"This example interacts with a Zed lake.  Note that it is straightforward\nto support both direct access to a lake via the file system (or S3 URL) as well\nas access via a service endpoint."),(0,o.kt)("p",null,"First, we'll use ",(0,o.kt)("inlineCode",{parentName:"p"},"zed")," to create a lake and load the example data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'zed init -lake scratch\nzed create -lake scratch Demo\necho \'{s:"hello, world"}{x:1}{s:"good bye"}\' | zed load -lake scratch -use Demo -\n')),(0,o.kt)("p",null,"Now replace ",(0,o.kt)("inlineCode",{parentName:"p"},"main.go")," with this code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'package main\n\nimport (\n    "context"\n    "fmt"\n    "log"\n    "os"\n\n    "github.com/brimdata/zed"\n    "github.com/brimdata/zed/lake/api"\n    "github.com/brimdata/zed/pkg/storage"\n    "github.com/brimdata/zed/zson"\n)\n\nfunc main() {\n    if len(os.Args) != 2 {\n        log.Fatalln("URI of Zed lake not provided")\n    }\n    uri, err := storage.ParseURI(os.Args[1])\n    if err != nil {\n        fmt.Fprintln(os.Stderr, err)\n        os.Exit(1)\n    }\n    ctx := context.TODO()\n    zctx := zed.NewContext()\n    var lake api.Interface\n    if api.IsLakeService(uri.String()) {\n        lake, err = api.OpenLake(ctx, uri.String())\n    } else {\n        lake, err = api.OpenLocalLake(ctx, uri.String())\n    }\n    if err != nil {\n        log.Fatalln("URI of Zed lake not provided")\n    }\n    reader, err := lake.Query(ctx, nil, "from Demo")\n    if err != nil {\n        log.Fatalln("URI of Zed lake not provided")\n    }\n    defer reader.Close()\n    for {\n        val, err := reader.Read()\n        if err != nil {\n            log.Fatalln("URI of Zed lake not provided")\n        }\n        if val == nil {\n            return\n        }\n        s := val.Deref("s")\n        if s == nil {\n            s = zctx.Missing()\n        }\n        fmt.Println(zson.String(s))\n    }\n}\n')),(0,o.kt)("p",null,"Now, run this command to interact with the lake via the local file system:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"go run . ./scratch\n")),(0,o.kt)("p",null,"which should output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"hello, world"\n"good bye"\nerror("missing")\n')),(0,o.kt)("p",null,'Note that the order of data has changed because the Zed lake stores data\nin a sorted order.  Since we did not specify a "pool key" when we created\nthe lake, it ends up sorting the data by ',(0,o.kt)("inlineCode",{parentName:"p"},"this"),"."),(0,o.kt)("h3",{id:"lake-service-reader"},"Lake Service Reader"),(0,o.kt)("p",null,"We can use the same code above to talk to a Zed lake server.  All we do is\ngive it the URI of the service, which by default is on port 9867."),(0,o.kt)("p",null,"To try this out, first run a Zed service on the scratch lake we created\nabove:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"zed serve -lake ./scratch\n")),(0,o.kt)("p",null,"Finally, in another local shell, run the Go program and specify the service\nendpoint we just created:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"go run . http://localhost:9867\n")),(0,o.kt)("p",null,"and you should again get this result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"hello, world"\n"good bye"\nerror("missing")\n')))}m.isMDXComponent=!0}}]);