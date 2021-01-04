const { Router } = require('express');

const validateParams = require('../../../../../shared/infra/http/middlewares/validateParams');
const { getRecipesSchema } = require('../schemas/recipes.schemas');

const RecipesController = require('../controllers/RecipesController');

const recipesRouter = Router();
const recipesController = new RecipesController();

recipesRouter.get(
  '/',
  validateParams({
    schema: getRecipesSchema,
  }),
  recipesController.index,
);

module.exports = recipesRouter;
