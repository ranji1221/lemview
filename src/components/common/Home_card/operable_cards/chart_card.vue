<template>
	<div id="card_echart"></div>
</template>
<style>
	#card_echart{
		width:100%;
		height:2.4rem;
	}
</style>
<script>
//	require("../../../assets/default/style/index/Home_operable_card.css");

  export default {
	mounted: function() {
		var echarts = require('echarts');

	//河流图
		var card_echart = echarts.init(document.getElementById("card_echart"))
		var option = {
			grid: {
				top: '20%',
				left: '10%',
				right: '10%',
				bottom:'20%',
			},
			tooltip: {
				trigger: 'axis',
				tooltip: false,
				backgroundColor: "#f9119f",
				borderColor: "#ffffff",
				borderWidth: 1,
				enterable: true,
				//				position:function(point, params, dom, rect, size){
				//					return [point[0]+30,point[1]-size.contentSize[1]]
				//				},
//				b0 x轴坐标 a0曲线标题 c0 y轴坐标
				formatter: "{c0}",
				textStyle: {
					color: "#ffffff",
					align: 'center',
					rich: {
						b: {
							lineHeight: 33
						}
					}
				},
				extraCssText: "width:0.57rem;height:0.33rem；line-height:0.33rem",
				axisPointer: {
					type: 'cross',
					label: {
						backgroundColor: '#6a7985'
					}
				}
			},
			xAxis: {
				splitLine: {
					show: true
				},
				type: 'category',
				boundaryGap: false,
				axisLabel: {
					show: true,
					textStyle: {
						color: 'black',
						fontWeight: "",
						fontSize: 14,
					}
				},
				data: ['2.5k', '2.5k', '2.5k', '2.5k', '2.5k', '2.5k', '2.5k', '2.5k', '2.5k', '2.5k', '2.5k','2.5k', '2.5k', '2.5k', '2.5k', '2.5k', '2.5k', '2.5k', '2.5k', '2.5k', '2.5k', '2.5k',]
			},
			yAxis: {
				splitLine: {
					show: true
				},
				type: 'value',
				axisLabel: {
					show: true,
					textStyle: {
						color: 'black',
						//						fontWeight: "bolder",
						fontSize: 14,
					}
				},
//				data: ['0', '2.5k', '5k', '7.5k', '10k',]
			},
			series: [
				{
					legendHoverLink: true,
					name: '资源一',
					type: 'line',
					smooth: true,
					showSymbol: false,
					areaStyle: {
						normal: {
							color: '#fc129d',
							opacity: "1"
						}
					},
					itemStyle: {
						normal: {
							color: "#f58705",
						},
						emphasis: {
							color: "#f58705"
						}
					},
					lineStyle: {
						normal: {
							color: "#fc129d"
						}
					},
					data: [1.4,1.7,1.6,2,1.8,2.7,2.4,5.5,2.5,2.4,2,1.8,3,2.7,4,1.5,1.4,1.1,2.5,2.3,4,2]
				},
				
			]

		};
		card_echart.setOption(option);
		
	},
    data() {
      return {

      };
    },
    methods: {

    },

  }
</script>

