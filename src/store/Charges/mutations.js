import ACTIONS from "../ACTION_CONSTANTS";
import Vue from "vue";

export default {
  [ACTIONS.GET_ALL_CHARGES](state, payload) {
    Vue.set(state, "charges", payload.data);
  },
  [ACTIONS.CREATE_CHARGE](state, payload) {
    state.charges.push(payload.data);
  }
};
