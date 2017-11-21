<template>
    <ul>
    <li v-for="alert in alerts" :key="alert.id">
        <el-alert :title="alert.title" :type="alert.type" show-icon>
        </el-alert>
    </li>
    </ul>
</template>
<script>
     export default {
         props: ['alerts'],
     }
</script>