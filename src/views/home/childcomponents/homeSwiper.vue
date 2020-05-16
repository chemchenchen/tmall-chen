<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, index) in swiperdate" :key="index">
        <a href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: '',
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      swiperdate: {
        type: Array
      }
    },
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
</style>