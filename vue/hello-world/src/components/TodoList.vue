<template>
  <div class="list">
     <div class="item" v-for="item in list" :key="item.value">
       {{item.value}}{{item.name}}
     </div>
    <transition name="opacity">
      <div class="kss" v-if="customItem"> lksdlksdlksd</div>
    </transition>

    <button @click="something">click <span v-if="count">{{count}}</span></button>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data: function(){
    return {
      list: this.test,
      customItem: false,
      count: 0
    }
  },
  props: ['test','ttt'],
  methods: {
    something: function (){
      this.customItem = !this.customItem;
    }
  },
  updated() {
    console.log(this);
    if (this.list.length > 2 && this.count === 0){
      this.count = this.count + this.ttt;
    }
  }
}
</script>

<style>
  .opacity-enter-active, .opacity-leave-active {
    transition: all .5s;
  }
  .opacity-enter, .opacity-leave-to {
    transform: scale(0);
  }
</style>