import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import ProductController from './product.controller';
import { productUpdateValidationSchema, productValidationSchema } from './product.validation';

const router = Router();

router.get('/', ProductController.getAllProducts);
router.get('/:productId', ProductController.getSingleProduct);
router.patch(
    '/:productId',
    validateRequest(productUpdateValidationSchema),
    ProductController.updateSingleProduct
);
router.post('/', validateRequest(productValidationSchema), ProductController.createProduct);
router.delete('/:productId', ProductController.deleteProduct);

const ProductRoutes = router;

export default ProductRoutes;
