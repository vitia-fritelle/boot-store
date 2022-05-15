import {Router} from 'express';
import authRoute from './authRoutes';
import productRoute from './productRoutes';

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
];

routes.forEach(({path, route}) => router.use(path, route));

export default router;
