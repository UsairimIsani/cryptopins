<template src="./index.html">


</template>
<script >
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    navigateTo(destination) {
      this.$router.push(destination);
    },
    logout() {
      localStorage.clear();
      this.$router.replace("/login");
    }
  },
  computed: {
    ...mapState({
      user: state => state.User.user
    })
  }
};
</script>
<style lang="scss" scoped >
.nav-container {
  border: 1px solid #dedede;
  height: 9vh;
  display: flex;
  align-items: center;
}
.padding {
  padding: 1%;
}
.logo {
  font-family: "Courier New", Courier, monospace;
  font-size: 3vh;
}

.navicon-custom {
  margin: auto;
  font-size: 4vh;
  cursor: pointer;
}
.grey-background {
  background: #efefef;
}
.side-nav {
  justify-content: flex-start;
  display: flex;
  align-items: center;
  margin-left: 0%;
  flex-direction: column;
  height: 100%;
  border: 1px solid #dedede;
  border-top: 0;
  height: 91vh;
}
.content {
  height: 91vh;
}
// @media all and (min-height: 500px) and (max-height: 1024px) {
//   .side-nav,
//   .content {
//     height: 95vh;
//   }
// }
.transition {
  transition: all 0.4s ease-in;
}
.nav-img {
  height: 3vh;
}
img[class="profile-img"] {
  width: 5vh;
  border-radius: 50%;
}
.profile-img {
  font-size: 5vh;
  border-radius: 50%;
}
.profile-select {
  cursor: pointer;
  display: flex;
  margin: 5% 0 5% 0;
  align-items: center;
  i {
    font-size: 3vh;
  }
  span {
    font-size: 2vh;
    margin: 0 9%;
  }
}
</style>
