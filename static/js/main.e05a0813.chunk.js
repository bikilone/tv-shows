(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{68:function(e,t,a){e.exports=a(95)},73:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(30),o=a.n(i),l=(a(73),a(13)),c=a(16),s=a(20),u=a(17),m=a(19),h=a(103),d=a(67),y=a(102),f=a(64),p=a(63),g=a(24),E=a(14),S=function e(t){Object(l.a)(this,e);var a=t.genres,n=t.id,r=t.name,i=t.officialSite,o=t.premiered,c=t.rating,s=t.summary,u=t._embedded,m=u.cast,h=u.seasons,d=t.image.original;this.genres=a,this.id=n,this.name=r,this.officialSite=i,this.premiered=o,this.rating=c,this.summary=s,this.cast=m,this.seasons=h,this.image=d},v=function(){return null!==localStorage.getItem("library")?{type:"GET_LIBRARY",payload:JSON.parse(localStorage.getItem("library"))}:{type:"GET_LIBRARY_FAILED",payload:"Library is empty"}},b=function(e){var t=localStorage.getItem("library"),a={id:e.id,image:e.image,title:e.title,text:e.text};if(null!==t){var n=JSON.parse(t),r=n.findIndex(function(e){return JSON.stringify(e)===JSON.stringify(a)});if(-1===r){n.push(a);var i=JSON.stringify(n);localStorage.setItem("library",i)}else{var o=n.filter(function(e){return e!==n[r]}),l=JSON.stringify(o);localStorage.setItem("library",l)}}else{var c=[a],s=JSON.stringify(c);localStorage.setItem("library",s)}return{type:"SAVE_TV_SHOW"}},w=Object(E.b)(function(e){return{search:e.searchTvShows.search}},function(e){return{searchTvShows:function(t){return e({type:"SEARCH_TV_SHOWS",payload:t.target.value})}}})(function(e){return r.a.createElement(h.a,{collapseOnSelect:!0,expand:"sm",bg:"dark",variant:"dark",style:{marginBottom:"10px"}},r.a.createElement(h.a.Brand,null,r.a.createElement(g.b,{to:"/",style:{color:"white",textDecoration:"none"}},"TV SHOWS")),r.a.createElement(h.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(h.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(d.a,{className:"mr-auto"},r.a.createElement(g.b,{to:"/library",style:{color:"#C4C6C8",textDecoration:"none"}},"LIBRARY")),r.a.createElement(d.a,null,r.a.createElement(y.a,{inline:!0},r.a.createElement(y.a.Row,null,r.a.createElement(f.a,null,r.a.createElement(p.a,{type:"text",placeholder:"Search",style:{display:"inline-block"},onChange:e.searchTvShows})))))))}),O=a(104),T=a(96),x=a(66);function j(e){var t=e.src,a=e.title,n=e.text,i=e.saveToLibrary,o=e.id,l=e.fill;return r.a.createElement(f.a,{xs:{span:8,offset:2},sm:{span:6,offset:0},md:4,lg:4,xl:3},r.a.createElement(O.a,{style:{marginBottom:"5px"}},r.a.createElement(O.a.Img,{variant:"top",src:t}),r.a.createElement(O.a.Body,null,r.a.createElement(O.a.Title,null,a),r.a.createElement(O.a.Text,{dangerouslySetInnerHTML:{__html:n},style:{height:"100px",overflow:"hidden"}}),r.a.createElement(T.a,{variant:"secondary"},r.a.createElement(g.b,{to:"/".concat(o),style:{color:"white"}},"Details")),r.a.createElement(x.a,{style:{float:"right",color:"white",stroke:"blue",strokeWidth:"3px",cursor:"pointer"},size:"2em",fill:l,onClick:function(){return i({id:o,image:t,title:a,text:n})}}))))}var _=a(97),L=a(98),C=a(99),I=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchTvShows(),this.props.getLibrary()}},{key:"render",value:function(){var e=this.props,t=e.tvShows,a=e.isPending,n=e.saveToLibrary,i=e.library,o=e.search,l=t.filter(function(e){return e.name.toLowerCase().includes(o.toLowerCase())});return a?r.a.createElement("div",{className:"d-flex justify-content-center",style:{marginTop:"40vh"}},r.a.createElement(_.a,{animation:"border"})):r.a.createElement(L.a,{fluid:!0},r.a.createElement(C.a,null,l.map(function(e){var t="";return t=-1===i.findIndex(function(t){return JSON.stringify(t.id)===JSON.stringify(e.id)})?"white":"#000000",r.a.createElement(j,{fill:t,id:e.id,saveToLibrary:n,key:e.id,src:e.image.medium,title:e.name,text:e.summary})})))}}]),t}(n.Component),H=Object(E.b)(function(e){return{tvShows:e.fetchTvShows.tvShows,isPending:e.fetchTvShows.isPending,library:e.getLibrary.library,search:e.searchTvShows.search}},function(e){return{fetchTvShows:function(){return e(function(e){fetch("https://api.tvmaze.com/shows").then(function(e){return e.json()}).then(function(t){return e({type:"FETCH_TV_SHOWS_SUCCESS",payload:t})}).catch(function(t){return e({type:"FETCH_TV_SHOWS_FAILED",payload:t})})})},saveToLibrary:function(t){e(b(t)),e(v())},getLibrary:function(){return e(v())}}})(I),k=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.getLibrary()}},{key:"render",value:function(){var e=this.props,t=e.library,a=e.saveToLibrary,n=e.search,i=t.filter(function(e){return e.title.toLowerCase().includes(n.toLowerCase())});return t.length<1?r.a.createElement("div",{className:"d-flex justify-content-center",style:{marginTop:"40vh"}},"Library is empty"):r.a.createElement(L.a,{fluid:!0,style:{marginTop:"20px"}},r.a.createElement(C.a,null,i.map(function(e){return r.a.createElement(j,{fill:"#000000",id:e.id,key:e.id,src:e.image,title:e.title,text:e.text,saveToLibrary:a})})))}}]),t}(n.Component),W=Object(E.b)(function(e){return{library:e.getLibrary.library,error:e.getLibrary.error,search:e.searchTvShows.search}},function(e){return{getLibrary:function(){return e(v())},saveToLibrary:function(t){e(b(t)),e(v())}}})(k),N=a(10),A=a(105),B=a(100),D=a(101),F=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchSingleShow(this.props.match.params.id)}},{key:"render",value:function(){var e=this.props,t=e.singleShow,a=e.isPending,n=t.image,i=t.name,o=t.summary,l=t.seasons,c=t.cast;return a?r.a.createElement("div",{className:"d-flex justify-content-center",style:{marginTop:"40vh"}},r.a.createElement(_.a,{animation:"border"})):r.a.createElement("div",null,r.a.createElement(C.a,null,r.a.createElement(f.a,{xs:6},r.a.createElement(O.a,{style:{marginBottom:"5px"}},r.a.createElement(O.a.Img,{variant:"top",src:n}),r.a.createElement(O.a.Body,null,r.a.createElement(O.a.Title,null,i),r.a.createElement(O.a.Text,{dangerouslySetInnerHTML:{__html:o}})))),r.a.createElement(f.a,{xs:6},r.a.createElement(A.a,{defaultActiveKey:"Cast",id:"uncontrolled-tab-example"},r.a.createElement(B.a,{eventKey:"Seasons",title:"Seasons"},r.a.createElement("ul",{style:{marginTop:"10px",listStyle:"none"}},l.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{fontWeight:"bold"}},"Season ",t+1)," ",e.premiereDate," "," - "," ",e.endDate,r.a.createElement("hr",null))}))),r.a.createElement(B.a,{eventKey:"Cast",title:"Cast"},r.a.createElement(L.a,null,r.a.createElement("ul",{style:{listStyle:"none",padding:"0",marginTop:"10px"}},c.map(function(e,t){return r.a.createElement("li",{key:t,style:{marginBottom:"5px"}},r.a.createElement(C.a,{style:{alignItems:"center"}},r.a.createElement(f.a,{xs:3},r.a.createElement(D.a,{src:e.person.image.medium,style:{width:"100%",minWidth:"40px"}})),r.a.createElement(f.a,{xs:{span:6,offset:1}},r.a.createElement("div",{style:{display:"flex",alignItems:"center",height:"100%"}},r.a.createElement("p",null,e.person.name," as ",e.character.name)))),r.a.createElement("hr",null))}))))))))}}]),t}(n.Component),J=Object(E.b)(function(e){return{singleShow:e.fetchSingleShow.singleShow,error:e.fetchSingleShow.error,isPending:e.fetchSingleShow.isPending}},function(e){return{fetchSingleShow:function(t){return e(function(e){return function(t){fetch("http://api.tvmaze.com/shows/".concat(e,"?embed[]=cast&embed[]=seasons")).then(function(e){return e.json()}).then(function(e){return e}).then(function(e){return new S(e)}).then(function(e){return t({type:"FETCH_SINGLE_SHOW",payload:e})}).catch(function(e){return t({type:"FETCH_SINGLE_SHOW_FAILED",payload:e})})}}(t))}}})(F),P=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(N.c,null,r.a.createElement(N.a,{exact:!0,path:"/",component:H}),r.a.createElement(N.a,{exact:!0,path:"/library",component:W}),r.a.createElement(N.a,{exact:!0,path:"/:id",component:J})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=a(29),V=a(65),G=a(26),M={isPending:!0,tvShows:[],error:"",library:[],search:"",singleShow:""},Y=Object(R.c)({fetchTvShows:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"FETCH_TV_SHOWS_SUCCESS":return Object(G.a)({},e,{isPending:!1,tvShows:t.payload});case"FETCH_TV_SHOWS_FAILED":return Object(G.a)({},e,{isPending:!1,error:t.payload});default:return e}},getLibrary:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GET_LIBRARY":return Object(G.a)({},e,{library:t.payload,error:""});default:return e}},saveToLibrary:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M;switch((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).type){case"SAVE_TV_SHOW":default:return e}},searchTvShows:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SEARCH_TV_SHOWS":return Object(G.a)({},e,{search:t.payload});default:return e}},fetchSingleShow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"FETCH_SINGLE_SHOW":return Object(G.a)({},e,{singleShow:t.payload,isPending:!1});case"FETCH_SINGLE_SHOW_FAILED":return Object(G.a)({},e,{error:t.payload,isPending:!1});default:return e}}}),z=Object(R.d)(Y,Object(R.a)(V.a));o.a.render(r.a.createElement(g.a,null,r.a.createElement(E.a,{store:z},r.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[68,1,2]]]);
//# sourceMappingURL=main.e05a0813.chunk.js.map