<template>
  <div class="home"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { apiUrl } from '@/utility/constant'

export default Vue.extend({
  name: 'Home',
  components: {},
  data() {
    return {
      fetchedData: 'haha'
    }
  },
  methods: {
    async getData(): Promise<void> {
      try {
        const response = await axios.get(
          `${apiUrl}/random?apiKey=${process.env.VUE_APP_API_KEY}`
        )
        console.log('reposne', response.data)
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
