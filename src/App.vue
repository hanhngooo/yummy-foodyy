<template>
  <div id="app">
    <div id="nav"><router-link to="/">Home</router-link> |</div>
    <router-view :key="$route.path" />
  </div>
</template>

<style></style>
