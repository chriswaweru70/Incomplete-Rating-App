import Vue from "vue";
import App from "./App.vue";
import Rating from "./components/RatingComponent";

Vue.config.productionTip = false;

Vue.component(Rating);

new Vue({
  render: h => h(App)
}).$mount("#app");
