import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index.vue'
import list from '../components/list.vue'
import detail from '../components/detail.vue'
import buyTicket from '../components/buyTicket.vue'
import listByMovie from '../components/listByMovie.vue'
import comingsoon from '../components/comingsoon.vue'
import nowplaying from '../components/nowplaying.vue'
import search from '../components/search.vue'
import detailMovie from '../components/detailMovie.vue'
import login from '../components/login.vue'
import reg from '../components/reg.vue'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/index',
      component: index,
    },
    {
      path: '/list',
      component: list
    },
    {
      path: '/detail/?cinemaid',
      component: detail
    },
    {
      path: '/buyTicket',
      component: buyTicket
    },
    {
      path: '/listByMovie',
      component: listByMovie,
      children : [
      	 {
      	 	path: 'nowplaying',
      	 	component: nowplaying,
       	},
       	{
       	  path: 'comingsoon',
       	  component: comingsoon
       	},
       	{
       		path: '/listByMovie',
       		redirect: '/listByMovie/nowplaying'
       	}
       ]
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/detailMovie/:id',
      component: detailMovie
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/reg',
      component: reg
    },
    {
    	path:'*',
    	redirect : "/index"
    }
  ]
})
