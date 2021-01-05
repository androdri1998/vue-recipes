<template>
  <main class="screen-home">
    <Header title="Recipes" />
    <section class="container-recipes">
      <input
        class="search-recipe-input"
        placeholder="Find new recipes..."
        v-model="searchRecipeValue"
        type="text"
      />
      <p class="feedback-results">{{ amountRecipes }} recipes found</p>
      <RecipeCard
        v-for="recipe in recipes"
        :key="recipe.title"
        :title="recipe.title"
        :ingredients="recipe.ingredients"
        :photo="recipe.photo"
        :link="recipe.link"
      />
    </section>
  </main>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { debounce } from 'debounce';

import Header from '@/components/Header';
import RecipeCard from '@/components/RecipeCard';

export default {
  name: 'Home',
  data() {
    return {
      searchRecipeValue: '',
    };
  },
  computed: {
    ...mapGetters(['recipes', 'amountRecipes']),
  },
  methods: {
    ...mapActions(['getRecipesBySearchAction']),
    // eslint-disable-next-line no-unused-vars
    searchRecipes: debounce(function getRecipesDebounce(newSearchRecipeValue) {
      this.getRecipesBySearchAction({ search: newSearchRecipeValue });
    }, 2000),
    init() {
      this.getRecipesBySearchAction();
    },
  },
  watch: {
    searchRecipeValue(newSearchRecipeValue) {
      this.searchRecipes(newSearchRecipeValue);
    },
  },
  components: {
    Header,
    RecipeCard,
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped>
.screen-home {
  flex: 1;
  height: min-content;
}

.container-recipes {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 30px;
}

.search-recipe-input {
  height: 50px;
  width: 100%;
  padding: 10px;
  font-size: 1em;
  margin-bottom: 5px;

  border: 2px solid #999;
  border-radius: 10px;
}

.feedback-results {
  font-size: 0.9em;
  font-weight: 400;
  color: #999;
  margin-bottom: 20px;
}
</style>
