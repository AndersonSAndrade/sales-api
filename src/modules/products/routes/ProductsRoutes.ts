import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import CelebrateValidationId from '../validation/CelebrateValidation';

const productRoutes = Router();
const controller = new ProductController();
const validation = new CelebrateValidationId();

productRoutes.get('/', controller.index);

productRoutes.get('/:id', validation.idValidate, controller.show);

productRoutes.post('/', validation.createValidate, controller.create);

productRoutes.put('/', validation.updateValidation, controller.update);

productRoutes.delete('/:id', validation.idValidate, controller.delete);

export default productRoutes;
