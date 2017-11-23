<template>
<div class="block tfoot">
	<div class="tfoot_btns" v-if='page.tfootbtns.btns'>
		<span v-if='page.tfootbtns.create' class='create'>
			<img src="../../../assets/images/sys/icons4.png" alt="" />
			新建
		</span>
		<span v-if='page.tfootbtns.refresh' class='refresh'>
			<img src="../../../assets/images/sys/icons1.png" alt="" />
			刷新
		</span>
		<span v-if='page.tfootbtns.delete' class='delete'>
			<img src="../../../assets/images/sys/icons2.png" alt="" />
			删除
		</span>
	</div>
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