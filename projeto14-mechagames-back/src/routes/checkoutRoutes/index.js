import { Router } from 'express';
import finishPurchase from '../../controllers/checkoutControllers';

const router = Router();

router.post('/', finishPurchase);

export default router;