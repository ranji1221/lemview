<template>
    <v-checkboxList class="rolelist" :tabledata="tabledatas"  :items="items">
      
    </v-checkboxList>
</template>

<script>
import vCheckboxList from '@/components/common/list/List';
import "@/assets/style/common/list.css"

export default {
  components: {
    vCheckboxList
  },
  data() {
    return {
      tabledatas:[
        {
          id:'01',
          name:"首页",
          fath:"首页1",
        },
        {
          id:'01',
          name:"首页",
          fath:"首页1",
        },
        {
          id:'01',
          name:"首页",
          fath:"首页1",
        },
        {
          id:'01',
          name:"首页",
          fath:"首页1",
        }
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
        prop:'name',
        type: " ",
        label: "名称",
        sort:true,
        icon:false
      },
      {
        id:4,
        prop:'fath',
        type:"",
        label:"父菜单",
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