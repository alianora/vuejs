<template>
  <div id="app">
<acc-wrap></acc-wrap>
    <slick-slider :items="
    [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 }
    ]"
    :quantity="1"
    ></slick-slider>
    <slick-slider :items="
    [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 }
    ]"
    :quantity="2"
    ></slick-slider>
    <slick-slider :items="
    [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 }
    ]"
    :quantity="3"
    ></slick-slider>

    <tabs>
      <tab name="Services" :selected="true">
        <h1>What we do</h1>
      </tab>
      <tab name="Pricing">
        <h1>How much we do it for</h1>
      </tab>
      <tab name="About Us">
        <h1>Why we do it</h1>
      </tab>
    </tabs>

    <posters-slider></posters-slider>



  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TodoList from './components/TodoList.vue'
import SlickSlider from "./components/SlickSlider";
import Tabs from "@/components/Tabs";
import Tab from "@/components/Tab";
import PostersSlider from "@/components/PostersSlider";
import AccWrap from "@/components/AccWrap";

export default {
  name: 'App',
  components: {
    AccWrap,
    SlickSlider, Tabs, Tab, PostersSlider
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
