<template>

<div>

	<div class="swiper-container" v-if="looplist.length>0">
	  <div class="swiper-wrapper">
	    <div class="swiper-slide" v-for="data,index in looplist" v-loops>
	    	<img :src="data.img" alt=""  @click="handleClick(index)">
	    	<p class="smalltitle">{{data.title}}</p>
	    </div>
	  </div>
	</div>
	<div class="intro">
	    	<h3 class="title">{{name}}</h3>
	    	<p class="title">{{time}}-{{type}}</p>
	</div>

	
</div>


</template>

<script>
import axios from "axios"
// import { Swipe, SwipeItem } from 'mint-ui';

export default {
	data(){
		return {
			looplist:[],
			name:"西虹市首富",
			time:"118分钟",
			type:"喜剧",

		}
	},

	mounted(){
		// console.log("qaaaaa")
		axios.get('/Service/callback.mi/Showtime/ShowtimeMovieAndDateListByCinema.api?cinemaId=8878&t=20188116581065660').then(res=>{
			console.log(res.data);
			this.looplist = res.data.movies
			// console.log(this.looplist[0].title)
		})
	},

	methods:{

		handleClick(index){
			console.log("ccccccc"+this.looplist[index].title)
			this.name = this.looplist[index].title
			this.time = this.looplist[index].length
			this.type = this.looplist[index].type

		}
	}
}

</script>

<style scoped lang="scss">

.swiper-container {
  width: 100%;
  background: #999;
  color: #fff;
  padding: 25px 0;
}
.swiper-slide {

  background: #fff;
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
.title{
	width: 100%;
	text-align: center;

}
.intro{
	width: 100%;
	/*height: 100px;*/
	padding: 20px 0;
	background: #fff;
}
.smalltitle{
	width: 100%;
	position: absolute;
	bottom: -20px;
	font-size: 14px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: center;
}

</style>