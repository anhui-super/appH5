(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{2943:function(t,e,s){},"48ec":function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s("1190"),o={data:function(){return{isStatus:1,userphone:"",userpassword:"",twouserpassword:""}},mounted:function(){},methods:{goBtn:function(){var t=1;1==this.isStatus&&(t=0),this.isStatus=t,this.userphone="",this.userpassword="",this.twouserpassword=""},setStorageSyncLogin:function(e,s){var n=(new Date).getTime()+72e5;t.setStorageSync("login",e),t.setStorageSync("time",n)},primaryBtn:function(){var e=this;if(""==this.userphone||this.userphone.length<4)return(0,n.showTips)("用户名不正确"),!1;if(""==this.userpassword||this.userpassword.length<4)return(0,n.showTips)("密码不正确"),!1;if(1==this.isStatus)t.request({url:n.ajax.login,data:{username:this.userphone,userpwd:this.userpassword},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",success:function(s){200==s.data.code?(e.setStorageSyncLogin(s.data.data.token),t.navigateTo({url:"/pages/index/index"}),(0,n.showTips)("登录成功")):(0,n.showTips)("登录失败")}});else{if(""==this.twouserpassword||this.twouserpassword.length<4||this.userpassword!=this.twouserpassword)return(0,n.showTips)("两次密码不一致"),!1;t.request({url:n.ajax.signup,data:{username:this.userphone,userpwd:this.userpassword},method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(s){console.log(s.data.data),200==s.data.code?(t.navigateTo({url:"/pages/index/index"}),e.setStorageSyncLogin(s.data.data.token),(0,n.showTips)("注册成功")):(0,n.showTips)("注册失败")}})}}}};e.default=o}).call(this,s("543d")["default"])},7451:function(t,e,s){"use strict";s.r(e);var n=s("9e71"),o=s("8990");for(var a in o)"default"!==a&&function(t){s.d(e,t,function(){return o[t]})}(a);s("a414");var r=s("2877"),i=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},8990:function(t,e,s){"use strict";s.r(e);var n=s("48ec"),o=s.n(n);for(var a in n)"default"!==a&&function(t){s.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},"9e71":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];s.d(e,"a",function(){return n}),s.d(e,"b",function(){return o})},a414:function(t,e,s){"use strict";var n=s("2943"),o=s.n(n);o.a}},[["70c2","common/runtime","common/vendor"]]]);