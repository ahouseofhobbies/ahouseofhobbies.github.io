(this["webpackJsonpaos-reminders"]=this["webpackJsonpaos-reminders"]||[]).push([[23,27],{334:function(e,t,s){"use strict";s.d(t,"b",(function(){return i})),s.d(t,"a",(function(){return c}));s(5);var r=s(55),a=s(22),n=s(153),o=s(9);const i=e=>{let{href:t,children:s,label:r,...a}=e;return Object(o.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer","aria-label":r,...a,children:s})},c=e=>{const{Icon:t,href:s,btnClass:c,text:l}=e,{isMobile:d}=Object(n.a)();return Object(o.jsx)(i,{href:s,className:"".concat(c," mb-1"),onClick:e=>Object(a.b)("Contact-".concat(l)),label:l,children:Object(o.jsxs)("div",{className:r.a,children:[Object(o.jsx)(t,{className:d?"mx-2 my-1":"mr-2"}),d?"":" ".concat(l)]})})}},338:function(e,t,s){"use strict";var r=s(334),a=s(93),n=s(45),o=s(332),i=s(11),c=s(9);t.a=e=>{let{size:t="normal"}=e;const{isOffline:s}=Object(a.b)(),{isDark:l}=Object(n.b)(),d="btn ".concat("small"===t?"btn-sm":"large"===t?"btn-lg":""," btn-outline-").concat(l?"light":"dark"," mx-1");return s?null:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(r.a,{href:i.b,btnClass:d,Icon:o.l,text:"Github"}),Object(c.jsx)(r.a,{href:"mailto:aosreminders@gmail.com",btnClass:d,Icon:o.i,text:"Email"}),Object(c.jsx)(r.a,{href:"//discord.gg/2nt9Fxp",btnClass:d,Icon:o.g,text:"Discord"})]})}},354:function(e){e.exports=JSON.parse('{"name":"aos-reminders","version":"5.2.9","private":true,"homepage":"./","dependencies":{"@auth0/auth0-react":"2.2.4","@reduxjs/toolkit":"1.9.7","@stripe/react-stripe-js":"2.4.0","@stripe/stripe-js":"1.54.1","bootstrap":"4.6.0","core-js":"3.35.0","deepmerge":"4.3.1","jspdf":"1.5.3","lodash":"4.17.21","luxon":"2.5.2","parse5":"6.0.1","pdfjs-dist":"2.4.456","qs":"6.11.2","react":"17.0.2","react-beautiful-dnd":"13.1.1","react-bootstrap":"1.6.4","react-copy-to-clipboard":"5.1.0","react-dom":"17.0.2","react-dropzone":"11.5.1","react-ga4":"2.1.0","react-icons":"4.8.0","react-modal":"3.16.1","react-redux":"7.2.8","react-router-dom":"5.3.0","react-scripts":"4.0.3","react-select":"5.2.2","react-switch":"6.0.0","redux":"4.2.1","redux-persist":"6.0.0","sass":"1.32.13","string.prototype.matchall":"4.0.10","superagent":"7.1.6"},"scripts":{"analyze":"source-map-explorer \'build/static/js/*.js\'","build":"react-app-rewired build","clean":"node clean.js","format":"yarn prettier --write \\"**/*.*(js|jsx|ts|tsx)\\"","gitclean:win":"git branch | %{ $_.Trim() } | ?{ $_ -ne \'master\' } | %{ git branch -D $_ }","gitclean":"git branch | grep -v \\"master\\" | xargs git branch -D","intake:win":"ts-node-dev --respawn --compiler-options \\"{ \\"\\"module\\"\\": \\"\\"commonjs\\"\\"}\\" --transpile-only -r tsconfig-paths/register src/utils/dev/intakeTests.ts","intake":"ts-node-dev --respawn --compiler-options \'{ \\"module\\": \\"commonjs\\"}\' --transpile-only -r tsconfig-paths/register src/utils/dev/intakeTests.ts","lint":"eslint --max-warnings 0 --ext ts,tsx src","prepush":"yarn clean && yarn format && yarn lint --fix && yarn tsc && yarn test","pruneTests:win":"ts-node-dev --respawn --compiler-options \\"{ \\"\\"module\\"\\": \\"\\"commonjs\\"\\"}\\" --transpile-only -r tsconfig-paths/register src/utils/dev/pruneTests.ts","pruneTests":"ts-node-dev --respawn --compiler-options \'{ \\"module\\": \\"commonjs\\"}\' --transpile-only -r tsconfig-paths/register src/utils/dev/pruneTests.ts","start":"react-app-rewired --openssl-legacy-provider start","test":"react-app-rewired test","up":"yarn install && yarn upgrade-interactive --latest","verify:win":"ts-node-dev --compiler-options \\"{ \\"\\"module\\"\\": \\"\\"commonjs\\"\\"}\\" --respawn --transpile-only -r tsconfig-paths/register src/utils/dev/verify.ts","verify":"ts-node-dev --compiler-options \'{ \\"module\\": \\"commonjs\\"}\' --respawn --transpile-only -r tsconfig-paths/register src/utils/dev/verify.ts","xlsx:win":"ts-node-dev --compiler-options \\"{ \\"\\"module\\"\\": \\"\\"commonjs\\"\\"}\\" --respawn --transpile-only -r tsconfig-paths/register src/utils/dev/exportToSheet.ts","xlsx":"ts-node-dev --compiler-options \'{ \\"module\\": \\"commonjs\\"}\' --respawn --transpile-only -r tsconfig-paths/register src/utils/dev/exportToSheet.ts"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"husky":{"hooks":{"pre-commit":"node clean.js && pretty-quick --staged --pattern \\"**/*.*(ts|tsx)\\""}},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 edge version","last 1 explorer version","last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"@babel/plugin-proposal-private-property-in-object":"^7.21.11","@types/jest":"26.0.23","@types/jspdf":"1.3.3","@types/lodash":"4.14.202","@types/luxon":"2.3.2","@types/node":"17.0.31","@types/parse5":"6.0.3","@types/pdfjs-dist":"2.7.1","@types/qs":"6.9.7","@types/react":"17.0.43","@types/react-beautiful-dnd":"13.1.7","@types/react-copy-to-clipboard":"5.0.7","@types/react-dom":"17.0.14","@types/react-modal":"3.13.1","@types/react-redux":"7.1.31","@types/react-router-dom":"5.3.3","@types/superagent":"4.1.24","@types/webpack-env":"1.16.3","babel-jest":"26.6.3","husky":"4.3.8","prettier":"2.8.8","prettier-plugin-organize-imports":"2.3.4","pretty-quick":"3.1.3","react-app-rewired":"2.2.1","replace-in-file":"6.3.5","source-map-explorer":"2.5.3","ts-node-dev":"1.1.8","tsconfig-paths":"3.13.0","typescript":"5.3.3","workbox-core":"6.5.4","workbox-expiration":"6.5.4","workbox-precaching":"6.5.4","workbox-routing":"6.5.4","workbox-strategies":"6.5.4","xlsx":"0.17.5"},"resolutions":{"typescript":"5.3.3","@typescript-eslint/parser":"^6.7.5"}}')},366:function(e,t,s){"use strict";s.r(t);var r=s(334),a=s(93),n=s(45),o=(s(5),s(2)),i=s(332),c=s(22),l=s(9);const d=()=>{const{isOffline:e}=Object(a.b)(),{theme:t}=Object(n.b)();return e?null:Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"container ".concat(t.bgColor," pt-4"),children:Object(l.jsx)("div",{className:"row justify-content-center",children:Object(l.jsxs)("div",{className:"col-10 col-sm-8 col-md-6 col-lg-4 col-xl-4 card ".concat(t.bgColor," ").concat(t.text," py-3"),children:[Object(l.jsx)("div",{className:"row d-flex justify-content-center d-print-none",children:Object(l.jsx)("div",{className:"btn-group btn-group-lg",role:"group","aria-label":"Donate",children:Object(l.jsx)("div",{className:"btn-group mr-2",role:"group","aria-label":"Donate options",children:Object(l.jsx)(o.b.Provider,{value:{size:"2.2em"},children:Object(l.jsx)(h,{handleClick:e=>{e.preventDefault(),Object(c.b)("DonatePayPal"),window.open("//paypal.me/ahouseofhobbies")}})})})})}),Object(l.jsxs)("small",{className:"text-center mt-3",children:["Creating this took a lot of time and effort.",Object(l.jsx)("br",{}),"If you'd like to thank me, buy me a beer!"]})]})})})})},h=e=>Object(l.jsx)(i.d,{onClick:e.handleClick,className:"mx-2",style:{cursor:"pointer"}});var p=s(124),m=s(19);var b=()=>{const{isOnline:e}=Object(a.b)(),{theme:t}=Object(n.b)();if(e)return null;const s=m.f.get();return Object(l.jsx)("div",{className:"container pt-4",children:Object(l.jsx)("div",{className:"row justify-content-center",children:Object(l.jsxs)("div",{className:"col-12 col-sm-8 col-md-6 col-lg-6 col-xl-6 col-xxl-4 ".concat(t.card," ").concat(t.bgColor," ").concat(t.text," py-3 text-center"),children:[Object(l.jsxs)("p",{className:"text-danger",children:[Object(l.jsx)(p.a,{className:"mr-2"}),"You are in ",Object(l.jsx)("strong",{children:"Offline"})," mode.",Object(l.jsx)(p.a,{className:"ml-2"})]}),Object(l.jsx)("p",{children:"Your capabilites are limited in this mode."}),"You cannot save a new army.",!!s&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("br",{}),"You cannot update or delete armies.",Object(l.jsx)("br",{}),"You cannot access your profile."]})]})})})},j=s(338),u=s(354);t.default=()=>Object(l.jsxs)("div",{className:"container d-print-none",children:[Object(l.jsx)(d,{}),Object(l.jsx)(b,{}),Object(l.jsx)(g,{}),Object(l.jsx)("div",{className:"row text-center pt-2",children:Object(l.jsx)("div",{className:"col",children:Object(l.jsx)(j.a,{size:"small"})})}),Object(l.jsx)(x,{})]});const g=()=>{const{theme:e}=Object(n.b)();return Object(l.jsx)("div",{className:"row justify-content-center text-center ".concat(e.bgColor," pt-0"),children:Object(l.jsx)("div",{className:"col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8",children:Object(l.jsxs)("small",{className:"DisclaimerText ".concat(e.text),children:["Disclaimer: This tool is in no way endorsed or sanctioned by Games Workshop - it is unofficial and fan-made.",Object(l.jsx)("br",{}),"I take absolutely no credit for any of the Games Workshop content displayed above."]})})})},x=()=>{const{theme:e}=Object(n.b)();return Object(l.jsx)("div",{className:"row text-center ".concat(e.bgColor," pt-1 pb-2"),children:Object(l.jsx)("div",{className:"col",children:Object(l.jsx)(r.b,{href:"https://github.com/daviseford/aos-reminders/releases/latest",label:"GithubLatestRelease",children:Object(l.jsxs)("small",{className:e.text,children:["AoS Reminders v",u.version," - Release Notes"]})})})})}},586:function(e,t,s){"use strict";s.r(t);var r=s(155),a=s(366),n=s(45),o=s(5),i=s(22),c=s(9);const l=Object(o.lazy)((()=>s.e(4).then(s.bind(null,339))));t.default=()=>{const{theme:e}=Object(n.b)();return Object(o.useEffect)((()=>{Object(i.p)(),window.scrollTo(0,0)}),[]),Object(c.jsxs)("div",{className:"d-block ".concat(e.bgColor),children:[Object(c.jsx)("div",{className:"".concat(e.headerColor," py-2"),children:Object(c.jsx)(o.Suspense,{fallback:Object(c.jsx)(r.d,{}),children:Object(c.jsx)(l,{})})}),Object(c.jsx)("div",{className:"container ".concat(e.bgColor," ").concat(e.text," py-4"),children:Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"col pt-4",children:[Object(c.jsx)("h1",{className:"text-center",children:"Farewell, my friends"}),Object(c.jsx)("hr",{}),Object(c.jsx)("h3",{className:"text-center",children:"TL;DR: I will not be updating AoS Reminders with AoS 4th Edition. I will no longer actively maintain this codebase."}),Object(c.jsx)("hr",{}),Object(c.jsx)("h5",{children:"Thanks for the Memories"}),Object(c.jsx)("p",{children:"When I created AoS Reminders as a quick tool for building my armies, way back on Lustria Online, I never imagined it would go this far."}),Object(c.jsx)("p",{children:"I have met so many cool people, and I have relied on the contributions of amazing contributors, some of whom began working on AoS Reminders and leveraged that experience to become professional programmers."}),Object(c.jsx)("p",{children:"In countless job interviews, I have used this site as an example of my ability to create, maintain, and improve a site over the long term. To me, it is the most impactful code that I have written."}),Object(c.jsx)("p",{children:"I have been fortunate to work on some amazing projects in my professional career. I have written code for multi-billion dollar trading platforms, implemented LLMs at the biggest banks in the world, written medical software to improve patient outcomes, and created tools that help normal people do their jobs better and faster."}),Object(c.jsx)("p",{children:"But none of the things I've worked on have meant so much to me as this website."}),Object(c.jsx)("hr",{}),Object(c.jsx)("h5",{children:"What now?"}),Object(c.jsx)("p",{children:Object(c.jsx)("mark",{children:"I will continue hosting this website for a long, long time. Subscribers will maintain access to their profiles. The codebase will remain frozen in time (at the very end of AoS 3rd edition) unless a new maintainer steps forward."})}),Object(c.jsx)("p",{children:"It is entirely possible that this project continues. All it would take is a dedicated maintainer, who is willing to put in the time and energy."}),Object(c.jsxs)("p",{children:["It is not for the faint of heart. You will have to track down every single book, errata, White Dwarf, Forge World rules, etc. It is a labor of love (emphasis on ",Object(c.jsx)("i",{children:"labor"}),")."]}),Object(c.jsx)("p",{children:"If this appeals to you, good news. You can be the hero that keeps this going! I will still be in Discord and Github. If you put in the work, I will help you get it live on the site."}),Object(c.jsx)("hr",{}),Object(c.jsx)("h5",{children:"But why?"}),Object(c.jsx)("p",{children:"I haven't played a single game of Age of Sigmar in nearly four years."}),Object(c.jsx)("p",{children:"Right before COVID struck, I had started to play competitively in tournaments and against local skilled players. This had moved my skill level to an uncomfortable level - I wasn't quite good enough to win serious tournament games, but I was too good to play casually with friends. This left me chasing incredibly powerful lists and gimmicks that were unfair to my casual friends, and mediocre in a competitive environment. And the more I chased the competitive high, the more I encountered broken, unfun lists to play against (like Tzeentch gimmick lists with endless dice due to a generous rules interpretation, remember those?)."}),Object(c.jsx)("p",{children:"I have gotten pretty good at games before. I know what it takes. I have won multiple world championships in one video game (Red Orchestra), and traveled the country playing Team Fortress 2 in ESEA Invite. I have been down this path before. And as I grinded Tabletop Simulator and watched tournament games and practiced against whoever would play me at the local game stores, the gnawing sensation that I could not escape was - this wasn't fun. The games were getting harder, but they weren't getting more rewarding. When I won, I felt like I had basically cheated and exploited my way to victory. And when I lost, I felt like I was at the mercy of a list that relied on an overpowered gimmick to beat my overpowered gimmick."}),Object(c.jsx)("p",{children:"Because I maintain this website, I have read every rule in the game, I have read every iteration of every rule in this game, I have read every update to every revision to every errata to every addendum to everything that has ever existed in this game."}),Object(c.jsx)("p",{children:"I'm just tired of it."}),Object(c.jsx)("p",{children:'I was explaining this to a family member, who pointed out that I was suffering from the "astronomer\'s dilemma"; the idea that professional astronomers, who spend a significant amount of time studying the universe in great detail, might find it difficult to simply enjoy the beauty of the night sky without thinking about the complex science behind it.'}),Object(c.jsx)("p",{children:"When I looked at an Age of Sigmar game, I no longer saw two armies engaging in battle, heroic generals marshalling their hordes of underlings to conquer the table."}),Object(c.jsx)("p",{children:"No, I just saw statlines, erratas, expected values, buffs, nerfs, numbers, numbers, phases, and technicalities that I could exploit."}),Object(c.jsx)("p",{children:"The game ceased to be a game. It was instead a collection of rules. And frankly, AoS is not something to be played for its ruleset alone."}),Object(c.jsx)("p",{children:"So I ceased playing. It's been nearly four years. I have moved on to enjoy other games, and I still paint miniatures. I have kept updating this website out of a sense of duty to my subscribers."}),Object(c.jsx)("p",{children:"But with the news that Tony of Warscroll Builder was moving on, I realized this was my chance, too. I can be free of the burden of maintenance of a game that I no longer enjoy."}),Object(c.jsx)("hr",{}),Object(c.jsx)("h4",{className:"text-center",children:"This project is open source, if you are interested in becoming a maintainer and moving the codebase forward, please contact me via email, Github, or Discord."}),Object(c.jsx)("hr",{}),Object(c.jsx)("h5",{children:"That's all, folks!"}),Object(c.jsx)("p",{children:"Thanks for everything. I hope you enjoyed using this website."}),Object(c.jsxs)("p",{children:["Davis Ford",Object(c.jsx)("br",{}),"July 10, 2024"]})]})})}),Object(c.jsx)(a.default,{})]})}}}]);
//# sourceMappingURL=23.aeacb796.chunk.js.map