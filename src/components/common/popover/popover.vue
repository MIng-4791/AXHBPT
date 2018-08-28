<template lang="html">
  <div class="popover" v-show="showPopover">
    <div class="pop-up" @click="showPopBox()">
      <slot>

      </slot>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState([
      'showPopover'
    ])
  },
  methods: {
    ...mapMutations([
      'showPopUpBox'
    ]),
    showPopBox() {
      this.showPopUpBox(false)
    }
  }
}
</script>

<style lang="css">
</style>
