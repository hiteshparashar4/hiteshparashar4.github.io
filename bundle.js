!function(e){function t(t){for(var n,o,c=t[0],l=t[1],s=t[2],d=0,u=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(p&&p(t);u.length;)u.shift()();return i.push.apply(i,s||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,c=1;c<a.length;c++){var l=a[c];0!==r[l]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={0:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var p=l;i.push([257,1]),a()}({256:function(e,t,a){},257:function(e,t,a){"use strict";a.r(t);var n=a(58),r=a.n(n),i=a(0),o=a.n(i),c=a(9),l=a.n(c),s=a(307),p=a(308),d=a(302),u=a(300),m=a(8),g=a.n(m),h=a(297),f=a.p+"images/2761940e78846f90b2c6170bd1cb73dd.jpg",b=Object(h.a)((function(e){return{root:{backgroundColor:"#1f232a",padding:"15px"},gridItem:g()({transition:"transform .5s"},e.breakpoints.up("md"),{"&:hover":{transform:"scale3d(1.05, 1.05, 1)"}}),paper:{textAlign:"left",color:e.palette.text.secondary,"&:hover":{}},imgContainer:{position:"relative",backgroundImage:"url(".concat(f,")"),backgroundSize:"cover",minHeight:"150px"},imageDescription:{position:"absolute",minHeight:"25%",width:"100%",bottom:0,backgroundColor:"#000",opacity:"0.7",padding:"5px",color:"#fafafa",textAlign:"left",display:"flex",flexDirection:"column",justifyContent:"space-around","& .MuiPaper-root":{backgroundColor:"#333333"},"& span":{display:"block"}},name:{fontSize:"16px"},id:{fontWeight:200,fontSize:"10px"},charTitle:{},charSubTitle:{},charDescription:{padding:"15px",backgroundColor:"#333333",color:"#a2a0a0",fontWeight:"bold"},charDetail:g()({display:"flex",justifyContent:"space-between",padding:"10px 0 3px 0",fontSize:"0.7rem",borderBottom:"0.5px solid #564f4f"},e.breakpoints.down("xs"),{fontSize:"0.55rem"}),textAlignRight:{textAlign:"right",color:"#c5914c"}}}));function x(e){var t=b(),a=e.characters;return o.a.createElement("div",{className:t.root},o.a.createElement(u.a,{container:!0,spacing:2},a.map((function(e){var a=e.id,n=e.created,r=e.image,i=e.name,c=e.status,l=e.species,s=e.gender,p=e.origin,m=e.visible,g=e.location;if(!m)return null;var h,f,b,x,v,y=(h=new Date(n),f=new Date,b=f.getFullYear()-h.getFullYear(),x=f.getMonth()-h.getMonth(),v=f.getDate()-h.getDate(),b>0?"created ".concat(b," years ago"):x>0?"created ".concat(x," months ago"):"created ".concat(v," days ago"));return o.a.createElement(u.a,{item:!0,xs:6,sm:4,md:3,key:a,className:t.gridItem},o.a.createElement(d.a,{elevation:3,className:t.paper},o.a.createElement("div",{className:t.imgContainer},o.a.createElement("img",{src:r,width:"100%",height:"auto"}),o.a.createElement("div",{className:t.imageDescription},o.a.createElement("span",{className:t.name},i),o.a.createElement("span",{className:t.id},"id: ".concat(a," - ").concat(y)))),o.a.createElement("div",{className:t.charDescription},o.a.createElement("div",{className:t.charDetail},o.a.createElement("span",null,"STATUS"),o.a.createElement("span",{className:t.textAlignRight},c)),o.a.createElement("div",{className:t.charDetail},o.a.createElement("span",null,"SPECIES"),o.a.createElement("span",{className:t.textAlignRight},l)),o.a.createElement("div",{className:t.charDetail},o.a.createElement("span",null,"GENDER"),o.a.createElement("span",{className:t.textAlignRight},s)),o.a.createElement("div",{className:t.charDetail},o.a.createElement("span",null,"ORIGIN"),o.a.createElement("span",{className:t.textAlignRight},p.name)),o.a.createElement("div",{className:t.charDetail,style:{border:"none"}},o.a.createElement("span",null,"LAST LOCATION"),o.a.createElement("span",{className:t.textAlignRight},g.name)))))}))))}var v=a(310),y=a(313),E=a(306),C=a(314),O=a(311),w=Object(h.a)((function(e){return{root:g()({maxWidth:"230px"},e.breakpoints.up("md"),{marginRight:"12px"}),filterSection:{minHeight:"50px",marginBottom:"16px",padding:"16px","& .MuiTypography-body1":{fontSize:"14px",lineHeight:"1.2"},"& .MuiCheckbox-colorPrimary.Mui-checked":{color:"#1f232a"}},filterTitle:{fontWeight:"bold",fontSize:"1.2rem",display:"block",height:"42px",textTransform:"capitalize"}}}));function j(e){var t=w(),a=e.isLoading,n=e.filters,r=e.selectedFilters,i=e.handleFilterChange;return o.a.createElement("div",{className:t.root},n.map((function(e){var n=e.name,c=e.filterItems;return o.a.createElement(d.a,{className:t.filterSection,key:n},o.a.createElement("span",{className:t.filterTitle},n),c.map((function(e){var t,c=r.includes("".concat(n,"__").concat(e));return!a&&o.a.createElement("div",{key:e,title:e},o.a.createElement(C.a,{control:o.a.createElement(O.a,{checked:c,name:e,color:"primary",onChange:function(t){i(n,e,t.target.checked)}}),label:(t=e,t.length>20?"".concat(t.substring(0,18),".."):t)}))})))})))}var S=a(315),N=Object(h.a)((function(e){var t;return{root:(t={fontWeight:"bold",fontSize:"22px",marginBottom:"16px"},g()(t,e.breakpoints.up("lg"),{marginBottom:0}),g()(t,"& .MuiFormControl-root",{width:"200px","& .Mui-focused":{color:"#1f232a"}}),g()(t,"& .MuiInput-underline:after",{borderBottom:"2px solid #1f232a"}),t)}}));function k(e){var t=N(),a=e.searchText,n=e.handleSearchChange;return o.a.createElement("div",{className:t.root},o.a.createElement(S.a,{id:"search-text",label:"Search By Name",value:a,onChange:n}))}var F=a(316),P=a(317),D=a(305),I=a(309),T=Object(h.a)((function(){return{root:{fontWeight:"bold",fontSize:"22px","& .MuiFormControl-root":{width:"200px","& .Mui-focused":{color:"#1f232a"}},"& .MuiInput-underline:after":{borderBottom:"2px solid #1f232a"}}}}));function A(e){var t=T(),a=e.sortOrder,n=e.onSortChange;return o.a.createElement("div",{className:t.root},o.a.createElement(D.a,{className:t.formControl},o.a.createElement(F.a,{id:"demo-simple-select-label"},"Sort by ID"),o.a.createElement(I.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:a||"asc",onChange:n},o.a.createElement(P.a,{value:"asc"},"Ascending"),o.a.createElement(P.a,{value:"desc"},"Decending"))))}var z=Object(h.a)((function(e){return{root:{},loadingSign:{textAlign:"center",width:"100%",marginTop:"50px","& .MuiCircularProgress-colorPrimary":{color:"#1f232a"}},bodyContainer:g()({display:"flex",justifyContent:"space-between",marginTop:"80px"},e.breakpoints.up("md"),{padding:"0 12px"}),searchSortFilterContainer:g()({padding:"0 0 20px 0",display:"flex",justifyContent:"space-around",flexWrap:"wrap"},e.breakpoints.up("md"),{justifyContent:"space-between",flexWrap:"unset"}),mainContainer:g()({minHeight:"700px",width:"100%"},e.breakpoints.up("lg"),{maxWidth:"1000px"}),header:{height:"50px",margin:"24px auto"},filtersContainer:{width:"200px"},paginationContainer:{padding:"20px 0",display:"flex",justifyContent:"center","& .MuiPaginationItem-textPrimary.Mui-selected":{backgroundColor:"#1f232a"}},footer:{height:"200px",margin:"24px auto"}}})),M=Object(h.a)((function(){return{root:{textAlign:"center",fontWeight:"bold",fontSize:"22px"}}}));function _(e){var t=M(),a=e.message||"No Data Available";return o.a.createElement("div",{className:t.root},a)}var L=Object(h.a)({root:{position:"fixed",zIndex:10,top:0,left:0,height:"100%",width:0,transition:"0.2s",background:"#fafafa"},header:{display:"none",marginBottom:"1px"},showHeader:{display:"block"},closeIcon:{position:"relative",top:0,left:"12px",fontSize:"43px",textDecoration:"none",color:"#1f232a",textAlign:"right",background:"transparent",border:"none",outline:"none"},flyItOut:{width:"260px"},childrenContainer:{display:"none",overflow:"hidden"},showChildrenContainer:{padding:"12px",overflowY:"scroll",overflowX:"hidden",display:"block",height:function(e){return e}}}),W=a(3),B=function(e){var t=e.children,a=e.showFlyout,n=e.toggleFlyout,r=Object(i.useRef)(null),c=300;null!==r&&r.current&&(c=r.current.clientHeight-52);var l=L(c);return o.a.createElement("div",{ref:r,className:Object(W.a)(l.root,g()({},l.flyItOut,a))},o.a.createElement("div",{className:Object(W.a)(l.header,g()({},l.showHeader,a))},o.a.createElement("button",{type:"button",className:l.closeIcon,onClick:n},"×")),o.a.createElement("div",{className:Object(W.a)(l.childrenContainer,g()({},l.showChildrenContainer,a))},t))},R=a(116),H=a.n(R),G=a(117),Y=a.n(G),J=a(46),q=a.n(J),U=a(118),V=a.n(U),X="https://rickandmortyapi.com/api/character/";function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(Object(a),!0).forEach((function(t){g()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Z=["species","gender","origin"],$=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="".concat(X,"?page=").concat(t);V.a.get(a).then((function(a){var n=a.data.results.map((function(e){return Q(Q({},e),{},{visible:!0})})),r=[],i=[];Z.forEach((function(e){var t={name:e,filterItems:[]};n.map((function(a){var n="origin"===e?a[e]&&a[e].name:a[e]||"";t.filterItems.includes(n)||(t.filterItems.push(n),i.push("".concat(e,"__").concat(n)))})),r.push(t)})),e({info:a.data.info,characters:n,searchedChars:q()(n),filters:r,selectedFilters:i,isLoading:!1,searchText:"",page:t})})).catch((function(){e({error:!0,isLoading:!1,info:{},characters:[],filters:[],selectedFilters:[],searchText:""})}))};function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function te(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(a),!0).forEach((function(t){g()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ae,ne=(ae=function(e){var t=z(),a=e.isLoading,n=e.page,r=e.info,i=e.filters,c=e.selectedFilters,l=e.searchText,s=e.sortOrder,p=e.toggleFlyout,d=e.showFlyout,u=r.pages,m=e.handleFilterChange,g=e.onPageChange,h=e.handleSearchChange,f=e.onSortChange,b=!0;return o.a.createElement(o.a.Fragment,null,o.a.createElement(B,{showFlyout:d,toggleFlyout:p},o.a.createElement(j,{isLoading:a,filters:i,selectedFilters:c,handleFilterChange:m})),o.a.createElement("div",{className:t.bodyContainer},o.a.createElement(y.a,{smDown:!0},o.a.createElement(j,{isLoading:a,filters:i,selectedFilters:c,handleFilterChange:m})),o.a.createElement("div",{className:t.mainContainer},o.a.createElement("div",{className:t.paginationContainer},o.a.createElement(v.a,{page:n,count:u,color:"primary",onChange:g})),o.a.createElement("div",{className:t.searchSortFilterContainer},o.a.createElement(k,{handleSearchChange:h,searchText:l}),o.a.createElement(A,{onSortChange:f,sortOrder:s})),function(){var a=e.isLoading,n=e.characters,r=e.page,i=e.searchedChars;return(0===n.filter((function(e){return!0===e.visible})).length||l.length>0&&0===i.length)&&(b=!1),a?o.a.createElement("div",{className:t.loadingSign},o.a.createElement(E.a,null)):b?o.a.createElement(x,{page:r,characters:l.length>0?i:n,selectedFilters:c}):o.a.createElement(_,null)}())))},function(e){var t=Object(i.useState)({isLoading:!0,error:!1,info:{},page:1,characters:[],searchedChars:[],filters:[],selectedFilters:[],searchText:"",sortOrder:"asc"}),a=r()(t,2),n=a[0],c=a[1];return Object(i.useEffect)((function(){$(c,1)}),[]),Object(i.useEffect)((function(){$(c,n.page)}),[n.page]),o.a.createElement(ae,H()({},e,n,{onPageChange:function(e,t){t!==n.page&&c(te(te({},n),{},{isLoading:!0,page:t}))},handleFilterChange:function(e,t,a){var r=function(e,t,a,n,r){var i=[],o=e.map((function(e){if(("origin"===t?e[t].name:e[t])===a&&(e.visible=n),!0===e.visible){var r="species__".concat(e.species),o="gender__".concat(e.gender),c="origin__".concat(e.origin.name);i.includes(r)||i.push(r),i.includes(o)||i.push(o),i.includes(c)||i.push(c)}return e})),c=o.filter((function(e){return!(!0!==e.visible||!e.name.toLowerCase().includes(r))}));return{characters:o,searchedChars:c,selectedFilters:i}}(n.characters,e,t,a,n.searchText);c(te(te({},n),{},{selectedFilters:r.selectedFilters,characters:r.characters,searchedChars:r.searchedChars}))},handleSearchChange:function(e){var t=q()(n.characters),a=e.target.value.trim().toLowerCase(),r=function(e,t){return{searchedChars:e.filter((function(e){return!(!0!==e.visible||!e.name.toLowerCase().includes(t))}))}}(t,a);c(te(te({},n),{},{searchedChars:r.searchedChars,searchText:a}))},onSortChange:function(e){var t=e.target.value,a=q()(n.characters),r=Y()(a,["id"],[t]);c(te(te({},n),{},{characters:r,sortOrder:t}))}}))}),re=Object(h.a)((function(e){return{root:{},divider:{width:"100%",height:"100px",margin:"auto",opacity:"0.2"},container:{padding:"50px 12px 12px 12px",backgroundColor:"#fafafa",boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"},itemContainer:{display:"flex",flexWrap:"wrap",justifyContent:"space-around"},footerItem:g()({width:"500px",boxSizing:"border-box",marginBottom:"20px",padding:"12px",textAlign:"center","& h2":{padding:"10px 0",fontSize:"0.85rem"},"& p":{letterSpacing:.75,textAlign:"justify",lineHeight:"1.5",fontSize:"0.7rem"},"& img":{width:"25px",height:"auto",paddingRight:"10px"},"& div":{display:"flex",alignItems:"center",padding:"10px 0",fontSize:"0.75rem"},"& a":{textDecoration:"none",color:"rgba(0, 0, 0, 0.87)","&:hover":{color:"purple"}},"& span":{fontWeight:"bold"}},e.breakpoints.up("lg"),{textAlign:"unset"}),note:{textAlign:"center",fontSize:"8px"}}})),ie=a.p+"images/7615be16eed41f806def1ba19d38b46d.png",oe=a.p+"images/ee8a8b2ebe14177615f90e1f28ae954b.png",ce=a.p+"images/963afb862c5a41c827c0eeaa080a3b53.png";var le=function(e){var t=re();return o.a.createElement("div",{className:t.root},o.a.createElement("div",{className:t.divider}),o.a.createElement("div",{className:t.container},o.a.createElement("div",{className:t.itemContainer},o.a.createElement("div",{className:t.footerItem},o.a.createElement("h2",null,"About the App"),o.a.createElement("p",null,"This app was created by Hitesh Parashar to demonstrate the web development skills and to qualify for a self paced training program organized by Publicis Sapient learning team. The app was created from scratch to include only the specific features pertaining to the need of the project. The souce code and related items are available on the github account.")),o.a.createElement("div",{className:t.footerItem},o.a.createElement("h2",null,"Contact"),o.a.createElement("div",null,o.a.createElement("img",{src:ce}),o.a.createElement("span",null,"hitesh.parashar@publicissapient.com")),o.a.createElement("div",null,o.a.createElement("img",{src:oe}),o.a.createElement("span",null,"9582420998")),o.a.createElement("div",null,o.a.createElement("img",{src:ie}),o.a.createElement("span",null,o.a.createElement("a",{href:"https://github.com/hiteshparashar4/",target:"_blank"},"View Github profile")))))))},se=Object(h.a)((function(e){var t;return{root:{},headerBody:(t={position:"fixed",top:0,left:0,width:"100%",zIndex:5,height:"50px",boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",padding:"12px",backgroundColor:"#1f232a"},g()(t,e.breakpoints.up("md"),{display:"none"}),g()(t,"& img",{width:"25px",height:"auto",position:"relative",top:"3px"}),t),icon:{}}})),pe=a.p+"images/75e4f970133d95105e38395a76b64c03.png";var de=function(e){var t=se(),a=e.toggleFlyout;return o.a.createElement("div",{className:t.root},o.a.createElement("div",{className:t.headerBody},o.a.createElement("div",{onClick:a,className:t.icon},o.a.createElement("img",{src:pe}))))},ue=(a(256),a.p,function(){var e=Object(i.useState)(!1),t=r()(e,2),a=t[0],n=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(de,{toggleFlyout:function(){return n(!a)}}),o.a.createElement(s.a,null),o.a.createElement(p.a,{maxWidth:"lg",style:{padding:0}},o.a.createElement(ne,{toggleFlyout:function(){return n(!a)},showFlyout:a})),o.a.createElement(le,null))}),me=document.getElementById("container");me&&l.a.render(o.a.createElement(ue,null),me)}});