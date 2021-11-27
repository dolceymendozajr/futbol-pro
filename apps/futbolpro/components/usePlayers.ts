import http from '../http';

const url = 'https://api-football-beta.p.rapidapi.com/players';
const params = { season: '2020', team: '1135' };

export const getPlayers = async () => {
  const player = await http.get(url, params);
  return player;
};
