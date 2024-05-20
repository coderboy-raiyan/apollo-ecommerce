import { Router } from 'express';
import ProductRoutes from '../modules/Product/product.route';
import UserRoutes from '../modules/User/user.route';

const router = Router();

const routers = [
    {
        path: '/users',
        route: UserRoutes,
    },
    {
        path: '/products',
        route: ProductRoutes,
    },
];

routers.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
