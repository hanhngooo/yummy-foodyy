<template>
  <router-link :to="`/recipe/${recipe.id}`">
    <b-card
      :title="recipe.title"
      :img-src="recipe.image"
      img-alt="Recipe"
      img-top
      class="border-none"
      border-variant="light"
    >
    </b-card>
  </router-link>
</template>

<script lang="ts">
export default {
  props: {
    recipe: Object
  }
}
</script>

<style scoped>
.card {
  cursor: pointer;
  transition: all 0.5s ease;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.05);
}
.card-title {
  font-size: 18px;
  font-weight: bolder;
}
.card-img,
.card-img-top {
  filter: brightness(110%);
}

a {
  color: inherit;
  text-decoration: none !important;
}
</style>
