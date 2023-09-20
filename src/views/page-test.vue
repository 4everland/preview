<template>
  <div style="padding: 20px">
    <div v-for="it in list" :key="it.title">
      <h2>{{ it.title }}</h2>
      <p v-for="sub in it.subs" :key="sub">
        <a target="_blank" :href="'/?src=https://qs3.4everland.store/test.' + sub"
          >test.{{ sub }}</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: 'Text',
          subs: ['html', 'js', 'css', 'json'],
        },
        {
          title: 'Markdown like',
          subs: ['mmd', 'mermaid'],
        },
        {
          title: 'Office',
          subs: ['docx', 'xlsx', 'pdf'],
        },
        {
          title: 'Img',
          subs: ['png', 'gif', 'jpg', 'svg'],
        },
        {
          title: 'Audio',
          subs: ['mp3'],
        },
        {
          title: 'Video',
          subs: ['mp4', 'webm'],
        },
        {
          title: 'Player',
          subs: ['m3u8'],
        },
      ],
    }
  },
}
</script>