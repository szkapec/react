(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(n,t,e){n.exports=e.p+"static/media/link.6fc1d8fe.svg"},46:function(n,t,e){n.exports=e.p+"static/media/bulb.af737b55.svg"},47:function(n,t,e){n.exports=e.p+"static/media/logout.0969c92b.svg"},48:function(n,t,e){n.exports=e.p+"static/media/pen.84b70f8a.svg"},49:function(n,t,e){n.exports=e.p+"static/media/twitter.051af8ba.svg"},50:function(n,t,e){n.exports=e.p+"static/media/magnifier.a14461b8.svg"},53:function(n,t,e){n.exports=e.p+"static/media/plus.e43ce6c8.svg"},58:function(n,t,e){n.exports=e(69)},67:function(n,t){},68:function(n,t){},69:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),i=e(28),o=e.n(i),c=e(11),u=e(12),l=e(9),d=e(55),p=e(17),s=e(18),m=e(20),f=e(19),x=e(21),h=e(1),b=e(2);function w(){var n=Object(b.a)(['\n \n  \n  *, *::before, *::after {\n    box-sizing: border-box;\n\n  }\n  \n  html {\n    font-size: 62.5%; \n  }\n  \n  body {\n    padding-left: 50px;\n    font-size: 1.6rem;\n    font-family: "Montserrat", sans-serif;\n    @media(min-width: 500px) {\n      padding-left: 90px;\n    }\n    @media(min-width: 1000px) {\n      padding-left: 120px;\n    }\n  }\n']);return w=function(){return n},n}var g=Object(h.b)(w()),v={notes:"hsl(1, 78%, 43%, 1)",twitters:"hsl(241, 98%, 63%, 1)",articles:"hsl(48, 98%, 50%, 1)",grey100:"hsl(0, 0%, 96%)",grey200:"hsl(0, 0%, 90%)",grey300:"hsl(0, 0%, 70%)",black:"hsl(0, 0%, 0%)",light:300,bold:600,fontSize:{xxs:"1rem",xs:"1.2rem",s:"1.6rem",m:"2.1rem",l:"2.4rem",xl:"4rem"}},y=r.a.createContext("notes"),j=function(n){function t(){var n,e;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=Object(m.a)(this,(n=Object(f.a)(t)).call.apply(n,[this].concat(r)))).state={pageType:"notes"},e.setCurrentPage=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.props.location.pathname,a=["twitters","articles","notes"].filter(function(n){return t.includes(n)}),r=Object(d.a)(a,1)[0];n.pageType!==r&&e.setState({pageType:r})},e}return Object(x.a)(t,n),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setCurrentPage()}},{key:"componentDidUpdate",value:function(n,t){this.setCurrentPage(t)}},{key:"render",value:function(){var n=this.props.children;return r.a.createElement(y.Provider,{value:this.state.pageType},r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(h.a,{theme:v},n)))}}]),t}(a.Component),O=Object(u.g)(j);function k(){var n=Object(b.a)(["\n  font-size: ",";\n  font-weight: ",";\n"]);return k=function(){return n},n}var z=h.d.p(k(),function(n){return n.theme.fontSize.s},function(n){return n.theme.regular});function E(){var n=Object(b.a)(["\n  font-size: ",";\n  font-weight: ",";\n"]);return E=function(){return n},n}var C=h.d.h1(E(),function(n){var t=n.theme;return n.big?t.fontSize.xl:t.fontSize.l},function(n){return n.theme.bold});function T(){var n=Object(b.a)(["\n      background-color: hsl(0, 0%, 90%);\n      width: 105px;\n      height: 30px;\n      font-size: 10px;\n    "]);return T=function(){return n},n}function N(){var n=Object(b.a)(["\n  padding: 0;\n  background-color: ",";\n  width: 220px;\n  height: 47px;\n  border: none;\n  border-radius: 50px;\n  font-family: 'Montserrat';\n  font-weight: 600;\n  font-size: 16px;\n  text-transform: uppercase;\n\n  ","\n"]);return N=function(){return n},n}var I=h.d.button(N(),function(n){var t=n.activecolor;return n.theme[t]},function(n){return n.secondary&&Object(h.c)(T())}),V=e(45),R=e.n(V),S=e(25);function D(){var n=Object(b.a)(["\n  background-color:  ",";\n  width: 70px;\n  font-size: 10px;\n\n  @media(min-width: 1000px){\n    width: 90px;\n  font-size: 12px;\n  }\n"]);return D=function(){return n},n}function U(){var n=Object(b.a)(["\n  display: block;\n  width: 30px;\n  height: 30px;\n  border-radius: 50px;\n  background: white url(",") no-repeat;\n  background-size: 60%;\n  background-position: 50%;\n  position: absolute;\n  right: 25px;\n  top: 50%;\n  transform: translateY(-50%);\n  @media(min-width: 500px) {\n    width: 35px;\n  height: 35px;\n  }\n  @media(min-width: 700px) {\n    width: 40px;\n  height: 40px;\n  }\n"]);return U=function(){return n},n}function P(){var n=Object(b.a)(["\n  width: 30px;\n  height: 30px;\n  border: 5px solid ",";\n  border-radius: 50px;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  @media(min-width: 500px) {\n    width: 35px;\n  height: 35px;\n  }\n  @media(min-width: 700px) {\n    width: 40px;\n  height: 40px;\n  }\n"]);return P=function(){return n},n}function B(){var n=Object(b.a)(["\n  margin: 5px 0 0;\n  font-size: 10px;\n\n  @media(min-width: 500px){\n    font-size: 14px;\n  }\n\n\n  \n"]);return B=function(){return n},n}function M(){var n=Object(b.a)(["\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n    "]);return M=function(){return n},n}function _(){var n=Object(b.a)(["\n  position: relative;\n  padding: 17px 30px;\n  background-color: ",";\n\n  :first-of-type {\n    z-index: 9999;\n  }\n\n  ","\n"]);return _=function(){return n},n}function J(){var n=Object(b.a)(["\nfont-size: 12px;\nline-height: 15px;\nmargin-bottom: 10px;\n@media(min-width: 500px){\n  font-size: 14px;\n}\n@media(min-width: 700px){\n  font-size: 16px;\n  line-height: 20px;\n}\n"]);return J=function(){return n},n}function A(){var n=Object(b.a)(["\n  min-height: 200px;\n  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n  display: grid;\n  grid-template-rows: 0.25fr 1fr;\n\n\n"]);return A=function(){return n},n}var K=h.d.div(A()),F=Object(h.d)(z)(J()),Z=h.d.div(_(),function(n){var t=n.activeColor,e=n.theme;return t?e[t]:"white"},function(n){return n.flex&&Object(h.c)(M())}),L=Object(h.d)(C)(B()),q=h.d.img(P(),function(n){return n.theme.twitters}),Q=h.d.a(U(),R.a),Y=Object(h.d)(I)(D(),function(n){var t=n.propsik,e=n.theme;return t?e[t]:"white"}),W=function(n){function t(n){var e;return Object(p.a)(this,t),(e=Object(m.a)(this,Object(f.a)(t).call(this,n))).state={redirect:!1},e.handleCardClick=function(){return e.setState({redirect:!0})},e.state={},e}return Object(x.a)(t,n),Object(s.a)(t,[{key:"render",value:function(){var n=this.props,t=n.id,e=n.cardType,a=n.title,i=(n.created,n.twitterName),o=n.articleUrl,c=n.content,l=n.removeItem;return this.state.redirect?r.a.createElement(u.a,{to:"".concat(e,"/").concat(t)}):r.a.createElement(K,{onClick:this.handleCardClick},r.a.createElement(Z,{activeColor:e},r.a.createElement(L,null,a),"twitters"===e&&r.a.createElement(q,{src:"https://avatars.io/twitter/".concat(i)}),"articles"===e&&r.a.createElement(Q,{href:o})),r.a.createElement(Z,{flex:!0},r.a.createElement(F,null,c),r.a.createElement(Y,{onClick:function(){return l(e,t)},propsik:e,secondary:!0},"Usu\u0144")))}}]),t}(a.Component);W.defaultProps={cardType:"notes",content:null};var X=Object(l.b)(null,function(n){return{removeItem:function(t,e){return n(function(n,t){return{type:"REMOVE_ITEM",payload:{itemType:n,id:t}}}(t,e))}}})(W);function H(){var n=Object(b.a)(["\n  display: block;\n  width: 67px;\n  height: 67px;\n  border-radius: 20px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: 50% 50%;\n  border: none;\n\n  &.active {\n    background-color: white;\n  }\n"]);return H=function(){return n},n}var G=h.d.button(H(),function(n){return n.icon}),$=e(46),nn=e.n($),tn=e(47),en=e.n(tn),an=e(48),rn=e.n(an),on=e(49),cn=e.n(on),un=function(n){return function(t){return r.a.createElement(y.Consumer,null,function(e){return r.a.createElement(n,Object.assign({},t,{pageContext:e}))})}};function ln(){var n=Object(b.a)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]);return ln=function(){return n},n}function dn(){var n=Object(b.a)(["\n  margin-top: auto;\n  width: 30px;\n  height: 30px;\n  @media(min-width: 500px) {\n    width: 40px;\n  height: 40px;\n  }\n"]);return dn=function(){return n},n}function pn(){var n=Object(b.a)(["\n  display: block;\n  width: 67px;\n  height: 67px;\n  background-position: 50% 50%;\n  background-size: 80%;\n  border: none;\n  margin-bottom: 10vh;\n"]);return pn=function(){return n},n}function sn(){var n=Object(b.a)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  padding: 100px 0;\n  width: 50px;\n  height: 100vh;\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n\n  @media(min-width: 500px) {\n    width: 70px;\n  }\n"]);return sn=function(){return n},n}var mn=h.d.nav(sn(),function(n){var t=n.activeColor,e=n.theme;return t?e[t]:e.note}),fn=h.d.div(pn()),xn=Object(h.d)(G)(dn()),hn=h.d.ul(ln()),bn=function(n){var t=n.pageContext;return r.a.createElement(mn,{activeColor:t},r.a.createElement(fn,null),r.a.createElement(hn,null,r.a.createElement("li",null,r.a.createElement(xn,{as:c.c,to:"/notes",icon:rn.a,activeclass:"active"})),r.a.createElement("li",null,r.a.createElement(xn,{as:c.c,to:"/twitters",icon:cn.a,activeclass:"active"})),r.a.createElement("li",null,r.a.createElement(xn,{as:c.c,to:"/articles",icon:nn.a,activeclass:"active"}))),r.a.createElement(xn,{as:c.c,to:"/login",icon:en.a}))};bn.defaultProps={pageContext:"notes"};var wn=un(bn),gn=e(50),vn=e.n(gn);function yn(){var n=Object(b.a)(["\n      padding: 10px 20px 10px 40px;\n      font-size: ",";\n      background-image: url(",");\n      background-size: 15px;\n      background-position: 15px 50%;\n      background-repeat: no-repeat;\n    "]);return yn=function(){return n},n}function jn(){var n=Object(b.a)(["\n  padding: 15px 30px;\n  font-size: ",";\n  font-weight: ",";\n  background-color: ",";\n  border: none;\n  border-radius: 50px;\n\n  ::placeholder {\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    color: ",";\n  }\n\n  ","\n"]);return jn=function(){return n},n}var On=h.d.input(jn(),function(n){return n.theme.fontSize.s},function(n){return n.theme.regular},function(n){return n.theme.grey100},function(n){return n.theme.grey300},function(n){return n.search&&Object(h.c)(yn(),function(n){return n.theme.fontSize.xs},vn.a)}),kn=e(38);function zn(){var n=Object(b.a)(["\n  margin-top: 30px;\n  font-size: 10px;\n  width: 150px;\n    @media(min-width: 700px) {\n       font-size: 12px;\n       width: 200px;\n}\n\n"]);return zn=function(){return n},n}function En(){var n=Object(b.a)(["\nfont-size: 12px;\n@media(min-width: 700px) {\n  font-size: 18px;\n}\n@media(min-width: 1000px) {\n  font-size: 22px;\n}\n"]);return En=function(){return n},n}function Cn(){var n=Object(b.a)(["\ndisplay:flex;\nflex-direction: column;\n"]);return Cn=function(){return n},n}function Tn(){var n=Object(b.a)(["\n  margin-top: 30px;\n  font-size: 8px;\n\n  @media(min-width: 700px) {\n       font-size: 12px;\n}\n\n"]);return Tn=function(){return n},n}function Nn(){var n=Object(b.a)(["\n    margin: 30px 0 100px;\n    border-radius:20px;\n    height: 30vh;\n"]);return Nn=function(){return n},n}function In(){var n=Object(b.a)(["\n    border-left: 10px solid ",";\n    border-top: 10px solid ",";\n    z-index: 10000; \n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    padding: 50px 60px;\n    right: 0;\n    top: 40px;\n    height: 100vh;\n    width: 300px;\n    background-color: white;\n    box-shadow: -5px 0 15px rgba(0,0,0,0.1);\n    /* transform: translate(","); */\n    transform: translateY(",");\n    transition: transform 1s ease-in-out;\n\n    @media(min-width: 400px) {\n      width:350px;\n    }\n    @media(min-width: 500px) {\n      width:400px;\n    }\n    @media(min-width: 700px) {\n      width:500px;\n}\n\n  @media(min-width: 1000px) {\n    width:850px;\n}\n@media(min-width: 1200px) {\n    width:1000px;\n}\n"]);return In=function(){return n},n}var Vn=h.d.div(In(),function(n){return n.theme[n.activeColor]},function(n){return n.theme[n.activeColor]},function(n){return n.isVisible?"0":"100%"},function(n){return n.isVisible?"0":"100%"}),Rn=h.d.div(Nn()),Sn=Object(h.d)(On)(Tn()),Dn=Object(h.d)(kn.a)(Cn()),Un=Object(h.d)(C)(En()),Pn=Object(h.d)(I)(zn()),Bn=function(n){var t=n.pageContext,e=n.isVisible,a=n.addItem,i=n.handleClose;return r.a.createElement(Vn,{isVisible:e,activecolor:t},r.a.createElement(Un,{big:!0},"Stw\xf3rz","notes"===t?" now\u0105 notatk\u0119":null,"articles"===t?" nowy artyku\u0142 ":null,"twitters"===t?" nowy twitt":null),r.a.createElement(kn.b,{initialValues:{title:"",content:"",articleUrl:"",twitterName:"",created:""},onSubmit:function(n){a(t,n),console.log(n),i()}},function(n){var e=n.values,a=n.handleChange,i=n.handleBlur;return r.a.createElement(Dn,null,r.a.createElement(Sn,{type:"text",name:"title",placeholder:"Tytu\u0142",onChange:a,onBlur:i,value:e.title}),"twitters"===t&&r.a.createElement(Sn,{placeholder:"Nazwa twittera",type:"text",name:"twitterName",onChange:a,onBlur:i,value:e.twitterName}),"articles"===t&&r.a.createElement(Sn,{placeholder:"link do artyku\u0142u",type:"text",name:"articleUrl",onChange:a,onBlur:i,value:e.articleUrl}),r.a.createElement(Rn,{name:"content",as:"textarea",onChange:a,onBlur:i,value:e.content}),r.a.createElement(Pn,{type:"submit",activecolor:t},"Dodaj notatke"))}))};Bn.defaultProps={pageContext:"notes",isVisible:!1};var Mn=Object(l.b)(null,function(n){return{addItem:function(t,e){return n(function(n,t){return{type:"ADD_ITEM",payload:{itemType:n,item:Object(S.a)({id:"_".concat(Math.random().toString(36).substr(2,9))},t)}}}(t,e))}}})(un(Bn)),_n=e(53),Jn=e.n(_n);function An(){var n=Object(b.a)(["\n  position: fixed;\n  bottom: 30px;\n  right: 20px;\n  background-color: ",";\n  border-radius: 50%;\n  background-size: 20%;\n    height: 35px;\n    width: 35px;\n  z-index: 10001;\n\n  @media(min-width: 500px) {\n    background-size: 20%;\n    height: 50px;\n    width: 50px;\n  }\n  @media(min-width: 1000px) {\n    height: 70px;\n    width: 70px;\n    bottom: 40px;\n  right: 40px;\n  }\n\n"]);return An=function(){return n},n}function Kn(){var n=Object(b.a)(["\n  margin: 0;\n  font-size: 10px;\n  text-align: center;\n  @media(min-width:500px){\n    font-size: 12px;\n  }\n    @media(min-width:1000px){\n    font-size: 16px;\n  }\n"]);return Kn=function(){return n},n}function Fn(){var n=Object(b.a)(["\n  margin: 25px 0 10px 0;\n  font-size: 12px;\n  text-align: center;\n  @media(min-width:500px){\n    font-size: 16px;\n  }\n  @media(min-width:1000px){\n    font-size: 20px;\n  }\n\n  ::first-letter {\n    text-transform: uppercase;\n  }\n"]);return Fn=function(){return n},n}function Zn(){var n=Object(b.a)(["\n  margin: 25px 0 50px 0;\n"]);return Zn=function(){return n},n}function Ln(){var n=Object(b.a)(["\n\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 85px;\n  @media(max-width:1000px){\n    grid-template-columns: repeat(1, 0.8fr);\n  }\n"]);return Ln=function(){return n},n}function qn(){var n=Object(b.a)(["\nposition: relative;\n  padding: 25px 0px 25px 0px;\n"]);return qn=function(){return n},n}var Qn=h.d.div(qn()),Yn=h.d.div(Ln()),Wn=h.d.div(Zn()),Xn=Object(h.d)(C)(Fn()),Hn=Object(h.d)(z)(Kn()),Gn=Object(h.d)(G)(An(),function(n){var t=n.activeColor;return n.theme[t]}),$n=function(n){function t(){var n,e;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=Object(m.a)(this,(n=Object(f.a)(t)).call.apply(n,[this].concat(r)))).state={isNewItemBarVisible:!1},e.handleNewItemBarToggle=function(){e.setState(function(n){return{isNewItemBarVisible:!n.isNewItemBarVisible}})},e}return Object(x.a)(t,n),Object(s.a)(t,[{key:"render",value:function(){var n=this.props,t=n.children,e=n.pageType,a=n.pageContext,i=this.state.isNewItemBarVisible;return r.a.createElement(r.a.Fragment,null,r.a.createElement(wn,{pageType:a}),r.a.createElement(Qn,{pageType:e},r.a.createElement(Wn,null,r.a.createElement(Xn,{as:"h1"},"notes"===e?"Dodaj now\u0105 notatk\u0119":null,"twitters"===e?"Dodaj nowego twitta":null,"articles"===e?"Dodaj nowy artyku\u0142":null),r.a.createElement(Hn,null,"dodaj","notes"===e?" notetk\u0119!":null,"twitters"===e?" twitta!":null,"articles"===e?" artyku\u0142!":null)),r.a.createElement(Gn,{onClick:this.handleNewItemBarToggle,icon:Jn.a,activeColor:a}),r.a.createElement(Mn,{handleClose:this.handleNewItemBarToggle,isVisible:i}),r.a.createElement(Yn,null,t)))}}]),t}(a.Component);$n.defaultProps={pageContext:"notes"};var nt=un($n),tt=function(n){var t=n.notes;return r.a.createElement(nt,{pageType:"notes"},t.map(function(n){return r.a.createElement(X,{cardType:"notes",id:n.id,title:n.title,content:n.content,created:n.created,key:n.id})}))};tt.defaultProps={notes:[]};var et=Object(l.b)(function(n){var t=n.notes;return console.log(n),{notes:t}})(tt),at=function(n){var t=n.articles;return r.a.createElement(nt,{pageType:"articles"},t.map(function(n){return r.a.createElement(X,{cardType:"articles",title:n.title,content:n.content,articleUrl:n.articleUrl,created:n.created,key:n.title,id:n.id})}))};at.defaultProps={articles:[]};var rt=Object(l.b)(function(n){return{articles:n.articles}})(at),it=function(n){var t=n.twitters;return r.a.createElement(nt,{pageType:"twitters"},t.map(function(n){return r.a.createElement(X,{cardType:"twitters",title:n.title,content:n.content,twitterName:n.twitterName,created:n.created,key:n.title,id:n.id})}))};it.defaultProps={twitters:[]};var ot=Object(l.b)(function(n){return{twitters:n.twitters}})(it),ct=function(n){var t=n.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(wn,null),t)};function ut(){var n=Object(b.a)(["\n  margin: 25px 0 50px 0;\n  font-size: 20px;\n  \n  @media(min-width: 500px){\n    font-size: 22px;\n  }\n  @media(min-width: 600px){\n    font-size: 28px;\n  }\n  ::first-letter {\n    text-transform: uppercase;\n  }\n"]);return ut=function(){return n},n}function lt(){var n=Object(b.a)(["\n  margin-bottom: 30px;\n  font-size: 12px;\n  width: 180px;\n  padding: 15px;\n  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.2);\n\n\n  @media(min-width: 500px){\n    font-size: 14px;\n    width: 250px;\n  }\n  @media(min-width: 600px){\n    font-size: 16px;\n    width: 350px;\n  }\n    @media(min-width: 1000px){\n    font-size: 20px;\n    width: 500px;\n  }\n"]);return lt=function(){return n},n}function dt(){var n=Object(b.a)(["\ndisplay: block;\nfont-weight: ",";\nfont-size: 10px;\ncolor: black;\ntext-transform: uppercase;\nmargin: 40px 0 30px;\n\n\n@media(min-width: 500px) {\n  font-size: 12px;\n}\n"]);return dt=function(){return n},n}function pt(){var n=Object(b.a)(["\n      padding: 10px;\n      width: 150px;\n      font-size: 10px;\n      text-decoration: none;\n      color: black;\n\n      @media(min-width: 600px) {\n        font-size: 14px;\n        width: 250px;\n      }\n\n"]);return pt=function(){return n},n}function st(){var n=Object(b.a)(["\n  margin: 0;\n  font-weight: ",";\n"]);return st=function(){return n},n}function mt(){var n=Object(b.a)(["\n  margin: 25px 0 0 0;\n"]);return mt=function(){return n},n}function ft(){var n=Object(b.a)(["\n  padding: 25px 150px 25px 30px;\n  max-width: 50vw;\n  position: relative;\n  @media (max-width: 1200px) {\n    max-width: 80vw;\n  }\n"]);return ft=function(){return n},n}var xt=h.d.div(ft()),ht=h.d.div(mt()),bt=(Object(h.d)(z)(st(),function(n){return n.theme.bold}),Object(h.d)(I)(pt())),wt=h.d.a(dt(),function(n){return n.theme.bold}),gt=Object(h.d)(z)(lt()),vt=Object(h.d)(C)(ut()),yt=function(n){var t=n.pageContext,e=n.title,a=(n.created,n.content),i=n.articleUrl;n.twitterName;return r.a.createElement(ct,null,r.a.createElement(xt,null,r.a.createElement(ht,null,r.a.createElement(vt,{big:!0,as:"h1"},e)),r.a.createElement(gt,null,a),"articles"===t&&r.a.createElement(wt,{href:i},"Otw\xf3rz artyku\u0142"),r.a.createElement(bt,{as:c.b,to:"/".concat(t),activecolor:t},"Zapisz")))};yt.defaultProps={title:"",created:"",content:"",articleUrl:"",twitterName:""};var jt=un(yt),Ot=function(n){function t(n){var e;return Object(p.a)(this,t),(e=Object(m.a)(this,Object(f.a)(t).call(this,n))).state={pageType:"notes"},e.state={},e}return Object(x.a)(t,n),Object(s.a)(t,[{key:"render",value:function(){var n="Komedia filmowa ",t="lorem lorem content lorem lorem content lorem lorem content lorem lorem content lorem lorem content lorem lorem content lorem lorem content",e="random",a="http://www.google.pl",i="1day";return r.a.createElement(jt,{pageType:this.state.pageType,title:n,created:i,content:t,articleUrl:a,twitterName:e})}}]),t}(a.Component),kt="/",zt="/notes",Et="/twitters",Ct="/articles",Tt="/articles/:id",Nt="/twitters/:id",It="/notes/:id",Vt=(e(67),e(68),e(24)),Rt=e(26),St=e(39),Dt={twitters:[{id:1,title:"Wprowadzenie do hook\xf3w",content:"Hooki s\u0105 nowym dodatkiem w Reakcie 16.8. Pozwalaj\u0105 one u\u017cywa\u0107 stanu i innych funkcjonalno\u015bci Reacta, bez u\u017cycia klas.",created:"1 day",twitterName:"aaa"},{id:2,title:"React Redux",content:"Od samego pocz\u0105tku musimy podkre\u015bli\u0107, \u017ce Redux nie ma zwi\u0105zku z React. Mo\u017cesz pisa\u0107 aplikacje Redux za pomoc\u0105 React, Angular, Ember, jQuery lub waniliowego JavaScript.",created:"1 day",twitterName:"dan_abramov"},{id:3,title:"Styled component w React",content:"Styled-components jest wynikiem zastanawiania si\u0119, w jaki spos\xf3b mo\u017cemy ulepszy\u0107 CSS do stylizacji system\xf3w komponent\xf3w React. Koncentruj\u0105c si\u0119 na pojedynczym przypadku u\u017cycia, uda\u0142o nam si\u0119 zoptymalizowa\u0107 do\u015bwiadczenie dla programist\xf3w, a tak\u017ce wydajno\u015b\u0107 dla u\u017cytkownik\xf3w ko\u0144cowych.",created:"1 day",twitterName:"aaa"}],articles:[{id:1,title:"React artyku\u0142",content:"Nasz du\u017cy zesp\xf3\u0142 in\u017cynier\xf3w korzysta z tego przewodnika rozwoju",articleUrl:"https://www.freecodecamp.org/news/grabs-front-end-guide-for-large-teams-484d4033cc41/",created:"1 day"},{id:2,title:"Czysty kod w React",content:"Jak napisa\u0107 bardzo czytelny kod React - 10 wskaz\xf3wek dotycz\u0105cych stylu kodowania",created:"1 day",articleUrl:"https://youtube.com/helloroman"},{id:3,title:"You gave React a bad name",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",created:"1 day",articleUrl:"https://www.freecodecamp.org/news/10-points-to-remember-thatll-help-you-master-coding-in-reactjs-library-d0520d8c73d8/"},{id:4,title:"Kurs Reacta - udemy",content:"React 16 - Kompletny przewodnik (w tym React Router 4 i Redux)",articleUrl:"https://www.udemy.com/course/react-the-complete-guide-incl-redux/?LSNPUBID=JVFxdTr9V80&ranEAID=JVFxdTr9V80&ranMID=39197&ranSiteID=JVFxdTr9V80-Q3q.KljcfruAzgZwaqyUjw",created:"10 days"},{id:5,title:"Kompletny kurs React Native i Redux",content:"Tworzenie aplikacji na iOS i Androida od zera - buduj pe\u0142ne aplikacje mobilne React Native bardzo szybko!",articleUrl:"https://www.udemy.com/course/the-complete-react-native-and-redux-course/?LSNPUBID=JVFxdTr9V80&ranEAID=JVFxdTr9V80&ranMID=39197&ranSiteID=JVFxdTr9V80-8suJ_4d.g3Q1mcWkI6wKCA",created:"10 days"}],notes:[{id:1,title:"Zapraszam do dodawania notatek!",created:"1 day",content:'Ka\u017cdy mo\u017ce doda\u0107 notatk\u0119 przycisk "+" prawy dolny r\xf3g. Zapraszam! '},{id:2,title:"Zakupy",created:"1 day",content:"Kupi\u0107: 1. Banany 2. Pomara\u0144cze 3.Cytryny 4.Cebula 5. Kiwi"}]},Ut=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":return Object(S.a)({},n,Object(Rt.a)({},t.payload.itemType,[].concat(Object(St.a)(n[t.payload.itemType]),[t.payload.item])));case"REMOVE_ITEM":return Object(S.a)({},n,Object(Rt.a)({},t.payload.itemType,Object(St.a)(n[t.payload.itemType].filter(function(n){return n.id!==t.payload.id}))));default:return n}},Pt=e(54),Bt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Vt.c,Mt=Object(Vt.d)(Ut,Bt(Object(Vt.a)(Pt.a))),_t=function(){return r.a.createElement(l.a,{store:Mt},r.a.createElement(c.a,{basename:"react"},r.a.createElement(O,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:kt,render:function(){return r.a.createElement(u.a,{to:"/notes"})}}),r.a.createElement(u.b,{exact:!0,path:zt,component:et}),r.a.createElement(u.b,{path:It,component:Ot}),r.a.createElement(u.b,{exact:!0,path:Ct,component:rt}),r.a.createElement(u.b,{path:Tt,component:Ot}),r.a.createElement(u.b,{exact:!0,path:Et,component:ot}),r.a.createElement(u.b,{path:Nt,component:Ot})))))};o.a.render(r.a.createElement(_t,null),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.39a2030f.chunk.js.map