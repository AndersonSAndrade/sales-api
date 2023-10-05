import { Router } from 'express';
import userRoutes from '@modules/users/routes/UsersRoutes';
import productRoutes from '@modules/products/routes/ProductsRoutes';
import productFamilyRoutes from '@modules/products/routes/ProductsFamilyRoutes';
import securityRoutes from '@modules/users/routes/SecurityRoutes';
import isAuthenticated from '../middlewares/isAuthenticated';
import passwordRoutes from '@modules/users/routes/PasswordRoutes';

const routes = Router();

routes.use('/api/v1/products', isAuthenticated, productRoutes);
routes.use('/api/v1/familys', isAuthenticated, productFamilyRoutes);

routes.use('/api/v1/users', userRoutes);
routes.use('/api/v1/login', securityRoutes);
routes.use('/api/v1/password', passwordRoutes);

export default routes;
