<template>

	<router-link tag="div" to="/search">
		<ul>
			<li class="left">北京</li>
			<li class="right">
				<div class="iconfont icon-web">
					影片/影院/影人
				</div>
			</li>
		</ul>
	</router-link>

</template>

<script>
export default {

}


</script>

<style scoped lang="scss">
	ul{
		height:50px;
		line-height: 50px;
		box-sizing: border-box;
		border-bottom: 1px solid #ccc;
		background: #f6f6f6;
		li{
			float:left;
		}
		li.left{
			width:20%;
			text-align: center;
		}
		li.right{
			width: 70%;
			margin:0 5%;
			color: gray;
			div{
				width: 100%;
				height:40px;
				padding: 0 20px;
				line-height: 40px;
				border:1px solid #ccc;
				box-sizing: border-box;
				border-radius:7px;
				margin-top:5px;
			}
		}
	}
</style>