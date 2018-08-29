<template lang="html">
  <div class="side">
    <my-nav :list="list" :icon="iconList" :composeType="'vertical'"></my-nav>
  </div>
</template>

<script>
import myNav from '@/components/common/navigation/navigation'
import {iconlist} from '@/api/iconlist'
export default {
  data() {
    return {
      list: [
        {name: '首页', route: 'index', class: 'icon'},
        {name: '系统管理', route: 'system', class: 'icon'},
        {name: '立即充值', route: 'recharge', class: 'icon'},
        {name: '账号信息', route: 'zhxx', class: 'icon'},
        {name: '权限管理', route: 'qxgl', class: 'icon'},
        {name: '用户管理', route: 'yhgl', class: 'icon'}
      ],
      iconList: [
        iconlist[0],
        iconlist[1],
        iconlist[2],
        iconlist[3],
        iconlist[4],
        iconlist[5]
      ]
    }
  },
  components: {
    myNav
  }
}
</script>

<style lang="css">
</style>
