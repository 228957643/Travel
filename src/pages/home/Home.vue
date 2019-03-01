<template>
  <div :style="bodyStyle">
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
      bodyStyle: {
        background: "url('static/images/common/bg-img.jpg') no-repeat center top"
      }
    }
  }
}
</script>

<style>
</style>
