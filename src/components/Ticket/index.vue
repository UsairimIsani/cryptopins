<template src="./index.html">

</template>
<script>
import moment from "moment";
export default {
  props: {
    ticket: {
      _id: String,
      currentValue: Number,
      buyInPrice: {
        amount: Number,
        currency: String
      },
      bidders: [String],
      buyIns: Number,
      duration: [Date]
    }
  },
  data() {
    return {
      timer: 0,
      progress: 0,
      inteval: ""
    };
  },
  created() {
    if (
      this.ticket &&
      this.ticket.duration &&
      this.ticket.duration.length > 0
    ) {
      this.inteval = setInterval(() => {
        let now = new Date().getTime();
        let expiry = new Date(this.ticket.duration[1]).getTime();
        let distance = expiry - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (days < 0) {
          this.timer = `Ticket Expired`;
        } else {
          this.timer = `${days} D ${hours} H ${minutes} M ${seconds} S`;
        }
        let a = moment(this.ticket.duration[0]);
        let c = moment();
        let b = moment(this.ticket.duration[1]);
        let aStart = b.diff(a);
        let aNow = c.diff(a);
        this.progress =
          Math.floor(aNow / aStart * 100) > 100
            ? 100
            : Math.floor(aNow / aStart * 100);
      }, 1000);
    }
  },
  destroyed() {
    clearInterval(this.interval);
  }
};
</script>
<style lang="scss" scoped>
.ivu-card {
  margin: 1%;
  height: 200px;
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
.ticket {
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: block;
  outline-color: rgb(255, 255, 255);
  text-align: left;
  text-decoration-color: rgb(255, 255, 255);
  word-spacing: 0px;
  writing-mode: horizontal-tb;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  height: 200px;
  flex-basis: 250px;
  flex-grow: 1;
  flex-shrink: 1;
  max-width: 500px;
  margin: 10px;
  width: 100%;
}
.ticket-container {
  display: flex;
  flex-direction: column;
}
.ticket-title {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.ticket-body {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.ticket-footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.timer {
  font-size: 16px;
  text-align: right;
}
.bidders {
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 30px;
  }
  span {
    font-size: 20px;
    margin: 0 5px;
  }
}
.current-value {
  font-size: 3em;
}
</style>
