import { Router } from 'express';
import updateChart from '../../controllers/chartControllers';

const router = Router();

router.put('/', updateChart);

export default router;
