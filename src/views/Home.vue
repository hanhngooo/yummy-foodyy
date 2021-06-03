<template>
  <div class="home">
    <div v-if="fetchedRecipes.length" class="container align-center ">
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

export default Vue.extend({
  name: 'Home',
  components: {
    RecipeCard
  },
  data() {
    return {
      fetchedRecipes: []
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
    }
  },
  mounted() {
    this.getData()
  }
})
</script>

<style scoped></style>
