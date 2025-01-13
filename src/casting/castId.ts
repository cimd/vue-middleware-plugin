import type { RouteLocationNormalizedLoaded } from 'vue-router'

export default function castId() {
  return (route: RouteLocationNormalizedLoaded) => {
    if (route.params?.id) {
      route.params.id = parseInt(route.params.id as string)
    }
    
    return route.params
  }
}