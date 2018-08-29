<template lang="html">
  <div class="system">
    <my-input :text="'姓名'" :type="'text'" v-model="name"></my-input>
    <my-input :text="'电话'" :type="'text'" v-model="tel" :vtype="phone"></my-input>
    <my-input :text="'邮箱'" :type="'text'" v-model="emails" :vtype="email"></my-input>
  </div>
</template>

<script>
import myInput from '@/components/common/input/myInput'
export default {
  data() {
    return {
      name: null,
      tel: null,
      emails: null,
      phone: 'phone',
      email: 'email'
    }
  },
  components: {
    myInput
  }
}
</script>

<style lang="css">
</style>
