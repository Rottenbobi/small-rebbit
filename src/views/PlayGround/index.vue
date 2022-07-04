<script setup lang="ts">
import { ref } from 'vue'
const showDiv = ref(false)
const showDiv2 = ref(false)
</script>
<template>
  <button @click="showDiv = !showDiv">切换div</button>
  <!-- 加进入动画/离开动画 -->
  <!-- 1. 使用transition标签进行包裹 内置组件 keep-alive -->
  <transition>
    <div v-if="showDiv"></div>
  </transition>

  <button @click="showDiv2 = !showDiv2">切换div</button>
  <!-- 加进入动画/离开动画 -->
  <!-- 1. 使用transition标签进行包裹 内置组件 keep-alive -->
  <transition name="fade">
    <div v-if="showDiv2"></div>
  </transition>
</template>
<style scoped>
div {
  width: 100px;
  height: 100px;
  background-color: hotpink;
}
/* v-enter */
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s linear;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}

.fade-enter-from,
.fade-leave-to {
  width: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s linear;
}

.fade-enter-to,
.fade-leave-from {
  width: 100px;
}
</style>
