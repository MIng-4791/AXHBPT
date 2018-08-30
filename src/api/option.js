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
          color: '#91a0ae'
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
          color: '#91a0ae'
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
          color: '#f5f5f8'
        }
      }
    }
  ],
  series: null
}
// 柱状图配置项
export let barOption = {
  color: ['#307aea', '#f67270'],
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
    type: 'value',
    splitLine: {
      lineStyle: {
        color: '#f5f5f8'
      }
    }
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
  color: [
    '#30ebc9', '#ffb23b', '#f07376', '#8ab2ed', '#307aea'
  ],
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    data: null
  },
  series: {
    name: '访问来源',
    type: 'pie',
    radius: ['50%', '70%'],
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
