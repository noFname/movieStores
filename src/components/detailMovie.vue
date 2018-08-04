<template>
<div class="BOX" v-if="headlist">
	<div class="auto">
		<movieHeader></movieHeader>
		<section class="clear">
			<!-- 影片基础信息 -->
			<div class="film_info">
				<div class="img">
					<i class="iconfont icon-bofang"></i><span></span>
					<img src="https://static1.mtime.cn/html5/20180727153608/images/2014/iv_cine_04.png" alt="" class="mix">
					<img :src="headlist.image" alt="">
				</div>
				<div class="info">
					<div class="title">
						<h2>{{headlist.titleCn}}</h2>
						<span>{{headlist.titleEn}}</span>
					</div>
					<div class="pf">{{headlist.rating}}</div>
					<ul>
						<li>
							<span>有彩蛋</span>
							 - {{headlist.runTime}}
						</li>
						<li>
							<span  v-for="type,index in headlist.type" class="span" v-if="index<3">{{type}}<em> / &nbsp;</em></span>
						</li>
						<li>{{headlist.release.date}}{{headlist.release.location}}上映 </li>
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
						<i class="iconfont icon-shangyinhao" v-show="headlist.commonSpecial"></i>
						<b>{{headlist.commonSpecial}}</b>
					</p>
					<div>
						<span @click="handleClick()">查影讯/购票</span>
					</div>
					
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
					{{headlist.content}}
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
					<span>{{headlist.personCount}}位演职员</span>
					<i class="iconfont icon-jiantou1 right"></i>
				</h2>
				<div class="flexbox">
					<div class="l">
						<dl>
							<dt>导演</dt>
							<dd>
								<img :src="headlist.director.directorImg" alt="">
								<p class="ch">{{headlist.director.directorName}}</p>
								<span>{{headlist.director.directorNameEn}}</span>
							</dd>
						</dl>
					</div>
					<div class="r">
						<dl>
							<dt>全部演员</dt>
							<dd>
								<ul>
									<li v-for="actor in headlist.actorList">
										<div>
											<img :src="actor.actorImg" alt="">
											}
										</div>
										<p class="ch1">{{actor.actor}}</p>
										<span>{{actor.actorEn}}</span>
										<div>
											<img src="actor.roleImg" alt="">
										</div>
										<p>饰：{{actor.roleName}}</p>
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
					<span>{{headlist.imageCount}}张照片</span>
					<i class="iconfont icon-jiantou1 right"></i>
				</h2>
				<ul>
					<li v-for="data,index in headlist.images">
						<img :src="data" alt="" >
					</li>
				</ul>
			</article>
			<!-- 分割线 -->
			<div class="show">
				<p></p>
				<p></p>
			</div>
			<!-- 影评 -->
			<article class="review" v-if="reviewlist">
				<h2>
					<span>精选影评（{{reviewlist.totalCount}}）</span>
					<i class="iconfont icon-jiantou1 right"></i>
				</h2>
				<h3>{{reviewlist.comments[0].title}}</h3>
				<p class="p">{{reviewlist.comments[0].content}}</p>
				<ul class="clear">
					<li>
						<div class="ll"><img :src="reviewlist.comments[0].headurl" alt=""></div>
						<div class="rr">
							<p>{{reviewlist.comments[0].nickname}}</p>
							<span>2018-07-29 07:47:00</span>
						</div>
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
		<movieFooter></movieFooter>
	</div>
	<footer>
		<input type="text" placeholder="留下我想说的...">
		<a href="">发送</a>
	</footer>
</div>

</template>

<script>
	import userComment from './common/userComment.vue'
	import movieHeader from './common/movieHeader.vue'
	import movieFooter from './common/movieFooter.vue'
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
				headlist:null,
				reviewlist:null

			}
		},
		methods:{
			handleClick(){
				console.log(this.$route.params.id)
			}
		},
		mounted(){
			axios.get(`Service/callback.mi/movie/Detail.api?movieId=${this.$route.params.id}&locationId=290&t=2018838591516998`).then(res=>{
				// console.log(res.data)
				this.headlist=res.data
				this.background = {
					'background':'url('+this.headlist.image+')' ,
					'backgroundSize':' 100% auto'}
				// console.log(this.headlist)
			})
			axios.get(`Service/callback.mi/Movie/HotLongComments.api?movieId=${this.$route.params.id}&pageIndex=1&t=2018831524465233`).then(res=>{
				// console.log(res.data)
				this.reviewlist=res.data
				console.log(this.reviewlist)
			})
		},
		components : {
			userComment,
			movieHeader,
			movieFooter
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
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;
				
				i{
					height:50px;
					width:50px;
					color:#fff;
					position: absolute;
					font-size:50px;	
					z-index: 1;
					display: inline-block;
				}
				span{
					position: absolute;
					display: inline-block;
					height:44px;
					margin-top:3px;
					background: rgba(0,0,0,.2);
					border-radius: 50%;
					width:44px;
				}
				.mix{
					position: absolute;
					top:10px;
					right:10px;
					width:38px;
					height:auto;
				}
				
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
					h2{
						font-size: 20px;
					}
					span{
						display: block;
						width:150px;
						position: relative;
						overflow: hidden;
						font-size: 14px;
						height:20px;
						white-space:nowrap;
						text-overflow: ellipsis;
					}
				}	
				.pf{
					position: absolute;
					right:20px;
					top:50px;
					background:#659d0e;
					color:#fff;
					line-height: 20px;
					padding:5px;
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
						span.span{
							font-weight: bold;
							color:#3e3e3e;
							display: inline-block;
						}
						span.span:last-of-type{
							em{
								display: none;
							} 
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
				div{
				    width:100%;
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
						img{
							float:left;
						}
						.ch{
							float:left;
							line-height: 24px;
							height:24px;
							width:90px;
							overflow: hidden;
						}
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
								font-size: 12px;
								line-height: 20px;
							}
							p.ch1{
								overflow: hidden;
								width:100%;
								font-size: 14px;
								height:20px;
								white-space:nowrap;
								text-overflow: ellipsis;
							}
							span{
								font-size: 12px;
								height:36px;
								display: block;
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
					display: flex;
					flex-wrap:wrap;
					justify-content: center;
					align-items: center;
					img{
						height: 80px
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
			.p{
				margin-top:10px;
				height: 65px;
				overflow: hidden;
			}
			ul{
				margin-top:10px;
				li{
					display: flex;
					div.ll{
						width:48px;
						height:48px;
						border-radius: 50%;
						overflow: hidden;
						background: #ccc;
						margin-right:10px;
						img{
							float:left;
							width:100%;
						}
					}
					.rr{
						flex:1;
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
</style>