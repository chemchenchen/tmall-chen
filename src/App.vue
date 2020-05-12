<template>
  <div id="app">
    <main-tabbar></main-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import mainTabbar from 'components/content/mainTabbar'
  export default {
    components: {
      mainTabbar
    }
  }

</script>

<style scoped>
  @import 'css/basecss.css';
  #div {
    background-color: pink;
  }

</style>>
  


