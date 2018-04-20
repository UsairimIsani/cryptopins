<template src="./index.html">
  
</template>
<script>
export default {
  data() {
    return {
      tickets: [
        {
          id: "12312",
          currentValue: "Hello",
          buyInPrice: {
            amount: 23,
            currency: "BTC"
          },
          bidders: [
            {
              name: "Usairim Isani",
              id: "1"
            }
          ],
          buyIns: 2
        },
        {
          id: "12123",
          currentValue: "Hello",
          buyInPrice: {
            amount: 23,
            currency: "BTC"
          },
          bidders: [
            {
              name: "Usairim Isani",
              id: "1"
            }
          ],
          buyIns: 2
        },
        {
          id: "13123",
          currentValue: "Hello",
          buyInPrice: {
            amount: 23,
            currency: "BTC"
          },
          bidders: [
            {
              name: "Usairim Isani",
              id: "1"
            }
          ],
          buyIns: 2
        },
        {
          id: "13asd123",
          currentValue: "Hello",
          buyInPrice: {
            amount: 23,
            currency: "BTC"
          },
          bidders: [
            {
              name: "Usairim Isani",
              id: "1"
            }
          ],
          buyIns: 2
        },
        {
          id: "13asd123",
          currentValue: "Hello",
          buyInPrice: {
            amount: 23,
            currency: "BTC"
          },
          bidders: [
            {
              name: "Usairim Isani",
              id: "1"
            }
          ],
          buyIns: 2
        },
        {
          id: "13asd123",
          currentValue: "Hello",
          buyInPrice: {
            amount: 23,
            currency: "BTC"
          },
          bidders: [
            {
              name: "Usairim Isani",
              id: "1"
            }
          ],
          buyIns: 2
        },
        {
          id: "13asd123",
          currentValue: "Hello",
          buyInPrice: {
            amount: 23,
            currency: "BTC"
          },
          bidders: [
            {
              name: "Usairim Isani",
              id: "1"
            }
          ],
          buyIns: 2
        },
        {
          id: "13asd123",
          currentValue: "Hello",
          buyInPrice: {
            amount: 23,
            currency: "BTC"
          },
          bidders: [
            {
              name: "Usairim Isani",
              id: "1"
            }
          ],
          buyIns: 2
        },
        {
          id: "13asd123",
          currentValue: "Hello",
          buyInPrice: {
            amount: 23,
            currency: "BTC"
          },
          bidders: [
            {
              name: "Usairim Isani",
              id: "1"
            }
          ],
          buyIns: 2
        },
        {
          id: "13asd123",
          currentValue: "Hello",
          buyInPrice: {
            amount: 23,
            currency: "BTC"
          },
          bidders: [
            {
              name: "Usairim Isani",
              id: "1"
            }
          ],
          buyIns: 2
        }
      ]
    };
  },
  methods: {
    log(something) {
      console.log(something.toString(), something);
    }
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
