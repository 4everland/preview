<script setup>
import IconLoading from '../../components/icon-loading.vue'
</script>

<template>
  <div class="outer">
    <div class="main">
      <div class="pos-center" v-if="loading">
        <icon-loading />
      </div>
      <pre ref="pre" class="break_word"><code ref="code"></code></pre>
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import 'highlight.js/styles/stackoverflow-light.css'
// import 'highlight.js/styles/vs.css'

export default {
  computed: {
    src() {
      return this.$route.query.src
    },
  },
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    this.getCode()
  },
  methods: {
    async getCode() {
      try {
        const res = await fetch(this.src)
        const text = await res.text()
        if (text.length > 1024 * 120) {
          throw new Error('too large to highlight')
        }
        if (/\.json$/.test(this.src)) {
          const res = hljs.highlight(text, {
            language: 'json',
          })
          this.$refs.code.innerHTML = res.value
          this.$refs.pre.style.padding = '30px 20px'
        } else {
          this.$refs.code.textContent = text
          hljs.highlightAll()
        }
        this.loading = false
      } catch (error) {
        console.log(error)
        this.$router.replace({
          path: '/',
          query: {
            ...this.$route.query,
            type: 'download',
          },
        })
      }
    },
  },
}
</script>

<style >
.outer {
  padding: 20px;
  background: #808080;
}
pre {
  margin: 0;
  font-size: 14px;
  tab-size: 4;
  line-height: 1.2;
  padding: 20px 10px;
}
pre.break_word {
  white-space: pre-wrap;
  tab-size: 2;
}
pre.break_word code {
  word-wrap: break-word;
}
.main {
  max-width: 900px;
  margin: 0 auto;
  box-shadow: 0 0 3px #666;
  min-height: calc(100vh - 40px);
}
.hljs,
.main {
  background: #fff;
}
</style>
