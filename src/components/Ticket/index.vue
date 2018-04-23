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
      buyIns: Number
    }
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
</style>
