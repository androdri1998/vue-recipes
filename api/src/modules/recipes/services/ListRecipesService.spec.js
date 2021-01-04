const ListRecipesService = require('./ListRecipesService');
const FakeRecipesProvider = require('../../../shared/providers/RecipesProvider/fakes/FakeRecipesProvider');
const FakeRequestProvider = require('../../../shared/providers/RequestProvider/fakes/FakeRequestProvider');

let listRecipesService;
let fakeRecipesProvider;
let fakeRequestProvider;

describe('ListRecipesService', () => {
  beforeEach(() => {
    fakeRequestProvider = new FakeRequestProvider();
    fakeRecipesProvider = new FakeRecipesProvider(fakeRequestProvider);
    listRecipesService = new ListRecipesService(fakeRecipesProvider);
  });

  it('should be able to return recipes', async () => {
    const recipesReponseCheck = [
      {
        title: 'Title recipe 1',
        ingredients: ['garlic', 'onions', 'hot sauce'],
        link: 'link recipe 1',
        photo: 'link thumbnail recipe 1',
      },
      {
        title: 'Title recipe 2',
        link: 'link recipe 2',
        ingredients: ['garlic', 'mussels', 'onions'],
        photo: 'link thumbnail recipe 2',
      },
    ];

    const listRecipes = await listRecipesService.execute({ search: 'omelete' });

    expect(listRecipes).toHaveProperty('recipes');
    expect(listRecipes.recipes.length).toBe(2);
    expect(listRecipes.recipes).toEqual(recipesReponseCheck);
  });
});
