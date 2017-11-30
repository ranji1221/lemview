<template>
	<!--<div class="mission" v-show="mission_show">-->
	<div class="mission">
		<h3>任务&nbsp;&nbsp;&nbsp;————————</h3>
		<ol>
			<li v-for="(item,index) in messions" :key="index" @click="pop_mession_item(item.id,item.type)">
				<span class="icon-slidenav" :class="item.icon"></span>
				<p>{{item.title}}{{item.id}}</p>
				<span class="iconfont icon-chuyidong1 del" @click.stop="del_mession_item(item.id,item.type)"></span>
			</li>
			<li v-if="mission_empty">
				<span></span>
				<p>(暂无)</p>
				<span></span>
			</li>
		</ol>
	</div>
</template>

<script>
export default {
//  props: ['mission_show'],
    data() {
        return {
	 		messions:[],//任务数据组
        }
    },
    computed: {
//	控制显示任务框
//		mission_show:function(){
//		    if(this.messions.length==0){
//		  		return false;
//		    }else{
//		  		return true;
//		    }
//		},
		mission_empty:function(){
		    if(this.messions.length==0){
		    	return true;
		    }else{
		  		return false;
		    }
		}
	},
    created(){
    //	监听列表点击打开模态框事件
	  	this.$root.eventHub.$on("openmodal",function(id,type){
			//先查询任务中是否有该id,没有的话新建
			var mession=this.messions.filter(function (item) {
			  	return item.id===id&&item.type===type;
			})
			console.log(mession)
			if(!mession.length){				
				this.$root.eventHub.$emit('createmodal',id,type);
			}else{
				this.pop_mession_item(id,type);
			}
	  	}.bind(this));
	//	监听隐藏模态框事件
	  	this.$root.eventHub.$on("hidden_modal",function(id,type){
	  		this.hid_modal(id,type)
	  	}.bind(this));
	
	
	},
    methods:{
//  	传递从mession弹出模态框的id与type
    	pop_mession_item:function(id,type){
    		this.messions=this.messions.filter(function (item) {
			  	return !(item.id==id&&item.type==type);
			});
			this.$root.eventHub.$emit('pop_mession',id,type);
    	},
//  	传递从mession删除模态框的id与type
    	del_mession_item:function(id,type){
    		this.messions=this.messions.filter(function (item) {
			  	return !(item.id==id&&item.type==type);
			});
			this.$root.eventHub.$emit('del_mession',id,type);
    	},
    	
    	//  隐藏模态框时像任务messions数据组插入数据新建任务
	    hid_modal:function(id,type){
	    	
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
			this.$emit("show_messions")
	    },
    }
}
</script>

<style>
/*用在列表时的样式,舍不得删万一以后用到再打开....*/
/*.mission{
	position: absolute;
	left:0.1rem;
	bottom:0.32rem;
	width: 2.32rem;
	height: auto;
	background-color: rgba(255, 255, 255, 1);
	box-shadow: 0.02rem 0.02rem 0.08rem 0 rgba(58, 68, 70, 0.47);
	border: solid 0.02rem rgba(252, 223, 58, 0.78);
	opacity: 0.92;
	border-radius: 0.08rem;
	padding:0.05rem 0.1rem;
}
.mission:before{
	content: '';
	width:0;
	height:0;
	border-top:0.09rem solid rgba(255,255,255,0);
	border-right:0.09rem solid rgba(252,223,58,0.78);
	border-bottom:0.09rem solid rgba(255,255,255,0);
	border-left:0.09rem solid rgba(255,255,255,0);
	position: absolute;
	left:-0.2rem;
	bottom:0.12rem;
}
.mission:after{
	content: '';
	width:0;
	height:0;
	border-top:0.07rem solid rgba(255,255,255,0);
	border-right:0.07rem solid rgba(255,255,255,1);
	border-bottom:0.07rem solid rgba(255,255,255,0);
	border-left:0.07rem solid rgba(255,255,255,0);
	position: absolute;
	left:-0.14rem;
	bottom:0.14rem;
}
.mission >h3{
	height:0.24rem;
	line-height: 0.24rem;
	font-size: 0.14rem;
	color:rgb(93,161,245);
}
.mission >ol{
	height:auto;
}
.mission >ol >li{
	margin:0.025rem 0;
	height:0.34rem;
	border:0.01rem solid rgb(255,255,255);
	line-height: 0.34rem;
	color:rgb(51,51,51);
	font-size: 0.14rem;
	text-align: center;
	cursor:pointer;
}
.mission >ol >li:hover{
	border:0.01rem solid rgb(141,189,249);
	background:rgb(238, 244, 251);
}
.mission >ol >li >.icon-slidenav{
	width:0.25rem;
	height:0.32rem;
	float:left;
	line-height: 0.35rem;
	text-align:center;
	font-size:0.24rem;
	margin-left:0.05rem;
}
.mission >ol >li >.icon-chakan{
	line-height: 0.32rem;
}
.mission >ol >li >p{
	width:1.3rem;
	margin-left:0.15rem;
	height:0.32rem;
	float:left;
	line-height: 0.32rem;
	text-align:center;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.mission >ol >li >.del{
	width:0.2rem;
	height:0.32rem;
	float:left;
	line-height: 0.37rem;
	text-align:center;
	display: none;
	color:rgb(244,118,117);
	font-size:0.24rem;
	margin-right:0.1rem;
}
.mission >ol >li:hover >.del{
	display: block;
}*/
</style>