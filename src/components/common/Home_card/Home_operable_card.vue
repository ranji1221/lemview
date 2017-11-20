<template>
	<div id="showList">
		<operable-card :card="card" v-for="card in cards" :key="card.card_id"></operable-card>
	</div>
</template>
<style>
	#showList{
		margin:0 15px;
		overflow: hidden;
	}
	#showList .cardwrap{
		padding:0 15px;
	}
</style>
<script>
//	require("../../../assets/default/style/index/Home_operable_card.css");

import operableCard from './operable_card.vue'


export default {
data() {
      return {
      	cards:[
	        {
	        	title:'今日任务',
	        	circleColor:'#ed0e68',
	        	more:true,
	        	slidetoggle:true,
	        	remove:false,
	        	card_id:'card1',
	        	cardType:'release',
	  			classObject:{
	  				'el-col-lg-8':true,
	  				'el-col-lg-12':false,
	  				'el-col-lg-16':false,
	  			},
	        },
	        {
	        	title:'活动',
	        	circleColor:'#37f889',
	        	more:false,
	        	slidetoggle:true,
	        	remove:false,
	        	card_id:'card2',
	        	cardType:'activity',
	  			classObject:{
	  				'el-col-lg-8':true,
	  				'el-col-lg-12':false,
	  				'el-col-lg-16':false,
	  			},
	        },
	        {
	        	title:'天气小贴士',
	        	circleColor:'#378ef8',
	        	more:true,
	        	slidetoggle:true,
	        	remove:false,
	        	card_id:'card3',
	        	cardType:'weather',
	  			classObject:{
	  				'el-col-lg-8':true,
	  				'el-col-lg-12':false,
	  				'el-col-lg-16':false,
	  			},
	        },
			{
	        	title:'人力管理',
	        	circleColor:'#c013da',
	        	more:true,
	        	slidetoggle:true,
	        	remove:false,
	        	card_id:'card4',
	        	cardType:'administration',
	 			classObject:{
	  				'el-col-lg-8':true,
	  				'el-col-lg-12':false,
	  				'el-col-lg-16':false,
	  			},
	        },
	        {
	        	title:'经济报表',
	        	circleColor:'#ed0e68',
	        	more:false,
	        	slidetoggle:true,
	        	remove:false,
	        	card_id:'card5',
	        	cardType:'chart',
	 			classObject:{
	  				'el-col-lg-8':false,
	  				'el-col-lg-12':false,
	  				'el-col-lg-16':true,
	  			},
	        },
	        {
	        	title:'快速草稿',
	        	circleColor:'#f837e8',
	        	more:false,
	        	slidetoggle:true,
	        	remove:false,
	        	card_id:'card6',
	        	cardType:'draft',
				classObject:{
	  				'el-col-lg-8':true,
	  				'el-col-lg-12':false,
	  				'el-col-lg-16':false,
	  			},
	        },
      	]

        
      };
    },
  components: {
    operableCard
  }
}
</script>

