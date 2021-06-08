<template>
  <div class="recipe-detail-container container py-5">
    <div class="header pb-4">
      <div class="header-intro">
        <h1 class="header-headline py-3 font-weight-bold">
          {{ recipeDetail.title }}
        </h1>
        <p
          class="header-summary text-justify "
          v-html="recipeDetail.summary"
        ></p>
        <div class="header-image py-2 text-center">
          <img :src="recipeDetail.image" alt="header" width="100%" />
        </div>
      </div>
    </div>
    <main class="row">
      <section class=" col-md-6 instructions text-justify  py-4">
        <h4 class="section-header  font-weight-bold">Instructions</h4>
        <div class="instructions-content " v-html="recipeDetail.instructions" />
      </section>
      <section class="col-md-6 ingredients text-justify py-4">
        <h4 class="section-header  font-weight-bold">Ingredients</h4>
        <p class="ingredients-servings">
          Recipe for {{ recipeDetail.servings }} servings
        </p>
        <div class="ingredients-list">
          <ul class="pl-4 mb-0">
            <li
              v-for="ingredient in recipeDetail.extendedIngredients"
              :key="ingredient.id"
              class="ingredients-item py-2"
            >
              {{ ingredient.original }}
            </li>
          </ul>
        </div>
      </section>

      <section class="related text-justify  px-3 py-4">
        <h4 class="section-header  font-weight-bold">Similar Recipes</h4>
        <div class="row ">
          <div
            class=" col-sm-12 col-md-4 text-center mb-4"
            v-for="(recipe, index) in relatedRecipes"
            :key="index"
          >
            <RecipeCard :recipe="recipe" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { apiUrl } from '@/utility/constant'
import RecipeCard from '@/components/RecipeCard.vue'

export default Vue.extend({
  name: 'RecipeDetail',
  components: {
    RecipeCard
  },
  data() {
    return {
      recipeDetail: {},
      dishTypes: '',
      relatedRecipes: []
    }
  },
  methods: {
    async getData(): Promise<void> {
      try {
        const response = await axios.get(
          `${apiUrl}/${this.$route.params.id}/information?apiKey=${process.env.VUE_APP_API_KEY}`
        )
        this.recipeDetail = response.data
        this.dishTypes = response.data.dishTypes[0]
      } catch (error) {
        console.log(error)
      }
      this.getRelatedRecipes()
    },
    async getRelatedRecipes(): Promise<void> {
      try {
        const response = await axios.get(
          `${apiUrl}/random?apiKey=${process.env.VUE_APP_API_KEY}&number=3&tags=${this.dishTypes}`
        )
        this.relatedRecipes = response.data.recipes
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted() {
    this.getData()
  }
})
</script>

<style>
section {
  border-top: 2px solid rgba(0, 0, 0, 0.15);
}
.instructions-content {
  white-space: pre-line;
}
@media only screen and (max-width: 575px) {
  h1.header-headline {
    font-size: 2rem;
  }
}
</style>
