<template>
	<view class="content">
		<view class="list">
			<view class="item" v-for="(item,index) in list" :key="index" @click="itemBtn(item._id)">
				<view class="txt">{{item.blog}}</view>
				<view class="name">{{item.author}}</view>
			</view>
		</view>
		
		<view class="sidbar" @click="sedbarBtn">
			<view class="icon"></view>
			<button class="icon" withCredentials="true" open-type="getUserInfo" @getuserinfo="bindGetUserInfo"></button>
		</view>
	</view>
</template>

<script>
	import {ajax,showLoading,hideLoading} from '@/ajax.js'
	export default {
		data() {
			return {
				list:[],
				userinfo:'',
				canIUse: uni.canIUse('button.open-type.getUserInfo')
			}
		},
		onLoad() {
			let _this = this
			uni.setNavigationBarTitle({
				title: '首页'
			});
			// #ifdef MP-WEIXIN
			uni.login({
			  provider: 'weixin',
			  success: function (loginRes) {
				uni.getUserInfo({
				  provider: 'weixin',
				  success: function (infoRes) {
					  _this.userinfo = infoRes.userInfo
				  }
				});
			  }
			});
			// #endif
		},
		onShow() {
			let _this = this
			let login = uni.getStorageSync('login')
			if(login==''||login==null||login==undefined){
				// #ifdef MP-WEIXIN
				uni.login({  
					success: function(res) { 
						uni.request({
							url: ajax.wxlogin, //仅为示例，并非真实接口地址。
							header:{
								'Content-Type':'application/x-www-form-urlencoded'
							},
							data:{
								code:res.code
							},
							method:'POST',
							success: (res) => {
								if(res.data.code==200){
									let timeData = (new Date()).getTime() + 1000 * 60 * 60 * 2;
									uni.setStorageSync('login', res.data.data.token);
									uni.setStorageSync('time', timeData);
									_this.info()
								}
							}
						});
					}  
				});
			    // #endif
				// #ifdef H5
					uni.navigateTo({
						url: '/pages/login/login'
					})
				// #endif
			}else{
				_this.info()
			}
		},
		methods: {
			sedbarBtn(){
				// #ifdef H5
					let login = uni.getStorageSync('login')
					if(login!=''&&login!=null&&login!=undefined){
						uni.navigateTo({
							url: '/pages/index/new_article'
						})
					}
					
				// #endif
			},
			
			bindGetUserInfo(e){
				this.userinfo = e.detail.userInfo;
				if(this.userinfo!=''){
					uni.navigateTo({
						url: '/pages/index/new_article'
					})
				}
				console.log('1111',e)
			},
			info(){
				let _this = this;
				let login = uni.getStorageSync('login')
				if(login!=''&&login!=null&&login!=undefined){
					showLoading()
					uni.request({
						url: ajax.allperday, //仅为示例，并非真实接口地址。
						header:{
							Authorization:'bearer' +' '+ login
						},
						data:{},
						success: (res) => {
							if(res.data.code==200){
								hideLoading()
								_this.list = res.data.data
							}
						}
					});
				}
			},
			itemBtn(id){
				uni.navigateTo({
					url: '/pages/index/article_details?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
	.content{
		padding: 20upx 25upx;
	}
	.list{
		width: 100%;
		
		
	}
	.list .item{
		padding: 20upx;
		height: 160upx;
		margin-bottom: 20upx;
		border-radius: 10upx;
		border: 1px solid rgba(0,0,0,.1);
		border-top: none;
		position: relative;
		box-shadow: 0 5upx 10upx rgba(0,0,0,.1);
	}
	.list .item .txt{
		font-size: 26upx;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.name{
		text-align: right;
		font-size: 24upx;
		position: absolute;
		bottom: 30upx;
		right: 20upx;
		padding: 0 10upx 3upx;
		border-bottom: 1px solid #555555;
		/* margin-top: 20upx; */
	}
	.sidbar{
		position: fixed;
		right: 20upx;
		bottom: 20upx;
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
		overflow: hidden;
		button{
			opacity: 0
		}
		.icon{
			position: absolute;
			top: 0;
			left: 0;
			line-height: 80upx;
			font-size: 24upx;
			width: 100%;
			height: 100%;
			text-align: center;
			background: url('https://img2.loho88.com/ilout/icon.png') 0 0 no-repeat;
			background-size: 100%;
		}
	}
</style>
