<template>
  <div class="slide-show px-3 ">
    <div class="row">
      <div
        class="slide-heading px-5  d-flex flex-column justify-content-center col-md-6"
      >
        <h1 class="slide-title">
          Welcome to Yummy Foody
        </h1>
        <p class="slide-content">
          Curabitur non magna convallis, tempus nibh eu, vestibulum nulla. Morbi
          fermentum pulvinar dolor non euismod. Ut eget tristique lacus.
        </p>
      </div>
      <div class="slide-main col-md-6">
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="5000"
          controls
          indicators
          img-width="500"
          background="#ababab"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Slides with image only -->
          <div class="" v-for="image in images" :key="image">
            <b-carousel-slide :img-src="image"></b-carousel-slide>
          </div>
        </b-carousel>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SlideShow',
  data() {
    return {
      slide: 0 as number,
      sliding: false,
      images: [
        'https://cdn.pixabay.com/photo/2020/05/01/09/13/cupcakes-5116009_960_720.jpg',
        'https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_960_720.jpg',
        'https://cdn.pixabay.com/photo/2015/09/02/12/43/food-918639_960_720.jpg',
        'https://cdn.pixabay.com/photo/2016/06/01/21/40/soup-1429793_960_720.jpg',
        'https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg'
      ]
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  }
})
</script>

<style scoped>
.slide-show {
  height: 100%;
  text-align: center;
  margin: 3em auto;
}
@media only screen and (max-width: 992px) {
  .slide-show {
    margin: 2.5em auto;
  }
  h1.slide-title {
    font-size: 2.5rem !important;
  }
  .slide-content {
    font-size: 1rem !important;
  }
}
@media only screen and (max-width: 375px) {
  .slide-show {
    margin: 2em auto;
  }
  .slide-heading {
    padding: 0 1rem !important;
  }
  h1.slide-title {
    font-size: 2rem !important;
  }
  .slide-content {
    font-size: 0.8rem !important;
  }
}
.slide-title {
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  font-size: 3rem !important;
  color: #7a4545 !important;
}
.slide-content {
  font-size: 1.5rem;
}
</style>
