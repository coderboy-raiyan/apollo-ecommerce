import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import ProductController from './product.controller';
import productValidationSchema from './product.validation';

const router = Router();

router.post('/', validateRequest(productValidationSchema), ProductController.createProduct);

const ProductRoutes = router;

export default ProductRoutes;
