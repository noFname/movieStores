<template>
<div class="BOX">
	<div class="auto">
		<header style="background:url(http://img5.mtime.cn/mt/2018/07/23/113049.24374498_1280X720X2.jpg) no-repeat top center;background-size: 100% auto;">
			<div class="head">
				<a href="" class="left">
					<i class="iconfont icon-fanhui"></i>
				</a>
				<a href="" class="right">
					<i class="iconfont icon-share"></i>
				</a>
				<a href="" class="right">
					<i class="iconfont icon-shoucang"></i>
				</a>
			</div>
			<p style="background:url(https://static1.mtime.cn/html5/20180727153608/images/2014/cinemainfo_bg.png) no-repeat bottom center;background-size: 200% auto"></p>
		</header>
		<section class="clear">
			<!-- 影片基础信息 -->
			<div class="film_info">
				<div class="img">
					<img src="http://img5.mtime.cn/mt/2018/07/23/113049.24374498_1280X720X2.jpg" alt="">
				</div>
				<div class="info">
					<div class="title">
						<h2>西虹市首富</h2>
						<span>Hello Mr. Billionaire</span>
					</div>
					<ul>
						<li>
							<span>有彩蛋</span>
							 - 118分钟
						</li>
						<li>喜剧</li>
						<li>2018年7月27日中国上映 </li>
					</ul>
					<aside>
						<a href="">我想看</a>
						<a href="">我要评论</a>
					</aside>
				</div>
			</div>
			<!-- 按钮 -->
			<div class="btnBox">
				<div>
					<p>
						<i class="iconfont icon-shangyinhao"></i>
						<b>沈腾宋芸桦感受大手大脚花钱</b>
					</p>
					<a href="">
						<span>查影讯/购票</span>
					</a>
					
				</div>
			</div>
			<!-- 分割线 -->
			<div class="show">
				<p></p>
				<p></p>
			</div>
			<!-- 影片介绍 -->
			<article class="introduce">
				<p :style="isShow?height1:height2">
					影片改编自1902年乔治·巴尔·麦卡奇翁撰写的小说《布鲁斯特的百万横财》，中国版故事发生在《夏洛特烦恼》中的“特烦恼”之城“西虹市”。混迹于丙级业余足球队的守门员王多鱼（沈腾饰演），因比赛失利被开除离队。正处于人生最低谷的他接受了神秘台湾财团“一个月花光十亿资金”的挑战。本以为快乐生活就此开始，王多鱼却第一次感到“花钱特烦恼”！想要人生反转走上巅峰，真的没有那么简单。
				</p>
				<i :class="isShow?classa1:classa2" @click="isShow=!isShow"></i>
			</article>
			<!-- 分割线 -->
			<div class="show">
				<p></p>
				<p></p>
			</div>
			<div class="show">
				<p></p>
				<p></p>
			</div>
			<!-- 演员表 -->
			<article class="performer">
				<h2>
					<span>15位演职员</span>
					<i class="iconfont icon-jiantou1 right"></i>
				</h2>
				<div class="flexbox">
					<div class="l">
						<dl>
							<dt>导演</dt>
							<dd>
								<img src="http://img31.mtime.cn/ph/2015/09/23/113918.99192686_1280X720X2.jpg" alt="">
								<p>闫非</p>
								<span>Fei Yan</span>
							</dd>
						</dl>
					</div>
					<div class="r">
						<dl>
							<dt>全部演员</dt>
							<dd>
								<ul>
									<li>
										<div>
											<img src="http://img31.mtime.cn/ph/2014/09/26/105617.72460110_1280X720X2.jpg" alt="">
										</div>
										<p>沈腾</p>
										<span>Teng Shen</span>
										<div>
											<img src="http://img31.mtime.cn/ph/2014/09/26/105617.72460110_1280X720X2.jpg" alt="">
										</div>
										<p>沈腾</p>
									</li>
									
									<li>
										<div>
											<img src="http://img31.mtime.cn/ph/2015/11/18/155034.80099341_1280X720X2.jpg" alt="">
										</div>
										<p>宋芸桦</p>
										<span>Teng Shen</span>
										<div>
											<img src="http://img31.mtime.cn/ph/2015/11/18/155034.80099341_1280X720X2.jpg" alt="">
										</div>
										<p>饰:夏竹</p>
									</li>
								</ul>
							</dd>
						</dl>
					</div>
				</div>
			</article>
			<!-- 分割线 -->
			<div class="show">
				<p></p>
				<p></p>
			</div>
			<!-- 剧照 -->
			<article class="pic">
				<h2>
					<span>70张照片</span>
					<i class="iconfont icon-jiantou1 right"></i>
				</h2>
				<ul>
					<li v-for="data,index in datalist">
						<img :src="data.image" alt="" >
					</li>
				</ul>
			</article>
			<!-- 分割线 -->
			<div class="show">
				<p></p>
				<p></p>
			</div>
			<!-- 影评 -->
			<article class="review">
				<h2>
					<span>精选影评（48）</span>
					<i class="iconfont icon-jiantou1 right"></i>
				</h2>
				<h3>沈腾，这一次真的“多鱼（余）”了</h3>
				<p>
					作为开心麻花的重磅新片，沈腾自然是本片最大的亮点。以往，他一出场就自带喜剧笑果，你想不笑都难。一个动作、一个..
				</p>
				<ul class="clear">
					<li>
						<div><img src="" alt=""></div>
						<p>冷子墨</p>
						<span>2018-07-29 07:47:00 看过 - 评分</span><em>5.0</em>
					</li>
				</ul>
			</article>
			<!-- 分割线 -->
			<div class="show">
				<p></p>
				<p></p>
			</div>
			<div class="swiper">
				
			</div>
		</section>
		<userComment></userComment>
		<section class="footer">
			<div class="one">
				<ul>
					<li>首页</li>
					<li>购票</li>
					<li>发现</li>
					<li>商城</li>
					<li>我的</li>
				</ul>
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
	<footer>
		<input type="text" placeholder="留下我想说的...">
		<a href="">发送</a>
	</footer>
</div>

</template>

<script>
	import userComment from './common/userComment.vue'
	import axios from 'axios'
	export default {
		data(){
			return{
				isShow:true,
				height1:{
					height:'54px'
				},
				height2:{
					height:'auto'
				},
				classa1:'iconfont icon-jiantou',
				classa2:'iconfont icon-xiangshangjiantou',
				datalist:[]
			}
		},
		
		mounted(){
			axios.get('Service/callback.mi/movie/Image.api?movieId=253688&t=20188216272271861').then(res=>{
				console.log(res.data)
				this.datalist=res.data
			})
		},
		methods:{
			// list(index){
			// 	this.datalist=res.data[index].image
			// }
		},
		components : {
			userComment
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
	header{
		height:168px;
		width:100%;
		position: relative;
		background-size: 50% auto;
		.head{
			height:52px;
			width:100%;
			position: absolute;
			top:0;
			a{
				display: block;
				width:40px;
				line-height: 52px;
				text-align: center;
				i{
					font-size:20px;
					color:#fff;
					opacity: .7;

				}
				.icon-shoucang{
					font-size: 24px
				}
			}
		}
		p{
			height:100%;
			width:100%;
			position: absolute;
		}
	}
	header::before{
		content: '';
		display: block;
		background: rgba(0,0,0,0.2);
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
	}
	section{
		overflow: hidden;
		.show{
			p:nth-of-type(1){
				width:100%;
				height:6px;
				background: #fff;
				box-shadow: 0 0.2em 0.2em rgba(51,51,51,0.05);
				position: relative;
			    z-index: 1;
			}
			p:nth-of-type(2){
				background: #f6f6f6;
				position: relative;
				z-index: 0;
				height:14px;
			}
		}
		.film_info{
			height:192px;
			width:100%;
			position: absolute;
			top:60px;
			padding-left:20px;
			display: flex;
			.img{
				height:192px;
				width:130px;
				overflow: hidden;
				border:2px solid #fff;
				margin-right:12px;
				float:left;
				display: flex;
				justify-content: center;
				align-items: center;
				img{
					height:192px;
				}
			}
			.info{
				flex:1;
				width:100%;
				padding-right:14px;	
				position: relative;
				.title{
					overflow: hidden;
					padding:6px 18px 19px 0;
					color:#fff;
				}	
				ul{
					li{
						font-weight: bold;
						font-size: 14px;
						line-height: 1.4;
						margin-bottom:5px;
						span{
							color: #659d0e;
					    	font-weight: normal
						}
					}
				}
				aside{
					position: absolute;
					bottom:0;
					width:100%;
					display: flex;
					a{
						height:40px;
						line-height: 40px;
						text-align: center;
						flex:1;
						margin-right:6px;
						border:1px solid #999;
						color:#777;
						border-radius: 20px;
					}
					a:nth-of-type(2){
						margin-right:20px;
						color:#659d0e;
					}
				}
			}
		}
		.btnBox{
			width:100%;
			padding-top:84px;
			padding-bottom:20px;
			background: #fff;
			text-align: center;
			div{
				padding:10px 0 14px 0;
				position:relative;
				color:#fd8900;
				p{
					margin-bottom:15px;
					b{
						font-size: 18px;
						line-height: 20px;
						font-weight: normal;
					}
					i{
						position: absolute;
						font-size: 26px;
						margin-left:-17px;
						margin-top:-2px;
					}
				}
				a{
				    width:100%;
				    display: block;
				    height:48px;
				    padding: 0 20px;
					span{
						background: #ff8600;
					    color: #fff;
					    display: block;
					    border: 1px solid #ff8600;
					    width:100%;
					    height:48px;
					    line-height: 48px;
					    border-radius: 25px;
					}
				}
			}
		}
		article.introduce{
			background: #fff;
			padding:4px 18px 0 18px;
			text-align: center;
			p{
				overflow: hidden;
				font-size:18px;
				line-height: 1.5;
				text-align: left;
			}
			i{
				line-height: 40px;
				font-size: 20px;
			}
		}
		article.performer{
			padding:5px 18px 10px 18px;
			background:#fff;
			h2{
				height:46px;
				line-height: 46px;
				margin-bottom:10px;
				font-size: 20px;
				i{
					font-size: 28px;
					color:#ccc;
				}
			}
			.flexbox{
				display:flex;
				.l{
					width:102px;
					margin-right:10px;
					dd{
						text-align: center;
						margin-top:5px;
					}
					img{
						width:100%;
						float:left;
					}
				}
				.r{
					flex:1;
					border-left:1px solid #ccc;
					dt{
						padding-left:9px;
						margin-bottom:5px;
					}
					ul{
						text-align: center;
						li{
							width:50%;
							padding: 0 9px;
							float:left;
							div{
								height:95px;
								overflow: hidden;
								margin-bottom:3px;
								img{
									width:100%;
								}
							}
							p{
								font-size: 16px;
								line-height: 20px;
							}
							span{
								font-size: 14px;
								line-height: 18px;
							}
							
						}
					}
				}
			}
		}
		article.pic{
			padding:5px 18px 30px 18px;
			background:#fff;
			h2{
				height:46px;
				line-height: 46px;
				margin-bottom:10px;
				font-size: 20px;
				i{
					font-size: 28px;
					color:#ccc;
				}
			}
			ul{
				display: flex;
				height:80px;
				overflow: hidden;
				flex-wrap:wrap;
				justify-content: space-between;
				li{
					width:23%;
					overflow: hidden;
					img{
						height:80px;
					}
				}
			}
		}
		article.review{
			padding:5px 18px 10px 18px;
			background:#fff;
			h2{
				height:46px;
				line-height: 46px;
				font-size: 20px;
				i{
					font-size: 28px;
					color:#ccc;
				}
			}
			p{
				margin-top:10px;
			}
			ul{
				margin-top:10px;
				li{
					div{
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
					em{
						background: #659d0e;
						color:#fff;
						font-size: 12px;
						display: inline-block;
						padding:1px 2px;
						line-height: 18px;
						font-style:normal;
						margin-left:10px;
					}
				}
			}
		}
	}
	footer{
		height:54px;
		background: #f6f6f6;
		border-top: 1px solid #979797;
		width:100%;
		position: fixed;
		bottom:0;
		padding:0 20px;
		input{
			width:80%;
			float: left;
			height:44px;
			margin-top:5px;
			border: 1px solid #bababa;
			border-radius:3px;
			padding-left:5px;
			font-size: 20px;
		}
		a{
			float: right;
			line-height: 54px;
		}
	}
	.footer{
		.one{
			background: #fff;
			line-height: 50px;
			ul{
				display: flex;
				li{
					text-align: center;
					color:#0074c5;
					flex: 1;
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