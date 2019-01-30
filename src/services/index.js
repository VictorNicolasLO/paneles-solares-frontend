import Axios from 'axios';
import { login } from './auth';
import { Configuration } from '../config';

export let authorization = undefined;

export const http = Axios.create({
  baseURL: process.env.api,
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
