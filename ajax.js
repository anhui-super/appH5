let ohref = '';
//#ifdef H5
if(process.env.NODE_ENV === 'development'){　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
	ohref='/dpc'
}else{　　　　　　　　　　　　　　　　　　　　　　
	ohref='https://api.fanep.cn/tt'
}　
//#endif

// #ifdef H5-WEIXIN
ohref='https://api.fanep.cn/tt'
// #endif

/**
 * 弹出提示框。
 *@title type：string 提示的内容
 *@icon  type：string 提示的图标，参考微信api接口。
 */
export const showTips = (title,icon) => {
  uni.showToast({
    title,
    icon: icon||'none'
  });
}

export const setTime = (time) => {
	let actTime = new Date().getTime()
	let mm = Math.ceil((actTime - new Date(time).getTime())/1000);
	let day = parseInt(mm / (60 * 60* 24));
	let mday = mm % (60 * 60* 24)
	let h = parseInt(mday/( 60*60 ));
	let mh = mday % (60*60)
	let m = parseInt(mh/60)
	let name =0;
	if(day>0){
		name = day+'天前';
		return name;
	}else if(h>0){
		name = h +'小时前';
		return name
	}else{
		name = m + '分钟前'
		return name
	}
}


export const ajax = {
	login:  		ohref + '/login',
	signup:  		ohref + '/signup',
    onewordperday:  ohref + '/post/onewordperday',
	userinfo:  		ohref + '/get/userinfo',
	allperday:      ohref + '/get/allonewordperday',
	detail:      	ohref + '/get/onewordperday-detail/',
	reply:      	ohref + '/post/reply',
	replyreply:     ohref + '/post/reply-reply',
	wxlogin:     	ohref + '/wx-login'
}