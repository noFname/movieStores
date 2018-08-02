<template>
<div>
	<h1>
		<span @click="handleClick()"><</span>
		<a href="#"><img src="/static/logo_mtime.png" alt=""></a>
	</h1>
	<div class="inner">
		<input v-model="num" type="text" placeholder="手机号：请输入手机号" class="text" id="num"><br>
		<input v-model="password" type="text" placeholder="密码：6-20位数字、字母、符号组成" id="password" >
	</div>
	
	<p>
		<mt-checklist
 			v-model="value"
 			:options="['我已阅读并同意《Mtime时光网服务条款》']">
		</mt-checklist>

	</p>
	<mt-button type="primary" class="btn" @click="userReg()">注册</mt-button><br>


</div>
</template>

<script>
	import { Button } from 'mint-ui';
	import { Checklist } from 'mint-ui';
  	
export default {

	data(){

		return {
			value:['我已阅读并同意《Mtime时光网服务条款》'],
			num:'',
			password : ''
		}
	},
	methods : {
		handleClick(){
			location.href="/#/login"
		},
		userReg(){
			var numRe = /^1[3456789]\d{9}$/;
			var passwordRe = /^[\w.]{6,20}$/;
			console.log(this.num +'=============' + this.password);
			if( this.num=== '' ){
						alert('手机号不能为空~');
						return false;
			}
			else if( !numRe.test( this.num ) ){
				alert('手机号格式不正确!!!!');
				return false;
			}
			if(this.password===''){
				alert('密码不能为空~');
				return false;
			}else if( !passwordRe.test( this.password ) ){
				alert('密码格式不正确!!!!');
				return false;
			}
		}
	},
	components :{
		"mt-button" : Button,
		"mt-checklist":Checklist
	}

}

	// var $num = $('#num');
	// var $password = $('#password');
	// var usernameRe = /^1[3456789]\d{9}$/;
	// var passwordRe = /^[\w.]{6,20}$/;
	// function handleRegChange(){
	// 	if( $username.val() === '' ){
	// 		alert('手机不能为空~');
	// 		return false;
	// 	}
	// 	else if( !usernameRe.test( $username.val() ) ){
	// 		alert('密码不能为空!!!!');
	// 		return false;
	// 	}
	// }
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
	div.mint-cell-wrapper{
		font-size: 14px;
	}
</style>