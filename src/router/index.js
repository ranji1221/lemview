import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import authority from "@/components/authority/authority"
import roleList from "@/components/authority/role/List"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path:"/authority",
      name:"authority",
      component:authority,
      children:[
        {
          path:"roleList",
          component:roleList
        }
      ]
    }
  ]
})
