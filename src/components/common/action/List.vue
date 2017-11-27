<template>
	<div>
		

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

<!-- Table -->
<el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>



<!-- Form -->
<el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

<el-dialog title="收货地址" :visible.sync="dialogFormVisible" :modal="false" :lock-scroll="false" :close-on-click-modal="false">
  <el-form :model="form">
    <el-form-item label="活动名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>


	
	</div>
</template>
<script>
export default {
  props: ['items', 'tabledata','actions'],
  data() {
    return {
    	true:true,
    	false:false,
    	 gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
     
      multipleSelection: [],
      resizable:false,
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
    },
    handleView(index, row) {
	    console.log(index, row);
	    var dialog=`<el-dialog title="收货地址" :visible.sync="dialogTableVisible" :modal="false" :lock-scroll="false" :close-on-click-modal="false" >
					  <el-table :data="gridData">
					    <el-table-column property="date" label="日期" width="150"></el-table-column>
					    <el-table-column property="name" label="姓名" width="200"></el-table-column>
					    <el-table-column property="address" label="地址"></el-table-column>
					  </el-table>
					</el-dialog>`;
	    $('.listpagewrap').append(dialog)
	    console.log(('.listpagewrap') )
	},
	handleEdit(index, row) {
	    console.log(index, row);
<<<<<<< HEAD
	},
	handleDele(index, row) {
	    console.log(index, row);
	},
	handleAult(index, row) {
=======
	  },
	  handleDele(index, row) {
	    this.$confirm('此操作将永久删除该'+row.rowType+', 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
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
	  handleAult(index, row) {
>>>>>>> e2016cd935031b4471bb3584408f66ef57ff72cd
	    console.log(index, row);
	},
  }
}

</script>
