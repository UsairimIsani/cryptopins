export default {
  isVerified(state) {
    console.log("IN VEIFIED", state);
    console.log("IN VIERasdadk", state.user.verified);
    return state.user.verified;
  }
};
