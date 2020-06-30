/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/ban-types */
import axios from 'axios';
import AppError from '../errors/AppError';
import GetProductsPipedriveService from './GetProductsPipedriveService';

interface Deal {
  id: number;
  name: string;
  total_value: number;
  expected_close_date: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  products: Array<any>;
}

async function getRequests(): Promise<Array<Deal>> {
  try {
    const response = await axios.get(
      `${process.env.BASE_URL_PIPEDRIVE}?api_token=${process.env.API_KEY_PIPEDRIVE}`,
    );

    const dealsWon = response.data.data.filter(
      (deal: { status: string }) => deal.status === 'won',
    );

    const deals: Array<Deal> = [];

    await Promise.all(
      dealsWon.map(
        async (deal: {
          id: number;
          expected_close_date: string;
          org_name: string;
          weighted_value: number;
        }) =>
          deals.push({
            id: deal.id,
            expected_close_date: deal.expected_close_date,
            name: deal.org_name,
            total_value: deal.weighted_value,
            products: await GetProductsPipedriveService(deal.id.toString()),
          }),
      ),
    );

    return deals;
  } catch (error) {
    throw new AppError({ message: error.message, statusCode: 400 });
  }
}

export default getRequests;
