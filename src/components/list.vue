<template>
<div>
	<navbar></navbar>	
	<ul v-if="list.length>0">
		<li v-for="data in list" :key="data.cinemaId" class="clear" @click="detail(data.cinemaId)">
			<div class="loca">
				<div>{{data.cinameName}}
					<div class="right">
						<p>{{data.minPrice/100>0?data.minPrice/100+'元起':''}}</p>
					</div>
				</div>
				<span>{{data.address}}</span>
				<i v-if="data.feature.has3D">3D</i>
				<i v-if="data.feature.hasIMAX">IMAX</i>
				<i v-if="data.feature.hasVIP">VIP</i>
			</div>
		</li>
	</ul>
</div>
</template>

<script>
	import navbar from './common/navbar.vue'
	import axios from 'axios'
export default {
	data(){
		return {
			list : []
		}
	},
	components : {
		navbar
	},
	methods : {
		detail(id){
			console.log(id);
		}
	},
	mounted(){
		//https://ticket-m.mtime.cn/api/proxy/ticket/onlineCinemasByCity.api?locationId=290&_=1533192086091
		axios.get('/api/proxy/ticket/onlineCinemasByCity.api?locationId=290&_=1533192086091').then(res=>{
			console.log(res.data);
			this.list=res.data.data.cinemaList
		})
	}
}

</script>

<style scoped lang="scss">

.clear::after{
	content: "";
	display: block;
	clear: both;
}
	ul{
		li{
			width:100%;
			padding: 0 10px;
			box-sizing: border-box;
			background: white;
			.loca{
				font-size: 18px;
				line-height: 36px;
				padding-bottom: 3px;
				border-bottom: 1px solid #ccc;
				span{
					display: block;
					color:gray;
					font-size: 12px;
					line-height: 18px;
				}
				i{
					font-style: normal;
					border:1px solid #6d8297;
					color:#6d8297;
					font-size:12px;
					padding: 0 2px;
				}
				.right{
					color:orange;
					font-size: 16px;
					float:right;
				}
			}
		}
	}
</style>