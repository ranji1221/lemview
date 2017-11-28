<template>
	<el-dialog :visible.sync="item.open" :modal="false" :lock-scroll="false" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" v-show="item.show" :center="true" :class="{lg:item.lg}">
	    <!--头部-->
	    <span slot="title" class="titleaut" v-show="!item.lg">
			<p>{{title}}</p>
			<div class="btns">
				<!--最小化-->
				<a href="javascript:;" @click="btn_hid">
					<img src="~IMG/sys/modal2.png" alt="">
				</a>
				<!--放大-->
				<a href="javascript:;" @click="btn_scaling">
					<img src="~IMG/sys/modal3.png" alt="">
				</a>
				<!--关闭-->
				<a href="javascript:;" @click="btn_close">
					<img src="~IMG/sys/modal1.png" alt="">
				</a>
			</div>
		</span>
		<!--内容-->
	    
	    <!--查看-->
	    <template v-if="item.lg">	    	
		    <div class="role_view option_title_agg">
			    <lemon-breadcrumb :breadcrumb="breadcrumb" ></lemon-breadcrumb>
			    <lemon-option-title  :actions="title_actions" v-on:btn_hid="btn_hid" v-on:btn_scaling="btn_scaling" v-on:btn_close="btn_close"></lemon-option-title>		
			</div>
	    </template>
	    <!--查看部分-->
	    <template v-if="modal_type=='view'">
	    	<lemon-modal-view :lg="item.lg" :datalist="item.datalist"></lemon-modal-view>
	    </template>
	    <!--编辑部分-->
	    <template v-if="modal_type=='edit'">
	    	<lemon-modal-edit :lg="item.lg" :datalist="item.datalist"></lemon-modal-edit>
	    </template>
	    <!--编辑部分-->
	    <template v-if="modal_type=='ault'">
	    	<lemon-modal-ault :lg="item.lg" :datalist="item.datalist"></lemon-modal-ault>
	    </template>
	    
	    <!--底部-->
	    <span slot="footer" class="dialog-footer" v-if="footer">
	    	<el-button type="primary" @click="item.open = false">确 定</el-button>
		    <el-button @click="item.open = false">取 消</el-button>
		</span>
	</el-dialog>
</template>

<script>
//import "@/assets/style/common/list.css"
import LemonOptionTitle from "@/components/common/action/OptionTitle";
import LemonBreadcrumb from '@/components/common/action/Breadcrumb.vue';
//各种分支modal组件的引入
import LemonModalView from '@/components/common/action/modals/View.vue';
import LemonModalEdit from '@/components/common/action/modals/Edit.vue';
import LemonModalAult from '@/components/common/action/modals/Ault.vue';


export default {
    components:{ LemonOptionTitle,LemonBreadcrumb,LemonModalView,LemonModalEdit,LemonModalAult },
    props: ['item','title','modal_type'],
    data() {
        return {
        	breadcrumb:{
	      		search:true,
	      		undefinedpath:this.title,
	        },
	      	title_actions:{
	      		hid:true,
	      		scaling:true,
	      		close:true,
	      		undefinedpath:this.title,
	      	},
//      	lg:false,
    		true:true,
    		false:false,
    		footer:false,
        }
    },
    methods:{
    	btn_hid:function(){
    		this.item.show=!this.item.show;
	    	this.$emit('hid',this.item.id,this.modal_type);  		
    	},
    	btn_scaling:function(){
    		this.item.lg=!this.item.lg;
	    	this.$emit('scaling',this.item.lg);  	
	    	console.log(this.item.lg);
    	},
    	btn_close:function(){
//  		this.item.open=false;
	    	this.$emit('close',this.item.id,this.modal_type); 
    	},
    },
    mounted:function(){
//		console.log(this.breadcrumb)
    }
    
}
</script>
<style>
.el-dialog{
	overflow: hidden;
    width: 10.24rem;
    border-radius:0.1rem;
}
/*最大定位*/
.lg{
	position:absolute;
	bottom:auto;
	z-index: 1!important;
	height:100%;
}
.lg .el-dialog{
	width:100%!important;
	height:100%;
	margin:0!important;
	border-radius:0!important;
}
.lg .el-dialog__header,.lg .el-dialog__body{
	padding:0!important;
}
.lg .el-dialog__body{
	height:100%!important;
}
.lg .viewwrap{
	padding:0 0.41rem;
}
/*头部*/
.titleaut{
	display: block;
	margin:-30px -15px -10px;
	height: 0.6rem;
	line-height: 0.6rem;
	padding:0 0.25rem;
	background-color: #5fa5f9;
	color:rgb(255,255,255);
	position:relative;
}
.titleaut:before{
	position:absolute;
	content:'';
	width:0.04rem;
	height:0.2rem;
	background:rgb(255,255,255);
	left:0.25rem;
	top:0.2rem;
}
.titleaut p{
	font-size:0.18rem;
	padding-left:0.08rem;
	float:left;
	line-height:0.6rem;
}
.titleaut div.btns{
	float:right;
	height:0.6rem;
}
.titleaut div.btns a{
	float:left;
	width:0.3rem;
	height:0.6rem;
	margin-left:0.1rem;
}
.titleaut div.btns a img{
	width:100%;
	height:100%;
}
/*底部*/
.el-dialog__footer{
	padding:0 0.4rem 0.4rem;
}
.dialog-footer{
	display: block;
}
.dialog-footer button {
    font-size: 0.22rem;
    padding: 0.15rem 0.45rem;
    line-height: 0.2rem;
    border-radius: 0.05rem 0.05rem 0.05rem 0.05rem;
}
/*内容*/
.el-dialog--center .el-dialog__body,.el-dialog__body{
	padding:0.5rem 0.6rem;
}


</style>