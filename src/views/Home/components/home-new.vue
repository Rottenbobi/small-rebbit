<script setup lang="ts">
import HomePanel from './home-panel.vue'
import HomeGoods from './home-goods.vue'
import useStore from '@/store'
import { useLazyData } from '@/hooks'
const { homeStore } = useStore()
const homeNewRef = useLazyData(() => {
  // 监视的区域出现在可视区域内
  homeStore.getNewGoods()
})
</script>
<template>
  <div class="home-new" ref="homeNewRef">
    <HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
      <!-- 更多区域 -->
      <template #more>
        <xtx-more to="/goods" />
      </template>
      <!-- 主体 -->
      <HomeGoods :goods="homeStore.newGoods">
        <template v-slot="{ row }">
          {{ row.price }}
        </template>
      </HomeGoods>
    </HomePanel>
  </div>
</template>
<style></style>
