// 正则表达式
export const myRegular = {
  phone: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
  email: /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,5}$/,
  card: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
  birth: /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/
}
// 折线图配置项
export let lineOption = {
  title: {
    // text: '折线图堆叠'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: null
  },
  grid: {
    // left: '3%',
    // right: '4%',
    // bottom: '3%',
    // containLabel: true
  },
  toolbox: {
    feature: {
      // saveAsImage: {}
    }
  },
  xAxis: {
    name: '月份',
    type: 'category',
    boundaryGap: false,
    data: null
  },
  yAxis: {
    name: '销量',
    type: 'value'
  },
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
