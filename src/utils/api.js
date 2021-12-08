import axios from 'axios';

const baseURL = 'http://localhost:4000';

const config = {
  crossDomain: true,
  responseType: 'json',
  headers: { 'Content-Type': 'application/json' },
};

const instance = axios.create({ ...config, baseURL });

export default instance;
