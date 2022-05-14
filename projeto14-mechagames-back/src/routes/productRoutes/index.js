import {Router} from "express";
import {getProducts} from "../../controllers/productControllers";

const router = Router();

router.get("/", getProducts);

export default router;