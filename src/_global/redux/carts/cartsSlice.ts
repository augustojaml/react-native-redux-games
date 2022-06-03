import { createSlice } from '@reduxjs/toolkit';
import { checkProductStockByIdAndAddToCart } from './cartsThunks';
import { INITIAL_STATE } from './cartsTypes';

const cartsSlice = createSlice({
  name: 'carts',
  initialState: INITIAL_STATE,
  reducers: {
    removeProductQuantityToCart(state, { payload }) {
      const findProduct = state.items.find((item) => item.product.id === payload.id);
      if (findProduct) {
        if (findProduct?.quantity === 1) {
          state.items = state.items.filter((item) => item.product.id !== findProduct.product.id);
        } else {
          findProduct.quantity--;
        }
        state.productOutOfStock = state.productOutOfStock.filter(
          (item) => item !== findProduct.product.id
        );
      }
    },
    removeProductToCart(state, { payload }) {
      const findProduct = state.items.find((item) => item.product.id === payload.id);
      if (findProduct) {
        state.items = state.items.filter((item) => item.product.id !== findProduct.product.id);
        state.productOutOfStock = state.productOutOfStock.filter(
          (item) => item !== findProduct.product.id
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkProductStockByIdAndAddToCart.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(checkProductStockByIdAndAddToCart.fulfilled, (state, action) => {
      const { product, stock } = action.payload;
      const findCart = state.items.find((item) => item.product.id === product.id);

      if (findCart) {
        if (findCart.quantity === stock.quantity) {
          state.productOutOfStock.push(findCart.product.id);
          state.isLoading = false;
          return;
        }
        findCart.quantity++;
      } else {
        if (stock.quantity === 0) {
          state.productOutOfStock.push(product.id);
          state.isLoading = false;
          return;
        }
        state.items.push({
          product: product,
          quantity: 1,
        });
      }
      state.isLoading = false;
    });
    builder.addCase(checkProductStockByIdAndAddToCart.rejected, (state, { error }) => {
      state.error = error;
      state.isLoading = false;
    });
  },
});

export { cartsSlice };
