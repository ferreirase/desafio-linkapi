import { Router } from 'express';
import PostSaleBlingService from '../services/PostSaleBlingService';
import GetSalesBlingService from '../services/GetSalesBlingService';
import AppError from '../errors/AppError';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const routes = Router();

routes.post('/', async (_req, res) => {
  try {
    const deals = await PostSaleBlingService();
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
    const sales = await GetSalesBlingService();
    return res.status(200).json(sales);
  } catch (error) {
    throw new AppError({
      message: error.message,
      statusCode: 400,
    });
  }
});

export default routes;
