(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{26:function(e,n,t){},28:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t(3),c=t.n(r),i=t(4),a=t(5),s=t(9),l=t(12),d=(t(26),t(10)),u=t(11),h=t(14),b=t(13),f=t(1),j=function(e){var n=e.name,t=e.email,o=e.id;return Object(f.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(f.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?size=200x200")}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:n}),Object(f.jsx)("p",{children:t})]})]})},p=function(e){var n=e.robots;return Object(f.jsx)("div",{children:n.map((function(e,t){return Object(f.jsx)(j,{id:n[t].id,name:n[t].name,email:n[t].email},t)}))})},g=function(e){e.searchfield;var n=e.searchChange;return Object(f.jsx)("div",{className:"pa2",children:Object(f.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},v=function(e){return Object(f.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},O=(t(28),"CHANGE_SEARCH_FIELD"),w="REQUEST_ROBOTS_PENDING",m="REQUEST_ROBOTS_SUCCESS",x="REQUEST_ROBOTS_FAILED",y=function(e){Object(h.a)(t,e);var n=Object(b.a)(t);function t(){return Object(d.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,o=e.robots,r=e.isPending,c=o.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r?Object(f.jsx)("h1",{children:"Loading"}):Object(f.jsxs)("div",{className:"tc",children:[Object(f.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(f.jsx)(g,{searchChange:t}),Object(f.jsx)(v,{children:Object(f.jsx)(p,{robots:c})})]})}}]),t}(o.Component),R=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(n){return e((t=n.target.value,{type:O,payload:t}));var t},onRequestRobots:function(){return e((function(e){e({type:w}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:m,payload:n})})).catch((function(n){return e({type:x,payload:n})}))}))}}}))(y),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(29);var E=t(2),C={searchField:""},N={isPending:!1,robots:[],error:""},P=Object(s.createLogger)(),F=Object(a.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.type===O?Object(E.a)(Object(E.a)({},e),{},{searchField:n.payload}):e},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case w:return Object(E.a)(Object(E.a)({},e),{},{isPending:!0});case m:return Object(E.a)(Object(E.a)({},e),{},{robots:n.payload,isPending:!1});case x:return Object(E.a)(Object(E.a)({},e),{},{error:n.payload,isPending:!1});default:return e}}}),L=Object(a.c)(F,Object(a.a)(l.a,P));c.a.render(Object(f.jsx)(i.a,{store:L,children:Object(f.jsx)(R,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robo-redux-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robo-redux-pwa","/service-worker.js");k?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):S(n,e)}))}}()}},[[30,1,2]]]);
//# sourceMappingURL=main.88240b8e.chunk.js.map