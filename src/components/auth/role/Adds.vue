<template>
  <div class="role_adds option_title_agg">
    <lemon-option-title :actions="title_actions" ></lemon-option-title>
    <lemon-upload-excel></lemon-upload-excel> 
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
	      	}	        
	    }
    }   
}
</script>