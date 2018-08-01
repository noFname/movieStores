<template>

<div>	
	<h1>buyticket</h1>
	<pickseat></pickseat>
	<buybutton></buybutton>
</div>

</template>

<script>
	import pickseat from './common/pickSeat.vue'
	import buybutton from './common/buyButton.vue'
export default {
	components : {
		pickseat,
		buybutton
	}
}


</script>

<style>

</style>