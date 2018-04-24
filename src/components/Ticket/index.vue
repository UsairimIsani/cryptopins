<template src="./index.html">

</template>
<script>
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
      expiry: Date
    }
  },
  data() {
    return {
      timer: 0
    };
  },
  created() {
    console.log("Expiry");
    setInterval(() => {
      this.timer++;
    }, 1000);
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
  flex-basis: 300px;
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
  font-size: 26px;
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
  font-size: 5em;
}
</style>
