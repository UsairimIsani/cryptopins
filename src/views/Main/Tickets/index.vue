<template src="./index.html">
  
</template>
<script>
import { mapState, mapActions } from "vuex";
import Ticket from "../../../components/Ticket";
import ACTION_CONSTANTS from "../../../store/ACTION_CONSTANTS";
export default {
  components: {
    Ticket
  },
  data() {
    return {
      // ...mapState(["tickets"])
    };
  },
  computed: {
    ...mapState({
      tickets: state => {
        return state.Tickets.tickets;
      }
    })
  },
  methods: {
    log(something) {
      console.log(something.toString(), something);
    },
    ...mapActions([ACTION_CONSTANTS.GET_ALL_TICKETS])
  },
  created() {
    this.GET_ALL_TICKETS();
  }
};
</script>
<style lang="scss" scoped>
.flex-wrap {
  flex-wrap: wrap;
}
.flex-align-content {
  align-content: flex-start;
}
.overflow {
  overflow: auto;
}
</style>
