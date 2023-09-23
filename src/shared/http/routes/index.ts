import { Router } from 'express';
import productRoutes from '@modules/products/routes/ProductsRoutes';

const routes = Router();

routes.use('/api/v1/products', productRoutes);

export default routes;
