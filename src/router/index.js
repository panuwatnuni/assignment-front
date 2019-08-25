import Vue from 'vue'
import Router from 'vue-router'
import Scg from '@/components/Scg'
import Location from '@/components/Location'
import Mycv from '@/components/Mycv'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/scg',
      name: 'Scg',
      component: Scg
    },
    {
      path: '/location',
      name: 'Location',
      component: Location
    },
    {
      path: '/mycv',
      name: 'Mycv',
      component: Mycv
    }
  ]
})
