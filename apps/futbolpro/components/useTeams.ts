import http from '../http';

const url = 'https://api-football-beta.p.rapidapi.com/teams';
const params = { country: 'colombia' };

export const getTeams = async () => {
  const teams = await http.get(url, params);
  return teams;
};
