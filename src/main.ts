import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import NProgress from 'nprogress'
import pinia from './store'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './style.css'
import 'uno.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: routes => setupLayouts(routes),
})

router.beforeEach((to, from) => {
  if (to.path !== from.path)
    NProgress.start()
})
router.afterEach(() => NProgress.done())

createApp(App).use(router).use(pinia).mount('#app')
