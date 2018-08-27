<template lang="html">
  <div class="navigation" :class="composeType">
    <template >
      <div class="route" v-for="item in list" :class="sel == item.route ? 'active' : ''">
        <router-link tag="div" class="link" :class="item.class" :to="{ name: item.route, query: {} }">
          <template v-if="item.class == 'icon'">
            <i :class="item.route"></i>
          </template>
          {{item.name}}
        </router-link>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: ['list', 'composeType'],
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
  methods: {
  }
}
</script>

<style lang="css">
</style>
