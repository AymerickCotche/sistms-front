import { createAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchService from '@/services/apicall';
import axios from 'axios';
import crypto from 'crypto';
import oauth1a from'oauth-1.0a';
const Sellsy = require("node-sellsy").default;

export const findAllProducts = createAsyncThunk('product/findAllProducts', async ({request, io_mode, do_in}) => {
  try {
      const sellsy = new Sellsy({
        creds: {
        consumerKey: process.env.NEXT_PUBLIC_CONSUMER_KEY,
        consumerSecret: process.env.NEXT_PUBLIC_CONSUMER_SECRET,
        userToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
        userSecret: process.env.NEXT_PUBLIC_TOKEN_SECRET,
      },
      endPoint: "http://localhost:8282"
    });

    const params = {
      type: "item",
      search: {
        tags: "null",
      },
    };

    const data = await sellsy.api({
      method: "Catalogue.getList",
      params: params,
    });

    return data.response.result;
  
  } catch (error) {
    console.log("error:", error);
  }
 
  
  // await sellsy
  //   .api({
  //     method: "Catalogue.getList",
  //     params: params,
  //   })
  //   .then((data) => {
  //     return data;
  //   })
  //   .catch((e) => {
  //     console.log("error:", e);
  //   });
});