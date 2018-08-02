<template>
<div>
	<header style="background:url(http://img5.mtime.cn/mt/2018/07/23/113049.24374498_1280X720X2.jpg) no-repeat top center;background-size: 100% auto;">
		<div class="head">
			<a href="" class="left">
				<i></i>
			</a>
			<a href="" class="left"></a>
			<a href="" class="left"></a>
		</div>
	</header>
	<userComment></userComment>
</div>

</template>

<script>
	import userComment from './common/userComment.vue'
export default {

	components : {
		userComment
	}
}


</script>

<style scoped lang="scss">
	body{
		padding:0;
		margin:0;
	}
	header{
		height:168px;
		width:100%;
		position: relative;
		background-size: 50% auto;
		.head{
			height:52px;
			background: red;
		}
	}
</style>