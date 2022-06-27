<template>
  <header-menu></header-menu>
  <div class="tab-contents">
    <div v-if="$root.$data.activetab ==='car-selector'">
      <car-selector :cars="cars"></car-selector>
    </div>
    <div v-if="$root.$data.activetab ==='color-selector'">
      <color-selector></color-selector>
    </div>
    <div v-if="$root.$data.activetab ==='accessory-selector'">
      <accessory-selector></accessory-selector>
    </div>
    <div v-if="$root.$data.activetab ==='summary'">
      <summary-page></summary-page>
    </div>
  </div>
  <summary-card></summary-card>
</template>

<script>
export default {
  name: "CarConfigurator",
  components: {},
  data() {
    return {
      cars: [
        {
          name: 'IBIZA',
          model: "Ibiza 1.3 Ecotech DSG",
          image: '/assets/img/car_red.png',
          price: 193500,
          accessories: [
            "Boost Pack",
            "Light Plus"
          ],
          selectedColor: "rosered",
          colors: [
            {
              name: "Rose Red",
              slug: "rosered",
              style: "background: #d01200",
              setting: ""
            },
            {
              name: "Jet Black",
              slug: "black",
              style: "background: black",
              setting: "filter: saturate(0)"
            },
            {
              name: "Gray",
              slug: "gray",
              style: "background: #d2d2d2",
              setting: "filter: saturate(0)"
            }
          ]
        },
        {
          name: 'ARONA',
          model: "Arona 1.3 Ecotech DSG",
          image: '/assets/img/car_orange.png',
          price: 220500,
          accessories: [
              "Boost Pack",
              "Light Plus"
          ],
          selectedColor: "orange",
          colors: [
            {
              name: "Orange",
              slug: "orange",
              style: "background: orange",
              setting: "filter: saturate(1)"
            },
            {
              name: "Red",
              slug: "red",
              style: "background: #d01200",
              setting: ""
            },
            {
              name: "Gray",
              slug: "gray",
              style: "background: #d2d2d2",
              setting: "filter: saturate(0)"
            }
          ]
        }]
    }
  },
  created() {
    this.$root.$data.selectedCar = this.cars[0]
  }
}
</script>