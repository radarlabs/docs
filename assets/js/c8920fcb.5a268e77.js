"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3582],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),g=i,u=m["".concat(p,".").concat(g)]||m[g]||d[g]||o;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return i}})},4996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return r}});var a=n(2263),i=n(3919);function o(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,r=o.forcePrependBaseUrl,s=void 0!==r&&r,p=o.absolute,l=void 0!==p&&p;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(s)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+c:c}(o,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},5203:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=n(4996),s={title:"Waypoint"},p=void 0,l={unversionedId:"waypoint",id:"waypoint",isDocsHomePage:!1,title:"Waypoint",description:"You can use our Radar Waypoint apps for iOS and Android to test Radar before integrating the SDK, or to test your implementation of Radar side-by-side with a complete implementation.",source:"@site/docs/waypoint.mdx",sourceDirName:".",slug:"/waypoint",permalink:"/documentation/waypoint",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/waypoint.mdx",tags:[],version:"current",frontMatter:{title:"Waypoint"},sidebar:"defaultSidebar",previous:{title:"Create a custom map style",permalink:"/documentation/tutorials/create-a-custom-map-style"},next:{title:"FAQs",permalink:"/documentation/faqs"}},c=[{value:"Instructions",id:"instructions",children:[]},{value:"Examples",id:"examples",children:[{value:"Testing On-Premise Mode",id:"testing-on-premise-mode",children:[]},{value:"Testing Trips",id:"testing-trips",children:[]},{value:"Testing Background Mode",id:"testing-background-mode",children:[]},{value:"Testing Beacons",id:"testing-beacons",children:[]}]},{value:"Support",id:"support",children:[]}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use our Radar Waypoint apps for iOS and Android to test Radar before integrating the ",(0,o.kt)("a",{parentName:"p",href:"/sdk"},"SDK"),", or to test your implementation of Radar side-by-side with a complete implementation."),(0,o.kt)("a",{href:"https://apps.apple.com/us/app/radar-waypoint/id6449200427",target:"_blank"},(0,o.kt)("img",{src:"https://s3.amazonaws.com/com.onradar.www/images/download_ios.svg",style:{display:"inline-block",height:"60px",marginRight:"30px",marginBottom:"20px",marginTop:"10px",width:"180px"}})),(0,o.kt)("a",{href:"https://play.google.com/store/apps/details?id=com.radarwaypoint",target:"_blank"},(0,o.kt)("img",{src:"https://s3.amazonaws.com/com.onradar.www/images/download_android.svg",style:{display:"inline-block",height:"60px",marginBottom:"20px",marginTop:"10px",width:"202.5px"}})),(0,o.kt)("h2",{id:"instructions"},"Instructions"),(0,o.kt)("p",null,"To get started, you'll need a Radar account. Don't have a Radar account yet? ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/signup"},"Sign up")," first."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the app.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the app and enter your email address associated with the Radar account.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the 6 digit code sent to your email into the app.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Grant notification permissions and location permissions by following the onboarding prompts.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After completing onboarding, you should see your location on the map in the Waypoint app along with your user on the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/geofencing/users"},"Users page")," in the dashboard. If you are in a geofence or at a place, you will see events in the app and see events on the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/geofencing/events"},"Events page")," in the dashboard.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To generate a new track call in the foreground, tap the refresh button!")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To track in the background, move more than 100 meters! ",(0,o.kt)("strong",{parentName:"p"},"Note that location updates may be delayed significantly by Android ",(0,o.kt)("a",{parentName:"strong",href:"https://developer.android.com/training/monitoring-device-state/doze-standby.html"},"Doze Mode and App Standby"),", iOS ",(0,o.kt)("a",{parentName:"strong",href:"https://support.apple.com/en-us/HT205234"},"Low Power Mode"),", or if the device has connectivity issues, low battery, or wi-fi disabled."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To try out different presets, open the ",(0,o.kt)("em",{parentName:"p"},"Settings")," screen. Then, select the ",(0,o.kt)("em",{parentName:"p"},"Tracking Options")," preset to use, one of ",(0,o.kt)("em",{parentName:"p"},"Efficient"),", ",(0,o.kt)("em",{parentName:"p"},"Responsive"),", or ",(0,o.kt)("em",{parentName:"p"},"Continuous"),". Learn about ",(0,o.kt)("a",{parentName:"p",href:"/sdk/tracking#ios-presets"},"iOS tracking presets")," and ",(0,o.kt)("a",{parentName:"p",href:"/sdk/tracking#android-presets"},"Android tracking presets"),". You can also set ",(0,o.kt)("em",{parentName:"p"},"Custom Tracking Options")," via ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/documentation/sdk/remote-configuration"},"Remote SDK Configurations"),". Manage the the notifications you want to receive, including ",(0,o.kt)("em",{parentName:"p"},"Events")," (events received from Radar), ",(0,o.kt)("em",{parentName:"p"},"Locations")," (location updates sent to Radar), and ",(0,o.kt)("em",{parentName:"p"},"Errors")," (network, location, and permissions errors)."))),(0,o.kt)("div",{style:{display:"flex",justifyContent:"space-between",padding:"0 55px"}},(0,o.kt)("img",{src:(0,r.Z)("/img/waypointAndroid.png")}),(0,o.kt)("img",{src:(0,r.Z)("/img/waypointIOS.png")})),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"testing-on-premise-mode"},"Testing On-Premise Mode"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'To get started, make sure you\'ve opted-in to foreground or "while in use" permissions and notifications are enabled. Click on the settings icon on the top right to ensure Waypoint is configured correctly (See image A below).')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/documentation/geofences#dashboard"},"geofences")," in Radar.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Open Waypoint and navigate to the "My Location" tab. You should see "Not in a geofence". Travel to a configured geofence (See image B below).')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'After entering the geofence, open Waypoint, navigate to the "My Location" tab. Waypoint should display "Welcome to ',"<","geofence_name",">",'". You should also receive a notification "Entered geofence ',"<","geofence_name",">",'" (See image C below).'))),(0,o.kt)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},(0,o.kt)("div",{style:{display:"flex",alignItems:"center",textAlign:"center"}},(0,o.kt)("strong",{style:{marginRight:"10px"}},"A"),(0,o.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/6Hu1XjBYyMtMLwUbGeA616/b5abfbdf492c44e24b4dff5842591530/waypointOnPremModeSettings.PNG?",width:"150px",style:{margin:"10px"}})),(0,o.kt)("div",{style:{display:"flex",alignItems:"center",textAlign:"center"}},(0,o.kt)("strong",{style:{marginRight:"10px"}},"B"),(0,o.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/20a2pfNHbTBZ2SDEyK8N0E/88b2fa071e535ea07ad1618ca1fdb937/waypointOnPremModeNotInGeofence.PNG?",width:"150px",style:{margin:"10px"}})),(0,o.kt)("div",{style:{display:"flex",alignItems:"center",textAlign:"center"}},(0,o.kt)("strong",{style:{marginRight:"10px"}},"C"),(0,o.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/2yqxlovc2vwaLX4rPodo4E/be3d52eec80e44b791e9d39009e025c0/waypointOnPremModeInGeofence.PNG?",width:"150px",style:{margin:"10px"}}))),(0,o.kt)("h3",{id:"testing-trips"},"Testing Trips"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'To get started, make sure you\'ve opted-in to foreground or "While in use" permissions and notifications are enabled. (See image A below)')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/documentation/geofences#dashboard"},"geofences")," in Radar.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Once you open Waypoint, you should see geofences nearby you. Click "Go" to start a trip to one of the configured geofences. Select your mode of travel from the options provided. Start navigating to your destination geofence. (See image B below)')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Events & notifications to expect as you travel to the destination geofence (See image C below): "))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"user.started_trip"),' -> "Started trip" notification from Waypoint'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"user.approaching_trip_destination"),' -> "Approaching destination" notification from Waypoint',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Note, ",(0,o.kt)("em",{parentName:"li"},"approaching threshold"),' can be configured on the Radar dashboard. Navigate to "Settings" on top right -> "Trips" on the left sidebar -> "Approaching threshold (minutes)"'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"user.arrived_at_trip_destination")," / ",(0,o.kt)("em",{parentName:"li"},"user.entered_geofence"),' -> "Arrived"')),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},'Once you\'ve arrived at the geofence, you can click either the "x" or button on the bottom of the screen. (See image D below) ')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"user.stopped_trip"),' -> "Stopped trip" notification from Waypoint')),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},'Analyze trip updates/events on Radar dashboard. Navigate to "Geofencing" -> "Trips" -> click on trip you\'d like to analyze -> "Debugger" on top right to view the trip data. (See image E below)')),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",marginTop:"20px"}},(0,o.kt)("div",{style:{display:"flex",alignItems:"center",marginRight:"20px"}},(0,o.kt)("strong",null,"A"),(0,o.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/6Hu1XjBYyMtMLwUbGeA616/b5abfbdf492c44e24b4dff5842591530/waypointOnPremModeSettings.PNG?",width:"150px",style:{marginLeft:"10px"}})),(0,o.kt)("div",{style:{display:"flex",alignItems:"center",marginRight:"20px"}},(0,o.kt)("strong",null,"B"),(0,o.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/74leyLZWYGPS8RpwhyjkwD/9289fe437dec107d0dfe013466e818ad/waypoint_travelMode.png?",width:"150px",style:{marginLeft:"10px"}}))),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",marginTop:"20px"}},(0,o.kt)("div",{style:{display:"flex",alignItems:"center",marginRight:"20px"}},(0,o.kt)("strong",null,"C"),(0,o.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/5WF793DRSPf9nf6SYsUB8X/be54af566a692337af4556bd74651522/waypoint_startedTrip.png?",width:"150px",style:{marginLeft:"10px",marginRight:"20px"}})),(0,o.kt)("div",{style:{display:"flex",alignItems:"center",marginRight:"20px"}},(0,o.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/7iwGVxv6DGDFk16K6gVcdM/e3cd97adde2c8df061818d0c5f28a14a/waypoint_approachingTrip.png?",width:"150px",style:{marginLeft:"10px",marginRight:"20px"}})),(0,o.kt)("div",{style:{display:"flex",alignItems:"center"}},(0,o.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/5fjEy1AERdhghjYFhC0tJa/9f48011f7b66f1a1ed39a9e5bcf2a4f1/waypoint_arrived.png?",width:"150px",style:{marginLeft:"10px"}})),(0,o.kt)("div",{style:{display:"flex",alignItems:"center",marginRight:"20px"}},(0,o.kt)("strong",null,"D"),(0,o.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/1RrLsY6EbIJsrfk6grfUjy/5cbe80ba319f9172b8a751c6405d2615/waypoint_stoppedTrip.png?h=250",width:"150px",style:{marginLeft:"10px"}}))),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px"}},(0,o.kt)("strong",null,"E"),(0,o.kt)("img",{src:(0,r.Z)("/img/dashboardTrip.png"),width:"650px",style:{marginLeft:"10px"}})),(0,o.kt)("h3",{id:"testing-background-mode"},"Testing Background Mode"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'To get started, make sure you\'ve opted-in to background or "Always allow" permissions and notifications are enabled. You\'ll have to navigate to your device settings to enable background tracking and toggle the "Background tracking" option in Waypoint. Click on the settings icon on the top right to ensure Waypoint is configured correctly. (See image A below)')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/documentation/geofences#dashboard"},"geofences")," in Radar.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Open Waypoint and navigate to "My Location" tab. You should see "Not in a geofence". Travel to a configured geofence. (See image B below)')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'After entering the geofence, you should receive an entry notification while Waypoint is closed and/or your device is shut off. Once you open Waypoint, navigate to "My Location" tab. As shown below, Waypoint should show "Welcome to <geofence_name>". (See image C below)'))),(0,o.kt)("div",{style:{display:"flex",justifyContent:"space-around",marginTop:"20px"}},(0,o.kt)("div",{style:{display:"flex",alignItems:"center",textAlign:"center"}},(0,o.kt)("strong",{style:{marginRight:"10px"}},"A"),(0,o.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/6TkKpQaYEWuo3jTKlgLdUs/cdf953f54570bbc0428cecd631451a99/waypoint_background_granted.png?",width:"150px",style:{margin:"10px"}})),(0,o.kt)("div",{style:{display:"flex",alignItems:"center",textAlign:"center"}},(0,o.kt)("strong",{style:{marginRight:"10px"}},"B"),(0,o.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/20a2pfNHbTBZ2SDEyK8N0E/88b2fa071e535ea07ad1618ca1fdb937/waypointOnPremModeNotInGeofence.PNG?",width:"150px",style:{margin:"10px"}})),(0,o.kt)("div",{style:{display:"flex",alignItems:"center",textAlign:"center"}},(0,o.kt)("strong",{style:{marginRight:"10px"}},"C"),(0,o.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/2yqxlovc2vwaLX4rPodo4E/be3d52eec80e44b791e9d39009e025c0/waypointOnPremModeInGeofence.PNG?",width:"150px",style:{margin:"10px"}}))),(0,o.kt)("h3",{id:"testing-beacons"},"Testing Beacons"),(0,o.kt)("p",null,"Note: You can test beacons in either foreground or background mode."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To get started, ensure the following settings are enabled (See image A below): ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Opt-in to foreground or background permissions."),(0,o.kt)("li",{parentName:"ul"},"Ensure notifications are enabled."),(0,o.kt)("li",{parentName:"ul"},'Once you click on the settings icon on the top right, you can toggle "Beacons" on. This should prompt you to allow Bluetooth permissions.\nAlternatively, use ',(0,o.kt)("a",{parentName:"li",href:"https://radar.com/documentation/sdk/remote-configuration"},"remote SDK configuration")," & set ",(0,o.kt)("em",{parentName:"li"},"beacons")," to ",(0,o.kt)("em",{parentName:"li"},"true"),'. Once done, you should see the "Beacons" toggle enabled within the Waypoint settings page.')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/documentation/beacons"},"beacons")," in Radar.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Open Waypoint and navigate to "My Location" tab. You should see "No Beacons Found". (See image B below)')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'After entering the beacon radius, open Waypoint, navigate to "My Location" tab. As shown below, Waypoint should show "<beacon_name>" under the "Beacons" section. You should also receive a notification "Entered beacon <beacon_name>". (See image C below)'))),(0,o.kt)("div",{style:{display:"flex",justifyContent:"space-around",marginTop:"20px"}},(0,o.kt)("div",{style:{display:"flex",alignItems:"center",textAlign:"center"}},(0,o.kt)("strong",{style:{marginRight:"10px"}},"A"),(0,o.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/3ILDmAqz9xzEiY3S03yiUJ/d17a40b438991ce02b5ebd0377b575ce/waypoint_beacon_permissions.png?",width:"150px",style:{margin:"10px"}})),(0,o.kt)("div",{style:{display:"flex",alignItems:"center",textAlign:"center"}},(0,o.kt)("strong",{style:{marginRight:"10px"}},"B"),(0,o.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/30vi3MDwNouhbBFCN772Y3/4c8b2e3b764bdb26aff9229130f31afa/waypoint_no_beacons.png?",width:"150px",style:{margin:"10px"}})),(0,o.kt)("div",{style:{display:"flex",alignItems:"center",textAlign:"center"}},(0,o.kt)("strong",{style:{marginRight:"10px"}},"C"),(0,o.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/19QVnwmqy6SECikWHy7hAi/51a47ad1d8d8412c1052a184cdb94f96/waypoint_in_beacon.png?",width:"150px",style:{margin:"10px"}}))),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("p",null,"Have questions or difficulties with Waypoint? Contact us at ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/support"},"radar.com/support"),"."))}m.isMDXComponent=!0}}]);