<template>

<div class="Box">
	<article>
		<div class="l">
			<img src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg2.mtime.cn%2Fimages%2Fdefault%2Fhead.gif&width=100&height=100&clipType=4" alt="">
		</div>
		<div class="r">
			<div><i>MO</i><span>{{username}}</span></div>
			<span>余额：￥0</span>
		</div>
	</article>
</div>

</template>

<script>
export default {
	data(){
		return{
			username:''
		}
	},
	mounted(){
		this.username = window.localStorage.getItem('username');
	}
}


</script>

<style scoped lang="scss">
.Box{
	height:174px;
	width:100%;
	padding:0 18px 0 30px;
	background: url(https://static1.mtime.cn/html5/20180727153608/images/2014/set_endlogin.jpg) no-repeat center;
	background-size:100% auto;
	article{
		padding-top:42px;
		height:auto;
		display: flex;
		color:#fff;
		div.l{
			width:68px;
			height:68px;
			border-radius: 50%;
			overflow: hidden;
			margin-right:15px;
			img{
				width:100%;
			}
		}
		div.r{
			flex:1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			div{
				margin-bottom:10px;
				i{
					display: inline-block;
					height:20px;
					width:30px;
					font-style: normal;
					line-height: 20px;
					font-size: 14px;
					text-align: center;
					background:url(https://static1.mtime.cn/html5/20180727153608/images/2014/vip_grade.png) no-repeat;
					background-size: 30px 20px;
				}
				span{
					font-size: 16px;
				}
			}
			span{
				font-size:14px;
			}
		}
	}
}
</style>