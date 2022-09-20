import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  currency: 'inr'
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    }
  }
});

export const selectCurrency = (state: RootState) => {
  return state.currency.currency;
};

export const { setCurrency } = currencySlice.actions;

export default currencySlice.reducer;
