<template>

<div>
	<h1>index</h1>
	<navbar></navbar>
	<search></search>
	<indexNowplaying></indexNowplaying>
	<indexComingsoon></indexComingsoon>
</div>

</template>

<script>
	import search from './common/indexSearch.vue'
	import navbar from './common/navbar.vue'
	import indexNowplaying from './common/indexNowplaying.vue'
	import indexComingsoon from './common/indexComingsoon.vue'
export default {
	components : {
		search,
		navbar,
		indexNowplaying,
		indexComingsoon
	}
}


</script>

<style>
	@charset "utf-8";
	/* CSS Document */

	/*=======================reset====================*/
	body,h1,h2,h3,h4,h5,h6,p,a,img,ul,li,dl,dt,dd,ol,input,figure,figcaption{ padding:0; margin:0;}
	header,footer,nav,section,article,aside,main{ display:block;}
	ul,ol{ list-style:none;}
	img{ display:block;}
	input{ outline:none}

	body{ font-size:16px; color:#3e3e3e; font-family:"微软雅黑";}


	a{ text-decoration:none; color:#666;}

	*{box-sizing:border-box;}

	html,body{ height:100%; background:#f0efed;}
</style>