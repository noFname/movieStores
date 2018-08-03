<template>

<div>
	<section>
		<h1>网友短评({{datalist.totalCommentCount}})</h1>
		<ul class="clear">
			<li class="clear" v-for="data in datalist.cts">
				<div class="img">
					<img :src="data.caimg" alt="">
				</div>
				<dl>
					<dt>
						<span>{{data.ca}}</span>
						<div>
							<em>7.0</em>
							<b>1小时前 - 评</b>
						</div>
					</dt>
					<dd>{{data.ce}}</dd>
					<dd>
						<div><i class="iconfont icon-boshiweb_weizan"></i>赞</div>
						<div><i class="iconfont icon-xinxi"></i>回复</div>
					</dd>
				</dl>
			</li>
		</ul>
	</section>
</div>

</template>

<script>
	import axios from 'axios'
	export default {
		data(){
			return{
				datalist:[]
				}
		},
		mounted(){
			console.log(this.$route.params.id)
			axios.get(`Service/callback.mi/Showtime/MovieComments.api?movieId=${this.$route.params.id}&pageIndex=1&t=2018839435633301`).then(res=>{
				// console.log(res.data)
				this.datalist=res.data
				console.log(this.datalist)
			})
		}
	}


</script>

<style scoped lang="scss">
	.clear::after{
		content: '';
		clear:both;
		font-size:0;
		height: 0;
		line-height: 0;
		display: block;
		visibility:hidden;
	}
	section{
		padding:18px 18px 0 18px;
		background:#fff;
		li{
			margin-top:18px;
			border-bottom:1px solid #d8d8d8;
			display: flex;
		}
		div.img{
			width:48px;
			height:48px;
			border-radius: 50%;
			overflow: hidden;
			background: #ccc;
			margin-right:10px;
			img{
				width:100%;
			}	
		}
		dl{
			flex:1;
			em{
				font-style:normal;
			}
			dt{
				line-height: 25px;
				margin-bottom:6px;
				display: flex;
				span{
					width:50%;
				}
				div{
					flex:1;
				}
				b{
					font-weight:100;
					color:#999;
				}
				span{
					color:#999;
				}
			}b,em,div{
					float: right
				}
			dd{
				
				em{
					background: #659d0e;
					color:#fff;
					font-size: 12px;
					display: inline-block;
					padding:1px 2px;
					line-height: 20px;
					margin-left:6px;
					margin-top:2px;
				}
				div{
					height:54px;
					line-height: 54px;
					margin-left:10px;
					color:#999;
					i{
						font-size:28px;
						position: relative;
						padding:0 5px;
					}
				}
			}
		}
	}
</style>