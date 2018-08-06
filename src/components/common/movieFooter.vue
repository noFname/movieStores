<template>

<div>
	<section class="footer">
		<div class="one">
			<div class="ul">
				<router-link tag="div" to="/index" class="li">首页</router-link>
				<router-link tag="div" to="/list" class="li">购票</router-link>
				<router-link tag="div" to="/index" class="li">发现</router-link>
				<router-link tag="div" to="/index" class="li">商城</router-link>
				<router-link tag="div" to="/personal" class="li">我的</router-link>
			</div class="ul">
		</div>
		<div class="two">
			<ul>
				<li><a href="">PC版</a></li>
				<li><a href="">客户端下载</a></li>
				<li><a href="">意见反馈</a></li>
				<li><a href="">帮助中心</a></li>
			</ul>
		</div>
		<div class="three">
			<a href="" style="background: url(https://static1.mtime.cn/html5/20180727153608/images/2014/fot_logo.png)no-repeat;background-size:100% auto;"></a>
			<a href="" style="background: url(https://static1.mtime.cn/html5/20180727153608/images/h_mark.jpg)no-repeat;background-size:100% auto;"></a>
			<p>
				<span>Copyright </span>
				<span>2006-2018</span>
				<span> Mtime.com Inc. All rights reserved.</span>
			</p>
		</div>
	</section>
</div>

</template>

<script>
export default {
	methods:{
		
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
	.auto{
		padding-bottom:54px;
	}
	.left{
		float:left;
	}
	.right{
		float:right;
	}
	.footer{
			.one{
				background: #fff;
				line-height: 50px;
				div.ul{
					display: flex;
					div.li{
						text-align: center;
						color:#0074c5;
						flex: 1;
						height:50px;
						line-height: 50px;
					}
				}
			}
			.two{
				height: 52px;
				background: #f6f6f6;
				ul{
					text-align: center;
					li{
						display: inline-block;
						
						a{	
							margin-top:18px;
							padding:0 13px;
							display: inline-block;
							border-right:1px solid #ccc;
						}
					}
					li:last-of-type{
						a{border:0;}
					}
				}
			}
			.three{
				text-align: center;
				background: #f6f6f6;
				p{
					margin-bottom:10px;
					span{
						font-size: 12px;
						color:#cdcdcd;
					}
				}	
				a{
					display: inline-block;
					width:72px;
					height:28px;
				}
			}
			
		}
</style>