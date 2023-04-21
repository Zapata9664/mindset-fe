import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './authSlice';
import storage from 'redux-persist/lib/storage'
import { persistCombineReducers, persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({
  auth: counterReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)
export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch