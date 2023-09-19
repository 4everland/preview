<style>
svg.map {
  min-height: 100vh;
}
</style>

<template>
  <main>
    <svg ref="svg" class="w100p map"></svg>
  </main>
</template>

<script>
import { debounce } from '../../utils/helper'
import { Transformer } from 'markmap-lib'
import { Markmap } from 'markmap-view'

const transformer = new Transformer()

export default {
  computed: {
    src() {
      return this.$route.query.src
    },
  },
  data() {},
  mounted() {
    this.mm = Markmap.create(this.$refs.svg)
    this.getMap()
    window.onresize = () => {
      debounce(() => {
        this.setMap()
      }, 200)
    }
  },
  methods: {
    async getMap() {
      if (!this.src) return
      try {
        const res = await fetch(this.src)
        this.text = await res.text()
        this.setMap()
      } catch (error) {
        console.log(error)
      }
    },
    setMap() {
      console.log('set map')
      const { root } = transformer.transform(this.text)
      this.mm.setData(root)
      this.mm.fit()
    },
  },
}
</script>