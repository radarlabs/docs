"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6253],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,f=s["".concat(d,".").concat(m)]||s[m]||u[m]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},970:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),r="alert_19nB",i="alertWarning_1tiz",l="alertInfo_1EfW",o="alertSuccess_7EZp",d=function(e){var t=e.children,n=e.alertType;return"warning"===n?a.createElement("div",{className:"alert "+r+" "+i,role:"alert"},t):"info"===n?a.createElement("div",{className:"alert "+r+" "+l,role:"alert"},t):"success"===n?a.createElement("div",{className:"alert "+r+" "+o,role:"alert"},t):null}},1293:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=n(970),o={title:"Yext"},d=void 0,p={unversionedId:"integrations/yext",id:"integrations/yext",isDocsHomePage:!1,title:"Yext",description:"The Yext integration is available on the { }",source:"@site/docs/integrations/yext.mdx",sourceDirName:"integrations",slug:"/integrations/yext",permalink:"/documentation/integrations/yext",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/integrations/yext.mdx",tags:[],version:"current",frontMatter:{title:"Yext"},sidebar:"defaultSidebar",previous:{title:"Segment",permalink:"/documentation/integrations/segment"},next:{title:"Toolkit",permalink:"/documentation/toolkit"}},c=[{value:"Configuration",id:"configuration",children:[{value:"Default Settings",id:"default-settings",children:[]},{value:"Additional Settings",id:"additional-settings",children:[]},{value:"Syncing Data",id:"syncing-data",children:[]}]}],u={toc:c};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,{alertType:"info",mdxType:"Alert"},"The Yext integration is available on the "," ",(0,i.kt)("a",{href:"https://radar.com/pricing",target:"_blank"},"Enterprise plan"),"."),(0,i.kt)("p",null,"Radar can sync locations from ",(0,i.kt)("a",{parentName:"p",href:"http://www.yext.com"},"Yext")," as geofences in Radar."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"On the Radar ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/integrations"},"Integrations page")," under ",(0,i.kt)("em",{parentName:"p"},"Yext"),", set ",(0,i.kt)("em",{parentName:"p"},"Enabled")," to ",(0,i.kt)("em",{parentName:"p"},"Yes")," and optionally configure any additional settings."),(0,i.kt)("h3",{id:"default-settings"},"Default Settings"),(0,i.kt)("p",null,"Radar will use the following default mappings when syncing Yext locations to Radar geofences:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Yext Location Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Radar Geofence Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"locationName")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"description")),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"externalId")),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"closed.isClosed")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"enabled")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean")))),(0,i.kt)("p",null,"Radar will use the following default values when syncing Yext locations to Radar geofences:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Radar Geofence Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"circle")),(0,i.kt)("td",{parentName:"tr",align:null},"string (",(0,i.kt)("inlineCode",{parentName:"td"},"circle")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"isochrone"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tag")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"location")),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"radius")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"100")," (for ",(0,i.kt)("inlineCode",{parentName:"td"},"circle"),") ",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"15")," (for ",(0,i.kt)("inlineCode",{parentName:"td"},"isochrone"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"number (meters for ",(0,i.kt)("inlineCode",{parentName:"td"},"circle"),", minutes for ",(0,i.kt)("inlineCode",{parentName:"td"},"isochrone"),")")))),(0,i.kt)("h3",{id:"additional-settings"},"Additional Settings"),(0,i.kt)("p",null,"You can choose to override certain defaults with additional configuration settings for the ",(0,i.kt)("a",{parentName:"p",href:"/geofences"},"geofences")," synced from Yext."),(0,i.kt)("p",null,"The available overrides include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default geofence ",(0,i.kt)("inlineCode",{parentName:"li"},"type")),(0,i.kt)("li",{parentName:"ul"},"Default geofence ",(0,i.kt)("inlineCode",{parentName:"li"},"radius")),(0,i.kt)("li",{parentName:"ul"},"An override for the mapping of the ",(0,i.kt)("inlineCode",{parentName:"li"},"description")," field to a different Yext field than ",(0,i.kt)("inlineCode",{parentName:"li"},"locationName")," (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"address"),")"),(0,i.kt)("li",{parentName:"ul"},"An override for the default ",(0,i.kt)("inlineCode",{parentName:"li"},"tag")," value that will be mapped to a Yext field (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"schemaTypes.0"),")")),(0,i.kt)("p",null,"Additionally, you can map up to 16 Yext fields to Radar geofence metadata. Use ",(0,i.kt)("em",{parentName:"p"},"dot notation")," to access nested Yext fields.  For example, if you have a Yext location with the following property: ",(0,i.kt)("inlineCode",{parentName:"p"},'"schemaTypes": ["Restaurant"]'),", you can store the value ",(0,i.kt)("inlineCode",{parentName:"p"},'"Restaurant"')," by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"schemaTypes.0")," as a ",(0,i.kt)("em",{parentName:"p"},"Yext Key"),".  If you include a Yext field in the metadata mapping and that field is not found, or the value in Yext is undefined or ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),", the value will not be copied over to the geofence."),(0,i.kt)("h3",{id:"syncing-data"},"Syncing Data"),(0,i.kt)("p",null,"Once configured, click ",(0,i.kt)("em",{parentName:"p"},"Connect & Sync")," and you will be redirected to Yext, where you can authorize Radar. Then, you will be redirected back to the Radar ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/integrations"},"Integrations page")," with an indication of whether the authorization succeeded or failed.  If the authorization succeeded, your Yext locations will immediately begin syncing to Radar ",(0,i.kt)("a",{parentName:"p",href:"/geofences"},"geofences"),"."),(0,i.kt)("p",null,"Radar will automatically keep geofences in sync when you create or update locations in Yext.  Radar will sync geofences both to the ",(0,i.kt)("em",{parentName:"p"},"Test")," and ",(0,i.kt)("em",{parentName:"p"},"Live")," environments.  ",(0,i.kt)("strong",{parentName:"p"},"If you update the geometry of a geofence in Radar that has been synced with Yext, your changes will not be overwritten in Radar with subsequent updates from Yext.")),(0,i.kt)("p",null,"Update any of the defaults after the initial sync by changing the integration settings and clicking ",(0,i.kt)("em",{parentName:"p"},"Update & Sync"),".  Once clicked, a full sync of every Yext location will occur.  ",(0,i.kt)("strong",{parentName:"p"},"A change in these default overrides will only be reflected for newly created locations in Yext.  Previously synced locations turned geofences will not be updated to the new defaults.")))}s.isMDXComponent=!0}}]);