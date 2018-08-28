<template lang="html">
  <div class="chart" :id="id"></div>
</template>

<script>
import echarts from '~/echarts/echarts.min.js'
export default {
  props: ['id', 'option'],
  data() {
    return {
      Chart: null
    }
  },
  mounted() {
    this.Chart = echarts.init(document.getElementById(this.id));
    this.Chart.setOption(this.option)
    window.onresize = () => {
      this.Chart.resize()
    }
  },
  methods: {
    initechart() {
      var option = {
        title: {
          // text: '折线图堆叠'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
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
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          name: '销量',
          type: 'value'
        },
        series: [{
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };
    }
  }
}
</script>

<style lang="css">
.chart{
  width: 500px;
  height: 350px;
}
</style>
