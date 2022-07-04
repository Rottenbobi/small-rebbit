<script setup lang="ts">
import HomePanel from './home-panel.vue'
import useStore from '@/store/index'
import HomeGoods from './home-goods.vue'
import { computed } from 'vue'
import { useLazyData } from '@/hooks/index'
const { homeStore } = useStore()
const homeHotRef = useLazyData(() => {
  homeStore.getHotGoods()
})

const goods = computed(() => {
  return homeStore.hotGoods.map((item:any) => ({
    desc: item.alt,
    discount: null,
    id: item.id,
    name: item.title,
    orderNum: null,
    picture: item.picture,
    price: '0'
  }))
})
</script>
<template>
  <div class="home-hot" ref="homeHotRef">
    <HomePanel title="人气推荐" subTitle="人气爆款 不容错过">
      <HomeGoods :goods="goods">
        <template v-slot="{ row }">
          <span style="color: #999">{{ row.desc }}</span>
        </template>
      </HomeGoods>
    </HomePanel>
  </div>
</template>
<style>
.home-hot {
  overflow: hidden;
}
</style>
