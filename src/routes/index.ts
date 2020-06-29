import { Router } from 'express';
import dealsRoutes from './deals.routes';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const routes = Router();

routes.use('/deals', dealsRoutes);

export default routes;
