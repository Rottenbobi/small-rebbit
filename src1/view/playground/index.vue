<template>
<button @click="showDiv = true">showDiv</button>
<transition>
   <div v-if="showDiv" @click="showDiv = false">
   </div>
</transition>

</template>
 
<script lang='ts' setup>
import { ref,reactive } from 'vue'
const showDiv = ref(false)
</script>
 
<style scoped >
div{
  width: 100px;
  height: 100px;   
  background-color: green;
}
.v-enter-from , .v-leave-to {
  opacity: 0;
}
.v-enter-active , .v-leave-active {
 transition: all 0.8s linear
}

.v-enter-to , .v-leave-from {
   opacity: 1;
}
</style>