import { SerializedError } from '@reduxjs/toolkit';

export interface ICartProduct {
  id: number;
  image: string;
  title: string;
  price: number;
}

export interface ICartItem {
  product: ICartProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
  isLoading: boolean;
  error: SerializedError | undefined;
  productOutOfStock: number[];
}

export const INITIAL_STATE: ICartState = {
  items: [],
  isLoading: false,
  error: undefined,
  productOutOfStock: [],
};
