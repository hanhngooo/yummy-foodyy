<template>
  <footer class="footer mt-5 mt-sm-3  pt-5   pt-sm-3 pb-3 ">
    <div class=" footer-wrapper container pt-5 pt-sm-2">
      <div class="row">
        <div class=" col-sm-6 contact">
          <h2 class="contact-heading pb-2"><i>Yummy Foody</i></h2>
          <p class="contact-paragraph ">
            Curabitur non magna convallis, tempus nibh eu, vestibulum nulla.
            Morbi fermentum pulvinar dolor non euismod. Ut eget tristique lacus.
            Nunc venenatis interdum augue id malesuada. Proin vitae metus
            turpis. Aliquam ornare ligula quis fringilla blandit.
          </p>
        </div>

        <div class="col-sm-3 footer-nav-wrapper">
          <h5 class="footer-nav-heading">Sitemap</h5>
          <ul class="footer-nav pl-0  ">
            <li class="footer-nav-item " @click="$router.push('/')">
              Home
            </li>

            <div
              class="footer-nav-item cursor-pointer"
              @click="onCategoryClick"
              @mouseleave="isCatsOpen = false"
              @mouselenter="isCatsOpen = true"
            >
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

              <ul v-if="isCatsOpen" class="categories-list">
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
                  {{ cat.name }}
                </li>
              </ul>
            </div>

            <li class="footer-nav-item" @click="$router.push('/today-recipe')">
              What to cook Today
            </li>
            <li class="footer-nav-item">
              <a
                href="https://spoonacular.com/food-api/docs"
                class="footer-nav-link"
              >
                API Docs
              </a>
            </li>
          </ul>
        </div>
        <div class="col-sm-3">
          <h5 class="footer-nav-heading">Contact us</h5>

          <ul class="contact-list  pl-0">
            <li class="contact-list-item">
              555 7777 7777
            </li>
            <li class="contact-list-item">
              info@yummy.com
            </li>
            <li class="contact-list-item">
              1001 YF Neverlands, Cookies Island
            </li>
          </ul>
          <ul class="social-icons pl-0  d-flex">
            <li class="social-icons-item p-2 p-sm-1 ">
              <a href="#" class="social-icons-link">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li class="social-icons-item p-2 p-sm-1">
              <a href="#" class="social-icons-link">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
            <li class="social-icons-item p-2 p-sm-1">
              <a href="#" class="social-icons-link">
                <i class="fab fa-google-plus-g"></i>
              </a>
            </li>
            <li class="social-icons-item p-2 p-sm-1">
              <a href="#" class="social-icons-link">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li class="social-icons-item p-2 p-sm-1">
              <a href="#" class="social-icons-link">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Footer',
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
      isCatsOpen: false
    }
  },
  methods: {
    onCategoryClick() {
      this.isCatsOpen = !this.isCatsOpen
    }
  }
})
</script>

<style scoped>
.footer {
  background-color: rgb(252, 248, 243);
}

.contact-heading {
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  font-size: 3rem !important;
  color: #7a4545 !important;
}

.social-icons-item {
  font-size: 1.5rem;
}

@media only screen and (max-width: 768px) {
  .footer {
    font-size: 14px;
  }

  .contact-heading {
    font-size: 2.5rem !important;
  }
  .social-icons-item {
    font-size: 1rem;
  }
}
@media only screen and (max-width: 575px) {
  .footer {
    padding-top: 1rem !important;
    margin-top: 0.5rem !important;
  }

  .footer-wrapper {
    padding-top: 1rem !important;
  }
}
a {
  color: inherit;
  text-decoration: none !important;
}

.footer-nav-item {
  cursor: pointer;
}
.footer-nav-item:hover,
.footer-nav-link:hover,
.social-icons-link:hover {
  color: #7a4545 !important;
}
.btn-secondary {
  background-color: red !important;
}
.contact-paragraph,
.footer-nav-item,
.contact-list,
.social-icons {
  color: #7f7f7f !important;
  list-style-type: none;
}
</style>
