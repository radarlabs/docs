"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[951],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return u}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),l=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=l(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),d=l(r),u=n,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return r?a.createElement(f,i(i({ref:e},c),{},{components:r})):a.createElement(f,i({ref:e},c))}));function u(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5329:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i={title:"Toolkit"},p=void 0,s={unversionedId:"toolkit",id:"toolkit",isDocsHomePage:!1,title:"Toolkit",description:"You can use our Radar Toolkit apps for iOS and Android to test Radar before integrating the SDK, or to test your implementation of Radar side-by-side with a complete implementation.",source:"@site/docs/toolkit.mdx",sourceDirName:".",slug:"/toolkit",permalink:"/documentation/toolkit",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/toolkit.mdx",tags:[],version:"current",frontMatter:{title:"Toolkit"},sidebar:"defaultSidebar",previous:{title:"Migrating from Google Maps",permalink:"/documentation/tutorials/migrate-from-google-maps"},next:{title:"FAQs",permalink:"/documentation/faqs"}},l=[{value:"Instructions",id:"instructions",children:[]}],c={toc:l};function m(t){var e=t.components,r=(0,n.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use our Radar Toolkit apps for iOS and Android to test Radar before integrating the ",(0,o.kt)("a",{parentName:"p",href:"/sdk"},"SDK"),", or to test your implementation of Radar side-by-side with a complete implementation."),(0,o.kt)("a",{href:"https://itunes.apple.com/us/app/radar-toolkit/id1179413551?mt=8",target:"_blank"},(0,o.kt)("img",{src:"https://s3.amazonaws.com/com.onradar.www/images/download_ios.svg",style:{display:"inline-block",height:"60px",marginRight:"30px",marginBottom:"20px",marginTop:"10px",width:"180px"}})),(0,o.kt)("a",{href:"https://play.google.com/store/apps/details?id=com.onradar.app",target:"_blank"},(0,o.kt)("img",{src:"https://s3.amazonaws.com/com.onradar.www/images/download_android.svg",style:{display:"inline-block",height:"60px",marginBottom:"20px",marginTop:"10px",width:"202.5px"}})),(0,o.kt)("h2",{id:"instructions"},"Instructions"),(0,o.kt)("p",null,"To get started, you'll need a Radar account. Don't have a Radar account yet? ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/signup"},"Sign up")," first."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the app from the ",(0,o.kt)("a",{href:"https://itunes.apple.com/us/app/radar-toolkit/id1179413551?mt=8",target:"_blank"},"App Store (iOS)")," or ",(0,o.kt)("a",{href:"https://play.google.com/store/apps/details?id=com.onradar.app",target:"_blank"},"Play Store (Android)"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the app and grant notification permissions and location permissions by following the onboarding prompts.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy your 6-digit onboarding code from the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard"},"Radar dashboard")," and enter it to link your ",(0,o.kt)("em",{parentName:"p"},"test publishable API key")," to Toolkit.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After completing onboarding, you should see your location on the map in the toolkit app along with your user on the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/users"},"Users page")," in the dashboard. If you are in a geofence or at a place, you will see events in the app and see events on the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/events"},"Events page")," in the dashboard.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To generate a new track call in the foreground, tap the refresh button!")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To track in the background, move more than 100 meters! ",(0,o.kt)("strong",{parentName:"p"},"Note that location updates may be delayed significantly by Android ",(0,o.kt)("a",{parentName:"strong",href:"https://developer.android.com/training/monitoring-device-state/doze-standby.html"},"Doze Mode and App Standby"),", iOS ",(0,o.kt)("a",{parentName:"strong",href:"https://support.apple.com/en-us/HT205234"},"Low Power Mode"),", or if the device has connectivity issues, low battery, or wi-fi disabled."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To try out different presets, open the ",(0,o.kt)("em",{parentName:"p"},"Settings")," screen. Then, select the ",(0,o.kt)("em",{parentName:"p"},"Tracking Options")," preset to use, one of ",(0,o.kt)("em",{parentName:"p"},"Efficient"),", ",(0,o.kt)("em",{parentName:"p"},"Responsive"),", or ",(0,o.kt)("em",{parentName:"p"},"Continuous"),". Learn about ",(0,o.kt)("a",{parentName:"p",href:"/sdk/tracking#ios-presets"},"iOS tracking presets")," and ",(0,o.kt)("a",{parentName:"p",href:"/sdk/tracking#android-presets"},"Android tracking presets"),". Manage the the notifications you want to receive, including ",(0,o.kt)("em",{parentName:"p"},"Events")," (events received from Radar), ",(0,o.kt)("em",{parentName:"p"},"Locations")," (location updates sent to Radar), and ",(0,o.kt)("em",{parentName:"p"},"Errors")," (network, location, and permissions errors)."))),(0,o.kt)("img",{src:"https://s3.amazonaws.com/com.onradar.www/images/toolkit_small.png",className:"large"}))}m.isMDXComponent=!0}}]);