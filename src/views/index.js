import HomeView from './home-view.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/code',
    component: () => import('./text/page-code.vue'),
  },
  {
    path: '/img',
    component: () => import('./media/page-img.vue'),
  },
  {
    path: '/audio',
    component: () => import('./media/page-audio.vue'),
  },
  {
    path: '/video',
    component: () => import('./media/page-video.vue'),
  },
  {
    path: '/player',
    component: () => import('./media/page-player.vue'),
  },
  {
    path: '/docx',
    component: () => import('./office/page-docx.vue'),
  },
  {
    path: '/pdf',
    component: () => import('./office/page-pdf.vue'),
  },
  {
    path: '/xlsx',
    component: () => import('./office/page-xlsx.vue'),
  },
  {
    path: '/test',
    component: () => import('./page-test.vue'),
  },
]
