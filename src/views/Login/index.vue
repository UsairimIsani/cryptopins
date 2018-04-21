<script >
import { mapActions } from "vuex";
import ACTIONS from "../../store/ACTION_CONSTANTS";
export default {
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
      valid: {
        email: false,
        password: false
      }
    };
  },
  methods: {
    ...mapActions([ACTIONS.LOGIN]),
    login() {
      // if (this.valid.email && this.valid.password) {
      let user = {
        username: this.email,
        password: this.password
      };
      this.password = "";
      this.email = "";
      this.LOGIN(user)
        .then(res => {
          console.log("RES", res);
          return res.json();
        })
        .then(res => {
          console.log("RES", res);
        })
        .catch(err => {
          console.log("RES", err);
        });
      // }
    }
  }
};
</script>
<style lang="scss" scoped>
.padding-5 {
  padding: 5%;
}
.remeber-me {
  align-self: flex-start;
  margin: 2% 0;
}
.background-login {
}
</style>
<template src="./index.html">
</template>
