<template>

<div>
	<router-link tag="div" to="/list" class="back"> < </router-link>
	<ul class="header">
		<li class="first">
			<h2>{{cinema.name}}</h2>
			<ul class="mark">
				<li>HI</li>
				<li>VIP</li>
				<li>3D</li>
				<li>P</li>
			</ul>
		</li>
		<li class="ico">
			<i class="iconfont icon-weibiaoti-"></i>
			<i class="iconfont icon-location"></i>
		</li>
	</ul>
	<looplist></looplist>
	<ul class="showtime">
		<li v-for="data,index in list" @click="handleClick(index)" :class="currentIndex == index ? 'focus' :''">{{data}}</li>
	</ul>
	<ul><!--  v-for="data,index in loop" -->
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
			<router-link to="/buyTicket" tag="div" class="last">购票</router-link>
		</li>
	</ul>
</div>

</template>

<script>
	import looplist from './common/looplist.vue'
	import axios from 'axios'
	export default {
		components : {
			looplist
		},
		data(){
			return{
				currentIndex:0,
				isshow:false,
				list:['后天（08月04日）','后天（08月04日）'],
				cinema:{},
				loop:{}
			}
		},
		methods:{
			handleClick(index){
				this.currentIndex = index
			}

		},
		mounted(){
			//https://m.mtime.cn/Service/callback.mi/Showtime/ShowtimeMovieAndDateListByCinema.api?cinemaId=3194&t=20188314522714257
			axios.get(`/Service/callback.mi/Showtime/ShowtimeMovieAndDateListByCinema.api?cinemaId=${this.$route.params.cinemaid}&t=20188314522714257`).then(res=>{
				// console.log(res.data)
				this.cinema = res.data.cinema
			})
			// axios.get(`/Service/callback-ticket.mi/cinema/showtime.api?cinemaId=8476&t=20188315521656643`).then(res=>{
			// 	console.log(res.data)
			// 	this.loop = res.data.data.showtimes.list
			// })
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
		padding: 16px 20px;
		margin-bottom: 20px;
	}
		
	.ico{
		float: left;
		height: 40px;
		margin-top: 20px;

			i{
				font-size: 30px;		
				color: blue;
				border-left: 1px solid #bbb;
				padding: 0 5px;
			}
	}

	.back{
		width: 100%;
		height:50px;
		background: #1c2635;
		font-size: 35px;
		color: #fff;
		padding-left: 10px;
	}
	.first h2{
		font-size: 20px;
		margin-bottom: 10px;

	}
	.mark{
		li{
			width: 26px;
			height: 26px;
			line-height:26px;
			text-align: center;
			border: 1px solid #659d0e;
			float: left;
			margin-right: 5px;
			color: #659d0e;
			font-size: 16px;
			font-weight: bold;
			border-radius: 5px; 
		}
	}
</style>