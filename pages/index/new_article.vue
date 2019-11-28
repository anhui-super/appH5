<template>
	<view class="content">
		<textarea class="txtContent" v-model="blog" maxlength=-1 placeholder="这一刻的想法..." />
		
		<button class="submitBtn" size="mini" type="primary" @click="onewordperday">发布</button>
	</view>
</template>

<script>
	import {ajax,setTime,showTips} from '@/ajax.js'
	export default {
		data() {
			return {
				blog:''
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '编辑'
			});
		},
		methods: {
			onewordperday(){
				let login = uni.getStorageSync('login')
				if(login!=''&&login!=null&&login!=undefined){
					if(this.blog.length<10){
						showTips('发布内容不少于10个字')
						return false;
					}
					uni.request({
						url: ajax.onewordperday, //仅为示例，并非真实接口地址。
						header:{
							Authorization:'bearer' +' '+ login
						},
						method:'POST',
						data:{
							blog:this.blog
						},
						success: (res) => {
							if(res.data.code==200){
								showTips('发布成功')
								uni.navigateTo({
									url: '/pages/index/index'
								})
							}
						}
					});
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding: 20upx;
		.txtContent{
			font-size: 26upx;
			width: 100%;
			height: 350upx;
			padding: 10upx;
			margin-bottom: 80upx;
			box-sizing: border-box;
		}
	}
</style>
