import ACTIONS from "../ACTION_CONSTANTS";
import cryptopins from "../../asyncUtil/cryptopins";
export default {
  [ACTIONS.LOGIN](ctx, user) {
    return cryptopins.post(`users/register`, user);
  },
  [ACTIONS.REGISTER](ctx, user) {
    //cryptopins.post(`register`, user);
    console.log("HELLO", user);
  }
};
