<template>
<div>
	<h1><img src=""></h1>
	<mt-button class="btn">登陆</mt-button>
</div>

</template>

<script>
	import { Button } from 'mint-ui';
export default {
	components :{
		"mt-button" : Button
	}
}


</script>

<style scoped>
	h1{
		width: 100%;
		background: #333;
	}
	.btn{
		width: 50%;
		margin-left: 25%;
	}
</style>