import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getApi } from '../../services/api';
import { RootState } from '../store';

import { CoinListTable } from '../../utils/interface';

const initialState = {
  loading: false,
  data: [] as CoinListTable[],
  isError: false
};

export const fetchCoins = createAsyncThunk(
  'coinList/fetchCoins',
  async (params: { currency: string; perPage: number }) => {
    const { currency = 'inr', perPage } = params;

    try {
      const data = await getApi('coins/markets', { vs_currency: currency, per_page: perPage });
      return data.data;
    } catch (error) {
      console.error('Coins list > ', error);
    }
  }
);

export const coinListSlice = createSlice({
  name: 'coinList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCoins.rejected, (state) => {
        state.loading = false;
        state.isError = true;
      });
  }
});

export const selectCoins = (state: RootState) => {
  return state.coinList.data;
};

export default coinListSlice.reducer;
