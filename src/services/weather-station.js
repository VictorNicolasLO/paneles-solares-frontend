import { http } from '.';

export const getWeatherStation = async (params) => {
  const result = await http.get('/weather-station');
  return result;
};

export const getByDateRange = async (dateFrom, dateTo) => {
  const result = await http.get('/weather-station/by-date-range', {
    params: { dateFrom, dateTo },
  });
  return result;
};
