<template>

<div>
	<personalInfo></personalInfo>
	<personalShop></personalShop>
	<!-- 分割线 -->
	<div class="show">
		<p></p>
		<p></p>
	</div>
	<personalList></personalList>
	<personalHelp></personalHelp>
	<div class="SignOut">
		<div>退出登录</div>
	</div>
	<movieFooter></movieFooter>
</div>

</template>

<script>
	import movieFooter from './common/movieFooter.vue'
	import personalInfo from './common/personalInfo.vue'
	import personalShop from './common/personalShop.vue'
	import personalList from './common/personalList.vue'
	import personalHelp from './common/personalHelp.vue'
export default {
	components : {
		movieFooter,
		personalInfo,
		personalShop,
		personalList,
		personalHelp
	}
}


</script>

<style scoped lang="scss">
.show{
	p:nth-of-type(1){
		width:100%;
		height:6px;
		background: #fff;
		box-shadow: 0 0.2em 0.2em rgba(51,51,51,0.05);
		position: relative;
	    z-index: 1;
	}
	p:nth-of-type(2){
		background: #f6f6f6;
		position: relative;
		z-index: 0;
		height:14px;
	}
}
.SignOut{
	padding:0 18px;
	div{
		width:100%;
		text-align: center;
		line-height: 50px;
		height:50px;
		font-size: 20px;
		color:#fff;
		border:0;
		outline: none;
		background: #f13900;
		;
		border-radius: 30px;
	}
	margin-bottom:40px
}
</style>