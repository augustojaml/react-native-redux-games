import { api } from '@global/libs/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICartProduct } from './cartsTypes';

export const checkProductStockByIdAndAddToCart = createAsyncThunk(
  'stock/getById',
  async (product: ICartProduct) => {
    const response = await api.get(`stock/${product.id}`);
    return {
      product,
      stock: response.data,
    };
  }
);
