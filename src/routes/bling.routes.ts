import { Router } from 'express';
import axios from 'axios';
import AppError from '../errors/AppError';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const routes = Router();

routes.get('/', async (_req, res) => {
  try {
    const response = await axios.get(
      `${process.env.BASE_URL_GET_BLING}?apikey=${process.env.API_KEY_BLING}`,
    );
    return res.status(200).json(response.data);
  } catch (error) {
    throw new AppError({
      message: error.message,
      statusCode: 400,
    });
  }
});

// cadastrar um pedido no Bling
routes.post('/', async (_req, res) => {
  // const config = {
  //   headers: {
  //     'Content-Type': 'text/xml',
  //     Accept: 'application/json, text/plain, text/xml',
  //   },
  // };

  try {
    const response = await axios.post(
      `${process.env.BASE_URL_POST_BLING}?apikey=${process.env.API_KEY_BLING}`,
    );

    return res.status(200).json(response.data);
  } catch (error) {
    throw new AppError({
      message: error.message,
      statusCode: 400,
    });
  }
});

export default routes;
