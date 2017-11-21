<template>
  <el-table
    ref="multipleTable"
    stripe
    tooltip-effect="dark"
    style="width: 100%"
    border
    :data="tabledata"
     slot-scope="scope"
    @selection-change="handleSelectionChange" >
    <el-table-column align="center" v-for="item in items"  :key="item.id" :type="item.type"  :label="item.label" :sortable="item.sort"  :prop="item.prop"  > 
        <div v-if="item.icon">
        <template slot-scope="scope" >
          {{item.icon}}
        <i :class="item.icon"></i>
        </template>
        </div>
        <div v-else>
          {{item.name}}
        </div>
    </el-table-column>
    
</el-table>
</template>
<script>
  export default {
    props: ['items','tabledata'],
    data() {
      return {
        multipleSelection: [],
      }
    },
    mounted:function(){
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
