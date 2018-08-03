<template>

<div>
	<h1>pickseat</h1>
	<div class="header">
		<div class="back"> < </div>
		<div class="hea">
			<h3>西虹市首富</h3>
			<p>2D中文</p>
		</div>
		<div class="null"></div>
	</div>
	
	<div class="seat">
		<h3>剩余n个座</h3>
		<ul>
			<li v-for="data,index in seatlist" @click="handleClick(index)" :class="isShow?'pick':'' ">{{index}}</li>
		</ul>
	</div>

	
</div>

</template>

<script>
export default {
	data(){
		return{
			seatlist:[
			{index,}
			],
			 isShow:false,
			 currentIndex:0,
			
		}
	},

	methods:{
		handleClick(index){
			console.log("aaaaaa")

			this.isShow = !this.isShow
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
		color: #eee;
		.null{
			width: 30%;
		}
		.back{
			width: 30%;
			font-size: 40px;
		}
		.hea{
			flex: 1;
			text-align: center;
		}
	}
	.seat {
		h3{
			width: 100%;
			text-align: center;
			padding: 10px 0;
		}

		ul{
			padding :0 10%;	
			width: 80%;			
			display: flex;
			justify-content: space-between;
			background: pink;
			flex-wrap: wrap;
			margin-left: 10%;
			li{
				width: 15px;
				height: 15px;
				background: blue;
				margin: 5px 15px;
			}
		}
	}
	.pick{
		background: orange !important;
	}
</style>