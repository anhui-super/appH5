<template>
	<view class="content">
		<view class="list">
			<view class="item" v-for="(item,index) in list" :key="index" @click="itemBtn(item._id)">
				<view class="txt">{{item.blog}}</view>
				<view class="name">{{item.author}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {ajax} from '@/ajax.js'
	export default {
		data() {
			return {
				list:[]
			}
		},
		onLoad() {
			let _this = this;
			let login = uni.getStorageSync('login')
			if(login!=''&&login!=null&&login!=undefined){
				uni.request({
					url: ajax.allperday, //仅为示例，并非真实接口地址。
					header:{
						Authorization:'bearer' +' '+ login
					},
					data:{},
					success: (res) => {
						if(res.data.code==200){
							_this.list = res.data.data
						}
					}
				});
			}
			 uni.login({  
                success: function(res) {  
					console.log(res)
                    // 获取code  
                    // console.log(JSON.stringify(res));  
                }  
            });  
		},
		methods: {
			itemBtn(id){
				uni.navigateTo({
					url: '/pages/index/article_details?id='+id
				})
			}
		}
	}
</script>

<style>
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
</style>
