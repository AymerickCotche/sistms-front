import { createReducer } from '@reduxjs/toolkit';

import { findAllProducts, setDisplayedProducts, setIsLoading, setSortingSetting, setSortingDirection, setSearchInput, setAllProducts, setCategory, setCategories, setViewMode } from '../actions/product';

const initialState = {
  products: {},
  displayedProducts: [],
  allProducts: [],
  isLoading: false,
  sortingSetting: 'default',
  sortingDirection: 0,
  message: '',
  searchInput: '',
  category: '',
  categories: [],
  viewMode: 'cards'
};

export const productReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(findAllProducts.fulfilled, (state, action) => {

    state.products = action.payload;
    state.isLoading = false;
  })
  .addCase(findAllProducts.pending, (state, action) => {
    state.isLoading = true;
  })
  .addCase(findAllProducts.rejected, (state, action) => {
    state.message = action.payload;
  })
  .addCase(setDisplayedProducts, (state, action) => {
    state.displayedProducts = action.payload;
  })
  .addCase(setIsLoading, (state, action) => {
    console.log(action)
    state.isLoading = action.payload;
  })
  .addCase(setSortingSetting, (state, action) => {
    state.sortingSetting = action.payload;
  })
  .addCase(setSortingDirection, (state, action) => {
    state.sortingDirection = action.payload;
  })
  .addCase(setSearchInput, (state, action) => {
    state.searchInput = action.payload;
  })
  .addCase(setAllProducts, (state, action) => {
    state.allProducts = action.payload;
  })
  .addCase(setCategory, (state, action) => {
    state.category = action.payload;
  })
  .addCase(setCategories, (state, action) => {
    state.categories = action.payload;
  })
  .addCase(setViewMode, (state, action) => {
    state.viewMode = action.payload;
  })
  
});

export default productReducer;