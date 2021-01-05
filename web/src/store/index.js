import Vue from 'vue';
import Vuex from 'vuex';

import { getRecipesBySearch } from '../functions/recipesFunctions';

Vue.use(Vuex);

const initialState = {
  recipes: [],
};

const getters = {
  recipes: state => state.recipes,
  amountRecipes: state => state.recipes.length,
};

const mutations = {
  setRecipes(state, payload) {
    state.recipes = payload;
  },
};

const actions = {
  async getRecipesBySearchAction({ commit }, payload = {}) {
    const searchToRequest = payload.search ? payload.search : 'omelete';

    const recipes = await getRecipesBySearch({
      search: searchToRequest,
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
