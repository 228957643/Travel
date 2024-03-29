// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import global_ from './pages/Global'
import './assets/styles/reset.css'
import 'swiper/dist/css/swiper.css'
import './assets/styles/border.css'
import 'vue2-toast/lib/toast.css'
import Toast from 'vue2-toast'

Vue.prototype.GLOBAL = global_
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(Toast, {
  defaultType: 'top',
  duration: 2500,
  wordWrap: false,
  width: '450px'
})
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
