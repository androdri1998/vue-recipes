/* eslint-disable import/prefer-default-export */
import { get } from './httpFunctions';

export const getRecipesBySearch = async ({ search }) => {
  const response = await get({
    url: '/recipes',
    params: {
      search,
    },
  });

  return response.data.recipes;
};
