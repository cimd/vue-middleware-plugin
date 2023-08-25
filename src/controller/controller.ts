
export interface route {
  query?: any,
  meta?: {
    name: string
    title: string,
    middleware?: any | Array<any>,
    controller?: [any, string],
  }
  params?: {
    id: string | undefined
  },
}

interface navigation {
  to: route,
  from: route,
  // next: route,
  route: any
}

export let request: any
export let model: any
export let params: any
export const useController = () => {
  return { request, model, params }
}

export const requestsInjection = async (navigation: navigation) => {
  request = navigation.to.query

  if (!navigation.to.meta.controller) throw new Error('Controller not defined')
  if (!navigation.to.meta.controller.length) throw new Error('Controller/Method not defined')
  if (!navigation.to.params) new Error('No Params found')
  params = serializeParams(navigation.to.params)

  model = new (navigation.to.meta.controller[ 0 ])()
  const method = navigation.to.meta.controller[ 1 ]
  await model[ method ](params.id)

  return
}

const serializeParams = (params: any) => {
  Object.keys(params).forEach(key => {
    if (params[ key ]) {
      params[ key ] = Number(params[ key ])
    }
    else if (params[ key ] === '') {
      params[ key ] = null
    }
  })

  return params
}
