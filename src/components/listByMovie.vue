<template>
<div>
	<ul>
		<router-link tag="li" to="/index" class="iconfont "></router-link>
		<router-link tag="li" to="/listByMovie/nowplaying">正在热映</router-link>
		<router-link tag="li" to="/listByMovie/comingsoon">即将上映</router-link>
	</ul>
	<router-view></router-view>
</div>

</template>

<script>
export default {

}


</script>

<style scoped lang="scss">
	ul{
		width: 100%;
		height: 50px;
		line-height: 50px;
		li{
			float: left;
		}
	}
</style>