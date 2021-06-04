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
          id="sorting"
          class="sorting-list "
        >
          <option class="sorting-option ">Select</option>
          <option value="title" class="sorting-option">Title</option>
          <option value="readyInMinutes" class="sorting-option"
            >Cooking Time</option
          >
        </select>
      </div>
      <RecipeList :recipes="fetchedRecipes" :orderTerm="orderTerm" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { apiUrl } from '@/utility/constant'
import RecipeList from '@/components/RecipeList.vue'
import { OrderTerm } from '@/utility/types'

export default Vue.extend({
  name: 'Home',
  components: {
    RecipeList
  },
  data() {
    return {
      fetchedRecipes: [],
      orderTerm: 'title' as OrderTerm
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
    }
  },

  mounted() {
    this.getData()
  }
})
</script>

<style scoped></style>
