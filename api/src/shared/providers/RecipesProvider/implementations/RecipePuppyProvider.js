const recipesConfig = require('../../../../config/recipes');

class RecipePuppyProvider {
  constructor(requestProvider) {
    this.requestProvider = requestProvider;
  }

  async findRecipesBySearch({ search }) {
    const recipesResponse = await this.requestProvider.get({
      url: recipesConfig.api_url,
      params: { q: search },
    });

    return recipesResponse.data.results;
  }
}

module.exports = RecipePuppyProvider;
