<template>
  <div class="category text-center">
    <div class="header-wrapper w-100 bg-img ">
      <h1 class="category-header py-5 ">Best of {{ category }}</h1>
    </div>
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
  name: 'Category',
  components: {
    RecipeCard
  },
  data() {
    return {
      fetchedRecipes: [],
      category: ''
    }
  },
  methods: {
    async getData(): Promise<void> {
      try {
        const response = await axios.get(
          `${apiUrl}/random?apiKey=${process.env.VUE_APP_API_KEY}&number=12&tags=${this.category}`
        )
        this.fetchedRecipes = response.data.recipes
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted() {
    this.getData()
    this.category = this.$route.params.cat
  }
})
</script>

<style scoped>
.header-wrapper {
  height: 32rem;

  background-image: url('../assets/header1.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
