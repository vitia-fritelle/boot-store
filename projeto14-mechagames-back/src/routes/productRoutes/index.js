import {Router} from 'express';
import {ProductPage} from '../../controllers/productControllers';
import {getProducts} from '../../controllers/productControllers';

const router = Router();

router.get('/:idProduct', ProductPage);
router.get('/', getProducts);

export default router;
