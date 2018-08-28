import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showPopover: false,
    lineOption: {
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
    },
    barOption: {
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
    },
    pieOption: {
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
  },
  mutations: {
    // 控制弹出框的显示隐藏
    showPopUpBox(state, bool) {
      state.showPopover = bool
    },
    // 添加折线图的数据
    addLineChartData(state, obj) {
      state.lineOption.legend.data = obj.data
      state.lineOption.xAxis.data = obj.xAxis.data
      state.lineOption.series = obj.series
    },
    // 添加柱状图的数据
    addBarChartData(state, obj) {
      state.barOption.xAxis.data = obj.data
      state.barOption.series.data = obj.series.data
    },
    // 添加饼状图的数据
    addPieChartData(state, obj) {
      state.pieOption.legend.data = obj.data
      state.pieOption.series.data = obj.series.data
    }
  },
  actions: {}
})
