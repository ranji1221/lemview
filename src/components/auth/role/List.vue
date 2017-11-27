<template>
    <div class='listpagewrap'>
      <lemon-breadcrumb :breadcrumb="breadcrumb"></lemon-breadcrumb>
      <lemon-prompt :alerts="alerts"></lemon-prompt>
      <lemon-list class="rolelist list" :tabledata="tabledatas"  :items="items" :actions="actions"> 
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
          rowType: '角色'
        },
        {
          id:'02',
          name:"首页5",
          fath:"首页1",
          rowType: '角色'
        },
        {
          id:'03',
          name:"首页1",
          fath:"首页177",
          rowType: '角色'
        },
        {
          id:'04',
          name:"首页8",
          fath:"首页19",
          rowType: '角色'
        }
      ],
      items: [
      {
        id: 1,
        prop:'id',
        label: "编号",
        sort:true

      },
      {
        id: 2,
        prop:'name',
        label: "名称",
        sort:true,
      },
      {
        id: 3,
        prop:'fath',
        label:"父菜单",
        sort:true,
      },
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