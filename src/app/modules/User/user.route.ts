import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import UserController from './user.controller';
import userValidationSchema from './user.validation';

const router = Router();

router.post('/register', validateRequest(userValidationSchema), UserController.register);

const UserRoutes = router;

export default UserRoutes;
