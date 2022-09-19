import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getApi } from '../../services/api';
import { RootState } from '../store';

const initialState = {
  loading: false,
  data: [],
  isError: false
};

export const fetchTrending = createAsyncThunk('trendingCoins/fetchTrending', async () => {
  try {
    const data = await getApi('search/trending');
    return data.data;
  } catch (error) {
    console.error('Trending coins > ', error);
  }
});

export const trendingCoinSlice = createSlice({
  name: 'trendingCoins',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrending.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTrending.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.coins.slice(0, 4);
      })
      .addCase(fetchTrending.rejected, (state) => {
        state.loading = false;
        state.isError = true;
      });
  }
});

export const selectTrendingCoins = (state: RootState) => {
  return state.trendingCoins.data;
};

export default trendingCoinSlice.reducer;
