<template>
	<view class="loginBox">
		<view class="title">{{isStatus==0?'注册':'登录'}}</view>
		<view class="uni-form-item uni-column">
			<input class="uni-input" placeholder="请输入用户名" v-model="userphone" />
		</view>
		<view class="uni-form-item uni-column">
			<input class="uni-input" password placeholder="请输入密码" v-model="userpassword" />
		</view>
		<view class="uni-form-item uni-column" v-if="isStatus==0">
			<input class="uni-input" password placeholder="请再次输入密码"  v-model="twouserpassword" />
		</view>
		
		<view class="tips"><text @click="goBtn">{{isStatus==1?'去注册':'去登录'}}</text> </view>
		
		<button type="primary" class="footBtn" @click="primaryBtn">{{isStatus==0?'注册':'登录'}}</button>
	</view>
</template>

<script>
	import {ajax,showTips} from '@/ajax.js'
	export default {
		data() {
			return {
				isStatus: 1,
				userphone:'',
				userpassword:'',
				twouserpassword:''
			}
		},
		mounted(){
			
		
		},
		methods:{
			goBtn(){
				let isStatus = 1
				if(this.isStatus==1){
					isStatus = 0;
				}
				this.isStatus = isStatus;
				this.userphone =''
				this.userpassword=''
				this.twouserpassword=''
			},
			setStorageSyncLogin(data,time){
				let timeData = (new Date()).getTime() + 1000 * 60 * 60 * 2;
				uni.setStorageSync('login', data);
				uni.setStorageSync('time', timeData);
			},
			primaryBtn(){
				let _this = this;
				if(this.userphone==''||this.userphone.length<4){
					showTips('用户名不正确')
					return false;
				}else if(this.userpassword==''||this.userpassword.length<4){
					showTips('密码不正确')
					return false;
				}
				if(this.isStatus==1){ //登录
					uni.request({
						url: ajax.login, 
						data:{
							username:this.userphone,
							userpwd:this.userpassword
						},
						header:{
							'Content-Type':'application/x-www-form-urlencoded'
						},
						method:'POST',
						success: (res) => {
							if(res.data.code==200){
								this.setStorageSyncLogin(res.data.data.token)
								uni.navigateTo({
									url: '/pages/index/index'
								})
								showTips('登录成功')
							}else{
								showTips('登录失败')
							}
						}
					});
				}else{ //注册 
					if(this.twouserpassword==''||this.twouserpassword.length<4||this.userpassword!=this.twouserpassword){
						showTips('两次密码不一致')
						return false;
					}
					uni.request({
						url: ajax.signup, 
						data:{
							username:this.userphone,
							userpwd:this.userpassword
						},
						method:'POST',
						header:{
							'Content-Type':'application/x-www-form-urlencoded'
						},
						success: (res) => {
							console.log(res.data.data)
							if(res.data.code==200){
								uni.navigateTo({
									url: '/pages/index/index'
								})
								this.setStorageSyncLogin(res.data.data.token)
								showTips('注册成功')
							}else{
								showTips('注册失败')
							}
						}
					});
				}
			}
		}
	}
</script>

<style>
	.loginBox{
		padding: 50upx;
	}
	.title{
		font-size: 36upx;
		font-weight: bold;
		margin-bottom: 50upx;
	}
	.tips{
		color: red;
		font-size: 24upx;
		text-align: right;
		padding-right: 10upx;
	}
	.uni-form-item{
		width: 100%;
		border:1px solid rgba(0,0,0,.5);
		font-size: 24upx;
		padding: 0 20upx;
		box-sizing: border-box;
		margin: 0 auto 35upx;
		border-radius: 10upx;
		height: 70upx;
	}
	.uni-input{
		height: 100%;
	}
	.footBtn{
		margin-top: 60upx;
	}
</style>
