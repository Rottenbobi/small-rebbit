<template>
   <div>
    <div style="height:2000px"></div>
    <img ref="target" src="" alt="" v-lazy="src" />
    <img ref="target" src="" alt="" v-lazy="src1">

   </div>
</template>
 
<script lang='ts' setup>
import { ref,reactive } from 'vue'
import {useIntersectionObserver} from '@vueuse/core'
const src = 'https://ts3.cn.mm.bing.net/th?id=OIP-C.Zxtf2X2EddV-g7hKyBhilAHaQB&w=161&h=350&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
const src1 = 'https://ts3.cn.mm.bing.net/th?id=2'

</script>
 
<style scoped>

</style>