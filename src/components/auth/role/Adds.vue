<template>
  <lemon-form :forms="form"></lemon-form> 
</template>

<script>
import { LemonForm } from "@/components/common/action/form"

export default {
    components:[LemonForm],
      data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
}
</script>
