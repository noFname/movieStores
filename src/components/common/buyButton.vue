<template>

	<div>
		<div class="time">
			<h3>8月3日（周五）15:00</h3>
			<p>DMG国际影城北京悦秀店</p>
			<p>最多可选择4个座位</p>
		</div>
		<div class="null"></div>
		<div class="buy">
			<ul class="sun">
				<li>总价：￥<span>{{sum}}</span>（含服务费￥3/张）</li>
				<router-link to="" tag="li" :id="sum===0?'':'next'">下一步</router-link>
			</ul>
		</div>
	</div>

</template>

<script>
	import bus from './bus.js'
export default {
	data(){
		return{
			sum:0
		}
	},
	methods:{

	},
	mounted(){ 
		bus.$on('allprice',num=>{
			this.sum = num*45
			console.log(this.sum);
		})
	}
}


</script>

<style scoped lang="scss">
	*{
		padding: 0;
		margin: 0;
	}
	.time{
		padding: 0 10%;
	}
	h3{
		margin-top: 20px;
	}
	p{
		margin-top: 5px;
	}
	
	.null{
		width: 100%;
		height: 370px;
	}
	.buy{
		width: 100%;
		position: fixed;
		bottom:0;
		li{
			float: left;
			line-height: 50px;
		}
		li:nth-of-type(1){
			width: 60%;
			color: #666;
			font-size: 14px;
			span{
				color: #f60;
			}
		}
		li:nth-of-type(2){
			width: 40%;
			color: #fff;
			background: #ccc;
			text-align: center;
			line-height: 50px;
		}
	}
	
	#next{
		background: #f60;
	}
</style>