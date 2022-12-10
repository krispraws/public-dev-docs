"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[365],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(a),d=n,p=h["".concat(l,".").concat(d)]||h[d]||m[d]||r;return a?o.createElement(p,i(i({ref:t},u),{},{components:a})):o.createElement(p,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1359:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=a(7462),n=(a(7294),a(3905));const r={sidebar_position:3,sidebar_class_name:"sidebar-item-develop-ttl",sidebar_label:"Expiring data with TTL",title:"Expiring data with Time to Live (TTL) in Momento Serverless Cache",description:"Learn about expiring data from a cache using Time to Live (TTL) in Momento Serverless Cache",slug:"/learn/how-it-works/expire-data-with-ttl"},i="Expire data with Time-to-Live (TTL) in Momento Serverless Cache",s={unversionedId:"learn/how-it-works/expire-data-with-ttl",id:"learn/how-it-works/expire-data-with-ttl",title:"Expiring data with Time to Live (TTL) in Momento Serverless Cache",description:"Learn about expiring data from a cache using Time to Live (TTL) in Momento Serverless Cache",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/learn/how-it-works/expire-data-with-ttl.md",sourceDirName:"learn/how-it-works",slug:"/learn/how-it-works/expire-data-with-ttl",permalink:"/ja/learn/how-it-works/expire-data-with-ttl",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/learn/how-it-works/expire-data-with-ttl.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_class_name:"sidebar-item-develop-ttl",sidebar_label:"Expiring data with TTL",title:"Expiring data with Time to Live (TTL) in Momento Serverless Cache",description:"Learn about expiring data from a cache using Time to Live (TTL) in Momento Serverless Cache",slug:"/learn/how-it-works/expire-data-with-ttl"},sidebar:"tutorialSidebar",previous:{title:"\u3069\u306e\u3088\u3046\u306b\u52d5\u4f5c\u3059\u308b\u304b",permalink:"/ja/learn/how-it-works/"},next:{title:"Cache eviction vs expiration",permalink:"/ja/learn/how-it-works/cache-eviction-vs-expiration"}},l={},c=[{value:"Expire items after a specified number of seconds",id:"expire-items-after-a-specified-number-of-seconds",level:2},{value:"How to set TTL in Momento Serverless Cache",id:"how-to-set-ttl-in-momento-serverless-cache",level:2},{value:"Frequently asked questions about TTL",id:"frequently-asked-questions-about-ttl",level:2}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"expire-data-with-time-to-live-ttl-in-momento-serverless-cache"},"Expire data with Time-to-Live (TTL) in Momento Serverless Cache"),(0,n.kt)("p",null,"This document provides an overview of Momento Serverless Cache\u2019s time-to-live (TTL) functionality. TTL allows items to expire automatically from the cache after a specified number of seconds."),(0,n.kt)("p",null,"Note: The service handles TTL expiry and does not consume any bandwidth for metering in your monthly transfer cost."),(0,n.kt)("h2",{id:"expire-items-after-a-specified-number-of-seconds"},"Expire items after a specified number of seconds"),(0,n.kt)("p",null,"The TTL value is the number of seconds from when Momento Serverless Cache writes the item to storage until the item expires from the cache. For example, if you set an item\u2019s TTL value to 900 seconds (15 minutes), the item will expire 15 minutes after insertion into the cache."),(0,n.kt)("h2",{id:"how-to-set-ttl-in-momento-serverless-cache"},"How to set TTL in Momento Serverless Cache"),(0,n.kt)("p",null,"There are three locations to set a TTL value:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You must set a default TTL value when creating a cache client object in a Momento SDK. However, any SET operation using that object can omit the TTL value and will use that default value."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const MY_DEFAULT_TTL = 60; // This value is in seconds\nconst momento = new SimpleCacheClient(authToken, MY_DEFAULT_TTL);\n")))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Optionally, in a SET operation, you can override the default value created with the SimpleCacheClient object. If you do not include a value for TTL in this SET operation, the value used to create the cache client object is used."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"await momento.set(CACHE_NAME, 'key', 'my value', 40)\n// The number 40 is the TTL value in seconds for this item to expire.\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If you\u2019re using the CLI when you run the command ",(0,n.kt)("inlineCode",{parentName:"p"},"momento configure"),", it writes a configuration file (~/.momento/config) and stores a value you specify for a default TTL in that file. If you write an item with the CLI from that same user and don\u2019t specify a TTL in the SET operation, the CLI will use the value from that configuration file."),(0,n.kt)("p",{parentName:"li"},"Note: Unless you copy the configuration file with your application, that file and its contents are unique to the location where you ran the ",(0,n.kt)("inlineCode",{parentName:"p"},"momento configure")," command."))),(0,n.kt)("h2",{id:"frequently-asked-questions-about-ttl"},"Frequently asked questions about TTL"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Why do caches need Time to Live (TTL)?"),(0,n.kt)("p",null,"Usually, a cache entry is not the definitive source of a piece of data. Rather, a cache entry is a faster, cheaper, and less durable way to store a piece of data, whether it's an individual record from a different database, some aggregated or computed information from multiple records or sources, or even a resource from an external, third-party application. Using a cache helps to improve latency or reduce load on a dependency in our application. In using a cache, we're anticipating that our cache entry will be requested by another client soon."),(0,n.kt)("p",null,"And yet, most caches don't hold onto all of their entries forever. Partly, this is a function of data staleness. The data you have stored in a cache entry may be changed over time, in which case you want a client to retrieve something fresher than the cached entry. If you have strict requirements around data consistency, you may need to directly update or remove a cache entry whenever its underlying data changes. In other situations, you may be fine serving potentially stale data for a time, while still expiring it regularly to ensure some amount of freshness."),(0,n.kt)("p",null,"A second consideration is simple resource constraints. Caches usually hold their data in RAM, and RAM is a scarce resource. If you never expire entries from your cache, you may find your RAM full when you try to cache new items. Your cache could reject the new entry or, more likely, choose to evict items based on a predetermined eviction algorithm."),(0,n.kt)("p",null,"Most caches were built for a pre-cloud world and thus require you to pre-provision specific amounts of memory available for your cache. For these caches, proper TTL management is critical as overfilling your cache can result in availability issues or cache evictions in ways you don't prefer."),(0,n.kt)("p",null,"In contrast, Momento is designed for the elasticity of the modern cloud. You don't need to pre-provision your cache size -- your Momento cache automatically expands and contracts based on the operations you perform against it. In the normal course of operations, Momento will not evict items based on a lack of available memory."),(0,n.kt)("p",null,"That being said, you should still use TTL on items in your Momento cache to avoid cache staleness and to reduce costs. Let's see how to use TTL with Momento's SimpleCache.")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"What's the maximum TTL I can set?"),"By default, the limit you can set the TTL for an item is 24 hours. If you need to have data in the cache beyond that time, please ",(0,n.kt)("a",{href:"mailto:support@momenthq.com"},"contact Momento Support"),"."))}m.isMDXComponent=!0}}]);