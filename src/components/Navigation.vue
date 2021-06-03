<template>
  <div class="navigation">
    <b-navbar
      toggleable="lg"
      type="light"
      @scroll="handleScroll"
      :fixed="isTop ? 'top' : ''"
      class="py-0"
    >
      <b-navbar-brand href="#">
        <img src="@/assets/yummy.png" alt="logo" width="70" /> Yummy Foody
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            ><button @click="$router.push('/')">
              Home
            </button></b-nav-item
          >
          <b-nav-item>
            <button
              class="categories-button "
              @click="isCatsOpen = !isCatsOpen"
              @mouseover="isCatsOpen = true"
              @mouseleave="isCatsOpen = false"
            >
              <div>
                <span
                  >Categories
                  <svg
                    :class="isCatsOpen ? 'categories-arrow-rotate' : ''"
                    class="categories-arrow"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path></svg
                ></span>
              </div>

              <ul v-if="isCatsOpen" class="categories-list">
                <li
                  v-for="cat in cats"
                  :key="cat.value"
                  @click="$router.push({ path: `/categories/${cat.value}` })"
                  class="categories-item"
                >
                  {{ cat.name }}
                </li>
              </ul>
            </button></b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Navigation',
  data() {
    return {
      isCatOpen: false,
      cats: [
        {
          value: 'asian',
          name: 'Asian'
        },
        {
          value: 'pasta',
          name: 'Pasta'
        },
        {
          value: 'dinner',
          name: 'Dinner'
        },
        {
          value: 'dessert',
          name: 'Dessert'
        },
        {
          value: 'drink',
          name: 'Drink'
        }
      ],
      isCatsOpen: false,
      isTop: false
    }
  },
  methods: {
    handleSCroll() {
      if (window.scrollY > 2 && this.isTop === false) {
        this.isTop = true
      } else if (window.scrollY < 2) {
        this.isTop = false
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.handleSCroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleSCroll)
  }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap');
.navbar {
  background-color: #fffaf5;
  opacity: 0.8;
}
.navbar-brand {
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  font-size: 2rem !important;
  color: #7a4545 !important;
}
.categories-button {
  position: relative;
}
.categories-arrow {
  display: inline;
  width: 1rem;
  height: 1rem;
  transition: transform 0.2s ease-in-out;
}
.categories-arrow-rotate {
  transform: rotate(180deg);
}
.categories-list {
  text-align: center;
  list-style: none;
  position: absolute;
  width: 100%;
  padding-left: 0;
  z-index: 1031;
  left: 0;
  top: 10;
}
.categories-item {
  width: 100%;
  padding: 0.4rem 0;
  background-color: #ddbc98;
  border-bottom: 1px solid #e2cbb4;
  opacity: 0.8;
}
.categories-item:hover {
  background-color: #e2cbb4;
}
</style>
