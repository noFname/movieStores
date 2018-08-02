<template>
	<div>
		<router-link tag="div" to="/listByMovie">即将上映&nbsp;>&nbsp;{{comingsoonlist.length}}部<p class="iconfont icon-jiantou1"></p></router-link>	
		<ul v-if="comingsoonlist.length>0">
			<li v-for="data,idx in comingsoonlist" v-if="idx<8" :key="data.id">
				<img :src="data.image" alt="">
				<p>{{data.title}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios'
export default {
	data(){
		return {
			comingsoonlist : []
		}
	},
	mounted(){
		// https://m.mtime.cn/Service/callback.mi/Movie/MovieComingNew.api?locationId=290&t=2018821304391057
		axios.get('/Service/callback.mi/Movie/MovieComingNew.api?locationId=290&t=2018821304391057').then(res=>{
			console.log(res.data);
			this.comingsoonlist = res.data.attention
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