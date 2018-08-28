<template lang="html">
  <div class="index">
    <div class="pop-up" @click="showPOPUP()">弹出框</div>
    <my-chart :id="'line'" :option="lineOption"></my-chart>
    <my-chart :id="'bar'" :option="barOption"></my-chart>
    <my-chart :id="'pie'" :option="pieOption"></my-chart>
    <popover>
      <p>132</p>
    </popover>
  </div>
</template>

<script>
import myChart from '@/components/common/echarts/chart'
import popover from '@/components/common/popover/popover'
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
      'showPopover', 'lineOption', 'barOption', 'pieOption'
    ]),
  },
  components: {
    myChart,
    popover
  },
  methods: {
    ...mapMutations([
      'showPopUpBox', 'addLineChartData', 'addBarChartData', 'addPieChartData'
    ]),
    showPOPUP() {
      this.showPopUpBox(true)
    },
    addLine() {
      var lineObj = {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
        xAxis: {
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [
              120,
              132,
              101,
              134,
              90,
              230,
              210
            ]
          }, {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [
              220,
              182,
              191,
              234,
              290,
              330,
              310
            ]
          }, {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [
              150,
              232,
              201,
              154,
              190,
              330,
              410
            ]
          }, {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [
              320,
              332,
              301,
              334,
              390,
              330,
              320
            ]
          }, {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [
              820,
              932,
              901,
              934,
              1290,
              1330,
              1320
            ]
          }
        ]
      }
      this.addLineChartData(lineObj)
      this.line = this.lineOption
    },
    addBar() {
      var barObj = {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        series: {
          data: [ 10, 52, 200, 334, 390, 330, 220 ]
        }
      }
      this.addBarChartData(barObj)
      this.bar = this.barOption
    },
    addPie() {
      var pieObj = {
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        series: {
          data: [
            {
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
            }
          ]
        }
      }
      this.addPieChartData(pieObj)
      this.pie = this.pieOption
    },
  }
}
</script>

<style lang="css">
</style>
