(this.webpackJsonprobofrens=this.webpackJsonprobofrens||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(3),a=n.n(s),i=(n(12),n(4)),o=n(5),h=n(7),l=n(6),b=n(0),d=function(e){var t=e.name,n=e.email,r=e.id;return Object(b.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{alt:"robot",src:"https:robohash.org/".concat(r,"?100x100")}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("p",{children:n})]})]})},j=function(e){var t=e.robots,n=t.map((function(e,n){return Object(b.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},n)}));return Object(b.jsx)("div",{children:n})},u=function(e){e.searchfield;var t=e.searchChange;return Object(b.jsx)("div",{children:Object(b.jsx)("input",{className:"tc i f4 pa2 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Bots...",onChange:t})})},f=function(e){return Object(b.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})},g=(n(14),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return 0===t.length?Object(b.jsx)("h1",{className:"tc white f1",children:"Please Wait While Loading..."}):Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"mb1 f1 lightest-blue",children:"RoboFrenz"}),Object(b.jsx)("div",{className:"mh7",children:Object(b.jsxs)("a",{className:"light-green",href:"https://github.com/lurdslurv",target:"_blank",rel:"noreferrer",children:[Object(b.jsx)("h3",{children:"Made with and by Lurv\ud83d\ude18\ud83d\ude18\ud83d\ude18"})," "]})}),Object(b.jsx)(u,{searchChange:this.onSearchChange}),Object(b.jsx)(f,{children:Object(b.jsx)(j,{robots:r})})]})}}]),n}(r.Component)),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};n(15);a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.f46e042d.chunk.js.map