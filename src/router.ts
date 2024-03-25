import { createRouter, createWebHashHistory } from 'vue-router'

/**
 * if you want to use `web history` mode, plz refer to vue-router official doc
 * and modify your server config (like nginx, etc.)
 */

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/result',
      name: 'result',
      component: () => import('@/views/Result.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/views/404.vue'),
    },
  ],
})
