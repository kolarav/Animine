(this.webpackJsonpanimine=this.webpackJsonpanimine||[]).push([[0],{12:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var c=t(1),i=t(6),a=t.n(i),r=t(2),s=t.n(r),o=t(5),u=t(3),l=(t(12),t(0)),d=Object(c.lazy)((function(){return t.e(4).then(t.bind(null,18))}));var b=function(){var e=Object(c.useState)([]),n=Object(u.a)(e,2),t=n[0],i=n[1],a=Object(c.useState)(1),r=Object(u.a)(a,2),b=r[0],j=r[1],h=Object(c.useState)("airing"),p=Object(u.a)(h,2),f=p[0],m=p[1],x=Object(c.useState)(!1),O=Object(u.a)(x,2),v=O[0],y=O[1],g=function(){var e=Object(o.a)(s.a.mark((function e(){var n,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===(n=document.getElementById("search-box").value)){e.next=6;break}return e.next=4,fetch(" https://api.jikan.moe/v3/search/anime?q=".concat(n,"/")).then((function(e){return e.json()})).then((function(e){return e}));case 4:t=e.sent,i(t.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(o.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("search-btn"===f){e.next=5;break}return e.next=3,fetch("https://api.jikan.moe/v3/top/anime/".concat(b,"/").concat(f)).then((function(e){return e.json()})).then((function(e){return e}));case 3:n=e.sent,i("airing"===f&&6===b?n.top.slice(0,40):n.top);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){document.getElementById("next").style.display="none",document.getElementById("previous").style.display="none",g()}),[v]),Object(c.useEffect)((function(){!function(){var e=document.getElementById("next");document.getElementById("previous").style.display=1===b||"search-btn"===f?"none":"block",e.style.display="airing"===f&&6===b||"search-btn"===f?"none":"block"}(),document.querySelectorAll(".navs").forEach((function(e){e.style.background="transparent"})),document.getElementById(f).style.background="#d1a6e7",k()}),[f,b]),Object(l.jsxs)("div",{className:"App",style:{flexDirection:"column",alignItems:"center"},children:[Object(l.jsxs)("div",{className:"topbar",children:[Object(l.jsx)("a",{href:"# ",id:"title",children:Object(l.jsx)("div",{style:{width:"100vw"},children:"ANIMINE "})}),Object(l.jsxs)("div",{className:"searching",id:" ",children:[Object(l.jsx)("input",{type:"text",placeholder:"search for an anime!",id:"search-box"}),Object(l.jsx)("button",{id:"search-btn",onClick:function(){m("search-btn"),y(!v)},children:"search"})]}),Object(l.jsxs)("div",{className:"navig",children:[Object(l.jsx)("button",{className:"navs",id:"airing",style:{backgroundColor:" #d1a6e7"},onClick:function(){m("airing"),j(1)},children:"Airing Now"}),Object(l.jsx)("button",{className:"navs",id:"upcoming",onClick:function(){m("upcoming"),j(1)},children:"Upcoming Anime"}),Object(l.jsx)("button",{className:"navs",id:"bypopularity",onClick:function(){m("bypopularity"),j(1)},children:"Most popular"})]})]}),Object(l.jsx)("div",{style:{flexDirection:"column",alignItems:"center"},children:Object(l.jsx)(c.Suspense,{fallback:Object(l.jsx)("h4",{children:"loading"}),children:Object(l.jsx)(d,{content:t})})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("a",{href:"# ",children:Object(l.jsx)("button",{className:"pages",id:"previous",onClick:function(){return j(b-1)},children:"Previous"})}),Object(l.jsx)("a",{href:"# ",children:Object(l.jsx)("button",{className:"pages",id:"next",onClick:function(){return j(b+1)},children:"Next"})})]})]})};a.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c72a8187.chunk.js.map