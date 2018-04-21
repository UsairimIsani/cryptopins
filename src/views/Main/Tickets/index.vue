<template src="./index.html">
  
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
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
    ...mapActions(["getTickets"])
  }
};
</script>
<style lang="scss" scoped>
.ivu-card {
  margin: 1%;
  /* height: 200px; */
  /* min-width: 290px; */
  flex-basis: 300px;
  flex-grow: 1;
  flex-shrink: 1;
  max-width: 500px;
}
.ivu-card-body {
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

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
