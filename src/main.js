// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'

Vue.config.productionTip = false
Vue.use(MintUI);
Vue.directive('loops', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    var swiper = new Swiper('.swiper-container', {
          slidesPerView: 3,
          spaceBetween: 20,
          centeredSlides: true,
        });
    console.log('aassa')
  },

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
