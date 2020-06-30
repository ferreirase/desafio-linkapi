import { Router } from 'express';
import RequestModel from '../models/Request';
import AppError from '../errors/AppError';
import PostRequestOnMongoService from '../services/PostRequestOnMongoService';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const routes = Router();

routes.get('/', async (_req, res) => {
  try {
    const requests = await RequestModel.find();

    if (requests.length === 0) {
      throw new AppError({
        message: 'Nenhuma oportunidade cadastrada.',
        statusCode: 400,
      });
    }

    return res.status(200).json(requests);
  } catch (error) {
    throw new AppError({
      message: error.message,
      statusCode: 400,
    });
  }
});

routes.post('/', async (_req, res) => {
  try {
    const response = await PostRequestOnMongoService();

    return res.status(200).json({ status: 'success', message: response });
  } catch (error) {
    throw new AppError({
      message: error.message,
      statusCode: 400,
    });
  }
});

export default routes;
