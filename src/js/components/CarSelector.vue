<template>
  <div class="page">
    <div class="row g-5 mb-5">
      <div class="col-12 col-md-6 col-lg-6" v-for="car in cars">
        <div class="car-box" :class="{ selected: $root.$data.selectedCar.name === car.name }">
          <h2 class="car-model-name">{{ car.name }}</h2>
          <div class="car-image">
            <img :src="car.image" :alt="car.name">
          </div>
          <div class="info-text">
            <strong>{{ $filters.formatPrice(car.price) }} TL</strong>'den başlayan fiyatlarla
          </div>
          <div class="btn btn-secondary car-button" @click="$root.$data.selectedCar = car">
            SELECT
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarSelector",
  props: [
      "cars"
  ],
  mounted() {
    this.$root.$data.nexttab = {
      name : "COLORS",
      link: "color-selector",
      icon: "tskn-icon-arrow-right"
    };

    // Set default color
    this.$root.$data.selectedCar.selectedColor = this.$root.$data.selectedCar.colors[0]
  }
}
</script>

<style scoped>

</style>