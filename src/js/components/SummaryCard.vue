<template>
  <div class="current-summary-card">
    <div class="selected-car">
      <div class="badge pill">NEW</div>
      <div class="car-image">
        <img :src="$root.$data.selectedCar.image" :alt="$root.$data.selectedCar.name">
      </div>
    </div>
    <div class="current-total-price">
      {{ $filters.formatPrice($root.$data.totalPrice) }} TL
    </div>
    <div class="next" @click="$root.$data.activetab = $root.$data.nexttab.link">
      {{$root.$data.nexttab.name}}
      <i :class="$root.$data.nexttab.icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "SummaryCard"
}
</script>

<style scoped>

</style>