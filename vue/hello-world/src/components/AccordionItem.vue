<template>
<div class="accordion-item">
  <div class="accordion-item__title" :class="{open: isOpen}" @click="visibilityToggle">
    {{title}}
  </div>
  <div class="accordion-item__content" v-if="isOpen">
    {{content}}
  </div>
</div>
</template>

<script>
export default {
name: "Accordion1",
  data: function (){
  return{
    isOpen: false,
    id: this._uid
  }
  },
  methods:{
  visibilityToggle: function (){
    this.isOpen = !this.isOpen;
    this.$parent.$children.map((item)=>{
      item.isOpen = false;

      if(this._uid === item.id){
        this.isOpen = !this.isOpen;
      }

      console.log(this._uid);
      console.log(item.id)
    });

    console.log(this)

  }
  },
  props: ['title', 'content']
}
</script>

<style scoped>

</style>