(this["webpackJsonpreact-job-listings"]=this["webpackJsonpreact-job-listings"]||[]).push([[0],[,,,,,,,,,,,,,,,function(n,e,t){n.exports=t.p+"static/media/icon-remove.ae67c678.svg"},,,function(n,e,t){n.exports=t.p+"static/media/bg-header-mobile.6b5ff5a0.svg"},function(n,e,t){n.exports=t.p+"static/media/bg-header-desktop.6e2f7196.svg"},,,,,function(n){n.exports=JSON.parse('[{"id":1,"company":"Photosnap","logo":"photosnap","new":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"],"tools":[]},{"id":2,"company":"Manage","logo":"manage","new":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"account","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"myhome","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"],"tools":[]},{"id":5,"company":"Loop Studios","logo":"loopstudios","new":false,"featured":false,"position":"Software Engineer","role":"FullStack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"faceit","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","languages":["Ruby"],"tools":["RoR"]},{"id":7,"company":"Shortly","logo":"shortly","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"insure","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"eyecamco","new":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"theairfiltercompany","new":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]')},function(n,e,t){n.exports=t.p+"static/media/account.9f72c13b.svg"},function(n,e,t){n.exports=t.p+"static/media/eyecam-co.39eaebdf.svg"},function(n,e,t){n.exports=t.p+"static/media/faceit.76faa79f.svg"},function(n,e,t){n.exports=t.p+"static/media/insure.52b85a50.svg"},function(n,e,t){n.exports=t.p+"static/media/loop-studios.6c50fd74.svg"},function(n,e,t){n.exports=t.p+"static/media/manage.fbe431a9.svg"},function(n,e,t){n.exports=t.p+"static/media/myhome.e0ad9358.svg"},function(n,e,t){n.exports=t.p+"static/media/photosnap.3f34b49c.svg"},function(n,e,t){n.exports=t.p+"static/media/shortly.45f63772.svg"},function(n,e,t){n.exports=t.p+"static/media/the-air-filter-company.23b515f9.svg"},,function(n,e,t){n.exports=t(50)},,,,,function(n,e,t){},function(n,e,t){},,,,,,,,function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(13),i=t.n(o),c=(t(41),t(42),t(12)),l=t(4),s=t(5),d=t(7),p=t(6),u=t(1),m=t(2),g=t(18),f=t.n(g),h=t(19),v=t.n(h);function b(){var n=Object(u.a)(["\n  max-width: 1312px;\n  margin: auto;\n  padding: 0 1.5em;\n  @media (min-width: 1200px) {\n    padding: 0 160px;\n  }\n"]);return b=function(){return n},n}var y=m.a.div(b());var x=function(n){var e=n.children;return r.a.createElement(y,null,e)};function w(){var n=Object(u.a)(["\n  padding: 0.6em 0.8em;\n  background: ",";\n  color: white;\n  border-radius: 1.2em;\n  font-size: 0.7em;\n  font-weight: 700;\n"]);return w=function(){return n},n}var k=m.a.span(w(),(function(n){return"new"===n.typeFeature?"var(--dark-cyan)":"var(--very-dark-gray)"}));var E=function(n){var e=n.text,t=n.typeFeature;return r.a.createElement(k,{typeFeature:t},e)},O=t(3);function j(){var n=Object(u.a)(["\n  font-size: 0.9em;\n  color: var(--dark-cyan);\n  font-weight: 700;\n  padding: 0.5em 0.5em;\n  background: var(--background);\n  border-radius: 5px;\n  cursor: pointer;\n\n  &:hover {\n    background: var(--dark-cyan);\n    color: white;\n    font-size: 0.9em;\n  }\n"]);return j=function(){return n},n}var F=m.a.span(j()),S=function(n){Object(d.a)(t,n);var e=Object(p.a)(t);function t(){var n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).handleClick=function(){n.props.filters.indexOf(n.props.children)<0&&n.props.dispatch({type:"ADD_FILTER",payload:n.props.children})},n}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(F,{onClick:this.handleClick},this.props.children)}}]),t}(r.a.Component),A=Object(O.b)((function(n){return{filters:n.filters}}),(function(n){return{dispatch:n}}))(S);function N(){var n=Object(u.a)(['\n  background: white;\n  min-height: 255px;\n  border-radius: 10px;\n  overflow: hidden;\n  display: flex;\n  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.05);\n  margin-top: 3em;\n\n  .line-card {\n    height: 255px;\n    width: 0px;\n    border-left: 5px solid var(--dark-cyan);\n  }\n\n  .content-card {\n    padding: 2.5em 1.5em 1.5em 1.5em;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n  }\n\n  .category {\n    font-size: 0.9em;\n    color: var(--dark-cyan);\n    font-weight: 700;\n  }\n  .feactures span {\n    margin-right: 1em;\n  }\n\n  .description {\n    padding: 1em 0px;\n    color: var(--gray);\n    border-bottom: 1px solid var(--gray);\n\n    span {\n      font-size: 0.9em;\n      margin-right: 2em;\n      position: relative;\n    }\n  }\n\n  .title {\n    font-weight: 700;\n    margin-top: 15px;\n    cursor: pointer;\n    color: var(--very-dark-gray);\n    :hover {\n      color: var(--dark-cyan);\n    }\n  }\n  .tags-content {\n    margin: 0;\n    span {\n      margin: 1em 1em 0 0;\n      display: inline-flex;\n    }\n  }\n\n  .img-icon {\n    width: 50px;\n    height: 50px;\n    border-radius: 50px;\n    position: absolute;\n    margin-top: -65px;\n    overflow: hidden;\n    img {\n      width: 50px;\n    }\n  }\n\n  .points {\n    ::after {\n      content: "";\n      display: block;\n      width: 5px;\n      height: 5px;\n      border-radius: 5px;\n      background: var(--gray);\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: -1em;\n      margin: auto;\n    }\n    ::before {\n      content: "";\n      display: block;\n      width: 5px;\n      height: 5px;\n      border-radius: 5px;\n      background: var(--gray);\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: -1em;\n      margin: auto;\n    }\n  }\n\n  @media (min-width: 800px) {\n    min-height: auto;\n    margin-top: 1.5em;\n    .line-card {\n      height: auto;\n    }\n    .content-card {\n      padding: 1.5em 2.5em;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n      width: 100%;\n    }\n    .img-icon {\n      width: 80px;\n      height: 80px;\n      border-radius: 80px;\n      position: relative;\n      margin-top: 0px;\n      overflow: hidden;\n      margin-right: 1.5em;\n      img {\n        width: 80px;\n      }\n    }\n\n    .description {\n      border: none;\n    }\n    .detail-card {\n      margin-top: 1em;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n    }\n\n    .header-tab {\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: center;\n    }\n  }\n']);return N=function(){return n},n}var J=m.a.div(N());var C=function(n){var e=n.el,t=n.image;return r.a.createElement(J,null,r.a.createElement("div",{className:"line-card"}),r.a.createElement("div",{className:"content-card"},r.a.createElement("div",{className:"header-tab"},r.a.createElement("div",{className:"img-icon"},r.a.createElement("img",{src:t,alt:e.company})),r.a.createElement("div",{className:"detail-card"},r.a.createElement("div",{className:"feactures"},r.a.createElement("span",{className:"category"},e.company),e.new&&r.a.createElement(E,{typeFeature:"new",text:"NEW!"}),e.featured&&r.a.createElement(E,{typeFeature:"featured",text:"FEATURED"})),r.a.createElement("div",{className:"title"},e.position),r.a.createElement("div",{className:"description"},r.a.createElement("span",{className:"description-detail"},e.postedAt),r.a.createElement("span",{className:"description-detail points"},e.contract),r.a.createElement("span",{className:"description-detail"},e.location)))),r.a.createElement("p",{className:"tags-content"},r.a.createElement(A,{key:"role"},e.role),r.a.createElement(A,{key:"lvl"},e.level),e.languages.map((function(n,e){return r.a.createElement(A,{key:e+"l"},n)})),e.tools.map((function(n,e){return r.a.createElement(A,{key:e+"t"},n)})))))},T=t(15),R=t.n(T);function D(){var n=Object(u.a)(["\n  display: inline-flex;\n  margin: 1em 1em 0 0;\n\n  & span {\n    font-size: 0.9em;\n    color: var(--dark-cyan);\n    font-weight: 700;\n    padding: 0.5em 0.5em;\n    background: var(--background);\n    border-radius: 5px;\n  }\n\n  .btn-tag {\n    background: var(--dark-cyan);\n    color: white;\n    border: none;\n    background-image: url(",");\n    width: 30px;\n\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 50%;\n    border-radius: 0 5px 5px 0;\n    cursor: pointer;\n    :hover {\n      background: var(--very-dark-gray);\n      background-image: url(",");\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: 50%;\n      border-radius: 0 5px 5px 0;\n    }\n  }\n"]);return D=function(){return n},n}var _=m.a.span(D(),R.a,R.a),L=function(n){Object(d.a)(t,n);var e=Object(p.a)(t);function t(){var n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).handleClose=function(){n.props.dispatch({type:"REMOVE_FILTER",payload:n.props.children})},n}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(_,null,r.a.createElement("span",null,this.props.children),r.a.createElement("button",{onClick:this.handleClose,className:"btn-tag"}))}}]),t}(r.a.Component),M=Object(O.b)((function(n){return{filters:n.filters}}),(function(n){return{dispatch:n}}))(L);function z(){var n=Object(u.a)(["\n  background: white;\n  min-height: 70px;\n  border-radius: 10px;\n  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.05);\n  margin-top: -35px;\n  display: flex;\n  box-sizing: border-box;\n  flex-direction: row;\n  padding: 0 1em;\n  justify-content: space-between;\n  align-items: center;\n\n  .input-content {\n    margin: 0px;\n    margin-bottom: 1em;\n  }\n\n  .btn-clear {\n    border: none;\n    background: none;\n    font-size: 0.9em;\n    font-weight: 700;\n    color: var(--gray);\n    cursor: pointer;\n    :hover {\n      color: var(--dark-cyan);\n    }\n  }\n"]);return z=function(){return n},n}var I=m.a.div(z()),P=function(n){Object(d.a)(t,n);var e=Object(p.a)(t);function t(){var n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).handleClear=function(){n.props.dispatch({type:"CLEAR_FILTER"})},n}return Object(s.a)(t,[{key:"render",value:function(){return this.props.filters.length>0&&r.a.createElement(I,null,r.a.createElement("p",{className:"input-content"},this.props.filters.map((function(n,e){return r.a.createElement(M,{key:e},n)}))),r.a.createElement("button",{className:"btn-clear",onClick:this.handleClear},"clear"))}}]),t}(a.Component),U=Object(O.b)((function(n){return{filters:n.filters}}),(function(n){return{dispatch:n}}))(P),W=t(24),B=t(25),V=t.n(B),H=t(26),X=t.n(H),K=t(27),$=t.n(K),q=t(28),G=t.n(q),Q=t(29),Y=t.n(Q),Z=t(30),nn=t.n(Z),en=t(31),tn=t.n(en),an=t(32),rn=t.n(an),on=t(33),cn=t.n(on),ln=t(34),sn=t.n(ln),dn={account:V.a,eyecamco:X.a,faceit:$.a,insure:G.a,loopstudios:Y.a,manage:nn.a,myhome:tn.a,photosnap:rn.a,shortly:cn.a,theairfiltercompany:sn.a};function pn(){var n=Object(u.a)(["\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: 155px auto;\n\n  .header {\n    background: var(--dark-cyan);\n    background-image: url(",");\n  }\n\n  .result {\n    background: var(--background);\n    padding: 0px 0px 3.5em 0px;\n  }\n\n  .list-result {\n    margin-top: 5em;\n  }\n\n  @media (min-width: 800px) {\n    .header {\n      background-image: url(",");\n    }\n  }\n"]);return pn=function(){return n},n}var un=m.a.div(pn(),f.a,v.a),mn=function(n){Object(d.a)(t,n);var e=Object(p.a)(t);function t(){var n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).isShow=function(e){for(var t=[e.role,e.level].concat(Object(c.a)(e.languages),Object(c.a)(e.tools)),a=!0,r=0;r<n.props.filters.length;r++)t.indexOf(n.props.filters[r])<0&&(a=!1);return a},n}return Object(s.a)(t,[{key:"render",value:function(){var n=this;return r.a.createElement(un,null,r.a.createElement("div",{className:"header"}),r.a.createElement("div",{className:"result"},r.a.createElement(x,null,r.a.createElement(U,null),r.a.createElement("div",{className:"list-result"},W.map((function(e,t){return n.isShow(e)&&r.a.createElement(C,{key:t,el:e,image:dn[e.logo]})}))))))}}]),t}(r.a.Component),gn=Object(O.b)((function(n){return{filters:n.filters}}),(function(n){return{dispatch:n}}))(mn),fn=t(11),hn=t(35),vn=t(8),bn={filters:[]},yn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||fn.c,xn=Object(fn.d)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_FILTER":return Object(vn.a)(Object(vn.a)({},n),{},{filters:[].concat(Object(c.a)(n.filters),[e.payload])});case"REMOVE_FILTER":var t=Object(c.a)(n.filters),a=t.indexOf(e.payload);return t.splice(a,1),Object(vn.a)(Object(vn.a)({},n),{},{filters:t});case"CLEAR_FILTER":return Object(vn.a)(Object(vn.a)({},n),{},{filters:[]});default:return n}}),yn(Object(fn.a)(hn.a)));var wn=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O.a,{store:xn},r.a.createElement(gn,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(wn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}],[[36,1,2]]]);
//# sourceMappingURL=main.2dbbbe4f.chunk.js.map