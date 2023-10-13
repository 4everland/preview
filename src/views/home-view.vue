
<script setup>
import IconFile from '../components/icon-file.vue'
import IconLoading from '../components/icon-loading.vue'
</script>

<template>
  <main>
    <div class="pos-center">
      <div class="empty" v-if="!goPath">
        <div>
          <icon-file></icon-file>
        </div>
        <div v-if="src">
          <a :href="src" target="_blank" class="download-btn">
            <div class="al-c">
              <img src="/imgs/open.svg" width="16" />
              <span>{{ title }}</span>
            </div>
          </a>
        </div>
        <div v-else>
          <input
            v-model.trim="inputVal"
            @keyup.enter="onEnterSrc"
            type="text"
            placeholder="Enter a link to preview"
            class="src-input"
          />
        </div>
      </div>
      <div v-else class="ta-c">
        <icon-loading></icon-loading>
      </div>
    </div>
  </main>
</template>

<script>
import mixin from './home-mixin'

export default {
  mixins: [mixin],
  data() {
    return {
      inputVal: '',
    }
  },
  created() {
    // console.log(this.type)
    if (this.goPath) {
      this.$router.replace(`/${this.goPath}?src=` + encodeURIComponent(this.src))
    }
  },
  methods: {
    async onEnterSrc() {
      this.inputSrc = this.inputVal
      await this.$router.push(`/${this.goPath}?src=` + encodeURIComponent(this.src))
      this.inputVal = ''
      this.inputSrc = ''
    },
  },
}
</script>


<style>
.empty {
  padding: 20px;
  text-align: center;
  color: #888;
}
.download-btn {
  display: inline-block;
  padding: 10px 15px;
  text-decoration: none;
  color: #8a8a8a;
  font-size: 16px;
}
.download-btn span {
  margin-left: 8px;
}
.download-btn:hover {
  opacity: 0.9;
  text-decoration: underline;
}
.src-input {
  margin-top: 15px;
  padding: 10px;
  width: 300px;
  max-width: 80vw;
  outline: none;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 10px;
}
input::placeholder {
  color: #aaa;
}
</style>