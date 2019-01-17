import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import Home from '@/pages/home/home'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})
