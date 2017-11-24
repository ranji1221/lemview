<template>
  <div class="role_adds">
    <lemon-option-title></lemon-option-title>
    <lemon-upload-excel></lemon-upload-excel> 
  </div>
</template>
<script>
import UploadExcel  from "@/components/common/action/UploadExcel"
import LemonOptionTitle from "@/components/common/action/OptionTitle"


export default {
    components:{ UploadExcel,LemonOptionTitle },
    data() {
      	return {
	      	actions:{
	      		hid:true,
	      		scaling:true,
	      		close:true,
	      	}	        
	    }
    }   
}
</script>