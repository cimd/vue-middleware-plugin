import type { RouteLocationNormalizedLoaded } from 'vue-router'

const castRoute = (config: { params: any, query: any }) => {
  return (route: RouteLocationNormalizedLoaded) => {
    for (const key in config.params) {
      route.params[ key ] = parseInt(route.params[ key ])
    }

    for (const key in config.query) {
      route.query[ key ] = parseInt(route.query[ key ])
    }

    return { ...route.params, query: route.query }
  }
}

export default castRoute
