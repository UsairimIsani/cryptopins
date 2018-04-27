import Vue from "vue";
import Vuex from "vuex";
import Tickets from "./Tickets";
import User from "./User";
import Misc from "./Misc";
import Charges from "./Charges";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    User,
    Tickets,
    Charges,
    Misc
  }
});
