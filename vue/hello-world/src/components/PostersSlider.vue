<template>
  <div class="slider">
    <VueSlickCarousel v-bind="settings">
      <div class="slider-item" v-for="item in items" :key="item.id"><h3>{{item.title}}</h3></div>
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

</style>