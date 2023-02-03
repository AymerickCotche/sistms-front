import { createReducer } from '@reduxjs/toolkit';

import { setMessage } from '../actions/staking';

const initialState = {
  message: 'yo'
};

export const stakingReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(setMessage, (state, action) => {
    state.message = action.payload;
  })
  
});

export default stakingReducer;