<template>
  <div class="pos-center">
    <audio :src="src" controls></audio>
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