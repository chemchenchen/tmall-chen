<template>
  <div id="mainTabbar">
    <tabbar>
      <TabbarItem link='/home'>
        <template v-slot:imgDeactive><img src="~assets/img/tabbar/home.svg" alt=""></template>
        <template v-slot:imgActive><img src="~assets/img/tabbar/home_active.svg" alt=""></template>
        <template v-slot:text><span>首页</span></template>
      </TabbarItem>
      <TabbarItem link='/category'>
        <template v-slot:imgDeactive><img src="~assets/img/tabbar/category.svg" alt=""></template>
        <template v-slot:imgActive><img src="~assets/img/tabbar/category_active.svg" alt=""></template>
        <template v-slot:text><span>分类</span></template>
      </TabbarItem>
      <TabbarItem link='/cart'>
        <template v-slot:imgDeactive><img src="~assets/img/tabbar/cart.svg" alt=""></template>
        <template v-slot:imgActive><img src="~assets/img/tabbar/cart_active.svg" alt=""></template>
        <template v-slot:text><span class="tabbartext">购物车</span></template>
      </TabbarItem>
      <TabbarItem link='/profile'>
        <template v-slot:imgDeactive><img src="~assets/img/tabbar/profile.svg" alt=""></template>
        <template v-slot:imgActive><img src="~assets/img/tabbar/profile_active.svg" alt=""></template>
        <template v-slot:text><span>我的</span></template>
      </TabbarItem>
    </tabbar>
  </div>
</template>

<script>
  import Tabbar from 'components/common/Tabbar'
  import TabbarItem from 'components/common/TabbarItem'

  export default {
    name: '',
    components: {
      Tabbar,
      TabbarItem
    },
    data() {
      return {
      }
    },
  }
</script>

<style scoped>
  
</style>