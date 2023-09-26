import { Router } from 'express';
import ProductController from '../controllers/ProductFamilyController';
import Validation from '../validation/CelebrateProducFamilytValidation';

const productFamilyRoutes = Router();
const controller = new ProductController();
const validation = new Validation();

productFamilyRoutes.get('/', controller.index);

productFamilyRoutes.get('/:id', validation.show, controller.show);

productFamilyRoutes.post('/', validation.create, controller.create);

productFamilyRoutes.put('/', validation.update, controller.update);

productFamilyRoutes.delete('/:id', validation.show, controller.delete);

export default productFamilyRoutes;
