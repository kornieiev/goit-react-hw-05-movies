"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[458],{289:function(n,t,e){e.r(t),e.d(t,{default:function(){return I}});var r,i,a,c,o=e(861),s=e(439),u=e(757),p=e.n(u),l=e(791),f=e(689),h=e.p+"static/media/stub_little.dbd0255890252a0cfa91.jpg",d=e(168),x=e(867),m=x.ZP.ul(r||(r=(0,d.Z)(["\n  display: grid;\n  grid-template-columns: 200px 200px 200px 200px 200px;\n  justify-content: center;\n"]))),g=x.ZP.li(i||(i=(0,d.Z)(["\n  list-style: none;\n  border: 0.5px solid lightgrey;\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 10px;\n"]))),v=x.ZP.img(a||(a=(0,d.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),Z=x.ZP.p(c||(c=(0,d.Z)(["\n  margin: 0;\n  padding: 3px;\n  font-family: 'DM Sans', sans-serif;\n  font-family: 'Nunito Sans', sans-serif;\n  font-size: 14px;\n"]))),j=e(966),w=function(){var n=(0,o.Z)(p().mark((function n(t){var e,r;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),j.Z);case 3:return e=n.sent,n.next=6,e.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:throw n.prev=10,n.t0=n.catch(0),console.error("Error fetching data:",n.t0),n.t0;case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(t){return n.apply(this,arguments)}}(),y=e(184);function I(){var n=(0,f.UO)(),t=(0,l.useState)(null),e=(0,s.Z)(t,2),r=e[0],i=e[1];return(0,l.useEffect)((function(){var t=function(){var t=(0,o.Z)(p().mark((function t(){var e;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w(n.movieId);case 3:e=t.sent,i(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error setting cast data:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[n.movieId]),(0,y.jsx)(y.Fragment,{children:r&&(0,y.jsx)(m,{children:r.cast.map((function(n){return(0,y.jsxs)(g,{children:[(0,y.jsx)(v,{src:n.profile_path?"https://image.tmdb.org/t/p/w500/".concat(n.profile_path):h,alt:n.name,width:"90px",height:"135px"}),(0,y.jsx)(Z,{children:n.name}),(0,y.jsxs)(Z,{children:[(0,y.jsx)("b",{children:"Character:"})," ",n.character]})]},n.id)}))})})}},966:function(n,t){t.Z={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmExZTQzYTY5NjQxYWQzYTdkZWZlZjIwMGJhMDdkOCIsInN1YiI6IjY0ODA3YjgzYmYzMWYyMDExZDQxNWU3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ksZZ1upa3Zr_WyjRmw4RGhXYrHQMIjUphgwFV2WUWlw"}}},861:function(n,t,e){function r(n,t,e,r,i,a,c){try{var o=n[a](c),s=o.value}catch(u){return void e(u)}o.done?t(s):Promise.resolve(s).then(r,i)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(i,a){var c=n.apply(t,e);function o(n){r(c,i,a,o,s,"next",n)}function s(n){r(c,i,a,o,s,"throw",n)}o(void 0)}))}}e.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=458.119875bc.chunk.js.map