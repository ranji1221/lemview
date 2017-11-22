import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/home.vue'
import Authority from "@/components/authority/authority.vue"
import RoleList from "@/components/authority/role/list.vue"
import RoleAdd from '@/components/authority/role/add.vue'
import RoleAdds from '@/components/authority/role/adds.vue'

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
      component:Authority,
      children:[
        {
          path:"roleList",
          name:"角色管理/角色列表",
          component:RoleList
        },
        {
          path:"roleAdd",
          name:"角色管理/添加角色",
          component:RoleAdd
        },
        {
          path:"roleAdds",
          name:"角色管理/批量添加角色",
          component:RoleAdds
        },
       
      ]
    }
  ]
})
