<template>

<div>
	<section>
		<h1>网友短评(1835)</h1>
		<ul class="clear">
			<li class="clear">
				<div class="img">
					<img src="" alt="">
				</div>
				<dl>
					<dt>
						<span>点你妈必</span>
						<em>7.0</em>
						<b>1小时前 - 评</b>
					</dt>
					<dd>没有什么内涵，但是胜在好看</dd>
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
export default {

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
		}
		div.img{
			float: left;
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
			dt{
				line-height: 25px;
				height:25px;
				margin-bottom:6px;
			}
			span{
				float:left;
				color:#999;
			}
			b,em,div{
				float: right
			}
			b{
				font-weight:100;
				color:#999;
			}
			em{
				background: #659d0e;
				color:#fff;
				font-size: 12px;
				display: inline-block;
				padding:1px 2px;
				line-height: 20px;
				font-style:normal;
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
</style>