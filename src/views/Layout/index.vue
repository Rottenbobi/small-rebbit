<script setup lang="ts" name="Layout">
import AppTopNav from './components/app-top-nav.vue'
import AppHeader from './components/app-header.vue'
import AppFooter from './components/app-footer.vue'
import AppHeaderSticky from './components/app-header-sticky.vue'
</script>
<template>
  <app-top-nav />
  <app-header />
  <AppHeaderSticky />
  <router-view />
  <app-footer />
</template>
<style></style>
