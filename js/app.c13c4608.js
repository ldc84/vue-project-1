(function(e){function t(t){for(var r,i,o=t[0],c=t[1],u=t[2],d=0,f=[];d<o.length;d++)i=o[d],s[i]&&f.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},s={app:0},n=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-api-project/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"02bf":function(e,t,a){},"034f":function(e,t,a){"use strict";var r=a("64a9"),s=a.n(r);s.a},"1dd7":function(e,t,a){"use strict";var r=a("d78c"),s=a.n(r);s.a},4678:function(e,t,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=n(e);return a(t)}function n(e){var t=r[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}s.keys=function(){return Object.keys(r)},s.resolve=n,e.exports=s,s.id="4678"},"4a48":function(e,t,a){"use strict";var r=a("64fb"),s=a.n(r);s.a},"4a5d":function(e,t,a){"use strict";var r=a("02bf"),s=a.n(r);s.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var r=a("2b0e"),s=a("24b4"),n=a.n(s),i=(a("202f"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("a-spin",{attrs:{spinning:e.loading}},[a("Header"),a("div",{attrs:{id:"body"}},[a("router-view")],1),a("Footer")],1)],1)}),o=[],c=new r["default"],u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{attrs:{id:"header"}},[a("div",{staticClass:"container"},[a("h1",[a("router-link",{attrs:{to:"/"}},[e._v("로고")])],1),a("nav",{attrs:{id:"gnb"}},[a("ul",[a("li",[a("router-link",{attrs:{to:""}},[e._v("nav1")])],1),a("li",[a("router-link",{attrs:{to:""}},[e._v("nav2")])],1),a("li",[a("router-link",{attrs:{to:""}},[e._v("nav3")])],1),a("li",[a("router-link",{attrs:{to:""}},[e._v("nav4")])],1)])]),a("ul",{staticClass:"top-utill"},[e.isLogin?e._e():a("li",[a("router-link",{attrs:{to:"/SignUp"}},[a("a-tooltip",{attrs:{placement:"bottomRight",title:"Sign Up"}},[a("a-avatar",{attrs:{icon:"user-add"}})],1)],1)],1),e.isLogin?e._e():a("li",[a("router-link",{attrs:{to:"/SignIn"}},[a("a-tooltip",{attrs:{placement:"bottomRight",title:"Sign In"}},[a("a-avatar",{attrs:{icon:"login"}})],1)],1)],1),e.isLogin?a("li",[a("a-tooltip",{attrs:{placement:"bottomRight",title:this.$store.state.userInfo.email}},[a("a-avatar",{attrs:{icon:"user"}})],1)],1):e._e(),e.isLogin?a("li",{on:{click:e.signOut}},[a("a-tooltip",{attrs:{placement:"bottomRight",title:"Sign Out"}},[a("a-avatar",{attrs:{icon:"logout"}})],1)],1):e._e()])])])},l=[],d=a("be94"),f=a("8aa5"),m=a.n(f),p=a("2f62"),b={data:function(){return{}},created:function(){this.$store.commit("userInfoMutation")},computed:Object(d["a"])({},Object(p["c"])(["isLogin"])),methods:Object(d["a"])({},Object(p["b"])(["signOut"]))},h=b,j=(a("4a5d"),a("2877")),g=Object(j["a"])(h,u,l,!1,null,"36c00b4a",null);g.options.__file="Header.vue";var v=g.exports,y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},w=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{attrs:{id:"footer"}},[a("p",[e._v("\n    © 2018 by "),a("strong",[e._v("Dongchun Lee")])])])}],k={data:function(){return{}}},S=k,_=(a("58ea"),Object(j["a"])(S,y,w,!1,null,"10639d9f",null));_.options.__file="Footer.vue";var E=_.exports,I=(a("7d05"),{name:"Index",data:function(){return{loading:!1}},components:{Header:v,Footer:E},created:function(){this.$notification.config({placement:"bottomRight",bottom:"50px",duration:3})},mounted:function(){var e=this;c.$on("loadingShow",function(){e.loading=!0}),c.$on("loadingHide",function(){e.loading=!1}),c.$on("loginSuccess",function(t){e.$notification.success({message:"Sign In Success",description:"".concat(t,"님 방문해주셔서 감사합니다.")})}),c.$on("loginFail",function(t){e.$notification.error({message:"Sign In Failed",description:t})}),c.$on("loginOut",function(){e.$notification.info({message:"Sign Out",description:"로그아웃이 완료되었습니다."}),e.$router.push("/")})}}),O=I,$=(a("034f"),Object(j["a"])(O,i,o,!1,null,null,null));$.options.__file="App.vue";var z=$.exports,C=(a("7f7f"),a("8c4f"));a("28a5");r["default"].use(p["a"]);var U=window.localStorage,x=new p["a"].Store({state:{email:"",password:"",loginState:!1,userInfo:{email:"",uid:""}},getters:{isLogin:function(e){return e.loginState},isUser:function(e){return e.userInfo}},mutations:{loginSuccess:function(e){e.loginState=!0},emailMutation:function(e,t){e.email=t},passwordMutation:function(e,t){e.password=t},userInfoMutation:function(e){U.getItem("userEmail")&&(e.loginState=!0,e.userInfo.email=U.getItem("userEmail"),e.userInfo.uid=U.getItem("userUid"))}},actions:{signInUser:function(e,t){var a=e.state,r=e.dispatch;c.$emit("loadingShow"),f["auth"]().signInWithEmailAndPassword(a.email,a.password).then(function(){console.log("login success"),r("signInAuthState")}).catch(function(e){console.log(e.code),c.$emit("loginFail",e.message),c.$emit("loadingHide")})},signInAuthState:function(e){var t=e.commit,a=e.state;f["auth"]().onAuthStateChanged(function(e){if(e){var r=e.email,s=e.uid,n=r.split("@")[0];a.userInfo.email=r,a.userInfo.uid=s,U.setItem("userEmail",r),U.setItem("userUid",s),c.$emit("loginSuccess",n),ee.push("/"),t("loginSuccess"),c.$emit("loadingHide")}})},updateUserInfo:function(e){var t=e.state;f["auth"]().onAuthStateChanged(function(e){t.loginState=!!e})},signOut:function(e){var t=e.state;c.$emit("loadingShow"),f["auth"]().signOut().then(function(){t.loginState=!1,c.$emit("loginOut"),U.removeItem("userEmail"),U.removeItem("userUid"),c.$emit("loadingHide")})}}}),P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{attrs:{id:"main"}},[e._v("\n  main\n")])},F=[],D={data:function(){return{}}},T=D,M=(a("d0bc"),Object(j["a"])(T,P,F,!1,null,"292ec284",null));M.options.__file="index.vue";var A=M.exports,H=function(){var e=this,t=this,a=t.$createElement,r=t._self._c||a;return r("div",{attrs:{id:"signUp"}},[r("h2",{staticClass:"h2-title"},[t._v("Sign Up")]),r("a-form",{attrs:{autoFormCreate:function(t){e.form=t}},on:{submit:t.handleSubmit}},[t.form?r("div",[r("a-form-item",{attrs:{validateStatus:t.ErrorCheck("userEmail")?"error":"",help:t.ErrorCheck("userEmail")||"",fieldDecoratorId:"userEmail",fieldDecoratorOptions:{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]}}},[r("a-input",{attrs:{placeholder:"User Email",size:"large"}})],1),r("a-form-item",{attrs:{validateStatus:t.ErrorCheck("password")?"error":"",help:t.ErrorCheck("password")||"",fieldDecoratorId:"password",fieldDecoratorOptions:{rules:[{min:6,message:"Please enter at least 6 characters"},{required:!0,message:"Please input your Password!"}]}}},[r("a-input",{attrs:{type:"password",size:"large",placeholder:"Password"}})],1),r("a-form-item",{attrs:{validateStatus:t.ErrorCheck("passwordConfirm")?"error":"",help:t.ErrorCheck("passwordConfirm")||"",fieldDecoratorId:"passwordConfirm",fieldDecoratorOptions:{rules:[{required:!0,message:"Please input your Password!"},{validator:t.compareToFirstPassword}]}}},[r("a-input",{attrs:{type:"password",size:"large",placeholder:"Password Confirm"}})],1),r("a-form-item",{staticClass:"item-center"},[r("a-button",{attrs:{type:"primary",htmlType:"submit",size:"large",disabled:t.hasErrors(t.form.getFieldsError())}},[t._v("\n          Sign Up\n        ")])],1)],1):t._e()])],1)},L=[];a("ac6a"),a("456d");function q(e){return Object.keys(e).some(function(t){return e[t]})}var R={data:function(){return{hasErrors:q,form:null}},mounted:function(){var e=this;this.$nextTick(function(){e.form.validateFields()})},methods:{SignUp:function(e){var t=this;c.$emit("loadingShow"),m.a.auth().createUserWithEmailAndPassword(e.userEmail,e.password).then(function(e){console.log(e),t.$notification.success({message:"Success",description:"회원가입이 완료되었습니다."}),t.$router.push("/"),c.$emit("loadingHide")}).catch(function(e){console.log(e),c.$emit("loadingHide")})},ErrorCheck:function(e){var t=this.form,a=t.getFieldError,r=t.isFieldTouched;return r(e)&&a(e)},compareToFirstPassword:function(e,t,a){var r=this.form;t&&t!==r.getFieldValue("password")?a("Two passwords that you enter is inconsistent!"):a()},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields(function(e,a){e||t.SignUp(a)})}}},N=R,J=(a("1dd7"),Object(j["a"])(N,H,L,!1,null,"5fae4d83",null));J.options.__file="signUp.vue";var W=J.exports,X=function(){var e=this,t=this,a=t.$createElement,r=t._self._c||a;return r("div",{attrs:{id:"signUp"}},[r("h2",{staticClass:"h2-title"},[t._v("Sign In")]),r("a-form",{attrs:{autoFormCreate:function(t){e.form=t}},on:{submit:t.handleSubmit}},[t.form?r("div",[r("a-form-item",{attrs:{validateStatus:t.ErrorCheck("email")?"error":"",help:t.ErrorCheck("email")||"",fieldDecoratorId:"email",fieldDecoratorOptions:{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]}}},[r("a-input",{attrs:{placeholder:"User Email",size:"large"},model:{value:t.e,callback:function(e){t.e=e},expression:"e"}},[r("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),r("a-form-item",{attrs:{validateStatus:t.ErrorCheck("password")?"error":"",help:t.ErrorCheck("password")||"",fieldDecoratorId:"password",fieldDecoratorOptions:{rules:[{min:6,message:"Please enter at least 6 characters"},{required:!0,message:"Please input your Password!"}]}}},[r("a-input",{attrs:{type:"password",size:"large",placeholder:"Password"},model:{value:t.p,callback:function(e){t.p=e},expression:"p"}},[r("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),r("a-form-item",{staticClass:"item-center"},[r("a-button",{attrs:{type:"primary",htmlType:"submit",size:"large",disabled:t.hasErrors(t.form.getFieldsError())}},[t._v("\n          Sign In\n        ")])],1)],1):t._e()])],1)},B=[];function G(e){return Object.keys(e).some(function(t){return e[t]})}var K={data:function(){return{hasErrors:G,form:null,e:"",p:""}},mounted:function(){var e=this;this.$nextTick(function(){e.form.validateFields()})},methods:Object(d["a"])({},Object(p["b"])(["signInUser"]),{ErrorCheck:function(e){var t=this.form,a=t.getFieldError,r=t.isFieldTouched;return r(e)&&a(e)},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields(function(e,a){e||(t.$store.commit("emailMutation",t.e),t.$store.commit("passwordMutation",t.p),t.signInUser())})}})},V=K,Z=(a("4a48"),Object(j["a"])(V,X,B,!1,null,"6b64f001",null));Z.options.__file="signIn.vue";var Q=Z.exports;r["default"].use(C["a"]);var Y=function(e,t,a){x.dispatch("updateUserInfo").finally(function(){x.getters.isLogin?a({name:"Main"}):a()})},ee=new C["a"]({mode:"history",base:"/vue-api-project/",routes:[{path:"/",name:"Main",component:A},{path:"/SignUp",name:"SingUp",component:W,beforeEnter:Y},{path:"/SignIn",name:"SingIn",component:Q,beforeEnter:Y}]}),te=a("bc3a"),ae=a.n(te);a("2ef0");r["default"].config.productionTip=!1,r["default"].use(n.a),r["default"].prototype.$http=ae.a;var re={apiKey:"AIzaSyAC67bytXN8ZT7P2Gr2t19HFPqtUec0OXk",authDomain:"vue-api-project.firebaseapp.com",databaseURL:"https://vue-api-project.firebaseio.com",projectId:"vue-api-project",storageBucket:"vue-api-project.appspot.com",messagingSenderId:"770926329084"};m.a.initializeApp(re),new r["default"]({router:ee,store:x,render:function(e){return e(z)}}).$mount("#app")},"58ea":function(e,t,a){"use strict";var r=a("6770"),s=a.n(r);s.a},"64a9":function(e,t,a){},"64fb":function(e,t,a){},6770:function(e,t,a){},"7d05":function(e,t,a){},c34a:function(e,t,a){},d0bc:function(e,t,a){"use strict";var r=a("c34a"),s=a.n(r);s.a},d78c:function(e,t,a){}});
//# sourceMappingURL=app.c13c4608.js.map