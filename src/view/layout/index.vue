<template>
  <AppTopnav></AppTopnav>
  <AppHeader></AppHeader>
  <AppHeaderSticky></AppHeaderSticky>
  <div style="height: 1000px">
    <router-view></router-view>
  </div>

  <AppFooter></AppFooter>
</template>

<script lang="ts" setup name="Layout">
import AppTopnav from './components/app-top-nav.vue'
import AppHeader from './components/app-header.vue'
import AppFooter from './components/app-footer.vue'
import AppHeaderSticky from './components/app-header-sticky.vue'
import { ref, reactive } from 'vue'
</script>

<style scoped></style>
