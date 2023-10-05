import { Router } from 'express';
import ForgotPasswordController from '../controllers/ForgotPasswordController';
import CelebratePasswordValidation from '../validations/CelebratePasswordValidation';

const passwordRoutes = Router();
const forgotPasswordController = new ForgotPasswordController();

const validation = new CelebratePasswordValidation();

passwordRoutes.post(
  '/forgot',
  validation.email,
  forgotPasswordController.create,
);

export default passwordRoutes;
