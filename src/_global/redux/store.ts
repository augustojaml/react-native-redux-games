import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cartsSlice } from './carts/cartsSlice';
import { productsSlice } from './products/productsSlice';

const store = configureStore({
  reducer: combineReducers({
    products: productsSlice.reducer,
    carts: cartsSlice.reducer,
  }),
  devTools: process.env.NODE_ENV !== 'production',
});

export type IStoreReducer = ReturnType<typeof store.getState>;

export type IStoreDispatch = typeof store.dispatch;

export { store };
