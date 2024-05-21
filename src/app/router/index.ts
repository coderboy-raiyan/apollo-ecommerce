import { Router } from 'express';
import OrderRoutes from '../modules/Order/order.route';
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
    {
        path: '/orders',
        route: OrderRoutes,
    },
];

routers.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
