import { createSlice } from '@reduxjs/toolkit';
import { loadingProducts } from './productsThunks';
import { INITIAL_STATE } from './productsTypes';

const productsSlice = createSlice({
  name: 'products',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadingProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loadingProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    });
    builder.addCase(loadingProducts.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
  },
});

export { productsSlice };
