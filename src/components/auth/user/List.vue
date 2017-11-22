<template>
    <div>
      <lemon-alert :alerts="alerts"></lemon-alert>
      <lemon-list class="rolelist" :tabledata="tabledatas"  :items="items"> 
      </lemon-list>
      <lemon-pagination :page="page"></lemon-pagination>
    </div>
</template>

<script>
import LemonList from '@/components/common/action/List.vue';
import LemonAlert from '@/components/common/prompt/Prompt.vue';
import LemonPagination from '@/components/common/action/Pagination.vue'
import "@/assets/style/common/list.css"

export default {
  components: {
    LemonList,LemonAlert,LemonPagination
  },
  data() {
    return {
      page: {
        size: 10,
        total: 19
      },
      alerts: [{
        title: '温馨提示：此页面展示角色列表，您可以对角色查看、编辑、删除、授权及批量删除和新建的操作。单击右方x号，可以关闭此条提示语!',
        type: 'info'
      }],
      tabledatas:[
        {
          id:'01',
          userName: "李佳",
          assignRole: "管理员",
          phone: '15940324325',
          email: '23474@qq.com',
        },
        {
          id:'02',
          userName: "李佳",
          assignRole: "管理员",
          phone: '15940324325',
          email: '23474@qq.com',
        },
        {
          id:'03',
          userName: "李佳",
          assignRole: "管理员",
          phone: '15940324325',
          email: '23474@qq.com',
        },
        {
          id:'04',
          userName: "李佳",
          assignRole: "管理员",
          phone: '15940324325',
          email: '23474@qq.com',
        },
      ],
      items: [
        {
        id: 1,
        type: "selection"
      },
      {
        id: 2,
        prop:'id',
        type: " ",
        label: "编号",
        sort:true,
        icon:false
      },
      {
        id: 3,
        prop:'userName',
        type: " ",
        label: "用户名",
        sort:true,
        icon:false
      },
      {
        id:4,
        prop:'assignRole',
        type:"",
        label:"分配角色",
        sort:true,
        icon:false
      },
      {
        id:5,
        prop:'phone',
        type:"",
        label:"手机号码",
        sort:true,
        icon:false
      },
      {
        id:6,
        prop:'email',
        type:"",
        label:"邮箱地址",
        sort:true,
        icon:false
      },
      {
        id:7,
        type:"",
        label:"查看",
        sort:false,
        icon:'icon-eye-open',
      },
      {
        id:8,
        type:"",
        label:"编辑",
        sort:false,
        icon:'icon-pencil'
      },
      {
        id:9,
        type:"",
        label:"删除",
        sort:false,
        icon:'icon-trash',
      },
      {
        id:10,
        type:"",
        label:"授权",
        sort:false,
        icon:'icon-key'
      },
      ],
    }
  }
}
</script>