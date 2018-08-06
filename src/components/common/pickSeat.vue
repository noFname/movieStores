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
	import bus from './bus.js'
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
			{isShow:false},			
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
			counts:0
		}
	},

	methods:{
		handleClick(index){

			this.seatlist[index].isShow = !this.seatlist[index].isShow
			let num = this.seatlist.length - this.count
			console.log(num);
			bus.$emit('allprice',num)
		}
	},
	computed :{
		count(){
			let num = this.seatlist.length;
			let count = 0;
			for(let i = 0; i < num ; i++){
				if(!this.seatlist[i].isShow){
					count++;
					console.log(count);

				}
			}
			this.counts=count;

			return	count;
		}
	}
	// https://m.mtime.cn/#!/theater/290/8382/date/20180804/
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
			background: #ddd;
			flex-wrap: wrap;
			margin-left: 10%;
			li{
				width: 15px;
				height: 15px;
				background: #78c8f6;
				margin: 5px 15px;
				font-size: 12px;
				text-align: center;
				border-radius: 3px;
			}
		}
	}
	.pick{
		background: orange !important;
	}
</style>