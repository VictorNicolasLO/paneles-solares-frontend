import { http } from '.';

export async function login(email, password) {
  const result = await http.post('login', { email, password });
  return result.data;
}

//http://178.128.151.68/api/solar-heater

export async function getChartData(){
 return await http.get('solar-heater');
}
