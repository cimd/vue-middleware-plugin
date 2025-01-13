import { RouteLocationNormalizedLoaded } from 'vue-router';
export default function castId(): (route: RouteLocationNormalizedLoaded) => import('vue-router').RouteParamsGeneric;
