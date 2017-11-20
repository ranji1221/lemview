<template>
  <div id="app">
    <v-head></v-head>
    <el-container class="autoheight">
      <v-sidebar></v-sidebar>
      <v-home></v-home>
    </el-container>
  </div>
</template>

<script>
import vHead from './common/Header.vue'
import vSidebar from './common/Sidebar.vue'
import vHome from './common/Home.vue'

export default {
  components: {
    vHead,vSidebar,vHome
  }
}
</script>

<style>
	.autoheight{
		/*position:absolute;
		top:60px;
		left:0;
		right:0;*/
		/*bottom:0;*/
		min-height: 100%;
	}
	
</style>