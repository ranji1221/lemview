<template>
  <div class="ajax_dom">
    <home-heard></home-heard>
    <home-content></home-content>
  </div>
</template>

<script>
import HomeContent from "./Home_content/Home_content.vue"
import HomeHeard from "./Home_heard/Home_heard.vue"
require("../../../assets/default/style/index/Home.css")
export default {
  components: {
    HomeContent, HomeHeard
  }
}
</script>

