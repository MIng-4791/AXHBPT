<template lang="html">
  <div class="side">
    <my-nav :list="list" :composeType="'vertical'"></my-nav>
  </div>
</template>

<script>
import myNav from '@/components/common/navigation/navigation'
export default {
  data() {
    return {
      list: [
        {name: '首页', route: 'index', class: 'icon'},
        {name: '系统', route: 'system', class: 'icon'},
        {name: '设置', route: 'setting', class: 'icon'},
        {name: '充值', route: 'recharge', class: 'icon'},
        {name: '账号信息', route: 'zhxx', class: 'icon'},
        {name: '权限管理', route: 'qxgl', class: 'icon'},
        {name: '用户管理', route: 'yhgl', class: 'icon'}
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
