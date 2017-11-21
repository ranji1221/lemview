<template>
	<div class="panel-body skyBox">
		<div class="row">
			<div class="moreSky text-right">
				<!--<a href="" class="moresky">更多天气</a>-->
				<a href="" class="moresky"></a>
			</div>
			<div class="el-col-sm-8 con r">
				<div class="pie text-center">
					<div id="circle" class="pieChart text-center" data-percent="76%">
					</div>
					<!--<div class="per">76%</div>-->
					<label for="" class="per">76%</label>
				</div>
				<div class="skyInfo text-center">空气湿度</div>

			</div>
			<div class="el-col-sm-16 con">
				<div class="row skyDetail">
					<div class="el-col-sm-12">
						<ul class="list-unstyled">
							<li class="text-center">太原</li>
							<li class="text-center">多云 星期四</li>
							<li class="text-center">17℃~20℃</li>
						</ul>
					</div>
					<div class="cloud el-col-sm-12 text-center">
						<!--<canvas width="80" height="100" id="skyCan">-->
						<!--</canvas>-->
						<img src="src/assets/images/index/weather/duoyun.jpg" class="img-responsive" alt="">
					</div>
				</div>
				<div class="date text-center">
					<i class="icon-calendar"></i>
					<span id="calendar">{{now()}}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<style>
.text-center{
	text-align: center;
}
.skyBox>.row .con {
	height: 100%;
	padding: 0 0.05rem;
}

.skyBox>.row .con .pie {
	width: 100%;
	height: 85%;
	position: relative;
	top:0.3rem;
}

.skyBox>.row .con .pie .pieChart canvas {
	position: absolute;
	top: 50%;
	left: 50%;
}

.skyBox>.row .con .pie .per {
	position: relative;
	font-size: 0.2rem;
	width: 100%;
	text-align: center;
	top:-0.05rem;
}

@media screen and (min-width: 750px) and (max-width: 1200px) {
	.skyBox>.row .con .pie .per {
		font-size: 0.25rem;
	}
}

.skyBox>.row .con .skyInfo {
	width: 100%;
	height: 15%;
}

@media screen and (min-width: 1080px) and (max-width: 1112px) {
	.skyBox>.row .con .skyInfo {
		font-size: 0.12rem;
	}
}

.skyBox>.row .con .skyDetail {
	position: relative;
	padding-top: 0.2rem;
	height: 80%;
	margin: 0;
}

.skyBox>.row .con .skyDetail .el-col-xs-6 {
	height: 100%;
	padding: 0;
}

.skyBox>.row .con .skyDetail ul {
	height: 100%;
	padding-top: 0.05rem;
}

.skyBox>.row .con .skyDetail li {
	line-height: 0.2rem;
}

.skyBox>.row .con .skyDetail li:first-child {
	font-weight: 700;
	font-size: 0.2rem;
	line-height: 0.24rem;
}

.skyBox>.row .con .skyDetail .skyCan {
	width: 100%;
	height: 100%;
}

.skyBox>.row .con .skyDetail .cloud img {
	float: left;
	height: 70%;
}

.skyBox>.row .con .date {
	height: 15%;
	line-height: 0.3rem;
	font-size: 0.24rem;
}

.skyBox>.row .con .date .icon-calendar {
	color: #f8639f;
	font-size: 0.24rem;
}

.skyBox>.row .con:last-child {
	border-left: 1px solid #5ea3f9;
}

.skyBox .moresky {
	height: 10%;
	line-height: 0.4rem;
	color: #f8639f;
	padding-right: 0.2rem;
}
.skyBox .pieChart{
	width:1rem;
	height:1rem;
	margin:auto;
}

</style>
<script>
//	require("../../../assets/default/style/index/Home_operable_card.css");

  export default {
	mounted: function() {
		var echarts = require('echarts');

	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('circle'));
	// 绘制图表
	myChart.setOption({
//	    option = {
			tooltip : { //提示框组件
				show:false,
                trigger: 'item', //触发类型(饼状图片就是用这个)
                formatter: "{a} <br/>{b} : {c} ({d}%)" //提示框浮层内容格式器
            },
            color:['#48cda6','#fd87ab','#11abff','#ffdf33','#968ade'],  //手动设置每个图例的颜色
            legend: {  //图例组件
                //right:100,  //图例组件离右边的距离
				show:false,
                orient : 'horizontal',  //布局  纵向布局 图例标记居文字的左边 vertical则反之
                width:40,      //图行例组件的宽度,默认自适应
                x : 'right',   //图例显示在右边
                y: 'center',   //图例在垂直方向上面显示居中
                itemWidth:10,  //图例标记的图形宽度
                itemHeight:10, //图例标记的图形高度
                data:['30%','10%','15%','20%','25%'],
                textStyle:{    //图例文字的样式
                    color:'#333',  //文字颜色
                    fontSize:12    //文字大小
                }
            },
            series : [ //系列列表
                {
                    name:'随访次数',  //系列名称
                    type:'pie',   //类型 pie表示饼图
                    //center:['30%','50%'], //设置饼的原心坐标 不设置就会默认在中心的位置
                    radius : ['50%', '70%'],  //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                    itemStyle : {  //图形样式
                        normal : { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                            label : {  //饼图图形上的文本标签
                                show : false  //平常不显示
                            },
                            labelLine : {     //标签的视觉引导线样式
                                show : false  //平常不显示
                            }
                        },
                        emphasis : {   //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                            label : {  //饼图图形上的文本标签
                                show : true,
                                position : 'center',
                                textStyle : {
                                    fontSize : '10',
                                    fontWeight : 'bold'
                                }
                            }
                        }
                    },
                    data:[
                        {value:30, name:'30%'},
                        {value:10, name:'10%'},
                        {value:15, name:'15%'},
                        {value:20, name:'20%'},
                        {value:25, name:'25%'}
                    ]
                }
            ]
        
//};
	});
		
	},
    data() {
      return {
//		date:'2017/11/21'
      };
    },
    methods: {
	  now: function () {
	    var mydate = new Date();
		var str = "" + mydate.getFullYear() + "/";
		str += (mydate.getMonth() + 1) + "/";
		str += mydate.getDate();
		return str;
	  }
	  
    },

  }
</script>


<!--normal:{
							color:new echarts.graphic.LinearGradient(0,0,0,1,[
								{offset:0,color:'#fc129d'},
								{offset:1,color:'#bb04be'},
							],false),
							opacity: "1"
							
						}-->