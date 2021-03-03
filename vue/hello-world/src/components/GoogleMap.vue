<template>
<div>
  <div class="map-frame">
    <iframe class='iframe' width='581' height='401' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?&amp;q=" + "placeAddress" + "&amp;output=embed'></iframe>
  </div>
  <div class="map">
    <div class="place">Место</div>
    <div class="address">{{ placeAddress }}</div>
  </div>
</div>
</template>

<script>
export default {
name: "GoogleMap",
  props: ['placeAddress']
}
</script>

<style>
.place {
  background-image: url(../img/icons/place.svg);
  font-size: 14px;
  line-height: 17px;
  color: #505050;
  background-repeat: no-repeat;
  padding: 4px 27.5px;
  margin: 0 24px;
  background-position: left;
}
.address {
  font-size: 18px;
  line-height: 120%;
  color: #18191A;
  margin: 20px 0;
}

.map {
  padding: 0 24px;
}
</style>