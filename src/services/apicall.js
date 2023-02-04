import http from "../http-common";

// const options = {
//   'method': 'GET',
//   'url': 'xxxx',
//   'oauth': {
//     consumer_key: CONSUMERKEY,
//     consumer_secret: CONSUMERSECRET,
//     token: TOKENKEY,
//     token_secret: TOKENSECRET
//   },
//   'headers': {},
// }

const getAllProducts = async (data) => {
  try {
    const response = await http.post('http://localhost:8282/proxy', data);

    return response;
  } catch (error) {
    console.log(error);
  }
}

const fetchService = {
  getAllProducts
};

export default fetchService