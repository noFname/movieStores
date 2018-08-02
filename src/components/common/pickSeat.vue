<template>

<div>
	<h1>pickseat</h1>
	<div class="header">
		<button class="back"> < </button>
		<div class="hea">
			<h3>西虹市首富</h3>
			<p>2D中文</p>
		</div>
		<div class="null"></div>
	</div>
	
	<div class="seat">
		<h3>剩余n个座</h3>
		<ul>
			<li v-for="data,index in seatlist">{{index}}</li>
		</ul>
	</div>

	
</div>

</template>

<script>
export default {
	data(){
		return{
			seatlist:[]
		}
	}
}


</script>

<style scoped lang="scss">
	.header{
		width: 100%;
		background: #1c2635;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #ccc;
		.null{
			width: 30%;
		}
		.back{
			width: 30%;
		}
		.hea{
			flex: 1;
		}
	}
</style>