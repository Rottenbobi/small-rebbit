<script lang="ts" setup name="HomeCategory">
import { ref } from 'vue'
import useStore from '@/store/index'
import * as cateD from '@/Dts/categroy'
const { categroy } = useStore()
let goodsarr = ref<cateD.IGoods[]>([])
let goodId = ref(-1)
const getCurrentGoods = (i: cateD.IGoods[], id: number) => {
  // console.log(i)
  goodsarr.value = i
  goodId.value = id
}
</script>
<template>
  <div class="home-category" @mouseleave="goodId = -1">
    <ul class="menu">
      <li
        @mouseenter="getCurrentGoods(i.goods, i.id)"
        v-for="i in categroy.List"
        :key="i.id"
        :class="{ active: i.id === goodId }"
      >
        <RouterLink to="/">{{ i.name }}</RouterLink>
        <!-- 真正渲染的内容 -->
        <template v-if="i.children">
          <RouterLink to="/" v-for="j in i.children.slice(0, 2)">{{
            j.name
          }}</RouterLink>
        </template>
        <template v-else>
          <XtxSkeleton
            bg="green"
            :width="30"
            :height="20"
            :animated="true"
          ></XtxSkeleton>
          <XtxSkeleton
            bg="green"
            :width="30"
            :height="20"
            :animated="true"
          ></XtxSkeleton>
        </template>
      </li>
    </ul>
    <!-- 弹层 -->
    <div class="layer">
      <h4>
        分类推荐
        <small>根据您的购买或浏览记录推荐</small>
      </h4>
      <ul>
        <li v-for="i in goodsarr" :key="i.id">
          <RouterLink to="/">
            <img :src="i.picture" alt="" />
            <div class="info">
              <p class="name ellipsis-2">
                {{ i.name }}
              </p>
              <p class="desc ellipsis">{{ i.desc }}</p>
              <p class="price">
                <i>¥</i>
                {{ i.price }}
              </p>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="less">
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;
  .menu {
    li {
      padding-left: 40px;
      height: 55px;
      line-height: 55px;
      &:hover,
      &.active {
        background: @xtxColor;
      }
      a {
        margin-right: 4px;
        color: #fff;
        &:first-child {
          font-size: 16px;
        }
      }
    }
  }
}
.home-category {
  // ....
  .layer {
    width: 990px;
    height: 500px;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    left: 250px;
    top: 0;
    display: none;
    padding: 0 15px;
    h4 {
      font-size: 20px;
      font-weight: normal;
      line-height: 80px;
      small {
        font-size: 16px;
        color: #666;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 310px;
        height: 120px;
        margin-right: 15px;
        margin-bottom: 15px;
        border: 1px solid #eee;
        border-radius: 4px;
        background: #fff;
        &:nth-child(3n) {
          margin-right: 0;
        }
        a {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          padding: 10px;
          &:hover {
            background: #e3f9f4;
          }
          img {
            width: 95px;
            height: 95px;
          }
          .info {
            padding-left: 10px;
            line-height: 24px;
            width: 190px;
            .name {
              font-size: 16px;
              color: #666;
            }
            .desc {
              color: #999;
            }
            .price {
              font-size: 22px;
              color: @priceColor;
              i {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
  &:hover {
    .layer {
      display: block;
    }
  }
}
</style>
