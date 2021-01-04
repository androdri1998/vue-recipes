const HTTPStatusCode = require('http-status-codes');

const ListRecipesService = require('../../../services/ListRecipesService');
const AxiosProvider = require('../../../../../shared/providers/RequestProvider/implementations/AxiosProvider');
const RecipePuppyProvider = require('../../../../../shared/providers/RecipesProvider/implementations/RecipePuppyProvider');

class RecipesController {
  async index(req, res) {
    const { search } = req.query;

    const axiosProvider = new AxiosProvider();
    const recipePuppyProvider = new RecipePuppyProvider(axiosProvider);
    const listRecipesService = new ListRecipesService(recipePuppyProvider);

    const listRecipes = await listRecipesService.execute({ search });

    res.status(HTTPStatusCode.StatusCodes.OK).json(listRecipes);
  }
}

module.exports = RecipesController;
