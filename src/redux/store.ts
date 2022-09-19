import { configureStore } from '@reduxjs/toolkit';

import coinListReducer from './slices/coinList';
import trendingCoinReducer from './slices/trendingCoins';

export const store = configureStore({
  reducer: {
    coinList: coinListReducer,
    trendingCoins: trendingCoinReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
