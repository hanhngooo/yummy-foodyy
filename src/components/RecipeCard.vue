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
      <b-card-text>
        Cooking time: {{ recipe.readyInMinutes }} minutes
      </b-card-text>
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
  max-width: 400px;
  margin-top: 0.5rem;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 2px 11px rgba(0, 0, 0, 0.05);
}
.card-body {
  padding: 1rem;
}
.card-title {
  font-size: 18px;
  font-weight: bolder;
}
.card-img,
.card-img-top {
  filter: brightness(115%);
}

a {
  color: inherit;
}
a:hover {
  color: #7a4545;
  text-decoration: none !important;
}
</style>
