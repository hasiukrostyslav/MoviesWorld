import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './slice/themeSlice';
import { useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector = useSelector.withTypes<RootState>();

export * from './slice/themeSlice';
