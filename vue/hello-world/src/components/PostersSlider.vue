<template>
  <div class="slider">
    <VueSlickCarousel v-bind="settings" v-if="items.length > 1">
      <div class="slider-item" v-for="item in items" :key="item.id">
        <h3>{{item.title}}</h3>
        <div class="poster-image"
             :style="{ 'background-image': 'url(' + require('../img/posters/' + item.imageSrc) + ')' } "
              :alt="item.imageAlt"></div>
      </div>
    </VueSlickCarousel>
  </div>
<!--  <div>-->
<!--    {{ items }}-->
<!--  </div>-->
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import axios from 'axios';
export default {
name: "PostersSlider",
  components: { VueSlickCarousel },
  data() {
    return {
      items: [],
      //backgroundURL: "<" + this.items.image.src + ">",
      settings: {
        "dots": false,
        "arrows": true,
        "edgeFriction": 0.35,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 4,
        "slidesToScroll": 1,
        "touchThreshold": 5
      }
    };
  },
  mounted() {
    axios
        .get("http://localhost:8080/mock/slider.json")
        .then(response => (this.items = response.data));
  }
}
</script>

<style scoped>
h3 {
  text-align: left;
  margin: 15px 10px;
}
.poster-image {
  margin: 15px 7px;
  height: 440px;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>