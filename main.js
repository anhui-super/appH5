import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
// 
// let login = uni.getStorageSync('login');
// let time = uni.getStorageSync('time')
// console.log(time)
// if(time !=''){
// 	let timeStatus = setInterval(()=>{
// 		let timeData = (new Date()).getTime();
// 		if(timeData >= time){
// 			clearInterval(timeStatus)
// 			uni.removeStorageSync('time');
// 			uni.removeStorageSync('login');
// 			uni.navigateTo({
// 				url: '/pages/login/login'
// 			})
// 			
// 		}
// 	},1000)
// }else{
// 	uni.navigateTo({
// 		url: '/pages/login/login'
// 	})
// }
const app = new Vue({
    ...App
})
app.$mount()
