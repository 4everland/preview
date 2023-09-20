

<style>
.mermaid svg {
  display: block;
  margin: auto;
}
</style>

<script setup>
import IconLoading from '../../components/icon-loading.vue'
</script>

<template>
  <pre class="mermaid" ref="mmd"></pre>
  <div class="pos-center" v-if="loading">
    <icon-loading />
  </div>
</template>

<script>
import mermaid from 'mermaid'
// https://mermaid.live/edit

export default {
  computed: {
    src() {
      return this.$route.query.src
    },
  },
  data() {
    return {
      loading: false,
    }
  },
  mounted() {
    mermaid.initialize({
      securityLevel: 'loose',
    })
    this.getData()
  },
  methods: {
    async getData() {
      try {
        this.loading = true
        let text = ''
        if (this.src) {
          const res = await fetch(this.src)
          text = await res.text()
        }
        this.$refs.mmd.textContent = text
        mermaid.run()
        this.loading = false
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>