<template>

<div class="Box">
	<ul>
		<li>
			<div class="l">
				<i class="iconfont icon-youhuiquan"></i>
				<span>电影票优惠券</span>
			</div>
			<div class="r">
				<span>2</span>
				<i class="iconfont icon-jiantou1"></i>
			</div>
		</li>
		<li>
			<div class="l">
				<i class="iconfont icon-youhuiquan"></i>
				<span>商品优惠券</span>
			</div>
			<div class="r">
				<span>8</span>
				<i class="iconfont icon-jiantou1"></i>
			</div>
		</li>
		<li>
			<div class="l">
				<i class="iconfont icon-jiangjiatongzhi"></i>
				<span>我的活动</span>
			</div>
			<div class="r">
				<span></span>
				<i class="iconfont icon-jiantou1"></i>
			</div>
		</li>
		<li>
			<div class="l">
				<i class="iconfont icon-dianyingyuan"></i>
				<span>我的电影</span>
			</div>
			<div class="r">
				<span></span>
				<i class="iconfont icon-jiantou1"></i>
			</div>
		</li>
		<li>
			<div class="l">
				<i class="iconfont icon-shoucang"></i>
				<span>我的收藏</span>
			</div>
			<div class="r">
				<span></span>
				<i class="iconfont icon-jiantou1"></i>
			</div>
		</li>
	</ul>
</div>

</template>

<script>
export default {

}


</script>

<style scoped lang="scss">
body{
	background: #f6f6f6;
}
.Box{
	width:100%;
	height:auto;
	padding-left:18px;
	margin-bottom:20px;
	background:#fff;
	ul{
		li{
			line-height: 53px;
			height:53px;
			border-bottom:1px solid #d8d8d8;
			display: flex;
			justify-content: space-between;
			i{
				color:#ACACAC;
				font-size: 28px;
				line-height: 53px;
			}
			span{
					font-size:18px;
					display: inline-block;
				}
			.l{
				flex:1;
				display:flex;
				align-items: center;
				i{
					padding:0 3px;
				}

			}
			.r{
				display:flex;
				align-items: center;
				i{
					margin-right:5px;
				}
				span{
					font-size: 14px;
					color:#ACACAC;
				}
			}
		}
		li:last-of-type{
			border:0;
		}
	}
}
</style>