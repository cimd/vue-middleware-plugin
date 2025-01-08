import { RouteRecordRaw } from 'vue-router';
declare function castId(id: string | undefined): (route: RouteRecordRaw) => any;
export default castId;
