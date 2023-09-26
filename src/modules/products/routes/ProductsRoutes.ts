import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import Validation from '../validation/CelebrateProducFamilytValidation';

const productRoutes = Router();
const controller = new ProductController();
const validation = new Validation();

productRoutes.get('/', controller.index);

productRoutes.get('/:id', validation.show, controller.show);

productRoutes.post('/', validation.create, controller.create);

productRoutes.put('/', validation.update, controller.update);

productRoutes.delete('/:id', validation.show, controller.delete);

export default productRoutes;
