<template>
    <div class='listpagewrap'>
      <lemon-breadcrumb :breadcrumb="breadcrumb"></lemon-breadcrumb>
      <lemon-alert :alerts="alerts"></lemon-alert>
      <lemon-list class="rolelist" :tabledata="tabledatas"  :items="items" :actions="actions"> 
      </lemon-list>
      <lemon-pagination :page="page"></lemon-pagination>
    </div>
</template>

<script>
import LemonList from '@/components/common/action/List.vue';
import LemonAlert from '@/components/common/prompt/Prompt.vue';
import LemonPagination from '@/components/common/action/Pagination.vue';
import LemonBreadcrumb from '@/components/common/action/Breadcrumb.vue';
import "@/assets/style/common/list.css"

export default {
  components: {
    LemonList,LemonAlert,LemonPagination,LemonBreadcrumb
  },
  data() {
    return {
      breadcrumb:{
      	search:true,
      },
      page: {
        size: 10,
        total: 19,
        tfootbtns:{
        	btns:true,//是否添加按钮组
        	create:true,//新建按钮
        	refresh:true,//刷新按钮
        	delete:true, //删除按钮      	
        }
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
        label: "编号",
        sort:true,
      },
      {
        id: 2,
        prop:'resourceType',
        label: "资源类型",
        sort:true,
      },
      {
        id:3,
        prop:'resourceName',
        label:"资源名称",
        sort:true,
      },
       {
        id:4,
        prop:'resourcePName',
        label:"父级资源",
        sort:true,
      },
      ],
       actions:{
      	selection:true,
      	view:true,
      	edit:true,
      	dele:true,
      	ault:false,
      }
    }
  }
}
</script>