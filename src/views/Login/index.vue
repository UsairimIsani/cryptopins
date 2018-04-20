<template src="./index.html">
</template>
<script >
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
    login() {
      if (
        this.email.toString() === "admin@admin.com" &&
        this.password.toString() === "!123asdF"
      ) {
        this.$router.replace({ path: "/app/tickets" });
      } else {
        this.$router.push({ path: "/login" });
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
.background-login {
}
</style>
