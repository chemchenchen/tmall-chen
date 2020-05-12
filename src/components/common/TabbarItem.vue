<template>
  <div id="tabbaritem" @click="clickTabbarItem">
    <div class="tabbarimg" v-show="isActive"><slot name="imgActive"></slot></div>
    <div class="tabbarimg" v-show="!isActive"><slot name="imgDeactive"></slot></div>
    <div  class="tabbartext" :class= "{activeText: isActive}"><slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: '',
    components: {},
    props: {
      link: String
    },
    data() {
      return {
      }
    },
    computed: {
      isActive() {
        return this.$route.path == this.link
      }
    },
    methods: {
      clickTabbarItem() {
        this.$router.replace(this.link)
      }
    }
  }
</script>

<style scoped>
  #tabbaritem {
    flex: 1;
  }

  .tabbarimg img{
    width: 24px;
    margin-top: 2px;
  }

  .tabbartext {
    font-size: 15px;
  }
  
  .activeText{
    color: red;
  }
</style>