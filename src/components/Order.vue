<template>

<div>
	<div class="head">
		<router-link to="/personal" tag="i" class="iconfont icon-fanhui"></router-link>
		<div>我的订单</div>
	</div>
	<section>
		<dl v-for="data in orderlist">
			<dt>座</dt>
			<dd class="con">
				<p>{{data.name}} {{data.count}}</p>
				<span>{{data.date}}</span>
				<span>{{data.time}}</span>
				<span>{{data.movieHome}}</span>
			</dd>
			<dd class="pf">评分</dd>
		</dl>
	</section>
	<movieFooter class="bot"></movieFooter>
</div>

</template>

<script>
	import movieFooter from './common/movieFooter.vue'
	export default {
	data(){
		return{
			orderlist:[
				{
					name:'西虹市首富',time:'2018-7-20 13:40',date:'118分钟',count:2,movieHome:'大地影院-大连新玛特店'
				},
				{
					name:'爱情公寓',time:'2018-7-27 10:40',date:'115分钟',count:1,movieHome:'大地影院-大连新玛特店'
				},				{
					name:'的士速递5',time:'2018-7-30 9:40',date:'102分钟',count:4,movieHome:'大地影院-大连新玛特店'
				}


			]
		}
	},
	components : {
		movieFooter
	}
}
</script>

<style scoped lang="scss">
	section{
		background: #f6f6f6;
		min-height:500px;
	}
	.head{
		display: flex;
		background: #1c2635;
		line-height: 52px;
		color:#fff;
		padding-right:10px;
		i{
			font-size: 20px;
			padding-left: 10px;
		}
		div{
			font-size: 16px;
			flex:1;
			text-align: center;
		}
	}
	dl{
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		padding:10px 18px;
		margin-top: 10px;
		dt{
			width:30px;
			height:30px;
			font-size: 16px;
			border-radius: 50%;
			background: #ccc;
			color:#fff;
			text-align: center;
			line-height: 30px;
		}
		dd.con{
			flex:1;
			border-left:1px dashed #ccc;
			margin-left:18px;
			padding-left:18px;
			p{
				font-size: 16px;
				margin-bottom: 5px;
				color:#aaa;
			}
			span{
				display: block;
				margin-bottom: 5px;
				font-size: 14px;
				color:#ccc;
			}
		}
		dd.pf{
			border:1px solid #fd8900;
			border-radius: 10px;
			line-height: 20px;
			text-align: center;
			padding:0 10px;
			font-size: 12px;
		}
	}
</style>