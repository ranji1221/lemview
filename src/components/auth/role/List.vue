<template>
    <div class='listpagewrap'>
      <!--面包屑-->
      <lemon-breadcrumb :breadcrumb="breadcrumb"></lemon-breadcrumb>
      <!--alert-->
      <lemon-prompt :alerts="alerts"></lemon-prompt>
      <!--表格-->
      <lemon-list class="rolelist list" :tabledata="tabledatas"  :items="items" :actions="actions" v-on:openmodal="openmodal" > 
      </lemon-list>
      <!--分页-->
      <lemon-pagination :page="page"></lemon-pagination>
      <!--查看模态框-->
      <template v-if="actions.view">
      	<lemon-modal v-for="(item, index) in viewdata" :item="item" :key="index" :ref="item.id" v-on:close="close_modal" v-on:scaling="scaling_modal" v-on:hid="hid_modal" title="查看角色" modal_type="view"></lemon-modal>      	
      </template>
      <!--编辑模态框-->
      <template v-if="actions.edit">
      	<lemon-modal v-for="(item, index) in editdata" :item="item" :key="index" :ref="item.id" v-on:close="close_modal" v-on:scaling="scaling_modal" v-on:hid="hid_modal" title="编辑角色" modal_type="edit"></lemon-modal>      	
      </template>
      <!--授权模态框-->
      <template v-if="actions.ault">
      	<lemon-modal v-for="(item, index) in aultdata" :item="item" :key="index" :ref="item.id" v-on:close="close_modal" v-on:scaling="scaling_modal" v-on:hid="hid_modal" title="角色授权" modal_type="ault"></lemon-modal>      	
      </template>
      <!--任务-->
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
    openmodal:function(id,type) {
    	console.log(id)
    	console.log(type)
    	this.mask=true;
    	//console.log(id)
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
//先查询任务中是否有该id,没有的话新建
		var mession=this.messions.filter(function (item) {
		  	return item.id===id&&item.type===type;
		})
		if(!mession.length){
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
//				  	datalist:{
//			          
//			        },
					datalist:'编辑数据表',
			        open:true,
			        show:true,
			        id:id,
			        lg:false,
			    };
				this.editdata.push(newdata);
			break; 
			case "ault": 
				var newdata={
//				  	datalist:{
//			          
//			        },
					datalist:'授权数据表',
			        open:true,
			        show:true,
			        id:id,
			        lg:false,
			    };
				this.aultdata.push(newdata);
			break; 
			} 
			
		}else{
//调用messions中的
			this.pop_mession(id,type);
		}
    },
    
    close_modal:function(id,type){
//  	过滤掉对应id的查看数据实现删除效果
    	this.mask=false;
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
    scaling_modal:function(lg){
//  	放大后
    	if(lg){
    		this.mask=false;
    	}else{
    		this.mask=true;    		
    	}
    },
//  隐藏模态框时像任务messions数据组插入数据新建任务
    hid_modal:function(id,type){
    	this.mask=false; 
    	var icon;
    	var title;
    	switch(type) 
			{ 
			case "view": 
    			icon="icon-eye-open";
				title="查看角色";
			break;
			case "edit": 
				icon="icon-pencil";
				title="编辑角色";
			break; 
			case "ault": 
				icon="icon-key";
				title="角色授权";
			break; 
			} 
		var newmession={   		
	  		icon:icon,
	  		title:title,
	  		id:id,
	  		type:type,
    	};
		this.messions.unshift(newmession);
	    	
    },
    
    
    
//  通过messions中的item点击时的id,删除id的mession数据并打开查看数据组中对应id的显示
    pop_mession:function(id,type){
		console.log(this.messions)
    	
		this.messions=this.messions.filter(function (item) {
		  	return !(item.id==id&&item.type==type);
		});
		console.log(this.messions)
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
		this.messions=this.messions.filter(function (item) {
		  	return !(item.id==id&&item.type==type);
		});
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