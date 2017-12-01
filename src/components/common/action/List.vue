<template>
  <el-table ref="multipleTable" stripe tooltip-effect="dark" style="width: 100%" border :data="tabledata" @selection-change="handleSelectionChange" :default-sort = "{prop: 'id', order: 'descending'}">
   		<!--是否包含多选框-->
   		<template v-if="actions.selection">
        <el-table-column :resizable="resizable" align="center" type="selection" class-name="tableAction">
        </el-table-column>
      </template>
      <!--循环数据-->
	    <el-table-column v-for="item in items" :resizable="resizable"	 align="center" :key="item.id" :label="item.label" :sortable="item.sort" :prop="item.prop" :class-name="item.class">
	    </el-table-column>
      <!--是否包含查看操作-->
      <template v-if="actions.view">
        <el-table-column :resizable="resizable" align="center" label="查看" class-name="tableAction">
          <template slot-scope="scope">
            <i class="icon-eye-open" @click="handleView(scope.$index, scope.row)"></i>
          </template>
        </el-table-column>
      </template>
      <!--是否包含编辑操作-->
      <template v-if="actions.edit">
        <el-table-column :resizable="resizable" align="center" label="编辑" class-name="tableAction">
          <template slot-scope="scope">
            <i class="icon-pencil" @click="handleEdit(scope.$index, scope.row)"></i>
          </template>
        </el-table-column>
      </template>
      <!--是否包含删除操作-->
      <template v-if="actions.dele">
        <el-table-column :resizable="resizable" align="center" label="删除" class-name="tableAction">
          <template slot-scope="scope">
            <i class="icon-trash" @click="handleDele(scope.$index, scope.row)"></i>
          </template>
        </el-table-column>
      </template>
      <!--是否包含授权操作-->
      <template v-if="actions.ault">
        <el-table-column :resizable="resizable" align="center" label="授权" class-name="tableAction">
          <template slot-scope="scope">
            <i class="icon-key" @click="handleAult(scope.$index, scope.row)"></i>
          </template>
        </el-table-column>
      </template>
  </el-table>	
</template>
<script>
export default {
  props: ['items', 'tabledata','actions','list'],
  data() {
    return {
      multipleSelection: [],
      resizable:false,
    }
  },
  mounted: function() {
//  console.log(this.items)
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
    },
    handleView(index, row) {
//	    console.log(row.id);
	    this.$root.eventHub.$emit('openmodal',row.id,'view',this.list)
	    console.log('发射');
		},
		handleEdit(index, row) {
//		    console.log(index, row);
		    this.$root.eventHub.$emit('openmodal',row.id,'edit',this.list)
		},
	
		handleAult(index, row) {
		    this.$root.eventHub.$emit('openmodal',row.id,'ault',this.list)
		  },
	  handleDele(index, row) {
	    this.$confirm('此操作将永久删除该'+row.rowType+', 是否继续?', '提示', {
	      confirmButtonText: '确定',
	      cancelButtonText: '取消',
	      type: 'warning'
	    }).then(() => {
	    	this.$root.eventHub.$emit('delelistitem',row.id,this.list);
	    	
	      this.$message({
	        type: 'success',
	        message: '删除成功!'
	      });
	    }).catch(() => {
	      this.$message({
	        type: 'info',
	        message: '已取消删除'
	      });          
	    });
	  },
		  
	}
}

</script>
