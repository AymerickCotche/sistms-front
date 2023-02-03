import { createReducer } from '@reduxjs/toolkit';

import { findAllProducts } from '../actions/product';

const initialState = {
  message: 'yo'
};

export const productReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(findAllProducts.fulfilled, (state, action) => {
    console.log('ok');
    state.message = action.payload;
  })
  .addCase(findAllProducts.pending, (state, action) => {
    console.log('pending');
    state.message = action.payload;
  })
  .addCase(findAllProducts.rejected, (state, action) => {
    console.log('rejected');
    state.message = action.payload;
  })
  
});

export default productReducer;