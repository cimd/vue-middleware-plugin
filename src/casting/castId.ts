import type { RouteRecordRaw } from 'vue-router'

function castId(id: string | undefined) {
  return function(route: RouteRecordRaw) {
    if (id) {
      return {...route.params, id: parseInt(id) }
    }

    return route.params
  }
}

export default castId
