import { Router } from 'express';
import ValidationUser from '../validations/CelebrateUserValidation';
import SecurityController from '../controllers/SecurityController';

const securityRoutes = Router();
const controller = new SecurityController();
const validation = new ValidationUser();

securityRoutes.post('/', validation.login, controller.create);

export default securityRoutes;
