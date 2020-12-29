<template>
  <article class="recipe">
    <img v-if="photo" class="photo-recipe" :src="photo" />
    <section class="container-info">
      <h2 class="title">{{ title }}</h2>
      <div class="container-ingredients">
        <h3 class="title-ingredients">Ingredients</h3>
        <p
          v-for="ingredient in ingredients"
          :key="ingredient"
          class="item-ingredient"
        >
          {{ ingredient }}
        </p>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'RecipeCard',
  props: {
    photo: String,
    title: String,
    ingredients: Array,
  },
};
</script>

<style scoped>
.recipe {
  display: flex;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
}

.photo-recipe {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin-right: 15px;
}

.container-info {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
}

.title {
  font-weight: bold;
}

.container-ingredients {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.title-ingredients {
  color: rgb(77, 77, 77);
  font-weight: 500;
}

.item-ingredient {
  font-size: 0.9em;
  font-weight: 400;
  color: #999;
}
</style>
