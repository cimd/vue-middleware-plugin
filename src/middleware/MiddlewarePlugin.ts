import nextMiddleware from './next-middleware'
import { Router } from 'vue-router'

export default {
  install: (app: any, router: Router) => {
    // console.log('Installing MiddlewarePlugin')
    router.beforeEach((to, from) => {
      nextMiddleware(from, to, router)
    })
  }
}
