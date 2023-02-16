"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2910],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),u=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return t?a.createElement(f,i(i({ref:n},l),{},{components:t})):a.createElement(f,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2332:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),i={title:"Webhooks"},s=void 0,c={unversionedId:"integrations/webhooks",id:"integrations/webhooks",isDocsHomePage:!1,title:"Webhooks",description:"You can use webhooks to send events and user state from Radar to your server, a Google or Firebase Cloud Function, an AWS Lambda Function, or any HTTP endpoint. From there, you can store events and user state in a database, send them to a marketing automation or analytics platform, and more.",source:"@site/docs/integrations/webhooks.mdx",sourceDirName:"integrations",slug:"/integrations/webhooks",permalink:"/documentation/integrations/webhooks",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/integrations/webhooks.mdx",tags:[],version:"current",frontMatter:{title:"Webhooks"},sidebar:"defaultSidebar",previous:{title:"Integrations",permalink:"/documentation/integrations"},next:{title:"Airship",permalink:"/documentation/integrations/urban-airship"}},u=[{value:"Configuration",id:"configuration",children:[]}],l={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can use webhooks to send events and user state from Radar to your server, a ",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/functions/functions-and-firebase"},"Google or Firebase Cloud Function"),", an ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/lambda/"},"AWS Lambda Function"),", or any HTTP endpoint. From there, you can store events and user state in a database, send them to a marketing automation or analytics platform, and more."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Create a webhook on the Radar ",(0,r.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/integrations"},"Integrations page")," under ",(0,r.kt)("em",{parentName:"p"},"Webhooks"),". For ",(0,r.kt)("em",{parentName:"p"},"Environment"),", choose ",(0,r.kt)("em",{parentName:"p"},"Test")," to receive callbacks for events in the ",(0,r.kt)("em",{parentName:"p"},"Test")," environment, or choose ",(0,r.kt)("em",{parentName:"p"},"Live")," to receive callbacks for events in the ",(0,r.kt)("em",{parentName:"p"},"Live")," environment. For ",(0,r.kt)("em",{parentName:"p"},"Event Delivery"),", choose ",(0,r.kt)("em",{parentName:"p"},"Single Event")," to receive a single event in each request, or choose ",(0,r.kt)("em",{parentName:"p"},"Multiple Events")," to receive multiple events in each request when events occur simultaneously. Finally, enter a URL."),(0,r.kt)("p",null,"Whenever events are generated, Radar will send a ",(0,r.kt)("span",{className:"badge badge--info"},"POST")," request containing event and user data to the specified URL. You can also click the ",(0,r.kt)("em",{parentName:"p"},"Test")," button to send test event and user data. If you chose ",(0,r.kt)("em",{parentName:"p"},"Single Event"),", the request body will contain an ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," dictionary and a ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," dictionary. If you chose ",(0,r.kt)("em",{parentName:"p"},"Multiple Events"),", the request body will contain an ",(0,r.kt)("inlineCode",{parentName:"p"},"events")," array and a ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," dictionary."),(0,r.kt)("p",null,"To acknowledge receipt of the request, your webhook should return a ",(0,r.kt)("inlineCode",{parentName:"p"},"2xx")," status code (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"200 OK"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"201 Created"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"202 Accepted"),")."),(0,r.kt)("p",null,"Each webhook has a random security token. The authenticity of a request made to a webhook URL can be verified using the ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Radar-Signature")," header. If you chose ",(0,r.kt)("em",{parentName:"p"},"Single Event"),", the header will contain an ",(0,r.kt)("inlineCode",{parentName:"p"},"HMAC-SHA1")," hash of the event ID using the security token as the key. If you chose ",(0,r.kt)("em",{parentName:"p"},"Multiple Events"),", the header will contain an ",(0,r.kt)("inlineCode",{parentName:"p"},"HMAC-SHA1")," hash of the first event ID using the security token as the key."),(0,r.kt)("p",null,"Note that you can also receive events client-side via the ",(0,r.kt)("a",{parentName:"p",href:"/sdk"},"SDK"),"."),(0,r.kt)("h6",{id:"sample-request-body"},"Sample request body"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "events": [\n    {\n      "_id": "56db1f4613012711002229f6",\n      "type": "user.entered_geofence",\n      "createdAt": "2018-06-12T13:44:10.535Z",\n      "live": true,\n      "user": {\n        "userId": "1",\n        "deviceId": "C305F2DB-56DC-404F-B6C1-BC52F0B680D8",\n        "metadata": {\n          "customId": "abc",\n          "customFlag": false\n        },\n        "locationAuthorization": "GRANTED_FOREGROUND",\n        "locationAccuracyAuthorization": "FULL"\n      },\n      "geofence": {\n        "tag": "store",\n        "externalId": "123",\n        "description": "Store #123",\n        "metadata": {\n          "parking": false\n        }\n      },\n      "location": {\n        "type": "Point",\n        "coordinates": [\n          -73.977797,\n          40.783826\n        ]\n      },\n      "locationAccuracy": 5,\n      "confidence": 3,\n      "foreground": true,\n      "actualCreatedAt": "2018-06-12T13:44:10.535Z"\n    },\n    {\n      "_id": "56db1f4613012711002229f7",\n      "type": "user.entered_place",\n      "createdAt": "2018-06-12T13:44:10.535Z",\n      "live": true,\n      "user": {\n        "_id": "56db1f4613012711002229f4",\n        "userId": "1",\n        "deviceId": "C305F2DB-56DC-404F-B6C1-BC52F0B680D8",\n        "metadata": {\n          "customId": "abc",\n          "customFlag": false\n        },\n        "locationAuthorization": "GRANTED_FOREGROUND",\n        "locationAccuracyAuthorization": "FULL",\n      },\n      "place": {\n        "name": "Starbucks",\n        "chain": {\n          "name": "Starbucks",\n          "slug": "starbucks",\n          "externalId": "123",\n          "metadata": {\n            "customFlag": true\n          }\n        },\n        "categories": [\n          "food-beverage",\n          "coffee-shop"\n        ],\n        "location": {\n          "type": "Point",\n          "coordinates": [\n            -73.977797,\n            40.783826\n          ]\n        }\n      },\n      "location": {\n        "type": "Point",\n        "coordinates": [\n          -73.977797,\n          40.783826\n        ]\n      },\n      "locationAccuracy": 5,\n      "confidence": 2,\n      "foreground": true,\n      "actualCreatedAt": "2018-06-12T13:44:10.535Z"\n    }\n  ],\n  "user": {\n    "_id": "56db1f4613012711002229f4",\n    "live": true,\n    "userId": "1",\n    "deviceId": "C305F2DB-56DC-404F-B6C1-BC52F0B680D8",\n    "metadata": {\n      "customId": "abc",\n      "customFlag": false\n    },\n    "updatedAt": "2018-06-12T13:44:10.535Z",\n    "createdAt": "2018-06-10T11:23:58.741Z",\n    "location": {\n      "type": "Point",\n      "coordinates": [\n        -73.977797,\n        40.783826\n      ]\n    },\n    "locationAccuracy": 5,\n    "locationAuthorization": "GRANTED_FOREGROUND",\n    "locationAccuracyAuthorization": "FULL",\n    "stopped": true,\n    "foreground": false,\n    "deviceType": "iOS",\n    "ip": "173.14.0.1",\n    "geofences": [\n      {\n        "tag": "store",\n        "externalId": "123",\n        "description": "Store #123",\n        "metadata": {\n          "parking": false\n        }\n      }\n    ],\n    "place": {\n      "name": "Starbucks",\n      "chain": {\n        "name": "Starbucks",\n        "slug": "starbucks"\n      },\n      "categories": [\n        "food-beverage",\n        "coffee-shop"\n      ],\n      "location": {\n        "type": "Point",\n        "coordinates": [\n          -73.977797,\n          40.783826\n        ]\n      }\n    },\n    "country": {\n      "code": "US",\n      "name": "United States",\n      "flag": "\ud83c\uddfa\ud83c\uddf8"\n    },\n    "state": {\n      "code": "MD",\n      "name": "Maryland"\n    },\n    "dma": {\n      "code": "26",\n      "name": "Baltimore"\n    },\n    "postalCode": {\n      "code": "21014",\n      "name": "21014"\n    },\n    "segments": [\n      {\n        "description": "Starbucks Visitors",\n        "externalId": "starbucks-visitors"\n      }\n    ],\n    "topChains": [\n      {\n        "name": "Starbucks",\n        "slug": "starbucks",\n        "externalId": "123"\n      },\n      {\n        "name": "Walmart",\n        "slug": "walmart",\n        "externalId": "456"\n      }\n    ],\n    "fraud": {\n      "proxy": false,\n      "mocked": false\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);