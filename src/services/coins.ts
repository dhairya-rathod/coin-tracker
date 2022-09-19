import { getApi } from './api';

export const getMarketCoins = async () => {
  try {
    const data = await getApi('coins/markets', { vs_currency: 'inr' });
    return data.data;
  } catch (error) {
    return null;
  }
};
