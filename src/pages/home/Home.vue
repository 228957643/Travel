<template>
  <div :style="bgImg">
    <home-header></home-header>
    <home-index></home-index>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeIndex from './components/Index'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeIndex
  },
  data () {
    return {
      bgImg: this.GLOBAL.bgImg
    }
  }
}
</script>

<style>
</style>
