import NProgress from 'nprogress'
import router from './router'
import App from './App.vue'
import './style.css'
import 'uno.css'

router.beforeEach((to, from) => {
  if (to.path !== from.path)
    NProgress.start()
})
router.afterEach(() => NProgress.done())

createApp(App).use(router).mount('#app')
