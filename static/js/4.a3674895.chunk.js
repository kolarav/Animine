(this.webpackJsonpanimine=this.webpackJsonpanimine||[]).push([[4],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var i=n(2),s=n(1),c=(n(15),n(0));var r=function(e){var t=e.episodes;return null===t&&(t="Not fixed"),!1===e.got?Object(c.jsxs)("div",{style:{flexDirection:"column",alignItems:"center",marginTop:"30px",textAlign:"center"},children:[Object(c.jsx)("h1",{style:{paddingBottom:"10px"},children:"loading data"}),Object(c.jsx)("h3",{children:"taking too long ?"}),Object(c.jsx)("h3",{children:"we might not have the data"}),Object(c.jsx)("h2",{children:"sorry buddy!"})]}):Object(c.jsxs)("div",{style:{flexDirection:"column",marginTop:"40px",overflowX:"hidden",alignItems:"center"},className:"holder",children:[Object(c.jsxs)("div",{className:"upper",children:[Object(c.jsx)("img",{src:e.poster,alt:"loading",id:"poster"}),Object(c.jsxs)("div",{className:"information",style:{flexDirection:"column"},children:[Object(c.jsxs)("h4",{children:["Ranking : ",e.rank]}),Object(c.jsxs)("h4",{children:["Rating: ",e.rating]}),Object(c.jsxs)("h4",{children:["Title: ",e.title]}),Object(c.jsxs)("h4",{children:["Status: ",e.status]}),Object(c.jsxs)("h4",{children:["Epiosodes: ",t]}),Object(c.jsxs)("h4",{children:["Premiered: ",e.premiered]})]})]}),Object(c.jsxs)("div",{className:"lower",children:[Object(c.jsx)("h2",{style:{paddingBottom:"20px"},children:"Synopsis :"}),e.synopsis]}),Object(c.jsx)("div",{className:"trailer",children:Object(c.jsx)("iframe",{width:"85%",height:"auto",src:e.trailer,title:"trailer",allowFullScreen:!0,style:{borderRadius:"15px",outline:"none",border:"none"}})})]})},l=Object(s.lazy)((function(){return n.e(3).then(n.bind(null,17))}));t.default=function(e){var t=e.content,n=Object(s.useState)(""),a=Object(i.a)(n,2),o=a[0],d=a[1],j=Object(s.useState)([]),h=Object(i.a)(j,2),u=h[0],b=h[1],m=Object(s.useState)(!1),p=Object(i.a)(m,2),x=p[0],O=p[1];return Object(s.useEffect)((function(){""!==o&&fetch("https://api.jikan.moe/v3/anime/".concat(o)).then((function(e){return e.json()})).then((function(e){return b(e),O(!0),u})).then((function(){document.getElementById("detailed-page").style.top="42px",document.getElementById("main-content").style.overflowY="hidden",d("")}))}),[o]),Object(c.jsxs)("div",{children:[Object(c.jsx)(s.Suspense,{fallback:Object(c.jsx)("h4",{children:"loading"}),children:Object(c.jsx)("div",{className:"content",id:"main-content",style:{flexWrap:"wrap",justifyContent:"center",width:"98%",maxWidth:"1100px",paddingBottom:"50px"},children:t.map((function(e){return Object(c.jsx)("button",{className:"card-btn",style:{width:"fit-content",height:"fit-content",background:"transparent",margin:"15px 10px"},onClick:function(){O(!1),d(e.mal_id)},children:Object(c.jsx)(l,{title:e.title,poster:e.image_url,rating:e.score},e.mal_id)},e.mal_id)}))})}),Object(c.jsxs)("div",{id:"detailed-page",children:[Object(c.jsx)("button",{id:"close-btn",onClick:function(){document.getElementById("detailed-page").style.top="100vh",document.getElementById("main-content").style.overflowY="auto"},children:"close"}),Object(c.jsx)("div",{children:Object(c.jsx)(r,{got:x,title:u.title,rank:u.rank,poster:u.image_url,rating:u.score,synopsis:u.synopsis,status:u.status,episodes:u.episodes,premiered:u.premiered,trailer:u.trailer_url},u.mal_id)})]})]})}}}]);
//# sourceMappingURL=4.a3674895.chunk.js.map