(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{15:function(t,e,n){t.exports=n(38)},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(13),c=n.n(r),u=n(14),i=n(2),l=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return o.a.createElement("li",{className:"note"},e.content,o.a.createElement("button",{onClick:n},a))},m=function(t){var e=t.message;return null===e?null:o.a.createElement("div",{className:"error"},e)},s=n(3),f=n.n(s),p=function(){var t=f.a.get("/api/notes"),e={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(e)}))},d=function(t){return f.a.post("/api/notes",t).then((function(t){return t.data}))},v=function(t,e){return f.a.put("".concat("/api/notes","/").concat(t),e).then((function(t){return t.data}))},h=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),f=s[0],h=s[1],b=Object(a.useState)(!0),E=Object(i.a)(b,2),g=E[0],O=E[1],j=Object(a.useState)(null),k=Object(i.a)(j,2),S=k[0],w=k[1];Object(a.useEffect)((function(){p().then((function(t){r(t)}))}),[]);var y=g?n:n.filter((function(t){return t.important}));return o.a.createElement("div",null,o.a.createElement("h1",null,"Notes"),o.a.createElement(m,{message:S}),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return O(!g)}},"show ",g?"important":"all")),o.a.createElement("ul",null,y.map((function(t,e){return o.a.createElement(l,{key:e,note:t,toggleImportance:function(){return function(t){"http://localhost:3001/notes/".concat(t);var e=n.find((function(e){return e.id===t})),a=Object(u.a)({},e,{important:!e.important});v(t,a).then((function(e){r(n.map((function(n){return n.id!==t?n:e})))})).catch((function(t){w("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){w(null)}),5e3)}))}(t.id)}})}))),o.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:f,date:(new Date).toISOString(),important:Math.random()>.5,id:n.length+1};d(e).then((function(t){r(n.concat(t)),h("")}))}},o.a.createElement("input",{value:f,onChange:function(t){h(t.target.value)}}),o.a.createElement("button",{type:"submit"},"save")))};n(37);c.a.render(o.a.createElement(h,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.68329b03.chunk.js.map