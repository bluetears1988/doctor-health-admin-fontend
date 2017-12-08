import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import add from '../page/reports/manual/add.vue'
import pack1 from '../page/reports/manual/pack1.vue'
import pack2 from '../page/reports/manual/pack2.vue'
import reportlist from '../page/reports/reportlist.vue'

import orders from '../page/clients/orders.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/reports/manual/add',
      component:add,
    	children:[
        {path: '/pack1',component:pack1,},
        {path: '/pack2',component:pack2},
        {path: '/page/:pack_id',component:pack2}
    	]
    },
    {path: '/reports/reportlist',component:reportlist,name:'reportlist'},
    {path: '/clients/orders',component:orders,name:'orders'},
  ]
})
