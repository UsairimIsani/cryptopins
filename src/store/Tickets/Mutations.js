import ACTIONS from "../ACTION_CONSTANTS";
import Vue from "vue";

export default {
  [ACTIONS.GET_ALL_TICKETS](state, payload) {
    Vue.set(state, "tickets", payload.data);
  },
  [ACTIONS.CREATE_TICKET](state, payload) {
    state = { tickets: state.tickets.push(payload) };
  }
};
1 + 1;
