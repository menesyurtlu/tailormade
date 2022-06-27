<template>
  <div class="row justify-content-center align-items-center mb-5 g-5">
    <div class="col-12 col-md-6 col-lg-6">
      <div class="car-box selected clear-before">
        <h2 class="car-model-name">{{ $root.$data.selectedCar.name }}</h2>
        <div class="car-image" style="margin-top: 25% !important; margin-bottom: 25%">
          <img :alt="$root.$data.selectedCar.name" :src="$root.$data.selectedCar.image">
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-6">
      <div class="summary-info">
        <div class="car-model">
          {{ $root.$data.selectedCar.model }}
        </div>
        <div class="car-color">
          {{ colorName($root.$data.selectedCar.selectedColor) }}
        </div>
        <div class="car-accessories">
          {{ $root.$data.selectedCar.accessories.join(' + ') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Summary",
  methods: {
    colorName: (selectedColor) => {
      return selectedColor.name
    }
  },
  mounted() {
    console.log(this.$root.$data.selectedCar)
    this.$root.$data.nexttab = {
      name: "BUY NOW",
      link: "summary",
      icon: "tskn-icon-shopping-cart"
    };
  }
}
</script>

<style scoped>

</style>