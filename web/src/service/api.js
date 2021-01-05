import axios from 'axios';

import appConfig from '../config/app';

const api = axios.create({
  baseURL: appConfig.api_url,
});

export default api;
