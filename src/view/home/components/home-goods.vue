<template>
 <transition>
  <ul class="goods-list" v-if="goods.length > 0">
    <li v-for="item in goods" :key="item.id" >
      <RouterLink to="/">
        <img
          :src="item.picture"
          alt=""
        />
        <p class="name ellipsis">{{item.name  }}</p>
        <p class="price">
           <slot :row="item"></slot>
        </p>
      </RouterLink>
    </li>
  </ul>
   <div class="home-skeleton" v-else>
          <div
            class="item"
            v-for="i in 4"
            :key="i"
            :style="{ backgroundColor: '#f0f9f4' }"
          >
            <XtxSkeleton bg="#e4e4e4" :width="306" :height="306" />
            <XtxSkeleton bg="#e4e4e4" :width="160" :height="24" />
            <XtxSkeleton bg="#e4e4e4" :width="120" :height="24" />
          </div>
        </div>
  </transition>
</template>

<script lang="ts" setup>
import { IhomeHot, IhomeNews } from '@/Dts/categroy';

defineProps<
 {goods:IhomeNews[]}
>()
</script>

<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color: @priceColor;
    }
  }
}
</style>

<style scoped lang="less">
.home-skeleton {
  width: 1240px;
  height: 406px;
  display: flex;
  justify-content: space-between;
  .item {
    width: 306px;
    .xtx-skeleton ~ .xtx-skeleton {
      display: block;
      margin: 16px auto 0;
    }
  }
}
</style>