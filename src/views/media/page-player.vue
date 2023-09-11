<script setup>
import 'vue3-video-play/dist/style.css'
import VideoPlay from 'vue3-video-play'
</script>

<template>
  <div class="main">
    <div class="w100p">
      <video-play
        width="100%"
        :src="src"
        :type="videoType"
        :ligthOff="ligthOff"
        :controlBtns="controlBtns"
        @error="onError"
        @progress="onProgress"
        @lightOffChange="onLightOff"
      />
    </div>
  </div>
</template>

<script>
import mixin from '../home-mixin'

export default {
  mixins: [mixin],
  computed: {
    videoType() {
      if (['m3u8', 'hls'].includes(this.type)) return this.type
      return
    },
  },
  data() {
    const btns = ['audioTrack', 'speedRate', 'volume', 'setting', 'pip', 'pageFullScreen']
    if (window.self == window.top) {
      btns.push('fullScreen')
    }
    return {
      ligthOff: localStorage.ligthOff == 1,
      controlBtns: btns,
    }
  },
  methods: {
    onLightOff(e) {
      this.ligthOff = e
      localStorage.ligthOff = e ? 1 : 0
    },
    onProgress(e) {
      // console.log('load p', e)
    },
    onError(err) {
      console.log(err)
    },
  },
}
</script>

<style>
.main {
  max-width: 900px;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: auto;
}
.d-player-state .icon-play {
  position: relative;
  left: 5px;
  font-size: 48px !important;
}
</style>