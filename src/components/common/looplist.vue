<template>

<div>
	<h1>looplist</h1>
	<div class="swiper-container" v-if="looplist.length>0">
	  <div class="swiper-wrapper">
	    <div class="swiper-slide" v-for="data in looplist" v-loops><img :src="data.img" alt=""></div>
	  </div>
	</div>
</div>

</template>

<script>
import axios from "axios"
// import { Swipe, SwipeItem } from 'mint-ui';

export default {
	data(){
		return {
			looplist:[]
		}
	},
	

	mounted(){
		console.log("qaaaaa")
		axios.get('/Service/callback.mi/Showtime/ShowtimeMovieAndDateListByCinema.api?cinemaId=8878&t=20188116581065660').then(res=>{
			console.log(res.data);
			this.looplist = res.data.movies
		})


		
	},


}

</script>

<style scoped lang="scss">

.swiper-container {
  width: 100%;
  background: #666;
}
.swiper-slide {
	margin: 15px;

  background: #fff;
	/*width:400px;*/
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  img{
  	width:100%;
  }
}
</style>