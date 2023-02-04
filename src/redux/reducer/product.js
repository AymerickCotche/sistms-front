import { createReducer } from '@reduxjs/toolkit';

import { findAllProducts } from '../actions/product';

const initialState = {
  products: []
};

export const productReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(findAllProducts.fulfilled, (state, action) => {

    state.products = action.payload;
  })
  .addCase(findAllProducts.pending, (state, action) => {
    state.message = action.payload;
  })
  .addCase(findAllProducts.rejected, (state, action) => {
    state.message = action.payload;
  })
  
});

export default productReducer;