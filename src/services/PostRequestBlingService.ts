/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
// import axios from 'axios';
import urlencode from 'urlencode';
import axios from 'axios';
import AppError from '../errors/AppError';
import GetDealsPipedriveService from './GetDealsPipedriveService';

async function postRequest(): Promise<string> {
  try {
    const deals = await GetDealsPipedriveService();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dealsWithXML: Array<any> = [];

    deals.map(deal => {
      dealsWithXML.push({
        deal,
        xml: urlencode(
          `<?xml version="1.0" encoding="UTF-8"?>
          <pedido>
          <cliente>
          <nome>${deal.name}</nome>
          </cliente>
          <itens>
          ${deal.products.map(
            prod => `
            <item>
            <codigo>${prod.code}</codigo>
            <descricao>${prod.name}</descricao>
            <un>Un</un>
            <qtde>${prod.quantity}</qtde>
            <vlr_unit>${prod.price}</vlr_unit>
            </item>`,
          )}
          </itens>
          <parcelas>
          <parcela>
          <data>01/09/2009</data>
          <vlr>100</vlr>
          </parcela>
          </parcelas>
          </pedido>
        `,
        ),
      });
    });

    await Promise.all(
      dealsWithXML.map(
        async deal =>
          // eslint-disable-next-line no-return-await
          await axios.post(
            `${process.env.BASE_URL_POST_BLING}?apikey=${process.env.API_KEY_BLING}&xml=${deal.xml}`,
          ),
      ),
    );

    return 'pedidos adicionados';
  } catch (error) {
    throw new AppError({ message: error.message, statusCode: 400 });
  }
}

export default postRequest;
