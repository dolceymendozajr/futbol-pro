const axios = require('axios');
const baseUrl = 'https://api-football-beta.p.rapidapi.com/countries';
const headers = {
  'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
  'x-rapidapi-key': '523c02404fmsh753be8ee7785927p15cf16jsn70854ba8b459',
};

const http = {
  get: async () => {
    try {
      const response = await axios.get(baseUrl, { headers: headers });
      return response;
    } catch (error) {
      console.log(error.message);
      throw new Error(error);
    }
  },
  post: async (url, data) => {
    try {
      const response = await axios.post(`${baseUrl}${url}`, data);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default http;
