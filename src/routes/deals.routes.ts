import { Router } from 'express';
import PostRequestBlingService from '../services/PostRequestBlingService';
import GetRequestsBlingService from '../services/GetRequestsBlingService';
import AppError from '../errors/AppError';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const routes = Router();

routes.post('/', async (_req, res) => {
  try {
    const deals = await PostRequestBlingService();
    return res.status(200).json({ message: deals });
  } catch (error) {
    throw new AppError({
      message: error.message,
      statusCode: 400,
    });
  }
});

routes.get('/', async (_req, res) => {
  try {
    const sales = await GetRequestsBlingService();
    return res.status(200).json(sales);
  } catch (error) {
    throw new AppError({
      message: error.message,
      statusCode: 400,
    });
  }
});

export default routes;
