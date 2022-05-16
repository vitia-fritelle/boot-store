import { Router } from 'express';
import { ProductPage, getProducts } from '../../controllers/productControllers';

const router = Router();

router.get('/:idProduct', ProductPage);
router.get('/', getProducts);

export default router;
