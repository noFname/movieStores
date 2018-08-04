<template>

<div class="Box">
	<ul>
		<li>
			<i class="iconfont icon-gouwuche"></i>
			<p>购物车</p>
		</li>
		<li>
			<i class="iconfont icon-ticket"></i>
			<p>电影票订单</p>
		</li>
		<li>
			<i class="iconfont icon-shangcheng1"></i>
			<p>商品订单</p>
		</li>
	</ul>
</div>

</template>

<script>
export default {

}


</script>

<style scoped lang="scss">
.Box{
	width:100%;
	height:auto;
	padding:0 18px;
	background:#fff;
	ul{
		display: flex;
		li{
			padding-top:18px;
			padding-bottom:14px;
			flex:1;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			i{
				width:54px;
				height:54px;
				border-radius: 50%;
				display: inline-block;
				text-align: center;
				line-height: 54px;
				background: #ffb059;
				color:#fff;
				font-size: 30px;
			}
			p{
				font-size: 14px;
				line-height: 36px;
			}
		}
		li:nth-of-type(2) i{
			background: #78bdfd;
		}
		li:nth-of-type(3) i{
			background: #ff815a;
		}
	}
}
</style>