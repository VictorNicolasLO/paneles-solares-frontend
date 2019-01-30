import { http } from '.';

export async function login(email, password) {
  const result = await http.post('login', { email, password });
  return result.data;
}
