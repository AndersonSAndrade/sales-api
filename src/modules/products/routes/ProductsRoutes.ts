import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const productRoutes = Router();
const controller = new ProductController();

productRoutes.get('/', controller.index);
productRoutes.get('/:id', controller.show);
