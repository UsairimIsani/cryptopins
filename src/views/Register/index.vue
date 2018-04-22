<script>
import ACTIONS from "../../store/ACTION_CONSTANTS";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      rePassword: "",
      signIn: false,
      valid: {
        email: false,
        password: false,
        rePassword: false
      }
    };
  },
  methods: {
    ...mapActions([ACTIONS.REGISTER]),
    register() {
      if (
        this.valid.email &&
        this.valid.password &&
        this.valid.rePassword &&
        this.password.toString() === this.rePassword.toString()
      ) {
        let user = {
          username: this.email,
          password: this.password
        };

        this.REGISTER({
          user,
          signIn: this.signIn
        });
        this.email = "";
        this.password = "";
        this.rePassword = "";
      }
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
</style>
<template src="./index.html">

</template>
