/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
import AppError from '../errors/AppError';
import RequestModel from '../models/Request';
import GetRequestsBlingService from './GetRequestsBlingService';

async function postOnMongo(): Promise<string> {
  try {
    const requests = await GetRequestsBlingService();
    const requestsOnMongo = await RequestModel.find();
    const requestsFormatted: Array<any> = [];

    const notFounds: Array<any> = [];

    await Promise.all(
      requests.map(async (request: any) => {
        requestsFormatted.push({
          client: request.pedido.cliente.nome,
          date: new Date(request.pedido.data),
          total_value: Number(request.pedido.totalvenda),
        });
      }),
    );

    requestsFormatted.map(request => {
      if (
        requestsOnMongo.find(element => element.client === request.client) ===
        undefined
      ) {
        notFounds.push(request);
      }
    });

    if (notFounds.length === 0) {
      return 'Nenhuma oportunidade nova no Bling';
    }

    await Promise.all(
      notFounds.map(async (request: any) => {
        await RequestModel.create({
          client: request.client,
          date: new Date(request.date),
          total_value: Number(request.total_value),
        });
      }),
    );

    return 'Oportunidades inseridas no banco de dados.';
  } catch (error) {
    throw new AppError({ message: error.message, statusCode: 400 });
  }
}

export default postOnMongo;
