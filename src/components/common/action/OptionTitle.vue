<template>
    <div class="option_title">
        <div class="option_title_name">
            <p>{{Route}}</p>
        </div>
        <div class="option_title_close" v-if="actions.close">
            <img src="~IMG/sys/modal1.png" alt="">
        </div>
        <div class="option_title_scaling" v-if="actions.scaling">
            <img src="~IMG/sys/modal3.png" alt="">
        </div>
        <div class="option_title_hid" v-if="actions.hid">
            <img src="~IMG/sys/modal2.png" alt="">
        </div>
    </div>
</template>
<script>
import "@/assets/style/common/Option_title.css"
export default {
	props:['actions'],
	data() {
	    return {
	      
	    }
	},
    computed:{
        Route:function(){
            const route = this.$route.name.split("/")
            return route[route.length-1]
        }
    },
    mounted:function(){
    	console.log(this.actions)
    }
    
}
</script>
