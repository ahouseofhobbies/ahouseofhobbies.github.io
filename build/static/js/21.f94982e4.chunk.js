(this["webpackJsonpaos-reminders"]=this["webpackJsonpaos-reminders"]||[]).push([[21],{335:function(e,t,c){"use strict";var s=c(119),a=c(45),n=(c(5),c(342)),l=c.n(n),r=c(9);l.a.setAppElement("#root");t.a=e=>{const{children:t,closeModal:c,isOpen:s,label:n,isProcessing:o=!1}=e,{isDark:m}=Object(a.b)(),j="Modal-".concat(o?"Transparent":m?"Dark":"Light");return Object(r.jsx)(l.a,{className:j,contentLabel:n,isOpen:s,onRequestClose:c,overlayClassName:"Modal-Overlay",children:Object(r.jsxs)("div",{className:"container",children:[o&&Object(r.jsx)(i,{}),Object(r.jsx)("div",{hidden:o,children:t})]})})};const i=e=>{let{isDark:t=!1}=e;const c=t?"light-gray":"dark";return Object(r.jsx)("div",{className:"d-flex flex-row justify-content-center",children:Object(r.jsx)(s.a,{variant:c,size:"large"})})}},340:function(e,t,c){"use strict";var s=c(92),a=c(335),n=c(45),l=c(5),r=c(332),i=c(9);t.a=e=>{const{bodyText:t="",children:c,closeModal:o,confirmText:m="Confirm",denyText:j="Cancel",headerText:d,isOpen:b,onConfirm:O=null,onConfirmAsync:x=null,onDeny:u=null}=e,{theme:h}=Object(n.b)(),[f,N]=Object(l.useState)(!1),y="mx-2 mx-sm-1";return Object(i.jsxs)(a.a,{isOpen:b,isProcessing:f,closeModal:o,label:"".concat(d," Confirmation Modal"),children:[Object(i.jsx)("div",{className:"flex-row",children:Object(i.jsxs)("div",{className:"col ".concat(h.text," text-center"),children:[Object(i.jsx)("h4",{className:"mb-3",children:d}),t&&Object(i.jsx)("p",{className:"mb-3",children:t}),c?Object(i.jsx)("div",{className:"mb-3",children:c}):null]})}),Object(i.jsxs)("div",{className:"d-flex flex-row justify-content-around",children:[Object(i.jsxs)(s.a,{className:"".concat(h.modalDangerClass," ").concat(y),onClick:async e=>{if(e.preventDefault(),x)try{N(!0),await x()}catch(t){console.error(t)}O&&O(),o()},children:[Object(i.jsx)(r.e,{className:"mr-2"})," ",m]}),Object(i.jsx)(s.a,{className:"".concat(h.modalConfirmClass," ").concat(y),onClick:async e=>{e.preventDefault(),u&&u(),o()},children:j})]})]})}},341:function(e,t,c){"use strict";var s=c(92),a=c(335),n=c(45),l=c(5),r=c(332),i=c(9);t.a=e=>{const{theme:t}=Object(n.b)(),[c,o]=Object(l.useState)(!1),{bodyText:m="",children:j=null,closeModal:d,confirmBtnClass:b=t.modalDangerClass,confirmText:O="Confirm",denyBtnClass:x=t.modalConfirmClass,denyText:u="Cancel",disableConfirmIcon:h=!1,headerText:f="",isOpen:N=!1,onConfirm:y=null,onConfirmAsync:v=null,onDeny:p=null}=e,g=e.confirmIcon||r.e;return Object(i.jsxs)(a.a,{isOpen:N,isProcessing:c,closeModal:d,label:"".concat(f," Confirmation Modal"),children:[Object(i.jsx)("div",{className:"flex-row",children:Object(i.jsxs)("div",{className:"col ".concat(t.text," text-center"),children:[Object(i.jsx)("h4",{className:"mb-3",children:f}),m&&Object(i.jsx)("p",{className:"mb-3",children:m}),j?Object(i.jsx)("div",{className:"mb-3",children:j}):null]})}),Object(i.jsxs)("div",{className:"d-flex flex-row justify-content-around",children:[Object(i.jsxs)(s.a,{className:b,onClick:async e=>{if(e.preventDefault(),v)try{o(!0),await v()}catch(t){console.error(t)}y&&y(),d()},children:[!h&&Object(i.jsx)(g,{className:"mr-2"})," ",O]}),Object(i.jsx)(s.a,{className:x,onClick:async e=>{e.preventDefault(),p&&p(),d()},children:u})]})]})}},396:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var s=c(45),a=c(6),n=c(63),l=c(5),r=c(40),i=c(9);const o=e=>{let{army:t}=e;const{factionName:c,subFactionName:o,selections:j,allySelections:d,origin_realm:b,realmscape:O,realmscape_feature:x}=t,{theme:u}=Object(s.b)(),h=Object(l.useMemo)((()=>Object(a.sortBy)(Object.keys(j).filter((e=>j[e].length)))),[j]),f=Object(l.useMemo)((()=>Object.keys(d).reduce(((e,t)=>{var c,s;const a=(null===(c=d[t])||void 0===c?void 0:c.units)||[],n=(null===(s=d[t])||void 0===s?void 0:s.battalions)||[];return e.units=e.units.concat(a),e.battalions=e.battalions.concat(n),e}),{units:[],battalions:[]})),[d]),N=Object(n.a)(c);return(null===N||void 0===N?void 0:N.subFactionKeys)?Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("table",{className:"table table-sm",children:Object(i.jsxs)("tbody",{children:[Object(i.jsx)(m,{theme:u,items:[Object(r.e)(c)],title:"Faction"}),!!o&&N.subFactionKeys.length>1&&Object(i.jsx)(m,{theme:u,items:[o],title:"SubFaction"}),h.map(((e,t)=>Object(i.jsx)(m,{theme:u,items:Object(a.sortBy)(j[e]),title:e},"".concat(e,"_").concat(t)))),f.units.length>0&&Object(i.jsx)(m,{theme:u,items:Object(a.sortBy)(f.units),title:"Allied Units"}),f.battalions.length>0&&Object(i.jsx)(m,{theme:u,items:Object(a.sortBy)(f.battalions),title:"Allied Battalions"}),b&&Object(i.jsx)(m,{theme:u,items:[b],title:"Realm of Origin"}),O&&Object(i.jsx)(m,{theme:u,items:[O],title:"Realm of Battle"}),x&&Object(i.jsx)(m,{theme:u,items:[x],title:"Realm Feature"})]})})}):Object(i.jsx)(i.Fragment,{})},m=e=>{let{title:t,items:c,theme:s}=e;return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"text-nowrap ".concat(s.textMuted),children:Object(i.jsx)("strong",{children:Object(r.e)(t)})}),Object(i.jsx)("td",{children:c.map(((e,t)=>Object(i.jsx)("span",{className:"badge badge-secondary text-wrap mx-1",children:e},"".concat(e,"_").concat(t))))})]})}},397:function(e,t,c){"use strict";var s=c(341),a=c(154),n=c(45),l=c(5),r=c(332),i=c(22),o=c(9);var m=e=>{const{closeModal:t,modalIsOpen:c,currentArmyName:m,id:j}=e,{updateArmyName:d}=Object(a.b)(),{theme:b}=Object(n.b)(),[O,x]=Object(l.useState)(m),u=async()=>{O!==m&&(await d(j,O||"Untitled"),x(O||"Untitled"),Object(i.f)("UpdateArmyName"))};return Object(o.jsx)(s.a,{closeModal:t,confirmBtnClass:b.modalConfirmClass,confirmIcon:r.t,confirmText:"Update",denyBtnClass:b.modalDangerClass,isOpen:c,onConfirmAsync:u,children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("form",{children:Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"nameInput",children:Object(o.jsx)("strong",{className:b.text,children:"Rename Army"})}),Object(o.jsx)("input",{className:"form-control form-control-sm","aria-describedby":"nameHelp",value:O,onKeyDown:e=>{"Enter"===e.key&&(e.stopPropagation(),e.preventDefault(),u())},onChange:e=>{e.preventDefault(),x(e.target.value)},tabIndex:0,autoFocus:!0}),Object(o.jsx)("small",{id:"nameHelp",className:"form-text ".concat(b.textMuted),children:"Hint: Use a descriptive name."})]})})})})})},j=c(2);t.a=e=>{let{id:t,armyName:c,className:s="",size:a="1rem"}=e;const[n,i]=Object(l.useState)(!1);return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(j.b.Provider,{value:{size:a},children:[Object(o.jsx)(r.o,{className:"".concat(s," d-print-none"),onClick:e=>{e.preventDefault(),i(!0)}}),n&&Object(o.jsx)(m,{modalIsOpen:n,closeModal:()=>i(!1),id:t,currentArmyName:c})]})})}},580:function(e,t,c){"use strict";c.r(t);var s=c(52),a=c(92),n=c(5),l=c(332),r=c(9);const i=e=>{const{pageNum:t,setPageNum:c,numPages:s}=e;if(s<2)return null;const n=t!==s,i=1!==t;return Object(r.jsx)("nav",{"aria-label":"Saved Army Pagination",children:Object(r.jsxs)("ul",{className:"pagination justify-content-center my-2",children:[Object(r.jsx)("li",{className:"page-item ".concat(i?"":"disabled"),onClick:e=>{e.preventDefault(),i&&c(t-1)},children:Object(r.jsxs)(a.a,{className:"page-link",children:[i&&Object(r.jsx)(l.a,{className:"mr-1"}),"Previous"]})}),Object(r.jsx)("li",{className:"page-item ".concat(n?"":"disabled"),onClick:e=>{e.preventDefault(),n&&c(t+1)},children:Object(r.jsxs)(a.a,{className:"page-link",children:["Next",n&&Object(r.jsx)(l.b,{className:"ml-1"})]})})]})})};var o=c(93),m=c(154),j=c(22),d=c(109);const b=e=>{let{army:t}=e;const{isOnline:c}=Object(o.b)(),{setLoadedArmy:s}=Object(m.b)();return Object(r.jsx)(a.a,{className:"btn btn-sm btn-primary mx-3",onClick:e=>{e.preventDefault(),c&&Object(j.f)("LoadArmy-".concat(t.factionName)),Object(j.s)(),s({id:t.id,armyName:t.armyName}),Object(d.a)(t)},children:"Load Army"})};var O=c(396),x=c(397),u=c(340),h=c(45),f=c(404),N=c(40);const y=e=>{const{army:t}=e,{isOffline:c}=Object(o.b)(),{theme:s}=Object(h.b)(),{deleteSavedArmy:l}=Object(m.b)(),[i,d]=Object(n.useState)(!1),[x,f]=Object(n.useState)(""),{loadedArmy:N}=Object(m.b)();Object(n.useEffect)((()=>{N&&N.id===t.id?f("border-success shadow-drop-2-center"):x.includes("border-success")&&(f("shadow-drop-2-center-reverse"),setTimeout((()=>f("")),500))}),[N,t.id,x]);return Object(r.jsx)("div",{className:"col-12 col-lg-6 col-xl-6 col-xxl-4 mb-2",children:Object(r.jsx)("div",{className:"card ".concat(x),children:Object(r.jsxs)("div",{className:s.cardBody,children:[Object(r.jsx)(v,{id:t.id,armyName:t.armyName,factionName:t.factionName,createdAt:t.createdAt}),Object(r.jsx)("div",{className:"mt-1",children:Object(r.jsx)(O.a,{army:t})}),Object(r.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(r.jsx)(b,{army:t}),Object(r.jsx)(a.a,{className:"btn btn-sm btn-danger mx-3",onClick:()=>d(!0),disabled:c,children:"Delete"}),i&&Object(r.jsx)(u.a,{isOpen:i,closeModal:()=>d(!1),headerText:"Delete ".concat(t.armyName,"?"),bodyText:"This action is irreversible!",onConfirmAsync:async()=>{await l(t.id),Object(j.f)("DeleteArmy-".concat(t.factionName))},confirmText:"Delete"})]})]})})})},v=e=>{let{armyName:t,factionName:c,createdAt:s,id:a}=e;const{isOffline:n}=Object(o.b)(),{theme:l}=Object(h.b)(),i=Object(N.e)(c),m=f.DateTime.fromMillis(s).toLocaleString({year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"});return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"d-flex ".concat(l.text," mb-1 justify-content-start align-items-center"),children:[Object(r.jsx)("div",{hidden:n,children:Object(r.jsx)(x.a,{size:"0.75rem",className:"mr-3",armyName:t,id:a})}),Object(r.jsx)("div",{className:"flex-grow-1",children:Object(r.jsx)("h5",{className:"card-title mb-0",children:t||"Untitled"})})]}),Object(r.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(r.jsx)("small",{className:"flex-fill ".concat(l.textMuted),children:i}),Object(r.jsxs)("small",{className:"flex-fill ".concat(l.textMuted," text-right mr-2"),children:["Created: ",m]})]})]})};var p=c(61);t.default=()=>{const{isOffline:e}=Object(o.b)(),{isAuthenticated:t}=Object(s.b)(),{isSubscribed:c}=Object(p.b)(),{savedArmies:a,loadSavedArmies:l}=Object(m.b)(),[j,d]=Object(n.useState)(1),b=Object(n.useMemo)((()=>function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return e.reduce(((e,c,s)=>0===s?{...e,pages:[[c]]}:(s===e.currPage*t&&(e.currPage=e.currPage+1,e.pages.push([])),e.pages[e.currPage-1].push(c),e)),{currPage:1,pages:[]}).pages}(a,6)),[a]);return Object(n.useEffect)((()=>{(e||t&&c)&&l()}),[l,t,c,e]),0===b.length?Object(r.jsx)(g,{}):Object(r.jsxs)("div",{className:"mt-2",children:[Object(r.jsx)(i,{pageNum:j,setPageNum:d,numPages:b.length}),Object(r.jsx)("div",{className:"row justify-content-center",children:b[j-1].map(((e,t)=>Object(r.jsx)(y,{army:e},"".concat(e.id,"_").concat(t))))}),Object(r.jsx)(i,{pageNum:j,setPageNum:d,numPages:b.length})]})};const g=()=>Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"alert alert-primary text-center",role:"alert",children:"You haven't saved any armies yet!"})})}}]);
//# sourceMappingURL=21.f94982e4.chunk.js.map