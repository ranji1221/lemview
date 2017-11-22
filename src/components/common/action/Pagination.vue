<template>
<div class="block">
    <el-pagination
      :current-page.sync="currentPage"
      :page-size="page.size"
      layout="prev, pager, next, jumper"
      :total="page.total">
    </el-pagination>
  </div>
</template>
<script>
import "@/assets/style/common/Pagination.css"
  export default {
    props: ['page'],
    methods: {
     
    },
    data() {
      return {
        currentPage: 1,
      };
    }
  }
</script>