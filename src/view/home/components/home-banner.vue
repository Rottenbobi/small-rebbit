<script lang="ts" setup>
import useStore from '@/store/index'
const {home}  = useStore()
home.getbannerList()
</script>
<template>
  <div class="home-banner">
    <!-- 轮播图 -->
    <XtxCarousel :banner="home.bannerList" :autoplay="true"></XtxCarousel>
  </div>
</template>

<style scoped lang="less">
  .home-banner {
    width: 1240px;
    height: 500px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 98;
    background-color: pink;
    /deep/.prev{
      margin-left: 235px;
    }
  }
</style>