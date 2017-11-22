import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login.vue'
import Layout from '@/components/common/layout/Layout.vue'
import Home from '@/components/common/layout/Home.vue'
import Authority from '@/components/auth/Authority.vue'
import RoleList from "@/components/auth/role/List.vue"
import RoleAdd from '@/components/auth/role/Add.vue'
import RoleAdds from '@/components/auth/role/Adds.vue'
import UserList from '@/components/auth/user/List.vue'
import UserAdd from '@/components/auth/user/Add.vue'
import UserAdds from '@/components/auth/user/Adds.vue'
import ResourceList from '@/components/auth/resource/List.vue'
import ResourceAdd from '@/components/auth/resource/Add.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      name: '',
    },
     {
      path: '/login',
      name: '登陆',
      component: Login,
    },
    {
      path: '/index',
      component: Layout,
      redirect: '/index/home',
      children:[
          {
            path:"home",
            name: '首页',
            component:Home
          },
          {
        path:"/authority",
        component: Authority,
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
    },
    
  ]
})
