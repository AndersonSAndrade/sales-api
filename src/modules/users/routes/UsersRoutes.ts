import { Router } from 'express';
import UserController from '../controllers/UserController';
import ValidationUser from '../validations/CelebrateUserValidation';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import UserAvatarController from '../controllers/UserAvatarController';
import multer from 'multer';
import multerConfig from '@config/upload';

const userRoutes = Router();
const controller = new UserController();
const userAvatarController = new UserAvatarController();
const validation = new ValidationUser();

const upload = multer(multerConfig);

userRoutes.get('/', isAuthenticated, controller.index);

userRoutes.get('/:id', isAuthenticated, validation.show, controller.show);

userRoutes.post('/', isAuthenticated, validation.create, controller.create);

userRoutes.put('/', isAuthenticated, validation.update, controller.update);

userRoutes.patch(
  '/avatar',
  isAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

userRoutes.delete('/:id', isAuthenticated, validation.show, controller.delete);

export default userRoutes;
