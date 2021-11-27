import http from '../http';

const url = 'https://api-football-beta.p.rapidapi.com/countries';

export const getContries = async () => {
  const countries = await http.get(url);
  return countries;
};
