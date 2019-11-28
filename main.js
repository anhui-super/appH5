import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
import {ajax,showTips} from '@/ajax.js'


App.mpType = 'app'
// #ifdef H5
let login = uni.getStorageSync('login');
let time = uni.getStorageSync('time')
if(time !=''){
	let timeStatus = setInterval(()=>{
		let timeData = (new Date()).getTime();
		if(timeData >= time){
			clearInterval(timeStatus)
			uni.removeStorageSync('time');
			uni.removeStorageSync('login');
			uni.navigateTo({
				url: '/pages/login/login'
			})
			
		}
	},1000)
}else{
	uni.navigateTo({
		url: '/pages/login/login'
	})
	console.log('====')
}
// #endif

const app = new Vue({
    ...App
})
app.$mount()
