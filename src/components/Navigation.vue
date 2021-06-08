<template>
  <div class="navigation">
    <b-navbar
      toggleable="lg"
      type="light"
      @scroll="handleScroll"
      :fixed="isTop ? 'top' : ''"
      :class="navfixed"
    >
      <b-navbar-brand href="#" @click="$router.push('/')">
        <img src="@/assets/yummy.png" alt="logo" width="50" /> Yummy Foody
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav v-model="isNavCollapsed">
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            ><button @click="$router.push('/')">
              Home
            </button></b-nav-item
          >

          <div
            class="categories-button "
            @click="onCategoryClick"
            @mouseleave="isCatsOpen = false"
            @mouselenter="isCatsOpen = true"
            :style="collapseStyle"
          >
            <button>
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
            </button>

            <ul
              v-if="isCatsOpen"
              class="categories-list"
              :style="collapseStyle"
            >
              <li
                v-for="cat in cats"
                :key="cat.value"
                @click="
                  $router.push({
                    path: `/categories/${cat.value}`
                  })
                "
                class="categories-item px-2"
              >
                <b-nav-item>
                  {{ cat.name }}
                </b-nav-item>
              </li>
            </ul>
          </div>

          <b-nav-item
            ><button @click="$router.push('/today-recipe')">
              What to cook Today
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
          value: 'drinks',
          name: 'Drinks'
        }
      ],
      isCatsOpen: false,
      isTop: false,
      scrollPosition: 0,
      navfixed: '',
      categoryCollapse: false,
      isNavCollapsed: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  computed: {
    collapseStyle() {
      if (this.isNavCollapsed) {
        return { textAlign: 'left' }
      }
      return {}
    }
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY
      if (this.scrollPosition > 5 && this.isTop === false) {
        this.isTop = true
        this.navfixed = 'nav-fixed'
        if (this.scrollPosition > 5) {
          this.navfixed = 'nav-fixed visible'
        }
      } else if (this.scrollPosition < 5) {
        this.isTop = false
        this.navfixed = ''
      }
    },
    onCategoryClick() {
      this.isCatsOpen = !this.isCatsOpen
    }
  }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap');
.navbar {
  background-color: #faf2ea;
}
.nav-fixed {
  background-color: #fdeddd;

  opacity: 0.9;
  transition: all 1s;
}

.navbar-brand {
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  font-size: 1.5rem !important;
  color: #7a4545 !important;
}

.categories-button {
  position: relative;
  padding: 0.5rem 0;
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
  background-color: #ddbc98;
  border-bottom: 1px solid #e2cbb4;
  opacity: 0.9;
}
.categories-item:hover {
  background-color: #fdeddd;
}
@media only screen and (max-width: 992px) {
  .categories-list {
    list-style: none;
    position: initial;
  }
}
</style>
