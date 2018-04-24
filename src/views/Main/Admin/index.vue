<template src="./index.html">
</template>
<style lang="scss" scoped>
.datetimepicker {
  width: 100%;
  padding: 1%;
  .ivu-date-picker {
    width: 100%;
  }
}
.padding {
  padding: 1%;
}
</style>
<script>
import { mapActions } from "vuex";
import Ticket from "../../../components/Ticket";
import ACTIONS from "../../../store/ACTION_CONSTANTS";
export default {
  components: {
    Ticket
  },
  data() {
    return {
      options: [
        { text: "Ethereum", value: 0 },
        { text: "Bitcoin", value: 1 },
        { text: "Bitcoin Cash", value: 2 },
        { text: "Litecoin", value: 3 }
      ],
      ticket: {
        title: "",
        buyInPrice: {
          amount: "",
          currency: ""
        },
        currentValue: 0,
        expiry: ""
      }
    };
  },
  methods: {
    log() {
      console.log(this.currency);
    },
    ...mapActions([ACTIONS.CREATE_TICKET]),
    createTicket() {
      console.log("TICKET", this.ticket);
      this.CREATE_TICKET({ ticket: this.ticket });
    }
  }
};
</script>
