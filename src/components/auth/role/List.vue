<template>
    <div class='listpagewrap'>
      <lemon-breadcrumb :breadcrumb="breadcrumb"></lemon-breadcrumb>
      <lemon-prompt :alerts="alerts"></lemon-prompt>
      <lemon-list class="rolelist" :tabledata="tabledatas"  :items="items" :actions="actions"> 
      </lemon-list>
      <lemon-pagination :page="page"></lemon-pagination>
    </div>
</template>

<script>
import LemonList from '@/components/common/action/List.vue';
import LemonPrompt from '@/components/common/prompt/Prompt.vue';
import LemonBreadcrumb from '@/components/common/action/Breadcrumb.vue';
import LemonPagination from '@/components/common/action/Pagination.vue'
import "@/assets/style/common/list.css"

export default {
  components: {
    LemonList,LemonPrompt,LemonPagination,LemonBreadcrumb
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
          name:"首页2",
          fath:"首页14",
        },
        {
          id:'02',
          name:"首页5",
          fath:"首页1",
        },
        {
          id:'03',
          name:"首页1",
          fath:"首页177",
        },
        {
          id:'04',
          name:"首页8",
          fath:"首页19",
        }
      ],
      items: [
//      {
//      id: 1,
//      type: "selection",
//      class:"tableCheckbox"
//    },
      {
        id: 2,
        prop:'id',
//      type: " ",
        label: "编号",
        sort:true,
//      icon:false,

      },
      {
        id: 3,
        prop:'name',
//      type: " ",
        label: "名称",
        sort:true,
//      icon:false,

      },
      {
        id:4,
        prop:'fath',
//      type:"",
        label:"父菜单",
        sort:true,
//      icon:false,

      },
//    {
//      id:5,
//      type:"",
//      label:"查看",
//      sort:false,
//      icon:'icon-eye-open',
//      class:"tableAction"
//    },
//    {
//      id:6,
//      type:"",
//      label:"编辑",
//      sort:false,
//      icon:'icon-pencil',
//      class:"tableAction"
//    },
//    {
//      id:7,
//      type:"",
//      label:"删除",
//      sort:false,
//      icon:'icon-trash',
//      class:"tableAction"
//    },
//    {
//      id:8,
//      type:"",
//      label:"授权",
//      sort:false,
//      icon:'icon-key',
//      class:"tableAction tableLast"
//    },
      ],
      actions:{
      	selection:true,
      	view:true,
      	edit:true,
      	dele:true,
      	ault:true,
      }
    }
  }
}
</script>