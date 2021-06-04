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
  name: 'Category',
  components: {
    RecipeList
  },
  data() {
    return {
      category: '',
      fetchedRecipes: [],
      orderTerm: 'title' as OrderTerm
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
    },
    selectSort(term: OrderTerm) {
      this.orderTerm = term
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
