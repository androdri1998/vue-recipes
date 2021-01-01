<template>
  <main class="screen-home">
    <Header title="Recipes" />
    <section class="container-recipes">
      <RecipeCard
        v-for="recipe in recipes"
        :key="recipe.title"
        :title="recipe.title"
        :ingredients="recipe.ingredients"
        :photo="recipe.photo"
      />
    </section>
  </main>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

import Header from '@/components/Header';
import RecipeCard from '@/components/RecipeCard';

export default {
  name: 'Home',
  computed: { ...mapGetters(['recipes']) },
  methods: {
    ...mapActions(['getRecipesByIngredientsAction']),
    init() {
      this.getRecipesByIngredientsAction();
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
  padding: 0 30px;
}
</style>
