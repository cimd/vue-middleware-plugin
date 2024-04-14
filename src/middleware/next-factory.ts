// Creates a `nextMiddleware()` function which not only
// runs the default `next()` callback but also triggers
// the subsequent Middleware function.

import { route } from '@/controller/controller'
import { Router } from 'vue-router'

const nextFactory = (
  context: { from?: route; to?: route; router?: Router; next?: any }, middleware: any|any[],
  index: number
) => {
  const subsequentMiddleware = middleware[ index ]
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware) return context.next

  return (..._parameters: any[]) => {
    // Run the default Vue Router `next()` callback first.
    // context.next(...parameters)
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    nextFactory(context, middleware, index + 1)
    subsequentMiddleware({ ...context })
  }
}

export default nextFactory
