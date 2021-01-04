const Joi = require('joi');

const getRecipesSchema = {
  query: Joi.object({
    search: Joi.string().required(),
  }),
};

module.exports = {
  getRecipesSchema,
};
