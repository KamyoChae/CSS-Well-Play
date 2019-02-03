import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import Home from '@/pages/home/home'
import Show from '@/pages/show/show'
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
    },
    {
      path: '/Show',
      name: 'Show',
      component: Show
    }
  ]
})
