import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { api } from './api/api';
import { historySlice } from './slice/historySlice';
import { favoriteSlice } from './slice/favotiteSlice';
import { authenticationSlice } from './slice/authenticationSlice';
import { LSMiddleware } from './middleware/middleware';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [historySlice.reducerPath]: historySlice.reducer,
    [favoriteSlice.reducerPath]: favoriteSlice.reducer,
    [authenticationSlice.reducerPath]: authenticationSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware).prepend(LSMiddleware.middleware),
});

setupListeners(store.dispatch);
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
