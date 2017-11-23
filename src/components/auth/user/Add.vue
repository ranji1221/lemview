<template>
  <div class="user_add option_title_agg">
    <lemon-option-title></lemon-option-title>
    <lemon-form :forms="form"></lemon-form> 
  </div>
</template>

<script>
import LemonForm  from "@/components/common/action/Form"
import LemonOptionTitle from "@/components/common/action/OptionTitle"
import "@/assets/style/common/Option_title.css"

export default {
    components:{ LemonForm,LemonOptionTitle },
      data() {
      return {
        form: {
          name: {
            label:"用户名称",
            text:"",
            type:"text",
            default:"请输入用户名称"
          },
          phone: {
            label:"联系电话",
            text:"",
            type:"text",
            default:"请输入用户联系方式"
          },
          emily: {
            label:"邮箱",
            text:"",
            type:"text",
            default:"请输入用户邮箱"
          },
          fath:{
            label:"分配用户",
            text:"",
            type:"select",
            selected:"选择分配用户",
            childrens:[
              {
                label:"用户列表",
                value:1
              },
              {
                label:"首页",
                value:2
              }
            ]
          },
        }
      }
    },
    
}
</script>
