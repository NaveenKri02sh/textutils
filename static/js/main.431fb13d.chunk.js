(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(4),l=c.n(s),o=(c(9),c(2)),r=(c(10),c(0));function i(e){var t=Object(a.useState)(""),c=Object(o.a)(t,2),n=c[0],s=c[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(r.jsx)("h1",{children:"Enter The text below"}),Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)("textarea",{className:"form-control",value:n,style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"},onChange:function(e){console.log("on change"),s(e.target.value)},id:"box-area",rows:8})}),Object(r.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"primary":"danger"," mx-3"),onClick:function(){var t=n.toUpperCase();s(t),e.showAlert("Coverted to Upper Case","success")},children:"Update to UpperCase"}),Object(r.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"primary":"danger"," mx-3"),onClick:function(){var t=n.toLowerCase();s(t),e.showAlert("Coverted to Lower Case","success")},children:"Update to LowerCase"}),Object(r.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"primary":"danger"," mx-3"),onClick:function(){var t=n.split("").reverse().join("");s(t),e.showAlert("Coverted to Reverse","success")},children:"Convert to Resverse text"}),Object(r.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"primary":"danger"," mx-3"),onClick:function(){0!==n.length&&(s(""),e.showAlert("Text is cleared !!!!","success"))},children:"Clear text"})]}),Object(r.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(r.jsx)("h1",{children:"Your Suummary"}),Object(r.jsxs)("p",{children:[0===n.length?0:n.trim().replace(/  +/g," ").split(" ").length," word and ",n.length," Characters"]}),Object(r.jsxs)("p",{children:[.008*n.length," Miniutes Read"]}),Object(r.jsx)("h3",{children:"Preview"}),Object(r.jsx)("p",{children:n.length>0?n:"Enter something in above text boxs to Preview"})]})]})}function d(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(r.jsxs)("div",{className:"form-check form-switch mx-3 text-".concat("light"===e.mode?"dark":"light"),children:[Object(r.jsx)("input",{className:"form-check-input",onClick:e.toggleGreenMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Green Mode"})]}),Object(r.jsxs)("div",{className:"form-check form-switch mx-3 text-".concat("light"===e.mode?"dark":"light"),children:[Object(r.jsx)("input",{className:"form-check-input",onClick:e.toggleRedMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable red Mode"})]}),Object(r.jsxs)("div",{className:"form-check form-switch mx-3 text-".concat("light"===e.mode?"dark":"light"),children:[Object(r.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(r.jsx)("label",{className:"form-check-label ",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function b(e){return e.alert&&Object(r.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[e.alert.type," : ",Object(r.jsx)("strong",{children:e.alert.message})]})}var h=function(){var e=Object(a.useState)("light"),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(null),l=Object(o.a)(s,2),h=l[0],m=l[1],u=function(e,t){m({message:e,type:t}),setTimeout((function(){m(null)}),3e3)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{title:"TextUtils",mode:c,toggleMode:function(){"light"===c?(document.body.style.backgroundColor="#042743",n("dark"),u("Dark Mode has been enabled","success")):(document.body.style.backgroundColor="white",n("light"),u("Light Mode has been enabled","success"))},toggleGreenMode:function(){"light"===c?(document.body.style.backgroundColor="#004e02",n("dark"),u("Green Mode has been enabled","success")):(document.body.style.backgroundColor="white",n("light"),u("Light Mode has been enabled","success"))},toggleRedMode:function(){"light"===c?(document.body.style.backgroundColor="#4c1217",n("dark"),u("Red Mode has been enabled","success")):(document.body.style.backgroundColor="white",n("light"),u("Light Mode has been enabled","success"))}}),Object(r.jsx)(b,{alert:h}),Object(r.jsx)(i,{mode:c,showAlert:u})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),a(e),n(e),s(e),l(e)}))};l.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root")),m()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.431fb13d.chunk.js.map