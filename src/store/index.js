import Vue from 'vue';
import Vuex from 'vuex';

import { getRecipesByIngredients } from '../functions/recipesFunctions';

Vue.use(Vuex);

const initialState = {
  recipes: [],
};

const getters = {
  recipes: state => state.recipes,
};

const mutations = {
  setRecipes(state, payload) {
    state.recipes = payload;
  },
};

const actions = {
  async getRecipesByIngredientsAction({ commit }) {
    const recipes = await getRecipesByIngredients({
      ingredients: ['onions', 'garlic'],
    });

    return commit('setRecipes', recipes);
  },
};

const store = new Vuex.Store({
  state: initialState,
  getters,
  mutations,
  actions,
});

export default store;
