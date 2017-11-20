<template>
	<div>
		<home-heard></home-heard>
		<home-content></home-content>
	</div>
</template>

<script>
	import HomeHeard from "./Home_card/Home_card.vue"
	import HomeContent from "./Home_card/Home_operable_card.vue"
	require("../../assets/style/index/Home.css")
	export default {
		components: {
			HomeContent,
			HomeHeard
		}
	}
</script>