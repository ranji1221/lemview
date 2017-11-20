<template>
 <el-main>
 	 	<home-heard></home-heard>
    <home-content></home-content>
 </el-main>
</template>

<script>
import HomeContent from "./Home_card/Home_card.vue"
import HomeHeard from "./Home_card/Home_operable_card.vue"
require("../../assets/style/index/Home.css")
export default {
  components: {
    HomeContent, HomeHeard
  }
}
</script>

