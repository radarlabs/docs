"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7532],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},970:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r="alert_19nB",o="alertWarning_1tiz",i="alertInfo_1EfW",l="alertTip_1W6d",s="alertSuccess_7EZp",c=function(e){var t=e.children,n=e.alertType;return"warning"===n?a.createElement("div",{className:"alert "+r+" "+o,role:"alert"},t):"info"===n?a.createElement("div",{className:"alert "+r+" "+i,role:"alert"},t):"tip"===n?a.createElement("div",{className:"alert "+r+" "+l,role:"alert"},t):"success"===n?a.createElement("div",{className:"alert "+r+" "+s,role:"alert"},t):null}},3628:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(970),l={title:"Regions"},s=void 0,c={unversionedId:"regions",id:"regions",isDocsHomePage:!1,title:"Regions",description:"Regions is available on the { }",source:"@site/docs/regions.mdx",sourceDirName:".",slug:"/regions",permalink:"/documentation/regions",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/regions.mdx",tags:[],version:"current",frontMatter:{title:"Regions"},sidebar:"defaultSidebar",previous:{title:"Places",permalink:"/documentation/places"},next:{title:"Beacons",permalink:"/documentation/beacons"}},u=[{value:"Quickstart",id:"quickstart",children:[]},{value:"Countries",id:"countries",children:[{value:"Country allowlist or blocklist",id:"country-allowlist-or-blocklist",children:[]}]},{value:"States",id:"states",children:[]},{value:"DMAs",id:"dmas",children:[]},{value:"Postal codes",id:"postal-codes",children:[]},{value:"Coarse home and traveling detection",id:"coarse-home-and-traveling-detection",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{alertType:"info",mdxType:"Alert"},"Regions is available on the "," ",(0,o.kt)("a",{href:"https://radar.com/pricing",target:"_blank"},"Enterprise plan"),"."),(0,o.kt)("p",null,"With Regions, you can use our admin boundary database to detect a user's country, state, DMA (media market), or postal code."),(0,o.kt)("img",{className:"hero-image--small",src:"https://images.ctfassets.net/f2vbu16fzuly/45Ug4Lnky0SH8p0AU7j0Pi/f4f8e538d79692b7406ba152937c02c3/regions_event.svg"}),(0,o.kt)("p",null,"Regions provides the following user context:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "country": {\n    "code": "US",\n    "name": "United States",\n    "flag": "\ud83c\uddfa\ud83c\uddf8"\n  },\n  "state": {\n    "code": "MD",\n    "name": "Maryland"\n  },\n  "dma": {\n    "code": "26",\n    "name": "Baltimore"\n  },\n  "postalCode": {\n    "code": "21014"\n  }\n}\n')),(0,o.kt)("p",null,"Regions also provides the following events:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user.entered_region_country")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user.exited_region_country")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user.entered_region_state")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user.exited_region_state")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user.entered_region_dma")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user.exited_region_dma")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user.entered_region_postal_code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user.exited_region_postal_code"))),(0,o.kt)("h2",{id:"quickstart"},"Quickstart"),(0,o.kt)("p",null,"First, ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/signup"},"sign up")," for Radar and get an API key."),(0,o.kt)("p",null,"Then, enable Regions events on the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/settings"},"Settings page"),"."),(0,o.kt)("p",null,"From there, ",(0,o.kt)("a",{parentName:"p",href:"/documentation/sdk"},"integrate the SDK")," and call ",(0,o.kt)("inlineCode",{parentName:"p"},"Radar.trackOnce()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Radar.startTracking()"),", depending on your use case. Radar will generate an entry event on the first location update in a region matching your enabled event types."),(0,o.kt)("h2",{id:"countries"},"Countries"),(0,o.kt)("p",null,"Regions supports country detection globally. Each country has a ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and a unique 2-letter ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes"},"ISO 3166")," ",(0,o.kt)("inlineCode",{parentName:"p"},"code"),". View the ",(0,o.kt)("a",{parentName:"p",href:"/regions/countries"},"full list of countries"),"."),(0,o.kt)("h3",{id:"country-allowlist-or-blocklist"},"Country allowlist or blocklist"),(0,o.kt)("p",null,"Regions can also be used to allowlist or blocklist location updates in specific countries for privacy or compliance reasons. Contact your customer success manager to enable this feature."),(0,o.kt)("h2",{id:"states"},"States"),(0,o.kt)("p",null,"Regions supports state detection in the US and Canada only. Each state has a ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and a 2-letter ",(0,o.kt)("inlineCode",{parentName:"p"},"code")," unique to the residing ",(0,o.kt)("inlineCode",{parentName:"p"},"country"),". View the ",(0,o.kt)("a",{parentName:"p",href:"/regions/states"},"full list of states"),"."),(0,o.kt)("h2",{id:"dmas"},"DMAs"),(0,o.kt)("p",null,"Regions supports DMA (designated market area) detection in the US only. Each DMA has a ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"code"),". View the ",(0,o.kt)("a",{parentName:"p",href:"/regions/dmas"},"full list of DMAs"),". Or, learn more about ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Media_market"},"DMAs"),"."),(0,o.kt)("h2",{id:"postal-codes"},"Postal codes"),(0,o.kt)("p",null,"Regions supports postal (ZIP) code detection in the US only. Each postal code has a unique 5-letter ",(0,o.kt)("inlineCode",{parentName:"p"},"code"),"."),(0,o.kt)("h2",{id:"coarse-home-and-traveling-detection"},"Coarse home and traveling detection"),(0,o.kt)(i.Z,{alertType:"info",mdxType:"Alert"},"Contact your customer success manager for access to coarse home and traveling detection."),(0,o.kt)("p",null,"Regions can automatically detect a user's home regions based on location updates in the last 30 days, and detect when a user is traveling outside of their home regions."),(0,o.kt)("p",null,"Coarse home detection provides the following user context:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "homeRegions": {\n    "country": {\n      "code": "US",\n      "name": "United States",\n      "flag": "\ud83c\uddfa\ud83c\uddf8"\n    },\n    "state": {\n      "code": "MD",\n      "name": "Maryland"\n    },\n    "dma": {\n      "code": "26",\n      "name": "Baltimore"\n    },\n    "postalCode": {\n      "code": "21014"\n    }\n  }\n}\n')),(0,o.kt)("p",null,"It also provides the following ",(0,o.kt)("inlineCode",{parentName:"p"},"traveling")," state on events:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "traveling": {\n    "country": true,\n    "dma": true,\n    "state": true,\n    "postalCode": true,\n  }\n}\n')))}p.isMDXComponent=!0}}]);