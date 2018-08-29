<template lang="html">
  <div :class="id+'-box'" >
    <div class="title">
      <span class="span-icon"></span>
      <p>{{title}}</p>
      <el-select v-model="selected" placeholder="" v-if="dropDown">
        <el-option v-for="item in yearList" :key="item" :label="item+'年'" :value="item"></el-option>
      </el-select>
    </div>
    <div class="chart-box">
      <div class="chart" :id="id"></div>
    </div>
  </div>

</template>

<script>
import echarts from '~/echarts/echarts.min.js'
import {
  mapState,
  mapMutations
} from 'vuex'
export default {
  props: ['id', 'title', 'option', 'dropDown'],
  data() {
    return {
      Chart: null,
      selected: '2018',
      lineSeries: null,
      yearList: [
        '2018', '2017', '2016', '2015', '2014', '2013'
      ]
    }
  },
  mounted() {
    this.Chart = echarts.init(document.getElementById(this.id));
    if (this.id == 'line') {
      this.conformity(this.option)
      this.Chart.setOption(this.lineSeries)
    } else {
      this.Chart.setOption(this.option)
    }
    window.onresize = () => {
      this.Chart.resize()
    }
  },
  computed: {
    ...mapState([
      'lineOption'
    ]),
  },
  methods: {
    conformity(json) {
      this.lineSeries = this.lineOption
      this.lineSeries.series = [{
        name: json.name,
        type: 'line',
        smooth: true,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(48,121,235, 0.3)'
            }, {
              offset: 0.8,
              color: 'rgba(48,121,235, 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {
            color: 'rgb(48,121,235)'
          }
        },
        data: json.data
      }]
    }
  }
}
</script>

<style lang="css">
</style>
