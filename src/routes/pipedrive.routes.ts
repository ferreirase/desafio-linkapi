import { Router } from 'express';
import PostSaleBlingService from '../services/PostSaleBlingService';
import AppError from '../errors/AppError';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const routes = Router();

routes.get('/', async (_req, res) => {
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

export default routes;
