const axios = require('axios');
const headers = {
  'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
  'x-rapidapi-key': '7d27fbde81msh05692e84ffed670p18e640jsnee1c72d4f680',
};

const http = {
  get: async (url, params) => {
    try {
      const response = await axios.get(url, {
        params: params,
        headers: headers,
      });
      return response;
    } catch (error) {
      console.log(error.message);
      throw new Error(error);
    }
  },
};

export default http;
