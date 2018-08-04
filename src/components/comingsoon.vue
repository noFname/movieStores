<template>
<div>
	<ul>
		<router-link v-for="data in movieList" :key="data.id" tag="li" :to="'/detailMovie/'+data.id" class="clear">
			<div class="data">
				{{data.rMonth}}月{{data.rDay}}日
			</div>
			<div class="contant">
				<img :src="data.image" alt="">
				<div class="right">
					<h3>{{data.title}}</h3>
					<p><span>{{data.wantedCount}}</span>想看-{{data.type}}</p>
					<p class="sec" v-if="data.director">导演：{{data.director}}</p>
					<div class="btn">
						<div class="zuo">提前预售</div>
						<div class="you">预告片</div>
					</div>
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
		//https://m.mtime.cn/Service/callback.mi/Movie/MovieComingNew.api?locationId=290&t=2018831528982380
		axios.get('/Service/callback.mi/Movie/MovieComingNew.api?locationId=290&t=2018831528982380').then(res=>{
			console.log(res.data);
			this.movieList = res.data.moviecomings;
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
			div.data{
				float: left;
				font-size: 14px;
				color:#999;
				width: 20%;
			}
			div.contant{
				float: left;
				width: 80%;
				white-space:nowrap;
				overflow: hidden;
				img{
					float:left;
					width:30%;
				}
				div.right{
					width:70%;
					padding:0 10px;
					float: left;
					p{
						margin-top:5px;
						font-size: 14px; 
						span{
							color: orange;
						}
					}
					div.btn{
						position:absolute;
						right:10px;
						bottom:10px;
						width: 50%;
						div{
							padding:4px 12px;
							border-radius: 15px;
						}
						div.zuo{
							background-color: #ff8600;
							float: left;
							color:white;
						}
						div.you{
							float: right;
							color:#7ec6e8;
							border: 1px solid #7ec6e8;
							box-sizing: border-box;
						}
					}
				}
			}
		}
	}
</style>