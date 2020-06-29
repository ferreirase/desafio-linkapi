import { Router } from 'express';
import dealsRoutes from './deals.routes';
import mongoRoutes from './mongo.routes';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const routes = Router();

routes.use('/deals', dealsRoutes);
routes.use('/mongo', mongoRoutes);

export default routes;
