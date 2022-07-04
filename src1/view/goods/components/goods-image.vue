<script lang="ts" setup name="GoodsImage">
import { ref, computed } from 'vue'
import { useMouseInElement } from '@vueuse/core'
const target = ref(null)

const { elementX, elementY, isOutside } = useMouseInElement(target)

const position = computed(() => {
  let top = elementY.value - 100
  let left = elementX.value - 100
  if (left <= 0) {
    left = 0
  }

  if (top <= 0) {
    top = 0
  }
  if (top >= 200) {
    top = 200
  }
  if (left >= 200) {
    left = 200
  }

  return {
    top,
    left,
  }
})
defineProps<{
  images: string[]
}>()
// 默认高亮的下标
let active = ref(0)
</script>
<template>
  <div class="goods-image">
    <div
      class="large"
      v-show="!isOutside"
      :style="{ backgroundImage: `url(${images[active]})` ,
      backgroundPosition: ` -${position.left *2}px -${position.top *2}px` }"
    ></div>
    <div class="middle" ref="target">
      <img :src="images[active]" alt="" />
      <div
        class="layer"
        v-show="!isOutside"
        :style="{ 
        top: position.top + 'px',
        left:  position.left + 'px',
      }"
      ></div>
    </div>
    <ul class="small">
      <li
        v-for="(item, index) in images"
        :key="item"
        :class="{ active: index === active }"
        @mouseenter="active = index"
      >
        <img :src="item" alt="" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="less">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;
  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }
  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
    position: relative;
    .layer {
      position: absolute;
      width: 200px;
      height: 200px;
      background: rgba(0, 0, 0, 0.2);
      left: 0;
      top: 0;
      position: absolute;
    }
  }
  .small {
    width: 80px;
    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;
      &:hover,
      &.active {
        border: 2px solid @xtxColor;
      }
    }
  }
}
</style>
