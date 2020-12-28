import Vue from 'vue';
import Router from 'vue-router';

import DetailRecipe from '@/pages/DetailRecipe/DetailRecipe';
import FavoriteRecipes from '@/pages/FavoriteRecipes/FavoriteRecipes';
import Home from '@/pages/Home/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/details',
      name: 'DetailRecipe',
      component: DetailRecipe,
    },
    {
      path: '/favorites',
      name: 'FavoriteRecipes',
      component: FavoriteRecipes,
    },
  ],
});
