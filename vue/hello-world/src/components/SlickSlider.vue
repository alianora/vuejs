<template>
  <div class="slider">
  <VueSlickCarousel v-bind="settings">
    <div class="slider-item" v-for="item in items" :key="item.id"><h3>{{item.id}}</h3></div>
  </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
export default {
name: "SlickSlider",
  components: { VueSlickCarousel },
  data:
      function(){
    return {
      settings: {
        "dots": false,
        "arrows": true,
        "edgeFriction": 0.35,
        "infinite": true,
        "speed": 500,
        "slidesToShow": this.quantity,
        "slidesToScroll": this.quantity,
        "touchThreshold": 5
      }
    }
  },
props: ['items','quantity']

}
</script>

<style>
.slick-prev, .slick-next {
  background-color: #2c3e50;
}
.slider {
  padding: 20px 50px;
  margin: 10px;
  background-color: #2c3e50;
}
.slider-item {
  background-color: antiquewhite;
}
</style>