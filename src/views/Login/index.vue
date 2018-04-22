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
      if (this.valid.email && this.valid.password) {
        let user = {
          username: this.email,
          password: this.password
        };
        this.password = "";
        this.email = "";
        this.LOGIN({
          user,
          rememberMe: this.rememberMe
        });
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
