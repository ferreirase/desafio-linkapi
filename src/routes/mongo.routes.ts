import { Router } from 'express';
import RequestModel from '../models/Request';
import AppError from '../errors/AppError';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const routes = Router();

routes.get('/', async (_req, res) => {
  try {
    const requests = await RequestModel.find();

    return res.status(200).json(requests);
  } catch (error) {
    throw new AppError({
      message: error.message,
      statusCode: 400,
    });
  }
});

export default routes;
