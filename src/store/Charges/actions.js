import ACTIONS from "../ACTION_CONSTANTS";
import cryptopins from "../../asyncUtil/cryptopins";
export default {
  [ACTIONS.CREATE_CHARGE](ctx, payload) {
    cryptopins
      .post("coinbase/charges", { ticketId: payload.ticketId })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        let a = document.createElement("a");
        a.style.display = "none";
        a.href = res.charge.hosted_url;
        a.target = "_blank";
        a.click();
        ctx.commit([ACTIONS.CREATE_CHARGE], res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
