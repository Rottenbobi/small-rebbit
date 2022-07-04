<script setup lang="ts">
import useStore from '@/store'
import { useRoute } from 'vue-router'
import { watchEffect } from 'vue'
import CategorySub from './components/category-sub.vue'
import CategoryGoods from './components/category-goods.vue'
const { categroyStore, homeStore } = useStore()
homeStore.getBannerList()

const route = useRoute()
// watch(
//   () => route.params.id,
//   (val) => {
//     categroyStore.getTopCategory(val as string)
//   },
//   {
//     immediate: true
//   }
// )
watchEffect(() => {
  if (!route.params.id) return
  categroyStore.getTopCategory(route.params.id as string)
})
</script>
<template>
  <div class="category-container">
    <xtx-bread separator="/">
      <!-- 这是面包屑每一项组件 -->
      <xtx-bread-item to="/"> 首页 </xtx-bread-item>
      <xtx-bread-item> {{ categroyStore.topCategory.name }} </xtx-bread-item>
    </xtx-bread>
    <!-- 轮播图 -->
    <xtx-carousel :banners="homeStore.bannerList" style="height: 500px" />
    <!-- 一级分类的二级分类 -->
    <CategorySub />
    <!-- 分类商品 -->
    <CategoryGoods
      v-for="item in categroyStore.topCategory.children"
      :key="item.id"
      :subCategory="item"
    />
  </div>
</template>
<style scoped>
.category-container {
  width: 1240px;
  margin: auto;
}
</style>
