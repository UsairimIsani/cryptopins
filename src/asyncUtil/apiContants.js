/* eslint-disable */

let SERVER = `localhost`;
let SERVER_PORT = `3000`;
const Constants = {
  api: ``,
};
// if (window.location.href.includes("surge")) {
Constants.api = `https://cryptopins-api.herokuapp.com/api/`;
// } else {
// Constants.api = `http://${SERVER}:${SERVER_PORT}/api`;
// }
export default Constants;
