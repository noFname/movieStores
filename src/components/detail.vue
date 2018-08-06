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
	<looplist @list="getList"></looplist>
	<ul class="showtime">
		<li v-for="data,index in timeList" @click="handleClick(index)" :class="currentIndex == index ? 'focus' :''">{{data}}</li>
	</ul>
	<ul  v-for="data,index in loop">
		<li class="detailtime">
			<div>
				<h3>10:20</h3>
				<p>12:18散场</p>
			</div>
			<div>
				<p>{{data.versionDesc}}/{{data.language}}</p>
				<p>{{data.hall}}</p>
			</div>
			<div>
				<p class="orange">￥{{data.price}}</p>
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
				movieList:[],
				timeList:[],
				cinema:{},
				loop:null
			}
		},
		methods:{
			handleClick(index){
				this.currentIndex = index
			},
			getList(data){
				console.log(data);
				axios.get(`/Service/callback.mi/showtime/ShowTimesByCinemaMovieDate.api?cinemaId=8878&movieId=${data.movieId}&date=2018-08-04`).then(res=>{
					// console.log(res.data.s);
					this.loop=res.data.s


				})
				console.log(this.movieList);
				this.timeList = this.movieList[data.index].showDates
			}

		},
		mounted(){
			
			axios.get(`/Service/callback.mi/Showtime/ShowtimeMovieAndDateListByCinema.api?cinemaId=${this.$route.params.cinemaid}`).then(res=>{
				// console.log(res.data)
				this.cinema = res.data.cinema
				this.movieList = res.data.movies
			})
			
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