<template>
<div>
	<h1>
		<span @click="handleClick()"><</span>
		<a href="#"><img src="/static/logo_mtime.png" alt=""></a>
	</h1>
	<div class="inner">
		<i class="iconfont">&#xe637;</i><input type="text" placeholder="登陆邮箱/手机号码" class="text"><br>
		<i class="iconfont">&#xe64e;</i><input type="text" placeholder="密码">
	</div>
	
	<mt-button type="primary" class="btn">登陆</mt-button><br>
	<div class="other">
		<a href="/#/reg" class="free">免费注册</a>
		<a href="#" class="find">找回密码</a>
	</div>
	<p>使用第三方登录</p>
	<a href="#" class="wb"></a>
	<a href="#" class="qq"></a>
	
</div>

</template>

<script>
	import { Button } from 'mint-ui';
export default {
	methods : {
		handleClick(){
			location.href="/#/index"
		}
	},
	components :{
		"mt-button" : Button
	}
}


</script>

<style scoped>
	h1{
		width: 100%;
		height: 50px;
		background: #333;
		overflow: hidden;
	}
	h1 span{
		float: left;
		color: #fff
	}
	img{
		height: 30px;
		margin-left:45%;
		transform: translateX(-50%);
		margin-top: 10px;
		float: left;

	}
	.btn{
		width: 90%;
		margin-left: 5%;
		border-radius:170px;
		margin-top: 30px;
		background: #1e7dd7
	}
	input{
		width: 85%;
		border: 0;
		color: #666;
		height: 50px;
	}
	.text{
		border-bottom: 1px solid #ccc;
		line-height: 50px
	}
	.free{
		color: #1e7dd7;
		font-weight: bold;
		font-size: 14px;
		float: left;
		margin-left: 20px;
		margin-top: 20px;
	}
	.find{
		font-size: 14px;
		float: right;
		margin-right: 20px;
		margin-top: 20px;
	}
	.other{
		width: 345px;
		height: 60px;
		border-bottom:1px solid #ccc ;
		margin-left: 15px;
	}
	p{
		width: 100px;
		font-size: 12px;
		color: #999;
		position: relative;
		text-align: center;
		top: -9px;
		left: 135px;
		background: #f0efed;
	}
	.wb{
		display: block;
		width: 52px;
		height: 52px;
		background: url(/static/o_sina.png) no-repeat center;
		float: left;
		background-size: cover;
		margin-right: 30px;
		margin-left: 120px;
		margin-top: 10px;

	}
	.qq{
		display: block;
		width: 52px;
		height: 52px;
		background: url(/static/o_qq.png) no-repeat center;
		float: left;
		background-size: cover;
		margin-top: 10px;
	}
	.iconfont{
		font-size: 22px;
		padding: 0 17px;
	}
	.inner{
		width: 100%;
		background: #fff
	}
</style>