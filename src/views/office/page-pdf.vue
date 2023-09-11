<script setup>
import VueOfficePdf from '@vue-office/pdf'
</script>

<template>
  <vue-office-pdf :src="src" />
</template>

<script>
export default {
  computed: {
    src() {
      return this.$route.query.src
    },
  },
}
</script>

<style>
.vue-office-pdf-wrapper {
  padding: 20px !important;
}
.vue-office-pdf canvas {
  width: 100% !important;
  height: auto !important;
  max-width: 900px;
}
</style>