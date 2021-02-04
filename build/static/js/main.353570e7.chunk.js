(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{134:function(e,t,n){},135:function(e,t,n){"use strict";n.r(t);var r,c=n(3),a=n(1),u=n.n(a),s=n(17),o=n.n(s),i=n(26),l=n(8),b=n(65),j=n(44),d=n(6),f=n(28),p=n(49),h=n.n(p),O=n(21),m=n(15),x=n(14),v=Object(d.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingAuth:!1,error:!1},extraReducers:(r={},Object(x.a)(r,m.d.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.error=!1,e.isLoggedIn=!0})),Object(x.a)(r,m.b.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.error=!1,e.isLoggedIn=!0})),Object(x.a)(r,m.c.fulfilled,(function(e,t){e.user={name:null,email:null},e.token=null,e.error=!1,e.isLoggedIn=!1})),Object(x.a)(r,m.a.pending,(function(e,t){e.isFetchingAuth=!0})),Object(x.a)(r,m.a.fulfilled,(function(e,t){e.user=t.payload,e.error=!1,e.isLoggedIn=!0,e.isFetchingAuth=!1})),Object(x.a)(r,m.d.rejected,(function(e,t){e.error=!0})),Object(x.a)(r,m.b.rejected,(function(e,t){e.error=!0})),Object(x.a)(r,m.c.rejected,(function(e,t){e.error=!0})),Object(x.a)(r,m.a.rejected,(function(e,t){e.isFetchingAuth=!1})),r)}).reducer,g=n(20),k=Object(j.a)(Object(d.f)({serializableCheck:{ignoredActions:[f.a,f.f,f.b,f.c,f.d,f.e]}})),w={key:"auth",storage:h.a,whitelist:["token"]},y={key:"phoneBook",storage:h.a,whitelist:["token"]},N=Object(d.a)({reducer:{auth:Object(f.g)(w,v),phoneBook:Object(f.g)(y,O.c)},middleware:k,devTools:!1}),C=Object(f.h)(N),F=n(11),L=n(34),B=n(22),A=n(53),z=n.n(A),I=n(151),S=(n(131),Object(a.lazy)((function(){return n.e(1).then(n.bind(null,156))}))),T=Object(a.lazy)((function(){return n.e(4).then(n.bind(null,159))})),P=Object(a.lazy)((function(){return n.e(2).then(n.bind(null,157))})),R=Object(a.lazy)((function(){return n.e(0).then(n.bind(null,158))})),V=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,160))})),E=function(){var e=Object(l.c)(g.c),t=Object(l.c)(g.b),n=Object(l.b)();return Object(a.useEffect)((function(){n(Object(m.a)())}),[n]),Object(c.jsxs)("div",{className:"App container",children:[Object(c.jsx)(B.a,{autoClose:2e3}),Object(c.jsx)(L.d,{}),Object(c.jsxs)("div",{className:"viewContainer",children:[e&&Object(c.jsx)(z.a,{type:"Circles",color:"#00BFFF",height:80,width:80}),t&&Object(c.jsx)("div",{children:'"Something was wrong"'}),!e&&!t&&Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(z.a,{type:"Circles",color:"#00BFFF",height:80,width:80}),children:Object(c.jsxs)(F.d,{children:[Object(c.jsx)(L.f,{path:"/",exact:!0,children:Object(c.jsx)(S,{})}),Object(c.jsx)(L.f,{path:"/register",exact:!0,restricted:!0,children:Object(c.jsx)(T,{})}),Object(c.jsx)(L.f,{path:"/login",exact:!0,restricted:!0,children:Object(c.jsx)(P,{})}),Object(c.jsx)(L.e,{path:"/contacts",redirectTo:"/login",children:Object(c.jsx)(R,{})}),Object(c.jsx)(L.f,{children:Object(c.jsx)(V,{})})]})})]}),Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsx)(I.a,{className:"copyRigths",style:{fontSize:16}})," Created by RV | 2021"]})]})};n(132),n(133),n(134);o.a.render(Object(c.jsx)(u.a.StrictMode,{children:Object(c.jsx)(l.a,{store:N,children:Object(c.jsx)(b.a,{loading:null,persistor:C,children:Object(c.jsx)(i.a,{children:Object(c.jsx)(E,{})})})})}),document.getElementById("root"))},15:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return b}));var r=n(5),c=n.n(r),a=n(13),u=n(6),s=n(30),o=Object(u.c)("auth/register",function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.g)(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),i=Object(u.c)("auth/login",function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.e)(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),l=Object(u.c)("auth/logout",Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.f)();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),b=Object(u.c)("auth/checkCurrent",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState(),a=r.auth.token){e.next=4;break}return e.abrupt("return",n.rejectWithValue());case 4:return e.next=6,Object(s.b)(a);case 6:return u=e.sent,e.abrupt("return",u);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return u}));var r=function(e){return e.auth.isLoggedIn},c=function(e){return e.auth.user.name},a=function(e){return e.auth.isFetchingAuth},u=function(e){return e.auth.error}},21:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return a}));var r={};n.r(r),n.d(r,"changeFilter",(function(){return o}));var c={};n.r(c),n.d(c,"fetchContacts",(function(){return d})),n.d(c,"addContacts",(function(){return f})),n.d(c,"deleteContacts",(function(){return p}));var a={};n.r(a),n.d(a,"getContacts",(function(){return k})),n.d(a,"getFilter",(function(){return w})),n.d(a,"getVisibleContacts",(function(){return y}));var u,s=n(6),o=Object(s.b)("phoneBook/filter"),i=n(5),l=n.n(i),b=n(13),j=n(30),d=Object(s.c)("phoneBook/fetchContacts",Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.d)();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),f=Object(s.c)("phoneBook/add",function(){var e=Object(b.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.a)(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=Object(s.c)("phoneBook/delete",function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.c)(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),h=n(14),O=n(44),m=n(16),x=Object(s.d)([],(u={},Object(h.a)(u,d.fulfilled,(function(e,t){return t.payload})),Object(h.a)(u,f.fulfilled,(function(e,t){return[].concat(Object(O.a)(e),[t.payload])})),Object(h.a)(u,p.fulfilled,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),u)),v=Object(s.d)("",Object(h.a)({},o,(function(e,t){return t.payload}))),g=Object(m.c)({contacts:x,filter:v}),k=function(e){return e.phoneBook.contacts},w=function(e){return e.phoneBook.filter},y=function(e){var t=k(e),n=w(e);return t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))}},30:function(e,t,n){"use strict";n.d(t,"g",(function(){return j})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return f})),n.d(t,"b",(function(){return p})),n.d(t,"d",(function(){return h})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return v}));var r=n(5),c=n.n(r),a=n(13),u=n(6),s=n(27),o=n.n(s),i=n(22);o.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var l=function(e){o.a.defaults.headers.common.Authorization="Bearer ".concat(e)},b=function(){o.a.defaults.headers.common.Authorization=""},j=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post("/users/signup",t);case 3:return n=e.sent,r=n.data,l(r.token),e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(0),i.b.error("Registration error. ".concat(e.t0.message)),e.abrupt("return",new Promise(u.g));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post("/users/login",t);case 3:return n=e.sent,r=n.data,l(r.token),e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(0),i.b.error("Login error. ".concat(e.t0.message)),e.abrupt("return",new Promise(u.g));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post("/users/logout");case 3:b(),e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),i.b.error("Logout error. ".concat(e.t0.message)),e.abrupt("return",new Promise(u.g));case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(t),e.prev=1,e.next=4,o.a.get("/users/current");case 4:return n=e.sent,r=n.data,e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(1),i.b.error("CheckCurrent error. ".concat(e.t0.message)),e.abrupt("return",new Promise(u.g));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();function h(){return O.apply(this,arguments)}function O(){return(O=Object(a.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("/contacts");case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),i.b.error("Getting Contacts error. ".concat(e.t0.message)),e.abrupt("return",new Promise(u.g));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post("/contacts",t);case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(0),i.b.error("Adding new contact error. ".concat(e.t0.message)),e.abrupt("return",new Promise(u.g));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return(g=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.delete("/contacts/".concat(t));case 3:return e.abrupt("return",t);case 6:return e.prev=6,e.t0=e.catch(0),i.b.error("Deleting contact error. ".concat(e.t0.message)),e.abrupt("return",new Promise(u.g));case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}},34:function(e,t,n){"use strict";n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return p})),n.d(t,"f",(function(){return h})),n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return N}));var r=n(3),c=n(8),a=n(26),u=n(20),s=n(15),o=n(152),i=n(150),l=n(52),b=function(){var e=Object(c.c)((function(e){return Object(u.a)(e)})),t=Object(c.c)((function(e){return Object(u.d)(e)})),n=Object(c.b)();return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("nav",{className:"navBar container",children:[Object(r.jsx)(a.b,{to:"/",className:"logo",children:Object(r.jsx)("div",{className:"navLogoBackground",children:Object(r.jsx)(i.a,{className:"logo",style:{fontSize:25}})})}),Object(r.jsx)(a.b,{to:"/",exact:!0,className:"link",activeClassName:"activeLink",children:"Home"}),e?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(a.b,{to:"/contacts",className:"link",activeClassName:"activeLink",children:"PhoneBook"}),Object(r.jsxs)("span",{className:"authBar",children:[Object(r.jsx)(l.b,{className:"avatar",style:{fontSize:25}}),Object(r.jsxs)("span",{className:"greeting",children:["Welcome ",Object(r.jsx)("span",{className:"userName",children:t})]}),Object(r.jsxs)(o.a,{color:"primary",variant:"contained",type:"button",onClick:function(){return n(Object(s.c)())},children:["Log out",Object(r.jsx)(l.a,{style:{marginLeft:10}})]})]})]}):Object(r.jsxs)("span",{className:"authBar",children:[Object(r.jsx)(a.b,{to:"/register",exact:!0,className:"link",activeClassName:"activeLink",children:"Register"}),Object(r.jsx)(a.b,{to:"/login",className:"link",activeClassName:"activeLink",children:"Login"})]})]})})},j=n(37),d=n(45),f=n(11),p=function(e){var t=e.children,n=e.redirectTo,a=void 0===n?"/":n,s=Object(d.a)(e,["children","redirectTo"]),o=Object(c.c)((function(e){return Object(u.a)(e)}));return Object(r.jsx)(f.b,Object(j.a)(Object(j.a)({},s),{},{children:o?t:Object(r.jsx)(f.a,{to:a})}))},h=function(e){var t=e.children,n=e.restricted,a=void 0!==n&&n,s=e.redirectTo,o=void 0===s?"/":s,i=Object(d.a)(e,["children","restricted","redirectTo"]),l=Object(c.c)((function(e){return Object(u.a)(e)}));return Object(r.jsx)(f.b,Object(j.a)(Object(j.a)({},i),{},{children:l&&a?Object(r.jsx)(f.a,{to:o}):t}))},O=n(47),m=n(1),x=n(21),v=n(22),g=function(){var e=Object(m.useState)(""),t=Object(O.a)(e,2),n=t[0],a=t[1],u=Object(m.useState)(""),s=Object(O.a)(u,2),o=s[0],i=s[1],l=Object(c.c)((function(e){return x.d.getContacts(e)})),b=Object(c.b)(),j=function(e,t){return e.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))},d=function(e){var t=e.target,n=t.name,r=t.value;return"name"===n?a(r):i(r)},f=function(){a(""),i("")};return Object(r.jsxs)("form",{className:"subForm",onSubmit:function(e){e.preventDefault(),j(l,n)?v.b.error("".concat(n," is already in contacts.")):(b(x.b.addContacts({name:n,number:o})),f())},children:[Object(r.jsx)("h2",{className:"subFormTitle",children:"Add new contacts:"}),Object(r.jsxs)("label",{className:"subFormLabel",children:[Object(r.jsx)("span",{className:"subFormLabelTitle",children:"Name:"}),Object(r.jsx)("input",{className:"subFormInput",type:"text",onChange:d,value:n,name:"name",placeholder:"input name",required:!0})]}),Object(r.jsxs)("label",{className:"subFormLabel",children:[Object(r.jsx)("span",{className:"subFormLabelTitle",children:"Phone:"}),Object(r.jsx)("input",{className:"subFormInput",type:"text",onChange:d,value:o,name:"number",placeholder:"input phone number",required:!0})]}),Object(r.jsx)("button",{type:"submit",className:"addBtn",children:"Add"})]})},k=n(69),w=n(70),y=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return x.d.getVisibleContacts(e)}));return Object(m.useEffect)((function(){return e(x.b.fetchContacts())}),[e]),Object(r.jsx)("ul",{className:"contacsList",children:t.map((function(t){var n=t.id,c=t.name,a=t.number;return Object(r.jsxs)("li",{className:"contactItem",children:[Object(r.jsx)(k.a,{className:"box1"}),Object(r.jsx)("span",{className:"contactName box2",children:c}),Object(r.jsx)("span",{className:"contactNumber box3",children:a}),Object(r.jsx)("button",{type:"button",className:"closeBtn box4",onClick:function(){return e(x.b.deleteContacts(n))},children:Object(r.jsx)(w.a,{})})]},n)}))})},N=function(){var e=Object(c.c)((function(e){return x.d.getFilter(e)})),t=Object(c.b)();return Object(r.jsxs)("div",{className:"subForm",children:[Object(r.jsx)("h2",{className:"subFormTitle",children:"Find contacts:"}),Object(r.jsxs)("label",{className:"subFormLabel",children:[Object(r.jsx)("span",{className:"subFormLabelTitle",children:"find:"}),Object(r.jsx)("input",{className:"subFormInput",type:"text",onChange:function(e){return t(x.a.changeFilter(e.target.value))},value:e,name:"filter",placeholder:"input name"})]})]})}}},[[135,5,7]]]);
//# sourceMappingURL=main.353570e7.chunk.js.map