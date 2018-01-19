import Vue from 'vue'
import Router from 'vue-router'
import FlexMain from '@/components/FlexMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FlexMain',
      component: FlexMain
    }
  ]
})
