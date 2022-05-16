import { Router } from 'express';
import authRoute from './authRoutes';
import productRoute from './productRoutes';
import sessionRoute from './cartRoutes';
import checkoutRoute from './checkoutRoutes';

const router = Router();

const routes = [
    {
        path: '/auth',
        route: authRoute,
    },
    {
        path: '/product',
        route: productRoute,
    },
    {
        path: '/cart',
        route: sessionRoute,
    },
    {
        path: '/checkout',
        route: checkoutRoute
    }
];

routes.forEach(({ path, route }) => router.use(path, route));

export default router;
