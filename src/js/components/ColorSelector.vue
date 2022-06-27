<template>
  <div class="page d-flex flex-column justify-content-center align-items-center">
    <div class="info-text">
      Hayalindeki araca dair rengini seç, tarzını hemen yansıt
    </div>
    <div class="single-car-box">
      <h2 class="car-model-name">{{ $root.$data.selectedCar.name }}</h2>
      <div class="car-image">
        <img :src="$root.$data.selectedCar.image" :alt="$root.$data.selectedCar.name">
      </div>
    </div>
    <div class="colors">
      <div class="color" @click="$root.$data.selectedCar.selectedColor = color" :class="{ selected: $root.$data.selectedCar.selectedColor.slug === color.slug }" :style="color.style" v-for="(color, index) in $root.$data.selectedCar.colors"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ColorSelector",
  mounted() {
    this.$root.$data.nexttab = {
      name : "ACCESSORY",
      link: "accessory-selector",
      icon: "tskn-icon-arrow-right"
    };
  }
}
</script>

<style scoped>

</style>