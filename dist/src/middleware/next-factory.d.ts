import { route } from '../controller/controller';
import { Router } from 'vue-router';
declare const nextFactory: (context: {
    from?: route;
    to?: route;
    router?: Router;
    next?: any;
}, middleware: any | any[], index: number) => any;
export default nextFactory;
