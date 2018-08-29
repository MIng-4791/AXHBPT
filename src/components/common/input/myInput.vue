<template lang="html">
  <div class="completion-input-box">
    <span class="input-box-name">{{text}}</span>
    <input :type="type" ref="input" :value="value" @input="$emit('input', $event.target.value)" @blur="regularCheck">
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {myRegular} from '@/api/config'
export default {
  data() {
    return {

    }
  },
  mounted() {
  },
  props: ['text', 'type', 'value', 'vtype'],
  methods: {
    regularCheck() {
      switch (this.vtype) {
        case 'phone':
          this.checkResult(myRegular.phone, this.value)
          break;
        case 'email':
          this.checkResult(myRegular.email, this.value)
          break;
      }
    },
    // 校验结果
    checkResult(reg, val) {
      let regExp = new RegExp(reg)
      if (!regExp.test(val)) {
        alert('错误');
      } else {
        alert('正确');
      }
    }
  }
}
</script>

<style lang="css">
</style>
