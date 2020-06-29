import { Router } from 'express';
import PostRequestBlingService from '../services/PostRequestBlingService';
import GetRequestsBlingService from '../services/GetRequestsBlingService';
import AppError from '../errors/AppError';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const routes = Router();

routes.post('/', async (_req, res) => {
  try {
    const response = await PostRequestBlingService();
    return res.status(200).json({ message: response });
  } catch (error) {
    throw new AppError({
      message: error.message,
      statusCode: 400,
    });
  }
});

routes.get('/', async (_req, res) => {
  try {
    const requests = await GetRequestsBlingService();
    return res.status(200).json(requests);
  } catch (error) {
    throw new AppError({
      message: error.message,
      statusCode: 400,
    });
  }
});

export default routes;
