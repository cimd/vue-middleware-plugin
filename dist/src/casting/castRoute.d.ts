import { RouteLocationNormalizedLoaded } from 'vue-router';
declare const castRoute: (config: {
    params: any;
    query: any;
}) => (route: RouteLocationNormalizedLoaded) => {
    query: import('vue-router').LocationQuery;
};
export default castRoute;
