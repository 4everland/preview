<style>
.vue-office-excel {
  background: #fff;
}
</style>

<script setup>
import VueOfficeExcel from '@vue-office/excel'
</script>

<template>
  <vue-office-excel :src="src" />
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