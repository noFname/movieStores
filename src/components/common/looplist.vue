<template>

<div>
	<h1>looplist</h1>
</div>

</template>

<script>
import axios from "axios"
export default {
	data(){
		return {
			looplist:[]
		}
	},

	mounted(){
		axios.get('/Service/callback.mi/Showtime/ShowtimeMovieAndDateListByCinema.api?cinemaId=8878&t=20188116581065660').then(res=>{
			console.log(res.data)
		})
	}

}


</script>

<style>

</style>