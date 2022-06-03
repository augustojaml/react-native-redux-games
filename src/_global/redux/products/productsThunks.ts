import { api } from '@global/libs/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const loadingProducts = createAsyncThunk('products/all', async () => {
  const response = await api.get('products');
  return response.data;
});
