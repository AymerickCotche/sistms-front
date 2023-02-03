import { createAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchService from '@/services/apicall';

export const findAllProducts = createAsyncThunk('product/findAllProducts', async ({request, io_mode, do_in}) => {
  const response = await fetchService.getAllProducts({request, io_mode, do_in});
  return response.data;
});