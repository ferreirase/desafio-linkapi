import { Router } from 'express';
import pipedriveRoutes from './pipedrive.routes';
import blingRoutes from './bling.routes';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const routes = Router();

routes.use('/deals', pipedriveRoutes);
routes.use('/requests', blingRoutes);

export default routes;
