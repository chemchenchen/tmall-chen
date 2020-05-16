<template>
  <div>
    <home-swiper :swiperdate="banners.list"></home-swiper>
  </div>
</template>

<script>
  import {getHomeDate} from 'network/homedate.js'
  import homeSwiper from './childcomponents/homeSwiper'

  export default {
    name: '',
    components: {
      homeSwiper
    },
    data() {
      return {
        banners: []
      }
    },
    created() {
        this.getHomeMultiDate()
    },
    methods: {
      getHomeMultiDate() {
        getHomeDate().then(res => {
          console.log(res); 
          this.banners = res.banner
          console.log(this.banners);
        })
      }
    }
  }
</script>

<style scoped>
</style>