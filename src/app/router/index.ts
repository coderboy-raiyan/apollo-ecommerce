import { Router } from 'express';
import UserRoutes from '../modules/User/user.route';

const router = Router();

const routers = [
    {
        path: '/users',
        route: UserRoutes,
    },
];

routers.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
