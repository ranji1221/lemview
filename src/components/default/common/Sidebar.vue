<template>

	<el-menu default-active="" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :background-color="backgroundColor" :unique-opened=true>
		<!--用户信息-->
		<div class="user">
			<div class="photo">
				<img :src="user.avater" alt="">
			</div>
			<div class="userinfo">
				<h3>你好，<span>{{user.name}}</span></h3>
				<p>所属角色：<span>{{user.role}}</span></p>
			</div>
		</div>
		<!--导航-->
		<!--  <div style="min-height:4.5rem;">-->
		<template v-for="item in navlist" v-if="item.pid==0">

			<el-submenu :index="item.lid.toString()" key="item.lid">
				<template slot="title">
					<div class="rightborder"></div>
					<div class="rightarrow"></div>
					<i class="iconfont firstlevel" :class="item.icon"></i>
					<span slot="title">{{item.title}}</span>
				</template>

				<template v-if="item.level==3">
					<template v-for="item2 in navlist" v-if="item2.pid==item.lid">
						<el-submenu :index="item2.lid.toString()" key="item2.lid">
							<template slot="title">
								<i class="iconfont secondlevel" :class="item2.icon"></i>
								<span slot="title">{{item2.title}}</span>
							</template>

							<template v-for="item3 in navlist" v-if="item3.pid==item2.lid">
								<el-menu-item :index="item3.lid.toString()" key="item3.lid">
									<div class="leftline"></div>
									<i class="iconfont thirdlevel" :class="item3.icon"></i> {{item3.title}}
								</el-menu-item>
							</template>

						</el-submenu>

					</template>
				</template>

				<template v-if="item.level==2">
					<template v-for="item4 in navlist" v-if="item4.pid==item.lid">
						<el-menu-item :index="item4.lid.toString()" key="item4.lid">
							<i class="iconfont secondlevel" :class="item4.icon"></i> {{item4.title}}
						</el-menu-item>
					</template>

				</template>

			</el-submenu>
		</template>

		<!--</div>-->

		<!--按钮们-->
		<ul class="btns">
			<li>
				<div class="iconfont icon-bianji btn-edit"></div>
			</li>
			<li>
				<div class="iconfont icon-shouhui btn-fold" @click='slide' v-bind:class='{"rotate":isCollapse}'></div>
			</li>
			<li>
				<div class="iconfont icon-caidan5555 btn-mission"></div>
			</li>
			<div class="mission">
				<h3>任务&nbsp;&nbsp;&nbsp;————————</h3>
				<ol>
					<li>
						<span class="icon-eye-open icon-slidenav"></span>
						<p class="lookRole" mintype="1">查看角色02</p>
						<span class="iconfont icon-chuyidong1 del"></span>
					</li>
				</ol>
			</div>
		</ul>

	</el-menu>

</template>
<style>
	html,
	body {
		height: 100%;
	}
	
	#app {
		height: 100%;
	}
	
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		/*width: 200px;*/
		min-height: 400px;
	}
	
	.slideleft {
		transform: rotate(180deg);
	}
	
	.el-menu-vertical-demo {
		width: 3rem;
		-webkit-box-orient: vertical;
		border-right: none;
		box-shadow: 0.03rem 0.004rem 0.11rem 0rem rgba(227, 227, 227, 0.75);
	}
	
	.el-menu--collapse {
		width: 1rem;
	}
	
	.el-menu-vertical-demo>li {
		position: relative;
	}
	
	.el-menu-vertical-demo>li:before {
		content: '';
		position: absolute;
		left: 0.1rem;
		right: 0.1rem;
		top: 0;
		height: 1px;
		background: rgb(216, 214, 214);
		z-index: 2;
	}
	
	.el-menu-vertical-demo>li:last-of-type:after {
		content: '';
		position: absolute;
		left: 0.1rem;
		right: 0.1rem;
		bottom: 0;
		height: 1px;
		background: rgb(216, 214, 214);
		z-index: 2;
	}
	
	.el-menu-item,
	.el-submenu__title {
		height: 0.7rem;
		line-height: 0.7rem;
	}
	
	i.firstlevel {
		width: 0.45rem;
		margin-right: 0.3rem;
		font-size: 0.26rem;
	}
	
	i.secondlevel {
		width: 0.45rem;
		margin-right: 0.2rem;
		font-size: 0.22rem;
	}
	
	i.thirdlevel {
		width: 0.45rem;
		margin-right: 0.1rem;
		font-size: 0.2rem;
	}
	
	i.firstlevel+span {
		font-size: 0.2rem;
		color: rgb(102, 102, 102)
	}
	
	i.secondlevel+span {
		font-size: 0.18rem;
		color: rgb(102, 102, 102)
	}
	
	i.thirdlevel+span {
		font-size: 0.16rem;
		color: rgb(102, 102, 102)
	}
	
	i.firstlevel+span+i {
		font-size: 0.25rem;
	}
	
	i.secondlevel+span+i {
		font-size: 0.16rem;
	}
	
	li.is-opened>div.el-submenu__title {
		background: rgb(241, 241, 241)!important;
		margin-bottom: 1px;
	}
	
	.el-submenu__title:hover,
	.el-menu-item:hover {
		background: rgb(241, 241, 241)!important;
	}
	
	li.is-opened>div.el-submenu__title>i.iconfont+span {
		color: #378ef8;
	}
	
	.rightborder {
		width: 0.1rem;
		position: absolute;
		top: 0;
		bottom: 0;
		right: -0.1rem;
		background: rgb(241, 241, 241);
		display: none;
		box-shadow: 0.03rem 0.004rem 0.05rem 0px rgba(227, 227, 227, 0.75);
	}
	
	.rightarrow {
		width: 0px;
		height: 0px;
		position: absolute;
		bottom: -0.1rem;
		right: -0.1rem;
		border-top: 0.05rem solid rgba(154, 154, 154, 1);
		border-right: 0.05rem solid rgba(154, 154, 154, 0);
		border-bottom: 0.05rem solid rgba(154, 154, 154, 0);
		border-left: 0.05rem solid rgba(154, 154, 154, 1);
		display: none;
	}
	
	li.is-opened>div.el-submenu__title>.rightborder,
	li.is-opened>div.el-submenu__title>.rightarrow {
		display: block;
	}
	
	li.is-opened>div.el-submenu__title>i.iconfont {
		color: #378ef8;
	}
	
	.el-menu-item.is-active {
		color: #378ef8;
	}
	
	.leftline {
		display: none;
		width: 0.04rem;
		position: absolute;
		top: 1px;
		bottom: 1px;
		left: 0.1rem;
		background: #378ef8;
	}
	
	.el-menu-item:hover .leftline {
		display: block;
	}
	/*用户信息*/
	
	div.user {
		width: 100%;
		height: 1.4rem;
	}
	
	div.user .photo {
		/*width: 90px;
	height: 90px;*/
		width: 0.78rem;
		height: 0.78rem;
		background-color: rgba(228, 239, 252, 1);
		box-shadow: 0rem 0.08rem 0.12rem 0rem rgba(156, 155, 155, 0.5);
		border: solid 0.01rem rgba(244, 244, 244, 1);
		border-radius: 50%;
		overflow: hidden;
		/*margin-top:26px;
	margin-left:23px;*/
		margin-top: 0.31rem;
		margin-left: 0.11rem;
		float: left;
	}
	
	div.user .photo img {
		width: 100%;
		height: 100%;
	}
	
	div.user .userinfo {
		height: 100%;
		overflow: hidden;
	}
	
	div.user .userinfo h3 {
		width: 100%;
		/*height: 25px;
	line-height: 15px;*/
		font-size: 0.24rem;
		font-weight: normal;
		color: #333333;
		margin-top: 0.4rem;
		padding-left: 0.21rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	div.user .userinfo p {
		width: 100%;
		font-size: 0.12rem;
		font-weight: normal;
		color: rgb(51, 51, 51);
		margin-top: 0.17rem;
		padding-left: 0.21rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	/*下面的按钮们*/
	
	ul.btns {
		margin-top: 0.8rem;
		width: 100%;
		/*width:0.9rem;*/
		height: 2.5rem;
		padding-top: 0.2rem;
		padding-bottom: 0.2rem;
		position: relative;
		background: white;
		/*position: absolute;
	right:0;
	bottom:0;*/
	}
	
	ul.btns>li {
		height: 0.7rem;
		position: relative;
		overflow: hidden;
		cursor: pointer;
	}
	
	ul.btns>li>div {
		width: 0.38rem;
		height: 0.38rem;
		line-height: 0.38rem;
		text-align: center;
		border-radius: 50%;
		font-size: 0.16rem;
		position: absolute;
		right: 0.31rem;
		top: 0.16rem;
		box-shadow: 0 0.06rem 0.1rem 0 rgba(156, 155, 155, 0.59);
		cursor: pointer;
	}
	
	ul.btns>li>div.btn-edit {
		border: 0.01rem solid rgb(243, 141, 141);
	}
	
	ul.btns>li>div.btn-fold {
		border: 0.01rem solid rgb(55, 142, 248);
		/*transition: transform 0.4s;*/
		line-height: 0.35rem;
	}
	
	ul.btns>li>div.rotate {
		transform: rotate(180deg);
		box-shadow: 0 -0.06rem 0.1rem 0 rgba(156, 155, 155, 0.59);
	}
	/*@media (max-width:750px){
	
	aside.minscreen >ul.btns >li >div.btn-fold{
		transform: rotate(180deg);
		box-shadow: 0 -0.06rem 0.1rem 0 rgba(156, 155, 155, 0.59);
	}
}*/
	
	ul.btns>li>div.btn-mission {
		border: 0.01rem solid rgb(252, 223, 58);
	}
	
	ul.btns>.mission {
		position: absolute;
		/*right:-233px;*/
		right: -2.15rem;
		/*bottom:0.12rem;*/
		bottom: 0.32rem;
		width: 2.32rem;
		/*height: 249px;*/
		height: auto;
		background-color: rgba(255, 255, 255, 1);
		box-shadow: 0.02rem 0.02rem 0.08rem 0 rgba(58, 68, 70, 0.47);
		border: solid 0.02rem rgba(252, 223, 58, 0.78);
		opacity: 0.92;
		border-radius: 0.08rem;
		padding: 0.05rem 0.1rem;
		display: none;
	}
	
	ul.btns>.mission:before {
		content: '';
		width: 0;
		height: 0;
		border-top: 0.09rem solid rgba(255, 255, 255, 0);
		border-right: 0.09rem solid rgba(252, 223, 58, 0.78);
		border-bottom: 0.09rem solid rgba(255, 255, 255, 0);
		border-left: 0.09rem solid rgba(255, 255, 255, 0);
		position: absolute;
		left: -0.2rem;
		bottom: 0.12rem;
	}
	
	ul.btns>.mission:after {
		content: '';
		width: 0;
		height: 0;
		border-top: 0.07rem solid rgba(255, 255, 255, 0);
		border-right: 0.07rem solid rgba(255, 255, 255, 1);
		border-bottom: 0.07rem solid rgba(255, 255, 255, 0);
		border-left: 0.07rem solid rgba(255, 255, 255, 0);
		position: absolute;
		left: -0.14rem;
		bottom: 0.14rem;
	}
	
	ul.btns>.mission>h3 {
		height: 0.24rem;
		line-height: 0.24rem;
		font-size: 0.14rem;
		color: rgb(93, 161, 245);
	}
	
	ul.btns>.mission>ol {
		/*margin-top:10px;*/
		/*height:197px;*/
		height: auto;
	}
	
	ul.btns>.mission>ol>li {
		margin: 0.025rem 0;
		height: 0.34rem;
		border: 0.01rem solid rgb(255, 255, 255);
		line-height: 0.34rem;
		color: rgb(51, 51, 51);
		font-size: 0.14rem;
		text-align: center;
		cursor: pointer;
	}
	
	ul.btns>.mission>ol>li:hover {
		border: 0.01rem solid rgb(141, 189, 249);
		background: rgb(238, 244, 251);
	}
	
	ul.btns>.mission>ol>li>.icon-slidenav {
		width: 0.25rem;
		height: 0.32rem;
		float: left;
		line-height: 0.35rem;
		text-align: center;
		font-size: 0.24rem;
		margin-left: 0.05rem;
	}
	
	ul.btns>.mission>ol>li>.icon-chakan {
		line-height: 0.32rem;
	}
	
	ul.btns>.mission>ol>li>p {
		width: 1.3rem;
		margin-left: 0.15rem;
		height: 0.32rem;
		float: left;
		line-height: 0.32rem;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	ul.btns>.mission>ol>li>.del {
		width: 0.2rem;
		height: 0.32rem;
		float: left;
		line-height: 0.37rem;
		text-align: center;
		display: none;
		color: rgb(244, 118, 117);
		font-size: 0.24rem;
		margin-right: 0.1rem;
	}
	
	ul.btns>.mission>ol>li:hover>.del {
		display: block;
	}
	
	.icon-yaochi {
		color: rgb(92, 247, 158);
	}
	
	.icon-chakan {
		color: rgb(244, 118, 117);
	}
	
	.icon-bianji-copy {
		color: rgb(92, 162, 247);
	}
	
	.icon-shanchu {
		color: rgb(252, 223, 58);
	}
	
	.icon-key {
		color: rgb(92, 247, 158);
	}
	
	.icon-eye-open {
		color: rgb(244, 118, 117);
	}
	
	.icon-pencil {
		color: rgb(92, 162, 247);
	}
	
	.icon-trash {
		color: rgb(252, 223, 58);
	}
	
	.icon-yonghuliebiao:before {
		font-weight: 600;
	}
</style>

<script>
	export default {
		data  () {
			return{
				isCollapse: false,
				backgroundColor: '#ffffff',
				user: {
					name: '哎吆吆',
					avater: require('../../../assets/default/images/test/per.png'),
					role: '超级管理员'
				},
				navlist: [{
						icon: 'icon-quanxianguanli',
						title: '权限管理',
						level: 3,
						pid: 0,
						lid: 1
					},
					{
						icon: 'icon-jiaoseguanli',
						title: '角色管理',
						level: 3,
						pid: 1,
						lid: 2
					},
					{
						icon: 'icon-liebiao3',
						title: '角色列表',
						level: 3,
						pid: 2,
						lid: 3
					},
					{
						icon: 'icon-tianjia',
						title: '添加角色',
						level: 3,
						pid: 2,
						lid: 4
					},
					{
						icon: 'icon-piliangtianjia',
						title: '批量添加角色',
						level: 3,
						pid: 2,
						lid: 5
					},

					{
						icon: 'icon-yonghuguanli',
						title: '用户管理',
						level: 3,
						pid: 1,
						lid: 6
					},
					{
						icon: 'icon-yonghuliebiao',
						title: '用户列表',
						level: 3,
						pid: 6,
						lid: 7
					},
					{
						icon: 'icon-tianjiaxinyonghu',
						title: '添加用户',
						level: 3,
						pid: 6,
						lid: 8
					},
					{
						icon: 'icon-tianjiaduoyonghu',
						title: '批量添加用户',
						level: 3,
						pid: 6,
						lid: 9
					},

					{
						icon: 'icon-ziyuanguanli',
						title: '资源管理',
						level: 2,
						pid: 1,
						lid: 10
					},
					{
						icon: 'icon-ziyuanguanli2',
						title: '资源列表',
						level: 2,
						pid: 10,
						lid: 11
					},
					{
						icon: 'icon-tianjiaziyuan-q',
						title: '添加资源',
						level: 2,
						pid: 10,
						lid: 12
					},

					{
						icon: 'icon-gerenzhongxin',
						title: '个人中心',
						level: 3,
						pid: 0,
						lid: 13
					},
					{
						icon: 'icon-wodedenglu_shezhi',
						title: '我的设置',
						level: 3,
						pid: 0,
						lid: 14
					},
					{
						icon: 'icon-shujukuguanli',
						title: '数据库管理',
						level: 2,
						pid: 0,
						lid: 15
					},
					{
						icon: 'icon-beifenshujuku',
						title: '备份数据库',
						level: 2,
						pid: 15,
						lid: 16
					},
					{
						icon: 'icon-shuju-yihuifu',
						title: '恢复数据库',
						level: 2,
						pid: 15,
						lid: 17
					},
					{
						icon: 'icon-Group',
						title: '优化数据库',
						level: 2,
						pid: 15,
						lid: 18
					},
					{
						icon: 'icon-rizhiguanli',
						title: '日志管理',
						level: 2,
						pid: 0,
						lid: 19
					},
					{
						icon: 'icon-rizhitongji',
						title: '日志列表',
						level: 2,
						pid: 19,
						lid: 20
					},
					{
						icon: 'icon-rizhiliebiao',
						title: '日志统计',
						level: 2,
						pid: 19,
						lid: 21
					},

				]

			};
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			slide() {
				this.isCollapse = !this.isCollapse;
			},
			tostr(num) {
				return num.toString()
			}
		},

	}
</script>