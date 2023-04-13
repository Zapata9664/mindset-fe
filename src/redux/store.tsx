import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './authSlice';

export const store = configureStore({
  reducer: {
    auth: counterReducer,
  }, 
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch