import { Router } from 'express';
import { updateChart, getChart } from '../../controllers/chartControllers';

const router = Router();

router.put('/', updateChart);
router.get('/', getChart);

export default router;
