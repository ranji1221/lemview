<template>
	<div class="panel-body humanInfo">
		<div class="table-responsive table-condensed">
			<table class="table userlist">
				<thead>
					<tr>
						<th>编号</th>
						<th>名称</th>
						<th>父菜单</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>02</td>
						<td class="manageName" title="首页信息管理">首页信息管理</td>
						<td>首页</td>
						<td>
							<a href="" class="icon-eye-open lookRole" title="查看"></a>
							<a href="" class="icon-pencil editUser" title="编辑"></a>
							<a href="" class="icon-trash removeBtn" title="删除"></a>
							<a href="" class="icon-key" title="授权"></a>
						</td>
					</tr>
					<tr>
						<td>02</td>
						<td class="manageName">首页管理</td>
						<td>首页</td>
						<td>
							<a href="" class="icon-eye-open lookRole" title="查看"></a>
							<a href="" class="icon-pencil editUser" title="编辑"></a>
							<a href="" class="icon-trash removeBtn" title="删除"></a>
							<a href="" class="icon-key" title="授权"></a>
						</td>
					</tr>
					<tr>
						<td>02</td>
						<td class="manageName">首页管理</td>
						<td>首页</td>
						<td>
							<a href="" class="icon-eye-open lookRole" title="查看"></a>
							<a href="" class="icon-pencil editUser" title="编辑"></a>
							<a href="" class="icon-trash removeBtn" title="删除"></a>
							<a href="" class="icon-key" title="授权"></a>
						</td>
					</tr>
					<tr>
						<td>02</td>
						<td class="manageName">首页管理</td>
						<td>首页</td>
						<td>
							<a href="" class="icon-eye-open lookRole" title="查看"></a>
							<a href="" class="icon-pencil editUser" title="编辑"></a>
							<a href="" class="icon-trash removeBtn" title="删除"></a>
							<a href="" class="icon-key" title="授权"></a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

	</div>
</template>
<style>
.humanInfo .icon-eye-open {
	color: #f47675;
}

.humanInfo .icon-pencil {
	color: #5ca2f7;
}

.humanInfo .icon-trash {
	color: #fcdf3a;
}

.humanInfo .icon-key {
	color: #84f9b6;
}

.humanInfo .table {
	height: 1.85rem;
	min-width: 3.75rem;
	margin-bottom: 0px;
	margin-left: 1px;
	border: 1px solid transparent;
	width: 100%;
	border-collapse:collapse;
}

.humanInfo .table-responsive {
	border: none;
}

.humanInfo .table [class*='icon-'] {
	padding: 0 0.05rem;
	font-size: 0.2rem;
}
.humanInfo .table thead{
	margin-bottom:0.1rem;
}
.humanInfo .table td,
.humanInfo .table th {
	text-align: center;
	border: none;
}
.humanInfo .table td{
	line-height: 0.4rem;
}
.humanInfo .table th{
	line-height: 0.4rem;
}
.humanInfo .table thead {
	background: #f7f7f7;
}

.humanInfo .table tbody tr:hover {
	outline: 1px solid #378ef8;
}
.table-responsive {
    min-height: .01%;
    overflow-x: auto;
}
</style>
<script>
//	require("../../../assets/default/style/index/Home_operable_card.css");

  export default {
//	props: ['card'],
    data() {
      return {

      };
    },
    methods: {

    },

  }
</script>


