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
 tooltip: {
        trigger: 'item',
        showContent:false,
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
    	show:false,
        orient: 'vertical',
        x: 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['90%', '100%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
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


