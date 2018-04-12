import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Layout from '@/components/home/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/home',
      component: Layout,
      children: [{
        path: 'main',
        name: 'Main',
        component: resolve => require(['@/components/home/Main'], resolve)
      },
      {
        path: 'practice',
        name: 'Practice',
        component: resolve => require(['@/components/home/Practice'], resolve)
      },
      {
        path: 'me',
        name: 'Me',
        component: resolve => require(['@/components/home/Me'], resolve)
      }]
    },
    {
      path: '/addSchool',
      name: 'addSchool',
      component: resolve => require(['@/components/home/main/AddSchool'], resolve)
    }
  ]
})
