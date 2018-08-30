<template lang="html">
  <div class="index">
    <div class="pie-bar">
      <my-chart :title="'本月系统数量'" :id="'pie'" :option="pieOption" :dropDown="false"></my-chart>
      <my-chart :title="'全年发红包总额'" :id="'bar'" :option="barOption" :dropDown="false"></my-chart>
    </div>
    <my-chart :title="'全年红包总数统计'" :id="'line'" :option="line" :dropDown="true"></my-chart>
  </div>
</template>

<script>
import myChart from '@/components/common/echarts/chart'
import {
  mapState,
  mapMutations
} from 'vuex'
export default {
  data() {
    return {
      line: null,
      bar: null,
      pie: null
    }
  },
  created() {
    this.addLine()
    this.addBar()
    this.addPie()
  },
  mounted() {},
  computed: {
    ...mapState([
      'showPopover', 'barOption', 'pieOption'
    ]),
  },
  components: {
    myChart
  },
  methods: {
    ...mapMutations([
      'addLineChartData', 'addBarChartData', 'addPieChartData'
    ]),
    addLine() {
      this.line = {
        data: [
          86.3,
          76.4,
          97.5,
          95.6,
          58.1,
          94.8,
          89.6,
          94.1,
          80.1,
          52.4,
          75.8,
          94.7
        ],
        name: '红包'
      }
    },
    addBar() {
      var barObj = {
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
        ],
        series: {
          data: [
            86.3,
            76.4,
            97.5,
            95.6,
            58.1,
            94.8,
            89.6,
            94.1,
            80.1,
            52.4,
            75.8,
            94.7
          ]
        }
      }
      this.addBarChartData(barObj)
    },
    addPie() {
      var pieObj = {
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        series: {
          data: [{
            value: 335,
            name: '直接访问'
          }, {
            value: 310,
            name: '邮件营销'
          }, {
            value: 234,
            name: '联盟广告'
          }, {
            value: 135,
            name: '视频广告'
          }, {
            value: 1548,
            name: '搜索引擎'
          }]
        }
      }
      this.addPieChartData(pieObj)
    },
  }
}
</script>

<style lang="css">
</style>
