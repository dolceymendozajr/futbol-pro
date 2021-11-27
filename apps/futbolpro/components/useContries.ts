import http from '../http';

export const getContries = async () => {
  const countries = await http.get();
  return countries;
};
