import { createAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchService from '@/services/apicall';
import axios from 'axios';
import crypto from 'crypto';
import oauth1a from'oauth-1.0a';
const Sellsy = require("node-sellsy").default;

export const findAllProducts = createAsyncThunk('product/findAllProducts', async () => {
  try {
      const sellsy = new Sellsy({
        creds: {
        consumerKey: process.env.NEXT_PUBLIC_CONSUMER_KEY,
        consumerSecret: process.env.NEXT_PUBLIC_CONSUMER_SECRET,
        userToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
        userSecret: process.env.NEXT_PUBLIC_TOKEN_SECRET,
      },
      endPoint: process.env.NEXT_PUBLIC_PROXY_URL
    });

    const params = {
      type: "item",
      search: {
        tags: "null",
      },
      pagination: {
        nbperpage: "200"
      }
    };

    const data = await sellsy.api({
      method: "Catalogue.getList",
      params: params,
    });

    return data.response.result;
  
  } catch (error) {
    console.log("error:", error);
  }
});

export const setDisplayedProducts = createAction('product/setDisplayedProducts');
export const setAllProducts = createAction('product/setAllProducts');
export const setIsLoading = createAction('product/setIsLoading');
export const setSortingSetting = createAction('product/setSortingSetting');
export const setSortingDirection = createAction('product/setSortingDirection');
export const setSearchInput = createAction('product/setSearchInput');
export const setCategory = createAction('product/setCategory');
export const setCategories = createAction('product/setCategories');