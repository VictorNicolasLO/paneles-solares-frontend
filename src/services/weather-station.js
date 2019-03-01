import { http } from '.';

export const getWeatherStation = async params => {
  return await http.get('/weather-station');
};
