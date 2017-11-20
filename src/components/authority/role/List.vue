<template>
  <div>
   <v-checkboxList :items="items"></v-checkboxList>
  </div>
</template>

<script>
import vCheckboxList from '../../common/CheckboxList.vue';

export default {
  components:{
   vCheckboxList
  },
  data() {
      return {
         items: [{
         id: 1,
         type : "selection"
       },
       {
         id: 2,
         type:" ",
         label : "编号"
       },
       {
         id: 3,
         type:" ",
         label : "姓名"
       }],
      }
  }
}
</script>