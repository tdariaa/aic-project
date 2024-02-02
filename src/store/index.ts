import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { api } from './api/api';
import { historySlice } from './slice/historySlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [historySlice.reducerPath]: historySlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
