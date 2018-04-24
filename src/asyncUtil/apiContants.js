let SERVER = `192.168.1.102`;
let SERVER_PORT = `3000`;
const Constants = {
  api: ``
};
if (window.location.href.includes("surge")) {
  Constants.api = ``;
} else {
  Constants.api = `http://${SERVER}:${SERVER_PORT}/api`;
}
export default Constants;
