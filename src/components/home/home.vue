<template>
  <div class="home">
    <my-header></my-header>
    <my-side></my-side>
    <div class="wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
import myHeader from '@/components/myHead/myHeader'
import mySide from '@/components/mySide/mySide'
export default {
  name: 'home',
  data () {
    return {

    }
  },
  components: {
    myHeader,
    mySide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
