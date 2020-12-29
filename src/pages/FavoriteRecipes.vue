<template>
  <main class="screen-home">
    <Header title="Favorites recipes" />
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
import Header from '@/components/Header';
import RecipeCard from '@/components/RecipeCard';

export default {
  name: 'FavoriteRecipes',
  components: {
    Header,
    RecipeCard,
  },
  data() {
    return {
      recipes: [
        {
          title: 'Teste1',
          ingredients: ['teste1', 'teste2'],
          photo: null,
        },
        {
          title: 'Teste2',
          ingredients: ['teste1', 'teste2'],
          photo: null,
        },
        {
          title: 'Teste3',
          ingredients: ['teste1', 'teste2'],
          photo: null,
        },
      ],
    };
  },
};
</script>

<style scoped>
.screen-home {
  flex: 1;
  height: min-content;
  padding-bottom: 10px;
}

.container-recipes {
  padding: 0 30px;
}
</style>
