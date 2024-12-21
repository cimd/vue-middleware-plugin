import nextMiddleware from '@/middleware/next-middleware'
import type { Router } from 'vue-router'
import type { App } from 'vue'

export default {
  install: (app: App, router: Router) => {
    router.beforeEach((to, from) => {
      nextMiddleware(from, to, router)
    })
  }
}
