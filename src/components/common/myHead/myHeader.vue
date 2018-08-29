<template lang="html">
  <div class="header">
    <div class="logo"></div>
    <div class="nav">
      <my-nav :list="list" :icon="iconlist" :composeType="'across'"></my-nav>
    </div>
    <div class="userinfo">
      <div class="user">
        <img src="/static/images/logo.png" alt="">
        {{'超级管理员'}}
      </div>
      <div class="cut">
        <i class="iconfont" :class="cut_icon"></i>
        切换
      </div>
      <div class="logout">
        <i class="iconfont" :class="logout_icon"></i>
        退出
      </div>
    </div>
  </div>
</template>

<script>
import {iconlist} from '@/api/iconlist'
import myNav from '@/components/common/navigation/navigation'
export default {
  name: 'navigation',
  data() {
    return {
      list: [
        {name: '红包发放记录', route: 'hbgl', class: 'nav-route'},
        {name: '红包发放', route: 'zzjggl', class: 'nav-route'}
      ],
      iconlist: [
        iconlist[6],
        iconlist[9]
      ],
      cut_icon: iconlist[10],
      logout_icon: iconlist[8]
    }
  },
  components: {
    myNav
  }
}
</script>

<style lang="css">
</style>
