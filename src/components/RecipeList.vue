<template>
  <div class="home">
    <div class="container align-center ">
      <div class="row">
        <div
          class=" col-sm-6 col-md-4 text-center mb-4"
          v-for="recipe in sortRecipes"
          :key="recipe.id"
        >
          <RecipeCard :recipe="recipe" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import RecipeCard from './RecipeCard.vue'
import { OrderTerm, Recipe } from '@/utility/types'

export default Vue.extend({
  name: 'RecipeList',
  components: { RecipeCard },
  props: {
    recipes: Array as PropType<Recipe[]>,
    orderTerm: String as PropType<OrderTerm>
  },

  computed: {
    // Sort Recipe by user input
    sortRecipes(): Recipe[] {
      const recipes = [...this.recipes]
      switch (this.orderTerm) {
        case 'title':
          return recipes.sort((a, b) =>
            a[this.orderTerm] > b[this.orderTerm] ? 1 : -1
          )
        case 'readyInMinutes':
          return recipes.sort((a, b) =>
            a[this.orderTerm] > b[this.orderTerm] ? 1 : -1
          )
        default: {
          return recipes
        }
      }
    }
  }
})
</script>

<style scoped></style>
