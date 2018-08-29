import Vue from 'vue'
import Vuex from 'vuex'
import {lineOption, barOption, pieOption} from '@/api/option'
// import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showPopover: false,
    lineOption: lineOption,
    barOption: barOption,
    pieOption: pieOption
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
