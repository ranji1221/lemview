<template>
    <div class='listpagewrap'>
      <lemon-breadcrumb :breadcrumb="breadcrumb"></lemon-breadcrumb>
      <lemon-prompt :alerts="alerts"></lemon-prompt>
      <lemon-list class="rolelist list" :tabledata="tabledatas"  :items="items" :actions="actions" v-on:viewitemid="openview"> 
      </lemon-list>
      <lemon-pagination :page="page"></lemon-pagination>
      <template v-if="actions.view">
      	<lemon-modal v-for="(item, index) in viewdata" :view="item" :key="index" :ref="item.id" v-on:close="close_modal" v-on:hid="hid_modal"></lemon-modal>      	
      </template>
      <!--<button @click="showview(222)">我是个按钮</button>-->
    </div>
</template>

<style>
	.listpagewrap{
		position:relative;
		height: 100%;
	}
	
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
  methods: {
//	获取到点击查看的列表id并显示对应模态框
    openview:function(id) {
    	//console.log(id)
//		var item=this.$refs[id][0].view;
//  	var show=item.show;//show这个字段待定
//  	if( !show){
//  		item.show=true;
//  		console.log("show")
//  	}else{
//  		item.open=true;		
//  		console.log("open")
//  	}
		var newdata={
			  	viewitem:{
		          '角色名称': 'UI设计师'+id,		    
		          '父级角色': '首页',		    
		          '依赖角色': '员工',		       
		          '最大限制用户数': '6',		   
		          '备注消息': 'UI设计师为研发部门付出了艰辛的努力',
		        },
		        open:true,
		        show:true,
		        id:id,
		   };
		this.viewdata.push(newdata);
		
    },
    close_modal:function(id){
    	console.log(id)
    	this.viewdata=this.viewdata.filter(function (item) {
		  	return item.id!==id;
		})
    },
    hid_modal:function(id){
    	
    },
  },
  data() {
    return {
//    查看模态框临时模拟数据
//	    viewdata:[
//		    {
//			  	viewitem:{
//		          '角色名称': 'UI设计师111',		    
//		          '父级角色': '首页',		    
//		          '依赖角色': '员工',		       
//		          '最大限制用户数': '6',		   
//		          '备注消息': 'UI设计师为研发部门付出了艰辛的努力',
//		        },
//		        open:true,
//		        show:true,
//		        id:"01",
//		    },
//		    
//		    {
//			  	viewitem:{
//		          '角色名称': 'UI设计师222',		    
//		          '父级角色': '首页',		    
//		          '依赖角色': '员工',		       
//		          '最大限制用户数': '6',		   
//		          '备注消息': 'UI设计师为研发部门付出了艰辛的努力',
//		        },
//		        open:false,
//		        show:true,
//		        id:"02",
//		    },
//		    {
//			  	viewitem:{
//		          '角色名称': 'UI设计师333',		    
//		          '父级角色': '首页',		    
//		          '依赖角色': '员工',		       
//		          '最大限制用户数': '6',		   
//		          '备注消息': 'UI设计师为研发部门付出了艰辛的努力',
//		        },
//		        open:false,
//		        show:true,
//		        id:"03",
//		    },
//		    {
//			  	viewitem:{
//		          '角色名称': 'UI设计师444',		    
//		          '父级角色': '首页',		    
//		          '依赖角色': '员工',		       
//		          '最大限制用户数': '6',		   
//		          '备注消息': 'UI设计师为研发部门付出了艰辛的努力',
//		        },
//		        open:false,
//		        show:true,
//		        id:"04",
//		    },
////		    {
////			  	viewitem: [
////			  	{
////		          key: '角色名称',
////		          value: 'UI设计师',
////		        }, {
////		          key: '父级角色',
////		          value: '首页',
////		        }, {
////		          key: '依赖角色',
////		          value: '员工',
////		        }, {
////		          key: '最大限制用户数',
////		          value: '6',
////		        }, {
////		          key: '备注消息',
////		          value: 'UI设计师为研发部门付出了艰辛的努力',
////		        }],
////		        open:false,
////		        show:true,
////		        id:"04",
////		    }
//	    ],
	  viewdata:[],
	  
      breadcrumb:{
      	search:true,
      	
      },
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
      alerts: [{
        title: '温馨提示：此页面展示角色列表，您可以对角色查看、编辑、删除、授权及批量删除和新建的操作。单击右方x号，可以关闭此条提示语!',
        type: 'info'
      }],
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