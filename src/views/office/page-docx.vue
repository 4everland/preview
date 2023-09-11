<script setup>
import VueOfficeDocx from '@vue-office/docx'
</script>

<template>
  <vue-office-docx :src="src" />
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
main .docx-wrapper {
  padding: 20px;
}
section.docx {
  width: auto !important;
  max-width: 900px;
}
@media screen and (max-width: 600px) {
  section.docx {
    padding: 20px !important;
  }
}
</style>
