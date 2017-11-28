<template>
	<el-dialog :visible.sync="view.open" :modal="false" :lock-scroll="false" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" v-show="view.show" :center="true" :class="{lg:view.lg}">
	    <!--头部-->
	    <span slot="title" class="titleaut" v-show="!view.lg">
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
	    <template v-if="view.lg">	    	
		    <div class="role_view option_title_agg">
			    <lemon-breadcrumb :breadcrumb="breadcrumb" ></lemon-breadcrumb>
			    <lemon-option-title  :actions="title_actions" v-on:btn_hid="btn_hid" v-on:btn_scaling="btn_scaling" v-on:btn_close="btn_close"></lemon-option-title>		
			</div>
	    </template>
	    <div class="viewwrap">
		    <div class="row modal_body_title" v-show="view.lg">
				<h3>青柠云后台管理系统</h3>
			</div>
			<table class="view">
				<tr v-for="(value, key) in view.viewitem">
					<td>{{key}}</td>
					<td>{{value}}</td>
				</tr>				
				<!--<tr class="remarks">
					<td>备注消息</td>
					<td>UI设计师为研发部门付出了艰辛的努力</td>
				</tr>-->
			</table>
	    </div>
	    
	    
	    <!--底部-->
	    <span slot="footer" class="dialog-footer" v-if="footer">
	    	<el-button type="primary" @click="view.open = false">确 定</el-button>
		    <el-button @click="view.open = false">取 消</el-button>
		</span>
	</el-dialog>
</template>

<script>
//import "@/assets/style/common/list.css"
import LemonOptionTitle from "@/components/common/action/OptionTitle"
import LemonBreadcrumb from '@/components/common/action/Breadcrumb.vue';

export default {
    components:{ LemonOptionTitle,LemonBreadcrumb },
    props: ['view','title'],
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
    		this.view.show=!this.view.show;
	    	this.$emit('hid',this.view.id);  		
    	},
    	btn_scaling:function(){
    		this.view.lg=!this.view.lg;
	    	this.$emit('scaling',this.view.lg);  		
    	},
    	btn_close:function(){
//  		this.view.open=false;
	    	this.$emit('close',this.view.id); 
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
/*查看内容*/

table.view tr:first-child td:first-child{
	width: 14em;
	/*width: 50%;*/
}
/*@media (min-width: 1200px){
	.lg table.view tr:first-child td:first-child{
		width: 16.666666%;
	}
}*/
table .remarks td {
    white-space: normal;
    text-overflow: unset;
    word-break: normal;
}
table.view{
	width:100%;	
}
.modal_body_title{
	padding-left:0.45rem;
	background-color:#f2f2f4;
	height:0.6rem;
	border:1px solid #dddddd;
	border-bottom:1px dashed #dddddd;

}	
.modal_body_title h3{
	font-size:0.24rem;
	line-height:0.6rem;
	height:100%;
}
table.view {
	border-top: 1px solid #ddd;
	border-left: 1px solid #ddd;
	border-right: 1px solid #ddd;
	text-align: right;
	table-layout: fixed; 
}
.lg table.view {
	border-top: none;
}
table.view .remarks td{
	white-space: normal;
    text-overflow: unset;
    word-break: normal;
}
table.view tr{
	height:0.6rem;
	border-bottom:1px dashed #ddd;
	text-align:left;
}
table.view tr td {
	font-size: 0.18rem;
	height:0.6rem;
	line-height:0.6rem;
	padding:0;
	color: #333333;	
	overflow: hidden;
	white-space: nowrap;
	border-top:none;
	text-overflow: ellipsis;
	word-break: keep-all; 
	border-bottom: 1px dashed #ddd;
}
table.view tr td.error {
	color: rgb(255,100,100);
}
table.view tr td:nth-child(1) {
	border-left:none;
	background-color:#fbfbfb;
	padding-left:0.7rem;
	padding-right: 0.40rem; 
}
table.view tr td:nth-child(2) {
	text-align: left;
	border-left: 1px dashed #ddd;
	font-size:0.14rem;
	color:#666666;
	padding-left: 0.52rem; 
}

</style>