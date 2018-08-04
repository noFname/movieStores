<template>

<div class="Box">
	<ul>
		<li>
			<p>意见反馈</p>
			<i class="iconfont icon-jiantou1"></i>
		</li>
		<li>
			<p>商城使用帮助</p>
			<i class="iconfont icon-jiantou1"></i>
		</li>
		<li>
			<p>购票使用帮助</p>
			<i class="iconfont icon-jiantou1"></i>
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
			p{
				flex:1;
				font-size:18px;
			}
			i{
				color:#ACACAC;
				font-size: 28px;
				margin-right:5px;
				line-height: 53px;
			}
			
		}
		li:last-of-type{
			border:0;
		}
	}
}
</style>