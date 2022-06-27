window.Vue = require('vue');

import {createApp} from 'vue';
import Vue2Filters from 'vue2-filters'

import CarConfigurator from './components/CarConfigurator';
import CarSelector from './components/CarSelector';
import ColorSelector from "./components/ColorSelector";
import AccessorySelector from "./components/AccessorySelector";
import SummaryPage from "./components/Summary";
import SummaryCard from "./components/SummaryCard";
import HeaderMenu from "./components/Menu";

const app = createApp({
    data() {
        return {
            activetab: "car-selector",
            nexttab: {
                name : "COLOR",
                link: "color-selector"
            },
            selectedCar: {},
            totalPrice:0
        }
    },
    watch: {
        selectedCar: function(val) {
            //do something when the data changes.
            if (val) {
                // Set total price
                this.totalPrice = val.price;
                // Set default color
                this.$root.$data.selectedCar.selectedColor = val.colors[0]
            }
        }
    }
});

app.component('HeaderMenu', HeaderMenu);
app.component('CarConfigurator', CarConfigurator);
app.component('CarSelector', CarSelector);
app.component('ColorSelector', ColorSelector);
app.component('AccessorySelector', AccessorySelector);
app.component('SummaryPage', SummaryPage);
app.component('SummaryCard', SummaryCard);

// Global Filters
app.config.globalProperties.$filters = {
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
}
// Mount App
app.mount('#app');
