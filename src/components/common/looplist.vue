<template>

<div>
	<h1>looplist</h1>
	<mt-swipe :auto="4000" class="swipe">
	  <mt-swipe-item v-for="data in looplist" :key="data.movieId"><img :src="data.img" alt=""></mt-swipe-item>
	</mt-swipe>
</div>

</template>

<script>
import axios from "axios"
import { Swipe, SwipeItem } from 'mint-ui';

export default {
	data(){
		return {
			looplist:[]
		}
	},
	components :{
		'mt-swipe': Swipe,
		'mt-swipe-item' : SwipeItem
	},

	mounted(){
		console.log("qaaaaa")
		axios.get('/Service/callback.mi/Showtime/ShowtimeMovieAndDateListByCinema.api?cinemaId=8878&t=20188116581065660').then(res=>{
			console.log(res.data);
			this.looplist = res.data.movies
		})
	}

}


</script>

<style scoped lang="scss">
	.swipe{
		width:50%;
		height: 500px;
		img{
				width:100%;
			}
	}
</style>