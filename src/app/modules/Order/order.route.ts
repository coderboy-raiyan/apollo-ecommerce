import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import OrderController from './order.controller';
import orderValidationSchema from './order.validation';

const router = Router();

router.get('/', OrderController.getAllOrders);
router.post('/', validateRequest(orderValidationSchema), OrderController.createOrder);

const OrderRoutes = router;

export default OrderRoutes;
