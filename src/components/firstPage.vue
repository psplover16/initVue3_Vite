<template>
  <div class="
    bg-firstPage
    w-full
    h-full
    ">
    <topBar />
    top
  </div>
</template>



<script setup>
import topBar from '@/components/topBar.vue'
import { ref } from 'vue'

defineProps({
  msg: String,
})
</script>


<style lang="scss" scoped></style>
