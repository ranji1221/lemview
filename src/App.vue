<template>
	<el-container>
		<el-header>
			<lemon-header></lemon-header>
		</el-header>
		<el-container class="autoheight">
			<lemon-sidebar></lemon-sidebar>
			<el-main>
				 <router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import LemonHeader from './components/common/header.vue'
	import LemonSidebar from './components/common/sidebar.vue'
	import LemonHome from './components/common/home.vue'

	export default {
		components: {
			LemonHeader,
			LemonSidebar,
			LemonHome
		},
	}
</script>

<style>
	.autoheight {
		/*position:absolute;
		top:60px;
		left:0;
		right:0;*/
		/*bottom:0;*/
		min-height: 100%;
	}
</style>