<script lang="ts" setup>
import useStore from '@/store'
import { useRoute } from 'vue-router'
import GoodsImage from './components/goods-image.vue'
import GoodsSales from './components/goods-sales.vue'
import GoodsName from './components/goods-name.vue'
import GoodsSku from './components/goods-sku.vue'

const route = useRoute()
const { good } = useStore()
good.getGoodsInfo(route.params.id as string)
</script>
<template>
  <div class="xtx-goods-page">
    <div class="container">
      <!-- 面包屑 -->
      <XtxBread v-if="good.goods.categories">
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem to="/">{{ good.goods.categories[1].name }}</XtxBreadItem>
        <XtxBreadItem to="/">{{ good.goods.categories[0].name }}</XtxBreadItem>
        <XtxBreadItem to="/">{{ good.goods.name }}</XtxBreadItem>
      </XtxBread>
      <!-- 商品信息 -->
      <div class="goods-info" v-if="good.goods.name">
        <div class="media" v-if="good.goods.mainPictures">
          <GoodsImage :images="good.goods.mainPictures"></GoodsImage>
          <GoodsSales></GoodsSales>
        </div>
        <div class="spec">
          <GoodsName :goods="good.goods" />
          <GoodsSku :goods="good.goods" />
        </div>
      </div>
      <!-- 商品详情 -->
      <div class="goods-footer">
        <div class="goods-article">
          <!-- 商品+评价 -->
          <div class="goods-tabs"></div>
        </div>
        <!-- 24热榜+专题推荐 -->
        <div class="goods-aside"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;
  justify-content: space-around;
}
.goods-footer {
  display: flex;
  margin-top: 20px;
  .goods-article {
    width: 940px;
    margin-right: 20px;
  }
  .goods-aside {
    width: 280px;
    min-height: 1000px;
  }
}
.goods-tabs {
  min-height: 600px;
  background: #fff;
}
.goods-warn {
  min-height: 600px;
  background: #fff;
  margin-top: 20px;
}
</style>
