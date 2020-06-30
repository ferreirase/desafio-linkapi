/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
import axios from 'axios';
import AppError from '../errors/AppError';
// import RequestModel from '../models/Request';

async function getSales(): Promise<any> {
  try {
    const requests = await axios.get(
      `${process.env.BASE_URL_GET_BLING}?apikey=${process.env.API_KEY_BLING}`,
    );

    const arrayRequests = requests.data.retorno.pedidos;

    return arrayRequests;
  } catch (error) {
    throw new AppError({ message: error.message, statusCode: 400 });
  }
}

export default getSales;
