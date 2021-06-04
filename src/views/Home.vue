<template>
  <div class="home">
    <div v-if="fetchedRecipes.length" class="container align-center ">
      <div
        class="sorting-group d-flex justify-content-end align-items-center my-3 "
      >
        <label class="sorting-label mr-2 mb-0">Sort by </label>
        <select
          :model="orderTerm"
          @change="event => selectSort(event.target.value)"
          name="sorting"
          id="dorting"
          class="sorting-list "
        >
          <option class="sorting-option ">Select</option>
          <option value="title" class="sorting-option">Title</option>
          <option value="cookingTime" class="sorting-option"
            >Cooking Time</option
          >
        </select>
      </div>

      <!-- <button @click="selectSort('title')">Order by title</button> -->
      <div class="row">
        <div
          class="col-sm-6 col-md-4 text-center mb-4"
          v-for="recipe in fetchedRecipes"
          :key="recipe.id"
        >
          <RecipeCard :recipe="recipe" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { apiUrl } from '@/utility/constant'
import RecipeCard from '@/components/RecipeCard.vue'
import OrderTerm from '@/utility/types'

export default Vue.extend({
  name: 'Home',
  components: {
    RecipeCard
  },
  data() {
    return {
      fetchedRecipes: [],
      orderTerm: 'title' as OrderTerm,
      sortedRecipes: []
    }
  },
  methods: {
    async getData(): Promise<void> {
      try {
        const response = await axios.get(
          `${apiUrl}/random?apiKey=${process.env.VUE_APP_API_KEY}&number=12`
        )
        this.fetchedRecipes = response.data.recipes
      } catch (error) {
        console.log(error)
      }
    },
    selectSort(term: OrderTerm) {
      this.orderTerm = term
      this.sortedRecipes = this.sortRecipes(this.orderTerm)
    },
    // Sort Recipe by user input
    sortRecipes(orderTerm: OrderTerm) {
      return this.fetchedRecipes.sort((a, b) =>
        a[orderTerm] > b[orderTerm] ? 1 : -1
      )
    }
  },

  mounted() {
    this.getData()
  }
})
</script>

<style scoped></style>
