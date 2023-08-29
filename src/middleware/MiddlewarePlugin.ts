import nextMiddleware from './next-middleware'
import { Router } from 'vue-router'
import { App } from 'vue'

export default {
  install: (app: App, router: Router) => {
    // console.log('Installing MiddlewarePlugin')
    router.beforeEach((to, from) => {
      nextMiddleware(from, to, router)
    })
  }
}
