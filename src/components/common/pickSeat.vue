<template>

<div>

	<div class="header">
		<router-link tag="div" to="/detail/12345" class="back"> < </router-link>
		<div class="hea">
			<h3>西虹市首富</h3>
			<p>2D中文</p>
		</div>
		<div class="null"></div>
	</div>
	
	<div class="seat">
		<h3>剩余{{count}}个座</h3>
		<ul>
			<li v-for="data,index in seatlist" @click="handleClick(index)" :class="data.isShow?'pick':'' ">{{index}}</li>
		</ul>
	</div>

	<div class="price">
		
	</div>
</div>

</template>

<script>
export default {
	data(){
		return{
			seatlist:[
			{isShow:false},
			{isShow:false},
			{isShow:false},
			{isShow:false},
			{isShow:false},
			{isShow:false},
			{isShow:false},
			{isShow:false},
			{isShow:false},
			{isShow:false}
			],
			 currentIndex:0,
			
		}
	},

	methods:{
		handleClick(index){
			console.log("aaaaaa")

			this.seatlist[index].isShow = !this.seatlist[index].isShow
		}
	},
	computed :{
		count(){
			let num = this.seatlist.length;
			let count = 0;
			for(let i = 0; i < num ; i++){
				if(!this.seatlist[i].isShow){
					count++;
				}
			}
			return	count;
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
				background: #78c8f6;
				margin: 5px 15px;
			}
		}
	}
	.pick{
		background: orange !important;
	}
</style>