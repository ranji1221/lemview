<template>
  <el-table ref="multipleTable" stripe tooltip-effect="dark" style="width: 100%" border :data="tabledata" @selection-change="handleSelectionChange">
    <template v-for="item in items">
      <template v-if="item.icon">
        <el-table-column align="center" :key="item.id" :type="item.type" :label="item.label" :sortable="item.sort" :prop="item.prop" :class-name="item.class">
          <template slot-scope="scope">
            <i :class="item.icon"></i>
          </template>
        </el-table-column>
      </template>
      <template v-else>
        <el-table-column align="center" :key="item.id" :type="item.type" :label="item.label" :sortable="item.sort" :prop="item.prop" :class-name="item.class">
        </el-table-column>
      </template>
    </template>
  </el-table>
</template>
<script>
export default {
  props: ['items', 'tabledata'],
  data() {
    return {
      multipleSelection: [],
    }
  },
  mounted: function() {
    console.log(this.items)
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
