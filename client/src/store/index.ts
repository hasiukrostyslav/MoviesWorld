import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useDispatch, useSelector } from 'react-redux';
import { themeReducer } from './slice/themeSlice';
import { homeApi } from './api/homeApi';
import { moviesApi } from './api/moviesAPI';
import { collectionsApi } from './api/collectionsAPI';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [homeApi.reducerPath]: homeApi.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [collectionsApi.reducerPath]: collectionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(homeApi.middleware)
      .concat(moviesApi.middleware)
      .concat(collectionsApi.middleware);
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector = useSelector.withTypes<RootState>();

export * from './slice/themeSlice';
export * from './api/homeApi';
export * from './api/moviesAPI';
export * from './api/collectionsAPI';
