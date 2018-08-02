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

</style>