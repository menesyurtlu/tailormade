<template>
  <div>
    <ul class="configurator-menu">
      <li class="menu-item" :class="{ active: $root.$data.activetab === 'car-selector' }"
          @click="$root.$data.activetab = 'car-selector'">
        <div class="menu-link">
          MODELS
        </div>
      </li>
      <li class="menu-item" :class="{ active: $root.$data.activetab === 'color-selector' }"
          @click="$root.$data.activetab = 'color-selector'">
        <div class="menu-link">
          COLORS
        </div>
      </li>
      <li class="menu-item" :class="{ active: $root.$data.activetab === 'accessory-selector' }"
          @click="$root.$data.activetab = 'accessory-selector'">
        <div class="menu-link">
          ACCESSORIES
        </div>
      </li>
      <li class="menu-item" :class="{ active: $root.$data.activetab === 'summary' }"
          @click="$root.$data.activetab = 'summary'">
        <div class="menu-link">
          SUMMARY
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menu"
}
</script>

<style scoped>

</style>