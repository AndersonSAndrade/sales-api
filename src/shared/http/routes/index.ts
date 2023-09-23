import { Router } from 'express';
import productRoutes from '@modules/products/routes/ProductsRoutes';
import userRoutes from '@modules/users/routes/UsersRoutes';

const routes = Router();

routes.use('/api/v1/products', productRoutes);
routes.use('/api/v1/users', userRoutes);

export default routes;
