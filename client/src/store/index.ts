import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './slice/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { generalApi } from './api/generalAPI';
import { setupListeners } from '@reduxjs/toolkit/query';
import { moviesApi } from './api/moviesAPI';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [generalApi.reducerPath]: generalApi.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(generalApi.middleware)
      .concat(moviesApi.middleware);
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector = useSelector.withTypes<RootState>();

export * from './slice/themeSlice';
export * from './api/generalAPI';
export * from './api/moviesAPI';
