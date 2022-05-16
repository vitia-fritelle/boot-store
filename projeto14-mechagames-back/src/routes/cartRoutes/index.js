import { Router } from 'express';
import { updateCart, getCart } from '../../controllers/cartControllers';

const router = Router();

router.put('/', updateCart);
router.get('/', getCart);

export default router;
