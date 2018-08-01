<template>

<div>
	<ul>
		<router-link tag="li" to="/index">
			首页
		</router-link>
		<router-link tag="li" to="/list">
			购票
		</router-link>
		<router-link tag="li" to="/login" class="right iconfont icon-yonghu">
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
			width:60px;
			text-align: center;
			float: left;
		}
		li.right{
			float:right;
		}
	}

</style>