<template>
  <a :href="link" target="_blank" class="container-recipe">
    <article class="recipe">
      <img v-if="photo" class="photo-recipe" :src="photo" />
      <img
        v-if="!photo"
        class="photo-recipe-default"
        src="../assets/default_photo_food.png"
      />
      <section class="container-info">
        <p class="title">{{ title }}</p>
        <div class="container-ingredients">
          <p class="item-ingredient">Ingredients: {{ allIngredients }}</p>
        </div>
      </section>
    </article>
  </a>
</template>

<script>
export default {
  name: 'RecipeCard',
  props: {
    photo: String,
    title: String,
    link: String,
    ingredients: Array,
  },
  computed: {
    allIngredients() {
      return this.ingredients.join(', ');
    },
  },
};
</script>

<style scoped>
.container-recipe {
  width: 100%;
  text-decoration: none;
  margin-bottom: 20px;
}

.recipe {
  display: flex;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
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

.photo-recipe-default {
  width: 100px;
  height: 100px;
  padding: 30px;
  border-radius: 10px;
  margin-right: 15px;

  background: rgba(200, 200, 200, 0.3);
}

.container-info {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
}

.title {
  font-size: 1.2em;
  font-weight: 400;
}

.container-ingredients {
  display: flex;
  padding: 5px 0;
  text-align: left;
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
