<template>
  <div class="home-hot">
    <homePanel title="人气推荐" subtitle="人气爆款 火速来抢">
      <template #body>
        <homeGoods :goods="goods">
        <template v-slot="{row}">
        <span style="color:#999">{{row.desc}}</span>
        </template>
        </homeGoods>
      </template>
    </homePanel>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import homePanel from './home-panel.vue'
import useStore from '@/store'
import homeGoods from './home-goods.vue'
const { home } = useStore()
home.getHotGoods()
const goods = computed(() => {
  return home.hotGoods.map((item) => {
    return {
      desc: item.alt,
      discount: null,
      id: item.id,
      name: item.title,
      orderNum: 0,
      picture: item.picture,
      price: '',
    }
  })
})
</script>

<style scoped></style>
