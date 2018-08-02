<template>

<div>
	<ul class="header">

		<li class="first">
			<h2>首都影院金融街店</h2>
			<p>1234</p>

		</li>

		<li class="ico">
			<div>ww</div>
			<div>aa</div>
		</li>
	</ul>
	<looplist></looplist>
	<ul class="showtime">
		<li v-for="data,index in list" @click="handleClick(index)" :class="currentIndex == index ? 'focus' :''">{{data}}</li>
	</ul>
	<ul>
		<li class="detailtime">
			<div>
				<h3>10:20</h3>
				<p>12:18散场</p>
			</div>
			<div>
				<p>2D/中文</p>
				<p>3号厅</p>
			</div>
			<div>
				<p class="orange">￥45</p>
				<p class="through">￥70</p>
			</div>
			<div class="last">购票</div>
		</li>
	</ul>
</div>

</template>

<script>
	import looplist from './common/looplist.vue'
	export default {
		components : {
			looplist
		},
		data(){
			return{
				currentIndex:0,
				isshow:false,
				list:['后天（08月04日）','后天（08月04日）']
			}
		},
		methods:{
			handleClick(index){
				this.currentIndex = index
			}
		}
	}


</script>

<style scoped lang="scss">
	.showtime{
		width: 100%;
		background: #ddd;
		display: flex;
		justify-content: space-between;
	}
	.showtime li{
		border-bottom: 2px solid #fff;

	}
	.focus{
		border-bottom: 2px solid blue !important;
		color: blue;
	}
	.detailtime{
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 10px;
	}
	.orange{
		color: orange;
		font-size: 18px;
		font-weight: bold;
	}
	.through{
		text-decoration: line-through;
	}
	.last{
		width: 80px;
		height: 40px;
		border-radius: 10px;
		line-height: 40px;
		text-align: center;
		background: orange;
		color: #fff;
	}
	.header{
		width: 100%;
		height: 80px;
		display: flex;
		justify-content: space-between;
	}
		
	.ico div{
		float: left;
	}
</style>