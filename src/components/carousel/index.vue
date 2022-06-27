<script lang="ts" setup name="XtxCarousel">
import { ref } from 'vue'
import { Ibanner } from '@/Dts/categroy'

const {
  banner,
  duration = 2000,
  autoplay = false,
} = defineProps<{
  banner: Ibanner[]
  duration?: number
  autoplay: boolean
}>()
let active = ref(0)
let setId: number | null = null
// 下一张
const next = () => {
  active.value = (active.value + 1) % banner.length
}
// 上一张
const prev = () => {
  active.value = (active.value - 1 + banner.length) % banner.length
}
const play = () => {
  if (!autoplay) return
  setId = window.setInterval(() => {
    next()
  }, duration)
}
const stop = () => {
  if (setId) {
    clearInterval(setId)
    setId = null
  }
}
play()
</script>

<template>
  <div class="xtx-carousel" @mouseenter="stop" @mouseleave="play">
    <ul class="carousel-body">
      <li
        v-for="(item, index) in banner"
        :key="item.id"
        :class="{ fade: index === active }"
        class="carousel-item"
      >
        <RouterLink to="/">
          <img :src="item.imgUrl" alt="" />
        </RouterLink>
      </li>
    </ul>
    <a href="javascript:;" class="carousel-btn prev" @click="prev">
      <i class="iconfont icon-angle-left"></i>
    </a>
    <a href="javascript:;" class="carousel-btn next" @click="next">
      <i class="iconfont icon-angle-right"></i>
    </a>
    <div class="carousel-indicator">
      <span
        v-for="(item, index) in banner"
        :key="item.id"
        :class="{ active: index === active }"
      ></span>
    </div>
  </div>
</template>

<style scoped lang="less">
.xtx-carousel {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background: #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;
      &.prev {
        left: 20px;
        margin-left: 235px;
      }
      &.next {
        right: 20px;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>
