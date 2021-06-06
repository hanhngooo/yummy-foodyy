<template>
  <div class="today py-5 ">
    <div class="today-contentd-flex px-2 flex-column text-center  ">
      <div class="header ">
        <h1 class="header-title font-weight-bold">What to cook today?</h1>

        <ul class="header-text-list px-3  ">
          <li class="header-text-item">
            You are feeling uninspired today.
          </li>
          <li class="header-text-item">
            You are running out of idea for what to cook for your hungry family.
          </li>
          <li class="header-text-item">
            You just want to try something new today
          </li>
          <li class="header-text-item">
            You will cook whatever recipe comes up.
          </li>
          <li class="header-text-item hit">
            Hit the button!
          </li>
        </ul>

        <button
          type="button"
          class="header-button shadow rounded-sm "
          @click="getData()"
        >
          {{ isRecipeEmpty ? 'Show me' : 'Another please' }}
        </button>
      </div>
      <div
        v-if="Object.keys(fetchedRecipe).length !== 0"
        class="recipe-card px-2 py-5 d-flex align-items-center justify-content-center"
      >
        <RecipeCard :recipe="fetchedRecipe" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { apiUrl } from '@/utility/constant'
import { Recipe } from '@/utility/types'
import RecipeCard from '@/components/RecipeCard.vue'

export default Vue.extend({
  name: 'Today',
  components: { RecipeCard },
  data() {
    return {
      fetchedRecipe: {} as Recipe,
      showRecipe: false,
      showMeText: 'Show me',
      anotherText: 'Another please!'
    }
  },
  methods: {
    async getData(): Promise<void> {
      try {
        const response = await axios.get(
          `${apiUrl}/random?apiKey=${process.env.VUE_APP_API_KEY}&number=1`
        )
        this.fetchedRecipe = response.data.recipes[0]
      } catch (error) {
        console.log(error)
      }
    },

    // Get another recipe on click
    getAnotherRecipe() {
      this.getData()
    },
    // show recipe
    setShowRecipe() {
      return (this.showRecipe = true)
    }
  },
  computed: {
    isRecipeEmpty(): boolean {
      return Object.keys(this.fetchedRecipe).length === 0
    }
  }
})
</script>

<style scoped>
.today {
  background-image: url('../assets/today-background2.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 1200px;
}
.header-text-item {
  list-style: none;
}
.header-title {
  color: #7a4545;
}
@media only screen and (max-width: 425px) {
  .header-title {
    font-size: 2rem;
  }
}
</style>
