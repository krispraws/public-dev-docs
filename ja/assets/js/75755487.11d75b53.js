"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[942],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(b,l(l({ref:t},p),{},{components:a})):n.createElement(b,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),o=a(6010),l=a(2389),i=a(7392),s=a(7094),c=a(2466);const p="tabList__CuJ",u="tabItem_LNqP";function m(e){var t;const{lazy:a,block:l,defaultValue:m,values:d,groupId:b,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,i.l)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[T,w]=(0,r.useState)(g),j=[],{blockElementScrollPositionUntilNextRender:P}=(0,c.o5)();if(null!=b){const e=y[b];null!=e&&e!==T&&v.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,a=j.indexOf(t),n=v[a].value;n!==T&&(P(t),w(n),null!=b&&N(b,String(n)))},x=e=>{var t;let a=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;a=j[t]??j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;a=j[t]??j[j.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},h)},v.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>j.push(e),onKeyDown:x,onClick:O},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":T===t})}),a??t)}))),a?(0,r.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},4871:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),o=a(5488),l=a(5162);const i={sidebar_position:4,sidebar_label:"Topics (Pub/Sub)",title:"Topics (pub/sub) API reference",description:"Learn how to interact programmatically with Momento Topics pub/sub API.",slug:"/develop/api-reference/topics"},s="Using the Momento Topics (pub/sub) API with Momento Serverless Cache",c={unversionedId:"develop/api-reference/topics",id:"develop/api-reference/topics",title:"Topics (pub/sub) API reference",description:"Learn how to interact programmatically with Momento Topics pub/sub API.",source:"@site/docs/develop/api-reference/topics.md",sourceDirName:"develop/api-reference",slug:"/develop/api-reference/topics",permalink:"/ja/develop/api-reference/topics",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/api-reference/topics.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Topics (Pub/Sub)",title:"Topics (pub/sub) API reference",description:"Learn how to interact programmatically with Momento Topics pub/sub API.",slug:"/develop/api-reference/topics"},sidebar:"tutorialSidebar",previous:{title:"Sorted sets",permalink:"/ja/develop/api-reference/collections/sortedsets"},next:{title:"CollectionTTL object",permalink:"/ja/develop/api-reference/collections/collectionttl"}},p={},u=[{value:"Topics methods",id:"topics-methods",level:2},{value:"Subscribe",id:"subscribe",level:3},{value:"Publish",id:"publish",level:3},{value:"TopicClient",id:"topicclient",level:2}],m={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-the-momento-topics-pubsub-api-with-momento-serverless-cache"},"Using the Momento Topics (pub/sub) API with Momento Serverless Cache"),(0,r.kt)("p",null,"Momento Topics is a messaging pattern that allows for real-time communication between parts of a distributed application. It enables you to publish (produce) values to a topic, as well as subscribe (consume) from a topic. This page details the Momento API methods for interacting with Momento Topics."),(0,r.kt)("h2",{id:"topics-methods"},"Topics methods"),(0,r.kt)("h3",{id:"subscribe"},"Subscribe"),(0,r.kt)("p",null,"This method subscribes to a topic to receive new values with a stateful connection."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache where the topic exists.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topicName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the topic to subscribe to.")))),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"golang",label:"Go",default:!0,mdxType:"TabItem"},"This is ",(0,r.kt)("a",{href:"https://github.com/momentohq/client-sdk-go/blob/main/examples/pubsub-example/main.go#L26"},"example code"),"."),(0,r.kt)(l.Z,{value:"nodejs",label:"Node.js",default:!0,mdxType:"TabItem"},"Coming soon.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Success - Returns a subscription object."),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/ja/develop/api-reference/response-objects"},"response objects")," for specific information."),(0,r.kt)("p",null,"With the returned subscription object, once put in a for loop, your code will receive an event when a new value is published to the Topic.")),(0,r.kt)("h3",{id:"publish"},"Publish"),(0,r.kt)("p",null,"Publishes a message to a topic."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the cache where the topic exists.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topicName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the topic to publish the value to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"String / bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Value to publish to the topic.")))),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"golang",label:"Go",default:!0,mdxType:"TabItem"},"This is ",(0,r.kt)("a",{href:"https://github.com/momentohq/client-sdk-go/blob/main/examples/pubsub-example/main.go#L95"},"example code"),"."),(0,r.kt)(l.Z,{value:"nodejs",label:"Node.js",default:!0,mdxType:"TabItem"},"Coming soon.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Method response object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Success"),(0,r.kt)("li",{parentName:"ul"},"Error")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/ja/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,r.kt)("h2",{id:"topicclient"},"TopicClient"),(0,r.kt)("p",null,"Instead of the CacheClient, as used in most Momento Serverless Cache API calls, for Topics you use a TopicClient object."))}d.isMDXComponent=!0}}]);