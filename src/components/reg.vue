<template>
<div>
	<h1>
		<span @click="handleClick()"><</span>
		<a href="#"><img src="/static/logo_mtime.png" alt=""></a>
	</h1>
	<div class="inner">
		<input type="text" placeholder="手机号：请输入手机号" class="text"><br>
		<input type="text" placeholder="密码：6-20位数字、字母、符号组成" >
	</div>
	
	<p>
		<mt-checklist
 			v-model="value"
 			:options="['我已阅读并同意《Mtime时光网服务条款》']">
		</mt-checklist>

	</p>
	<mt-button type="primary" class="btn">注册</mt-button><br>


</div>
</template>

<script>
	import { Button } from 'mint-ui';
	import { Checklist } from 'mint-ui';
  	
export default {

	data(){

		return {
			value:['我已阅读并同意《Mtime时光网服务条款》']
			
		}
	},
	methods : {
		handleClick(){
			location.href="/#/login"
		}
	},
	components :{
		"mt-button" : Button,
		"mt-checklist":Checklist
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
		background: #1e7dd7
	}
	input{
		width: 95%;
		border: 0;
		color: #666;
		height: 50px;
		margin-left: 20px;
	}
	.text{
		border-bottom: 1px solid #ccc;
		line-height: 50px
	}

	.inner{
		width: 100%;
		background: #fff;
		border-bottom: 1px solid #ccc;
	}
</style>