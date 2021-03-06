import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import Home from '@/pages/home/home'
import Show from '@/pages/show/show'
import content from "@/pages/show/components/content"
Vue.use(Router)

export default new Router({
  // mode:"history",
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/show',
      name: 'Show',
      component: Show,
      children :[
        {
          path:"content", 
          name:"content",
          component:content
        },

      ]
    }
  ]
})
