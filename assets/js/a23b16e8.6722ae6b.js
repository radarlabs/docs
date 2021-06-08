(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8622],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=d(r),p=a,m=f["".concat(c,".").concat(p)]||f[p]||u[p]||i;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2204:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7294),a="Card_ShZN",i=function(e){var t=e.children,r=e.className;return n.createElement("div",{className:a+" "+r},t)}},708:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7294),a="LinkCard_75d5",i=(r(1821),function(e){var t=e.linkTo,r=e.children;e.title;return n.createElement("a",{href:t,className:a},r)})},1821:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(7294),a="TileCard_3eEi",i="CardContent_2Ki1",o="CardTitle_1W1S",s=r(2204),c=function(e){var t=e.children,r=e.title;return n.createElement(s.Z,{className:a},n.createElement("div",{className:i},t),r&&n.createElement("div",{className:o},r))}},5973:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return f}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=r(708),s=r(1821),c={sidebar_position:1,sidebar_label:"Overview",id:"sdk-overview",slug:"/sdk",title:"SDK Reference"},d={unversionedId:"sdk/sdk-overview",id:"sdk/sdk-overview",isDocsHomePage:!1,title:"SDK Reference",description:"The Radar SDK abstracts away cross-platform differences between location services, allowing you to add geofencing, location tracking, trip tracking, geocoding, and search to your apps with just a few lines of code.",source:"@site/docs/sdk/sdk.mdx",sourceDirName:"sdk",slug:"/sdk",permalink:"/documentation/sdk",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/sdk/sdk.mdx",version:"current",sidebar_label:"Overview",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Overview",id:"sdk-overview",slug:"/sdk",title:"SDK Reference"},sidebar:"defaultSidebar",previous:{title:"Trip Tracking",permalink:"/documentation/trip-tracking"},next:{title:"iOS SDK",permalink:"/documentation/sdk/ios"}},l=[{value:"Platforms",id:"platforms",children:[]}],u={toc:l};function f(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Radar SDK abstracts away cross-platform differences between location services, allowing you to add geofencing, location tracking, trip tracking, geocoding, and search to your apps with just a few lines of code."),(0,i.kt)("p",null,"Note that you can use our ",(0,i.kt)("a",{parentName:"p",href:"/toolkit"},"toolkit apps")," for iOS and Android to test Radar before integrating the SDK, or to test your implementation of Radar side-by-side with a complete implementation."),(0,i.kt)("h2",{id:"platforms"},"Platforms"),(0,i.kt)("div",{className:"deck"},(0,i.kt)(o.Z,{linkTo:"./ios",mdxType:"LinkCard"},(0,i.kt)(s.Z,{title:"iOS",mdxType:"TileCard"},(0,i.kt)("img",{className:"logo sdk-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/5nxMfOV1AEV42ukkHiNEqY/005508c8f85c145079d37634b937daa0/sdk-ios.png"}))),(0,i.kt)(o.Z,{linkTo:"./android",mdxType:"LinkCard"},(0,i.kt)(s.Z,{title:"Android",mdxType:"TileCard"},(0,i.kt)("img",{className:"logo sdk-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/1h7LIGOy91PGb9OIlJkvhq/40ab496e9cee48a3791ef4839a44add3/sdk-android.png"}))),(0,i.kt)(o.Z,{linkTo:"./react-native",mdxType:"LinkCard"},(0,i.kt)(s.Z,{title:"React Native",mdxType:"TileCard"},(0,i.kt)("img",{className:"logo sdk-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/qbwztcZOOUmwmTPXcCmX4/e98763cecf860e99db6396ddc663645a/sdk-react-native.png"}))),(0,i.kt)(o.Z,{linkTo:"./web",mdxType:"LinkCard"},(0,i.kt)(s.Z,{title:"Web",mdxType:"TileCard"},(0,i.kt)("img",{className:"logo sdk-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/1MR4TnCTsc6CraImsULmb7/943ff0729468bfdf803bb044cdb31322/sdk-web.png"}))),(0,i.kt)(o.Z,{linkTo:"./cordova",mdxType:"LinkCard"},(0,i.kt)(s.Z,{title:"Cordova",mdxType:"TileCard"},(0,i.kt)("img",{className:"logo sdk-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/2OrYoemP0eAsp7EtiO11tY/85d43c98638e48e682283c15e4320621/sdk-cordova.png"}))),(0,i.kt)(o.Z,{linkTo:"./capacitor",mdxType:"LinkCard"},(0,i.kt)(s.Z,{title:"Capacitor",mdxType:"TileCard"},(0,i.kt)("img",{className:"logo sdk-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/3mdbgE2n1kOqPU0IYSstD9/29a131d4bbaa1f332191043a733492d0/sdk-capacitor.png"}))),(0,i.kt)(o.Z,{linkTo:"./flutter",mdxType:"LinkCard"},(0,i.kt)(s.Z,{title:"Flutter",mdxType:"TileCard"},(0,i.kt)("img",{className:"logo sdk-logo",src:"https://images.ctfassets.net/f2vbu16fzuly/2ksvV5vl7uIFnuamcsMeSR/d3d3aa4864badc74942be3bbaca20b42/sdk-flutter.png"})))))}f.isMDXComponent=!0}}]);