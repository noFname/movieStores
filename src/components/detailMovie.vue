<template>
<div>
	<header>
		
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

<style>
	header{
		height:52px;
		width:100%;
		background: red;
	}
</style>