<template>
  <el-table
    ref="multipleTable"
    stripe
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column v-for="item in items" :key="item.id" :type="item.type" :width="item.width" :label="item.label">
    </el-table-column>

</el-table>
</template>
<script>
  export default {
    props: ['items'],
    data() {
      return {
     
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      formatter(row, column) {
        return row.address;
      }
    }
  }
</script>
