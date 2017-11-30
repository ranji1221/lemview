<template>
    <div class='listpagewrap'>
      <!--面包屑-->
      <lemon-breadcrumb :breadcrumb="breadcrumb"></lemon-breadcrumb>
      <!--alert-->
      <lemon-prompt :alerts="alerts"></lemon-prompt>
      <!--表格-->
      <lemon-list class="rolelist list" :tabledata="tabledatas"  :items="items" :actions="actions"> 
      </lemon-list>
      <!--分页-->
      <lemon-pagination :page="page"></lemon-pagination>
      <!--查看模态框-->
      <template v-if="actions.view">
      	<lemon-modal v-for="(item, index) in viewdata" :item="item" :key="index" :ref="item.id" title="查看角色" modal_type="view"></lemon-modal>      	
      </template>
      <!--编辑模态框-->
      <template v-if="actions.edit">
      	<lemon-modal v-for="(item, index) in editdata" :item="item" :key="index" :ref="item.id" title="编辑角色" modal_type="edit"></lemon-modal>      	
      </template>
      <!--授权模态框-->
      <template v-if="actions.ault">
      	<lemon-modal v-for="(item, index) in aultdata" :item="item" :key="index" :ref="item.id" title="角色授权" modal_type="ault"></lemon-modal>      	
      </template>
      <div class="mask" v-if="mask"></div>
    </div>
</template>

<style>
	
</style>

<script>
import LemonList from '@/components/common/action/List.vue';
import LemonPrompt from '@/components/common/prompt/Prompt.vue';
import LemonBreadcrumb from '@/components/common/action/Breadcrumb.vue';
import LemonPagination from '@/components/common/action/Pagination.vue';
import LemonModal from '@/components/common/action/Modal.vue';
import "@/assets/style/common/list.css"

export default {
  components: {
    LemonList,LemonPrompt,LemonPagination,LemonBreadcrumb,LemonModal
  },
  created(){
//	监听列表点击打开模态框事件(先经过了mission的过滤)
  	this.$root.eventHub.$on("createmodal",function(id,type){
//		this.mask=true;
		this.createmodal(id,type);
  	}.bind(this));
//	监听隐藏模态框事件
  	this.$root.eventHub.$on("hidden_modal",function(id,type){
		this.mask=false; 
  	}.bind(this));
//	监听缩放模态框事件
  	this.$root.eventHub.$on("scaling_modal",function(lg){
  		if(lg){
    		this.mask=false;
    	}else{
    		this.mask=true;    		
    	}
  	}.bind(this));
//	监听关闭模态框事件
  	this.$root.eventHub.$on("close_modal",function(id,type){
  		this.mask=false;
  		this.close_modal(id,type)
  	}.bind(this));
//	监听mession弹出模态框事件
  	this.$root.eventHub.$on("pop_mession",function(id,type){
		this.pop_mession(id,type)
  	}.bind(this));
//	监听mession删除模态框事件
  	this.$root.eventHub.$on("del_mession",function(id,type){
//		this.del_mession(id,type)
  	}.bind(this));
  },
  methods: {
//	获取到点击查看的列表id并显示对应模态框
    createmodal:function(id,type) {
    	this.mask=true;
//  	这是一段关于$refs的尝试
//		var item=this.$refs[id][0].item;
//  	var show=item.show;//show这个字段待定
//  	if( !show){
//  		item.show=true;
//  		console.log("show")
//  	}else{
//  		item.open=true;		
//  		console.log("open")
//  	}
//获取一组查看模态框数据并插入到查看数组中,以实现新建模态框的效果
		switch(type) 
			{ 
			case "view": 
				var newdata={
				  	datalist:{
			          '角色名称': 'UI设计师'+id,		    
			          '父级角色': '首页',		    
			          '依赖角色': '员工',		       
			          '最大限制用户数': '6',		   
			          '备注消息': 'UI设计师为研发部门付出了艰辛的努力',
			        },
			        open:true,
			        show:true,
			        id:id,
			        lg:false,
			    };
				this.viewdata.push(newdata);
			break; 
			case "edit": 
				var newdata={
				  	datalist:{
			          name: {
			            label:"角色名称",
			            text:"",
			            type:"text",
			            default:"请输入角色名称"
			          },
			          fath:{
			            label:"父级角色",
			            text:"",
			            type:"select",
			            selected:"选择父级角色",
			            childrens:[
			              {
			                label:"角色列表",
			                value:1
			              },
			              {
			                label:"首页",
			                value:2
			              }
			            ]
			          },
			          rely:{
			            label:"依赖角色",
			            text:"",
			            type:"select",
			            selected:"选择依赖角色",
			            childrens:[
			              {
			                label:"依赖角色列表",
			                value:"1"
			              },
			              {
			                label:"首页",
			                value:"2"
			              }
			            ]
			          },
			          num:{
			            label:"最大限制用户数",
			            type:"number",
			            text:1,
			            min:1,
			            max:10
			          },
			          remarks:{
			            label:"备注",
			            text:"",
			            type:"remarks",
			            default:"请输入备注"
			          }
			       },
			        open:true,
			        show:true,
			        id:id,
			        lg:false,
			    };
				this.editdata.push(newdata);
			break; 
			case "ault": 
				var newdata={
				  	datalist:{
			          name: {
			            label:"角色名称",
			            text:"",
			            type:"text",
			            default:"请输入角色名称"
			          },			       			          
			          ault:{
			            label:"角色授权",
//			            text:"",
			            type:"tree",
//			            default:"请输入备注"
			          }
			       },
			       tree:{
			//	      	defaultCheckedKeys:[1,2,3,4,5,6,8,15,16,17,18],//默认选中的key id
				      	checkStrictly:true,//分割了上下父子选中关系
				        data: [
				        	{
				            id: 1,
				            label: '插件管理',
					        disabled: true,
					        checked:true,
				            children: [
				            	{
					                id: 2,
					                label: '查看',
					                disabled: true,
					        		checked:true,
				            	},    
				            	{
					                id: 3,
					                label: '添加',          
					                disabled: true,
					       		 	checked:true,
				           		},
					            {
					                id: 4,
					                label: '修改',          
					                disabled: true,
					        		checked:true,
					            },
					            {
					                id: 5,
					                label: '删除',          
					                disabled: true,
					        		checked:true,
					            },
					            {
					                id: 6,
					                label: '本地安装',          
					                disabled: true,
					        		checked:true,
					            },
					            {
					                id: 7,
					                label: '禁用',          
					                disabled: true,
					        		checked:false,
					            },
				            ]
				       		}, {
				            id: 8,
				            label: '权限管理',
					        checked:true,
				            children: [
				            	{
					                id: 9,
					                label: '规则管理',
					        		checked:false,
					                children: [
					                {
					                	id: 10,
					                	label: '规则管理1',
					        			checked:false,
					                },
					                {
					                	id: 11,
					                	label: '规则管理2',
					        			checked:false,
					                },
					                {
					                	id: 12,
					                	label: '规则管理3',
					        			checked:false,
					                },
					                {
					                	id: 13,
					                	label: '规则管理4',
					        			checked:false,
					                },
				               		],
				            	},
				            	{
					                id: 15,
					                label: '角色组',
					        		checked:true,
					                children: [
						                {
						                	id: 16,
						                	label: '角色组1',
					        				checked:true,
						                },
						                {
						                	id: 17,
						                	label: '角色组2',
					        				checked:true,
						                },
						                {
						                	id: 18,
						                	label: '角色组3',
					        				checked:true,
						                },
						                {
						                	id: 19,
						                	label: '角色组4',
					        				checked:true,
						                },
				            		],
				        
				       			},
				            	]},
				        	],
				        defaultProps: {
				            children: 'children',
				            label: 'label'
				        }
				      },
			        open:true,
			        show:true,
			        id:id,
			        lg:false,
			   };
				this.aultdata.push(newdata);
			break; 
			} 		
    },    
    close_modal:function(id,type){
//  	过滤掉对应id的查看数据实现删除效果
    	
    	switch(type) 
			{ 
			case "view": 
				this.viewdata=this.viewdata.filter(function (item) {
				  	return item.id!==id;
				})
			break; 
			case "edit": 
				this.editdata=this.editdata.filter(function (item) {
				  	return item.id!==id;
				})
			break; 
			case "ault": 
				this.aultdata=this.aultdata.filter(function (item) {
				  	return item.id!==id;
				})
			break; 
			} 
    	
    },    
//  通过messions中的item点击时的id,删除id的mession数据并打开查看数据组中对应id的显示
    pop_mession:function(id,type){
		switch(type) 
			{ 
			case "view": 
    			var item=this.viewdata.find(function(item){
    				return item.id==id;
    			});
			break; 
			case "edit": 
				var item=this.editdata.find(function(item){
    				return item.id==id;
    			});
			break; 
			case "ault": 
				var item=this.aultdata.find(function(item){
    				return item.id==id;
    			});
			break; 
			} 
//  	var item=this.$refs[id][0].item;
    	if(item.lg){
    		this.mask=false; 		  		
    	}else{
    		this.mask=true;
    	}
    	item.show=true;
    },
//  通过messions中的item点击删除时的id,删除id的mession数据删除查看数据组中对应id的显示
    del_mession:function(id,type){
		
		switch(type) 
			{ 
			case "view": 
    			this.viewdata=this.viewdata.filter(function (item) {
				  	return item.id!==id;
				});
			break; 
			case "edit": 
				this.editdata=this.editdata.filter(function (item) {
				  	return item.id!==id;
				});
			break; 
			case "ault": 
				this.aultdata=this.aultdata.filter(function (item) {
				  	return item.id!==id;
				});
			break; 
			} 
    	
    },
  },
  data() {
    return {
   	  mask:false,
// 	  modaldata:{
// 	  	viewdata:[],//查看数据组
//	    editdata:[],//编辑数据组  	  		
// 	  },
	  viewdata:[],//查看数据组
	  editdata:[],//编辑数据组
	  aultdata:[],//编辑数据组
	  messions:[],//任务数据组
//	  messions:{
//	  	view:[],
//	  	edit:[],
//	  	ault:[],
//	  },//任务数据组
//	  mission_show:false,
      breadcrumb:{
      	search:true,    	
      },
//    分页数据
      page: {
        size: 10,
        total: 19,
        tfootbtns:{
        	btns:true,//是否添加按钮组
        	create:true,//新建按钮
        	refresh:true,//刷新按钮
        	delete:true, //删除按钮      	
        }
      },
//    弹窗数据
      alerts: [{
        title: '温馨提示：此页面展示角色列表，您可以对角色查看、编辑、删除、授权及批量删除和新建的操作。单击右方x号，可以关闭此条提示语!',
        type: 'info'
      }],
//    表格数据
      tabledatas:[
        {
          id:'01',
          name:"首页2",
          fath:"首页14",
          rowType: '角色'
        },
        {
          id:'02',
          name:"首页5",
          fath:"首页1",
          rowType: '角色'
        },
        {
          id:'03',
          name:"首页1",
          fath:"首页177",
          rowType: '角色'
        },
        {
          id:'04',
          name:"首页8",
          fath:"首页19",
          rowType: '角色'
        }
      ],
      //表头项
      items: [
      {
        id: 1,
        prop:'id',
        label: "编号",
        sort:true

      },
      {
        id: 2,
        prop:'name',
        label: "名称",
        sort:true,
      },
      {
        id: 3,
        prop:'fath',
        label:"父菜单",
        sort:true,
      },
      ],
      actions:{
      	selection:true,
      	view:true,
      	edit:true,
      	dele:true,
      	ault:true,
      }
    }
  }
}
</script>