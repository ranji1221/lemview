<template>
    <div class='listpagewrap'>
      <lemon-breadcrumb :breadcrumb="breadcrumb"></lemon-breadcrumb>
      <lemon-prompt :alerts="alerts"></lemon-prompt>
      <lemon-list class="rolelist list" :tabledata="tabledatas"  :items="items" :actions="actions" v-on:viewitemid="openview"> 
      </lemon-list>
      <lemon-pagination :page="page"></lemon-pagination>
      <template v-if="actions.view">
      	<lemon-modal v-for="(item, index) in viewdata" :view="item" :key="index" :ref="item.id" v-on:close="close_modal" v-on:scaling="scaling_modal" v-on:hid="hid_modal" title="查看角色"></lemon-modal>      	
      </template>
      <template >
      	<lemon-mession v-show="mission_show" :messions="messions" v-on:pop_mession="pop_mession" v-on:del_mession="del_mession"></lemon-mession>
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
import LemonMession from '@/components/common/action/Mession.vue';
import "@/assets/style/common/list.css"

export default {
  components: {
    LemonList,LemonPrompt,LemonPagination,LemonBreadcrumb,LemonModal,LemonMession
  },
  methods: {
//	获取到点击查看的列表id并显示对应模态框
    openview:function(id) {
    	this.mask=true;
    	//console.log(id)
//  	这是一段关于$refs的尝试
//		var item=this.$refs[id][0].view;
//  	var show=item.show;//show这个字段待定
//  	if( !show){
//  		item.show=true;
//  		console.log("show")
//  	}else{
//  		item.open=true;		
//  		console.log("open")
//  	}
//先查询任务中是否有该id,没有的话新建
		var mession=this.messions.filter(function (item) {
		  	return item.id===id;
		})
		if(!mession.length){
//获取一组查看模态框数据并插入到查看数组中,以实现新建模态框的效果
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
			        lg:false,
			   };
			this.viewdata.push(newdata);
		}else{
//调用messions中的
			this.pop_mession(id);
		}
    },
    close_modal:function(id){
//  	过滤掉对应id的查看数据实现删除效果
    	this.mask=false;
    	this.viewdata=this.viewdata.filter(function (item) {
		  	return item.id!==id;
		})
    },
    scaling_modal:function(lg){
//  	放大后
    	if(lg){
//  		this.lg=true;
    		this.mask=false;
    	}else{
//  		this.lg=false;
    		this.mask=true;    		
    	}
    },
//  隐藏模态框时像任务messions数据组插入数据新建任务
    hid_modal:function(id){
    	this.mask=false; 		
    	var newmession={   		
		  		icon:"icon-eye-open ",
		  		title:"查看用户",
		  		id:id
	    	};
		this.messions.unshift(newmession);
	    	
    },
//  通过messions中的item点击时的id,删除id的mession数据并打开查看数据组中对应id的显示
    pop_mession:function(id){
		this.messions=this.messions.filter(function (item) {
		  	return item.id!==id;
		})
    	var item=this.$refs[id][0].view;
    	if(item.lg){
    		this.mask=false; 		  		
    	}else{
    		this.mask=true;
    	}
    	item.show=true;
    },
//  通过messions中的item点击删除时的id,删除id的mession数据删除查看数据组中对应id的显示
    del_mession:function(id){
		this.messions=this.messions.filter(function (item) {
		  	return item.id!==id;
		})
    	this.viewdata=this.viewdata.filter(function (item) {
		  	return item.id!==id;
		})
    },
//  mask:function(){
//  	
//  },

  },
computed: {
//	控制显示任务框
	mission_show:function(){
	  if(this.messions.length==0){
	  	return false;
	  }else{
	  	return true;
	  }
	}
},
  data() {
    return {
   	  mask:false,
	  viewdata:[],//查看数据组
	  messions:[],//任务数据组
//	  mission_show:false,
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