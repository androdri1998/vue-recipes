/* eslint-disable import/prefer-default-export */
import api from '../service/api';

export const get = async ({ url, params = {} }) => {
  const response = await api.get(url, {
    params: {
      ...params,
    },
  });

  return response;
};
