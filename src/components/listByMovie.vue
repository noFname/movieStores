<template>
<div>
	<ul>
		<router-link tag="li" to="/index" class="iconfont icon-fanhui"></router-link>
		<router-link tag="li" to="/listByMovie/nowplaying" class="half" :id="isChecked?'notCheck':''"><div  @click="isChecked=false">正在热映</div></router-link>
		<router-link tag="li" to="/listByMovie/comingsoon" class="half"  :id="isChecked?'':'notCheck'"><div  @click="isChecked=true">即将上映</div></router-link>
	</ul>
	<router-view></router-view>
</div>

</template>

<script>
export default {
	data(){
		return {
			isChecked : false
		}
	}
}


</script>

<style scoped lang="scss">
	ul{
		width: 100%;
		height: 50px;
		line-height: 50px;
		background: #1c2635;
		color:white;
		li{
			width:10%;
			float: left;
			text-align: center;
		}
		li.half{
			width:45%;
		}
		#notCheck{
			background:black;
			color: #ccc;
		}
	}
</style>