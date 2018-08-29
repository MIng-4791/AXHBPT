// 折线图配置项
export let lineOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: '#57617B'
      }
    }
  },
  grid: {
    left: '1%',
    right: '1%',
    bottom: '3%',
    top: '4%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: '#57617B'
        }
      },
      data: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月'
      ]
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#57617B'
        }
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 14
        }
      },
      splitLine: {
        lineStyle: {
          color: '#f5f4f9'
        }
      }
    }
  ],
  series: null
}
// 柱状图配置项
export let barOption = {
  color: ['#3398DB'],
  tooltip: {
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: null,
    axisTick: {
      alignWithLabel: true
    }
  },
  yAxis: {
    type: 'value'
  },
  series: {
    name: '直接访问',
    type: 'bar',
    barWidth: '60%',
    data: null
  }
}
// 饼状图配置项
export let pieOption = {
  title: {
    text: '某站点用户访问来源',
    subtext: '纯属虚构',
    x: 'center'
  },
  color: [
    '#f99', '#9f9', '#9ff', '#99f', '#f9f'
  ],
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: null
  },
  series: {
    name: '访问来源',
    type: 'pie',
    radius: '55%',
    center: [
      '50%', '60%'
    ],
    data: null,
    itemStyle: {
      emphasis: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  }
}
