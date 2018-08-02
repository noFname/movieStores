<template>

<div>
	<header style="background:url(http://img5.mtime.cn/mt/2018/07/23/113049.24374498_1280X720X2.jpg) no-repeat top center;background-size: 100% auto;">
		<div class="head">
			<a href="" class="left">
				<i class="iconfont icon-fanhui" @click="goIndex"></i>
			</a>
			<a href="" class="right">
				<i class="iconfont icon-share"></i>
			</a>
			<a href="" class="right">
				<i class="iconfont icon-shoucang"></i>
			</a>
		</div>
		<p style="background:url(https://static1.mtime.cn/html5/20180727153608/images/2014/cinemainfo_bg.png) no-repeat bottom center;background-size: 200% auto"></p>
	</header>
</div>

</template>

<script>
export default {
	methods:{
		goIndex(){
			location.href='/#/index/';
		}
	}
}


</script>

<style scoped lang="scss">
	.clear::after{
		content: '';
		clear:both;
		font-size:0;
		height: 0;
		line-height: 0;
		display: block;
		visibility:hidden;
	}
	.auto{
		padding-bottom:54px;
	}
	.left{
		float:left;
	}
	.right{
		float:right;
	}
	header{
		height:168px;
		width:100%;
		position: relative;
		background-size: 50% auto;
		.head{
			height:52px;
			width:100%;
			position: absolute;
			z-index: 99;
			top:0;
			a{
				display: block;
				width:40px;
				line-height: 52px;
				text-align: center;
				i{
					font-size:20px;
					color:#fff;
					opacity: .7;

				}
				.icon-shoucang{
					font-size: 24px
				}
			}
		}
		p{
			height:100%;
			width:100%;
			position: absolute;
		}
	}
	header::before{
		content: '';
		display: block;
		background: rgba(0,0,0,0.2);
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
	}
</style>