import ACTIONS from "../ACTION_CONSTANTS";
import cryptopins from "../../asyncUtil/cryptopins";
import router from "../../router";
import vue from "../../main";
export default {
  [ACTIONS.LOGIN](ctx, payload) {
    cryptopins
      .post(`user/login`, payload.user)
      .then(res => {
        res.json().then(userData => {
          ctx.commit(ACTIONS.LOGIN, userData);
          if (payload.rememberMe) {
            localStorage.setItem("token", userData.data.token);
            localStorage.setItem("user", userData.data.use._id);
          }
          vue.$vs.notify({
            title: "Success",
            text: "You have Successfully Logged In.",
            color: "success",
            position: "top-right"
          });
        });
      })
      .catch(err => {
        ctx.commit(ACTIONS.LOGIN_ERR, err);
      });
  },
  [ACTIONS.REGISTER](ctx, payload) {
    cryptopins
      .post(`user/register?signin=${payload.signIn}`, payload.user)
      .then(res => {
        res
          .json()
          .then(userData => {
            ctx.commit(ACTIONS.REGISTER, userData);
          })
          .catch(() => {
            router.push("/login");
          });
      })
      .catch(err => {
        ctx.commit(ACTIONS.REGISTER_ERR, err);
      });
  },
  [ACTIONS.VERIFY_ME](ctx) {
    cryptopins
      .get(`user/me`)
      .then(res => {
        res
          .json()
          .then(userData => {
            ctx.commit(ACTIONS.VERIFY_ME, userData);
          })
          .catch(() => {
            router.push("/login");
          });
      })
      .catch(err => {
        ctx.commit(ACTIONS.VERIFY_ME, err);
        router.push("/login");
      });
  }
};
