(this["webpackJsonpaos-reminders"]=this["webpackJsonpaos-reminders"]||[]).push([[38],{339:function(e,a,c){"use strict";c.r(a);var b=c(52),i=c(122),t=c(155),s=c(92),n=c(121),o=c(93),l=c(61),r=c(6),d=c(94),j=c(55),O=c(22),u=c(11),m=c(337),g=c(153),f=c(19),h=c(120),N=c(9);a.default=()=>{const{isOffline:e}=Object(o.b)(),{isAuthenticated:a,logout:c}=Object(b.b)(),{login:k,isLoggingIn:p}=Object(m.a)({origin:"Navbar"}),{isActive:x,subscriptionLoading:v}=Object(l.b)(),{isTinyMobile:C}=Object(g.a)(),{pathname:I}=window.location,L=a?"Log out":"Log in";if(e)return Object(N.jsx)(t.f,{});if(p||v)return Object(N.jsx)(t.d,{});const E=h.b.some((e=>e.sale))?Object(r.max)(h.b.map((e=>e.discount_pct))):0;return Object(N.jsxs)(n.a,{children:[I!==u.d.HOME&&Object(N.jsx)(d.a,{to:u.d.HOME,className:j.b.link,onClick:()=>Object(O.b)("Navbar-Home"),children:"Home"}),a&&I!==u.d.PROFILE&&Object(N.jsx)(d.a,{to:u.d.PROFILE,className:j.b.link,onClick:()=>Object(O.b)("Navbar-Profile"),children:"Profile"}),!x&&I!==u.d.SUBSCRIBE&&Object(N.jsxs)(d.a,{to:u.d.SUBSCRIBE,className:j.b.link,onClick:()=>Object(O.b)("Navbar-Subscribe"),children:["Subscribe",!!E&&!C&&Object(N.jsxs)("span",{className:"ml-1 badge badge-pill badge-danger",children:[E,"% off!"]})]}),I!==u.d.FAQ&&Object(N.jsx)(d.a,{to:u.d.FAQ,className:j.b.link,onClick:()=>Object(O.b)("Navbar-Faq"),children:"FAQ"}),Object(N.jsx)(s.a,{className:j.b.btn,onClick:()=>a?(Object(O.b)("Navbar-Logout"),f.f.clear(),f.d.clear(),f.e.clear(),c({clientId:i.clientId,logoutParams:{returnTo:u.a}})):k(),children:L})]})}}}]);
//# sourceMappingURL=38.5f8b7d62.chunk.js.map