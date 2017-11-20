<template>
		<el-container>
			<el-header>
			<lemon-header></lemon-header>
			</el-header>
			<el-container class="autoheight">
				<lemon-sidebar></lemon-sidebar>
				<lemon-home></lemon-home>
			</el-container>
		</el-container>
</template>

<script>
import LemonHeader from './components/common/Header.vue'
import LemonSidebar from './components/common/Sidebar.vue'
import LemonHome from './components/common/Home.vue'

export default {
  components: {
    LemonHeader,LemonSidebar,LemonHome
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