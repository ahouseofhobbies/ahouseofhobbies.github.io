(this["webpackJsonpaos-reminders"]=this["webpackJsonpaos-reminders"]||[]).push([[33],{575:function(e,t,s){"use strict";s.r(t);var c=s(92),a=s(93),n=s(154),r=s(45),b=s(27),o=s(5),i=s(332),d=s(56),l=s(22),m=s(46),j=s(157),u=s(9);t.default=e=>{let{currentArmy:t,id:s,changedKeys:p}=e;const{isGameMode:O}=Object(a.b)(),{relevantNotes:h}=Object(j.a)(),{updateArmy:f}=Object(n.b)(),{isDark:y}=Object(r.b)(),k=Object(d.c)(b.f.selectReminders),[N,A]=Object(o.useState)(!1),g=Object(o.useMemo)((()=>Object(m.a)(t,h)),[t,h]),v="btn ".concat(y?"btn-outline-light":"",O?" btn-block":" btn-success btn-block");return g?Object(u.jsxs)(c.a,{className:v,onClick:async e=>{e.preventDefault(),A(!0);const c=Object(m.c)({...t,hiddenReminders:k,notes:h},"update",p);try{await f(s,c)}catch(a){console.error(a)}A(!1),Object(l.f)("UpdateArmy-".concat(t.factionName))},children:[N?Object(u.jsx)("span",{className:"spinner-border spinner-border-sm mr-2",role:"status","aria-hidden":"true"}):Object(u.jsx)(i.f,{className:"mr-2"})," ",N?"Updating":"Update Army"]}):null}}}]);
//# sourceMappingURL=33.2d73fbff.chunk.js.map