<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  import TabbarItem from 'components/common/TabbarItem'
  export default {
    name: '',
    components: {
      TabbarItem
    },
    data() {
      return {
      }
    },
  }
</script>

<style scoped>
  #tabbar {
    /* line-height: 49px; */
    height: 49px;
    display: flex;

    text-align: center;
    
    background-color: rgb(246, 246, 246);
    box-shadow: 0px -1px 1px rgba(150,150,150,.08);

    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
  }
</style>