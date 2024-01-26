export default {
  data() {
    return {
      inputSrc: '',
    }
  },
  computed: {
    src() {
      return this.$route.query.src || this.inputSrc
    },
    name() {
      return this.src || this.$route.query.name
    },
    title() {
      const mat = /\/([^\/]+)$/.exec(this.name)
      if (mat) return mat[1]
      return this.name
    },
    type() {
      let { type } = this.$route.query
      if (type) return type
      return this.getType(this.src)
    },
    goPath() {
      return this.getToPath(this.type)
    },
  },
  methods: {
    getType(src) {
      const mat = /\.(\w+)$/.exec(src) || []
      return mat[1]
    },
    getToPath(subfix) {
      if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'ico', 'webp'].includes(subfix)) {
        return 'img'
      }
      if (['mp3', 'wav', 'ogg'].includes(subfix)) {
        return 'audio'
      }
      if (['mp4', 'mov', 'webm', 'mpg', 'mpeg'].includes(subfix)) {
        return 'video'
      }
      if (['m3u8', 'hls'].includes(subfix)) {
        return 'player'
      }
      if (['docx', 'pdf', 'xlsx'].includes(subfix)) {
        return subfix
      }
      if (['mmd', 'mermaid'].includes(subfix)) {
        return 'mermaid'
      }
      if (
        [
          'txt',
          'js',
          'css',
          'html',
          'vue',
          'bash',
          'json',
          'c',
          'cpp',
          'go',
          'ini',
          'java',
          'kotlin',
          'less',
          'lua',
          'xml',
          'md',
          'perl',
          'php',
          'py',
          'ruby',
          'rust',
          'scss',
          'sh',
          'sql',
          'swift',
          'ts',
          'yaml',
        ].includes(subfix)
      ) {
        return 'code'
      }
      return ''
    },
  },
}
