<template>
  <div class="page d-flex flex-column justify-content-center align-items-center">
    <div class="info-text">
      Seçtiğin araca ait özellikler, konforun ve yaşam stilini belirler.
    </div>
    <div class="row g-3 accessory-list">
      <div class="col-12 col-md-4 col-lg-4">
        <div class="accessory-card">
          <div class="name">SEAT FREE SYNC PACK EASY JET</div>
          <div class="price">{{ $filters.formatPrice(7500) }} TL</div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <div class="accessory-card">
          <div class="name">SEAT FREE SYNC PACK EASY JET</div>
          <div class="price">{{ $filters.formatPrice(7500) }} TL</div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <div class="accessory-card">
          <div class="name">SEAT FREE SYNC PACK EASY JET</div>
          <div class="price">{{ $filters.formatPrice(7500) }} TL</div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <div class="accessory-card">
          <div class="name">SEAT FREE SYNC PACK EASY JET</div>
          <div class="price">{{ $filters.formatPrice(7500) }} TL</div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <div class="accessory-card">
          <div class="name">SEAT FREE SYNC PACK EASY JET</div>
          <div class="price">{{ $filters.formatPrice(7500) }} TL</div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <div class="accessory-card">
          <div class="name">SEAT FREE SYNC PACK EASY JET</div>
          <div class="price">{{ $filters.formatPrice(7500) }} TL</div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <div class="accessory-card">
          <div class="name">SEAT FREE SYNC PACK EASY JET</div>
          <div class="price">{{ $filters.formatPrice(7500) }} TL</div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 col-lg-4">
        <div class="accessory-card">
          <div class="name">SEAT FREE SYNC PACK EASY JET</div>
          <div class="price">{{ $filters.formatPrice(7500) }} TL</div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccessorySelector",
  mounted() {
    this.$root.$data.nexttab = {
      name : "SUMMARY",
      link: "summary",
      icon: "tskn-icon-arrow-right"
    };
  }
}
</script>

<style scoped>

</style>