import { Router } from 'express';

const router = Router();

const routers = [];

routers.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
