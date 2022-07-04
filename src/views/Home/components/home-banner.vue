<script lang="ts" setup>
import useStore from '@/store'
const { homeStore } = useStore()
homeStore.getBannerList()
</script>
<template>
  <div class="home-banner">
    <!-- 轮播图 -->
    <xtx-carousel
      :autoplay="true"
      :banners="homeStore.bannerList"
      :duration="3000"
    />
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
}
</style>
