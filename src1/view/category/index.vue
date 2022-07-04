<template>
  <div class="category-content">
    <XtxBread separator="/">
      <XtxBreadItem>首页</XtxBreadItem>
      <XtxBreadItem>{{categroy.topCategory.name}}</XtxBreadItem>
    </XtxBread>

     <XtxCarousel :banner="home.bannerList" :autoplay="true" style="height:500px"></XtxCarousel>
      <CategorySub
     
      ></CategorySub
      >
<!-- 分类对应商品 -->
<CategorySubGoods  v-for="i in categroy.topCategory.children" :key="i.id"
      :subCategory="(i as unknown as ITopCategory)"/>
 
  </div>
</template>

<script lang="ts" setup>
import { ref,reactive,watchEffect } from 'vue'
import { ITopCategory } from '@/Dts/categroy'
import useStore from '@/store/index'
import {useRoute} from 'vue-router'
import CategorySub from './components/category-sub.vue'
import CategorySubGoods from './components/category-goods.vue'


const {categroy} = useStore()
const {home} = useStore()

const route = useRoute()

// watch(()=>route.params.id,(val)=>{
// categroy.getTopCategory(val as string)
// },{
//     immediate:true
// })
watchEffect(()=>{
    if(!route.params.id) return
    categroy.getTopCategory(route.params.id as string)
})
</script>

<style scoped>
.category-content {
  width: 1240px;
  margin: auto
}
</style>
