<template>
	<view class="details">
		<view class="userImg"></view>
		<view class="content">
			<view class="userName">
				<text class="txt">{{info.author}}</text>
				<text class="auther">楼主</text>
			</view>
			<view class="userTime">{{info.newTime}}</view>
			<rich-text class="text" :nodes="info.blog"></rich-text>
			<view class="comments" v-if="info.comments.length>0">
				<view class="item" v-for="(item,index) in info.comments" :key="index">
					<text class="one" @click="toUser(item)">{{item.author}} </text> 回复 {{item.replyTo}}: {{item.body}} <text class="time">{{item.newTime}}</text>
				</view>
				
			<!-- 	<view class="note" v-if="info.comments.length==0">
					<image class="notImg" src="../../static/zanwushuju.png" mode=""></image>
					<text class="txt">快来抢沙发~~~~</text>
				</view> -->
			</view>
		</view>
		
		<view class="foot">
			<text class="toName" v-if="toUserName!=''">@ {{toUserName}} </text>
			<input class="edit" type="text" v-model="comment" placeholder="我也说两句..." @confirm="submit" />
		</view>
	</view>
</template>

<script>
	import {ajax,setTime,showTips} from '@/ajax.js'
	export default {
		data() {
			return {
				id:'',
				info:'',  		//初始化数据
				toUserName:'',  //留言的对象
				toUserId:'',	//留言的对象ID
				comment:''      //回复帖子内容
			}
		},
		onLoad(e) {
			this.id = e.id
			this.infoFun()
		},
		methods: {
			infoFun(){
				let _this = this;
				let login = uni.getStorageSync('login')
				if(login!=''&&login!=null&&login!=undefined){
					uni.request({
						url: ajax.detail+ this.id, //仅为示例，并非真实接口地址。
						header:{
							Authorization:'bearer' +' '+ login
						},
						success: (res) => {
							if(res.data.code==200){
								_this.info = res.data.data;
								_this.info.newTime = setTime(res.data.data.date)
								_this.info.comments.map(es=>{
									es.newTime = setTime(es.date)
								})
							}
						}
					});
				}
			},
			toUser(e){
				console.log(e)
				this.toUserName = e.author
				this.toUserId = e._id
			},
			submit(){
				let login = uni.getStorageSync('login')
				if(login!=''&&login!=null&&login!=undefined){
					if(this.toUserName!=''){ //给别人留言
						uni.request({
							url: ajax.replyreply,
							header:{
								Authorization:'bearer' +' '+ login
							},
							method:'POST',
							data:{
								blog_id: this.info._id,
								reply_id: this.toUserId,
								comment: this.comment
							},
							success: (res) => {
								if(res.data.code==200){
									showTips('留言成功')
									this.toUserName='';
									this.comment='';
									this.toUserId='';
									this.infoFun()
								}
							}
						});
					}else{  //给文章留言
						uni.request({
							url: ajax.reply,
							header:{
								Authorization:'bearer' +' '+ login
							},
							method:'POST',
							data:{
								id: this.info._id,
								comment: this.comment
							},
							success: (res) => {
								if(res.data.code==200){
									showTips('留言成功')
									this.toUserName='';
									this.comment='';
									this.toUserId='';
									this.infoFun()
								}
							}
						});
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	.details{
		padding: 20upx 20upx 20upx 100upx;
		position: relative;
		.userImg{
			width:70upx;
			height: 70upx;
			background:url(../../static/head.png) 0 0 no-repeat;
			background-size: 100%;
			position: absolute;
			left: 20upx;
			top: 20upx;
		}
		.content{
			font-size: 28upx;
			color: #333;
			.userName{
				.auther{
					padding: 2upx 10upx ;
					color: #fff;
					font-size: 20upx;
					margin-left: 10upx;
					background: #F0AD4E;
					border-radius: 7upx;
				}
			}
			.userTime{
				font-size: 22upx;
				margin: 5upx 0 20upx 0;
				color: #999
			}
			rich-text{
				font-size: 26upx;
			}
			
			.comments{
				background: #f8f8f8;
				padding: 20upx 20upx 1upx 20upx;
				font-size: 24upx;
				margin-top: 40upx;
				.item{
					margin-bottom: 25upx;
					.one{
						color: #93b9fe;
						padding-right: 10upx;
					}
					.time{
						font-size: 20upx;
						color: #999;
					}
				}
				.note{
					font-size: 22upx;
					text-align: center;
					padding-bottom: 40upx;
					color: #999;
					.notImg{
						width: 150upx;
						height: 150upx;
						margin: 0 auto;
						display: block
					}
				}
			}
		}
		.foot{
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			background: #f8f8f8;
			height: 100upx;
			line-height: 80upx;
			border-top: 1px solid #dadada;
			padding: 5upx 20upx 15upx;
			box-sizing: border-box;
			.toName{
				font-size: 24upx;
				display: inline-block;
				vertical-align: middle
			}
			.edit{
				display: inline-block;
				vertical-align: middle;
				font-size: 24upx;
				padding-left: 10upx;
			}
		}
	}
</style>
