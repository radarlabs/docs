"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2316],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3463:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o={sidebar_position:13,title:"Displaying Radar Maps with React Native"},p=void 0,s={unversionedId:"tutorials/displaying-radar-maps-with-react-native",id:"tutorials/displaying-radar-maps-with-react-native",isDocsHomePage:!1,title:"Displaying Radar Maps with React Native",description:"To create a React Native component with a map:",source:"@site/docs/tutorials/displaying-radar-maps-with-react-native.mdx",sourceDirName:"tutorials",slug:"/tutorials/displaying-radar-maps-with-react-native",permalink:"/documentation/tutorials/displaying-radar-maps-with-react-native",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/tutorials/displaying-radar-maps-with-react-native.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,title:"Displaying Radar Maps with React Native"},sidebar:"defaultSidebar",previous:{title:"Displaying Radar Maps on Android",permalink:"/documentation/tutorials/displaying-radar-maps-on-android"},next:{title:"Displaying Radar Maps with Flutter",permalink:"/documentation/tutorials/displaying-radar-maps-with-flutter"}},l=[],c={toc:l};function d(e){var n=e.components,o=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To create a ",(0,i.kt)("a",{parentName:"p",href:"https://react.dev"},"React Native")," component with a map:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save react-native-radar @maplibre/maplibre-react-native\n")),(0,i.kt)("p",null,"The SDK has a dependency on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/maplibre/maplibre-react-native"},"maplibre-react-native"),"."),(0,i.kt)("p",null,"Next, complete any required ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/maplibre/maplibre-react-native/blob/main/docs/GettingStarted.md#review-platform-specific-info"},"platform-specific installation steps"),"."),(0,i.kt)("p",null,"Finally, initialize the Radar SDK and add a ",(0,i.kt)("inlineCode",{parentName:"p"},"<Map>")," component:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { View } from 'react-native';\nimport Radar, { Map } from 'react-native-radar';\nimport MapLibreGL from '@maplibre/maplibre-react-native';\n\n// NOTE: MapLibre requires setting their deprecated access token to null\nMapLibreGL.setAccessToken(null);\n\nRadar.initialize('prj_live_pk_...');\n\nexport const App = () => (\n  <View style={{ width: '100%', height: '95%' }}>\n    <Map />\n  </View>\n);\n")),(0,i.kt)("p",null,"Optionally, add assets for a marker. You can download assets ",(0,i.kt)("a",{target:"_blank",href:t(2426).Z},"here"),"."),(0,i.kt)("p",null,"To add a marker to the map and control the camera:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"  const [cameraConfig, setCameraConfig] = useState({\n    triggerKey: Date.now(),\n    centerCoordinate: [-73.9911, 40.7342],\n    animationMode: 'flyTo',\n    animationDuration: 600,\n    zoomLevel: 12,\n  });\n\n  const onRegionDidChange = (event) => {\n    // do something on region change\n  }\n\n  const onSelect = (address) => {\n    // do something with selected address\n  }\n\n  const pointsCollection = {\n    type: 'FeatureCollection',\n    features: [\n      {\n        type: 'Feature',\n        properties: {\n          _id: '123',\n        },\n        geometry: {\n          type: 'Point',\n          coordinates: [-73.9911, 40.7342]\n        }\n      }\n    ]\n  }; \n  \n  const onPress = (event) => {\n    // do something on press\n  }\n    \n  return (\n    <View style={{ width: '100%', marginTop: '10%', height: '90%' }}>\n      <Map mapOptions={{\n        onRegionDidChange,\n      }}>\n        <MapLibreGL.Camera\n          {...cameraConfig}\n        />\n        <MapLibreGL.Images\n          images={{\n            icon: require('./assets/marker.png'),\n          }}\n        />\n        <MapLibreGL.ShapeSource\n          id=\"points\"\n          shape={pointsCollection}\n          onPress={onPress}\n        >\n        <MapLibreGL.SymbolLayer\n            id=\"symbol\"\n            style={{\n              iconImage: 'icon',\n              iconSize: [\n                'interpolate',\n                ['linear'],\n                ['zoom'],\n                0, 0.2, // adjust the icon size for zoom level 0\n                12, 0.4, // adjust the icon size for zoom level 12\n                22, 0.8, // adjust the icon size for zoom level 22\n              ],\n              iconAllowOverlap: true,\n            }}\n          />\n        </MapLibreGL.ShapeSource>\n      </Map>\n    </View>\n  );\n")))}d.isMDXComponent=!0},2426:function(e,n,t){n.Z=t.p+"assets/files/radar-map-assets-10a2451b64cea4d72fffe99b24b208e8.zip"}}]);