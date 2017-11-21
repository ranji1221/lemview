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
      name: '首页',
      component: Home,
    },
    {
      path:"/authority",
      component:authority,
      children:[
        {
          path:"roleList",
          name:"角色管理/角色列表",
          component:roleList
        }
      ]
    }
  ]
})
