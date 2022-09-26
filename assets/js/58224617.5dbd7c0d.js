"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[15],{3378:function(e,t,n){n.d(t,{A:function(){return k}});var a=n(3117),l=n(7294),c=n(4334),r=n(2389),i=n(7392),o=n(7094),s=n(2466),u="tabList__CuJ",h="tabItem_LNqP";function m(e){var t;const{lazy:n,block:r,defaultValue:m,values:T,groupId:_,className:p}=e,d=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=T??d.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),N=(0,i.l)(k,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const E=null===m?m:m??(null==(t=d.find((e=>e.props.default)))?void 0:t.props.value)??d[0].props.value;if(null!==E&&!k.some((e=>e.value===E)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${E}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:C}=(0,o.U)(),[S,b]=(0,l.useState)(E),g=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=_){const e=y[_];null!=e&&e!==S&&k.some((t=>t.value===e))&&b(e)}const M=e=>{const t=e.currentTarget,n=g.indexOf(t),a=k[n].value;a!==S&&(O(t),b(a),null!=_&&C(_,String(a)))},f=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=g.indexOf(e.currentTarget)+1;n=g[t]??g[0];break}case"ArrowLeft":{const t=g.indexOf(e.currentTarget)-1;n=g[t]??g[g.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,c.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":r},p)},k.map((e=>{let{value:t,label:n,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>g.push(e),onKeyDown:f,onFocus:M,onClick:M},r,{className:(0,c.Z)("tabs__item",h,null==r?void 0:r.className,{"tabs__item--active":S===t})}),n??t)}))),n?(0,l.cloneElement)(d.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},d.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function T(e){const t=(0,r.Z)();return l.createElement(m,(0,a.Z)({key:String(t)},e))}var _="tabItem_Ymn6";function p(e){let{children:t,hidden:n,className:a}=e;return l.createElement("div",{role:"tabpanel",className:(0,c.Z)(_,a),hidden:n},t)}var d=n(6066);const k=e=>{let{js:t,python:n,java:a,go:c,csharp:r,rust:i,cli:o}=e;return l.createElement(T,null,l.createElement(p,{value:"js",label:"JavaScript"},l.createElement(d.Z,{language:"js"},t)),l.createElement(p,{value:"python",label:"Python"},l.createElement(d.Z,{language:"python"},n)),l.createElement(p,{value:"java",label:"Java"},l.createElement(d.Z,{language:"java"},a)),l.createElement(p,{value:"go",label:"Go"},l.createElement(d.Z,{language:"go"},c)),l.createElement(p,{value:"csharp",label:"C#"},l.createElement(d.Z,{language:"csharp"},r)),l.createElement(p,{value:"rust",label:"Rust"},l.createElement(d.Z,{language:"rust"},i)),l.createElement(p,{value:"cli",label:"CLI"},l.createElement(d.Z,{language:"cli"},o)))}},1355:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return u}});var a=n(3117),l=(n(7294),n(3905)),c=n(3378);const r={sidebar_position:5,sidebar_class_name:"sidebar-item-api-reference"},i="API Reference",o={unversionedId:"API-reference",id:"API-reference",title:"API Reference",description:"Control APIs",source:"@site/docs/API-reference.mdx",sourceDirName:".",slug:"/API-reference",permalink:"/docs/API-reference",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/API-reference.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_class_name:"sidebar-item-api-reference"},sidebar:"tutorialSidebar",previous:{title:"Caching Strategies and Patterns",permalink:"/docs/caching-concepts/caching-strategies-and-patterns"},next:{title:"Guides",permalink:"/docs/guides"}},s={},u=[{value:"Control APIs",id:"control-apis",level:2},{value:"Create Cache",id:"create-cache",level:3},{value:"Delete Cache",id:"delete-cache",level:3},{value:"List Caches",id:"list-caches",level:3},{value:"Data APIs",id:"data-apis",level:2},{value:"Set",id:"set",level:3},{value:"Get",id:"get",level:3},{value:"Delete",id:"delete",level:3}],h={toc:u};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"api-reference"},"API Reference"),(0,l.kt)("h2",{id:"control-apis"},"Control APIs"),(0,l.kt)("h3",{id:"create-cache"},"Create Cache"),(0,l.kt)("p",null,"Creates a cache with provided name"),(0,l.kt)("p",null,"Attributes:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache to be created.")))),(0,l.kt)(c.A,{js:"\nconst authToken=\"eyJhbGc.MyTestToken\";\nconst defaultTTL = 300;\nconst momento = new SimpleCacheClient(authToken, defaultTtl);\nmomento.createCache('test-cache');\n",python:"\nimport momento.simple_cache_client as scc\n\n_MOMENTO_AUTH_TOKEN = \"eyJhbGc.MyTestToken\"\n_ITEM_DEFAULT_TTL_SECONDS = 300\n\nwith scc.init(_MOMENTO_AUTH_TOKEN, _ITEM_DEFAULT_TTL_SECONDS) as cache_client:\n    cache_client.create_cache('test-cache')\n",java:'\nString MOMENTO_AUTH_TOKEN = "eyJhbGc.MyTestToken";\nint DEFAULT_ITEM_TTL_SECONDS = 300;\n\nSimpleCacheClient simpleCacheClient = SimpleCacheClient\n    .builder(MOMENTO_AUTH_TOKEN, DEFAULT_ITEM_TTL_SECONDS)\n    .build()\n\nsimpleCacheClient.createCache("test-cache");\n    ',go:'\nconst (\n    authToken             = "eyJhbGc.MyTestToken"\n    itemDefaultTtlSeconds = 300\n)\nclient, err := momento.NewSimpleCacheClient(authToken, itemDefaultTtlSeconds)\nif err != nil {\n    panic(err)\n}\nerr = client.CreateCache(&momento.CreateCacheRequest{\n    CacheName: "test-cache",\n})\n    ',csharp:'\nuint DEFAULT_TTL_SECONDS = 300;\nString MOMENTO_AUTH_TOKEN = "eyJhbGc.MyTestToken";\nusing SimpleCacheClient client = new SimpleCacheClient(MOMENTO_AUTH_TOKEN, DEFAULT_TTL_SECONDS);\nclient.CreateCache("test-cache");\n    ',rust:'\nlet auth_token = "eyJhbGc.MyTestToken";\nlet item_default_ttl_seconds = 300;\nlet mut cache_client = SimpleCacheClientBuilder::new(\n    auth_token,\n    NonZeroU64::new(item_default_ttl_seconds).unwrap(),\n)\n.unwrap()\n.build();\n\nlet cache_name = String::from("test-cache");\nmatch cache_client.create_cache(&cache_name).await {\n    Ok(_) => {}\n    Err(err) => {\n        eprintln!("{}", err);\n    }\n}\n',cli:"momento cache create --name test-cache",mdxType:"SdkExamples"}),(0,l.kt)("h3",{id:"delete-cache"},"Delete Cache"),(0,l.kt)("p",null,"Deletes a cache"),(0,l.kt)("p",null,"Attributes:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache to be deleted.")))),(0,l.kt)(c.A,{js:"\nconst authToken=\"eyJhbGc.MyTestToken\";\nconst defaultTTL = 300;\nconst momento = new SimpleCacheClient(authToken, defaultTtl);\nmomento.deleteCache('test-cache');\n",python:"\nimport momento.simple_cache_client as scc\n\n_MOMENTO_AUTH_TOKEN = \"eyJhbGc.MyTestToken\"\n_ITEM_DEFAULT_TTL_SECONDS = 300\n\nwith scc.init(_MOMENTO_AUTH_TOKEN, _ITEM_DEFAULT_TTL_SECONDS) as cache_client:\n    cache_client.delete_cache('test-cache')\n",java:'\nString MOMENTO_AUTH_TOKEN = "eyJhbGc.MyTestToken";\nint DEFAULT_ITEM_TTL_SECONDS = 300;\n\nSimpleCacheClient simpleCacheClient = SimpleCacheClient\n    .builder(MOMENTO_AUTH_TOKEN, DEFAULT_ITEM_TTL_SECONDS)\n    .build()\n\nsimpleCacheClient.deleteCache("test-cache");\n    ',go:'\nconst (\n    authToken             = "eyJhbGc.MyTestToken"\n    itemDefaultTtlSeconds = 300\n)\nclient, err := momento.NewSimpleCacheClient(authToken, itemDefaultTtlSeconds)\nif err != nil {\n    panic(err)\n}\nerr = client.DeleteCache(&momento.CreateCacheRequest{\n    CacheName: "test-cache",\n})\n    ',csharp:'\nuint DEFAULT_TTL_SECONDS = 300;\nString MOMENTO_AUTH_TOKEN = "eyJhbGc.MyTestToken";\nusing SimpleCacheClient client = new SimpleCacheClient(MOMENTO_AUTH_TOKEN, DEFAULT_TTL_SECONDS);\nclient.DeleteCache("test-cache");\n    ',rust:'\nlet auth_token = "eyJhbGc.MyTestToken";\nlet item_default_ttl_seconds = 300;\nlet mut cache_client = SimpleCacheClientBuilder::new(\n    auth_token,\n    NonZeroU64::new(item_default_ttl_seconds).unwrap(),\n)\n.unwrap()\n.build();\n\nlet cache_name = String::from("test-cache");\nmatch cache_client.delete_cache(&cache_name).await {\n    Ok(_) => {}\n    Err(err) => {\n        eprintln!("{}", err);\n    }\n}\n',cli:"momento cache delete-cache --name test-cache",mdxType:"SdkExamples"}),(0,l.kt)("h3",{id:"list-caches"},"List Caches"),(0,l.kt)("p",null,"Lists all caches for the provided auth token."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nextToken"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Token for pagination of caches.")))),(0,l.kt)("h2",{id:"data-apis"},"Data APIs"),(0,l.kt)("h3",{id:"set"},"Set"),(0,l.kt)("p",null,"Sets the value in cache with a given Time To Live (TTL) seconds. If a value for this key is already present it will be replaced by the new value."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"[]Byte"),(0,l.kt)("td",{parentName:"tr",align:null},"The key under which the value is to be added.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"[]Byte"),(0,l.kt)("td",{parentName:"tr",align:null},"The value to be stored.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ttlSeconds"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Time to Live for the item in Cache.")))),(0,l.kt)(c.A,{js:"\nconst authToken=\"eyJhbGc.MyTestToken\";\nconst defaultTTL = 300;\nconst momento = new SimpleCacheClient(authToken, defaultTtl);\nmomento.set('test-cache', 'test-key', 'test-value');\n",python:"\nimport momento.simple_cache_client as scc\n\n_MOMENTO_AUTH_TOKEN = \"eyJhbGc.MyTestToken\"\n_ITEM_DEFAULT_TTL_SECONDS = 300\n\nwith scc.init(_MOMENTO_AUTH_TOKEN, _ITEM_DEFAULT_TTL_SECONDS) as cache_client:\n    cache_client.set('test-cache', 'test-key', 'test-value')\n",java:"\nString MOMENTO_AUTH_TOKEN = \"eyJhbGc.MyTestToken\";\nint DEFAULT_ITEM_TTL_SECONDS = 300;\n\nSimpleCacheClient simpleCacheClient = SimpleCacheClient\n    .builder(MOMENTO_AUTH_TOKEN, DEFAULT_ITEM_TTL_SECONDS)\n    .build()\n\nsimpleCacheClient.set('test-cache', 'test-key', 'test-value');\n    ",go:'\nconst (\n    authToken             = "eyJhbGc.MyTestToken"\n    itemDefaultTtlSeconds = 300\n)\nclient, err := momento.NewSimpleCacheClient(authToken, itemDefaultTtlSeconds)\nif err != nil {\n    panic(err)\n}\n_, err = client.Set(&CacheSetRequest{\n    CacheName: "test-cache",\n    Key:       "test-key",\n    Value:     "test-value",\n})\n    ',csharp:'\nuint DEFAULT_TTL_SECONDS = 300;\nString MOMENTO_AUTH_TOKEN = "eyJhbGc.MyTestToken";\nusing SimpleCacheClient client = new SimpleCacheClient(MOMENTO_AUTH_TOKEN, DEFAULT_TTL_SECONDS);\nclient.Set("test-cache", "test-key", "test-value");\n    ',rust:'\nlet auth_token = "eyJhbGc.MyTestToken";\nlet item_default_ttl_seconds = 300;\nlet mut cache_client = SimpleCacheClientBuilder::new(\n    auth_token,\n    NonZeroU64::new(item_default_ttl_seconds).unwrap(),\n)\n.unwrap()\n.build();\n\nlet cache_name = String::from("cache");\nlet key = String::from("my_key");\nlet value = String::from("my_value");\ncache_client\n    .set(&cache_name, key.clone(), value.clone(), None)\n    .await\n    .unwrap();\n    ',cli:"momento cache set --key test-key --value test-value",mdxType:"SdkExamples"}),(0,l.kt)("h3",{id:"get"},"Get"),(0,l.kt)("p",null,"Get the cache value stored for the given key."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"[]Byte"),(0,l.kt)("td",{parentName:"tr",align:null},"The key under which the value is to be added.")))),(0,l.kt)(c.A,{js:"\nconst authToken=\"eyJhbGc.MyTestToken\";\nconst defaultTTL = 300;\nconst momento = new SimpleCacheClient(authToken, defaultTtl);\nmomento.get('test-cache', 'test-key');\n",python:"\nimport momento.simple_cache_client as scc\n\n_MOMENTO_AUTH_TOKEN = \"eyJhbGc.MyTestToken\"\n_ITEM_DEFAULT_TTL_SECONDS = 300\n\nwith scc.init(_MOMENTO_AUTH_TOKEN, _ITEM_DEFAULT_TTL_SECONDS) as cache_client:\n    cache_client.get('test-cache', 'test-key')\n",java:"\nString MOMENTO_AUTH_TOKEN = \"eyJhbGc.MyTestToken\";\nint DEFAULT_ITEM_TTL_SECONDS = 300;\n\nSimpleCacheClient simpleCacheClient = SimpleCacheClient\n    .builder(MOMENTO_AUTH_TOKEN, DEFAULT_ITEM_TTL_SECONDS)\n    .build()\n\nsimpleCacheClient.get('test-cache', 'test-key');\n    ",go:'\nconst (\n    authToken             = "eyJhbGc.MyTestToken"\n    itemDefaultTtlSeconds = 300\n)\nclient, err := momento.NewSimpleCacheClient(authToken, itemDefaultTtlSeconds)\nif err != nil {\n    panic(err)\n}\n_, err = client.Get(&CacheSetRequest{\n    CacheName: "test-cache",\n    Key:       "test-key",\n})\n    ',csharp:'\nuint DEFAULT_TTL_SECONDS = 300;\nString MOMENTO_AUTH_TOKEN = "eyJhbGc.MyTestToken";\nusing SimpleCacheClient client = new SimpleCacheClient(MOMENTO_AUTH_TOKEN, DEFAULT_TTL_SECONDS);\nclient.Get("test-cache", "test-key");\n    ',rust:'\nlet auth_token = "eyJhbGc.MyTestToken";\nlet item_default_ttl_seconds = 300;\nlet mut cache_client = SimpleCacheClientBuilder::new(\n    auth_token,\n    NonZeroU64::new(item_default_ttl_seconds).unwrap(),\n)\n.unwrap()\n.build();\n\nlet cache_name = String::from("cache");\nlet key = String::from("my_key");\nlet value = String::from("my_value");\ncache_client\n    .get(&cache_name, key.clone())\n    .await\n    .unwrap();\n    ',cli:"momento cache get --key test-key --value test-value",mdxType:"SdkExamples"}),(0,l.kt)("h3",{id:"delete"},"Delete"),(0,l.kt)("p",null,"Delete the cache value stored for the given key."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"[]Byte"),(0,l.kt)("td",{parentName:"tr",align:null},"The key under which the value is to be deleted.")))),(0,l.kt)(c.A,{js:"\nconst authToken=\"eyJhbGc.MyTestToken\";\nconst defaultTTL = 300;\nconst momento = new SimpleCacheClient(authToken, defaultTtl);\nmomento.get('test-cache', 'test-key');\n",python:"\nimport momento.simple_cache_client as scc\n\n_MOMENTO_AUTH_TOKEN = \"eyJhbGc.MyTestToken\"\n_ITEM_DEFAULT_TTL_SECONDS = 300\n\nwith scc.init(_MOMENTO_AUTH_TOKEN, _ITEM_DEFAULT_TTL_SECONDS) as cache_client:\n    cache_client.delete('test-cache', 'test-key')\n",java:"\nString MOMENTO_AUTH_TOKEN = \"eyJhbGc.MyTestToken\";\nint DEFAULT_ITEM_TTL_SECONDS = 300;\n\nSimpleCacheClient simpleCacheClient = SimpleCacheClient\n    .builder(MOMENTO_AUTH_TOKEN, DEFAULT_ITEM_TTL_SECONDS)\n    .build()\n\nsimpleCacheClient.delete('test-cache', 'test-key');\n    ",go:'\nconst (\n    authToken             = "eyJhbGc.MyTestToken"\n    itemDefaultTtlSeconds = 300\n)\nclient, err := momento.NewSimpleCacheClient(authToken, itemDefaultTtlSeconds)\nif err != nil {\n    panic(err)\n}\n_, err = client.Delete(&CacheSetRequest{\n    CacheName: "test-cache",\n    Key:       "test-key",\n})\n    ',csharp:'\nuint DEFAULT_TTL_SECONDS = 300;\nString MOMENTO_AUTH_TOKEN = "eyJhbGc.MyTestToken";\nusing SimpleCacheClient client = new SimpleCacheClient(MOMENTO_AUTH_TOKEN, DEFAULT_TTL_SECONDS);\nclient.Delete("test-cache", "test-key");\n    ',rust:'\nlet auth_token = "eyJhbGc.MyTestToken";\nlet item_default_ttl_seconds = 300;\nlet mut cache_client = SimpleCacheClientBuilder::new(\n    auth_token,\n    NonZeroU64::new(item_default_ttl_seconds).unwrap(),\n)\n.unwrap()\n.build();\n\nlet cache_name = String::from("cache");\nlet key = String::from("my_key");\nlet value = String::from("my_value");\ncache_client\n    .delete(&cache_name, key.clone())\n    .await\n    .unwrap();\n    ',cli:"momento cache delete --key test-key --value test-value",mdxType:"SdkExamples"}))}m.isMDXComponent=!0}}]);