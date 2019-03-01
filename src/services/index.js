import Axios from 'axios';
import { login } from './auth';

export let authorization = undefined;
console.log(process.env.REACT_API_URL);

export const http = Axios.create({
  baseURL: 'http://localhost:3001/api',
  transformRequest: [
    (data, headers) => {
      headers.Authorization = authorization;
      return data;
    }
  ]
});

export const api = {
  auth: { login }
};
