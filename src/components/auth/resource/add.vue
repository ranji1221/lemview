<template>
  <div class="role_add option_title_agg">
    <lemon-option-title :actions="actions"></lemon-option-title>
    <lemon-form :forms="form"></lemon-form> 
  </div>
</template>

<script>
import LemonForm  from "@/components/common/action/Form"
import LemonOptionTitle from "@/components/common/action/OptionTitle"

export default {
    components:{ LemonForm,LemonOptionTitle },
      data() {
      return {
      	actions:{
      		hid:true,
      		scaling:true,
      		close:true,
      	},
        form: {
          name: {
            label:"资源名称",
            text:"",
            type:"text",
            default:"请输入资源名称"
          },
          fath:{
            label:"资源类型",
            text:"",
            type:"select",
            selected:"选择资源类型",
            childrens:[
              {
                label:"资源列表",
                value:1
              },
              {
                label:"首页",
                value:2
              }
            ]
          },
          rely:{
            label:"父级角色",
            text:"",
            type:"select",
            selected:"依赖父级列表",
            childrens:[
              {
                label:"资源列表",
                value:1
              },
              {
                label:"首页",
                value:2
              }
            ]
          },
          operation:{
            lable:"相关操作",
            text:"",
            type:"checked",
            childrens:[
                {
                    label:"查看",
                    value:1
                },
                {
                    label:"更改",
                    vaule:2
                },
                {
                    label:"增加",
                    value:3
                },
                {
                    label:"删除",
                    value:4
                }
            ]
          }
        }
      }
    },
    
}
</script>
