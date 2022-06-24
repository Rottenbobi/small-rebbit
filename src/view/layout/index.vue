<template>  

  <AppTopnav></AppTopnav>
<AppHeader></AppHeader>

<router-view></router-view>
<AppFooter></AppFooter>



</template>
 
<script lang='ts' setup name="Layout">
import AppTopnav from './components/app-top-nav.vue'
import AppHeader from './components/app-header.vue'
import AppFooter from './components/app-footer.vue'

import { ref,reactive } from 'vue'

</script>
 
<style scoped>

</style>