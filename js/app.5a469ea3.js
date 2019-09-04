(function(t){function e(e){for(var o,n,s=e[0],l=e[1],c=e[2],p=0,m=[];p<s.length;p++)n=s[p],i[n]&&m.push(i[n][0]),i[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(o=!1)}o&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var o={},i={app:0},r=[];function n(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=o,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var o=a("64a9"),i=a.n(o);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var o=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.skipAnimation?t._e():a("Portfolio",{attrs:{prompt:"DamianSandhu-Franceschi@Developer:~$ "}}),t.skipAnimation?a("PortfolioNoAnimation",{attrs:{prompt:"DamianSandhu-Franceschi@Developer:~$ "}}):t._e(),t.skipAnimation?t._e():a("div",{staticClass:"skip-text",on:{click:function(e){t.skipAnimation=!0}}},[t._v("Skip Animation")])],1)},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vue-typed-js",{attrs:{typeSpeed:20,showCursor:!0,strings:["cat welcome.txt && cat projects.txt"]}},[a("span",{staticClass:"console-text"},[t._v("\n      "+t._s(t.prompt)+"\n      "),a("span",{staticClass:"typing output-text"})])]),a("vue-typed-js",{attrs:{typeSpeed:20,showCursor:!1,startDelay:1500,strings:["Hello, my name is Damian Sandhu-Franceschi. I am a Computer Science student at the University of Guelph, welcome to my portfolio!"]}},[a("span",{staticClass:"typing"})]),a("vue-typed-js",{attrs:{typeSpeed:5,showCursor:!1,strings:["<h2>Live Projects</h2><ul><li><a href=https://github.com/damiansf/IgnoreWebadvisorsCookieLimits>Ignore Webadvisor Cookie Limits</a> Small chrome extension that allows you to avoid Webadvisors (uofgs course selection system) maximum cookies error. <a href=https://chrome.google.com/webstore/detail/ignore-webadvisor-cookie/homcfondbbpefkaahogpdlhpnedngpdc>Available in the chrome webstore</a></li>    <li><a href=https://github.com/damiansf/XboxGamertagGenerator>Xbox Gamertag Generator</a> A fun React app that xboxifys your gamertag <a href=https://damiansf.github.io/XboxGamertagGenerator/>Available online</a></li><li><a href=https://github.com/damiansf/todolist>Todos</a> A basic Vue.js app for creating and completing todos <a href=https://damiansf.github.io/todolist/>Available online</a></li>    <li><a href=https://github.com/damiansf/HowMuchDoIOweYou>How Much Do I Owe You?</a> A React app that allows you to track debts within your friend group. <a href=https://damiansf.github.io/HowMuchDoIOweYou/>Available online</a></li></ul><h2>Other Projects</h2><ul><li><a href=https://github.com/damiansf/guelphCourser>Guelph Courser</a> Google chrome extension to improve UofGs course selection website</li>    <li><a href=https://github.com/damiansf/MockBackendTemplate>Mock Backend Template</a> NodeJs mock backend, used for spitting back sample JSON responses to a frontend app</li>    <li><a href=https://github.com/damiansf/CommuteCostCalculator> Commute Cost Calculator</a> Small python program to calculate commuting gas costs</li><li><a href=https://github.com/damiansf/ArduinoRadar>Arduino Radar</a> Software for a arduino radar system</li>    <li><a href=https://github.com/damiansf/spellmyname>Spell My Name</a> Fun little game to see if you can spell my name</li>    <li><a href=https://github.com/damiansf/LunchPicker>Lunch Picker</a> Randomly selects a place to eat lunch based off data in a JSON file</li></ul>"],startDelay:6100}},[a("span",{staticClass:"typing"})])],1)},s=[],l={name:"Portfolio",props:{prompt:String}},c=l,u=(a("8a62"),a("2877")),p=Object(u["a"])(c,n,s,!1,null,"567c0239",null),m=p.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{staticClass:"console-text"},[t._v(t._s(t.prompt))]),a("span",[t._v("cat welcome.txt && cat projects.txt")]),a("br"),a("span",[t._v("Hello, my name is Damian Sandhu-Franceschi. I am a Computer Science student at the University of Guelph, welcome to my portfolio!")]),a("h2",[t._v("Live Projects")]),t._m(0),a("h2",[t._v("Other Projects")]),t._m(1)])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/damiansf/IgnoreWebadvisorsCookieLimits"}},[t._v("Ignore Webadvisor Cookie Limits")]),t._v(" Small chrome extension that allows you to avoid Webadvisors (uofgs course selection system) maximum cookies error. "),a("a",{attrs:{href:"https://chrome.google.com/webstore/detail/ignore-webadvisor-cookie/homcfondbbpefkaahogpdlhpnedngpdc"}},[t._v("Available in the chrome webstore")])]),a("li",[a("a",{attrs:{href:"https://github.com/damiansf/XboxGamertagGenerator"}},[t._v("Xbox Gamertag Generator")]),t._v(" A fun React app that xboxifys your gamertag "),a("a",{attrs:{href:"https://damiansf.github.io/XboxGamertagGenerator/"}},[t._v("Available online")])]),a("li",[a("a",{attrs:{href:"https://github.com/damiansf/todolist"}},[t._v("Todos")]),t._v(" A basic Vue.js app for creating and completing todos "),a("a",{attrs:{href:"https://damiansf.github.io/todolist/"}},[t._v("Available online")])]),a("li",[a("a",{attrs:{href:"https://github.com/damiansf/HowMuchDoIOweYou"}},[t._v("How Much Do I Owe You?")]),t._v(" A React app that allows you to track debts within your friend group. "),a("a",{attrs:{href:"https://damiansf.github.io/HowMuchDoIOweYou/"}},[t._v("Available online")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/damiansf/guelphCourser"}},[t._v("Guelph Courser")]),t._v(" Google chrome extension to improve UofGs course selection website")]),a("li",[a("a",{attrs:{href:"https://github.com/damiansf/MockBackendTemplate"}},[t._v("Mock Backend Template")]),t._v(" NodeJs mock backend, used for spitting back sample JSON responses to a frontend app")]),a("li",[a("a",{attrs:{href:"https://github.com/damiansf/CommuteCostCalculator"}},[t._v(" Commute Cost Calculator")]),t._v(" Small python program to calculate commuting gas costs")]),a("li",[a("a",{attrs:{href:"https://github.com/damiansf/ArduinoRadar"}},[t._v("Arduino Radar")]),t._v(" Software for a arduino radar system")]),a("li",[a("a",{attrs:{href:"https://github.com/damiansf/spellmyname"}},[t._v("Spell My Name")]),t._v(" Fun little game to see if you can spell my name")]),a("li",[a("a",{attrs:{href:"https://github.com/damiansf/LunchPicker"}},[t._v("Lunch Picker")]),t._v(" Randomly selects a place to eat lunch based off data in a JSON file")])])}],d={name:"PortfolioNoAnimation",props:{prompt:String}},b=d,g=(a("a6f2"),Object(u["a"])(b,h,f,!1,null,"4a47a715",null)),v=g.exports,y={name:"app",components:{Portfolio:m,PortfolioNoAnimation:v},data:function(){return{skipAnimation:!1}}},_=y,w=(a("034f"),Object(u["a"])(_,i,r,!1,null,null,null)),k=w.exports,x=a("8cb8");o["a"].use(x["default"]),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(k)}}).$mount("#app")},5774:function(t,e,a){},"64a9":function(t,e,a){},7343:function(t,e,a){},"8a62":function(t,e,a){"use strict";var o=a("5774"),i=a.n(o);i.a},a6f2:function(t,e,a){"use strict";var o=a("7343"),i=a.n(o);i.a}});
//# sourceMappingURL=app.5a469ea3.js.map