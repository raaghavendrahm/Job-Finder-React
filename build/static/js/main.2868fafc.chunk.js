(this["webpackJsonpjob-finder-react"]=this["webpackJsonpjob-finder-react"]||[]).push([[0],{24:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(16),r=a.n(s),i=(a(24),a(7)),l=a(2),o=a(19),u=a(6),j=a.n(u),b=a(8),d=a(3),p=a(0),h=function(e){var t=e.vacancy,a=e.deleteVacancy,n=e.applyVacancy;return Object(p.jsxs)("div",{className:"box mt-4 mb-4",children:[Object(p.jsx)("h1",{className:"title is-5",children:t.title}),Object(p.jsx)("span",{children:t.company}),Object(p.jsx)("p",{children:t.city}),Object(p.jsx)("div",{className:"block"}),Object(p.jsx)("p",{children:t.description}),Object(p.jsxs)("div",{className:"is-flex is-justify-content-space-between",children:[Object(p.jsx)("button",{className:"button is-primary mt-4",onClick:function(){return n(t)},children:"Apply"}),Object(p.jsx)("button",{className:"button is-danger mt-4",onClick:function(){return a(t.id)},children:"Delete"})]})]})},O=function(e){var t=e.addVacancy,a=Object(n.useState)(""),c=Object(d.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)(""),l=Object(d.a)(i,2),o=l[0],u=l[1],j=Object(n.useState)(""),b=Object(d.a)(j,2),h=b[0],O=b[1],x=Object(n.useState)(""),m=Object(d.a)(x,2),f=m[0],v=m[1];return Object(p.jsxs)("div",{className:"box",children:[Object(p.jsx)("h1",{className:"title is-5",children:"Create a Vacancy"}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({title:s,company:o,city:h,description:f}),r(""),u(""),O(""),v("")},children:[Object(p.jsx)("input",{className:"input",type:"text",placeholder:"Job Title",value:s,onChange:function(e){return r(e.target.value)},required:!0}),Object(p.jsx)("input",{className:"input",type:"text",placeholder:"Company Name",value:o,onChange:function(e){return u(e.target.value)},required:!0}),Object(p.jsx)("input",{className:"input",type:"text",placeholder:"City Name",value:h,onChange:function(e){return O(e.target.value)},required:!0}),Object(p.jsx)("textarea",{className:"input",type:"text",placeholder:"Description",value:f,onChange:function(e){return v(e.target.value)},required:!0}),Object(p.jsx)("button",{className:"button is-primary",children:"Create"})]})]})},x=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){var e=function(){var e=Object(b.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/vacancies");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var s=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/vacancies",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:s=e.sent,c([s].concat(Object(o.a)(a)));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/vacancies/".concat(t),{method:"DELETE"});case 2:c(a.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(e){window.alert("Successfully applied for the position ".concat(e.title))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("section",{className:"hero",children:Object(p.jsxs)("div",{className:"hero-body",children:[Object(p.jsx)("p",{className:"title",children:"Find your dream job today"}),Object(p.jsx)("p",{className:"subtitle",children:"Apply for any vacancies below"})]})}),Object(p.jsx)("section",{children:Object(p.jsx)(O,{addVacancy:s})}),Object(p.jsx)("section",{children:a.map((function(e){return Object(p.jsx)(h,{vacancy:e,deleteVacancy:r,applyVacancy:i},e.id)}))})]})},m=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){var e=function(){var e=Object(b.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/vacancies");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var s=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/vacancies/".concat(t),{method:"DELETE"});case 2:c(a.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=function(e){window.alert("Successfully applied for the position ".concat(e.title))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("section",{className:"hero",children:Object(p.jsxs)("div",{className:"hero-body",children:[Object(p.jsx)("p",{className:"title",children:"Find your dream job today"}),Object(p.jsx)("p",{className:"subtitle",children:"Apply for any vacancies below"})]})}),Object(p.jsx)("section",{children:a.map((function(e){return Object(p.jsx)(h,{vacancy:e,deleteVacancy:s,applyVacancy:r},e.id)}))})]})},f=function(){return Object(p.jsxs)("nav",{className:"navbar",role:"navigation","aria-label":"main navigation",children:[Object(p.jsxs)("div",{className:"navbar-brand",children:[Object(p.jsx)(i.b,{className:"navbar-item",to:"/",children:"JOB FINDER"}),Object(p.jsxs)("a",{role:"button",className:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",children:[Object(p.jsx)("span",{"aria-hidden":"true"}),Object(p.jsx)("span",{"aria-hidden":"true"}),Object(p.jsx)("span",{"aria-hidden":"true"})]})]}),Object(p.jsxs)("div",{id:"navbarBasicExample",className:"navbar-menu",children:[Object(p.jsxs)("div",{className:"navbar-start",children:[Object(p.jsx)(i.b,{to:"/",className:"navbar-item",children:"Home"}),Object(p.jsx)(i.b,{to:"/jobs",className:"navbar-item",children:"Jobs"})]}),Object(p.jsx)("div",{className:"navbar-end",children:Object(p.jsx)("div",{className:"navbar-item",children:Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)(i.b,{to:"/signup",className:"button is-primary",children:Object(p.jsx)("strong",{children:"Sign up"})}),Object(p.jsx)(i.b,{to:"/login",className:"button is-light",children:"Log in"})]})})})]})]})},v=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(d.a)(s,2),i=r[0],l=r[1],o=Object(n.useState)(""),u=Object(d.a)(o,2),j=u[0],b=u[1],h=Object(n.useState)(""),O=Object(d.a)(h,2),x=O[0],m=O[1];return Object(p.jsxs)("div",{className:"sign-up",children:[Object(p.jsx)("h1",{className:"title is-5",children:"Sign Up"}),Object(p.jsxs)("form",{children:[Object(p.jsx)("input",{className:"input",type:"text",placeholder:"Name",required:!0,value:a,onChange:function(e){return c(e.target.value)}}),Object(p.jsx)("input",{className:"input",type:"email",placeholder:"Email Id",required:!0,value:i,onChange:function(e){return l(e.target.value)}}),Object(p.jsx)("input",{className:"input",type:"password",placeholder:"Password",required:!0,value:j,onChange:function(e){return b(e.target.value)}}),Object(p.jsx)("input",{className:"input",type:"password",placeholder:"Confirm Password",required:!0,value:x,onChange:function(e){return m(e.target.value)}}),Object(p.jsx)("button",{className:"button is-primary",onClick:function(e){e.preventDefault(),a&&i&&j&&x?a&&i&&j&&x&&alert("Signed Up Successfully!"):alert("Please fill all the fields"),c(""),l(""),b(""),m("")},children:"Sign Up"})]})]})},y=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(d.a)(s,2),i=r[0],l=r[1];return Object(p.jsx)("div",{className:"log-in",children:Object(p.jsxs)("form",{children:[Object(p.jsx)("input",{className:"input",type:"email",placeholder:"Email Id",required:!0,value:a,onChange:function(e){return c(e.target.value)}}),Object(p.jsx)("input",{className:"input",type:"password",placeholder:"Password",required:!0,value:i,onChange:function(e){return l(e.target.value)}}),Object(p.jsx)("button",{className:"button is-primary",onClick:function(e){e.preventDefault(),a&&i?a&&i&&alert("Logged In Successfully!"):alert("Please enter email and password"),c(""),l("")},children:"Log In"})]})})};var N=function(){return Object(p.jsx)("div",{className:"App container",children:Object(p.jsxs)(i.a,{children:[Object(p.jsx)(f,{}),Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{path:"/",component:x,exact:!0}),Object(p.jsx)(l.a,{path:"/jobs",component:m,exact:!0}),Object(p.jsx)(l.a,{path:"/signup",component:v,exact:!0}),Object(p.jsx)(l.a,{path:"/login",component:y,exact:!0})]})]})})};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.2868fafc.chunk.js.map