<script>
	import {ajax} from '@/ajax.js'
	export default {
		data:{
			
		},
		onLaunch: function() {
			// wx.getSetting({
			//   success (res){
			// 	  console.log(res)
			// 	if (res.authSetting['scope.userInfo']) {
			// 	  // 已经授权，可以直接调用 getUserInfo 获取头像昵称
			// 	  wx.UserInfo({
			// 		success: function(res) {
			// 		  console.log(res.userInfo)
			// 		}
			// 	  })
			// 	}
			//   }
			// })
			// wx.UserInfo({
			// 	success: function(res) {
			// 	  console.log(res.userInfo)
			// 	}
			// })
		},
		methods:{
		},
		
		onShow: function() {
			console.log('App Show')
			
			
			
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
