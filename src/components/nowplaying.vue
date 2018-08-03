<template>
<div>
	<ul>
		<router-link v-for="data in movieList" :key="data.id" tag="li" :to="'/detailMovie/'+data.id" class="clear">
			<img :src="data.img" alt="">
			<div class="right">
				<h3>{{data.t}}<span v-if="data.r>1">{{data.r}}</span></h3>
				<p>{{data.actors}}</p>
				<i v-if="data.is3D">3D</i>
				<i v-if="data.isDMAX">DMAX</i>
				<i v-if="data.isIMAX">IMAX</i>
				<div class="rightButton">
					<div class="zuo">{{data.cC}}家影院上映{{data.NearestShowtimeCount}}场</div>
					<div class="you" @click="goWhere(data.id)">购票</div>
				</div>
			</div>
		</router-link>
	</ul>
</div>

</template>

<script>
import axios from 'axios'
import router from '../router'
export default {
	data(){
		return {
			movieList : []
		}
	},
	methods :{
		goWhere(id){
			//TODO:
			// router.push()
			console.log(id);
		}
	},
	mounted(){
		axios.get('/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=20188314302387826').then(res=>{
			console.log(res.data);
			this.movieList = res.data.ms;
		})
	}
}


</script>

<style scoped lang="scss">
	.clear::after{
		content: "";
		clear: both;
		display: block;
	}
	ul{
		li{
			width: 100%;
			box-sizing: border-box;
			margin-bottom: 10px;
			padding: 10px;
			position: relative;
			img{
				float:left;
				width:30%;
			}
			div.right{
				width:70%;
				padding:0 10px;
				float: left;
				h3{
					line-height: 25px;
					span{
						font-size: 14px;
						background: #659d0e;
						color:white;
						font-weight: 300;
						padding:2px 4px;
						margin-left: 5px;
					}
				}
				p{
					color: #659d0e;
					font-size:14px;
					line-height: 24px;
				}
				i{
					font-style: normal;
					font-size: 12px;
					line-height: 18px;
					padding: 2px;
					color:#659d0e;
					border: 1px solid #659d0e;
				}
				div.rightButton{
					position: absolute;
					bottom: 0;
					right: 0;
					width: 70%;
					box-sizing: border-box;
					padding: 10px;
					div.zuo{
						position: absolute;
						left: 10px;
						bottom: 10px;
						padding-left: 5px;
						color: #999;
						font-size: 14px;
					}
					div.you{
						float: right;
						background: #ff8600;
						color:white;
						border-radius: 15px;
						padding: 8px 15px;
					}
				}
			}
		}
	}
</style>