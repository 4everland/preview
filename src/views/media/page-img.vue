<style>
.preview-img {
  display: grid;
  place-items: center;
  min-height: 100vh;
}
.preview-img img {
  min-width: 50px;
  max-width: 90%;
  max-height: 95vh;
  background: url(/img/bg-trans.svg);
  background-size: 30px;
  transition: all ease 200ms;
}
.big img,
.preview-img img:hover {
  box-shadow: 0 0 3px #666;
  max-height: auto;
  min-width: 200px;
  max-width: 100%;
}
.meta-txt {
  margin-top: 3px;
  font-size: 13px;
  color: #99a9bf;
}
</style>

<script setup>
import IconLoading from '../../components/icon-loading.vue'
</script>

<template>
  <div
    class="preview-img"
    :class="{
      big: isBig,
    }"
    @click="isBig = !isBig"
  >
    <div class="pos-center" v-if="loading">
      <icon-loading></icon-loading>
    </div>
    <div class="ta-c">
      <img ref="img" :src="src" :alt="title" @load="onLoad" @error="onEnd" />
      <div class="meta-txt" title="width(px) × height(px)">
        {{ metaTxt }}
      </div>
    </div>
  </div>
</template>

<script>
import mixin from '../home-mixin'

export default {
  mixins: [mixin],
  data() {
    return {
      loading: true,
      isBig: false,
      metaTxt: '',
    }
  },
  methods: {
    onLoad() {
      this.loading = false
      const el = this.$refs.img
      this.metaTxt = el.naturalWidth + ' × ' + el.naturalHeight
    },
    onEnd() {
      this.loading = false
    },
  },
}
</script>