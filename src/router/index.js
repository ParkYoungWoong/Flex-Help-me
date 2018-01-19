import Vue from 'vue'
import Router from 'vue-router'
import FlexMain from '@/components/FlexMain'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FlexMain',
      component: FlexMain
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
