const axios = require('axios');
const headers = {
  'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
  'x-rapidapi-key': '523c02404fmsh753be8ee7785927p15cf16jsn70854ba8b459',
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
