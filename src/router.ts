import { createRouter, createWebHashHistory } from 'vue-router'

/**
 * if you want to use `web history` mode, plz refer to the vue-router official doc
 * and modify your server config (like nginx, etc.)
 *
 * @see https://router.vuejs.org/zh/
 *
 * for example if you want to use `web history` mode, you can use the following code for nginx:
 *
 * ```nginx.conf
 * server {
 *   ...
 *   location / {
 *     try_files $uri $uri/ /index.html;
 *     ...
 *   }
 *   ...
 * }
 * ```
 */
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/Home.vue'),
    },
    {
      path: '/level',
      name: 'level',
      component: () => import('@/pages/Level.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/pages/404.vue'),
    },
    // more routes for extra features...
  ],
})
