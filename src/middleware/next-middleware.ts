// Creates a `nextMiddleware()` function which not only
// runs the default `next()` callback but also triggers
// the subsequent Middleware function.
import { route } from '../controller/controller'
import nextFactory from './next-factory'
import { Router } from 'vue-router'

const nextMiddleware = (from: route, to: route, router: Router) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware]

    const context = {
      from,
      to,
      // next,
      router
    }
    const nextMiddleware = nextFactory(context, middleware, 1)

    return middleware[ 0 ]({ ...context, next: nextMiddleware })
  }
}

export default nextMiddleware
