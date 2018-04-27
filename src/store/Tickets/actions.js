import ACTIONS from "../ACTION_CONSTANTS";
import cryptopins from "../../asyncUtil/cryptopins";
export default {
  [ACTIONS.GET_ALL_TICKETS](ctx) {
    cryptopins.get(`tickets/`).then(res => {
      res.json().then(data => {
        if (data.success) {
          ctx.commit(ACTIONS.GET_ALL_TICKETS, data);
        } else {
          ctx.commit(ACTIONS.GET_ALL_TICKETS_ERR);
        }
      });
    });
  },
  [ACTIONS.CREATE_TICKET](ctx, payload) {
    cryptopins.post(`tickets/`, payload.ticket).then(res => {
      res.json().then(data => {
        if (data.success) {
          ctx.commit(ACTIONS.CREATE_TICKET, data.data);
        } else {
          ctx.dispatch(ACTIONS.CREATE_TICKET_ERR, data.message);
        }
      });
    });
  }

  // [ACTIONS.UPDATE_TICKET](ctx, payload) {}
};
