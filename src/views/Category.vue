<template>
  <div class="category text-center">
    <div
      class="header-wrapper w-100 mb-5 d-flex flex-column justify-content-center align-items-center"
    >
      <h1 class="category-header ">
        <i>Best of {{ category }}</i>
      </h1>
      <hr />
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
      category: '',
      fetchedRecipes: []
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
    this.category = this.$route.params.cat
    this.getData()
  }
})
</script>

<style scoped>
.header-wrapper {
  height: 32rem;
  background-image: url('../assets/header1.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.category-header {
  font-size: 4rem;
  color: #ffff;
}

hr {
  width: 14rem;
  border-top: 1px solid #ffff;
}
@media only screen and (max-width: 768px) {
  .header-wrapper {
    height: 24rem;
  }
  .category-header {
    font-size: 3.5rem;
  }
  hr {
    width: 12rem;
  }
}
@media only screen and (max-width: 600px) {
  .header-wrapper {
    height: 20rem;
  }
  .category-header {
    font-size: 2.5rem;
  }
  hr {
    width: 10rem;
  }
}
</style>
