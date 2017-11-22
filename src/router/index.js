import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/home.vue'
import Authority from "@/components/authority/authority.vue"
import RoleList from "@/components/authority/role/list.vue"
import RoleAdd from '@/components/authority/role/add.vue'
import RoleAdds from '@/components/authority/role/adds.vue'
import UserList from '@/components/authority/user/list.vue'
import UserAdd from '@/components/authority/user/add.vue'
import UserAdds from '@/components/authority/user/adds.vue'
import ResourceList from '@/components/authority/resource/list.vue'
import ResourceAdd from '@/components/authority/resource/add.vue'

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
        {
          path:"userList",
          name:"用户管理/用户列表",
          component:UserList
        },
        {
          path:"userAdd",
          name:"用户管理/添加用户",
          component:UserAdd
        },
        {
          path:"userAdds",
          name:"用户管理/批量添加用户",
          component:UserAdds
        },
        {
          path:"resourceList",
          name:"资源管理/资源列表",
          component:ResourceList
        },
        {
          path:"resourceAdd",
          name:"资源管理/添加资源",
          component:ResourceAdd
        },
       
      ]
    }
  ]
})
