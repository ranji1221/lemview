<template>
  <div class="role_adds option_title_agg">
    <lemon-option-title :actions="title_actions" ></lemon-option-title>
    <lemon-upload-excel :upload="upload"></lemon-upload-excel> 
  </div>
</template>
<script>
import LemonUploadExcel  from "@/components/common/action/UploadExcel"
import LemonOptionTitle from "@/components/common/action/OptionTitle"


export default {
    components:{ LemonUploadExcel,LemonOptionTitle },
    data() {
      	return {
	      	title_actions:{
	      		hid:true,
	      		scaling:true,
	      		close:true,
	      	},
	      	upload:{
      	    	action:'',//文件提交地址
      	    	multiple:true,//同时多文件上传
      	    	limit:5,//上传数量限制
      	    	auto:false,//自动上传      	    
      	    	accept:".xla,.xls,.xlc,.xlt,.xlsx,.xlw",//可上传的文件后缀名
      	    	tip:"*仅支持excel文件格式导入；*文件<50KB",//文件提示信息
      	    }
	    }
    }   
}
</script>