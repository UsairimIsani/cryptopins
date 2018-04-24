import ACTIONS from "../ACTION_CONSTANTS";
import Vue from "vue";

export default {
  [ACTIONS.GET_ALL_TICKETS](state, payload) {
    console.log(payload);
    console.log("state", state);
    Vue.set(state, "tickets", payload.data);
    console.log("state", state);
  },
  [ACTIONS.CREATE_TICKET](state, payload) {
    state = { tickets: state.tickets.push(payload) };
  }
};
