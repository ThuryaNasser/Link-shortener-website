(this["webpackJsonplsw-project"]=this["webpackJsonplsw-project"]||[]).push([[0],{77:function(e,t,n){},78:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);n(72);var c=n(0),s=n.n(c),a=n(56),r=n.n(a),i=(n(77),n(78),n(10)),o=n(123),l=n(124),j=n(125),b=n(45),d=n.n(b),u=n(119),O=n(32),h=n(28),x=n(121),p=n(59),v=n.n(p),f=n(1),m=function(e){var t=e.setLongUrl,n=void 0===t?function(){}:t;return Object(f.jsx)("div",{className:"link-bar-style",children:Object(f.jsxs)("div",{className:"link-icon-wrapper",children:[Object(f.jsx)(v.a,{}),Object(f.jsx)(x.a,{className:"link-input-style",placeholder:"Paste your link here ",inputProps:{"aria-label":"url",className:"link-input-style"},onChange:function(e){n(e.target.value)}})]})})},y=n(120),g=n(63),N=n.n(g),k=n(118),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};fetch("https://api-ssl.bitly.com/v4/shorten",{method:"POST",headers:{Authorization:"Bearer bafc1e3be3aa6cf1be314eb910e6baca622be716","Content-Type":"application/json"},body:JSON.stringify({long_url:e,domain:"bit.ly"})}).then((function(e){return e.json()})).then((function(e){t(e.link)}))},U=function(e){var t=e.longUrl,n=void 0===t?"":t,c=e.setShortUrl,s=void 0===c?function(){}:c;return Object(f.jsx)(k.a,{direction:"row",className:"shortener-button",children:Object(f.jsx)(y.a,{variant:"contained",endIcon:Object(f.jsx)(N.a,{}),onClick:function(){S(n,s)},children:"SHORT"})})},w=n(65),C=n.n(w),T=n(66),P=n.n(T),I=n(126),J=n(64),L=function(e){var t=e.shortUrl,n=void 0===t?"":t,s=Object(c.useState)(!1),a=Object(i.a)(s,2),r=a[0],o=a[1];return Object(f.jsxs)("div",{className:"display-area",children:[Object(f.jsx)("div",{children:Object(f.jsx)(I.a,{elevation:3,className:"short-link",children:n})}),Object(f.jsx)("div",{children:n&&Object(f.jsx)(J.CopyToClipboard,{text:n,onCopy:function(){o(!0),setTimeout((function(){o(!1)}),1e3)},children:Object(f.jsx)(y.a,{variant:"contained",className:"copy-button",startIcon:r?Object(f.jsx)(C.a,{}):Object(f.jsx)(P.a,{}),children:"COPY"})})})]})},A=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(""),b=Object(i.a)(r,2),x=b[0],p=b[1],v=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(d.a,{sx:{color:u.a[500],p:.3}}),Object(f.jsx)(d.a,{sx:{color:O.a[300],p:.3}}),Object(f.jsx)(d.a,{sx:{color:h.a[500],p:.3}})]})};return Object(f.jsx)(o.a,{className:"box-style",children:Object(f.jsxs)("div",{className:"main-bar-style",children:[Object(f.jsxs)(l.a,{children:[Object(f.jsx)(v,{}),Object(f.jsx)(j.a,{variant:"h6",noWrap:!0,sx:{flexGrow:-1,display:{xs:"none",sm:"block"},mr:5,ml:3},children:"URL"}),Object(f.jsx)(m,{setLongUrl:a}),Object(f.jsx)(U,{longUrl:s,setShortUrl:p})]}),Object(f.jsx)(L,{shortUrl:x})]})})};n(87);var B=function(){return Object(f.jsx)("div",{className:"App bg-container",children:Object(f.jsx)(A,{})})};r.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(B,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.b4d5f5eb.chunk.js.map