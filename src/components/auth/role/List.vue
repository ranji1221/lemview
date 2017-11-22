<template>
    <div class='listpagewrap'>
      <lemon-prompt :alerts="alerts"></lemon-prompt>
      <lemon-list class="rolelist" :tabledata="tabledatas"  :items="items"> 
      </lemon-list>
      <lemon-pagination :page="page"></lemon-pagination>
    </div>
</template>

<script>
import LemonList from '@/components/common/action/List.vue';
import LemonPrompt from '@/components/common/prompt/Prompt.vue';
import LemonPagination from '@/components/common/action/Pagination.vue'
import "@/assets/style/common/list.css"

export default {
  components: {
    LemonList,LemonPrompt,LemonPagination
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
          name:"首页",
          fath:"首页1",
        },
        {
          id:'02',
          name:"首页",
          fath:"首页1",
        },
        {
          id:'03',
          name:"首页",
          fath:"首页1",
        },
        {
          id:'04',
          name:"首页",
          fath:"首页1",
        }
      ],
      items: [
        {
        id: 1,
        type: "selection",
        class:"tableCheckbox"
      },
      {
        id: 2,
        prop:'id',
        type: " ",
        label: "编号",
        sort:true,
        icon:false,
        class:"tableId"
      },
      {
        id: 3,
        prop:'name',
        type: " ",
        label: "名称",
        sort:true,
        icon:false,
        class:"tableName"
      },
      {
        id:4,
        prop:'fath',
        type:"",
        label:"父菜单",
        sort:true,
        icon:false,
        class:"tableFather"
      },
      {
        id:5,
        type:"",
        label:"查看",
        sort:false,
        icon:'icon-eye-open',
        class:"tableAction"
      },
      {
        id:6,
        type:"",
        label:"编辑",
        sort:false,
        icon:'icon-pencil',
        class:"tableAction"
      },
      {
        id:7,
        type:"",
        label:"删除",
        sort:false,
        icon:'icon-trash',
        class:"tableAction"
      },
      {
        id:8,
        type:"",
        label:"授权",
        sort:false,
        icon:'icon-key',
        class:"tableAction tableLast"
      },
      ],
    }
  }
}
</script>