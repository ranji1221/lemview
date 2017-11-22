<template>
    <div>
      <lemon-alert :alerts="alerts"></lemon-alert>
      <lemon-list class="rolelist" :tabledata="tabledatas"  :items="items"> 
      </lemon-list>
      <lemon-pagination :page="page"></lemon-pagination>
    </div>
</template>

<script>
import LemonList from '@/components/common/list/list.vue';
import LemonAlert from '@/components/common/alert/alert.vue';
import LemonPagination from '@/components/common/pagination/pagination.vue'
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
          resourceType:"菜单",
          resourceName:"员工",
          resourcePName:"权限管理"
        },
        {
          id:'02',
          resourceType:"菜单",
          resourceName:"员工",
          resourcePName:"权限管理"
        },
       {
          id:'03',
          resourceType:"菜单",
          resourceName:"员工",
          resourcePName:"权限管理"
        },
       {
          id:'04',
          resourceType:"菜单",
          resourceName:"员工",
          resourcePName:"权限管理"
        },
      ],
      items: [
      {
        id: 1,
        prop:'id',
        type: " ",
        label: "编号",
        sort:true,
        icon:false
      },
      {
        id: 2,
        prop:'resourceType',
        type: " ",
        label: "资源类型",
        sort:true,
        icon:false
      },
      {
        id:3,
        prop:'resourceName',
        type:"",
        label:"资源名称",
        sort:true,
        icon:false
      },
       {
        id:4,
        prop:'resourcePName',
        type:"",
        label:"父级资源",
        sort:true,
        icon:false
      },
      {
        id:5,
        type:"",
        label:"查看",
        sort:false,
        icon:'icon-eye-open',
      },
      {
        id:6,
        type:"",
        label:"编辑",
        sort:false,
        icon:'icon-pencil'
      },
      {
        id:7,
        type:"",
        label:"删除",
        sort:false,
        icon:'icon-trash',
      },
      {
        id:8,
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