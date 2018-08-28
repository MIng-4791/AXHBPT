<template lang="html">
  <div class="header">
    <div class="logo">
      红包发放平台
    </div>
    <div class="nav">
      <my-nav :list="list" :composeType="'across'"></my-nav>
    </div>
    <div class="system">

    </div>
  </div>
</template>

<script>
import myNav from '@/components/common/navigation/navigation'
export default {
  name: 'navigation',
  data() {
    return {
      list: [
        {name: '红包管理', route: 'hbgl', class: 'nav-route'},
        {name: '组织机构管理', route: 'zzjggl', class: 'nav-route'}
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
