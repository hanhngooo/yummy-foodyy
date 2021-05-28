<template>
  <div class="recipe-detail-container container ">
    <div class="header pb-4">
      <div class="header-intro">
        <h1 class="header-headline">
          {{ recipeDetail.title }}
        </h1>
        <p class="header-summary" v-html="recipeDetail.summary"></p>
        <div class="header-image">
          <img :src="recipeDetail.image" alt="header" />
        </div>
      </div>
    </div>
    <main class="">
      <section class="ingredients py-4">
        <h4 class="section-header">Ingredients</h4>
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
      <section class="instructions py-4">
        <h4 class="section-header">Instructions</h4>
        <div class="instructions-content " v-html="recipeDetail.instructions" />
      </section>
      <section class="related py-4">
        <h4 class="section-header">Similar Recipes</h4>
        <div class="row">
          <div
            class="col col-sm-6 col-md-4 text-center mb-4"
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
        console.log('dish type', this.dishTypes)
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
</style>
