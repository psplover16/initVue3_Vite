<template>
  <firstPage />
</template>



<script setup>
import firstPage from '@/components/firstPage.vue'
import secondPage from '@/components/secondPage.vue'
import footer from '@/components/footer.vue'


import { ref } from 'vue'

defineProps({
  msg: String,
})
</script>


<style lang="scss" scoped></style>