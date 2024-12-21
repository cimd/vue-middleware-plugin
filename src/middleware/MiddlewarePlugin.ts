import nextMiddleware from '@/middleware/next-middleware'
import { Router } from 'vue-router'
import { App } from 'vue'

export default {
  install: (app: App, router: Router) => {
    router.beforeEach((to, from) => {
      nextMiddleware(from, to, router)
    })
  }
}
