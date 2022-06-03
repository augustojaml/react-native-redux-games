import { SerializedError } from '@reduxjs/toolkit';

export interface IProduct {
  id: number;
  image: string;
  title: string;
  price: number;
}

export interface IProductsState {
  products: IProduct[];
  isLoading: boolean;
  error: SerializedError | undefined;
}

export const INITIAL_STATE: IProductsState = {
  products: [],
  isLoading: false,
  error: undefined,
};
