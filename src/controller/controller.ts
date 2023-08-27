import { reactive } from 'vue'

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
  route: any
}

export let request: any = reactive({})
export let model: any = reactive({})
export let params: any = reactive({})
export const useController = () => {
  return { request, model, params }
}
export const useModel = () => {
  return model
}
// export const useRequest = () => {
//   return request
// }

export const requestsInjection = async (navigation: navigation) => {
  request = navigation.to.query
  // console.log('request: ', request)

  if (!navigation.to.meta.controller) throw new Error('Controller not defined')
  if (!navigation.to.meta.controller.length) throw new Error('Controller/Method not defined')
  if (!navigation.to.params) new Error('No Params found')
  params = serializeParams(navigation.to.params)
  // console.log('Serialized Params: ', params)

  model = new (navigation.to.meta.controller[ 0 ])()
  const method = navigation.to.meta.controller[ 1 ]
  await model[ method ](params.id)
  console.log(model.model.comments)

  return
}

function serializeParams(params: any) {
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
