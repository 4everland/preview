<template>
  <RouterView />
</template>

<script>
import mixin from './views/home-mixin'

export default {
  mixins: [mixin],
  watch: {
    $route(obj) {
      console.log(obj.path)
      // if (this.type && obj.path != '/' + this.type) {
      //   this.$router.replace('/?src=' + this.src)
      // }
      if (this.title) {
        document.title = this.title
      }
    },
  },
}
</script>