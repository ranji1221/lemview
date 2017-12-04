<template>
 <div class="import_box">
    <div class="loading">
      <h3>正在导入...</h3>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
      <span>*请勿进行其他操作！您的任何操作都可能导致此次导入失败！</span>
    </div>
    <div class="loading_succse">
       <div class="loading_succse_icon">
         <i class="el-icon-circle-check"></i>
       </div>
       <div class="loading_succse_font">
          <h3>导入成功</h3>
          <span>您已成功恢复数据库!</span>
      </div>  
    </div>
 </div>
</template>

<script>
export default {
  
}
</script>
