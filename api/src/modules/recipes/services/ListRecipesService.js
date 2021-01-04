/* eslint-disable no-useless-constructor */
class ListRecipesService {
  constructor(recipeProvider) {
    this.recipeProvider = recipeProvider;
  }

  async execute({ search }) {
    const recipes = await this.recipeProvider.findRecipesBySearch({
      search,
    });

    const recipesSerialized = recipes.map(recipe => {
      const ingredients = recipe.ingredients
        .split(',')
        .map(ingredient => ingredient.trim());

      return {
        title: recipe.title,
        ingredients,
        photo: recipe.thumbnail,
        link: recipe.href,
      };
    });

    return {
      recipes: recipesSerialized,
    };
  }
}

module.exports = ListRecipesService;
