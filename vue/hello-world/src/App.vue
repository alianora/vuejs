<template>
  <div id="app">
    <slick-slider :items="
    [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        }
    ]"
    :quantity="1"
    ></slick-slider>
    <slick-slider :items="
    [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        }
    ]"
            :quantity="2"
    ></slick-slider>
    <slick-slider :items="
    [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        },
        {
          id: 5
        },
        {
          id: 6
        }
    ]"
                  :quantity="3"
    ></slick-slider>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TodoList from './components/TodoList.vue'
import SlickSlider from "./components/SlickSlider";

export default {
  name: 'App',
  components: {
    SlickSlider
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
