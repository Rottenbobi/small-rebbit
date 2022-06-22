<template>
  <h1>
    你
  </h1>
</template>

<script lang="ts" setup>
import request from '@/utils/request'
const test = async () => {
  const res = await request.get('/home/index')
  console.log(res)
}
test()
</script>
 
 <style lang="less" scoped>

 h1 {
  background-color: @warnColor;
  .hoverShadow();
}
 </style>