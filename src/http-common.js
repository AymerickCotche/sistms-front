import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8282",
  oauth: {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    token: process.env.ACCESS_TOKEN,
    token_secret: process.env.TOKEN_ACCESS
  },
  headers: {
    "Content-type": "application/json",
  },
});