/* eslint-disable import/prefer-default-export */
import { get } from './httpFunctions';

export const getRecipesByIngredients = async ({ ingredients = [] }) => {
  const ingredientsToRequest = ingredients.join(',');
  const response = await get({
    url: '/',
    params: {
      i: ingredientsToRequest,
    },
  });

  return response.data.results;
};
