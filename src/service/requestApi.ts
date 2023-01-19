import axios, {AxiosInstance} from "axios";

export const Api:AxiosInstance = axios.create({
    baseURL: 'https://viacep.com.br/ws/',
    timeout: 2000,
    headers: {'X-Custom-Header': 'foobar'}
  });

