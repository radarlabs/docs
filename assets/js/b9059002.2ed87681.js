"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6396],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},970:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),r="alert_19nB",i="alertWarning_1tiz",o="alertInfo_1EfW",l="alertTip_1W6d",s="alertSuccess_7EZp",d=function(e){var t=e.children,n=e.alertType;return"warning"===n?a.createElement("div",{className:"alert "+r+" "+i,role:"alert"},t):"info"===n?a.createElement("div",{className:"alert "+r+" "+o,role:"alert"},t):"tip"===n?a.createElement("div",{className:"alert "+r+" "+l,role:"alert"},t):"success"===n?a.createElement("div",{className:"alert "+r+" "+s,role:"alert"},t):null}},3284:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(970),l={sidebar_label:"Web",title:"Web SDK",description:"Documentation for Web SDK"},s=void 0,d={unversionedId:"sdk/web",id:"sdk/web",isDocsHomePage:!1,title:"Web SDK",description:"Documentation for Web SDK",source:"@site/docs/sdk/web.mdx",sourceDirName:"sdk",slug:"/sdk/web",permalink:"/documentation/sdk/web",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/sdk/web.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Web",title:"Web SDK",description:"Documentation for Web SDK"},sidebar:"defaultSidebar",previous:{title:"React Native",permalink:"/documentation/sdk/react-native"},next:{title:"Cordova",permalink:"/documentation/sdk/cordova"}},c=[{value:"Install",id:"install",children:[]},{value:"Setup",id:"setup",children:[{value:"Initialize",id:"initialize",children:[]}]},{value:"Geofencing",id:"geofencing",children:[{value:"Identify user",id:"identify-user",children:[]},{value:"Foreground tracking",id:"foreground-tracking",children:[]},{value:"Manual tracking",id:"manual-tracking",children:[]},{value:"Get location",id:"get-location",children:[]},{value:"Context",id:"context",children:[]}]},{value:"Maps",id:"maps",children:[{value:"Geocoding",id:"geocoding",children:[]},{value:"Search",id:"search",children:[]},{value:"Distance",id:"distance",children:[]},{value:"Matrix",id:"matrix",children:[]}]},{value:"Maps and UI kits",id:"maps-and-ui-kits",children:[]},{value:"Support",id:"support",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is the documentation for the Radar Web SDK."),(0,i.kt)("p",null,"The source can be found on GitHub ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/radarlabs/radar-sdk-js"},"here"),". Or, see the ",(0,i.kt)("inlineCode",{parentName:"p"},"radar-sdk-js")," package on npm ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/radar-sdk-js"},"here"),"."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"In an HTML page, add the SDK script and stylesheet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<link href="https://js.radar.com/$RADAR_WEB_SDK_VERSION$/radar.css" rel="stylesheet">\n<script src="https://js.radar.com/$RADAR_WEB_SDK_VERSION$/radar.min.js"><\/script>\n')),(0,i.kt)("p",null,"In a web app, install the package from npm:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save radar-sdk-js maplibre-gl\n")),(0,i.kt)("p",null,"The SDK has a dependency on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/maplibre/maplibre-gl-js"},"maplibre-gl"),"."),(0,i.kt)("p",null,"Then, import the library and stylesheet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import Radar from 'radar-sdk-js';\nimport 'radar-sdk-js/dist/radar.css';\n")),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("h3",{id:"initialize"},"Initialize"),(0,i.kt)("p",null,"Initialize the library with your publishable API key, found on the ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/settings"},"Settings page"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.initialize('prj_live_pk_...');\n")),(0,i.kt)(o.Z,{alertType:"info",mdxType:"Alert"},"You must initialize the library before calling any other functions."),(0,i.kt)("p",null,"Optionally, you can specify configuration options:"),(0,i.kt)("p",null,"The initialize call takes an optional second argument that is an object with additional configuration options."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.initialize('prj_live_pk_...', {\n  /* custom options here */\n});\n")),(0,i.kt)("p",null,"Available options include:"),(0,i.kt)("div",{className:"full-width-table"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Possible values"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"logLevel")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"error")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"none"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"info"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"warn"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"error")),(0,i.kt)("td",{parentName:"tr",align:null},"Determines the log level for console logging. Defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"error")," when using a test publishable key.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cacheLocationMinutes")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"Determines whether to reuse previous location updates. A cache ttl in minutes. If ",(0,i.kt)("inlineCode",{parentName:"td"},"null")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"0"),", will always request a new location.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"locationMaximumAge")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"Determines whether to use old browser locations. A maximum age in milliseconds. If ",(0,i.kt)("inlineCode",{parentName:"td"},"null")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"0"),", will always request a new location. See ",(0,i.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition"},"getCurrentPosition options()"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"locationTimeout")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"30000")),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"The number of milliseconds to wait for a location update before an error is thrown. Defaults to 30 seconds.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"desiredAccuracy")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"high")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"high"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"medium"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"low")),(0,i.kt)("td",{parentName:"tr",align:null},"Determines the desired accuracy of location updates. Note that higher accuracy can result in slower response times."))))),(0,i.kt)("h2",{id:"geofencing"},"Geofencing"),(0,i.kt)("h3",{id:"identify-user"},"Identify user"),(0,i.kt)("p",null,"To identify the user when logged in, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.setUserId(userId);\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"userId")," is a stable unique ID for the user."),(0,i.kt)("p",null,"To set an optional dictionary of custom metadata for the user, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.setMetadata(metadata);\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata")," is a JSON object with up to 16 keys and values of type string, boolean, or number."),(0,i.kt)("p",null,"Finally, to set an optional description for the user, displayed in the dashboard, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.setDescription(description);\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," is a string."),(0,i.kt)("p",null,"You only need to call these functions once, as these settings will be persisted across browser sessions."),(0,i.kt)("p",null,"Learn more about when Radar creates new user records ",(0,i.kt)("a",{parentName:"p",href:"/documentation/faqs#what-is-a-unique-user-when-does-radar-create-a-new-user-record"},"here"),"."),(0,i.kt)("h3",{id:"foreground-tracking"},"Foreground tracking"),(0,i.kt)("p",null,"Once you have initialized the SDK and the user has granted permissions, you can track the user's location."),(0,i.kt)("p",null,"The SDK uses the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation"},"HTML5 geolocation API")," to determine the user's location."),(0,i.kt)("p",null,"To track the user's location, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.trackOnce()\n  .then((result) => {\n    const { location, user, events } = result;\n    // do something with location, user, or events\n  })\n  .catch((err) => {\n    // handle error\n  });\n")),(0,i.kt)("p",null,"If the request fails, ",(0,i.kt)("inlineCode",{parentName:"p"},"err")," will be one of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"RadarPublishableKeyError")),": SDK not initialized"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"RadarLocationPermissionsError")),": location permissions not granted"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"RadarLocationError")),": location services error or timeout (10 seconds)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"RadarTimeoutError")),": network timeout (10 seconds)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"RadarBadRequestError")),": bad request (missing or invalid params)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"RadarUnknownError")),": unauthorized (invalid API key)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"RadarPaymentRequiredError")),": payment required (organization disabled or usage exceeded)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"RadarForbiddenError")),": forbidden (insufficient permissions or no beta access)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"RadarNotFoundError")),": not found"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"RadarRateLimitError")),": too many requests (",(0,i.kt)("a",{parentName:"li",href:"/api#track"},"rate limit")," exceeded)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"RadarServerError")),": internal server error"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"RadarUnknownError")),": unknown error")),(0,i.kt)("p",null,"If the error is the result of a failed API call, ",(0,i.kt)("inlineCode",{parentName:"p"},"err")," will include an HTTP response code and the API response body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"err.code; // HTTP response code\nerr.response; // API response body\n")),(0,i.kt)("h3",{id:"manual-tracking"},"Manual tracking"),(0,i.kt)("p",null,"Alternatively, you can manually update the user's location with any location by calling:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.trackOnce({\n  latitude: 39.2904,\n  longitude: -76.6122,\n  accuracy: 65\n})\n.then((result) => {\n  const { location, user, events } = result;\n  // do something with location, user, or events\n})\n.catch((err) => {\n  // handle error\n});\n")),(0,i.kt)("h3",{id:"get-location"},"Get location"),(0,i.kt)("p",null,"You can also get a single location update without sending it to the server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.getLocation()\n  .then((result) => {\n    const { location } = result;\n    // do something with location\n  })\n  .catch((err) => {\n    // handle error\n  });\n")),(0,i.kt)("h3",{id:"context"},"Context"),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#context"},"context API"),", get context for a location without sending device or user identifiers to the server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.getContext()\n  .then((result) => {\n    const { location, geofences, place, country, state, dma, postalCode } = result;\n    // do something with results\n  })\n  .catch((err) => {\n    // handle error\n  });\n")),(0,i.kt)("h2",{id:"maps"},"Maps"),(0,i.kt)("h3",{id:"geocoding"},"Geocoding"),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#forward-geocode"},"forward geocoding API"),", geocode an address, converting address to coordinates:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.forwardGeocode({ query: '841 broadway, new york, ny' })\n  .then((result) => {\n    const { addresses } = result;\n    // do something with addresses\n  })\n  .catch((err) => {\n    // handle error\n  });\n")),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#reverse-geocode"},"reverse geocoding API"),", reverse geocode a location, converting coordinates to address:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.reverseGeocode({ latitude: 40.783826, longitude: -73.975363 })\n  .then((result) => {\n    const { addresses } = result;\n    // do something with addresses\n  })\n  .catch((err) => {\n    // handle error\n  });\n")),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#ip-geocode"},"IP geocoding API"),", geocode the device's current IP address, converting IP address to city, state, and country:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.ipGeocode()\n  .then((result) => {\n    const { ip, address, proxy } = result;\n    // do something with results\n  })\n  .catch((err) => {\n    // handle error\n  });\n")),(0,i.kt)("h3",{id:"search"},"Search"),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#autocomplete"},"autocomplete API"),", autocomplete partial addresses and place names, sorted by relevance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.autocomplete({\n  query: '841 bro',\n  near: {\n    latitude: 40.783826,\n    longitude: -73.975363\n  },\n  limit: 10\n})\n.then((result) => {\n  const { addresses } = result;\n  // do something with addresses\n})\n.catch((err) => {\n  // handle error\n});\n")),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#search-geofences"},"geofence search API"),", search for geofences near a location, sorted by distance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.searchGeofences({\n  radius: 1000,\n  tags: ['venue'],\n  limit: 10\n})\n.then((result) => {\n  const { geofences } = result;\n  // do something with geofences\n})\n.catch((err) => {\n  // handle error\n});\n")),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#search-places"},"places search API"),", search for places near a location, sorted by distance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.searchPlaces({\n  near: {\n    latitude: 40.783826,\n    longitude: -73.975363\n  },\n  radius: 1000,\n  chains: ['starbucks'],\n  limit: 10\n})\n.then((result) => {\n  const { places } = result;\n  // do something with places\n})\n.catch((err) => {\n  // handle error\n});\n")),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#validate-an-address"},"address validation API"),", validate a structured address in the US or Canada:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.validateAddress({\n  addressLabel: '841 BROADWAY',\n  city: 'NEW YORK',\n  stateCode: 'NY',\n  postalCode: '10003',\n  countryCode: 'US',\n})\n.then((response) => {\n  const { address, result } = response;\n  // do something with validated address result\n})\n.catch((err) => {\n  // handle error\n});\n")),(0,i.kt)("h3",{id:"distance"},"Distance"),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#distance"},"distance API"),", calculate the travel distance and duration between two locations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.distance({\n  origin: {\n    latitude: 40.78382,\n    longitude: -73.97536\n  },\n  destination: {\n    latitude: 40.70390,\n    longitude: -73.98670\n  },\n  modes: [\n    'foot',\n    'car'\n  ],\n  units: 'imperial'\n})\n.then((result) => {\n  const { routes } = result;\n  const { geodesic, foot, bike, car } = routes;\n  // do something with distance result\n})\n.catch((err) => {\n  // handle error\n});\n")),(0,i.kt)("h3",{id:"matrix"},"Matrix"),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#matrix"},"matrix API"),", calculate the travel distances and durations between multiple origins and destinations for up to 25 routes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.matrix({\n  origins: [{\n    latitude: 40.70390,\n    longitude: -73.98690\n  }],\n  destinations: [{\n    latitude: 40.70390,\n    longitude: -73.98690\n  },\n  {\n    latitude: 40.73237,\n    longitude: -73.94884\n  }],\n  modes: 'car',\n  units: 'imperial'\n})\n.then((result) => {\n  const { origins, destinations, matrix } = result;\n  matrix.forEach((matrixResult) => {\n    const { distance, duration, originIndex, destinationIndex } = matrixResult;\n    // do something with matrix result\n  });\n})\n.catch((err) => {\n  // handle error\n});\n")),(0,i.kt)("h2",{id:"maps-and-ui-kits"},"Maps and UI kits"),(0,i.kt)("p",null,"The React Native SDK also has UI components for maps and address autocomplete. Learn more in the ",(0,i.kt)("a",{parentName:"p",href:"/documentation/maps/overview"},"Maps Platform documentation"),"."),(0,i.kt)("h2",{id:"support"},"Support"),(0,i.kt)("p",null,"Have questions? We're here to help! Email us at ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@radar.com"},"support@radar.com"),"."))}u.isMDXComponent=!0}}]);