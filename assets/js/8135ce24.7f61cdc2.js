"use strict";(self.webpackChunkzed_docs=self.webpackChunkzed_docs||[]).push([[335],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9123:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1,sidebar_label:"zed"},s="zed Tutorial",d={unversionedId:"tutorials/zed",id:"version-v1.2.0/tutorials/zed",title:"zed Tutorial",description:"zq is great, but what if we have a lot of data on which we want to perform search and",source:"@site/versioned_docs/version-v1.2.0/tutorials/zed.md",sourceDirName:"tutorials",slug:"/tutorials/zed",permalink:"/docs/tutorials/zed",editUrl:"https://github.com/brimdata/zed/tree/versioned_docs/version-v1.2.0/tutorials/zed.md",tags:[],version:"v1.2.0",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"zed"},sidebar:"tutorialSidebar",previous:{title:"zq",permalink:"/docs/tutorials/zq"},next:{title:"Join",permalink:"/docs/tutorials/join"}},u={},p=[{value:"Creating a Lake",id:"creating-a-lake",level:2},{value:"Adding data to our lake",id:"adding-data-to-our-lake",level:2},{value:"Querying our data",id:"querying-our-data",level:2},{value:"Adding additional data",id:"adding-additional-data",level:2},{value:"Time travel",id:"time-travel",level:2},{value:"Running as a service",id:"running-as-a-service",level:2},{value:"Where to go from here?",id:"where-to-go-from-here",level:2}],c={toc:p};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"zed-tutorial"},"zed Tutorial"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"zq")," is great, but what if we have a lot of data on which we want to perform search and\nanalytics? This is where the ",(0,o.kt)("inlineCode",{parentName:"p"},"zed")," command comes in. ",(0,o.kt)("inlineCode",{parentName:"p"},"zed")," builds on the type\nsystem and language found in ",(0,o.kt)("inlineCode",{parentName:"p"},"zq")," and adds a high performance data lake on top."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: ",(0,o.kt)("inlineCode",{parentName:"p"},"zed")," is currently in alpha form. Check out its current status in the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/commands/zed#status"},(0,o.kt)("inlineCode",{parentName:"a"},"zed")," README"),".")),(0,o.kt)("h2",{id:"creating-a-lake"},"Creating a Lake"),(0,o.kt)("p",null,"We start by creating our Zed lake. First we'll set the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZED_LAKE"),"\nenvironment variable that tells ",(0,o.kt)("inlineCode",{parentName:"p"},"zed")," where we want to store our lake:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ export ZED_LAKE=$HOME/.zedlake\n")),(0,o.kt)("p",null,"Next we instruct ",(0,o.kt)("inlineCode",{parentName:"p"},"zed")," to initialize our lake:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ zed init\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"lake created: /path/to/home/.zedlake\n")),(0,o.kt)("h2",{id:"adding-data-to-our-lake"},"Adding data to our lake"),(0,o.kt)("p",null,"Let's add some data."),(0,o.kt)("p",null,"Data is stored in pools in a Zed lake. You might say a pool is similar to a\ntable in a SQL database except unlike a SQL table a Zed pool has no schema to\nwhich underlying data must adhere. Any data is welcome in a Zed pool! A Zed\npool does have a pool key (or field) by which data is sorted. You might think of\na pool key as a pool's primary index. Though individual values in a pool are not\nrequired to have the pool key field, it is nice to have a pool key that fits the\ndata since this will allow Zed to efficiently query data within a range of the\npool key without having to touch the entire data set."),(0,o.kt)("p",null,"For this primer we'll work with pull requests on this public repository via the\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/reference/pulls#list-pull-requests"},"Github API"),".\nLet's create a pool to store this data and use the field ",(0,o.kt)("inlineCode",{parentName:"p"},"created_at")," as the\npool key, sorted in descending order:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ zed create -orderby created_at:desc prs\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pool created: prs <unique pool ID>\n")),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"zed ls")," we can view all the pools in the lake:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ zed ls\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"prs <pool_id> key created_at order desc\n")),(0,o.kt)("p",null,"Let's add some pull request data I've prefetched from the GitHub API\n",(0,o.kt)("a",{target:"_blank",href:n(4471).Z},"here"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ zed load -use prs github1.zng\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<commit_id> committed\n")),(0,o.kt)("p",null,"Our data has been committed. The ",(0,o.kt)("inlineCode",{parentName:"p"},"-use prs")," argument in ",(0,o.kt)("inlineCode",{parentName:"p"},"zed load")," tells\n",(0,o.kt)("inlineCode",{parentName:"p"},"zed")," to load our data into the ",(0,o.kt)("inlineCode",{parentName:"p"},"prs")," pool."),(0,o.kt)("h2",{id:"querying-our-data"},"Querying our data"),(0,o.kt)("p",null,"With our data now loaded let's run a quick ",(0,o.kt)("inlineCode",{parentName:"p"},"count()")," query to verify that we have\nthe expected data. To do this we'll use the ",(0,o.kt)("inlineCode",{parentName:"p"},"zed query")," command. To those\nfamiliar with ",(0,o.kt)("a",{parentName:"p",href:"/docs/commands/zq"},(0,o.kt)("inlineCode",{parentName:"a"},"zq")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"zed query")," operates similarly except\nit doesn't accept file input arguments since it queries pools."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ zed query -use prs 'count()'\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{count:100(uint64)}\n")),(0,o.kt)("p",null,"This looks good so far, but let's do something more interesting. First let's use\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"zed use")," command to set ",(0,o.kt)("inlineCode",{parentName:"p"},"prs")," as our default pool so we don't have to type\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"-use")," argument every time we operate on this pool."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ zed use prs\n")),(0,o.kt)("p",null,"We can run an aggregation to see who has created the most PRs during the time range\nof this first data set:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ zed query 'count() by user:=user.login | sort -r count'\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{user:"mccanne",count:40(uint64)}\n{user:"mattnibs",count:23(uint64)}\n{user:"aswan",count:20(uint64)}\n{user:"henridf",count:9(uint64)}\n{user:"nwt",count:5(uint64)}\n{user:"philrz",count:3(uint64)}\n')),(0,o.kt)("p",null,"A productive few weeks for McCanne!"),(0,o.kt)("p",null,"We can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"max")," aggregations to see the time range of our data set:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ zed query -Z 'min(created_at), max(created_at)'\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{\n    min: 2019-11-11T19:50:46Z,\n    max: 2019-12-05T16:56:57Z\n}\n")),(0,o.kt)("p",null,"That's not a lot of data, so let's add some more."),(0,o.kt)("h2",{id:"adding-additional-data"},"Adding additional data"),(0,o.kt)("p",null,"Additional data can be added to our pool by running ",(0,o.kt)("inlineCode",{parentName:"p"},"zed load")," on our second\n",(0,o.kt)("a",{target:"_blank",href:n(8249).Z},"data set"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ zed load github2.zng\n")),(0,o.kt)("p",null,"Running our ",(0,o.kt)("inlineCode",{parentName:"p"},"min(created_at), max(created_at)")," query, we'll see that we now have\nalmost two years of pull requests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ zed query -Z 'min(created_at), max(created_at)'\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{\n    min: 2019-11-11T19:50:46Z,\n    max: 2021-09-19T19:31:43Z\n}\n")),(0,o.kt)("p",null,"Now let's run a bucketed aggregation to count approximate PRs per month (specifically, PRs\nbucketed in 12 equal spans of a year):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ zed query 'count() by ts:=bucket(created_at, 1y/12) | sort ts'\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{ts:2019-10-20T04:00:00Z,count:28(uint64)}\n{ts:2019-11-19T14:00:00Z,count:123(uint64)}\n{ts:2019-12-20T00:00:00Z,count:72(uint64)}\n{ts:2020-01-19T10:00:00Z,count:102(uint64)}\n{ts:2020-02-18T20:00:00Z,count:114(uint64)}\n{ts:2020-03-20T06:00:00Z,count:111(uint64)}\n{ts:2020-04-19T16:00:00Z,count:137(uint64)}\n{ts:2020-05-20T02:00:00Z,count:74(uint64)}\n...\n")),(0,o.kt)("p",null,"There are lots of PRs that happened in the ~30 day block starting on 4/19/2020, so let's zoom in here\nand see who created these PRs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ zed query 'from prs range 2020-04-19T16:00:00Z to 2020-05-20T02:00:00Z\n             | count() by user:=user.login | sort -r count'\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{user:"mccanne",count:35(uint64)}\n{user:"henridf",count:34(uint64)}\n{user:"aswan",count:27(uint64)}\n{user:"mattnibs",count:14(uint64)}\n{user:"alfred-landrum",count:12(uint64)}\n{user:"philrz",count:9(uint64)}\n{user:"mikesbrown",count:5(uint64)}\n{user:"nwt",count:1(uint64)}\n')),(0,o.kt)("p",null,"McCanne is once again in the lead but Henri is not far behind."),(0,o.kt)("p",null,"The important thing demonstrated in the above query is the use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"from"),"\noperator. The ",(0,o.kt)("inlineCode",{parentName:"p"},"from")," operator specifies to query the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch of the ",(0,o.kt)("inlineCode",{parentName:"p"},"prs")," pool\nand also defines a time range for the query. The range part of the query is an\nimportant distinction from ",(0,o.kt)("inlineCode",{parentName:"p"},"zq"),". Whereas ",(0,o.kt)("inlineCode",{parentName:"p"},"zq")," would be required to\nscan the entire data set to execute this query, this Zed pool which stores data\nsorted by ",(0,o.kt)("inlineCode",{parentName:"p"},"created_at")," can skip all data that doesn't fall within the range\n",(0,o.kt)("inlineCode",{parentName:"p"},"2020-04-19T16:00:00Z to 2020-05-20T02:00:00Z"),". This results in a much faster\nquery over the limited range."),(0,o.kt)("h2",{id:"time-travel"},"Time travel"),(0,o.kt)("p",null,"Suppose we made a mistake by loading the last chunk of data.\nPerhaps we applied the wrong transform to the incoming data. Is there any\nway we can fix this? Similar to version control systems like ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com"},(0,o.kt)("inlineCode",{parentName:"a"},"git")),",\na Zed lake maintains a linear history (or commit log) of all the changes made to\na pool. There are many advantages to having data stored in this manner, one of\nwhich is that we can easily discard changes we don't want."),(0,o.kt)("p",null,"First we'll use ",(0,o.kt)("inlineCode",{parentName:"p"},"zed log")," command to view the history of commits (IDs will vary in your output):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ zed log\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"commit 26i2N0uu6wEo5XAhPMid6eQsamF\nAuthor: nibs@Matthews-MacBook-Air-2.local\nDate:   2022-03-21T26:03:25Z\n\n    loaded 1 data object\n\n    26i2MyhTem11tTOS2HSa1cgnYyz 1900 records in 765024 data bytes\n\ncommit 26i2MeIlGMoGHzjpbZttKtUuSFb\nAuthor: nibs@Matthews-MacBook-Air-2.local\nDate:   2022-03-21T19:47:19Z\n\n    loaded 1 data object\n\n    26i2Mi5xPdaTRxbho05DUhTYHIx 100 records in 46000 data bytes\n")),(0,o.kt)("p",null,"Let's revert the most recent commit:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"zed revert 26i2N0uu6wEo5XAhPMid6eQsamF\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"main": 26i2N0uu6wEo5XAhPMid6eQsamF reverted in 26nY9AYOxx2WtSfKGjof9R2MOYb\n')),(0,o.kt)("p",null,"We can run ",(0,o.kt)("inlineCode",{parentName:"p"},"count()")," to see we're back to our original 100 values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ zed query 'count()'\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{count:100(uint64)}\n")),(0,o.kt)("p",null,"If we made a mistake and we'd like to keep the data, we can also revert our\nrevert commit:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ zed revert 26nY9AYOxx2WtSfKGjof9R2MOYb\n")),(0,o.kt)("p",null,"Running ",(0,o.kt)("inlineCode",{parentName:"p"},"count()")," will show we're back to 2000 values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ zed query 'count()'\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{count:2000(uint64)}\n")),(0,o.kt)("h2",{id:"running-as-a-service"},"Running as a service"),(0,o.kt)("p",null,"Now that we've compiled an interesting data set, how might we share this with\nothers? Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"zed serve")," command we can launch our Zed Lake as a service\nthat will allow multiple clients to query and add data to the same lake. In a\nseparate console window run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ zed serve -lake $HOME/.zedlake\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{"level":"info","ts":1647957396.828584,"msg":"Open files limit raised","limit":10240}\n{"level":"info","ts":1647957396.8318028,"logger":"core","msg":"Started"}\n{"level":"info","ts":1647957396.83288,"logger":"httpd","msg":"Listening","addr":"[::]:9867"}\n')),(0,o.kt)("p",null,"We now have a service running on ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:9867"),". If we set the\n",(0,o.kt)("inlineCode",{parentName:"p"},"ZED_LAKE")," environment variable we defined at the beginning to this URL we can\nrun the full set of ",(0,o.kt)("inlineCode",{parentName:"p"},"zed")," commands against this service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ export ZED_LAKE=http://localhost:9867\n$ zed query -Z 'min(created_at), max(created_at)'\n")),(0,o.kt)("p",null,"=>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{\n    min: 2019-11-11T19:50:46Z,\n    max: 2021-08-10T19:48:56Z\n}\n")),(0,o.kt)("h2",{id:"where-to-go-from-here"},"Where to go from here?"),(0,o.kt)("p",null,"Obviously this is only the tip of the iceberg in terms of things that can be done with\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"zed")," command. Some suggested next steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Dig deeper into Zed Lakes by having a look at the ",(0,o.kt)("a",{parentName:"li",href:"/docs/commands/zed"},(0,o.kt)("inlineCode",{parentName:"a"},"zed")," README"),"."),(0,o.kt)("li",{parentName:"ol"},"Get a better idea of ways you can query your data by looking at the\n",(0,o.kt)("a",{parentName:"li",href:"/docs/language/"},"Zed language documentation"),".")),(0,o.kt)("p",null,"If you have any questions or run into any snags, join the friendly Zed community\nat the ",(0,o.kt)("a",{parentName:"p",href:"https://www.brimdata.io/join-slack/"},"Brim Data Slack workspace"),"."))}m.isMDXComponent=!0},4471:function(e,t,n){t.Z=n.p+"assets/files/github1-2496d524ce44f4cb9f32cfeb70fa669e.zng"},8249:function(e,t,n){t.Z=n.p+"assets/files/github2-d64f82ea518d971a86ad9e81da3a9b6e.zng"}}]);