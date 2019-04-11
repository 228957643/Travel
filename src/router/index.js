import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Login from '@/pages/login/Login'
import Register from '@/pages/login/Register'
import Feedback from '@/pages/home/Feedback'
import GameDetail from '@/pages/home/GameDetail'
import UserCenter from '@/pages/home/UserCenter'
import GameCustomization from '@/pages/home/GameCustomization'
import Search from '@/pages/home/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {keepAlive: false}
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
    },
    {
      path: '/game_detail',
      name: 'GameDetail',
      component: GameDetail,
      meta: {keepAlive: false}
    },
    {
      path: '/user_center',
      name: 'UserCenter',
      component: UserCenter,
      meta: {keepAlive: false}
    },
    {
      path: '/game_customization',
      name: 'GameCustomization',
      component: GameCustomization,
      meta: {keepAlive: false}
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {keepAlive: false}
    }
  ]
})
