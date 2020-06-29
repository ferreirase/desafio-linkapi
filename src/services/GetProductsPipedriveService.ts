/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/ban-types */
import axios from 'axios';
import { uuid } from 'uuidv4';
import AppError from '../errors/AppError';

interface Product {
  id: number;
  name: string;
  code: string;
  price: number;
  quantity: number;
}

async function getProducts(dealID: string): Promise<Array<Product>> {
  try {
    const response = await axios.get(
      `${process.env.BASE_URL_PIPEDRIVE}/${dealID}/products/?api_token=${process.env.API_KEY_PIPEDRIVE}`,
    );

    const products: Array<Product> = [];

    response.data.data.map(
      (product: {
        id: number;
        name: string;
        item_price: number;
        quantity: number;
      }) => {
        products.push({
          id: product.id,
          code: uuid(),
          name: product.name,
          price: product.item_price,
          quantity: product.quantity,
        });
      },
    );

    return products;
  } catch (error) {
    throw new AppError({ message: error.message, statusCode: 400 });
  }
}

export default getProducts;
