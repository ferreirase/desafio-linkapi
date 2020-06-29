import { Router } from 'express';
import salesRoutes from './sales.routes';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const routes = Router();

routes.use('/deals', salesRoutes);

export default routes;
