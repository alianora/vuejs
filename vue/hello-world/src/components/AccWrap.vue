<template>
  <div class="accordion-wrap">
    <accordion-item :title="'title 1'" :content="'title 2dfgd'" ref="accordion-item"></accordion-item>
    <accordion-item :title="'title 2'" :content="'title 2qav'" ref="accordion-item2"></accordion-item>
    <accordion-item :title="'title 3'" :content="'title 2ww'" ref="accordion-item3"></accordion-item>
  </div>
</template>

<script>
import AccordionItem from "@/components/AccordionItem";

export default {
  name: "AccWrap",
  components: { AccordionItem },

}
</script>

<style>

</style>