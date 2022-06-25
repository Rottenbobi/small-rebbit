<template>
 <div class="bgc">
    <XtxSkeleton
    bg="green"
    :width="100"
    :height="100"
    :animated="true"
    :fade="true"
    ></XtxSkeleton>
 </div>
</template>
 
<script lang='ts' setup>
import { ref,reactive } from 'vue'
</script>
 
<style scoped>
.bgc{
    width: 300px;
    height: 300px;
    backGround-color: #fff
}
</style>