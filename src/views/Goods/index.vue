<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import useStore from '@/store'
import { storeToRefs } from 'pinia'
import GoodsImage from './components/goods-image.vue'
import GoodsSales from './components/goods-sales.vue'
import GoodsName from './components/goods-name.vue'
import GoodsSku from './components/goods-sku.vue'
import GoodsDetail from './components/goods-detail.vue'
import GoodsHot from './components/goods-hot.vue'
// import { Sku } from '@/src/types/goods'
const route = useRoute()
const { goodsStore } = useStore()
const { goods } = storeToRefs(goodsStore)

goodsStore.getGoodsInfo(route.params.goodsId as string)

const changeSku = (skuId: string) => {
  // console.log(skuId)
  const sku = goods.value.skus.find((item) => item.id === skuId)
  if (sku) {
    goods.value.inventory = sku.inventory
    goods.value.price = sku.price
    goods.value.oldPrice = sku.oldPrice
  }
}
const count = ref(1)
const min = ref(1)
const max = ref(10)
</script>
<template>
  <div class="goods-container">
    <div class="container" v-if="goods.name">
      <!-- 面包屑 -->
      <xtx-bread>
        <xtx-bread-item>首页</xtx-bread-item>
        <xtx-bread-item>{{ goods.categories[1].name }}</xtx-bread-item>
        <xtx-bread-item>{{ goods.categories[0].name }}</xtx-bread-item>
        <xtx-bread-item>{{ goods.name }}</xtx-bread-item>
      </xtx-bread>

      <!-- 商品信息 -->
      <div class="goods-info">
        <div class="media">
          <GoodsImage :goodsImg="goods.mainPictures"></GoodsImage>
          <GoodsSales />
        </div>
        <div class="spec">
          <GoodsName :goods="goods" />
          <GoodsSku
            :goods="goods"
            skuId="1369155864430120962"
            @changeSku="changeSku"
          />
          <XtxNumbox
            :isShowLabel="true"
            v-model:count="count"
            :min="min"
            :max="max"
          ></XtxNumbox>
          <XtxButton type="primary" style="margin-top: 20px">
            加入购物车
          </XtxButton>
        </div>
      </div>

      <div class="goods-footer">
        <div class="goods-article">
          <!-- 商品+评价 -->
          <div class="goods-tabs">
            <!-- 商品详情 -->
            <GoodsDetail :goods="goods" />
          </div>
        </div>
       
          <!-- 24热榜+专题推荐 -->
          <div class="goods-aside">
            <GoodsHot :type="1" />
            <GoodsHot :type="2" />
            <GoodsHot :type="3" />
          </div>
        
      </div>
    </div>
    <div v-else>加载中...</div>
  </div>
</template>
<style lang="less">
.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;
  .media {
    width: 580px;
    height: 600px;
    padding: 30px 50px;
  }
  .spec {
    flex: 1;
    padding: 30px 30px 30px 0;
  }
}
.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;
  .media {
    width: 580px;
    height: 600px;
    padding: 30px 50px;
  }
  .spec {
    flex: 1;
    padding: 30px 30px 30px 0;
  }
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
</style>
