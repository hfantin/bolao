(this["webpackJsonpbolao-front"]=this["webpackJsonpbolao-front"]||[]).push([[0],{53:function(e,t,a){e.exports=a(68)},58:function(e,t,a){},59:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),c=a.n(l),o=(a(58),a(59),a(60),a(15)),u=a(5),s=a(71),i=a(74),m=a(72),b=a(73),d=a(17),E=a(18),f=a(32),j=a(12),p=a(25),h=a(33),O=a(36),g=a.n(O),v=a(45),k=function(){function e(){Object(d.a)(this,e)}return Object(E.a)(e,[{key:"execute",value:function(){var e=Object(v.a)(g.a.mark((function e(t,a,n){var r,l;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return r=e.sent,e.next=6,r.json();case 6:l=e.sent,a(l),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),n(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a,n){return e.apply(this,arguments)}}()}]),e}(),y=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(E.a)(t,[{key:"listar",value:function(e,a,n,r){return Object(p.a)(Object(j.a)(t.prototype),"execute",this).call(this,"/numeros/".concat(e,"/jogos/").concat(a),n,r)}}]),t}(k),w=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(E.a)(t,[{key:"listar",value:function(e,a){return Object(p.a)(Object(j.a)(t.prototype),"execute",this).call(this,"/resultados",e,a)}},{key:"getUltimo",value:function(e,a){return Object(p.a)(Object(j.a)(t.prototype),"execute",this).call(this,"/resultados/ultimo",e,a)}}]),t}(k),x=a(78),z=a(70),C=function(e){var t=e.loading,a=e.jogo,l=e.data,c=e.dezenas,o=Object(n.useState)(!0),s=Object(u.a)(o,2),i=s[0],m=s[1];return Object(n.useEffect)((function(){m(t)}),[t]),r.a.createElement(x.a,null,r.a.createElement(x.a.Header,null,"Concurso ",a," realizado em ",l),r.a.createElement(x.a.Body,null,i?r.a.createElement(z.a,{animation:"border"}):a?r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a.Text,null,c.join(", "))):null))},S=a(77),N=function(e){var t=e.show,a=e.message,l=e.type,c=Object(n.useState)(!0),o=Object(u.a)(c,2),s=o[0],i=o[1];return Object(n.useEffect)((function(){i(t)}),[t]),s?r.a.createElement(S.a,{variant:l,onClose:function(){return i(!1)},dismissible:!0},a):null};N.defaultProps={message:"",type:"danger"};var B=N,D=function(){var e=Object(n.useState)(1),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(1),o=Object(u.a)(c,2),d=o[0],E=o[1],f=Object(n.useState)([]),j=Object(u.a)(f,2),p=j[0],h=j[1],O=Object(n.useState)(""),g=Object(u.a)(O,2),v=g[0],k=g[1],x=Object(n.useState)(!0),z=Object(u.a)(x,2),S=z[0],N=z[1],D=Object(n.useState)({jogo:0,data:"",dezenas:[]}),F=Object(u.a)(D,2),G=F[0],I=F[1],J=new y,L=new w;Object(n.useEffect)((function(){L.getUltimo((function(e){return q(e)}),(function(e){return T(e)}))}),[]);var q=function(e){I(e),N(!1)},T=function(e){k("N\xe3o foi poss\xedvel obter o ultimo resultado: ".concat(e)),N(!1)};return r.a.createElement(s.a,null,r.a.createElement("br",null),r.a.createElement(B,{show:""!==v,message:v}),r.a.createElement("br",null),r.a.createElement(C,{loading:S,jogo:G.jogo,data:G.data,dezenas:G.dezenas}),r.a.createElement("br",null),r.a.createElement(i.a,null,r.a.createElement(i.a.Group,{controlId:"dezenas"},r.a.createElement(i.a.Label,null,"Quantidade de dezenas"),r.a.createElement(i.a.Control,{type:"number",placeholder:"",max:"13",min:"1",defaultValue:"1",onChange:function(e){return E(Number(e.target.value))},required:!0})),r.a.createElement(i.a.Group,{controlId:"jogos"},r.a.createElement(i.a.Label,null,"N\xfamero de jogos"),r.a.createElement(i.a.Control,{type:"number",placeholder:"",max:"100",min:"1",defaultValue:"1",onChange:function(e){return l(Number(e.target.value))},required:!0})),r.a.createElement(m.a,{variant:"dark",type:"submit",block:!0,onClick:function(e){e.preventDefault(),k(""),J.listar(d,a,(function(e){return h(e)}),(function(e){return k("N\xe3o foi poss\xedvel gerar as dezenas: ".concat(e))}))}},"Gerar Dezenas")),r.a.createElement("br",null),r.a.createElement(b.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Jogo"),r.a.createElement("th",null,"Dezenas"))),r.a.createElement("tbody",null,p.map((function(e){return r.a.createElement("tr",{key:e.jogo},r.a.createElement("td",null,e.jogo),r.a.createElement("td",null,e.numeros.join(", ")))})))))},F=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),o=Object(u.a)(c,2),i=o[0],m=o[1],d=Object(n.useState)(""),E=Object(u.a)(d,2),f=E[0],j=E[1],p=new w;Object(n.useEffect)((function(){m(!0),p.listar((function(e){return h(e)}),(function(e){return O(e)}))}),[]);var h=function(e){m(!1),l(e)},O=function(e){m(!1),j("Falha ao listar resultados: ".concat(e))};return i?r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement(z.a,{animation:"border"})):r.a.createElement(s.a,null,r.a.createElement("br",null),r.a.createElement(B,{show:""!==f,message:f}),r.a.createElement(b.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Jogo"),r.a.createElement("th",null,"Data"),r.a.createElement("th",null,"Dezenas"),r.a.createElement("th",null,"Ganhadores"))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.jogo),r.a.createElement("td",null,e.data),r.a.createElement("td",null,e.dezenas.join(", ")),r.a.createElement("td",null,e.ganhadores))})))))},G=a(76),I=a(75),J=a(20),L=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{bg:"dark",expand:"lg",variant:"dark",expanded:a},r.a.createElement(G.a.Brand,{as:J.a,to:"/",onClick:function(){return l(!1)}},"Bol\xe3o"),r.a.createElement(G.a.Toggle,{"aria-controls":"basic-navbar-nav",onClick:function(){return l(!a)}}),r.a.createElement(G.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(I.a,{className:"mr-auto"},r.a.createElement(I.a.Link,{as:J.a,to:"/",onClick:function(){return l(!1)}},"In\xedcio"),r.a.createElement(I.a.Link,{as:J.a,to:"/res",onClick:function(){return l(!1)}},"Resultados")))))};var q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(L,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:D}),r.a.createElement(o.b,{exact:!0,path:"/res",component:F}),r.a.createElement(o.b,{render:function(){return r.a.createElement("p",null,"N\xe3o encontrado")}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.9bc71839.chunk.js.map