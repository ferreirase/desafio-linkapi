/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
import axios from 'axios';
import AppError from '../errors/AppError';

async function getSales(): Promise<any> {
  try {
    const sales = await axios.get(
      `${process.env.BASE_URL_GET_BLING}?apikey=${process.env.API_KEY_BLING}`,
    );

    return sales.data.retorno.pedidos;
  } catch (error) {
    throw new AppError({ message: error.message, statusCode: 400 });
  }
}

export default getSales;
