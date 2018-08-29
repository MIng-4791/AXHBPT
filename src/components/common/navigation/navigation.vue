<template lang="html">
  <div class="navigation" :class="composeType">
    <template >
      <div class="route" v-for="(item, index) in list" :class="sel == item.route ? 'actived' : ''">
        <router-link tag="div" class="link" :class="item.class" :to="{ name: item.route, query: {} }">
          <i class="iconfont" :class="icon[index]"></i>
          <p>{{item.name}}</p>
        </router-link>
        <span class="pitch-on"></span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: ['list', 'icon', 'composeType'],
  data() {
    return {
      sel: null,
    }
  },
  mounted() {
    this.sel = this.$route.name
  },
  watch: {
    $route() {
      this.sel = this.$route.name
    }
  },
  methods: {}
}
</script>

<style lang="css">
</style>
