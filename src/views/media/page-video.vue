<style scoped>
video {
  display: block;
  max-height: 100vh;
}
</style>

<template>
  <div class="pos-center">
    <video :src="src" controls></video>
  </div>
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