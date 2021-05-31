<template>
  <div id="app">
    <Navigation />
    <router-view :key="$route.path" />
  </div>
</template>

<script lang="ts">
import Navigation from '@/components/Navigation.vue'
export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style></style>
