<template>
	<div class="aultwrap">
		<el-form ref="form" class="role_form" :model="datalist" size="medium">
	        <template>
	            <p>青柠云后台管理系统</p>
	        </template>
	        <el-form-item v-for="(form,index) in datalist" :key="index" :label="form.label" :class="{'textarea':form.type=='remarks','tree':form.type=='tree'}" v-show="form.type!='options'">
	            <template v-if="form.type=='text'">
	                <el-input class="roleinput" v-model="form.text" :placeholder="form.default"></el-input>
	            </template>
	            <template v-else-if="form.type=='tree'">
	            	
	                <div class="treewrap">
				    	<header>
							<el-checkbox v-model="tree_select_toggle" @click="checkall()">选中全部</el-checkbox>
							<el-checkbox v-model="tree_open_toggle" @click="openall">展开全部</el-checkbox>
							<div class="prompt">
								温馨小提示：此
								<el-checkbox v-model="disabletrue" disabled></el-checkbox>				
								为您的上级权限您无权更改
							</div>
						</header>
						<div class="treezl">
							<el-tree
							    :data="data2"
							    show-checkbox
							    default-expand-all
						  	    node-key="id"
							    ref="tree"
							    :check-strictly="checkStrictly"
							    highlight-current
  								:default-checked-keys="defaultCheckedKeys"
							    :props="defaultProps">
							</el-tree>
						</div>
			    	
				    	<div class="prompt">
							温馨小提示：此
							<el-checkbox v-model="disabletrue" disabled></el-checkbox>				
							为您的上级权限您无权更改
						</div>		  
				  	</div>
	            </template>
	            
	            
		            
		  	
		  	
	        </el-form-item>	        
	        <div class="btns">
	            <el-button class="btn_succse btn" type="primary" @click="onSubmit">确认</el-button>
	            <el-button class="btn_cancel btn" @click="cancel" >取消</el-button>
	        </div>
	    </el-form> 
	</div>
</template>

<script>

//import LemonAult  from "@/components/common/action/Ault";
	
export default {

//  components:{ LemonAult},
    props: ['lg','datalist'],
    mounted: function() {

    },
    methods: {
    	 onSubmit() {
            console.log('submit!');
			this.$emit('btn_close')
            
        },
		cancel(){
			
			this.$emit('btn_close')       
       },
		
		
      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes());
      },
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 9,
          label: '三级 1-1-1'
        }]);
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([3]);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      },
      checkall:function(){
      	var allkeys;
      	if(this.tree_select_toggle){
      		allkeys=this.checkallkey;
      	}else{
      		allkeys=[];
      	}
      	console.log(allkeys)
      	this.$refs.tree.setCheckedKeys(allkeys);
      },
      openall(){
      	var allkeys;
      	if(this.tree_checkall_toggle){
      		allkeys=this.checkallkey;
      	}else{
      		allkeys=[];
      	}
      	console.log(allkeys)
      	this.$refs.tree.setCheckedKeys(allkeys);
      },
    },
//	computed:{
//	},
    data() {
      return {
      	defaultCheckedKeys:[1,2,3,4,5,6,8,15,16,17,18],
      	checkallkey:[1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19],
      	openallkey:[1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19],
      	checkStrictly:true,
      	tree_select_toggle:false,
      	tree_open_toggle:true,
      	disabletrue:true,
        data2: [
        	{
            id: 1,
            label: '插件管理',
	        disabled: true,
            children: [
            	{
	                id: 2,
	                label: '查看',
	                disabled: true,
            	},    
            	{
	                id: 3,
	                label: '添加',          
	                disabled: true,
           		},
	            {
	                id: 4,
	                label: '修改',          
	                disabled: true,
	            },
	            {
	                id: 5,
	                label: '删除',          
	                disabled: true,
	            },
	            {
	                id: 6,
	                label: '本地安装',          
	                disabled: true,
	            },
	            {
	                id: 7,
	                label: '禁用',          
	                disabled: true,
	            },
            ]
       		}, {
            id: 8,
            label: '权限管理',
            children: [
            	{
	                id: 9,
	                label: '规则管理',
	                children: [
	                {
	                	id: 10,
	                	label: '规则管理1',
	                },
	                {
	                	id: 11,
	                	label: '规则管理2',
	                },
	                {
	                	id: 12,
	                	label: '规则管理3',
	                },
	                {
	                	id: 13,
	                	label: '规则管理4',
	                },
               		],
            	},
            	{
	                id: 15,
	                label: '角色组',
	                children: [
		                {
		                	id: 16,
		                	label: '角色组1',
		                },
		                {
		                	id: 17,
		                	label: '角色组2',
		                },
		                {
		                	id: 18,
		                	label: '角色组3',
		                },
		                {
		                	id: 19,
		                	label: '角色组4',
		                },
            		],
        
       			},
            	]},
        	],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };


</script>

<style>
/*编辑内容*/
.el-dialog__body .el-form .btns{
	padding:0.2rem;
}
.lg .el-dialog__body  .el-form .btns{
	padding:0.66rem 0 0.56rem;
}
.el-dialog__body .el-form p{
	display: none;
}
.lg .el-dialog__body .el-form p{
	display: block;
}
.el-form .el-form-item:first-of-type{
	border-top-style:solid;
}
.lg .el-form .el-form-item:first-of-type{
	border-top-style:dashed;
}
.el-form .el-form-item.tree {
    height: 4rem;
}
.treewrap{
	border:1px solid #d8dce5;
	border-radius:0.06rem;
	height:100%;
	position: relative;
}
.treewrap header{
	height: 0.52rem;
	line-height: 0.52rem;
	background-color: rgba(222, 233, 247, 1);
	border-radius: 0.06rem 0.06rem 0 0;
}
.treewrap header label{
	line-height: 0.52rem;
	padding-left:0.3rem;
	margin:0!important;
}
.treewrap header label .el-checkbox__label{
	font-size:0.14rem;
}
.treewrap  header div.prompt label{
	padding:0;
}
.treewrap  header div.prompt{
	font-size:0.14rem;
	float:right;
	padding-right:0.1rem;
	display: none;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.treewrap>div.prompt{
	position: absolute;
	bottom:0;
	line-height: 0.52rem;
	padding-left:0.3rem;
	font-size:0.14rem;
	display: block;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	width:100%;
}
.lg .treewrap  header div.prompt{
	display: block;
}
.lg .treewrap>div.prompt{
	display: none;
}
@media (max-width:992px){
	.lg .treewrap  header div.prompt{
		display: none;
	}
	.lg .treewrap>div.prompt{
		display: block;
	}
}
.treewrap>div.prompt label{
	padding:0;
}
.treewrap .treezl{
	position:absolute;
	top:0.54rem;
	left:0;
	right:0;
	bottom:0.54rem;
	overflow:auto; 
	padding:0.1rem;
}
@media (min-width:992px){
	.lg .treewrap .treezl{
		bottom:0.1rem;
	}
}
.treewrap .el-checkbox__input.is-checked+.el-checkbox__label{
	color:rgb(51,51,51);
}
.treewrap .el-tree-node__label{
	font-size:0.14rem;
}
</style>