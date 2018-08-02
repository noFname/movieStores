<template>
	<div>
		<router-link tag="div" to="/listByMovie">正在热映&nbsp;>&nbsp;{{nowplayinglist.length}}部<p class="iconfont icon-jiantou1"></p></router-link>	
		<ul v-if="nowplayinglist.length>0">
			<li v-for="data,idx in nowplayinglist" v-if="idx<8" :key="data.id" @click="goDetail(data.id)">
				<img :src="data.img" alt="">
				<p>{{data.t}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios'
export default {
	data(){
		return {
			nowplayinglist : []
		}
	},
	methods : {
		goDetail(idx){
			location.href='/#/detailMovie/'+idx;
		}
	},
	mounted(){
		//https://m.mtime.cn/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=201882952415760
		axios.get('/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=201882952415760').then(res=>{
			console.log(res.data);
			this.nowplayinglist = res.data.ms;
		})
	}
}


</script>

<style scoped lang="scss">

	div{
		box-sizing: border-box;
		div{
			width: 100%;
			height:60px;
			line-height: 60px;
			font-size:20px;
			font-weight: bold;
			padding: 0 10px;
			p{
				float:right;
				color: gray;
			}
		}
		ul{
			li{
				width:23%;
				float: left;
				margin-right: 2%;
				height: 150px;
				img{
					width: 100%;
				}
				p{
					width: 100%;
					font-size:12px;
					line-height: 20px;
					text-align: center;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}
	}
</style>