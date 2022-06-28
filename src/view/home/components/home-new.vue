<template>
  <div class="home-new" ref="homeNewRef">
    <HomePanel title="新鲜好物" subtitle="新鲜出炉 品质靠谱">
      <template #more>
        <XtxMore to="/goods"></XtxMore>
      </template>
      <template #body>
        <HomeGoods :goods="home.newGoods">
          <template v-slot="{ row }">
            {{ row.price }}
          </template>
        </HomeGoods>
        
      </template>
    </HomePanel>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import HomePanel from './home-panel.vue'
import HomeGoods from './home-goods.vue'
import useStore from '@/store'
// import {useIntersectionObserver} from '@vueuse/core'
import { useLazyData } from '@/hooks'

const { home } = useStore()

const homeNewRef = useLazyData(function () {
  home.getNewGoods()
})
</script>

<style scoped lang="less">
</style>
