<template>

<div>
	<ul>
		<router-link tag="li" to="/index">
			<img src="/static/logo_mtime.png" alt="">
			首页
		</router-link>
		<router-link tag="li" to="/list">
			购票
		</router-link>
		<router-link tag="li" to="/login" class="right iconfont icon-02">
		</router-link>
	</ul>
</div>

</template>

<script>
export default {
	methods : {

	}
}


</script>

<style scoped lang="scss">
	ul{
		width:100%;
		height:50px;
		line-height: 50px;
		background: #1c2635;
		color:#ffffff;
		li{
			padding:0 12px;
			text-align: center;
			float: left;
			img{
				height:30px;
				float: left;
				margin-top:10px;
				margin-right:10px;
			}
		}
		li.right{
			float:right;
		}
	}

</style>