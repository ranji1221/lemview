<template>
    <div class="option_title">
        <div class="option_title_name">
            <p>{{Route}}</p>
        </div>
        <div class="option_title_close">
            <img src="~IMG/sys/modal1.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    computed:{
        Route:function(){
            const route = this.$route.name.split("/")
            return route[route.length-1]
        }
    }
}
</script>
