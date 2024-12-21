import { route } from '../controller/controller';
import { Router } from 'vue-router';
declare const nextMiddleware: (from: route, to: route, router: Router) => any;
export default nextMiddleware;
