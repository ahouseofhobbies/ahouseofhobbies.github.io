(this["webpackJsonpaos-reminders"]=this["webpackJsonpaos-reminders"]||[]).push([[19],{335:function(e,t,s){"use strict";var l=s(119),a=s(45),i=(s(5),s(342)),c=s.n(i),n=s(9);c.a.setAppElement("#root");t.a=e=>{const{children:t,closeModal:s,isOpen:l,label:i,isProcessing:o=!1}=e,{isDark:u}=Object(a.b)(),m="Modal-".concat(o?"Transparent":u?"Dark":"Light");return Object(n.jsx)(c.a,{className:m,contentLabel:i,isOpen:l,onRequestClose:s,overlayClassName:"Modal-Overlay",children:Object(n.jsxs)("div",{className:"container",children:[o&&Object(n.jsx)(r,{}),Object(n.jsx)("div",{hidden:o,children:t})]})})};const r=e=>{let{isDark:t=!1}=e;const s=t?"light-gray":"dark";return Object(n.jsx)("div",{className:"d-flex flex-row justify-content-center",children:Object(n.jsx)(l.a,{variant:s,size:"large"})})}},340:function(e,t,s){"use strict";var l=s(92),a=s(335),i=s(45),c=s(5),n=s(332),r=s(9);t.a=e=>{const{bodyText:t="",children:s,closeModal:o,confirmText:u="Confirm",denyText:m="Cancel",headerText:b,isOpen:d,onConfirm:j=null,onConfirmAsync:f=null,onDeny:O=null}=e,{theme:p}=Object(i.b)(),[v,x]=Object(c.useState)(!1),h="mx-2 mx-sm-1";return Object(r.jsxs)(a.a,{isOpen:d,isProcessing:v,closeModal:o,label:"".concat(b," Confirmation Modal"),children:[Object(r.jsx)("div",{className:"flex-row",children:Object(r.jsxs)("div",{className:"col ".concat(p.text," text-center"),children:[Object(r.jsx)("h4",{className:"mb-3",children:b}),t&&Object(r.jsx)("p",{className:"mb-3",children:t}),s?Object(r.jsx)("div",{className:"mb-3",children:s}):null]})}),Object(r.jsxs)("div",{className:"d-flex flex-row justify-content-around",children:[Object(r.jsxs)(l.a,{className:"".concat(p.modalDangerClass," ").concat(h),onClick:async e=>{if(e.preventDefault(),f)try{x(!0),await f()}catch(t){console.error(t)}j&&j(),o()},children:[Object(r.jsx)(n.e,{className:"mr-2"})," ",u]}),Object(r.jsx)(l.a,{className:"".concat(p.modalConfirmClass," ").concat(h),onClick:async e=>{e.preventDefault(),O&&O(),o()},children:m})]})]})}},349:function(e,t,s){"use strict";s.d(t,"a",(function(){return m}));var l=s(340),a=s(45),i=s(5),c=s(596),n=s(2),r=s(343),o=s(9);const u={clear:{visible:r.c,hidden:r.a},eye:{visible:r.m,hidden:r.n},fold:{visible:r.k,hidden:r.l},minus:{visible:r.i,hidden:r.e}},m=e=>{const{isVisible:t,setVisibility:s,size:r=1.4,type:m="eye",appearance:b="icon",text:d="",className:j="",withConfirmation:f=!1}=e,{theme:O}=Object(a.b)(),p=u[m],v=t?p.visible:p.hidden,[x,h]=Object(i.useState)(!1),y=e=>{e.preventDefault(),f?h(!0):C(e)},C=Object(i.useCallback)((e=>{var t;null===e||void 0===e||null===(t=e.preventDefault)||void 0===t||t.call(e),null===s||void 0===s||s()}),[s]);return Object(o.jsxs)(o.Fragment,{children:["icon"===b&&Object(o.jsx)(n.b.Provider,{value:{size:"".concat(r,"em"),className:j||O.text},children:Object(o.jsx)(v,{onClick:y})}),"menuItem"===b&&Object(o.jsxs)(c.a.Item,{className:j,onClick:y,children:[t?"Hide":"Show",d&&" ".concat(d)]}),x&&Object(o.jsx)(l.a,{closeModal:()=>h(!1),confirmText:"Hide",isOpen:x,onConfirm:C,headerText:"Hide Rule?"})]})}},383:function(e,t,s){"use strict";var l=s(158),a=s(5),i=s(56),c=s(97);t.a=(e,t)=>{const{origin_realm:s,realmscape:n}=Object(i.c)(l.selectRealmscapeSlice);return Object(a.useMemo)((()=>Object(c.a)(e,t||null,s,n)),[e,s,n,t])}},385:function(e,t,s){"use strict";s.d(t,"b",(function(){return b})),s.d(t,"c",(function(){return d})),s.d(t,"a",(function(){return j}));var l=s(349),a=s(360),i=s(45),c=s(27),n=s(5),r=s(56),o=s(153),u=s(9);const m=e=>{const{title:t,isVisible:s,mobileTitle:l,children:a,selectionCount:n}=e,{isMobile:r}=Object(o.a)(),{theme:m}=Object(i.b)(),b="".concat(m.cardBody," ").concat(s?"":"d-none"," ").concat(r?"py-3":""),d=r&&!s?"col w-50 px-1":"col-12 px-1",f="col-sm-12 col-md-6 col-lg-4 col-xl-4 ".concat(r?"":"mb-2"),O="".concat(d," ").concat(f," ").concat(m.bgColor," mx-auto mt-1");return Object(u.jsx)("div",{className:O,children:Object(u.jsxs)("div",{className:m.card,children:[Object(u.jsx)(j,{isVisible:s,title:t,mobileTitle:l,selectionCount:n,show:c.g.deleteSelector,hide:c.g.addSelector}),Object(u.jsx)("div",{className:b,children:a})]})})},b=e=>{const t=Object(r.c)(c.f.selectSelectors),{enableLog:s=!1,items:l,label:i=null,mobileTitle:o=null,setValues:b,title:d,values:j}=e,f=l.map((e=>e.name)),O=Object(n.useMemo)((()=>!t.find((e=>e===d))),[t,d]),p=s?{title:d,label:i||d}:null;return l.length?Object(u.jsx)(m,{title:d,isVisible:O,mobileTitle:o,selectionCount:j.length,children:Object(u.jsx)(a.a,{values:j,items:f,setValues:b,isClearable:!0,log:p})}):null},d=e=>{const t=Object(r.c)(c.f.selectSelectors),{enableLog:s=!1,items:l,label:i=null,mobileTitle:o=null,setValue:b,title:d,value:j=null}=e,f=Object(n.useMemo)((()=>!t.find((e=>e===d))),[t,d]),O=s?{title:d,label:i||d}:null;return Object(u.jsx)(m,{title:d,isVisible:f,mobileTitle:o,selectionCount:j?1:0,children:Object(u.jsx)(a.b,{setValue:b,items:l,value:j,isClearable:!0,log:O})})},j=e=>{const{title:t,mobileTitle:s,isVisible:a,type:c="minus",iconSize:m=1,selectionCount:b,show:d,hide:j}=e,f=Object(r.b)(),{theme:O}=Object(i.b)(),{isMobile:p}=Object(o.a)(),v=Object(n.useCallback)((()=>{f(a?j(t):d(t))}),[f,j,a,d,t]);Object(n.useEffect)((()=>{p&&"Units"!==t&&f(j(t))}),[f,j,p,t]);const x={cardHeader:"".concat(O.cardHeader," py-").concat(p?3:2," ").concat(p?"px-3":""),flexClass:"flex-grow-1 text-center ".concat(p?"":"pl-5"),flexWrapperClass:"d-flex justify-content-".concat(p?"end":"center"," align-items-center"),vizWrapper:"".concat(p?"pr-0":"px-3"," d-print-none")},h=p&&s?s:t,y=b&&!a?" (".concat(b,")"):"";return Object(u.jsx)("div",{className:x.cardHeader,onClick:v,children:Object(u.jsxs)("div",{className:x.flexWrapperClass,children:[Object(u.jsx)("div",{className:x.flexClass,children:p?Object(u.jsxs)("h5",{className:"CardHeaderTitle text-nowrap",children:[h,y]}):Object(u.jsxs)("h4",{className:"CardHeaderTitle text-nowrap",children:[h,y]})}),Object(u.jsx)("div",{className:x.vizWrapper,children:Object(u.jsx)(l.a,{isVisible:a,size:m,type:c})})]})})}},602:function(e,t,s){"use strict";s.r(t);var l=s(385),a=s(27),i=s(5),c=s(56),n=s(383),r=s(158),o=s(111),u=s(371);var m=e=>{const{realmscape:t}=Object(c.c)(r.selectRealmscapeSlice),s=Object(c.c)(r.selectSelections);return Object(i.useMemo)((()=>[{slice:"units",items:e.Units,setValues:a.e.setUnits,title:"Units",values:s.units||[],type:"multi",sideEffects:Object(u.a)(e.Units)},{slice:"flavors",items:e.Flavors,setValues:a.e.setFlavors,title:e.FlavorType||"Flavors",values:s.flavors||[],type:"multi",sideEffects:Object(u.a)(e.Flavors)},{slice:"battalions",items:e.Battalions,setValues:a.e.setBattalions,title:"Battalions",values:s.battalions||[],type:"multi",sideEffects:Object(u.a)(e.Battalions)},{slice:"command_traits",items:e.CommandTraits,setValues:a.e.setCommandTraits,title:"Heroic Traits",values:s.command_traits||[],type:"multi",sideEffects:Object(u.a)(e.CommandTraits)},{slice:"mount_traits",items:e.MountTraits,setValues:a.e.setMountTraits,title:"Mount Traits",values:s.mount_traits||[],type:"multi",sideEffects:Object(u.a)(e.MountTraits)},{slice:"monstrous_rampages",items:e.MonstrousRampages,setValues:a.e.setMonstrousRampages,title:"Monstrous Rampages",values:s.monstrous_rampages||[],type:"multi",sideEffects:Object(u.a)(e.MonstrousRampages)},{slice:"command_abilities",items:e.CommandAbilities,setValues:a.e.setCommandAbilities,title:"Command Abilities",values:s.command_abilities||[],type:"multi",sideEffects:Object(u.a)(e.CommandAbilities)},{slice:"artifacts",items:e.Artifacts,setValues:a.e.setArtifacts,title:"Artifacts",values:s.artifacts||[],type:"multi",sideEffects:Object(u.a)(e.Artifacts)},{slice:"prayers",items:e.Prayers,setValues:a.e.setPrayers,title:"Prayers",values:s.prayers||[],type:"multi",sideEffects:Object(u.a)(e.Prayers)},{slice:"spells",items:e.Spells,setValues:a.e.setSpells,title:"Spells",values:s.spells||[],type:"multi",sideEffects:Object(u.a)(e.Spells)},{slice:"manifestations",items:e.Manifestations,setValues:a.e.setManifestations,title:"Manifestations",values:s.manifestations||[],type:"multi",sideEffects:Object(u.a)(e.Manifestations)},{slice:"battle_tactics",items:e.BattleTactics,setValues:a.e.setBattleTactics,title:"Battle Tactics",values:s.battle_tactics||[],type:"multi",sideEffects:Object(u.a)(e.BattleTactics)},{slice:"core_rules",items:e.CoreRules,setValues:a.e.setCoreRules,title:"Core Rules",values:s.core_rules||[],type:"multi",sideEffects:Object(u.a)(e.CoreRules)},{slice:"incarnates",items:e.Incarnates,setValues:a.e.setIncarnates,title:"Incarnates",values:s.incarnates||[],type:"multi",sideEffects:Object(u.a)(e.Incarnates)},{slice:"scenery",items:e.Scenery,setValues:a.e.setScenery,title:"Scenery",values:s.scenery||[],type:"multi",sideEffects:Object(u.a)(e.Scenery)},{slice:"grand_strategies",items:e.GrandStrategies,setValues:a.e.setGrandStrategies,title:"Grand Strategies",values:s.grand_strategies||[],type:"multi",sideEffects:Object(u.a)(e.GrandStrategies)},{slice:"triumphs",items:e.Triumphs,setValues:a.e.setTriumphs,title:"Triumphs",values:s.triumphs||[],type:"multi",sideEffects:Object(u.a)(e.Triumphs)},{items:o.b,setValue:a.d.setRealmscape,title:"General's Handbook Rules",mobileTitle:"Battle Realm",value:t||null,type:"single"}]),[e,t,s])},b=s(153),d=s(372),j=s(9);t.default=()=>{const e=Object(c.b)(),{factionName:t,subFactionName:s}=Object(c.c)(a.f.selectFactionNameSlice),{isMobile:r}=Object(b.a)(),o=Object(n.a)(t,s);Object(i.useEffect)((()=>{e(a.a.updateArmy(o))}),[o,e]);const u=Object(i.useMemo)((()=>"row d-print-none pb-1 ".concat(r?"mx-1":"pt-2 w-75")),[r]),f=m(o);return Object(j.jsx)("div",{className:"d-flex justify-content-center",children:Object(j.jsx)("div",{className:u,children:f.map((s=>Object(j.jsxs)(i.Fragment,{children:["multi"===s.type&&s.setValues&&Object(j.jsx)(l.b,{enableLog:!0,items:s.items,label:t,mobileTitle:s.mobileTitle||null,setValues:Object(d.b)(s.setValues,s.sideEffects,t),title:s.title,values:s.values,selectionCount:0},s.title),"single"===s.type&&s.setValue&&Object(j.jsx)(l.c,{enableLog:!0,items:s.items,label:t,mobileTitle:s.mobileTitle||null,setValue:Object(d.d)((t=>e(s.setValue(t)))),title:s.title,value:s.value,selectionCount:0},s.title)]},s.title)))})})}}}]);
//# sourceMappingURL=19.d08ce4c2.chunk.js.map