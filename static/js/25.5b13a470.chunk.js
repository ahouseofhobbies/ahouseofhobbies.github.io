(this["webpackJsonpaos-reminders"]=this["webpackJsonpaos-reminders"]||[]).push([[25],{335:function(t,e,s){"use strict";var i=s(119),a=s(45),n=(s(5),s(342)),o=s.n(n),c=s(9);o.a.setAppElement("#root");e.a=t=>{const{children:e,closeModal:s,isOpen:i,label:n,isProcessing:r=!1}=t,{isDark:d}=Object(a.b)(),h="Modal-".concat(r?"Transparent":d?"Dark":"Light");return Object(c.jsx)(o.a,{className:h,contentLabel:n,isOpen:i,onRequestClose:s,overlayClassName:"Modal-Overlay",children:Object(c.jsxs)("div",{className:"container",children:[r&&Object(c.jsx)(l,{}),Object(c.jsx)("div",{hidden:r,children:e})]})})};const l=t=>{let{isDark:e=!1}=t;const s=e?"light-gray":"dark";return Object(c.jsx)("div",{className:"d-flex flex-row justify-content-center",children:Object(c.jsx)(i.a,{variant:s,size:"large"})})}},341:function(t,e,s){"use strict";var i=s(92),a=s(335),n=s(45),o=s(5),c=s(332),l=s(9);e.a=t=>{const{theme:e}=Object(n.b)(),[s,r]=Object(o.useState)(!1),{bodyText:d="",children:h=null,closeModal:p,confirmBtnClass:g=e.modalDangerClass,confirmText:u="Confirm",denyBtnClass:m=e.modalConfirmClass,denyText:f="Cancel",disableConfirmIcon:x=!1,headerText:b="",isOpen:y=!1,onConfirm:A=null,onConfirmAsync:j=null,onDeny:C=null}=t,O=t.confirmIcon||c.e;return Object(l.jsxs)(a.a,{isOpen:y,isProcessing:s,closeModal:p,label:"".concat(b," Confirmation Modal"),children:[Object(l.jsx)("div",{className:"flex-row",children:Object(l.jsxs)("div",{className:"col ".concat(e.text," text-center"),children:[Object(l.jsx)("h4",{className:"mb-3",children:b}),d&&Object(l.jsx)("p",{className:"mb-3",children:d}),h?Object(l.jsx)("div",{className:"mb-3",children:h}):null]})}),Object(l.jsxs)("div",{className:"d-flex flex-row justify-content-around",children:[Object(l.jsxs)(i.a,{className:g,onClick:async t=>{if(t.preventDefault(),j)try{r(!0),await j()}catch(e){console.error(e)}A&&A(),p()},children:[!x&&Object(l.jsx)(O,{className:"mr-2"})," ",u]}),Object(l.jsx)(i.a,{className:m,onClick:async t=>{t.preventDefault(),C&&C(),p()},children:f})]})]})}},357:function(t,e,s){"use strict";s.d(e,"c",(function(){return n})),s.d(e,"a",(function(){return o})),s.d(e,"b",(function(){return c}));var i=s(6),a=s(19);const n=(t,e)=>e.reduce(((e,s)=>{const i=t.find((t=>t.id&&t.id===s));return i&&e.push(i),e}),[]),o=(t,e,s)=>{const i=Array.from(t),[a]=i.splice(e,1);return i.splice(s,0,a),i},c=t=>Object.keys(t).reduce(((e,s)=>{const o=t[s],c=Object(i.sortBy)(o.map((t=>t.id))),l=a.c.getWhen(s);if(l.length>0&&0===Object(i.difference)(c,Object(i.sortBy)(l)).length){const t=n(o,l);e[s]=t}else e[s]=o;return e}),{})},386:function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));const i="Empty note"},578:function(t,e,s){"use strict";s.r(e);var i=s(92),a=s(341),n=s(93),o=s(154),c=s(45),l=s(5),r=s(343),d=s(22),h=s(46),p=s(40),g=s(9);const u=t=>{const{closeModal:e,modalIsOpen:s,factionName:i,pdf:u}=t,{isOnline:m}=Object(n.b)(),{loadedArmy:f}=Object(o.b)(),{theme:x}=Object(c.b)(),b=(y=f?f.armyName:i,y=Object(h.b)(y)?Object(p.e)(y):Object(p.d)(y),"".concat(y.trim().split(" ").join("_"),"_Reminders"));var y;const[A,j]=Object(l.useState)(b),[C,O]=Object(l.useState)("compact");Object(l.useEffect)((()=>{j(b)}),[i,b]);const T=async()=>{u[C].save("".concat(A,".pdf")),m&&Object(d.e)(i,C),j("")};return Object(g.jsxs)(a.a,{closeModal:e,confirmBtnClass:x.modalConfirmClass,confirmIcon:r.f,confirmText:"Download",denyBtnClass:x.modalDangerClass,isOpen:s,onConfirmAsync:T,children:[Object(g.jsx)("div",{className:"row mx-3",children:Object(g.jsx)("div",{className:"col",children:Object(g.jsx)("form",{children:Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"nameInput",children:Object(g.jsx)("strong",{className:x.text,children:"File Name"})}),Object(g.jsx)("input",{className:"form-control form-control-sm","aria-describedby":"nameHelp",placeholder:"Enter file name",defaultValue:b,onKeyDown:t=>{"Enter"===t.key&&(t.preventDefault(),t.stopPropagation(),T())},onChange:t=>{var e;null===t||void 0===t||null===(e=t.preventDefault)||void 0===e||e.call(t),j(t.target.value)}})]})})})}),Object(g.jsx)("div",{className:"row ".concat(x.text," justify-content-center text-center"),children:Object(g.jsxs)("div",{className:"col px-0",children:[Object(g.jsxs)("div",{className:"custom-control custom-radio custom-control-inline",children:[Object(g.jsx)("input",{type:"radio",id:"defaultLayout",name:"defaultLayout",className:"custom-control-input",checked:"default"===C,onChange:()=>O("default")}),Object(g.jsx)("label",{className:"custom-control-label",htmlFor:"defaultLayout",children:"Standard"})]}),Object(g.jsxs)("div",{className:"custom-control custom-radio custom-control-inline",children:[Object(g.jsx)("input",{type:"radio",id:"compactLayout",name:"compactLayout",className:"custom-control-input",checked:"compact"===C,onChange:()=>O("compact")}),Object(g.jsx)("label",{className:"custom-control-label",htmlFor:"compactLayout",children:"Compact"})]})]})}),Object(g.jsx)("div",{className:"row ".concat(x.text," justify-content-center text-center"),children:Object(g.jsx)("div",{className:"col px-0 pb-3 pt-1",children:Object(g.jsx)("span",{className:"small ".concat(x.text),children:"compact"===C?"Smaller font, two columns, fewer pages":"Larger font, more whitespace"})})})]})};var m=s(27),f=s(56),x=s(157),b=s(153),y=s(405),A=s.n(y),j=s(6),C=s(386);class O{constructor(t,e,s,i,a){var n=this;this._army=void 0,this._doc=void 0,this._opts=void 0,this._style=void 0,this._type=void 0,this._pages=[[]],this._pageIdx=0,this._currentPage=this._pages[0],this._pageY=void 0,this._phases=[],this._phaseHeight=void 0,this._resetY=()=>{this._pageY=this._opts.yMargin},this._willOverrunY=t=>this._pageY+t>this._opts.pageBottom,this._goToNextPage=()=>{this._resetY(),this._pages.push([]),this._pageIdx=this._pageIdx+1,this._currentPage=this._pages[this._pageIdx]},this._addToCurrentPage=t=>{this._currentPage.push(t),"col1"!==t.position&&(this._pageY=this._pageY+this._style[t.type].spacing)},this._getRuleHeight=t=>Object(j.sum)(t.map((t=>this._style[t.type].spacing))),this._getRulesHeight=t=>Object(j.sum)(t.map((t=>t.map((t=>this._style[t.type].spacing)))).flat()),this._getTitle=t=>{const e=Object(p.b)(t),s=e?"".concat(e," - "):"";return"".concat(s).concat(t.name)},this._addSpacerToPage=()=>{this._addToCurrentPage({type:"spacer",text:"",position:"full"})},this._fullToCol=(t,e)=>t.map((t=>{if("titlespacer"===t.type)return{...t,position:e};const s="title"===t.type?this._opts.colTitleLineWidth:this._opts.colLineWidth;return this._doc.splitTextToSize(t.text,s).map((s=>({type:t.type,text:s.trim(),position:e})))})).flat(),this._addPhaseToPages_Compact=t=>{let{rules:e,phase:s}=t;const i={full:[]},a=this._getRulesHeight(e);if(e.length%2===1&&(i.full=e.pop(),!e.length))return this._willOverrunY(a+this._phaseHeight)&&this._goToNextPage(),this._addToCurrentPage(s),i.full.forEach((t=>this._addToCurrentPage(t))),this._addSpacerToPage();const n=this._getRuleHeight(e[0]),o=this._getRuleHeight(e[1]);(this._willOverrunY(n+this._phaseHeight)||this._willOverrunY(o+this._phaseHeight))&&this._goToNextPage(),this._addToCurrentPage(s);const c=this._getRulesHeight(e)/2;let l=0,r=0,d=!1;if(e.forEach(((t,i)=>{const a=this._getRuleHeight(t),n=Object(j.slice)(e,i),o=this._getRulesHeight(n);if(l<c&&!d){if(this._willOverrunY(a))return this._willOverrunY(a-l)?(this._goToNextPage(),this._addToCurrentPage({...s,text:"".concat(s.text," (continued)")}),d=!1,l=0+a,r=0,t.forEach((t=>this._addToCurrentPage({...t,position:"col0"})))):(d=!0,r=0+a,t.forEach((t=>this._addToCurrentPage({...t,position:"col1"}))));if(o<=l)d=!0;else{if(i!==e.length-1)return l+=a,t.forEach((t=>this._addToCurrentPage({...t,position:"col0"})));d=!0}}if(d||l>=c)return d=!0,this._willOverrunY(r-l+a)?(this._goToNextPage(),this._addToCurrentPage({...s,text:"".concat(s.text," (continued)")}),d=!1,l=0+a,r=0,t.forEach((t=>this._addToCurrentPage({...t,position:"col0"})))):(r+=a,t.forEach((t=>this._addToCurrentPage({...t,position:"col1"}))))})),i.full.length>0){const t=this._fullToCol(i.full,"col1"),e=this._getRuleHeight(t),a=this._getRuleHeight(i.full);return r+e<=l?(r+=e,t.forEach((t=>this._addToCurrentPage(t))),this._addSpacerToPage()):(this._willOverrunY(a)&&(this._goToNextPage(),this._addToCurrentPage({...s,text:"".concat(s.text," (continued)")})),i.full.forEach((t=>this._addToCurrentPage(t))),this._addSpacerToPage())}this._addSpacerToPage()},this._addPhaseToPages_Default=t=>{let{rules:e,phase:s}=t;return this._willOverrunY(this._getRuleHeight(e[0])+this._phaseHeight)&&this._goToNextPage(),this._addToCurrentPage(s),e.forEach((t=>(this._willOverrunY(this._getRuleHeight(t))&&(this._goToNextPage(),this._addToCurrentPage({...s,text:"".concat(s.text," (continued)")})),t.forEach((t=>this._addToCurrentPage(t)))))),this._addSpacerToPage()},this._addArmyTextToPages=()=>{const t=this._getArmyText();this._willOverrunY(this._getRuleHeight(t))&&this._goToNextPage(),t.forEach((t=>this._addToCurrentPage(t)))},this.splitTextToPages=()=>{const t="compact"===this._type?this._addPhaseToPages_Compact:this._addPhaseToPages_Default;return this._phases.forEach(t),this._addArmyTextToPages(),this._pages},this.getReminderText=(t,e)=>{const s=[];Object.keys(t).forEach((i=>{const a={phase:{type:"phase",text:Object(p.e)(i),position:"full"},rules:[]},n=t[i].length;t[i].forEach(((t,s)=>{const i=[],o=s+1===n&&(s+1)%2===1,c="default"===this._type||o?"full":"col",l="full"===c?this._opts.maxTitleLineWidth:this._opts.colTitleLineWidth,r="full"===c?this._opts.maxLineWidth:this._opts.colLineWidth,d="full"===c?this._opts.maxNoteLineWidth:this._opts.colNoteLineWidth,h=()=>i.push({type:"break",text:"",position:c});i.push({type:"titlespacer",text:"",position:c});this._doc.splitTextToSize(this._getTitle(t),l).forEach((t=>{i.push({type:"title",text:t.trim(),position:c})}));this._doc.splitTextToSize(t.desc,r).forEach((t=>{const e=t.trim();e||h(),i.push({type:"desc",text:e,position:c})}));const p=e.find((e=>e.linked_hash===t.id));if(p&&p.content&&p.content!==C.a){h();this._doc.splitTextToSize(p.content,d).forEach((t=>{const e=t.trim();e||h(),i.push({type:"note",text:"     ".concat(e),position:c})})),h()}a.rules.push(i)})),s.push(a)})),this._phases=s},this._getSelections=()=>function(t,e){let s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(!(null===e||void 0===e?void 0:e.length))return[];const i=s&&e.length>1?"".concat(t,"s"):t,a="".concat(i,": ").concat(e.join(" | "));return n._doc.splitTextToSize(a,n._opts.maxLineWidth).map((t=>({type:"army",text:t.trim().replace(/\|$/g,""),position:"full"})))},this._getArmyText=()=>{const{allyFactionNames:t,allySelections:e,factionName:s,subFactionName:i,realmscape:a,selections:n}=this._army,{artifacts:o,battalions:c,command_abilities:l,command_traits:r,endless_spells:d,flavors:h,grand_strategies:g,mount_traits:u,prayers:m,scenery:f,spells:x,triumphs:b,units:y,manifestations:A}=n,j=a?[a]:[];let C=[{text:"",type:"spacer",position:"full"},{text:"",type:"spacer",position:"full"},{text:T(s,i),type:"armyName",position:"full"}];const O=this._getSelections(),P=[O("Flavor",h),O("Battalion",c),O("Unit",y),...t.map((t=>O("Allied ".concat(Object(p.e)(t)," Battalion"),e[t].battalions||[]))),...t.map((t=>O("Allied ".concat(Object(p.e)(t)," Unit"),e[t].units))),O("Artifact",o),O("Command Trait",r),O("Mount Trait",u),O("Command Abilities",l,!1),O("Prayer",m),O("Spell",x),O("Endless Spell",d),O("Scenery",f,!1),O("Grand Strategy",g,!1),O("Triumph",b),O("General' Handbook",j,!1)].flat();return C.concat(P,[{text:"",type:"spacer",position:"full"},{text:"Generated by AoS Reminders",type:"armyFooter",position:"full"},{text:"aosreminders.com",type:"armyEnd",position:"full"}])},this._army=a,this._doc=e,this._opts=s,this._style=i,this._type=t,this._pageY=this._opts.yMargin,this._phaseHeight=this._style.phase.spacing}}const T=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const s=Object(p.e)(t),i=Object(p.e)(e),a=i&&i!==s?" - ".concat(i):"";return"".concat(s).concat(a)},P="data:image/png;base64,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";var S=s(74),z=s(357);const W={army:{fontSize:6,spacing:.14,style:"normal"},armyEnd:{fontSize:8,spacing:.14,style:"bold"},armyFooter:{fontSize:8,spacing:.2,style:"bold"},armyName:{fontSize:8,spacing:.2,style:"bold"},break:{fontSize:0,spacing:.03,style:"normal"},desc:{fontSize:7,spacing:.14,style:"normal"},note:{fontSize:7,spacing:.14,style:"italic",textColor:[18,55,199]},phase:{fontSize:8,spacing:.2,style:"bold"},spacer:{fontSize:0,spacing:.1,style:"normal"},title:{fontSize:7,spacing:.14,style:"bold"},titlespacer:{fontSize:.04,spacing:.01,style:"normal"}},N={colLineWidth:8.5,colNoteLineWidth:8,colTitleLineWidth:8,maxLineWidth:17,maxNoteLineWidth:16.5,maxTitleLineWidth:15,pageBottom:9,xMargin:.3,yMargin:.75},L=t=>{const{factionName:e,subFactionName:s,hiddenReminders:i,reminders:a,notes:n,...o}=t,c=Object(z.b)(Object(S.a)(a,i)),l=new A.a({unit:"in",lineHeight:1.2}),r=new O("compact",l,N,W,{factionName:e,subFactionName:s,...o});l.setFont("helvetica").setTextColor(0,0,0).setProperties({title:"AoS Reminders - ".concat(T(e,s))});const d=l.internal.pageSize.getWidth(),h=d/2;r.getReminderText(c,n);const p=r.splitTextToPages();return p.forEach(((t,e)=>{0!==e&&l.addPage();let[s,i,a]=[N.xMargin,N.yMargin,N.yMargin];t.forEach(((n,o)=>{if((0===o||o===t.length-1)&&["spacer","titlespacer","break"].includes(n.type))return;const c="phase"===n.type,r=n.type.startsWith("army"),g=W[n.type],u=c||r?h:"col1"===n.position?4.2:s,m=c||r?"center":"left",f="col1"===n.position?a:i;if(l.setFontSize(g.fontSize).setFontStyle(g.style),g.textColor&&l.setTextColor(g.textColor[0],g.textColor[1],g.textColor[2]),l.text(n.text,u,f,null,null,m),g.textColor&&l.setTextColor(0,0,0),c&&l.setLineWidth(1e-4).setDrawColor(28,117,149).roundedRect(s-.1,i-g.spacing+.04,d-2*N.xMargin+.1,g.spacing+.015,.05,.05,"S"),"armyName"===n.type){const t=i-g.spacing;l.setLineWidth(1e-4).setDrawColor(28,117,149).line(s-.1,t,d-N.xMargin+.1,t)}if("armyEnd"===n.type){const t=i+g.spacing;l.setLineWidth(1e-4).setDrawColor(28,117,149).line(s-.1,t,d-N.xMargin+.1,t)}if("col1"===n.position?(a+=g.spacing,a>i&&(i=a)):(i+=g.spacing,"col0"!==n.position&&(a=i)),0===o){const t=.33;l.setTextColor(128,128,128).setFontSize(W.desc.fontSize).setFontStyle(W.desc.style).text("".concat(e+1),d-N.xMargin-.11,t).setFontStyle(W.title.style).text("aosreminders.com",h,t,null,null,"center").setTextColor(0,0,0);const[s,i]=[1.43/3.5,1/3.5];l.addImage(P,"png",N.xMargin+.11,t-i/2-.05,s,i)}if(e===p.length-1&&o===t.length-1){const[t,e,s]=[1.43,1,.4];i+e+s<=N.pageBottom&&l.addImage(P,"png",h-t/2+.15,i+s)}}))})),l},v={army:{fontSize:11,spacing:.22,style:"normal"},armyEnd:{fontSize:12,spacing:.18,style:"bold"},armyFooter:{fontSize:12,spacing:.24,style:"bold"},armyName:{fontSize:14,spacing:.28,style:"bold"},break:{fontSize:0,spacing:.14,style:"normal"},desc:{fontSize:9.5,spacing:.18,style:"normal"},note:{fontSize:9.5,spacing:.18,style:"italic",textColor:[18,55,199]},phase:{fontSize:12,spacing:.24,style:"bold"},spacer:{fontSize:0,spacing:.28,style:"normal"},title:{fontSize:10,spacing:.2,style:"bold"},titlespacer:{fontSize:0,spacing:.1,style:"normal"}},B={colLineWidth:0,colNoteLineWidth:0,colTitleLineWidth:0,maxLineWidth:10.8,maxNoteLineWidth:8.8,maxTitleLineWidth:8.8,pageBottom:11.65,xMargin:.5,yMargin:.75},w=t=>{const{factionName:e,subFactionName:s,hiddenReminders:i,reminders:a,notes:n,...o}=t,c=Object(z.b)(Object(S.a)(a,i)),l=new A.a({unit:"in",lineHeight:1.2}),r=new O("default",l,B,v,{factionName:e,subFactionName:s,...o});l.setFont("helvetica").setTextColor(0,0,0).setProperties({title:"AoS Reminders - ".concat(T(e,s))});const d=l.internal.pageSize.getWidth(),h=d/2;r.getReminderText(c,n);const p=r.splitTextToPages();return p.forEach(((t,e)=>{0!==e&&l.addPage();let[s,i]=[B.xMargin,B.yMargin];t.forEach(((a,n)=>{if((0===n||n===t.length-1)&&["spacer","titlespacer","break"].includes(a.type))return;const o="phase"===a.type,c=a.type.startsWith("army"),r=v[a.type],g=o||c?h:s,u=o||c?"center":"left";if(l.setFontSize(r.fontSize).setFontStyle(r.style),r.textColor&&l.setTextColor(r.textColor[0],r.textColor[1],r.textColor[2]),l.text(a.text,g,i,null,null,u),r.textColor&&l.setTextColor(0,0,0),o&&l.setLineWidth(55e-5).setDrawColor(28,117,149).roundedRect(s-.1,i-r.spacing+.02,d-2*B.xMargin+.1,r.spacing+.08,.05,.05,"S"),"armyName"===a.type&&l.setLineWidth(55e-5).setDrawColor(28,117,149).line(s-.1,i-r.spacing,d-B.xMargin+.1,i-r.spacing),"armyEnd"===a.type&&l.setLineWidth(55e-5).setDrawColor(28,117,149).line(s-.1,i+r.spacing,d-B.xMargin+.1,i+r.spacing),i+=r.spacing,0===n){const t=.33;l.setTextColor(128,128,128).setFontSize(v.desc.fontSize).setFontStyle(v.desc.style).text("".concat(e+1),d-B.xMargin-.11,t).setFontStyle(v.title.style).text("aosreminders.com",h,t,null,null,"center").setTextColor(0,0,0);const[s,i]=[1.43/3.5,1/3.5];l.addImage(P,"png",B.xMargin+.11,t-i/2-.05,s,i)}if(e===p.length-1&&n===t.length-1){const[t,e,s]=[1.43,1,.25];i+e+s<=B.pageBottom&&l.addImage(P,"png",h-t/2+.15,i+s)}}))})),l};e.default=()=>{const{reminders:t}=Object(x.a)(),{saveArmyToS3:e}=Object(o.b)(),{isMobile:s}=Object(b.a)(),a=Object(f.c)(m.f.selectCurrentArmy),n=Object(f.c)(m.f.selectReminders),c=Object(f.c)(m.f.selectNotes),[d,h]=Object(l.useState)(null),[p,y]=Object(l.useState)(!1),A=Object(l.useCallback)((s=>{s.preventDefault();const i=(o={...a,hiddenReminders:n,reminders:t,notes:c},{default:w(o),compact:L(o)});var o;h(i),e(a),y(!0)}),[a,n,t,c,e]),j="Download".concat(s?"":" PDF");return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(i.a,{onClick:A,children:[Object(g.jsx)(r.f,{className:"mr-2"})," ",j]}),p&&d&&Object(g.jsx)(u,{factionName:a.factionName,pdf:d,modalIsOpen:p,closeModal:()=>y(!1)})]})}}}]);
//# sourceMappingURL=25.5b13a470.chunk.js.map