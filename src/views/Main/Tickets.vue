<template>
  <div>
    <div >
      <vs-button vs-type="success-filled" v-bind:key="ticket" v-for="ticket in tickets" >
        <div>{{ticket.currentValue}}</div>
        <div>{{ticket.buyInPrice.amount}}</div>
        <div>{{ticket.buyInPrice.currency}}</div>
      </vs-button>
      <Card style="width:320px" v-bind:key="ticket" v-for="ticket in tickets">
        <div style="text-align:center">
        <div>{{ticket.currentValue}}</div>
        <div>{{ticket.buyInPrice.amount}}</div>
        <div>{{ticket.buyInPrice.currency}}</div>
        </div>
    </Card>
    <vs-button vs-type="primary-border" v-bind:key="ticket" v-for="ticket in tickets" @click="log('Do Something')">
        <div>{{ticket.currentValue}}</div>
        <div>{{ticket.buyInPrice.amount}}</div>
        <div>{{ticket.buyInPrice.currency}}</div>
    </vs-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tickets: [
        {
          id: "123123",
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
          id: "123123",
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
          id: "123123",
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
  methods() {
    return {
      log(something) {
        console.log(something.toString(), something);
      }
    };
  }
};
</script>
