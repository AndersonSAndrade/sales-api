import { Router } from 'express';
import userRoutes from '@modules/users/routes/UsersRoutes';
import productRoutes from '@modules/products/routes/ProductsRoutes';
import productFamilyRoutes from '@modules/products/routes/ProductsFamilyRoutes';
import securityRoutes from '@modules/users/routes/SecurityRoutes';

const routes = Router();

routes.use('/api/v1/products', productRoutes);
routes.use('/api/v1/familys', productFamilyRoutes);

routes.use('/api/v1/users', userRoutes);
routes.use('/api/v1/login', securityRoutes);

export default routes;
