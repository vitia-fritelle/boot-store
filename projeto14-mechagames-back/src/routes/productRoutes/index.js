import {Router} from 'express';
import {ProductPage} from '../../controllers/authControllers';

const router = Router();

router.get('/products/:idProduct', ProductPage);

export default router;
