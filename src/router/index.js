import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Login from '@/pages/login/Login'
import Register from '@/pages/login/Register'
import Feedback from '@/pages/home/Feedback'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {keepAlive: true}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {keepAlive: false}
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {keepAlive: false}
    },
    {
      path: '/feedback',
      name: 'Feedback',
      component: Feedback,
      meta: {keepAlive: false}
    }
  ]
})
