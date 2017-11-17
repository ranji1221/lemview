<template>
  <div id="app">
    <el-container>
    	<el-header>顶部</el-header>
    	<el-aside>侧边</el-aside>
    	<el-main>内容区</el-main>
    	<el-footer>底部</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
