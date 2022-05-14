import {Router} from 'express';
import {ProductPage} from '../../controllers/productControllers';

const router = Router();

router.get('/:idProduct', ProductPage);

export default router;
