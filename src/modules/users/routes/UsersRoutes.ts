import { Router } from 'express';
import UserController from '../controllers/UserController';
import ValidationUser from '../validations/CelebrateUserValidation';

const userRoutes = Router();
const controller = new UserController();
const validation = new ValidationUser();

userRoutes.get('/', controller.index);

userRoutes.get('/:id', validation.show, controller.show);

userRoutes.post('/', validation.create, controller.create);

userRoutes.put('/', validation.update, controller.update);

userRoutes.delete('/:id', validation.show, controller.delete);

export default userRoutes;
