import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css"; //vuesax styles
import iView from "iview";
import "iview/dist/styles/iview.css";
Vue.use(Vuesax);
Vue.use(iView);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
