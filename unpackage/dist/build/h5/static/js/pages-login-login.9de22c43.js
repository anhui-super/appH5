(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{3047:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-uni-view",{staticClass:"loginBox"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(0==t.isStatus?"注册":"登录"))]),e("v-uni-view",{staticClass:"uni-form-item uni-column"},[e("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入用户名"},model:{value:t.userphone,callback:function(s){t.userphone=s},expression:"userphone"}})],1),e("v-uni-view",{staticClass:"uni-form-item uni-column"},[e("v-uni-input",{staticClass:"uni-input",attrs:{password:"",placeholder:"请输入密码"},model:{value:t.userpassword,callback:function(s){t.userpassword=s},expression:"userpassword"}})],1),0==t.isStatus?e("v-uni-view",{staticClass:"uni-form-item uni-column"},[e("v-uni-input",{staticClass:"uni-input",attrs:{password:"",placeholder:"请再次输入密码"},model:{value:t.twouserpassword,callback:function(s){t.twouserpassword=s},expression:"twouserpassword"}})],1):t._e(),e("v-uni-view",{staticClass:"tips"},[e("v-uni-text",{on:{click:function(s){s=t.$handleEvent(s),t.goBtn(s)}}},[t._v(t._s(1==t.isStatus?"去注册":"去登录"))])],1),e("v-uni-button",{staticClass:"footBtn",attrs:{type:"primary"},on:{click:function(s){s=t.$handleEvent(s),t.primaryBtn(s)}}},[t._v(t._s(0==t.isStatus?"注册":"登录"))])],1)},n=[];e.d(s,"a",function(){return i}),e.d(s,"b",function(){return n})},"41dd":function(t,s,e){"use strict";var i=e("55b2"),n=e.n(i);n.a},"55b2":function(t,s,e){var i=e("7981");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("665ea38a",i,!0,{sourceMap:!1,shadowMode:!1})},7451:function(t,s,e){"use strict";e.r(s);var i=e("3047"),n=e("8990");for(var a in n)"default"!==a&&function(t){e.d(s,t,function(){return n[t]})}(a);e("41dd");var o=e("2877"),r=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,"5d81e834",null);s["default"]=r.exports},7981:function(t,s,e){s=t.exports=e("2350")(!1),s.push([t.i,".loginBox[data-v-5d81e834]{padding:%?50?%}.title[data-v-5d81e834]{font-size:%?36?%;font-weight:700;margin-bottom:%?50?%}.tips[data-v-5d81e834]{color:red;font-size:%?24?%;text-align:right;padding-right:%?10?%}.uni-form-item[data-v-5d81e834]{width:100%;border:1px solid rgba(0,0,0,.5);font-size:%?24?%;padding:0 %?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 auto %?35?%;border-radius:%?10?%;height:%?70?%}.uni-input[data-v-5d81e834]{height:100%}.footBtn[data-v-5d81e834]{margin-top:%?60?%}",""])},8990:function(t,s,e){"use strict";e.r(s);var i=e("9f25"),n=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(s,t,function(){return i[t]})}(a);s["default"]=n.a},"9f25":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var i=e("1190"),n={data:function(){return{isStatus:1,userphone:"",userpassword:"",twouserpassword:""}},mounted:function(){},methods:{goBtn:function(){var t=1;1==this.isStatus&&(t=0),this.isStatus=t,this.userphone="",this.userpassword="",this.twouserpassword=""},setStorageSyncLogin:function(t,s){var e=(new Date).getTime()+72e5;uni.setStorageSync("login",t),uni.setStorageSync("time",e)},primaryBtn:function(){var t=this;if(""==this.userphone||this.userphone.length<4)return(0,i.showTips)("用户名不正确"),!1;if(""==this.userpassword||this.userpassword.length<4)return(0,i.showTips)("密码不正确"),!1;if(1==this.isStatus)uni.request({url:i.ajax.login,data:{username:this.userphone,userpwd:this.userpassword},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",success:function(s){200==s.data.code?(t.setStorageSyncLogin(s.data.data.token),uni.navigateTo({url:"/pages/index/index"}),(0,i.showTips)("登录成功")):(0,i.showTips)("登录失败")}});else{if(""==this.twouserpassword||this.twouserpassword.length<4||this.userpassword!=this.twouserpassword)return(0,i.showTips)("两次密码不一致"),!1;uni.request({url:i.ajax.signup,data:{username:this.userphone,userpwd:this.userpassword},method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(s){console.log(s.data.data),200==s.data.code?(uni.navigateTo({url:"/pages/index/index"}),t.setStorageSyncLogin(s.data.data.token),(0,i.showTips)("注册成功")):(0,i.showTips)("注册失败")}})}}}};s.default=n}}]);