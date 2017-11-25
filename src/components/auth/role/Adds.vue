<template>
  <div class="role_adds option_title_agg">
    <lemon-breadcrumb :breadcrumb="breadcrumb"></lemon-breadcrumb>
    <lemon-option-title :actions="title_actions" ></lemon-option-title>
    <lemon-upload-excel></lemon-upload-excel> 
  </div>
</template>
<script>
import LemonUploadExcel  from "@/components/common/action/UploadExcel"
import LemonOptionTitle from "@/components/common/action/OptionTitle"
import LemonBreadcrumb from '@/components/common/action/Breadcrumb.vue';

export default {
    components:{ LemonUploadExcel,LemonOptionTitle,LemonBreadcrumb },
    data() {
      	return {
		      breadcrumb:{
		      	search:true,
		      	
		      },
	      	title_actions:{
	      		hid:true,
	      		scaling:true,
	      		close:true,
	      	}	        
	    }
    }   
}
</script>